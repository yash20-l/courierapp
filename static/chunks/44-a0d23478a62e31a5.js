(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return a}});var r=n(7294),o=n(5893);const i=["as","disabled"];function a({tagName:e,disabled:t,href:n,target:r,rel:o,onClick:i,tabIndex:a=0,type:s}){e||(e=null!=n||null!=r||null!=o?"a":"button");const c={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},c];const u=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==i||i(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:a,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const s=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);const[c,{tagName:u}]=a(Object.assign({tagName:n,disabled:r},s));return(0,o.jsx)(u,Object.assign({},s,c,{ref:t}))}));s.displayName="Button"},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,c=e.priority,v=void 0!==c&&c,g=e.loading,S=e.lazyRoot,j=void 0===S?null:S,k=e.lazyBoundary,O=void 0===k?"200px":k,C=e.className,I=e.quality,R=e.width,P=e.height,A=e.objectFit,T=e.objectPosition,_=e.onLoadingComplete,z=e.loader,D=void 0===z?N:z,L=e.placeholder,$=void 0===L?"empty":L,M=e.blurDataURL,F=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=u.useRef(null),W=u.useContext(p.ImageConfigContext),q=u.useMemo((function(){var e=h||W||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:n})}),[W]),V=F,H=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(H=V.layout),delete V.layout);var B="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var K=x(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(M=M||K.blurDataURL,B=K.src,(!H||"fill"!==H)&&(P=P||K.height,R=R||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}t="string"===typeof t?t:B;var X=E(R),Z=E(P),G=E(I),Y=!v&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,Y=!1);y.has(t)&&(Y=!1);0;var J,Q=i(d.useIntersection({rootRef:j,rootMargin:O,disabled:!Y}),2),ee=Q[0],te=Q[1],ne=!Y||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:T},se="blur"===$?{filter:"blur(20px)",backgroundSize:A||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:T||"0% 0%"}:{};if("fill"===H)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Z){var ce=Z/X,ue=isNaN(ce)?"100%":"".concat(100*ce,"%");"responsive"===H?(re.display="block",re.position="relative",ie=!0,oe.paddingTop=ue):"intrinsic"===H?(re.display="inline-block",re.position="relative",re.maxWidth="100%",ie=!0,oe.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===H&&(re.display="inline-block",re.position="relative",re.width=X,re.height=Z)}else 0;var le={src:b,srcSet:void 0,sizes:void 0};ne&&(le=w({config:q,src:t,unoptimized:s,layout:H,width:X,quality:G,sizes:n,loader:D}));var fe=t;0;var de;0;var pe=(o(de={},"imagesrcset",le.srcSet),o(de,"imagesizes",le.sizes),de),ve=u.default.useLayoutEffect,me=u.useRef(_);return u.useEffect((function(){me.current=_}),[_]),ve((function(){ee(U.current)}),[ee]),u.useEffect((function(){!function(e,t,n,r,o){var i=function(){var n=e.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(y.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),o.current)){var i=n.naturalWidth,a=n.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(U,fe,0,$,me)}),[fe,H,$,ne]),u.default.createElement("span",{style:re},ie?u.default.createElement("span",{style:oe},J?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,u.default.createElement("img",Object.assign({},V,le,{decoding:"async","data-nimg":H,className:C,ref:U,style:m({},ae,se)})),Y&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},V,w({config:q,src:t,unoptimized:s,layout:H,width:X,quality:G,sizes:n,loader:D}),{decoding:"async","data-nimg":H,style:ae,className:C,loading:g||"lazy"}))),v?u.default.createElement(l.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+le.src+le.srcSet+le.sizes,rel:"preload",as:"image",href:le.srcSet?void 0:le.src},pe))):null)};var c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),l=(c=n(5443))&&c.__esModule?c:{default:c},f=n(5809),d=n(7190),p=n(9977);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){v(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(S(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(S(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,i=e.width,s=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var o=e.deviceSizes,i=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,u=[];s=c.exec(r);s)u.push(parseInt(s[2]));if(u.length){var l,f=.01*(l=Math).min.apply(l,a(u));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,c),f=l.widths,d=l.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:s,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:s,width:f[p]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=g.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e){return"/"===e[0]?e.slice(1):e}},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,l=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],v=o(i.useState(t?t.current:null),2),m=v[0],h=v[1],y=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return i.useEffect((function(){if(!s&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[y,d]};var i=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},8210:function(){},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5005:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),a=n(861),s=n(6792),c=n(5893);const u=i.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:i,className:u,...l},f)=>{const d=(0,s.vE)(t,"btn"),[p,{tagName:v}]=(0,a.FT)({tagName:e,...l}),m=v;return(0,c.jsx)(m,{...p,...l,ref:f,className:o()(u,d,i&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,l.href&&l.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},9644:function(e,t,n){"use strict";n.d(t,{Z:function(){return de}});var r=n(7294);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var a=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function s(e){var t=function(e){var t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((function(){return function(){return t.current()}}),[])}var c=Math.pow(2,31)-1;function u(e,t,n){var r=n-Date.now();e.current=r<=c?setTimeout(t,r):setTimeout((function(){return u(e,t,n)}),c)}function l(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return s((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=c?t.current=setTimeout(r,o):u(t,r,Date.now()+o))},clear:n}}),[])}var f="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!==typeof document||f?r.useLayoutEffect:r.useEffect,new WeakMap;var d=n(861),p=n(5893);const v=["onKeyDown"];const m=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,v);const[o]=(0,d.FT)(Object.assign({tagName:"a"},r)),a=i((e=>{o.onKeyDown(e),null==n||n(e)}));return((s=r.href)&&"#"!==s.trim()||r.role)&&"button"!==r.role?(0,p.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,p.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:a}));var s}));m.displayName="Anchor";var h=m,y=n(4184),b=n.n(y);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function w(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function E(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function N(e,t){return Object.keys(t).reduce((function(n,o){var i,a=n,s=a[w(o)],c=a[o],u=x(a,[w(o),o].map(E)),l=t[o],f=function(e,t,n){var o=(0,r.useRef)(void 0!==e),i=(0,r.useState)(t),a=i[0],s=i[1],c=void 0!==e,u=o.current;return o.current=c,!c&&u&&a!==t&&s(t),[c?e:a,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(c,s,e[l]),d=f[0],p=f[1];return g({},u,((i={})[o]=d,i[l]=p,i))}),e)}function S(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function j(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function k(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}S.__suppressDeprecationWarning=!0,j.__suppressDeprecationWarning=!0,k.__suppressDeprecationWarning=!0;var O=(0,n(6611).Z)("carousel-caption"),C=n(6792);const I=r.forwardRef((({as:e="div",bsPrefix:t,className:n,...r},o)=>{const i=b()(n,(0,C.vE)(t,"carousel-item"));return(0,p.jsx)(e,{ref:o,...r,className:i})}));I.displayName="CarouselItem";var R=I,P=n(3439);function A(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var T=/([A-Z])/g;var _=/^ms-/;function z(e){return function(e){return e.replace(T,"-$1").toLowerCase()}(e).replace(_,"-ms-")}var D=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var L=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(z(t))||function(e,t){return A(e).getComputedStyle(e,t)}(e).getPropertyValue(z(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!D.test(e))}(o)?n+=z(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(z(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},$=!("undefined"===typeof window||!window.document||!window.document.createElement),M=!1,F=!1;try{var U={get passive(){return M=!0},get once(){return F=M=!0}};$&&(window.addEventListener("test",U,U),window.removeEventListener("test",U,!0))}catch(pe){}var W=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!F){var o=r.once,i=r.capture,a=n;!F&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,M?r:i)}e.addEventListener(t,n,r)};var q=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var V=function(e,t,n,r){return W(e,t,n,r),function(){q(e,t,n,r)}};function H(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function B(e,t,n,r){null==n&&(n=function(e){var t=L(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=H(e,n,r),i=V(e,"transitionend",t);return function(){o(),i()}}function K(e,t){const n=L(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function X(e,t){const n=K(e,"transitionDuration"),r=K(e,"transitionDelay"),o=B(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}var G=n(3935),Y=!1,J=r.createContext(null),Q="unmounted",ee="exited",te="entering",ne="entered",re="exiting",oe=function(e){var t,n;function o(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=ee,r.appearStatus=te):o=ne:o=t.unmountOnExit||t.mountOnEnter?Q:ee,r.state={status:o},r.nextCallback=null,r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,Z(t,n),o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Q?{status:ee}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==te&&n!==ne&&(t=te):n!==te&&n!==ne||(t=re)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===te?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===ee&&this.setState({status:Q})},i.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[G.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||Y?this.safeSetState({status:ne},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:te},(function(){t.props.onEntering(i,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:ne},(function(){t.props.onEntered(i,a)}))}))})))},i.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:G.findDOMNode(this);t&&!Y?(this.props.onExit(r),this.safeSetState({status:re},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ee},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ee},(function(){e.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:G.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===Q)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,x(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(J.Provider,{value:null},"function"===typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},o}(r.Component);function ie(){}oe.contextType=J,oe.propTypes={},oe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ie,onEntering:ie,onEntered:ie,onExit:ie,onExiting:ie,onExited:ie},oe.UNMOUNTED=Q,oe.EXITED=ee,oe.ENTERING=te,oe.ENTERED=ne,oe.EXITING=re;var ae=oe,se=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var ce=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=se(e),r=se(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var ue=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:c,childRef:u,...l},f)=>{const d=(0,r.useRef)(null),v=ce(d,u),m=e=>{var t;v((t=e)&&"setState"in t?G.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&d.current&&e(d.current,t)},y=(0,r.useCallback)(h(e),[e]),b=(0,r.useCallback)(h(t),[t]),g=(0,r.useCallback)(h(n),[n]),x=(0,r.useCallback)(h(o),[o]),w=(0,r.useCallback)(h(i),[i]),E=(0,r.useCallback)(h(a),[a]),N=(0,r.useCallback)(h(s),[s]);return(0,p.jsx)(ae,{ref:f,...l,onEnter:y,onEntered:g,onEntering:b,onExit:x,onExited:E,onExiting:w,addEndListener:N,nodeRef:d,children:"function"===typeof c?(e,t)=>c(e,{...t,ref:m}):r.cloneElement(c,{ref:m})})}));const le={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const fe=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:s,slide:c,fade:u,controls:f,indicators:d,indicatorLabels:v,activeIndex:m,onSelect:y,onSlide:g,onSlid:x,interval:w,keyboard:E,onKeyDown:S,pause:j,onMouseOver:k,onMouseOut:O,wrap:I,touch:R,onTouchStart:A,onTouchMove:T,onTouchEnd:_,prevIcon:z,prevLabel:D,nextIcon:L,nextLabel:$,variant:M,className:F,children:U,...W}=N(e,{activeIndex:"onSelect"}),q=(0,C.vE)(s,"carousel"),V=(0,C.SC)(),H=(0,r.useRef)(null),[B,K]=(0,r.useState)("next"),[Z,G]=(0,r.useState)(!1),[Y,J]=(0,r.useState)(!1),[Q,ee]=(0,r.useState)(m||0);(0,r.useEffect)((()=>{Y||m===Q||(H.current?K(H.current):K((m||0)>Q?"next":"prev"),c&&J(!0),ee(m||0))}),[m,Y,Q,c]),(0,r.useEffect)((()=>{H.current&&(H.current=null)}));let te,ne=0;(0,P.Ed)(U,((e,t)=>{++ne,t===m&&(te=e.props.interval)}));const re=o(te),oe=(0,r.useCallback)((e=>{if(Y)return;let t=Q-1;if(t<0){if(!I)return;t=ne-1}H.current="prev",null==y||y(t,e)}),[Y,Q,y,I,ne]),ie=i((e=>{if(Y)return;let t=Q+1;if(t>=ne){if(!I)return;t=0}H.current="next",null==y||y(t,e)})),ae=(0,r.useRef)();(0,r.useImperativeHandle)(t,(()=>({element:ae.current,prev:oe,next:ie})));const se=i((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ae.current)&&(V?oe():ie())})),ce="next"===B?"start":"end";a((()=>{c||(null==g||g(Q,ce),null==x||x(Q,ce))}),[Q]);const le=`${q}-item-${B}`,fe=`${q}-item-${ce}`,de=(0,r.useCallback)((e=>{!function(e){e.offsetHeight}(e),null==g||g(Q,ce)}),[g,Q,ce]),pe=(0,r.useCallback)((()=>{J(!1),null==x||x(Q,ce)}),[x,Q,ce]),ve=(0,r.useCallback)((e=>{if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(V?ie(e):oe(e));case"ArrowRight":return e.preventDefault(),void(V?oe(e):ie(e))}null==S||S(e)}),[E,S,oe,ie,V]),me=(0,r.useCallback)((e=>{"hover"===j&&G(!0),null==k||k(e)}),[j,k]),he=(0,r.useCallback)((e=>{G(!1),null==O||O(e)}),[O]),ye=(0,r.useRef)(0),be=(0,r.useRef)(0),ge=l(),xe=(0,r.useCallback)((e=>{ye.current=e.touches[0].clientX,be.current=0,"hover"===j&&G(!0),null==A||A(e)}),[j,A]),we=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-ye.current,null==T||T(e)}),[T]),Ee=(0,r.useCallback)((e=>{if(R){const t=be.current;Math.abs(t)>40&&(t>0?oe(e):ie(e))}"hover"===j&&ge.set((()=>{G(!1)}),w||void 0),null==_||_(e)}),[R,j,oe,ie,ge,w,_]),Ne=null!=w&&!Z&&!Y,Se=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!Ne)return;const n=V?oe:ie;return Se.current=window.setInterval(document.visibilityState?se:n,null!=(e=null!=(t=re.current)?t:w)?e:void 0),()=>{null!==Se.current&&clearInterval(Se.current)}}),[Ne,oe,ie,re,w,se,V]);const je=(0,r.useMemo)((()=>d&&Array.from({length:ne},((e,t)=>e=>{null==y||y(t,e)}))),[d,ne,y]);return(0,p.jsxs)(n,{ref:ae,...W,onKeyDown:ve,onMouseOver:me,onMouseOut:he,onTouchStart:xe,onTouchMove:we,onTouchEnd:Ee,className:b()(F,q,c&&"slide",u&&`${q}-fade`,M&&`${q}-${M}`),children:[d&&(0,p.jsx)("div",{className:`${q}-indicators`,children:(0,P.UI)(U,((e,t)=>(0,p.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=v&&v.length?v[t]:`Slide ${t+1}`,className:t===Q?"active":void 0,onClick:je?je[t]:void 0,"aria-current":t===Q},t)))}),(0,p.jsx)("div",{className:`${q}-inner`,children:(0,P.UI)(U,((e,t)=>{const n=t===Q;return c?(0,p.jsx)(ue,{in:n,onEnter:n?de:void 0,onEntered:n?pe:void 0,addEndListener:X,children:(t,o)=>r.cloneElement(e,{...o,className:b()(e.props.className,n&&"entered"!==t&&le,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})}):r.cloneElement(e,{className:b()(e.props.className,n&&"active")})}))}),f&&(0,p.jsxs)(p.Fragment,{children:[(I||0!==m)&&(0,p.jsxs)(h,{className:`${q}-control-prev`,onClick:oe,children:[z,D&&(0,p.jsx)("span",{className:"visually-hidden",children:D})]}),(I||m!==ne-1)&&(0,p.jsxs)(h,{className:`${q}-control-next`,onClick:ie,children:[L,$&&(0,p.jsx)("span",{className:"visually-hidden",children:$})]})]})]})}));fe.displayName="Carousel",fe.defaultProps=le;var de=Object.assign(fe,{Caption:O,Item:R})},3439:function(e,t,n){"use strict";n.d(t,{UI:function(){return o},Ed:function(){return i},XW:function(){return a}});var r=n(7294);function o(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function i(e,t){let n=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&t(e,n++)}))}function a(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}},2641:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(4184),o=n.n(r),i=n(5697),a=n.n(i),s=n(7294),c=n(5893);const u={type:a().string,tooltip:a().bool,as:a().elementType},l=s.forwardRef((({as:e="div",className:t,type:n="valid",tooltip:r=!1,...i},a)=>(0,c.jsx)(e,{...i,ref:a,className:o()(t,`${n}-${r?"tooltip":"feedback"}`)})));l.displayName="Feedback",l.propTypes=u;var f=l;var d=s.createContext({}),p=n(6792);const v=s.forwardRef((({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:i=!1,isInvalid:a=!1,as:u="input",...l},f)=>{const{controlId:v}=(0,s.useContext)(d);return t=(0,p.vE)(t,"form-check-input"),(0,c.jsx)(u,{...l,ref:f,type:r,id:e||v,className:o()(n,t,i&&"is-valid",a&&"is-invalid")})}));v.displayName="FormCheckInput";var m=v;const h=s.forwardRef((({bsPrefix:e,className:t,htmlFor:n,...r},i)=>{const{controlId:a}=(0,s.useContext)(d);return e=(0,p.vE)(e,"form-check-label"),(0,c.jsx)("label",{...r,ref:i,htmlFor:n||a,className:o()(t,e)})}));h.displayName="FormCheckLabel";var y=h,b=n(3439);const g=s.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,disabled:i=!1,isValid:a=!1,isInvalid:u=!1,feedbackTooltip:l=!1,feedback:v,feedbackType:h,className:g,style:x,title:w="",type:E="checkbox",label:N,children:S,as:j="input",...k},O)=>{t=(0,p.vE)(t,"form-check"),n=(0,p.vE)(n,"form-switch");const{controlId:C}=(0,s.useContext)(d),I=(0,s.useMemo)((()=>({controlId:e||C})),[C,e]),R=!S&&null!=N&&!1!==N||(0,b.XW)(S,y),P=(0,c.jsx)(m,{...k,type:"switch"===E?"checkbox":E,ref:O,isValid:a,isInvalid:u,disabled:i,as:j});return(0,c.jsx)(d.Provider,{value:I,children:(0,c.jsx)("div",{style:x,className:o()(g,R&&t,r&&`${t}-inline`,"switch"===E&&n),children:S||(0,c.jsxs)(c.Fragment,{children:[P,R&&(0,c.jsx)(y,{title:w,children:N}),v&&(0,c.jsx)(f,{type:h,tooltip:l,children:v})]})})})}));g.displayName="FormCheck";var x=Object.assign(g,{Input:m,Label:y});n(2473);const w=s.forwardRef((({bsPrefix:e,type:t,size:n,htmlSize:r,id:i,className:a,isValid:u=!1,isInvalid:l=!1,plaintext:f,readOnly:v,as:m="input",...h},y)=>{const{controlId:b}=(0,s.useContext)(d);let g;return e=(0,p.vE)(e,"form-control"),g=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${n}`]:n},(0,c.jsx)(m,{...h,type:t,size:r,ref:y,readOnly:v,id:i||b,className:o()(a,g,u&&"is-valid",l&&"is-invalid","color"===t&&`${e}-color`)})}));w.displayName="FormControl";var E=Object.assign(w,{Feedback:f}),N=(0,n(6611).Z)("form-floating");const S=s.forwardRef((({controlId:e,as:t="div",...n},r)=>{const o=(0,s.useMemo)((()=>({controlId:e})),[e]);return(0,c.jsx)(d.Provider,{value:o,children:(0,c.jsx)(t,{...n,ref:r})})}));S.displayName="FormGroup";var j=S;const k=s.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:a,spans:s}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,p.vE)(t,"col");const i=(0,p.pi)(),a=[],s=[];return i.forEach((e=>{const n=r[e];let o,i,c;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:i,order:c}=n):o=n;const u="xs"!==e?`-${e}`:"";o&&a.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=c&&s.push(`order${u}-${c}`),null!=i&&s.push(`offset${u}-${i}`)})),[{...r,className:o()(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,c.jsx)(i,{...r,ref:t,className:o()(n,!s.length&&a)})}));k.displayName="Col";var O=k;const C=s.forwardRef((({as:e="label",bsPrefix:t,column:n,visuallyHidden:r,className:i,htmlFor:a,...u},l)=>{const{controlId:f}=(0,s.useContext)(d);t=(0,p.vE)(t,"form-label");let v="col-form-label";"string"===typeof n&&(v=`${v} ${v}-${n}`);const m=o()(i,t,r&&"visually-hidden",n&&v);return a=a||f,n?(0,c.jsx)(O,{ref:l,as:"label",className:m,htmlFor:a,...u}):(0,c.jsx)(e,{ref:l,className:m,htmlFor:a,...u})}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var I=C;const R=s.forwardRef((({bsPrefix:e,className:t,id:n,...r},i)=>{const{controlId:a}=(0,s.useContext)(d);return e=(0,p.vE)(e,"form-range"),(0,c.jsx)("input",{...r,type:"range",ref:i,className:o()(t,e),id:n||a})}));R.displayName="FormRange";var P=R;const A=s.forwardRef((({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:i=!1,isInvalid:a=!1,id:u,...l},f)=>{const{controlId:v}=(0,s.useContext)(d);return e=(0,p.vE)(e,"form-select"),(0,c.jsx)("select",{...l,size:n,ref:f,className:o()(r,e,t&&`${e}-${t}`,i&&"is-valid",a&&"is-invalid"),id:u||v})}));A.displayName="FormSelect";var T=A;const _=s.forwardRef((({bsPrefix:e,className:t,as:n="small",muted:r,...i},a)=>(e=(0,p.vE)(e,"form-text"),(0,c.jsx)(n,{...i,ref:a,className:o()(t,e,r&&"text-muted")}))));_.displayName="FormText";var z=_;const D=s.forwardRef(((e,t)=>(0,c.jsx)(x,{...e,ref:t,type:"switch"})));D.displayName="Switch";var L=Object.assign(D,{Input:x.Input,Label:x.Label});const $=s.forwardRef((({bsPrefix:e,className:t,children:n,controlId:r,label:i,...a},s)=>(e=(0,p.vE)(e,"form-floating"),(0,c.jsxs)(j,{ref:s,className:o()(t,e),controlId:r,...a,children:[n,(0,c.jsx)("label",{htmlFor:r,children:i})]}))));$.displayName="FloatingLabel";var M=$;const F={_ref:a().any,validated:a().bool,as:a().elementType},U=s.forwardRef((({className:e,validated:t,as:n="form",...r},i)=>(0,c.jsx)(n,{...r,ref:i,className:o()(e,t&&"was-validated")})));U.displayName="Form",U.propTypes=F;var W=Object.assign(U,{Group:j,Control:E,Floating:N,Check:x,Switch:L,Label:I,Text:z,Range:P,Select:T,FloatingLabel:M})},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return c},pi:function(){return u},SC:function(){return l}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:o}),{Consumer:a,Provider:s}=i;function c(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function u(){const{breakpoints:e}=(0,r.useContext)(i);return e}function l(){const{dir:e}=(0,r.useContext)(i);return"rtl"===e}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(4184),o=n.n(r),i=/-(.)/g;var a=n(7294),s=n(6792),c=n(5893);const u=e=>{return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function l(e,{displayName:t=u(e),Component:n,defaultProps:r}={}){const i=a.forwardRef((({className:t,bsPrefix:r,as:i=n||"div",...a},u)=>{const l=(0,s.vE)(r,e);return(0,c.jsx)(i,{ref:u,className:o()(t,l),...a})}));return i.defaultProps=r,i.displayName=t,i}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),c(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,u=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);