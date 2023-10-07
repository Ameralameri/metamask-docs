"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_label:"React",sidebar_position:1},o="Use MetaMask SDK with React",p={unversionedId:"how-to/connect/set-up-sdk/javascript/react",id:"how-to/connect/set-up-sdk/javascript/react",title:"Use MetaMask SDK with React",description:"You can import MetaMask SDK into your React dapp to enable your users to",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/react.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/react",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/connect/set-up-sdk/javascript/react",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/react.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/connect/set-up-sdk/javascript/"},next:{title:"Pure JavaScript",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/connect/set-up-sdk/javascript/pure-js"}},c={},i=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],l={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,r.kt)("p",null,"You can import ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/concepts/sdk"},"MetaMask SDK")," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskSDK } from '@metamask/sdk';\n")),(0,r.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,r.kt)("p",null,"Instantiate the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/sdk-js-options"},"options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by calling any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/rpc-api#eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/reference/provider-api#ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}u.isMDXComponent=!0}}]);