(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{5051:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note",function(){return n(6372)}])},4403:function(e,r,n){"use strict";n.d(r,{R:function(){return u}});var t=n(5503),o=n(6257),i=(0,t.ZF)({apiKey:"AIzaSyD52d7r91mUCp34Yq5Vb92raDsaatnF7R4",authDomain:"lithney-app.firebaseapp.com",projectId:"lithney-app",storageBucket:"lithney-app.appspot.com",messagingSenderId:"1030962351572",appId:"1:1030962351572:web:82f790aa0bd813dbc11a41",measurementId:"G-9PLPYR3WKQ"}),u=(0,o.ad)(i)},6372:function(e,r,n){"use strict";n.r(r);var t=n(7568),o=n(603),i=n(4051),u=n.n(i),s=n(5893),a=n(6257),c=n(7294),l=n(6677),d=n(4403),f=n(1163),h=n(9008),p=n.n(h);r.default=function(){var e=(0,f.useRouter)(),r=(0,c.useState)(""),n=r[0],i=r[1],h=(0,o.Z)((0,l.Kx)((0,a.hJ)(d.R,"notes"),{snapshotListenOptions:{includeMetadataChanges:!0}}),3),v=h[0],x=(h[1],h[2],function(){var e=(0,t.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.oe)((0,a.JU)(d.R,"notes",r.id));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),g=function(){var e=(0,t.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("clipboard"in navigator)){e.next=6;break}return e.next=3,navigator.clipboard.writeText(r.data().text);case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",document.execCommand("copy",!0,r.data().text));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"flex w-screen h-screen justify-center items-center  bg-lith3 flex-col",children:[(0,s.jsx)(p(),{children:(0,s.jsx)("title",{children:"Lithney Birthday | Notes"})}),(0,s.jsx)("div",{className:"flex w-screen h-screen justify-center items-center flex-col backdrop-blur-sm",children:(0,s.jsxs)("div",{className:"bg-white p-4 sm:h-4/6 h-screen sm:w-8/12 rounded-md shadow-lg w-11/12",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("input",{value:n,className:"sm:w-11/12 md:w-9/12 text-center p-2 my-3 bg-green-100 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500",placeholder:"Your note Lithney",onChange:function(e){return i(e.target.value)}}),(0,s.jsx)("button",{className:"bg-green-500 my-3 py-2 px-4 rounded-lg text-white uppercase text-l font-medium hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-400",onClick:function(){(0,a.ET)((0,a.hJ)(d.R,"notes"),{text:n,created_at:new Date}),i("")},children:"Add note"}),(0,s.jsx)("button",{className:"bg-orange-500 my-3 p-2 rounded-full text-white uppercase text-l font-medium hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400",title:"Puedes gestionar notitas Lithney",onClick:function(){return e.push("birthday")},children:(0,s.jsxs)("svg",{className:"h-5 w-5 text-white",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,s.jsx)("polyline",{points:"15 6 9 12 15 18"})]})})]}),(0,s.jsx)("div",{className:"mt-3 md:h-5/6 h-5/6 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full",children:null===v||void 0===v?void 0:v.docs.map((function(e){return(0,s.jsxs)("div",{className:"flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-between ",children:[(0,s.jsx)("p",{className:"text-green-500 text-xl flex flex-col text-center",children:e.data().text}),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:function(){return g(e)},children:(0,s.jsxs)("svg",{className:"h-8 w-8 text-orange-200",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,s.jsx)("rect",{x:"8",y:"8",width:"12",height:"12",rx:"2"}),(0,s.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})}),(0,s.jsx)("button",{className:"text-xs",onClick:function(){return x(e)},children:(0,s.jsxs)("svg",{className:"h-8 w-8 text-red-500 float-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,s.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]},e.id)}))})]})}),(0,s.jsx)("div",{className:"absolute bottom-2 right-2",children:(0,s.jsx)("button",{className:"bg-gray-500 my-1 p-2 rounded-full text-white uppercase text-xs font-medium hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400",children:(0,s.jsxs)("svg",{className:"h-8 w-8 text-white",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,s.jsx)("path",{d:"M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5"})]})})})]})}},6677:function(e,r,n){"use strict";n.d(r,{Kx:function(){return h},ky:function(){return p}});var t=n(6257),o=n(7294);var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},i.apply(this,arguments)},u=function(e){return{loading:void 0===e||null===e,value:e}},s=function(e){var r=e?e():void 0,n=(0,o.useReducer)((function(e,r){switch(r.type){case"error":return i(i({},e),{error:r.error,loading:!1,value:void 0});case"reset":return u(r.defaultValue);case"value":return i(i({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),u(r)),t=n[0],s=n[1],a=function(){var r=e?e():void 0;s({type:"reset",defaultValue:r})},c=function(e){s({type:"error",error:e})},l=function(e){s({type:"value",value:e})};return(0,o.useMemo)((function(){return{error:t.error,loading:t.loading,reset:a,setError:c,setValue:l,value:t.value}}),[t.error,t.loading,a,c,l,t.value])},a=function(e,r,n){var t=(0,o.useRef)(e);return(0,o.useEffect)((function(){r(e,t.current)||(t.current=e,n&&n())})),t},c=function(e,r){var n=!e&&!r,o=!!e&&!!r&&(0,t.Eo)(e,r);return n||o},l=function(e,r){return a(e,c,r)},d=function(e,r){var n=!e&&!r,o=!!e&&!!r&&(0,t.iE)(e,r);return n||o},f=function(e,r){return a(e,d,r)},h=function(e,r){var n=s(),i=n.error,u=n.loading,a=n.reset,c=n.setError,l=n.setValue,d=n.value,h=f(e,a);(0,o.useEffect)((function(){if(h.current){var e=(null===r||void 0===r?void 0:r.snapshotListenOptions)?(0,t.cf)(h.current,r.snapshotListenOptions,l,c):(0,t.cf)(h.current,l,c);return function(){e()}}l(void 0)}),[h.current]);var p=[d,u,i];return(0,o.useMemo)((function(){return p}),p)},p=function(e,r){var n=s(),i=n.error,u=n.loading,a=n.reset,c=n.setError,d=n.setValue,f=n.value,h=l(e,a);(0,o.useEffect)((function(){if(h.current){var e=(null===r||void 0===r?void 0:r.snapshotListenOptions)?(0,t.cf)(h.current,r.snapshotListenOptions,d,c):(0,t.cf)(h.current,d,c);return function(){e()}}d(void 0)}),[h.current]);var p=[f,u,i];return(0,o.useMemo)((function(){return p}),p)}},7568:function(e,r,n){"use strict";function t(e,r,n,t,o,i,u){try{var s=e[i](u),a=s.value}catch(c){return void n(c)}s.done?r(a):Promise.resolve(a).then(t,o)}function o(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var u=e.apply(r,n);function s(e){t(u,o,i,s,a,"next",e)}function a(e){t(u,o,i,s,a,"throw",e)}s(void 0)}))}}n.d(r,{Z:function(){return o}})},603:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{Z:function(){return o}})}},function(e){e.O(0,[16,937,774,888,179],(function(){return r=5051,e(e.s=r);var r}));var r=e.O();_N_E=r}]);