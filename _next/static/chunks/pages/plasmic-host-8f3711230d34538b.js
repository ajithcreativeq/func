(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{8030:function(e,t,n){"use strict";var r,a;n.r(t),n.d(t,{DataContext:function(){return R},DataCtxReader:function(){return N},DataProvider:function(){return D},PageParamsProvider:function(){return F},PlasmicCanvasContext:function(){return _},PlasmicCanvasHost:function(){return y},applySelector:function(){return j},mkMetaName:function(){return x},mkMetaValue:function(){return S},registerComponent:function(){return V},registerGlobalContext:function(){return I},registerTrait:function(){return X},repeatedElement:function(){return z},unstable_registerFetcher:function(){return M},useDataEnv:function(){return k},usePlasmicCanvasContext:function(){return g},useSelector:function(){return O},useSelectors:function(){return T}});var o=n(7294),i=n(3935);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var m=[],p=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,m.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function d(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function h(e){v++,p.set(e)}var _=(0,o.createContext)(!1),g=function(){return(0,o.useContext)(_)};function b(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),a=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,u=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!a,c=function(){var e=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,o.useLayoutEffect)((function(){return m.push(c),function(){var e=m.indexOf(c);e>=0&&m.splice(e,1)}}),[c]),(0,o.useEffect)((function(){u&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=d();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[u,n]),(0,o.useEffect)((function(){if(!u&&!document.querySelector("#getlibs")&&a){var e=document.createElement("script");e.id="getlibs",e.src=d()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[u]),!n)return null;if(r||a){var s=document.querySelector("#plasmic-app.__wab_user-body");s||((s=document.createElement("div")).id="plasmic-app",s.classList.add("__wab_user-body"),document.body.appendChild(s));var l=new URLSearchParams(location.hash),f=!!r&&{componentName:l.get("componentName")};return(0,i.createPortal)((0,o.createElement)(C,{key:""+v},(0,o.createElement)(_.Provider,{value:f},p.get())),s,"plasmic-app")}return u&&window.parent===window?(0,o.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var y=function(e){var t=e.enableWebpackHmr,n=(0,o.useState)(null),r=n[0],a=n[1];return(0,o.useEffect)((function(){a((0,o.createElement)(b,null))}),[]),(0,o.createElement)(o.Fragment,null,!t&&(0,o.createElement)(w,null),r)},P=[];function E(e){return P.push(e),function(){var t=P.indexOf(e);t>=0&&P.splice(t,1)}}var C=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,c(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var a=r.prototype;return a.componentDidCatch=function(e){P.forEach((function(t){return t(e)}))},a.render=function(){return this.state.error?(0,o.createElement)("div",null,"Error: ",""+this.state.error.message):(0,o.createElement)(o.Fragment,null,this.props.children)},r}(o.Component);function w(){return null}var R=(0,o.createContext)(void 0);function x(e){return"__plasmic_meta_"+e}function S(e){return e}function j(e,t){if(t){for(var n,r=e,a=l(t.split("."));!(n=a()).done;){var o,i=n.value;r=null==(o=r)?void 0:o[i]}return r}}function O(e){return j(k(),e)}function T(e){void 0===e&&(e={});var t=k();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,j(t,r))})))}function k(){return(0,o.useContext)(R)}function D(e){var t,n,r=e.name,a=e.data,i=e.hidden,c=e.label,s=e.children,l=null!=(t=k())?t:{};return r?o.createElement(R.Provider,{value:u({},l,(n={},n[r]=a,n[x(r)]={hidden:i,label:c},n))},s):o.createElement(o.Fragment,null,s)}function F(e){var t=e.children,n=e.params,r=void 0===n?{}:n,a=e.query,i=void 0===a?{}:a;return o.createElement(D,{name:"params",data:r,label:"Page route params"},o.createElement(D,{name:"query",data:i,label:"Page query params"},t))}function N(e){return(0,e.children)(k())}var A=globalThis;function M(e,t){A.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}A.__PlasmicFetcherRegistry=[];var H=globalThis;function V(e,t){H.__PlasmicComponentRegistry.push({component:e,meta:t})}null==H.__PlasmicComponentRegistry&&(H.__PlasmicComponentRegistry=[]);var q=globalThis;function I(e,t){q.__PlasmicContextRegistry.push({component:e,meta:t})}null==q.__PlasmicContextRegistry&&(q.__PlasmicContextRegistry=[]);var L,U,G=globalThis;function X(e,t){G.__PlasmicTraitRegistry.push({trait:e,meta:t})}function z(e,t){return W(e,t)}null==G.__PlasmicTraitRegistry&&(G.__PlasmicTraitRegistry=[]);var W=function(e,t){return Array.isArray(t)?t.map((function(t){return W(e,t)})):t&&(0,o.isValidElement)(t)&&"string"!==typeof t?(0,o.cloneElement)(t):t},$=globalThis,B=null!=(L=null==$||null==(U=$.__Sub)?void 0:U.setRepeatedElementFn)?L:function(e){W=e},J={__proto__:null,PlasmicCanvasContext:_,PlasmicCanvasHost:y,usePlasmicCanvasContext:g,unstable_registerFetcher:M,registerComponent:V,registerGlobalContext:I,registerTrait:X,repeatedElement:z,DataContext:R,mkMetaName:x,mkMetaValue:S,applySelector:j,useSelector:O,useSelectors:T,useDataEnv:k,DataProvider:D,PageParamsProvider:F,DataCtxReader:N},K=globalThis;null==K.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),K.__Sub=u({React:r||(r=n.t(o,2)),ReactDOM:a||(a=n.t(i,2)),hostModule:J,hostVersion:"1.0.64",hostUtils:{setPlasmicRootNode:h,registerRenderErrorListener:E,setRepeatedElementFn:B},setPlasmicRootNode:h,registerRenderErrorListener:E,setRepeatedElementFn:B},J))},7218:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(3364)}])},3364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=(n(7294),n(4298)),o=n.n(a),i=n(8030);function u(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(i.PlasmicCanvasHost,{})]})}},4298:function(e,t,n){e.exports=n(3573)}},function(e){e.O(0,[774,888,179],(function(){return t=7218,e(e.s=t);var t}));var t=e.O();_N_E=t}]);