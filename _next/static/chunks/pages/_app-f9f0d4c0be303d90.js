(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7571)}])},1356:function(e,t,n){"use strict";n.d(t,{Zb:function(){return o},$_:function(){return a},Ar:function(){return m},W_:function(){return h},$0:function(){return c},al:function(){return l}});var r=n(5893);function o(e){var t=e.children,n=e.className,o=void 0===n?"":n;return(0,r.jsx)("div",{className:"min-w-[500px] max-w-[600px] rounded-lg bg-white p-5 text-black shadow ".concat(o),children:t})}function a(){var e=(new Date).getFullYear();return(0,r.jsxs)("footer",{className:"container mt-10 bg-brand py-4 text-white",children:["\xa9 ",e," Lisa Patel"]})}function l(e){var t=e.header,n=e.subtext;return(0,r.jsxs)("div",{className:"my-5",children:[(0,r.jsx)("h1",{className:"mb-1 text-3xl",children:t}),(0,r.jsx)("span",{children:n})]})}var i=n(4184),u=n.n(i);function c(e){var t=e.children,n=e.type,o=e.className,a=void 0===o?"":o;return(0,r.jsx)("div",{className:u()("py-6",{"bg-brand text-white":"dark"===n,"bg-white text-brand":"light"===n},a),children:t})}var s=n(1664),f=n.n(s),d=n(1163),p=n(7294),v=n(5434);function h(e){var t=e.links,n=e.title,o=(0,p.useState)(!1),a=o[0],l=o[1],i=(0,d.useRouter)().asPath,c=u()("hover:underline","hover:text-yellow-400");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:"container",children:(0,r.jsxs)("div",{className:"flex h-24 w-full items-center bg-brand text-white transition-all sm:h-36",children:[(0,r.jsx)("h2",{className:"flex-1 text-4xl",children:n}),(0,r.jsx)("ul",{className:"hidden sm:flex",children:t.map((function(e){var t=e.text,n=e.link,o="/".concat(n);return(0,r.jsx)("li",{className:u()(c,"last:mr-0","mr-6",{"text-yellow-400":i===o}),children:(0,r.jsx)(f(),{href:o,children:(0,r.jsx)("a",{children:t})})},o)}))}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400","aria-controls":"mobile-menu","aria-expanded":"false",onClick:function(){return l((function(e){return!e}))},children:[(0,r.jsx)("span",{className:"sr-only",children:"Open Main Menu"}),a?(0,r.jsx)(v.FU5,{size:"24px"}):(0,r.jsx)(v.xXU,{size:"24px"})]})})]})}),(0,r.jsx)("ul",{className:u()("flex","flex-col","items-center","sm:hidden","bg-brand","text-white","transition-all",{"max-h-52":!0===a,"pb-4":!0===a,"max-h-0":!1===a}),children:a&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.text,n=e.link,o="/".concat(n);return(0,r.jsx)("li",{className:"mb-6 ".concat(c),children:(0,r.jsx)(f(),{href:o,children:(0,r.jsx)("a",{className:"text-xl",children:t})})},o)})))})]})}var x=[{text:"Home",link:""},{text:"Experience",link:"experience"},{text:"Projects",link:"projects"}],m=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{title:"Lisa Patel",links:x}),(0,r.jsx)("main",{children:t}),(0,r.jsx)(a,{})]})}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),i=n(2725),u=n(3462),c=n(1018),s=n(7190),f=n(1210),d=n(8684);var p="undefined"!==typeof a.default.useTransition,v={};function h(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var x=a.default.forwardRef((function(e,t){var n,o=e.href,x=e.as,m=e.children,y=e.prefetch,b=e.passHref,g=e.replace,j=e.shallow,w=e.scroll,_=e.locale,O=e.onClick,M=e.onMouseEnter,N=e.legacyBehavior,k=void 0===N?!0!==Boolean(!1):N,C=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=m,!k||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==y,P=r(p?a.default.useTransition():[],2)[1],L=a.default.useContext(u.RouterContext),z=a.default.useContext(c.AppRouterContext);z&&(L=z);var R,H=a.default.useMemo((function(){var e=r(l.resolveHref(L,o,!0),2),t=e[0],n=e[1];return{href:t,as:x?l.resolveHref(L,x):n||t}}),[L,o,x]),S=H.href,I=H.as,U=a.default.useRef(S),A=a.default.useRef(I);k&&(R=a.default.Children.only(n));var B=k?R&&"object"===typeof R&&R.ref:t,D=r(s.useIntersection({rootMargin:"200px"}),3),F=D[0],T=D[1],K=D[2],X=a.default.useCallback((function(e){A.current===I&&U.current===S||(K(),A.current=I,U.current=S),F(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[I,B,S,K,F]);a.default.useEffect((function(){var e=T&&E&&l.isLocalURL(S),t="undefined"!==typeof _?_:L&&L.locale,n=v[S+"%"+I+(t?"%"+t:"")];e&&!n&&h(L,S,I,{locale:t})}),[I,S,T,_,E,L]);var V={ref:X,onClick:function(e){k||"function"!==typeof O||O(e),k&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i})};c?c(s):s()}}(e,L,S,I,g,j,w,_,z?P:void 0)},onMouseEnter:function(e){k||"function"!==typeof M||M(e),k&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),l.isLocalURL(S)&&h(L,S,I,{priority:!0})}};if(!k||b||"a"===R.type&&!("href"in R.props)){var Z="undefined"!==typeof _?_:L&&L.locale,W=L&&L.isLocaleDomain&&f.getDomainLocale(I,Z,L.locales,L.domainLocales);V.href=W||d.addBasePath(i.addLocale(I,Z,L&&L.defaultLocale))}return k?a.default.cloneElement(R,V):a.default.createElement("a",Object.assign({},C,V),n)}));t.default=x,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],v=r(o.useState(null),2),h=v[0],x=v[1];o.useEffect((function(){if(l){if(s.current&&(s.current(),s.current=void 0),c||d)return;return h&&h.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},u.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h,c,n,t,d]);var m=o.useCallback((function(){p(!1)}),[]);return[x,d,m]};var o=n(7294),a=n(9311),l="function"===typeof IntersectionObserver;var i=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},7571:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return c}});var a=n(5893),l=(n(7284),n(9008)),i=n.n(l),u=n(1356);var c=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"Lisa Patel"})}),(0,a.jsx)(u.Ar,{children:(0,a.jsx)(t,o({},n))})]})}},7284:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),u(e.child))}))}function c(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,u=e.title,c=i(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},5434:function(e,t,n){"use strict";n.d(t,{FU5:function(){return a},ixJ:function(){return o},xXU:function(){return l}});var r=n(8357);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);