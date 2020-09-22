(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(88)),c=n(92),o={id:"ilp-wallets",title:"Digital Wallet and Payment Pointers",sidebar_label:"Digital wallets and payment pointers"},l={unversionedId:"ilp-wallets",id:"ilp-wallets",isDocsHomePage:!1,title:"Digital Wallet and Payment Pointers",description:"You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site.",source:"@site/docs/ilp-wallets.md",slug:"/ilp-wallets",permalink:"/docs/ilp-wallets",editUrl:"https://github.com/WICG/webmonetization/tree/master/docs/ilp-wallets.md",version:"current",sidebar_label:"Digital wallets and payment pointers",sidebar:"docs",previous:{title:"Web Monetization Providers",permalink:"/docs/sending"},next:{title:"GateHub",permalink:"/docs/gatehub"}},b=[{value:"Digital wallets",id:"digital-wallets",children:[]},{value:"Payment pointers",id:"payment-pointers",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site."),Object(i.b)("p",null,"Your wallet provider will assign you a payment pointer, which is the public address for your wallet. You'll add your payment pointer as the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," value in your ",Object(i.b)("inlineCode",{parentName:"p"},"<meta>")," tag."),Object(i.b)("h2",{id:"digital-wallets"},"Digital wallets"),Object(i.b)("p",null,"The following providers offer ILP-enabled wallets."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("center",null,Object(i.b)("img",{src:Object(c.a)("../assets/uphold.svg")}))),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("center",null,Object(i.b)("img",{src:Object(c.a)("../assets/gatehub.png")}))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"Payout currencies")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"27 fiat currencies ",Object(i.b)("br",null)," 34 crypto currencies ",Object(i.b)("br",null)," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://uphold.com/en/transparency"}),"See full list")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"XRP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"Withdrawal currencies")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"USD, EUR, GBP, CAD, PLN, XRP, BTC, ETH, +59 more ",Object(i.b)("br",null)," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://uphold.com/en/transparency"}),"See full list")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"XRP, USD, EUR, BTC, ETH")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"Bank connection")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ACH, SEPA, Wire, UK FPS"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"SEPA, Wire")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"Fees")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"None"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"SEPA: 1.00 EUR < 50,000 EUR",Object(i.b)("br",null),"Wire: $15 min ($150 max)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"Payment pointer prefix")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"$ilp.uphold.com/"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"$ilp.gatehub.net/")))),Object(i.b)("h2",{id:"payment-pointers"},"Payment pointers"),Object(i.b)("p",null,"A payment pointer is a public address to your ILP-enabled wallet. Your wallet provider assigns you a payment pointer during account setup. If you're having trouble finding your payment pointer, check out these instructions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GateHub - ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"gatehub#find-your-payment-pointer"}),"Find your payment pointer")),Object(i.b)("li",{parentName:"ul"},"Uphold - ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"uphold#find-your-payment-pointer"}),"Find your payment pointer"))))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var r=n(0),a=n(22);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(89),a=n(95);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},95:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);