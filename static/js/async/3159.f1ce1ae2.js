"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["3159"],{45233:function(e,n,r){r.r(n),r.d(n,{default:()=>j});var l=r("85893"),i=r("50065");let s=r.p+"static/image/value-and-reference1.641245ef.png",c=r.p+"static/image/value-and-reference2.c86a821b.png",d=r.p+"static/image/value-and-reference3.345d21e6.png";function h(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",p:"p",ol:"ol",h2:"h2",pre:"pre",code:"code",img:"img",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"原始值与引用值",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#原始值与引用值",children:"#"}),"原始值与引用值"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"值类型（原始值）：按值访问，操作的就是存储在变量中的实际值"}),"\n",(0,l.jsx)(n.li,{children:"引用类型（引用值）：在操作对象时，实际操作的是该对象的引用（reference）"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"对比："}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"原始值不能有属性，引用值可以随时添加、修改和删除其属性和方法"}),"\n",(0,l.jsx)(n.li,{children:"通过变量把一个原始值复制给另一个变量时，复制的是原始值；通过变量把一个引用值复制给另一个变量时，复制的实际上是一个指针"}),"\n",(0,l.jsx)(n.li,{children:"函数传递参数时，都是值传递的，只是引用值传递的值是一个指针"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"下面用代码和堆栈图来解释原理："}),"\n",(0,l.jsxs)(n.h2,{id:"值类型原理",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#值类型原理",children:"#"}),"值类型原理"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",meta:"",children:"let a = 100\r\nlet b = a\r\na = 200\r\nconsole.log(b) // 100\n"})}),"\n",(0,l.jsx)(n.p,{children:"值类型保存在栈中，可以直接取到变量的值，堆栈图为："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s})}),"\n",(0,l.jsxs)(n.h2,{id:"引用类型原理",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用类型原理",children:"#"}),"引用类型原理"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",meta:"",children:"let a = { age: 20 }\r\nlet b = a\r\nb.age = 21\r\nconsole.log(a.age) // 21\n"})}),"\n",(0,l.jsx)(n.p,{children:"引用类型保存在堆中，栈中取到的只是堆的地址，堆栈图为："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:c})}),"\n",(0,l.jsxs)(n.h2,{id:"深拷贝",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#深拷贝",children:"#"}),"深拷贝"]}),"\n",(0,l.jsx)(n.p,{children:"普通的引用类型赋值只是浅拷贝，想要深拷贝需要我们自己手写深拷贝的代码："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:"",children:'function deepClone(obj) {\r\n  if (typeof obj !== "object" || obj == null) {\r\n    return obj\r\n  }\r\n\r\n  let result = null\r\n  if (obj instanceof Array) {\r\n    result = []\r\n  } else {\r\n    result = {};\r\n  }\r\n\r\n  for (let key in obj) {\r\n    // 保证 key 不是原型的属性\r\n    if (obj.hasOwnProperty(key)) {\r\n      result[key] = deepClone(obj[key]);\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"使用深拷贝的原理",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用深拷贝的原理",children:"#"}),"使用深拷贝的原理"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:"",children:"let a = { age: 20 }\r\nlet b = deepClone(a)\r\nb.age = 21\r\nconsole.log(a.age) // 20\n"})}),"\n",(0,l.jsx)(n.p,{children:"深拷贝的引用类型在堆中新分配了空间，堆栈图如下："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:d})}),"\n",(0,l.jsxs)(n.h2,{id:"常见的值类型与引用类型",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见的值类型与引用类型",children:"#"}),"常见的值类型与引用类型"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["常见的值类型","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Undefined"}),"\n",(0,l.jsx)(n.li,{children:"Boolean (它有包装的引用类型)"}),"\n",(0,l.jsx)(n.li,{children:"Number (它有包装的引用类型)"}),"\n",(0,l.jsx)(n.li,{children:"String (他有包装的引用类型)"}),"\n",(0,l.jsx)(n.li,{children:"Symbol"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["常见的引用类型","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Date"}),"\n",(0,l.jsx)(n.li,{children:"RegExp"}),"\n",(0,l.jsx)(n.li,{children:"包装的引用类型"}),"\n",(0,l.jsx)(n.li,{children:"Object"}),"\n",(0,l.jsx)(n.li,{children:"Array"}),"\n",(0,l.jsx)(n.li,{children:"Function (可以看作特殊的没有数据的引用类型)"}),"\n",(0,l.jsx)(n.li,{children:"Null"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Null 比较特殊，《JavaScript 高级程序设计》将它作为值类型，也有人将它作为引用类型"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"typeof-操作符",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#typeof-操作符",children:"#"}),"typeof 操作符"]}),"\n",(0,l.jsx)(n.p,{children:"typeof 操作符能识别的类型有："}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"所有的值类型"}),"\n",(0,l.jsx)(n.li,{children:"识别函数"}),"\n",(0,l.jsx)(n.li,{children:"判断是否是引用类型（不可再细分）"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"其中，所有的值类型为："}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'"undefined"'}),"\n",(0,l.jsx)(n.li,{children:'"boolean"'}),"\n",(0,l.jsx)(n.li,{children:'"number"'}),"\n",(0,l.jsx)(n.li,{children:'"string"'}),"\n",(0,l.jsx)(n.li,{children:'"symbol" (ES6 新增)'}),"\n",(0,l.jsx)(n.li,{children:'"bigint" (ES10 新增)'}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"函数类型为："}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'“function"'}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"严格来说，函数再 ES 中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其他对象"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"引用类型为"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'"object"'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["其中，",(0,l.jsx)(n.code,{children:'typeof null === "object"'}),"，typeof 与 js 中的基本变量类型并不是一一对应的"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}let j=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fdocs%2Fjs%2F%E5%8F%98%E9%87%8F%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E5%86%85%E5%AD%98%2F%E5%8E%9F%E5%A7%8B%E5%80%BC%E4%B8%8E%E5%BC%95%E7%94%A8%E5%80%BC.md"]={toc:[{id:"值类型原理",text:"值类型原理",depth:2},{id:"引用类型原理",text:"引用类型原理",depth:2},{id:"深拷贝",text:"深拷贝",depth:2},{id:"使用深拷贝的原理",text:"使用深拷贝的原理",depth:2},{id:"常见的值类型与引用类型",text:"常见的值类型与引用类型",depth:2},{id:"typeof-操作符",text:"typeof 操作符",depth:2}],title:"原始值与引用值",frontmatter:{}}}}]);