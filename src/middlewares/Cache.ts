import {objectToQueryString} from "../internal/formatting";
import {FetchHeaders, FetchRequest, FetchResponse} from "./Fetch";

import {IMiddleware} from "../Stack";

// Represents nature of cache entry that is persisted into the configured engine.
export interface ICacheEntry {
    value: string;      // text representation of response payload
    type: string;       // the response type.
    url: string;        // the url that responded original cache response
    status: number;     // http response status
    statusText: string; // http response status text. eg: OK
    timestamp: number;  // create timestamp in milliseconds: +Date.now()
    headers: {[index: string]: any}; // response headers
}

// Represents cache options for each cache buckets added to the cache middleware
export interface IFetchRequestCacheOptions {
    enable: boolean;
    maxAge?: number; // cache ttl in seconds, defaults to 0 = forever
    key?: string; // optionally a specific key to be used in place of the generated hash
}

// Represents the storage engine functionality
export interface ICacheMiddlewareStore {
    setItem(key: string, value: string): void;
    getItem(key: string): string|undefined;
    removeItem(key: string): void;
}

// noinspection TsLint
declare const Response: FetchResponse<string>;

export class Cache implements IMiddleware<FetchRequest, Promise<FetchResponse<any>>> {
    protected fallbackStorage: {[index: string]: any} = {};

    /**
     * Constructor.
     *
     * Accepts storage instance.
     *
     * @param {ICacheMiddlewareStore|undefined} config
     */
    public constructor(protected storage: ICacheMiddlewareStore|undefined = undefined) {
    }

    /**
     * Process the request. First try if we have cache and serve right away,
     * else let the next middleware in pileline be invoked and cache it.
     *
     * @param  {FetchRequest} options
     * @param  {callback}     next
     * @return {any}
     */
    public process(options: FetchRequest, next: (nextOptions: FetchRequest) => Promise<FetchResponse<any>>): any {
        // Cache not configured/enabled
        if (!options.cache || !options.cache.enable) { return next(options); }

        const key = this.getCacheKey(options);
        let entry = this.storage && this.storage.getItem(key) || this.fallbackStorage[key];

        /* istanbul ignore else */
        if (!entry) { return next(options).then((response) => this.setCache(key, response)); }

        try {
            entry = JSON.parse(entry);
        } catch (e) {
            // Cache invalid, proceed normally
            return next(options).then((response) => this.setCache(key, response));
        }

        // Cache expired, pass to next and set cache again
        if (options.cache.maxAge && +Date.now() > (entry.timestamp + options.cache.maxAge * 1000)) {
            return next(options).then((response) => this.setCache(key, response));
        }

        return this.getCachedResponse(entry);
    }

    /**
     * Persists the cache to storage configured, or in memory if that fails.
     *
     * @param   {string}        key
     * @param   {FetchResponse} response
     * @returns {FetchResponse}
     */
    private setCache(key: string, response: FetchResponse<any>): FetchResponse<any> {
        const headers: FetchHeaders = {};
        const clone: FetchResponse<any> = response.clone();

        /* istanbul ignore else */
        if (clone.headers) { clone.headers.forEach((value: string, name: string) => headers[name] = value ); }

        clone.text().then((value: string) => {
            const entry = JSON.stringify({
                value,
                type: clone.type,
                url: clone.url,
                status: clone.status,
                statusText: clone.statusText,
                timestamp: +Date.now(),
                headers
            });

            if (this.storage) {
                try {
                    this.storage.setItem(key, entry);
                } catch (e) {
                    /* istanbul ignore next */
                    this.fallbackStorage[key] = entry;
                }
            } else {
                this.fallbackStorage[key] = entry;
            }
        });

        return response;
    }

    /**
     * Returns a Promise that resolves to Response object using cached payload and headers.
     *
     * @return {Promise}
     */
    private getCachedResponse(cachedEntry: ICacheEntry): Promise<FetchResponse<any>> {
        const response: FetchResponse<any> = new Response(cachedEntry.value, cachedEntry);

        response.cacheUsed = true;
        response.cacheTimestamp = cachedEntry.timestamp;

        return Promise.resolve(response);
    }

    /**
     * Gets the normalized cache key which is unique to request with respect to uri and params.
     *
     * @param  {FetchRequest} options
     * @return {string}
     */
    private getCacheKey(options: FetchRequest): string {
        let key: string = (options.cache && options.cache.key) || options.url || "";

        if (options.queryParameters) {
            key += "?" + objectToQueryString(options.queryParameters);
        }

        // @todo Maybe hashing?
        return key;
    }
}