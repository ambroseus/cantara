(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(141)),o={id:"initializing_a_new_project",title:"Initializing a new project"},c={id:"initializing_a_new_project",title:"Initializing a new project",description:"Let's get you a new folder on your Computer!\r",source:"@site/docs\\initializing_a_new_project.md",permalink:"/docs/initializing_a_new_project",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/initializing_a_new_project.md",sidebar:"main",previous:{title:"Installing and getting ready",permalink:"/docs/installing_and_getting_ready"},next:{title:"Developing your app",permalink:"/docs/developing"}},l=[],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's get you a new folder on your Computer!\nTo kickstart a new Cantara project, use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"commands/init"}),Object(i.b)("inlineCode",{parentName:"a"},"init"))," command.\nBy default, the ",Object(i.b)("inlineCode",{parentName:"p"},"cantara-simple-starter")," template is used. You can find other templates on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"starter_templates"}),"official list of starter templates")," or specify a link to another git repository as the last parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ctra init my-awesome-project\n")),Object(i.b)("p",null,"This will create a new folder ",Object(i.b)("inlineCode",{parentName:"p"},"my-awesome-project"),"."),Object(i.b)("p",null,"Now, let's go to that folder."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-awesome-project\n")),Object(i.b)("p",null,"As you will see, ",Object(i.b)("strong",{parentName:"p"},"3")," new folders and several new files were copied into the directory. Also, a new git repository was initialized."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cantara-simple-starter")," template is a very simple application to display an awesome random image to your users. The project has the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500\u2500node-apps\n\u2502   \u251c\u2500\u2500\u2500express-api\n\u2502   \u2502   \u251c\u2500\u2500\u2500build\n\u2502   \u2502   \u2514\u2500\u2500\u2500src\n\u2502   \u2514\u2500\u2500\u2500sls-api\n\u2502       \u2514\u2500\u2500\u2500src\n\u251c\u2500\u2500\u2500packages\n\u2502   \u251c\u2500\u2500\u2500core-api\n\u2502   \u2502   \u2514\u2500\u2500\u2500src\n\u2502   \u2514\u2500\u2500\u2500random-image-widget\n\u2502       \u251c\u2500\u2500\u2500build\n\u2502       \u2502   \u2514\u2500\u2500\u2500random-image-widget\n\u2502       \u2502       \u2514\u2500\u2500\u2500src\n\u2502       \u2514\u2500\u2500\u2500src\n\u2514\u2500\u2500\u2500react-apps\n    \u2514\u2500\u2500\u2500random-image-app\n        \u251c\u2500\u2500\u2500assets\n        \u2514\u2500\u2500\u2500src\n            \u2514\u2500\u2500\u2500components\n                \u2514\u2500\u2500\u2500App\n")),Object(i.b)("p",null,"It essentially consists of ",Object(i.b)("strong",{parentName:"p"},"4")," parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A NodeJS backend API",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Found under ",Object(i.b)("inlineCode",{parentName:"li"},"node-apps"),", the same API was implemented in two different ways:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"As a NodeJS Express API (",Object(i.b)("inlineCode",{parentName:"li"},"node-apps/express-api"),")"),Object(i.b)("li",{parentName:"ul"},"As a serverless API (",Object(i.b)("inlineCode",{parentName:"li"},"node-apps/sls-api"),")"))),Object(i.b)("li",{parentName:"ul"},"For the frontend, it doesn't make any difference which one you use, as they both expose exactly the same endpoints"))),Object(i.b)("li",{parentName:"ul"},"A re-usable NodeJS package to retrieve the random image (",Object(i.b)("inlineCode",{parentName:"li"},"packages/core-api"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The package called ",Object(i.b)("inlineCode",{parentName:"li"},"core-api")," is used to retrieve the random image and simulates the bussiness logic of the backend API. It is used in both the serverless API and the Express API."))),Object(i.b)("li",{parentName:"ul"},"A React component which actually makes the API call and displays the random image (",Object(i.b)("inlineCode",{parentName:"li"},"packages/random-image-widget"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For demonstration purposes, this React component was also published to NPM and could be consumed by external applications"))),Object(i.b)("li",{parentName:"ul"},"The actual React application which display the random image (",Object(i.b)("inlineCode",{parentName:"li"},"react-apps/random-image-app"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It makes use of the ",Object(i.b)("inlineCode",{parentName:"li"},"random-image-widget")," React component")))),Object(i.b)("p",null,"This project structure is representative for how your Cantara project could look like. To create a new application or package you could just use the ",Object(i.b)("inlineCode",{parentName:"p"},"new")," command (which we will talk about later) or create the respective source files yourself. It's easy as that."),Object(i.b)("p",null,"Now, as you know more about the structure of Cantara projects, let's see how you can actually start the development of your application."))}s.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,c({ref:t},p,{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);