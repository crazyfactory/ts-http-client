import {Cache, ICacheMiddlewareStore} from "./Cache";
import {FetchResponse} from "./Fetch";

declare const Response: FetchResponse<string>;
declare const localStorage: ICacheMiddlewareStore;

describe("Cache", () => {
    it("is defined", () => {
        expect(Cache).toBeDefined();
    });

    describe("constructor()", () => {
        it("can be instantiated", () => {
            expect(new Cache() instanceof Cache).toBeTruthy();
        });

        it("accepts storage engine in instantiation", () => {
            expect(new Cache(localStorage) instanceof Cache).toBeTruthy();
        });
    });

    describe("process()", () => {
        it("is a function", () => {
            expect(typeof (new Cache()).process).toBe("function");
        });

        it("calls next() if cache not enabled", () => {
            const cached = new Cache().process({}, () => "just any thing" as any);

            expect(cached).toBe("just any thing");
        });

        it("calls next() if cache expired", (done) => {
            const cache = { enable: true, maxAge: 10 }; // 10 seconds
            const mock: Promise<any> = Promise.resolve(new Response("fetched response", undefined));

            // Seed the cache with expired timestamp for test
            localStorage.setItem(
                "/test",
                JSON.stringify({
                    value: "cached response",
                    timestamp: +Date.now() - 12000, // 12 seconds before
                    headers: { "Content-Type": "text/html" }
                })
            );

            const cached = new Cache(localStorage).process({ url: "/test", cache }, () => done() && 0 || mock);

            expect(cached instanceof Promise).toBeTruthy();
        });

        it("calls next() if cache invalid/corrupt", (done) => {
            const cache = { enable: true, maxAge: 10 };
            const mock: Promise<any> = Promise.resolve(new Response("fetched response", undefined));

            // Seed the cache with invalid value
            localStorage.setItem("/test1", "\"");

            const cached = new Cache(localStorage).process({ url: "/test1", cache }, () => done() && 0 || mock);

            expect(cached instanceof Promise).toBeTruthy();
        });

        it("returns cached response data as promise", () => {
            const responseText: string = "cached response text";
            const cache = { enable: true, maxAge: 1000 };

            // Seed the cache for test
            localStorage.setItem(
                "/api?cache=exist",
                JSON.stringify({
                    value: responseText,
                    type: "basic",
                    url: "/api?cache=exist",
                    status: 200,
                    statusText: "OK",
                    timestamp: +Date.now(),
                    headers: { "Content-Type": "text/html" }
                })
            );

            const cached = new Cache(localStorage).process({ url: "/api", queryParameters: { cache: "exist" }, cache }, () => false as any);
            expect(cached instanceof Promise).toBeTruthy();

            cached.then((response: FetchResponse<string>) => {
                const cacheMeta = response.cache;

                if (cacheMeta) { // not required but build fails as it is optional type.
                    expect(cacheMeta).toBeTruthy("the cached response should have a cache property");
                    expect(cacheMeta.used).toBe(true);
                    expect(typeof cacheMeta.timestamp).toBe("number");
                }

                response.text().then((text: string) => expect(text).toBe(responseText));
            });
        });

        it("sets response cache when configured", (done) => {
            const responseText: string = "this response text is going to be cached";
            const mock: Promise<any> = Promise.resolve(new Response(responseText, { headers: { "Content-Type": "text/html" }}));
            const cache = { enable: true, maxAge: 1000 };
            const memoryCache = new Cache();

            new Cache(localStorage).process({ url: "/api", queryParameters: { cache: "no_exist" }, cache }, () => mock as any);
            memoryCache.process({ url: "", cache }, () => mock as any);

            setTimeout(
                () => {
                    const cached = localStorage.getItem("/api?cache=no_exist") as string;

                    expect(cached).toBeTruthy();
                    expect(JSON.parse(cached).value).toBe(responseText);

                    // Without maxAge
                    memoryCache.process({ url: "", cache: { enable: true } }, () => false as any).then((response: FetchResponse<string>) => {
                        response.text().then((text: string) => expect(text).toBe(responseText));

                        done();
                    });
                },
                15
            );
        });
    });
});
