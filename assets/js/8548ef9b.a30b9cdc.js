"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>N});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,N=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return t?l.createElement(N,o(o({ref:n},s),{},{components:t})):l.createElement(N,o({ref:n},s))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const a={},o="\u8f6c\u6362\u6570\u503c\u548c\u8f6c\u6362\u5b57\u7b26\u4e32",i={unversionedId:"js/to-number-and-to-string",id:"js/to-number-and-to-string",title:"\u8f6c\u6362\u6570\u503c\u548c\u8f6c\u6362\u5b57\u7b26\u4e32",description:"\u8f6c\u6362\u6570\u503c",source:"@site/docs/01-js/02-to-number-and-to-string.md",sourceDirName:"01-js",slug:"/js/to-number-and-to-string",permalink:"/docs/js/to-number-and-to-string",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b",permalink:"/docs/js/value-and-reference"},next:{title:"\u903b\u8f91\u4e0e\u548c\u903b\u8f91\u6216",permalink:"/docs/js/and-or"}},p={},u=[{value:"\u8f6c\u6362\u6570\u503c",id:"\u8f6c\u6362\u6570\u503c",level:2},{value:"<code>Number()</code> \u51fd\u6570",id:"number-\u51fd\u6570",level:3},{value:"parseInt() \u51fd\u6570",id:"parseint-\u51fd\u6570",level:3},{value:"parseFloat() \u51fd\u6570",id:"parsefloat-\u51fd\u6570",level:3},{value:"\u8f6c\u6362\u5b57\u7b26\u4e32",id:"\u8f6c\u6362\u5b57\u7b26\u4e32",level:2},{value:"<code>toString()</code> \u65b9\u6cd5",id:"tostring-\u65b9\u6cd5",level:3},{value:"<code>String()</code> \u65b9\u6cd5",id:"string-\u65b9\u6cd5",level:3},{value:"\u52a0\u6cd5\u8fd0\u7b97\u7b26",id:"\u52a0\u6cd5\u8fd0\u7b97\u7b26",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f6c\u6362\u6570\u503c\u548c\u8f6c\u6362\u5b57\u7b26\u4e32"},"\u8f6c\u6362\u6570\u503c\u548c\u8f6c\u6362\u5b57\u7b26\u4e32"),(0,r.kt)("h2",{id:"\u8f6c\u6362\u6570\u503c"},"\u8f6c\u6362\u6570\u503c"),(0,r.kt)("p",null,"\u6709 3 \u4e2a\u51fd\u6570\u53ef\u4ee5\u5c06\u975e\u6570\u503c\u8f6c\u6362\u4e3a\u6570\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Number()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat()"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number()")," \u662f\u8f6c\u578b\u51fd\u6570\uff0c\u53ef\u7528\u4e8e\u4efb\u4f55\u6570\u636e\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u4e24\u4e2a\u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6570\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u540c\u6837\u7684\u53c2\u6570, \u8fd9 3 \u4e2a\u51fd\u6570\u6267\u884c\u7684\u64cd\u4f5c\u4e5f\u4e0d\u540c"))),(0,r.kt)("h3",{id:"number-\u51fd\u6570"},(0,r.kt)("inlineCode",{parentName:"h3"},"Number()")," \u51fd\u6570"),(0,r.kt)("p",null,"Number() \u51fd\u6570\u57fa\u4e8e\u5982\u4e0b\u89c4\u5219\u6267\u884c\u8f6c\u6362\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0ctrue \u8f6c\u6362\u4e3a 1\uff0cfalse \u8f6c\u6362\u4e3a 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u503c\uff0c\u76f4\u63a5\u8fd4\u56de")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"null\uff0c\u8fd4\u56de 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"undefined\uff0c\u8fd4\u56de NaN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\uff0c\u5e94\u7528\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u6570\u503c\u5b57\u7b26\uff0c\u5305\u62ec\u6570\u503c\u5b57\u7b26\u524d\u9762\u5e26\u52a0\u3001\u51cf\u53f7\u7684\u60c5\u51b5\uff0c\u5219\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5341\u8fdb\u5236\u6570\u503c\uff08\u5ffd\u7565\u524d\u9762\u7684 0\uff09")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5b57\u7b26\u4e32\u5305\u542b\u6574\u6570\nconsole.log(Number("1"));      // 1\nconsole.log(Number("+123"));   // 123\nconsole.log(Number("-456"));   // -456\nconsole.log(Number("0789"));   // 789\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u6709\u6548\u7684\u6d6e\u70b9\u503c\u683c\u5f0f\u4e3a "1.1"\uff0c\u5219\u4f1a\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u6d6e\u70b9\u6570\uff08\u5ffd\u7565\u524d\u9762\u7684 0\uff09')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5b57\u7b26\u4e32\u5305\u542b\u6d6e\u70b9\u6570\nconsole.log(Number("1.1"));    // 1.1\nconsole.log(Number("+0.123")); // 0.123\nconsole.log(Number("-0.456")); // -0.456\nconsole.log(Number("00.789")); // 0.789\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u6709\u6548\u7684\u5341\u516d\u8fdb\u5236\uff0c\u5219\u4f1a\u8f6c\u6362\u4e3a\u4e0e\u5341\u516d\u8fdb\u5236\u6570\u503c\u5bf9\u5e94\u7684\u5341\u8fdb\u5236\u6570\u503c")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5b57\u7b26\u4e32\u5341\u516d\u8fdb\u5236\u6574\u6570\nconsole.log(Number("0xf"));    // 15\nconsole.log(Number("+0xf"));   // NaN\nconsole.log(Number("-0xf"));   // NaN\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u7a7a\u5b57\u7b26\u4e32\u4ee5\u53ca\u7a7a\u767d\u5b57\u7b26\u4e32")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(Number(""));       // 0\nconsole.log(Number(" "));      // 0\nconsole.log(Number("12blue")); // NaN\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u9664\u4e0a\u8ff0\u60c5\u51b5\u4e4b\u4e0a\u5176\u4ed6\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de NaN")))),(0,r.kt)("h3",{id:"parseint-\u51fd\u6570"},"parseInt() \u51fd\u6570"),(0,r.kt)("p",null,"\u8003\u8651\u4e86\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Number()")," \u51fd\u6570\u8f6c\u6362\u5b57\u7b26\u4e32\u65f6\u76f8\u5bf9\u590d\u6742\u4e14\u6709\u70b9\u53cd\u5e38\u89c4\uff0c\u901a\u5e38\u518d\u9700\u8981\u5f97\u5230\u6574\u6570\u65f6\u53ef\u4ee5\u6709\u9650\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," \u51fd\u6570"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e09\u6761\u4e0e Number \u4e0d\u4e00\u6837\u7684\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(parseInt("1234blue"));  // 1234\nconsole.log(parseInt(""));          // NaN\nconsole.log(parseInt("22.5"));      // 22\n')),(0,r.kt)("p",null,"\u800c parseInt() \u4e2d\u53ef\u4ee5\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ee3\u8868\u8fdb\u5236\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(parseInt("10", 2));  // 2\nconsole.log(parseInt("10", 8));  // 8\nconsole.log(parseInt("10", 10)); // 10\nconsole.log(parseInt("10", 16)); // 16\n')),(0,r.kt)("h3",{id:"parsefloat-\u51fd\u6570"},"parseFloat() \u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"16 \u8fdb\u5236\u6570\u503c\u59cb\u7ec8\u4f1a\u8fd4\u56de 0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(parseInt("1234blue"));  // 1234\nconsole.log(parseInt("0xA"));       // 0\nconsole.log(parseInt("22.5"));      // 22.5\nconsole.log(parseInt("22.34.5"));   // 22.34\nconsole.log(parseInt("0908.5"));    // 908.5\nconsole.log(parseInt("3.125e7"));   // 31250000 \n')),(0,r.kt)("h2",{id:"\u8f6c\u6362\u5b57\u7b26\u4e32"},"\u8f6c\u6362\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"\u6709 3 \u79cd\u65b9\u6cd5\u53ef\u4ee5\u5c06\u975e\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()")," \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String()")," \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," \u64cd\u4f5c\u7b26")),(0,r.kt)("h3",{id:"tostring-\u65b9\u6cd5"},(0,r.kt)("inlineCode",{parentName:"h3"},"toString()")," \u65b9\u6cd5"),(0,r.kt)("p",null,"\u6570\u503c\uff0c\u5e03\u5c14\u503c\uff0c\u5bf9\u8c61\u548c\u5b57\u7b26\u4e32\u90fd\u6709 toString() \u65b9\u6cd5\uff0cnull \u7684 undefined \u6ca1\u6709\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const num = 100;\nconst flag = true;\nconst obj = {\n    A: 1,\n    B: ["a", "b", "c"]\n};\nconst str = "Hello World!";\n\n// \u4e0b\u65b9\u7684 "" \u4ec5\u4ee3\u8868\u5b83\u6253\u5370\u51fa\u6765\u7684\u662f\u5b57\u7b26\u4e32, \u5b9e\u9645\u6253\u5370\u6ca1\u6709 ""\nconsole.log(num.toString());    // "100"\nconsole.log(flag.toString());   // "true"\nconsole.log(obj.toString());    // "[object Object]"\nconsole.log(str.toString());    // "Hello World!"\n')),(0,r.kt)("p",null,"\u591a\u6570\u60c5\u51b5\u4e0b\uff0ctoString() \u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\uff0c\u4f46\u5728\u5bf9\u6570\u503c\u8c03\u7528\u65f6\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u5e95\u6570\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let num = 10;\nconsole.log(num.toString());    // "10"\nconsole.log(num.toString(2));   // "1010"\nconsole.log(num.toString(8));   // "12"\nconsole.log(num.toString(10));  // "10"\nconsole.log(num.toString(16));  // "a"\n')),(0,r.kt)("h3",{id:"string-\u65b9\u6cd5"},(0,r.kt)("inlineCode",{parentName:"h3"},"String()")," \u65b9\u6cd5"),(0,r.kt)("p",null,"String() \u65b9\u6cd5\u9075\u5faa\u5982\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u503c\u6709 toString() \u65b9\u6cd5\uff0c\u5219\u8c03\u7528\u8be5\u65b9\u6cd5\uff08\u4e0d\u4f20\u53c2\u6570\uff09\u5e76\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},'\u5982\u679c\u503c\u662f null\uff0c\u8fd4\u56de \u201dnull"'),(0,r.kt)("li",{parentName:"ul"},'\u5982\u679c\u503c\u662f undefined\uff0c\u8fd4\u56de \u201cundefined"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const v1 = null;\nlet v2 = undefined;\n\nconsole.log(String(v1));  // "null"\nconsole.log(String(v2));  // "undefined"\n')),(0,r.kt)("h3",{id:"\u52a0\u6cd5\u8fd0\u7b97\u7b26"},"\u52a0\u6cd5\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,"\u6267\u884c\u52a0\u6cd5\u8fd0\u7b97\u65f6\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u662f\u5b57\u7b26\u4e32\uff0c\u5c31\u8981\u8fd0\u7528\u5982\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u4e2a\u64cd\u4f5c\u7b26\u90fd\u662f\u5b57\u7b26\u4e32\uff0c\u5219\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u4e32\u62fc\u63a5\u5230\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32\u540e\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u64cd\u4f5c\u6570\u662f\u5b57\u7b26\u4e32\uff0c\u5219\u5c06\u53e6\u4e00\u4e2a\u64cd\u4f5c\u6570\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u518d\u8fdb\u884c\u62fc\u63a5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709 toString() \u65b9\u6cd5\u5c31\u7528 toString() \u65b9\u6cd5\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709 toString() \u65b9\u6cd5\u5c31\u7528 String() \u65b9\u6cd5\u8f6c\u6362")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(5 + 5);           // 10\nconsole.log(5 + "5");         // "55"\nconsole.log("5" + null);      // "5null"\nconsole.log(undefined + "5"); // "undefined5"\n\nconst obj = {\n  A: 1,\n  B: [1, 2, 3]\n};\nconsole.log(obj + "5");        // "[object Object]5"\n\nlet msg = "The sum of 5 and 10 is " + 5 + 10;\nconsole.log(msg); // "the sum of 5 and 10 is 510"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u7528\u52a0\u53f7\u64cd\u4f5c\u7b26\u7ed9\u4e00\u4e2a\u503c\u52a0\u4e0a\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32 "" \u53ef\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32')))}m.isMDXComponent=!0}}]);