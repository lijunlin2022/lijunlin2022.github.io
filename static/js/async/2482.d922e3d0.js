"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2482"],{78505:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t=r(85893),s=r(50065),i=r(42548);function a(e){let n=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"思维导图",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#思维导图",children:"#"}),"思维导图"]}),"\n",(0,t.jsx)(i.Z,{markdown:`
# 小程序如何检测无流量组件？分享一种打点检测方法

## 背景

- 无流量组件，但依然占用了包体积

## 方法

### 获取全体组件的集合

#### 思路

- json 文件中有 "component": true，则认为该 json 文件代表一个组件。

#### 实现

- 遍历项目中所有的文件，实现见代码 1

- 找到所有能代表组件的 json 文件，实现见代码 2

### 获取有流量组件的集合

- 思路：给每一个组件生命周期里打点

- 基础方法：利用 Behavior 给组件生命周期内插入一段逻辑，实现见代码 3；

- 基础方法缺陷：如果有人新增组件，可能会忘记在 behaviors 中注册 myBehavior。

- 改进思路，新增 enhanceComponent 函数替换 Component 函数，实现见代码 4；

- 改进思路缺陷：如果有人新增组件时，忘记引入 enhanceComponent 函数，那么这个组件就不会被上报

- 二次改进思路，依然使用 Component 函数，然后利用构建将 Component 替换成 enhanceComponent 来替换，实现见代码 5。

- 二次前置问题：路径问题，可以通过配置别名解决

### 取全体组件和有流量组件的差集，见代码 6
`}),"\n",(0,t.jsxs)(n.h2,{id:"代码-1",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-1",children:"#"}),"代码 1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"const fs = require('fs');\r\nconst path = require('path');\r\n\r\nfunction readDirWithStack(dir) {\r\n  const results = [];\r\n  const stack = [dir];\r\n\r\n  while (stack.length) {\r\n    const currentDir = stack.pop();\r\n    const list = fs.readdirSync(currentDir);\r\n\r\n    list.forEach(file => {\r\n      const filePath = path.resolve(currentDir, file);\r\n      const stat = fs.statSync(filePath);\r\n\r\n      if (stat && stat.isDirectory()) {\r\n        stack.push(filePath);\r\n      } else {\r\n        results.push(filePath);\r\n      }\r\n    });\r\n  }\r\n\r\n  return results;\r\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"代码-2",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-2",children:"#"}),"代码 2"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"// 判断 json 是否能代表组件\r\nfunction isComponent(filePath) {\r\n  const dir = path.dirname(filePath);\r\n  const files = fs.readdirSync(dir);\r\n  const jsonFile = files.find(file => file.endsWith('.json'));\r\n  if (jsonFile) {\r\n    const jsonFilePath = path.join(dir, jsonFile);\r\n    const jsonContent = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));\r\n    return jsonContent.component === true;\r\n  }\r\n  return false;\r\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"代码-3",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-3",children:"#"}),"代码 3"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"const myBehavior = Behavior({\r\n  lifetimes: {\r\n    attached() {\r\n      console.log('>>>>> my behavior')\r\n    }\r\n  }\r\n})\r\n\r\nComponent({\r\n  behaviors: [myBehavior],\r\n  lifetimes: {\r\n    attached() {\r\n      console.log('>>>>> normal behavior')\r\n    }\r\n  }\r\n})\r\n\r\n// 输出\r\n// >>>>> my behavior\r\n// >>>>> normal behavior\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"代码-4",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-4",children:"#"}),"代码 4"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"const enhanceBehavior = Behavior({\r\n  lifetimes: {\r\n    attached: function () {\r\n      console.log('enhance component >>>>>: ', this.is)\r\n    }\r\n  }\r\n})\r\n\r\n// 导出的 enhanceComponent 函数，默认就注册了 enhanceBehavior，enhanceBehavior 中我们可以打点\r\nmodule.exports.enhanceComponent = function (config) {\r\n  const { behaviors = [], ...params } = config || {}\r\n  return Component({\r\n    behaviors: [enhanceBehavior, ...behaviors],\r\n    ...params,\r\n  })\r\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"代码-5",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-5",children:"#"}),"代码 5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"// 替换 Component 函数\r\nfunction replaceComponentFunction(filePath) {\r\n  const fileContent = fs.readFileSync(filePath, 'utf8');\r\n  const newContent = fileContent.replace(\r\n    /\\bComponent\\(/g,\r\n    \"require('@utils/enhance-component.js').enhanceComponent(\"\r\n  );\r\n  fs.writeFileSync(filePath, newContent, 'utf8');\r\n}\r\n\r\n// 获取所有 .js 文件\r\nconst files = readDirWithStack(targetDir).filter(file => file.endsWith('.js'));\r\n\r\n// 替换每个文件中的 Component 函数\r\nfiles.forEach(file => {\r\n  if (isComponent(file)) {\r\n    replaceComponentFunction(file);\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"代码-6",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码-6",children:"#"}),"代码 6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"",children:"// 经过之前的处理，我们已经获取了全体组件的集合，也获取了有流量组件的集合。\r\n// 它们都可以用数组来表示。因此我们其中需要做的，就是取两个数组的差集。\r\n\r\nconst arr1 = ['a', 'b', 'c', 'd', 'e']\r\nconst arr2 = ['a', 'b', 'e']\r\n\r\nconst diff = arr1.filter(item => !arr2.includes(item))\r\n\r\nconsole.log(diff) // ['c', 'd']\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fblog%2F2024%2F12%2F04%2Foutline.mdx"]={toc:[{id:"思维导图",text:"思维导图",depth:2},{id:"代码-1",text:"代码 1",depth:2},{id:"代码-2",text:"代码 2",depth:2},{id:"代码-3",text:"代码 3",depth:2},{id:"代码-4",text:"代码 4",depth:2},{id:"代码-5",text:"代码 5",depth:2},{id:"代码-6",text:"代码 6",depth:2}],title:"",frontmatter:{}}},42548:function(e,n,r){r.d(n,{Z:()=>f});var t=r("85893"),s=r("67294"),i=r("1001"),a=r("72555");let o=new(r("94970")).$T,{scripts:c,styles:l}=o.getAssets();"undefined"!=typeof window&&((0,a.j)(l),(0,a.fs)(c,{getMarkmap:()=>i}));var h=r("70243");r("59723");let d={minHeight:"50vh",backgroundColor:"#f1f1f1"};function f(e){let{markdown:n}=e,[r]=(0,s.useState)(n),[a,c]=(0,s.useState)(d),l=(0,s.useRef)(),f=(0,s.useRef)(),u=(0,s.useRef)(),m=(e,n)=>{for(;null==n?void 0:n.firstChild;)n.firstChild.remove();if(e&&n){let r=new h.o;r.attach(e),r.register({id:"full",title:"full screen",content:h.o.icon("M16 4h-12v12h12v-8h-8v4h2v-2h4v4h-8v-8h10z"),onClick:()=>{var e;let n=null===(e=document.getElementsByClassName("rspress-sidebar"))||void 0===e?void 0:e[0],r=document.getElementById("aside-container");if(!!n&&!!r){if("fixed"===l.current.style.position){c(d),n.style.display="block",r.style.display="block";return}c({position:"fixed",zIndex:1,right:0,bottom:0,width:"100vw",height:"calc(100vh - var(--rp-nav-height))",backgroundColor:"#f1f1f1"}),n.style.display="none",r.style.display="none"}}}),r.setItems(["zoomIn","zoomOut","fit","full"]),n.append(r.render())}};return(0,s.useEffect)(()=>{if(f.current)return;let e=i.Markmap.create(l.current);f.current=e,m(f.current,u.current)},[l.current]),(0,s.useEffect)(()=>{let e=f.current;if(!e)return;let{root:n}=o.transform(r);e.setData(n),e.fit()},[f.current,r]),(0,s.useEffect)(()=>{let e=f.current;if(!!e)e.fit()},[a]),(0,t.jsx)(s.Fragment,{children:(0,t.jsxs)("div",{className:"relative",style:a,children:[(0,t.jsx)("svg",{className:"w-full h-full",ref:l,style:a}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 z-10",ref:u})]})})}}}]);