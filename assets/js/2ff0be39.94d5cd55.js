"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9915],{10827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(85893),s=n(11151);const o={},i="\u6b63\u5219\u8868\u8fbe\u5f0f",c={id:"rust/regex",title:"\u6b63\u5219\u8868\u8fbe\u5f0f",description:"- replace_all() \u53ef\u4ee5\u66ff\u6362\u6389\u6240\u6709\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5230\u7684\u5b57\u7b26\u3002",source:"@site/docs/10-rust/03-regex.md",sourceDirName:"10-rust",slug:"/rust/regex",permalink:"/docs/rust/regex",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b57\u7b26\u4e32 String \u548c &str",permalink:"/docs/rust/string-&str"},next:{title:"\u52a8\u6001\u6570\u7ec4 Vector",permalink:"/docs/rust/vector"}},l={},a=[];function u(e){const t={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u6b63\u5219\u8868\u8fbe\u5f0f",children:"\u6b63\u5219\u8868\u8fbe\u5f0f"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"replace_all()"})," \u53ef\u4ee5\u66ff\u6362\u6389\u6240\u6709\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5230\u7684\u5b57\u7b26\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust,ignore",children:'use regex::Regex;\r\n\r\nfn main() {\r\n    let s: &str = "abcdefghijklmn";\r\n    let re: Regex = Regex::new(r"\\w").unwrap();\r\n    let new_s: String = re.replace_all(s, "-").to_string();\r\n    print!("{}", new_s);\r\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);