"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2172"],{56638:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(85893),a=t(50065),i=t(95895);function s(e){let n=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"时间",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#时间",children:"#"}),"时间"]}),"\n",(0,r.jsx)(i.Z,{defaultLocale:"zh-CN"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",meta:"",children:'func main() {\r\n  t := time.Now()\r\n  fmt.Printf(\r\n    "%04d-%02d-%02d %02d:%02d:%02d\\n",\r\n    t.Year(),\r\n    t.Month(),\r\n    t.Day(),\r\n    t.Hour(),\r\n    t.Minute(),\r\n    t.Second(),\r\n  ) // 2023-12-26 20:33:08\r\n}\n'})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["docs%2Fgo%2F10-time.md"]={toc:[],title:"时间",frontmatter:{}}},95895:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(85893),a=t(67294),i=t(45687);t(6175);let s={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,n,t){let r=Object.keys(s).includes(n)?n:t;return s[r](e)}let d=e=>{let{defaultLocale:n="en-US"}=e,t=(0,i.Vi)().page.readingTimeData,s=(0,i.Jr)(),d=(0,i.e7)(),[u,l]=(0,a.useState)(c(t,s,n));return(0,a.useEffect)(()=>{l(c(t,s,n))},[s,t]),(0,r.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:u})}}}]);