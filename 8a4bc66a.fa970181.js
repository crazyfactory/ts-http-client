(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(91)),i={id:"order-of-middlewares",title:"Order of middleware",sidebar_label:"Order of Middlewares"},c={unversionedId:"introduction/order-of-middlewares",id:"introduction/order-of-middlewares",isDocsHomePage:!1,title:"Order of middleware",description:"If we look at Stack's process method, everything's quite clear, it simply creates a chain,",source:"@site/docs/introduction/3-order-of-middlewares.md",slug:"/introduction/order-of-middlewares",permalink:"/tinka/docs/introduction/order-of-middlewares",editUrl:"https://github.com/crazyfactory/tinka/edit/master/docs/docs/introduction/3-order-of-middlewares.md",version:"current",sidebar_label:"Order of Middlewares",sidebar:"someSidebar",previous:{title:"Core Concepts",permalink:"/tinka/docs/introduction/core-concepts"},next:{title:"Browser Support",permalink:"/tinka/docs/introduction/browser-support"}},s=[],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"If we look at ",Object(o.a)("inlineCode",{parentName:"p"},"Stack"),"'s ",Object(o.a)("inlineCode",{parentName:"p"},"process")," method, everything's quite clear, it simply creates a chain,\nUnlike other http clients like axios, Tinka actually exposes a ",Object(o.a)("inlineCode",{parentName:"p"},"next")," callback."),Object(o.a)("p",null,"It calls latest middleware then moves to the one before it and so on..."),Object(o.a)("p",null,"This opens up a world of possibilities, if you want to enable mock, simply return your mocks instead of calling ",Object(o.a)("inlineCode",{parentName:"p"},"next()"),",\nif you couldn't find appropriate mock value, then you can still choose to call ",Object(o.a)("inlineCode",{parentName:"p"},"next()"),"."),Object(o.a)("p",null,"When you want to know how much time did a request take, then you can even measure in a middleware."),Object(o.a)("p",null,"You can add a JwtMiddleware which adds JWT to request,"),Object(o.a)("p",null,"You can add another RefreshJwtMiddleware which checks if JWT in current request has expired, and if it is, simply make a refresh call first,\nthen proceed with the original request later, this way your developer only deals with expired JWT once per application."),Object(o.a)("p",null,"The possibilities are truly endless."),Object(o.a)("p",null,"Since they're called in a chain-like fashion, obviously the RefreshToken middleware will need to be called after JWT middleware."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'export class LogMw implements IMiddleware<IFetchRequest, Promise<IFetchResponse<any>>> {\n    constructor(private message: string) {\n    }\n\n    public async process(options: IFetchRequest, next: (nextOptions: IFetchRequest) => Promise<IFetchResponse<any>>): Promise<IFetchResponse<any>> {\n        console.log(`before: ${this.message}`);\n        const response = await next(options);\n        console.log(`after: ${this.message}`);\n        return response;\n    }\n}\nconst client = new Client({baseUrl: "https://jsonplaceholder.typicode.com"});\nclient.addMiddleware(new LogMw("1."));\nclient.addMiddleware(new LogMw("2."));\nawait client.process({url: "/todos/1"});\n')),Object(o.a)("p",null,"The above code produces the following output:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"before: 2.\nbefore: 1.\nafter: 1.\nafter: 2.\n")),Object(o.a)("p",null,"So if you had JWT middleware and refresh token middleware,\nYou want to add RefreshToken first, JWT later."),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Think Dependency")),Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"You want to add the dependent middleware first and non dependent later."))))}d.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);