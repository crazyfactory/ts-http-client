(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(93)),c={id:"mock",title:"MockMiddleware",sidebar_label:"MockMiddleware"},i={unversionedId:"middlewares/mock",id:"middlewares/mock",isDocsHomePage:!1,title:"MockMiddleware",description:"This is the most complex middleware in tinka right now.",source:"@site/docs/middlewares/4-mock.md",slug:"/middlewares/mock",permalink:"/tinka/docs/middlewares/mock",editUrl:"https://github.com/crazyfactory/tinka/edit/master/docs/docs/middlewares/4-mock.md",version:"current",sidebar_label:"MockMiddleware",sidebar:"someSidebar",previous:{title:"IncludeCredentialsMiddleware",permalink:"/tinka/docs/middlewares/include-credentials"},next:{title:"Generating Sdk",permalink:"/tinka/docs/sdk/sdk"}},l=[],d={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the most complex middleware in ",Object(o.b)("inlineCode",{parentName:"p"},"tinka")," right now."),Object(o.b)("p",null,"A medium-sized application can grow upto quite a few endpoints, we didn't want to end up with that many middlewares doing complex mocking logic."),Object(o.b)("p",null,"Hence, we created a MockMiddleware which exposes a few functionalities."),Object(o.b)("p",null,"It exposes a helper method called ",Object(o.b)("inlineCode",{parentName:"p"},"resolvingPromise")," which resolves with given data after a certain delay:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'MockMiddleware.resolvingPromise({username: ""}, 200) // resolves after 200ms\n')),Object(o.b)("p",null,"It exposes another helper method called ",Object(o.b)("inlineCode",{parentName:"p"},"jsonResponse")," so we can mock json response inside a ",Object(o.b)("inlineCode",{parentName:"p"},"Response")," object."),Object(o.b)("p",null,"MockMiddleware is basically a collection of handlers which user will add, here's what it might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const mockMw = new MockMiddleware();\nmockMw.addHandler({\n  match: (options: IFetchRequest): boolean => options.method === "GET" && options.url.includes("/user/by_id"),\n  delay: 200,\n  resultFactory: (options: IFetchRequest): Promise<any> => ({email: "mock@mockEmail.com", name: "mock name"}),\n});\n')),Object(o.b)("p",null,"You can add multiple handlers each responding to different URLs,\n",Object(o.b)("inlineCode",{parentName:"p"},"MockMiddleware")," will go through each of them to find which Handler can handle current request,\nonce it finds one, it simply calls the ",Object(o.b)("inlineCode",{parentName:"p"},"resultFactory")," method, and you have control over what happens there,\nyou can simply return a dummy value, choose to treat localStorage as a datastore to store/get values."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Keep mocks always available, simply not include the mock middleware on production environments"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const mockMw = new MockMiddleware();\nmockMw.addHandler();\nmockMw.addHandler();\nmockMw.addHandler();\nmockMw.addHandler();\nif (ENV === "development") { // you can have your own check\n  client.addMiddleware(mockMw);\n}\n')))}s.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,b=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.a.createElement(b,i(i({ref:t},d),{},{components:n})):r.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);