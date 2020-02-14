(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(140)),i={id:"publish_to_npm",title:"Publishing packages to NPM"},c={id:"publish_to_npm",title:"Publishing packages to NPM",description:"Besides being able to use packages internally in the monorepository, you can also publish them to NPM install them in other (hopefully Cantara :wink:) projects.\r",source:"@site/docs\\publish_to_npm.md",permalink:"/cantara/docs/publish_to_npm",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/publish_to_npm.md",sidebar:"main",previous:{title:"Deploying serverless endpoints",permalink:"/cantara/docs/deploying_serverless"},next:{title:"Continous Integration",permalink:"/cantara/docs/continous_integration"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Besides being able to use packages internally in the monorepository, you can also publish them to NPM install them in other (hopefully Cantara \ud83d\ude09) projects."),Object(o.b)("p",null,"To do that, you first need to build the package yourself."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ctra build <package-name>\n")),Object(o.b)("p",null,"After that, the compiled version of your package can be found under ",Object(o.b)("inlineCode",{parentName:"p"},"packages/<package-name>/build"),"."),Object(o.b)("p",null,"TypeScript types are generated automatically! So all consumers of this packages will get autocompletion out of the box."),Object(o.b)("p",null,"Now you are ready to publish it!"),Object(o.b)("p",null,"To do this, use the ",Object(o.b)("inlineCode",{parentName:"p"},"publish")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ctra publish <package-name>\n")),Object(o.b)("p",null,"A wizard will prompt you some questions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congrats! Your package is now on NPM")))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,c({ref:t},p,{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);