"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6087],{1520:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(5893),t=o(1151);const i={},r="cookie\uff0clocal storage \u548c session storage",c={id:"js/cookie-localstorage-and-sessionstorage",title:"cookie\uff0clocal storage \u548c session storage",description:"Cookie",source:"@site/docs/03-js/10-cookie-localstorage-and-sessionstorage.md",sourceDirName:"03-js",slug:"/js/cookie-localstorage-and-sessionstorage",permalink:"/docs/js/cookie-localstorage-and-sessionstorage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u540c\u6e90\u548c\u8de8\u57df",permalink:"/docs/js/cors"},next:{title:"\u5783\u573e\u56de\u6536",permalink:"/docs/js/garbage-collection"}},l={},d=[{value:"Cookie",id:"cookie",level:2},{value:"LocalStorage \u548c SessionStorage",id:"localstorage-\u548c-sessionstorage",level:2},{value:"Cookie LocalStorage \u548c SessionStorage \u5bf9\u6bd4",id:"cookie-localstorage-\u548c-sessionstorage-\u5bf9\u6bd4",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cookielocal-storage-\u548c-session-storage",children:"cookie\uff0clocal storage \u548c session storage"}),"\n",(0,n.jsx)(s.h2,{id:"cookie",children:"Cookie"}),"\n",(0,n.jsx)(s.p,{children:"cookie \u672c\u8eab\u7528\u4e8e\u6d4f\u89c8\u5668\u548c server \u901a\u8baf, \u88ab \u201c\u501f\u7528\u201d \u5230\u672c\u5730\u5b58\u50a8\u6765"}),"\n",(0,n.jsx)(s.p,{children:"cookie \u7684\u7279\u70b9:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5b58\u50a8\u5927\u5c0f: \u6700\u5927 4KB"}),"\n",(0,n.jsx)(s.li,{children:"http \u8bf7\u6c42\u65f6\u9700\u8981\u53d1\u9001\u5230\u670d\u52a1\u7aef, \u589e\u52a0\u8bf7\u6c42\u6570\u636e\u91cf"}),"\n",(0,n.jsxs)(s.li,{children:["\u53ea\u80fd\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"document.cookie = '...'"})," \u6765\u4fee\u6539"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'document.cookie = "a=100;b=200;"\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u5bf9\u4e8e cookie \u6765\u8bf4, \u7528 document.cookie \u6765\u8bbe\u7f6e\u65f6, \u540c\u4e00\u4e2a key \u8bbe\u7f6e\u503c\u4f1a\u5bfc\u81f4\u503c\u88ab\u8986\u76d6, \u4e0d\u540c\u7684 key \u8bbe\u7f6e\u503c\u5219\u5c06 key \u548c value \u8ffd\u52a0\u5230 cookie \u4e2d"}),"\n",(0,n.jsx)(s.h2,{id:"localstorage-\u548c-sessionstorage",children:"LocalStorage \u548c SessionStorage"}),"\n",(0,n.jsx)(s.p,{children:"localStorage \u548c sessionStorage \u662f HTML5 \u4e3a\u5b58\u50a8\u8bbe\u8ba1\u7684, \u5b83\u4eec\u7684\u7279\u70b9\u4e3a:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5b58\u50a8\u5927\u5c0f: \u6700\u5927\u53ef\u5b58 5MB"}),"\n",(0,n.jsx)(s.li,{children:"\u4e0d\u4f1a\u968f\u7740 http \u8bf7\u6c42\u88ab\u53d1\u9001\u51fa\u53bb"}),"\n",(0,n.jsxs)(s.li,{children:["API \u7b80\u5355\u6613\u7528 ",(0,n.jsx)(s.code,{children:'setitem("key", "value")'})," \u548c ",(0,n.jsx)(s.code,{children:'getitem("key")'})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u4e0d\u8fc7 localStorage \u4e2a session \u6709\u4e9b\u533a\u522b:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"localStorage"})," \u6570\u636e\u4f1a\u6c38\u4e45\u5b58\u50a8, \u9664\u975e\u4ee3\u7801\u6216\u624b\u52a8\u5220\u9664"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"sessionStorage"})," \u6570\u636e\u53ea\u5b58\u5728\u4e8e\u5f53\u524d\u4f1a\u8bdd, \u6d4f\u89c8\u5668\u5173\u95ed\u5219\u6e05\u7a7a"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e00\u822c\u6211\u4eec\u7528 ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u8981\u591a\u4e00\u4e9b"]}),"\n",(0,n.jsx)(s.h2,{id:"cookie-localstorage-\u548c-sessionstorage-\u5bf9\u6bd4",children:"Cookie LocalStorage \u548c SessionStorage \u5bf9\u6bd4"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"cookie"}),(0,n.jsx)(s.th,{children:"localStorage"}),(0,n.jsx)(s.th,{children:"sessionStorage"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u5b58\u50a8\u5927\u5c0f"}),(0,n.jsx)(s.td,{children:"4KB"}),(0,n.jsx)(s.td,{children:"5MB"}),(0,n.jsx)(s.td,{children:"5MB"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u662f\u5426\u968f\u8bf7\u6c42\u5934\u63d0\u4ea4"}),(0,n.jsx)(s.td,{children:"\u662f"}),(0,n.jsx)(s.td,{children:"\u5426"}),(0,n.jsx)(s.td,{children:"\u5426"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\u662f\u5426\u53ef\u4ee5\u8de8\u9875"}),(0,n.jsx)(s.td,{children:"\u662f"}),(0,n.jsx)(s.td,{children:"\u662f"}),(0,n.jsx)(s.td,{children:"\u5426"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"API"}),(0,n.jsx)(s.td,{children:"\u7c97\u964b"}),(0,n.jsx)(s.td,{children:"\u7cbe\u7ec6"}),(0,n.jsx)(s.td,{children:"\u7cbe\u7ec6"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>c,a:()=>r});var n=o(7294);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);