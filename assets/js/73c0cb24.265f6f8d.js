"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"bit-life/snake/double-thread",id:"bit-life/snake/double-thread",title:"double-thread",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u6e38\u620f\u4e2d\u5982\u4f55\u4f7f\u7528\u53cc\u7ebf\u7a0b\uff0c\u5b8c\u6210\u83b7\u53d6\u952e\u76d8\u8f93\u5165\u63a7\u5236\u8d2a\u5403\u86c7\u79fb\u52a8\uff0c\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u5b66\u4e60\u4e24\u4e2a\u51fd\u6570\uff0cCreateThread \u548c GetAsyncKeyState",source:"@site/docs/bit-life/snake/double-thread.md",sourceDirName:"bit-life/snake",slug:"/bit-life/snake/double-thread",permalink:"/docs/bit-life/snake/double-thread",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"collision-detection",permalink:"/docs/bit-life/snake/collision-detection"},next:{title:"exit-process",permalink:"/docs/bit-life/snake/exit-process"}},p={},c=[{value:"\u53cc\u7ebf\u7a0b\u7684\u4f5c\u7528",id:"\u53cc\u7ebf\u7a0b\u7684\u4f5c\u7528",level:2},{value:"CreateThread \u7684\u7528\u6cd5",id:"createthread-\u7684\u7528\u6cd5",level:2},{value:"\u5b9e\u9645\u521b\u5efa\u7ebf\u7a0b\u7684\u4ee3\u7801",id:"\u5b9e\u9645\u521b\u5efa\u7ebf\u7a0b\u7684\u4ee3\u7801",level:2},{value:"GetAsyncKeyState",id:"getasynckeystate",level:2},{value:"\u5b9e\u9645\u5224\u65ad\u72b6\u6001\u7684\u4ee3\u7801",id:"\u5b9e\u9645\u5224\u65ad\u72b6\u6001\u7684\u4ee3\u7801",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u6e38\u620f\u4e2d\u5982\u4f55\u4f7f\u7528\u53cc\u7ebf\u7a0b\uff0c\u5b8c\u6210\u83b7\u53d6\u952e\u76d8\u8f93\u5165\u63a7\u5236\u8d2a\u5403\u86c7\u79fb\u52a8\uff0c\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u5b66\u4e60\u4e24\u4e2a\u51fd\u6570\uff0cCreateThread \u548c GetAsyncKeyState"),(0,r.kt)("h2",{id:"\u53cc\u7ebf\u7a0b\u7684\u4f5c\u7528"},"\u53cc\u7ebf\u7a0b\u7684\u4f5c\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9345).Z,width:"912",height:"616"})),(0,r.kt)("p",null,"\u5728\u6211\u4eec\u7684\u8bbe\u8ba1\u4e2d\uff0c\u5f00\u4e86\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u7528\u4e8e\u83b7\u53d6\u952e\u76d8\u8f93\u5165\uff0c\u5b83\u5c06\u5f71\u54cd\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"globalMovementDirection")," \uff0c\u5f53\u9700\u8981\u79fb\u52a8\u86c7\u7684\u65f6\u5019\uff0c\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\u5c06\u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalMovementDirection")," \u4f5c\u4e3a\u63a7\u5236\u4fe1\u53f7"),(0,r.kt)("h2",{id:"createthread-\u7684\u7528\u6cd5"},"CreateThread \u7684\u7528\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"HANDLE CreateThread(\n  LPSECURITY_ATTRIBUTES lpsa,\n  DWORD cbStack,\n  LPTHREAD_START_ROUTINE lpStartAddr,\n  LPVOID lpvThreadParam,\n  DWORD fdwCreate,\n  LPDWORD lpIDThread\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lpsa\uff0c\u5ffd\u7565\uff0c\u5fc5\u987b\u4e3a NULL"),(0,r.kt)("li",{parentName:"ul"},"cbStack\uff0c\u5ffd\u7565"),(0,r.kt)("li",{parentName:"ul"},"lpStartAddr\uff0c\u7ebf\u7a0b\u7684\u8d77\u59cb\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"lpvThreadParam\uff0c\u6307\u5411\u4f20\u9012\u7ed9\u7ebf\u7a0b\u7684\u5355\u4e2a 32 \u4f4d\u53c2\u6570\u503c\u7684\u957f\u6307\u9488"),(0,r.kt)("li",{parentName:"ul"},"fdwCreate\uff0c\u6267\u884c\u63a7\u5236\u7ebf\u7a0b\u521b\u5efa\u7684\u6807\u5fd7"),(0,r.kt)("li",{parentName:"ul"},"lpIDThread\uff0c\u6307\u5411\u63a5\u6536\u7ebf\u7a0b\u6807\u8bc6\u7b26\u7684 32 \u4f4d\u53d8\u91cf\u7684\u957f\u6307\u9488\uff0c\u5982\u679c\u6b64\u53c2\u6570\u4e3a NULL\uff0c\u5219\u4e0d\u53cd\u6094\u7ebf\u7a0b\u6807\u8bc6\u7b26")))),(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/previous-versions/bb202727(v=msdn.10)?redirectedfrom=MSDN"},"CreateThread | Microsoft Docs"))),(0,r.kt)("h2",{id:"\u5b9e\u9645\u521b\u5efa\u7ebf\u7a0b\u7684\u4ee3\u7801"},"\u5b9e\u9645\u521b\u5efa\u7ebf\u7a0b\u7684\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u6709\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void main() {\n    __asm {\n        // \u7b2c\u4e00\u4e2a\u7ebf\u7a0b\n        // \u83b7\u53d6\u952e\u76d8\u8f93\u5165\n        // \u64cd\u63a7\u86c7\u7684\u79fb\u52a8\n        push 0\n        push 0\n        push 0\n        lea eax, dword ptr ds : [judgeMovementDirection]\n        push eax\n        push 0\n        push 0\n        call CreateThread\n\n        // \u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\n        // \u6253\u5370\u6e38\u620f\u753b\u9762\n        call enterGame\n    }\n}\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u77e5\u9053\uff0c\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u5c31\u53ea\u6709\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"judgeMovementDirection")," \u5728\u8fd0\u884c\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"judgeMovementDirection")," \u5c31\u662f\u7684\u529f\u80fd\u5c31\u662f\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalMovementDirection")," \u53d8\u91cf"),(0,r.kt)("h2",{id:"getasynckeystate"},"GetAsyncKeyState"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"GetAsyncKeyState \u662f\u4e00\u4e2a\u7528\u6765\u5224\u65ad\u51fd\u6570\u8c03\u7528\u65f6\u6307\u5b9a\u865a\u62df\u952e\u7684\u72b6\u6001\uff0c\u786e\u5b9a\u7528\u6237\u5f53\u524d\u662f\u5426\u6309\u4e0b\u4e86\u952e\u76d8\u7684\u4e00\u4e2a\u952e\u7684\u51fd\u6570\u3002\u5982\u679c\u6309\u4e0b\uff0c\u5219\u8fd4\u56de\u503c\u6700\u9ad8\u4f4d\u4e3a 1"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"SHORT GetAsyncKeyState(\n  int vKey\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"vKey")),(0,r.kt)("p",{parentName:"li"},"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes"},"\u865a\u62df\u952e\u4ee3\u7801")))))),(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9 GetAsyncKeyState \u8c03\u7528\u4e4b\u540e\uff0c\u5982\u679c\u6309\u952e\u5df2\u7ecf\u88ab\u6309\u4e0b\uff0c\u5219\u8fd4\u56de\u503c\u4f4d 15 \u8bbe\u4e3a 1\uff1b\u5982\u62ac\u8d77\uff0c\u5219\u4e3a 0"),(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014 ",(0,r.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/GetAsyncKeyState/918387?fr=aladdin"},"GetAsyncKeyState \u767e\u5ea6\u767e\u79d1")),(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getasynckeystate"},"GetAsyncKeyState | Microsoft Docs"))),(0,r.kt)("h2",{id:"\u5b9e\u9645\u5224\u65ad\u72b6\u6001\u7684\u4ee3\u7801"},"\u5b9e\u9645\u5224\u65ad\u72b6\u6001\u7684\u4ee3\u7801"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u65f6\uff0c\u8d2a\u5403\u86c7\u4e0d\u80fd\u591f\u76f4\u63a5\u6389\u5934\uff0c\u6240\u4ee5\u5728\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalMovementDirection")," \u8d4b\u503c\u65f6\uff0c\u5fc5\u987b\u9996\u5148\u5224\u65ad\u6b64\u65f6\u86c7\u7684\u79fb\u52a8\u65b9\u5411"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u86c7\u5411\u4e0b\u79fb\u52a8\uff0c\u5219\u5411\u4e0a\u7684\u6309\u952e\u4e0d\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u86c7\u5411\u4e0a\u79fb\u52a8\uff0c\u5219\u5411\u4e0b\u7684\u6309\u952e\u4e0d\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u86c7\u5411\u5de6\u79fb\u52a8\uff0c\u5219\u5411\u53f3\u7684\u6309\u952e\u4e0d\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u86c7\u5411\u53f3\u79fb\u52a8\uff0c\u5219\u5411\u5de6\u7684\u6309\u952e\u4e0d\u751f\u6548")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void  judgeMovementDirection() {\n    while (true) {\n        __asm {\n    back_while:\n        // \u83b7\u53d6 w \u952e\n        push 87\n        call GetAsyncKeyState\n        // \u4e0e\u64cd\u4f5c\uff0c\u83b7\u53d6\u7b2c 15 \u4f4d\u7684\u503c\n        and ax, 0ff00h\n        // \u5982\u679c\u4e3a 0 \u8868\u793a\u6ca1\u6709\u88ab\u6309\u4e0b\n        cmp ax, 0\n        jne w_press\n\n        // \u83b7\u53d6 s \u952e\n        push 83\n        call GetAsyncKeyState\n        and ax, 0ff00h\n        cmp ax, 0\n        jne s_press\n\n        // \u83b7\u53d6 a \u952e\n        push 65\n        call GetAsyncKeyState\n        and ax, 0ff00h\n        cmp ax, 0\n        jne a_press\n\n        // \u83b7\u53d6 d \u952e\n        push 68\n        call GetAsyncKeyState\n        and ax, 0ff00h\n        cmp ax, 0\n        jne d_press\n        jmp back_while\n\n        // \u5982\u679c w \u952e\u88ab\u6309\u4e0b\n    w_press :\n        mov eax, dword ptr ds : [globalMovementDirection]\n        // \u5982\u679c\u5f53\u524d\u79fb\u52a8\u65b9\u5411\u5411\u4e0b, \u5219\u5ffd\u7565\u6b64\u6b21\u4e8b\u4ef6\n        cmp eax, 2\n        je w_back\n        mov dword ptr ds : [globalMovementDirection] , 1\n        w_back :\n        jmp back_while\n\n        // \u5982\u679c s \u952e\u88ab\u6309\u4e0b\n    s_press :\n        mov eax, dword ptr ds : [globalMovementDirection]\n        // \u5982\u679c\u5f53\u524d\u79fb\u52a8\u65b9\u5411\u5411\u4e0a, \u5219\u5ffd\u7565\u6b64\u6b21\u4e8b\u4ef6\n        cmp eax, 1\n        je s_back\n        mov dword ptr ds : [globalMovementDirection] , 2\n        s_back :\n        jmp back_while\n\n        // \u5982\u679c a \u952e\u88ab\u6309\u4e0b\n    a_press :\n        mov eax, dword ptr ds : [globalMovementDirection]\n        // \u5982\u679c\u5f53\u524d\u79fb\u52a8\u65b9\u5411\u5411\u53f3, \u5219\u5ffd\u7565\u6b64\u6b21\u4e8b\u4ef6\n        cmp eax, 4\n        je a_back\n        mov dword ptr ds : [globalMovementDirection] , 3\n        a_back :\n        jmp back_while\n\n        // \u5982\u679c d \u952e\u88ab\u6309\u4e0b\n    d_press :\n        mov eax, dword ptr ds : [globalMovementDirection]\n        // \u5982\u679c\u5f53\u524d\u79fb\u52a8\u65b9\u5411\u5411\u5de6, \u5219\u5ffd\u7565\u6b64\u6b21\u4e8b\u4ef6\n        cmp eax, 3\n        je d_back\n        mov dword ptr ds : [globalMovementDirection] , 4\n        d_back :\n        jmp back_while\n        }\n    }\n}\n")))}m.isMDXComponent=!0},9345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snake5-02cf345552401c0a2d62bc09e330593d.jpg"}}]);