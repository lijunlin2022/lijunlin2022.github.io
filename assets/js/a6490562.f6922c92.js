"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3758],{392:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=e(5893),d=e(1151);const s={},i="\u5b57\u7b26\u4e32\u5360\u4f4d\u7b26",l={id:"go/placeholder",title:"\u5b57\u7b26\u4e32\u5360\u4f4d\u7b26",description:"\u672c\u6587\u6240\u63d0\u5230\u7684\u5360\u4f4d\u7b26\uff0c\u5747\u53ef\u4ee5\u5230 go \u5b98\u7f51\u67e5\u770b//pkg.go.dev/fmt",source:"@site/docs/13-go/03-placeholder.md",sourceDirName:"13-go",slug:"/go/placeholder",permalink:"/docs/go/placeholder",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/go/data-types"},next:{title:"rune",permalink:"/docs/go/rune"}},c={},h=[{value:"\u666e\u901a\u5360\u4f4d\u7b26",id:"\u666e\u901a\u5360\u4f4d\u7b26",level:2},{value:"\u5e03\u5c14\u5360\u4f4d\u7b26",id:"\u5e03\u5c14\u5360\u4f4d\u7b26",level:2},{value:"\u6574\u6570\u5360\u4f4d\u7b26",id:"\u6574\u6570\u5360\u4f4d\u7b26",level:2},{value:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09",id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8",level:2},{value:"\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u5207\u7247",id:"\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u5207\u7247",level:2}];function x(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"\u5b57\u7b26\u4e32\u5360\u4f4d\u7b26",children:"\u5b57\u7b26\u4e32\u5360\u4f4d\u7b26"}),"\n",(0,t.jsxs)(r.p,{children:["\u672c\u6587\u6240\u63d0\u5230\u7684\u5360\u4f4d\u7b26\uff0c\u5747\u53ef\u4ee5\u5230 go \u5b98\u7f51\u67e5\u770b: ",(0,t.jsx)(r.a,{href:"https://pkg.go.dev/fmt",children:"https://pkg.go.dev/fmt"})]}),"\n",(0,t.jsx)(r.h2,{id:"\u666e\u901a\u5360\u4f4d\u7b26",children:"\u666e\u901a\u5360\u4f4d\u7b26"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%v"}),(0,t.jsx)(r.td,{children:"\u76f8\u5e94\u503c\u7684\u9ed8\u8ba4\u683c\u5f0f\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%+v"}),(0,t.jsx)(r.td,{children:"\u6253\u5370\u7ed3\u6784\u4f53\u65f6\uff0c\u4f1a\u6dfb\u52a0\u5b57\u6bb5\u540d"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%#v"}),(0,t.jsx)(r.td,{children:"\u76f8\u5e94\u503c\u7684 go \u8bed\u6cd5\u8868\u793a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%T"}),(0,t.jsx)(r.td,{children:"\u76f8\u5e94\u503c\u7684\u7c7b\u578b\u7684 go \u8bed\u6cd5\u8868\u793a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%%"}),(0,t.jsx)(r.td,{children:"\u5b57\u9762\u4e0a\u7684\u767e\u5206\u53f7\uff0c\u5e76\u975e\u503c\u7684\u5360\u4f4d\u7b26"})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'type Dog struct {\r\n  name string\r\n}\r\n\r\nfunc main() {\r\n  d := Dog{"\u65fa\u8d22"}\r\n  fmt.Printf("%v\\n", d)  // {\u65fa\u8d22}\r\n  fmt.Printf("%+v\\n", d) // {name:\u65fa\u8d22}\r\n  fmt.Printf("%#v\\n", d) // main.Dog{name:"\u65fa\u8d22"}\r\n  fmt.Printf("%T\\n", d)  // main.Dog\r\n  fmt.Printf("%%\\n")     // %\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u5e03\u5c14\u5360\u4f4d\u7b26",children:"\u5e03\u5c14\u5360\u4f4d\u7b26"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%t"}),(0,t.jsx)(r.td,{children:"true \u6216\u8005 false"})]})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  b := false\r\n  fmt.Printf("%t\\n", b) // false\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u6574\u6570\u5360\u4f4d\u7b26",children:"\u6574\u6570\u5360\u4f4d\u7b26"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%b"}),(0,t.jsx)(r.td,{children:"\u4e8c\u8fdb\u5236\u8868\u793a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%o"}),(0,t.jsx)(r.td,{children:"\u516b\u8fdb\u5236\u8868\u793a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%d"}),(0,t.jsx)(r.td,{children:"\u5341\u8fdb\u5236\u8868\u793a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%x"}),(0,t.jsx)(r.td,{children:"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5c0f\u5199 a-f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%X"}),(0,t.jsx)(r.td,{children:"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5927\u5199 A-F"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%c"}),(0,t.jsx)(r.td,{children:"\u76f8\u5e94 Unicode \u7801\u70b9\u6240\u8868\u793a\u7684\u5b57\u7b26"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%q"}),(0,t.jsx)(r.td,{children:"\u5355\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u5b57\u9762\u503c\uff0c\u7531 go \u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%U"}),(0,t.jsx)(r.td,{children:"Unicode \u683c\u5f0f\uff1aU+1234\uff0c\u7b49\u540c\u4e8e \u201cU+%04X\u201d"})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  fmt.Printf("%b\\n", 15) // 1111\r\n  fmt.Printf("%o\\n", 15) // 17\r\n  fmt.Printf("%d\\n", 15) // 15\r\n  fmt.Printf("%x\\n", 15) // f\r\n  fmt.Printf("%X\\n", 15) // F\r\n}\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  fmt.Printf("%c\\n", 0x4E2D) // \u4e2d\r\n  fmt.Printf("%q\\n", 0x4E2D) // \'\u4e2d\'\r\n  fmt.Printf("%U\\n", 0x4E2D) // U+4E2D\r\n}\n'})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%2d"}),(0,t.jsx)(r.td,{children:"\u5c06\u6574\u6570\u683c\u5f0f\u5316\u4e3a\u5341\u8fdb\u5236\u7684\u5f62\u5f0f\uff0c\u5982\u679c\u6574\u6570\u7684\u4f4d\u6570\u4e0d\u8db3 4 \u4f4d\uff0c\u5219\u5728\u524d\u9762\u8865\u7a7a\u683c\uff0c\u76f4\u5230\u6574\u6570\u7684\u4f4d\u6570\u4e3a 2 \u4f4d\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%02d"}),(0,t.jsx)(r.td,{children:"\u5c06\u6574\u6570\u683c\u5f0f\u5316\u4e3a\u5341\u8fdb\u5236\u7684\u5f62\u5f0f\uff0c\u5982\u679c\u6574\u6570\u7684\u4f4d\u6570\u4e0d\u8db3 2\u4f4d \uff0c\u5219\u5728\u524d\u9762\u8865 0\uff0c\u76f4\u5230\u6574\u6570\u7684\u4f4d\u6570\u4e3a 2 \u4f4d\u3002"})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  fmt.Printf("AB%2dCD\\n", 5)  // AB 5CD\r\n  fmt.Printf("AB%02dCD\\n", 5) // AB05CD\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8",children:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%b"}),(0,t.jsx)(r.td,{children:"\u65e0\u5c0f\u6570\u90e8\u5206\uff0c\u6307\u6570\u4e3a\u4e8c\u7684\u5e42\u7684\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4e0e strconv.FormatFloat \u7684 'b' \u8f6c\u6362\u683c\u5f0f\u4e00\u81f4\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%e"}),(0,t.jsx)(r.td,{children:"\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4f8b\u5982 -1234.456e+78"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%E"}),(0,t.jsx)(r.td,{children:"\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4f8b\u5982 -1234.456E+78"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%f"}),(0,t.jsx)(r.td,{children:"\u6709\u5c0f\u6570\u70b9\u800c\u65e0\u6307\u6570\uff0c\u4f8b\u5982 123.456"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%g"}),(0,t.jsx)(r.td,{children:"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %e \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u76840\uff09\u8f93\u51fa"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%G"}),(0,t.jsx)(r.td,{children:"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %E \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u76840\uff09\u8f93\u51fa"})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  fmt.Printf("%b\\n", 1.2) // 5404319552844595p-52\r\n  fmt.Printf("%e\\n", 1.2) // 1.200000e+00\r\n  fmt.Printf("%E\\n", 1.2) // 1.200000E+00\r\n  fmt.Printf("%f\\n", 1.2) // 1.200000\r\n  fmt.Printf("%g\\n", 1.2) // 1.2\r\n  fmt.Printf("%G\\n", 1.2) // 1.2\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u5207\u7247",children:"\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u5207\u7247"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5360\u4f4d\u7b26"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%s"}),(0,t.jsx)(r.td,{children:"\u8f93\u51fa\u5b57\u7b26\u4e32 (string \u7c7b\u578b\u6216 []byte)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%q"}),(0,t.jsx)(r.td,{children:"\u53cc\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u4e32\uff0c\u7531 go \u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%x"}),(0,t.jsx)(r.td,{children:"\u5341\u516d\u8fdb\u5236\uff0c\u5c0f\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"%X"}),(0,t.jsx)(r.td,{children:"\u5341\u516d\u8fdb\u5236\uff0c\u5927\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\r\n  fmt.Printf("%s\\n", "golang") // golang\r\n  fmt.Printf("%q\\n", "golang") // "golang"\r\n  fmt.Printf("%x\\n", "golang") // 676f6c616e67\r\n  fmt.Printf("%X\\n", "golang") // 676F6C616E67\r\n}\n'})})]})}function j(n={}){const{wrapper:r}={...(0,d.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>l,a:()=>i});var t=e(7294);const d={},s=t.createContext(d);function i(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(s.Provider,{value:r},n.children)}}}]);