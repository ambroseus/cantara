(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(140)),c={id:"css",title:"CSS"},i={id:"css",title:"CSS",description:"There are essentially **3** ways to style your React applications using Cantara. Cantara tries to make no assumptions how you plan to use CSS.\r",source:"@site/docs\\css.md",permalink:"/cantara/docs/css",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/css.md",sidebar:"main",previous:{title:"E2E/Integration testing with Cypress",permalink:"/cantara/docs/e2e_testing"},next:{title:"cantara.config.js",permalink:"/cantara/docs/cantara_config_js"}},s=[{value:"Using CSS-in-JS",id:"using-css-in-js",children:[]},{value:"Importing CSS files directly",id:"importing-css-files-directly",children:[]},{value:"CSS modules",id:"css-modules",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are essentially ",Object(o.b)("strong",{parentName:"p"},"3")," ways to style your React applications using Cantara. Cantara tries to make no assumptions how you plan to use CSS."),Object(o.b)("h2",{id:"using-css-in-js"},"Using CSS-in-JS"),Object(o.b)("p",null,"You can just use your favorite CSS-in-JS solution like you are used to. Cantara doesn't change that in any way."),Object(o.b)("h2",{id:"importing-css-files-directly"},"Importing CSS files directly"),Object(o.b)("p",null,"You can can import css files anywhere:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// SomeComponent.tsx\nimport './index.css';\n")),Object(o.b)("p",null,"Styles defined like this will be applied globally."),Object(o.b)("h2",{id:"css-modules"},"CSS modules"),Object(o.b)("p",null,"By appending ",Object(o.b)("inlineCode",{parentName:"p"},".module.css")," to your CSS file, you can make use of CSS modules, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/* index.modules.css */\n.red-box {\n  background: red;\n  height: 20px;\n  width: 20px;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// SomeComponent.tsx\nimport { redBox } from './index.module.css';\n")))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);