"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8897"],{94637:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),s=n(50065),i=n(42548);function l(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"思维导图",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#思维导图",children:"#"}),"思维导图"]}),"\n",(0,r.jsx)(i.Z,{markdown:`
# 介绍小程序套小程序的三种方案，最后一种也许只有大厂才用

## 引子

- 你常常搜索到一堆类似名字的小程序，都是同一个企业的，这些小程序应该如何组织呢？

## 弹窗打开另一个小程序

- 优点
  - 没有数量限制
  - 新打开小程序的功能不受限制（弹窗打开的小程序，可以继续弹窗打开另一个小程序）
  - 天生隔离，不占用原小程序体积，适配工作量可以忽略不计
- 缺点
  - 每次都会出显眼的弹窗，用户容易流失
- 场景
  - 餐馆最常见

## 半屏打开另一个小程序

- 优点
  - 没有弹窗，用户体验会更好
  - 天生隔离，不占用原小程序体积，适配工作量可以忽略不计
- 缺点
  - 不能打开个人主体的小程序
  - 有数量限制，按官方文档最多 10 个
  -  新打开小程序的功能受限制
    - 打开的半屏小程序，不能再打开新的半屏小程序
    - 打开的半屏小程序不能够分享
- 场景
  - 适合不需要分享功能，比较在意用户体验的场景

## 分包打开另一个小程序

- 优点
  - 用户无感知、流失量少
  - 功能无限制
- 缺点
  - 需要开发者手动隔离、占用体积、难度高（[微信小程序禁用 JS 解释器](https://developers.weixin.qq.com/community/minihome/doc/0000ae500e4fd0541f2ea33755b801)）
- 场景
  - 适合技术实力强的团队
`}),"\n",(0,r.jsxs)(t.h2,{id:"摘要",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#摘要",children:"#"}),"摘要"]}),"\n",(0,r.jsx)(t.p,{children:"本文我会为你介绍小程序套小程序的三种方案，其中「分包打开另一个小程序」最复杂，也许只有大厂才会用到。"})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fblog%2F2024%2F12%2F14%2Foutline.mdx"]={toc:[{id:"摘要",text:"摘要",depth:2}],title:"思维导图",frontmatter:{}}},42548:function(e,t,n){n.d(t,{Z:()=>h});var r=n("85893"),s=n("67294"),i=n("1001"),l=n("72555");let a=new(n("94970")).$T,{scripts:c,styles:o}=a.getAssets();"undefined"!=typeof window&&((0,l.j)(o),(0,l.fs)(c,{getMarkmap:()=>i}));var d=n("70243");n("59723");let f={minHeight:"50vh",backgroundColor:"#f1f1f1"};function h(e){let{markdown:t}=e,[n]=(0,s.useState)(t),[l,c]=(0,s.useState)(f),o=(0,s.useRef)(),h=(0,s.useRef)(),u=(0,s.useRef)(),m=(e,t)=>{for(;null==t?void 0:t.firstChild;)t.firstChild.remove();if(e&&t){let n=new d.o;n.attach(e),n.register({id:"full",title:"full screen",content:d.o.icon("M16 4h-12v12h12v-8h-8v4h2v-2h4v4h-8v-8h10z"),onClick:()=>{var e;let t=null===(e=document.getElementsByClassName("rspress-sidebar"))||void 0===e?void 0:e[0],n=document.getElementById("aside-container");if(!!t&&!!n){if("fixed"===o.current.style.position){c(f),t.style.display="block",n.style.display="block";return}c({position:"fixed",zIndex:1,right:0,bottom:0,width:"100vw",height:"calc(100vh - var(--rp-nav-height))",backgroundColor:"#f1f1f1"}),t.style.display="none",n.style.display="none"}}}),n.setItems(["zoomIn","zoomOut","fit","full"]),t.append(n.render())}};return(0,s.useEffect)(()=>{if(h.current)return;let e=i.Markmap.create(o.current);h.current=e,m(h.current,u.current)},[o.current]),(0,s.useEffect)(()=>{let e=h.current;if(!e)return;let{root:t}=a.transform(n);e.setData(t),e.fit()},[h.current,n]),(0,s.useEffect)(()=>{let e=h.current;if(!!e)e.fit()},[l]),(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)("div",{className:"relative",style:l,children:[(0,r.jsx)("svg",{className:"w-full h-full",ref:o,style:l}),(0,r.jsx)("div",{className:"absolute bottom-0 right-0 z-10",ref:u})]})})}}}]);