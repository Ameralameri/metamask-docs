"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return r?n.createElement(u,s(s({ref:t},c),{},{components:r})):n.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,description:"Learn about the MetaMask JSON-RPC API."},s="JSON-RPC API",i={unversionedId:"concepts/rpc-api",id:"concepts/rpc-api",title:"JSON-RPC API",description:"Learn about the MetaMask JSON-RPC API.",source:"@site/wallet/concepts/rpc-api.md",sourceDirName:"concepts",slug:"/concepts/rpc-api",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/concepts/rpc-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/rpc-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn about the MetaMask JSON-RPC API."},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/concepts/provider-api"},next:{title:"Convenience libraries",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/concepts/convenience-libraries"}},p={},l=[{value:"Restricted methods",id:"restricted-methods",level:2},{value:"Unrestricted methods",id:"unrestricted-methods",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-rpc-api"},"JSON-RPC API"),(0,a.kt)("p",null,"MetaMask uses the ",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nmethod of the ",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/concepts/provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,a.kt)("admonition",{title:"MetaMask API Playground",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The RPC methods are documented in the interactive\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"MetaMask JSON-RPC API Playground"),".")),(0,a.kt)("p",null,"Methods in the API playground may have the following tags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MetaMask")," - These methods behave in ways specific to MetaMask, and may or may not be supported\nby other wallets.\nSome of these methods are documented in more detail on the ",(0,a.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/rpc-api"},"JSON-RPC reference"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restricted")," - These methods are ",(0,a.kt)("a",{parentName:"li",href:"#restricted-methods"},"restricted"),", which require requesting\npermission using ",(0,a.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestpermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mobile")," - These methods are only available on MetaMask Mobile."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ethereum API")," - These are standard Ethereum JSON-RPC API methods.\nSee the ",(0,a.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum wiki")," for more information on\nthese methods.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),".")),(0,a.kt)("h2",{id:"restricted-methods"},"Restricted methods"),(0,a.kt)("p",null,"MetaMask introduced web3 wallet permissions in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is restricted or unrestricted.\nIf a method is restricted, a dapp must request permission to call it using\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),".\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,a.kt)("p",null,"Outside of ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/rpc-api/#restricted-methods"},"Snaps restricted methods"),", the only\nrestricted method is ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts")),", which allows you to access\nthe user's Ethereum accounts.\nMore restricted methods will be added in the future."),(0,a.kt)("h2",{id:"unrestricted-methods"},"Unrestricted methods"),(0,a.kt)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might still rely on\npermissions to succeed (for example, the signing methods require calling the restricted\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method), or they might require confirmation by the\nuser (for example, ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/rpc-api"},"JSON-RPC API reference")," for some MetaMask-specific unrestricted\nmethods and examples of how to implement them.\nFor the full list of MetaMask JSON-RPC API methods, see the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"API playground"),"."))}m.isMDXComponent=!0}}]);