"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["56"],{65415:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var a=r(85893),l=r(50065),s=r(95895);function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"变量和常量",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#变量和常量",children:"#"}),"变量和常量"]}),"\n",(0,a.jsx)(s.Z,{defaultLocale:"zh-CN"}),"\n",(0,a.jsxs)(n.h2,{id:"变量",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#变量",children:"#"}),"变量"]}),"\n",(0,a.jsx)(n.p,{children:"和其他语言不同，go 语言声明变量时，跟随在 var 后面的首先是变量名，然后是变量类型。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:'var vname vtype\r\nvname = "hello"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:'var vname1, vname2 vtype\r\nvname1, vname2 = "hello", "world"\n'})}),"\n",(0,a.jsx)(n.p,{children:"go 变量如果没有初始化，那么默认会设置一些值。"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"数值类型（包括 complex64/128）为 0"}),"\n",(0,a.jsx)(n.li,{children:"布尔类型为 false"}),"\n",(0,a.jsx)(n.li,{children:'字符串为 ""（空字符串）'}),"\n",(0,a.jsx)(n.li,{children:"以下几种类型为 nil"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:"var a *int\r\nvar a []int\r\nvar a map[string] int\r\nvar a func(string) int\r\nvar a error // error 是接口\n"})}),"\n",(0,a.jsx)(n.p,{children:"go 语言可以根据值自信判断变量类型。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:'var vname = vale\r\nvar vname1, vname2 = "hello", "world"\n'})}),"\n",(0,a.jsx)(n.p,{children:"声明和变量都可以缩写"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:'intVal := 1\r\nstrVal1, strVal2 := "hello", "world"\n'})}),"\n",(0,a.jsx)(n.p,{children:"上述代码和下方写法等价："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:'var intVal int\r\nintVal = 1\r\n\r\nvar strVal1, strVal2 string\r\nstr1Val1, strVal2 = "hello", "world"\n'})}),"\n",(0,a.jsx)(n.p,{children:"还有一种写法，通常适用于定义全局变量。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:"var (\r\n  vname1 vtype1\r\n  vname2 vtype2\r\n)\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"常量",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常量",children:"#"}),"常量"]}),"\n",(0,a.jsx)(n.p,{children:"常量的语法和上述变量的语法基本一致。但是有一些特殊的地方。"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"和其他语言不同，go 的常量一般不会全大写。"}),"\n",(0,a.jsx)(n.li,{children:"go 没有单独的枚举类型，一般会直接使用常量来做枚举。"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:"const (\r\n  Unknown = 0\r\n  Female = 1\r\n  Male = 2\r\n)\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"有一个 iota 的特殊常量，能够赋值给常量。他可以作为是 const 语句块的自增下标。"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:"const (\r\n  a = iota\r\n  b\r\n  c\r\n)\n"})}),"\n",(0,a.jsx)(n.p,{children:"上述代码等价于："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",meta:"",children:"const (\r\n  a = 0\r\n  b = 1\r\n  c = 2\r\n)\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}let c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["docs%2Fgo%2F02-variables-and-constants.md"]={toc:[{id:"变量",text:"变量",depth:2},{id:"常量",text:"常量",depth:2}],title:"变量和常量",frontmatter:{}}},95895:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r(85893),l=r(67294),s=r(45687);r(6175);let i={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function t(e,n,r){let a=Object.keys(i).includes(n)?n:r;return i[a](e)}let c=e=>{let{defaultLocale:n="en-US"}=e,r=(0,s.Vi)().page.readingTimeData,i=(0,s.Jr)(),c=(0,s.e7)(),[d,h]=(0,l.useState)(t(r,i,n));return(0,l.useEffect)(()=>{h(t(r,i,n))},[i,r]),(0,a.jsx)("span",{"data-dark":String(c),className:"rp-reading-time",children:d})}}}]);