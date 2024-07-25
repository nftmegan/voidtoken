"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{3662:function(e,t,a){a.r(t),a.d(t,{WalletConnectButton:function(){return m},WalletDisconnectButton:function(){return v},WalletIcon:function(){return d},WalletModal:function(){return w},WalletModalButton:function(){return h},WalletModalContext:function(){return r},WalletModalProvider:function(){return b},WalletMultiButton:function(){return g},useWalletModal:function(){return s}});var l=a(7294);const n={setVisible(e){console.error(o("call","setVisible"))},visible:!1};function o(e,t){return`You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`}Object.defineProperty(n,"visible",{get:()=>(console.error(o("read","visible")),!1)});const r=(0,l.createContext)(n);function s(){return(0,l.useContext)(r)}var c=a(4306);const i=e=>l.createElement("button",{className:`wallet-adapter-button ${e.className||""}`,disabled:e.disabled,onClick:e.onClick,tabIndex:e.tabIndex||0,type:"button"},e.startIcon&&l.createElement("i",{className:"wallet-adapter-button-start-icon"},e.startIcon),e.children,e.endIcon&&l.createElement("i",{className:"wallet-adapter-button-end-icon"},e.endIcon)),d=({wallet:e,...t})=>e&&l.createElement("img",{src:e.adapter.icon,alt:`${e.adapter.name} icon`,...t}),m=({children:e,disabled:t,onClick:a,...n})=>{const{wallet:o,connect:r,connecting:s,connected:m}=(0,c.O)(),u=(0,l.useCallback)((e=>{a&&a(e),e.defaultPrevented||r().catch((()=>{}))}),[a,r]),p=(0,l.useMemo)((()=>e||(s?"Connecting ...":m?"Connected":o?"Connect":"Connect Wallet")),[e,s,m,o]);return l.createElement(i,{className:"wallet-adapter-button-trigger",disabled:t||!o||s||m,startIcon:o?l.createElement(d,{wallet:o}):void 0,onClick:u,...n},p)};var u=a(9607),p=a(3935);const E=({id:e,children:t,expanded:a=!1})=>{const n=(0,l.useRef)(null),o=(0,l.useRef)(!0);return(0,l.useLayoutEffect)((()=>{a?(()=>{const e=n.current;e&&requestAnimationFrame((()=>{e.style.height=e.scrollHeight+"px"}))})():(()=>{const e=n.current;e&&requestAnimationFrame((()=>{e.style.height=e.offsetHeight+"px",e.style.overflow="hidden",requestAnimationFrame((()=>{e.style.height="0"}))}))})()}),[a]),(0,l.useLayoutEffect)((()=>{const e=n.current;if(e)return o.current&&(t(),o.current=!1),e.addEventListener("transitionend",l),()=>e.removeEventListener("transitionend",l);function t(){e&&(e.style.overflow=a?"initial":"hidden",a&&(e.style.height="auto"))}function l(a){e&&a.target===e&&"height"===a.propertyName&&t()}}),[a]),l.createElement("div",{className:"wallet-adapter-collapse",id:e,ref:n,role:"region",style:{height:0,transition:o.current?void 0:"height 250ms ease-out"}},t)},C=({handleClick:e,tabIndex:t,wallet:a})=>l.createElement("li",null,l.createElement(i,{onClick:e,startIcon:l.createElement(d,{wallet:a}),tabIndex:t},a.adapter.name,a.readyState===u.i1.Installed&&l.createElement("span",null,"Detected"))),f=()=>l.createElement("svg",{width:"97",height:"96",viewBox:"0 0 97 96",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"48.5",cy:"48",r:"48",fill:"url(#paint0_linear_880_5115)",fillOpacity:"0.1"}),l.createElement("circle",{cx:"48.5",cy:"48",r:"47",stroke:"url(#paint1_linear_880_5115)",strokeOpacity:"0.4",strokeWidth:"2"}),l.createElement("g",{clipPath:"url(#clip0_880_5115)"},l.createElement("path",{d:"M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",fill:"url(#paint2_linear_880_5115)"}),l.createElement("path",{d:"M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",fill:"url(#paint3_linear_880_5115)"})),l.createElement("defs",null,l.createElement("linearGradient",{id:"paint0_linear_880_5115",x1:"3.41664",y1:"98.0933",x2:"103.05",y2:"8.42498",gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#9945FF"}),l.createElement("stop",{offset:"0.14",stopColor:"#8A53F4"}),l.createElement("stop",{offset:"0.42",stopColor:"#6377D6"}),l.createElement("stop",{offset:"0.79",stopColor:"#24B0A7"}),l.createElement("stop",{offset:"0.99",stopColor:"#00D18C"}),l.createElement("stop",{offset:"1",stopColor:"#00D18C"})),l.createElement("linearGradient",{id:"paint1_linear_880_5115",x1:"3.41664",y1:"98.0933",x2:"103.05",y2:"8.42498",gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#9945FF"}),l.createElement("stop",{offset:"0.14",stopColor:"#8A53F4"}),l.createElement("stop",{offset:"0.42",stopColor:"#6377D6"}),l.createElement("stop",{offset:"0.79",stopColor:"#24B0A7"}),l.createElement("stop",{offset:"0.99",stopColor:"#00D18C"}),l.createElement("stop",{offset:"1",stopColor:"#00D18C"})),l.createElement("linearGradient",{id:"paint2_linear_880_5115",x1:"25.9583",y1:"68.7101",x2:"67.2337",y2:"23.7879",gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#9945FF"}),l.createElement("stop",{offset:"0.14",stopColor:"#8A53F4"}),l.createElement("stop",{offset:"0.42",stopColor:"#6377D6"}),l.createElement("stop",{offset:"0.79",stopColor:"#24B0A7"}),l.createElement("stop",{offset:"0.99",stopColor:"#00D18C"}),l.createElement("stop",{offset:"1",stopColor:"#00D18C"})),l.createElement("linearGradient",{id:"paint3_linear_880_5115",x1:"58.3326",y1:"49.4467",x2:"61.0002",y2:"45.4453",gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#9945FF"}),l.createElement("stop",{offset:"0.14",stopColor:"#8A53F4"}),l.createElement("stop",{offset:"0.42",stopColor:"#6377D6"}),l.createElement("stop",{offset:"0.79",stopColor:"#24B0A7"}),l.createElement("stop",{offset:"0.99",stopColor:"#00D18C"}),l.createElement("stop",{offset:"1",stopColor:"#00D18C"})),l.createElement("clipPath",{id:"clip0_880_5115"},l.createElement("rect",{width:"48",height:"48",fill:"white",transform:"translate(24.5 24)"})))),w=({className:e="",container:t="body"})=>{const a=(0,l.useRef)(null),{wallets:n,select:o}=(0,c.O)(),{setVisible:r}=s(),[i,d]=(0,l.useState)(!1),[m,w]=(0,l.useState)(!1),[h,b]=(0,l.useState)(null),[v,g]=(0,l.useMemo)((()=>{const e=[],t=[],a=[];for(const l of n)l.readyState===u.i1.NotDetected?t.push(l):l.readyState===u.i1.Loadable?a.push(l):l.readyState===u.i1.Installed&&e.push(l);return[e,[...a,...t]]}),[n]),y=(0,l.useMemo)((()=>v.length?v[0]:n.find((e=>"Torus"===e.adapter.name))||n.find((e=>"Phantom"===e.adapter.name))||n.find((e=>e.readyState===u.i1.Loadable))||g[0]),[v,n,g]),k=(0,l.useCallback)((()=>{w(!1),setTimeout((()=>r(!1)),150)}),[r]),x=(0,l.useCallback)((e=>{e.preventDefault(),k()}),[k]),N=(0,l.useCallback)(((e,t)=>{o(t),x(e)}),[o,x]),_=(0,l.useCallback)((()=>d(!i)),[i]),M=(0,l.useCallback)((e=>{const t=a.current;if(!t)return;const l=t.querySelectorAll("button"),n=l[0],o=l[l.length-1];e.shiftKey?document.activeElement===n&&(o.focus(),e.preventDefault()):document.activeElement===o&&(n.focus(),e.preventDefault())}),[a]);return(0,l.useLayoutEffect)((()=>{const e=e=>{"Escape"===e.key?k():"Tab"===e.key&&M(e)},{overflow:t}=window.getComputedStyle(document.body);return setTimeout((()=>w(!0)),0),document.body.style.overflow="hidden",window.addEventListener("keydown",e,!1),()=>{document.body.style.overflow=t,window.removeEventListener("keydown",e,!1)}}),[k,M]),(0,l.useLayoutEffect)((()=>b(document.querySelector(t))),[t]),h&&(0,p.createPortal)(l.createElement("div",{"aria-labelledby":"wallet-adapter-modal-title","aria-modal":"true",className:`wallet-adapter-modal ${m&&"wallet-adapter-modal-fade-in"} ${e}`,ref:a,role:"dialog"},l.createElement("div",{className:"wallet-adapter-modal-container"},l.createElement("div",{className:"wallet-adapter-modal-wrapper"},l.createElement("button",{onClick:x,className:"wallet-adapter-modal-button-close"},l.createElement("svg",{width:"14",height:"14"},l.createElement("path",{d:"M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"}))),v.length?l.createElement(l.Fragment,null,l.createElement("h1",{className:"wallet-adapter-modal-title"},"Connect a wallet on Solana to continue"),l.createElement("ul",{className:"wallet-adapter-modal-list"},v.map((e=>l.createElement(C,{key:e.adapter.name,handleClick:t=>N(t,e.adapter.name),wallet:e}))),g.length?l.createElement(E,{expanded:i,id:"wallet-adapter-modal-collapse"},g.map((e=>l.createElement(C,{key:e.adapter.name,handleClick:t=>N(t,e.adapter.name),tabIndex:i?0:-1,wallet:e})))):null),g.length?l.createElement("button",{className:"wallet-adapter-modal-list-more",onClick:_,tabIndex:0},l.createElement("span",null,i?"Less ":"More ","options"),l.createElement("svg",{width:"13",height:"7",viewBox:"0 0 13 7",xmlns:"http://www.w3.org/2000/svg",className:""+(i?"wallet-adapter-modal-list-more-icon-rotate":"")},l.createElement("path",{d:"M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"}))):null):l.createElement(l.Fragment,null,l.createElement("h1",{className:"wallet-adapter-modal-title"},"You'll need a wallet on Solana to continue"),l.createElement("div",{className:"wallet-adapter-modal-middle"},l.createElement(f,null),l.createElement("button",{type:"button",className:"wallet-adapter-modal-middle-button",onClick:e=>N(e,y.adapter.name)},"Get started")),g.length?l.createElement(l.Fragment,null,l.createElement("button",{className:"wallet-adapter-modal-list-more",onClick:_,tabIndex:0},l.createElement("span",null,i?"Hide ":"Already have a wallet? View ","options"),l.createElement("svg",{width:"13",height:"7",viewBox:"0 0 13 7",xmlns:"http://www.w3.org/2000/svg",className:""+(i?"wallet-adapter-modal-list-more-icon-rotate":"")},l.createElement("path",{d:"M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"}))),l.createElement(E,{expanded:i,id:"wallet-adapter-modal-collapse"},l.createElement("ul",{className:"wallet-adapter-modal-list"},g.map((e=>l.createElement(C,{key:e.adapter.name,handleClick:t=>N(t,e.adapter.name),tabIndex:i?0:-1,wallet:e})))))):null))),l.createElement("div",{className:"wallet-adapter-modal-overlay",onMouseDown:x})),h)},h=({children:e="Select Wallet",onClick:t,...a})=>{const{visible:n,setVisible:o}=s(),r=(0,l.useCallback)((e=>{t&&t(e),e.defaultPrevented||o(!n)}),[t,o,n]);return l.createElement(i,{className:"wallet-adapter-button-trigger",onClick:r,...a},e)},b=({children:e,...t})=>{const[a,n]=(0,l.useState)(!1);return l.createElement(r.Provider,{value:{visible:a,setVisible:n}},e,a&&l.createElement(w,{...t}))},v=({children:e,disabled:t,onClick:a,...n})=>{const{wallet:o,disconnect:r,disconnecting:s}=(0,c.O)(),m=(0,l.useCallback)((e=>{a&&a(e),e.defaultPrevented||r().catch((()=>{}))}),[a,r]),u=(0,l.useMemo)((()=>e||(s?"Disconnecting ...":o?"Disconnect":"Disconnect Wallet")),[e,s,o]);return l.createElement(i,{className:"wallet-adapter-button-trigger",disabled:t||!o,startIcon:o?l.createElement(d,{wallet:o}):void 0,onClick:m,...n},u)},g=({children:e,...t})=>{const{publicKey:a,wallet:n,disconnect:o}=(0,c.O)(),{setVisible:r}=s(),[u,p]=(0,l.useState)(!1),[E,C]=(0,l.useState)(!1),f=(0,l.useRef)(null),w=(0,l.useMemo)((()=>a?.toBase58()),[a]),b=(0,l.useMemo)((()=>e||(n&&w?w.slice(0,4)+".."+w.slice(-4):null)),[e,n,w]),v=(0,l.useCallback)((async()=>{w&&(await navigator.clipboard.writeText(w),p(!0),setTimeout((()=>p(!1)),400))}),[w]),g=(0,l.useCallback)((()=>{C(!0)}),[]),y=(0,l.useCallback)((()=>{C(!1)}),[]),k=(0,l.useCallback)((()=>{r(!0),y()}),[r,y]);return(0,l.useEffect)((()=>{const e=e=>{const t=f.current;t&&!t.contains(e.target)&&y()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f,y]),n?w?l.createElement("div",{className:"wallet-adapter-dropdown"},l.createElement(i,{"aria-expanded":E,className:"wallet-adapter-button-trigger",style:{pointerEvents:E?"none":"auto",...t.style},onClick:g,startIcon:l.createElement(d,{wallet:n}),...t},b),l.createElement("ul",{"aria-label":"dropdown-list",className:`wallet-adapter-dropdown-list ${E&&"wallet-adapter-dropdown-list-active"}`,ref:f,role:"menu"},l.createElement("li",{onClick:v,className:"wallet-adapter-dropdown-list-item",role:"menuitem"},u?"Copied":"Copy address"),l.createElement("li",{onClick:k,className:"wallet-adapter-dropdown-list-item",role:"menuitem"},"Change wallet"),l.createElement("li",{onClick:o,className:"wallet-adapter-dropdown-list-item",role:"menuitem"},"Disconnect"))):l.createElement(m,{...t},e):l.createElement(h,{...t},e)}}}]);