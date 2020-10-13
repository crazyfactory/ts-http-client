(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(91)),i={id:"better-typing",title:"Dealing with boilerplate"},s={unversionedId:"sdk/better-typing",id:"sdk/better-typing",isDocsHomePage:!1,title:"Dealing with boilerplate",description:"The issue we have when we follow guideline described on the previous page is that when you actually get a data,",source:"@site/docs/sdk/2-boilerplate.md",slug:"/sdk/better-typing",permalink:"/tinka/docs/sdk/better-typing",editUrl:"https://github.com/crazyfactory/tinka/edit/master/docs/docs/sdk/2-boilerplate.md",version:"current",sidebar:"someSidebar",previous:{title:"Generating Sdk",permalink:"/tinka/docs/sdk/sdk"},next:{title:"Dealing with status codes",permalink:"/tinka/docs/sdk/status-code"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The issue we have when we follow guideline described on the previous page is that when you actually get a data,\nyou'll have to deal with one more Promise:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const sdk = Sdk.getInstance();\nconst userResponse = await sdk.user.findById(1);\nconst user = await userResponse.json();\n")),Object(o.a)("p",null,"Most of the time, we want the json output already."),Object(o.a)("p",null,"To combat this, we have a way to do better:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'export class UserNode extends Service {\n  @autobind\n  public signUp(request: User): Promise<UserCreatedResponse | ErrorResponse> {\n    return this.client.process({url: "/user/create", method: "POST", body: JSON.stringify(request)});// you can do more here\n  }\n  public findById(id: number): Promise<User> {\n    return this.client.process({url: `/user/${id}`});\n  }\n}\n')),Object(o.a)("p",null,"You can then add a WrapMiddleware on your client like this:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class Sdk extends Service {\n  public static instance: Sdk = null;\n  public static createSdk(baseUrl: string): Sdk {\n    const client = new Client({ baseUrl });\n    client.addMiddleware(new ContentTypeMiddleware());\n    client.addMiddleware(new WrapMiddleware());\n    return new Sdk(client);\n  }\n\n  public get user(): UserNode {\n    return new FeatureRuns(this.client);\n  }\n}\n")),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"WrapMiddleware")," can look like this:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { IFetchRequest, IFetchResponse, IMiddleware } from "@crazyfactory/tinka";\n\nexport class WrapMiddleware implements IMiddleware<IFetchRequest, Promise<IFetchResponse<any>>> {\n  public process(\n    options: IFetchRequest,\n    next: (nextOptions: IFetchRequest) => Promise<IFetchResponse<any>>\n  ): Promise<IFetchResponse<any>> {\n    return next(options).then((response) => response.json());\n  }\n}\n')))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,y=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(y,s(s({ref:t},l),{},{components:n})):a.a.createElement(y,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);