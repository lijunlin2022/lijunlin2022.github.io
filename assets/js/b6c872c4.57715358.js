"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8305],{97243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(85893),r=n(11151);const o={},a=void 0,i={id:"rust/test",title:"test",description:"assert_eq!",source:"@site/docs/10-rust/05-test.md",sourceDirName:"10-rust",slug:"/rust/test",permalink:"/docs/rust/test",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u6570\u7ec4 Vector",permalink:"/docs/rust/vector"},next:{title:"\u6dfb\u52a0\u4f9d\u8d56\u548c\u79fb\u9664\u4f9d\u8d56",permalink:"/docs/rust/dependence"}},c={},d=[{value:"assert_eq!",id:"assert_eq",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"assert_eq",children:"assert_eq!"}),"\n",(0,s.jsxs)(t.p,{children:["Rust \u6709\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"assert_eq!"})," ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," \u7684\u8f85\u52a9\u5b8f\uff0c\u53ef\u4ee5\u8f85\u52a9\u6211\u4eec\u6d4b\u8bd5\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5 LeetCode \u4e2d\u7684 Defanging an IP Address ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," \u9898\u76ee\u4e3a\u4f8b\uff0c\u6211\u4eec\u7ed9\u9700\u8981\u63d0\u4ea4\u7684\u4ee3\u7801\u7f16\u5199\u4e24\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'fn defang_i_paddr(address: String) -> String {\r\n    address.replace(".", "[.]")\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n\r\n    use super::*;\r\n\r\n    #[test]\r\n    fn test_defang_i_paddr() {\r\n        assert_eq!("1[.]1[.]1[.]1", defang_i_paddr(String::from("1.1.1.1")));\r\n\r\n        assert_eq!("255[.]100[.]50[.]0", defang_i_paddr(String::from("255.100.50.0")));\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsx)("script",{src:"https://utteranc.es/client.js",repo:"lijunlin2022/blog-issues","issue-term":"rust-test",theme:"github-light",crossorigin:"anonymous",async:!0}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://rustwiki.org/en/rust-by-example/testing/unit_testing.html",children:"Unit testing | Rust"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/defanging-an-ip-address/",children:"Defanging an IP Address | LeetCode"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(67294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);