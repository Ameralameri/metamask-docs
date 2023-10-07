"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return t?r.createElement(u,s(s({ref:n},l),{},{components:t})):r.createElement(u,s({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={description:"Snaps CLI subcommands and options reference",sidebar_position:3},s="Snaps command line interface",i={unversionedId:"reference/cli/index",id:"reference/cli/index",title:"Snaps command line interface",description:"Snaps CLI subcommands and options reference",source:"@site/snaps/reference/cli/index.md",sourceDirName:"reference/cli",slug:"/reference/cli/",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/snaps/reference/cli/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Snaps CLI subcommands and options reference",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/snaps/reference/exports"},next:{title:"Options",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/snaps/reference/cli/options"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-command-line-interface"},"Snaps command line interface"),(0,a.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and options."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The CLI is installed when you ",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/snaps/get-started/quickstart"},"create a snap project"),".")),(0,a.kt)("p",null,"You can specify subcommands and options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mm-snap")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap [SUBCOMMAND] [OPTIONS]\n")),(0,a.kt)("p",null,"You can also override the default values of the options by specifying them in the\n",(0,a.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/postcss-8.4.31/snaps/concepts/anatomy#configuration-file"},"configuration file"),"."))}d.isMDXComponent=!0}}]);