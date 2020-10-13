(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(91)),o={id:"fetch",title:"FetchMiddleware",sidebar_label:"Fetch"},c={unversionedId:"middlewares/fetch",id:"middlewares/fetch",isDocsHomePage:!1,title:"FetchMiddleware",description:"This is the one and only default middleware which is added to all Clients, there's really no reason to initialize Stack without this.",source:"@site/docs/middlewares/1-fetch.md",slug:"/middlewares/fetch",permalink:"/tinka/docs/middlewares/fetch",editUrl:"https://github.com/crazyfactory/tinka/edit/master/docs/docs/middlewares/1-fetch.md",version:"current",sidebar_label:"Fetch",sidebar:"someSidebar",previous:{title:"Browser Support",permalink:"/tinka/docs/introduction/browser-support"},next:{title:"ContentTypeMiddleware",permalink:"/tinka/docs/middlewares/content-type"}},l=[],d={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This is the one and only default middleware which is added to all ",Object(i.a)("inlineCode",{parentName:"p"},"Client"),"s, there's really no reason to initialize ",Object(i.a)("inlineCode",{parentName:"p"},"Stack")," without this."),Object(i.a)("p",null,"This middleware invoked only if all other middleware called next and didn't do a short circuit."),Object(i.a)("p",null,"Middlewares have ability to short-circuit and return something else entirely (like from a cache)"),Object(i.a)("p",null,"Fetch actually combines the baseUrl with relative path to form a full URL, it simply passes the options down to ",Object(i.a)("inlineCode",{parentName:"p"},"fetch"),"."),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"There's really no reason to initialize this middleware yourself."))))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(f,c(c({ref:t},d),{},{components:n})):a.a.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);