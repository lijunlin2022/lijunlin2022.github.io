"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["1545"],{71833:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});var s=a(85893),t=a(50065),r=a(95895);function c(e){let n=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"配置环境",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置环境",children:"#"}),"配置环境"]}),"\n",(0,s.jsx)(r.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"go version # 查看 go 的版本\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"go env -w GO111MODULE=on # 开启 go 模块功能\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"go env -w  GOPROXY=https://goproxy.cn,direct # 设置 CDN\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"go mod init hello-go # 生成 go module\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"go run hello.go # 运行 go 文件\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["docs%2Fgo%2F01-env.md"]={toc:[],title:"配置环境",frontmatter:{}}},95895:function(e,n,a){a.d(n,{Z:function(){return l}});var s=a(85893),t=a(67294),r=a(45687);a(6175);let c={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function i(e,n,a){let s=Object.keys(c).includes(n)?n:a;return c[s](e)}let l=e=>{let{defaultLocale:n="en-US"}=e,a=(0,r.Vi)().page.readingTimeData,c=(0,r.Jr)(),l=(0,r.e7)(),[o,d]=(0,t.useState)(i(a,c,n));return(0,t.useEffect)(()=>{d(i(a,c,n))},[c,a]),(0,s.jsx)("span",{"data-dark":String(l),className:"rp-reading-time",children:o})}}}]);