"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9928"],{28210:function(e,r,n){n.r(r),n.d(r,{default:()=>h});var s=n("85893"),i=n("50065");let d=n.p+"static/image/promise1.b1b1b7a8.png";var l=n("41262");function o(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",img:"img",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"期约promise",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#期约promise",children:"#"}),"期约（Promise）"]}),"\n",(0,s.jsx)(r.p,{children:"Promise 是 JavaScript 中进行异步编程的新的解决方法，从语法上看，Promise 是一个构造函数，从功能上看，Promise 用来封装一个异步操作并可以获取其结果"}),"\n",(0,s.jsxs)(r.h2,{id:"promise-的状态改变",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-的状态改变",children:"#"}),"Promise 的状态改变"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"pending"})," 变为 ",(0,s.jsx)(r.code,{children:"resolved"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"pending"})," 变为 ",(0,s.jsx)(r.code,{children:"rejected"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"说明：只有这两种改变方式，且一个 Promise 对象只能够改变一次"}),"\n",(0,s.jsxs)(r.p,{children:["无论成功还是失败，都会有一个结果数据，成功的结果数据称为 ",(0,s.jsx)(r.code,{children:"value"}),"，失败的结果数据称为 ",(0,s.jsx)(r.code,{children:"reason"}),"。"]}),"\n",(0,s.jsxs)(r.h2,{id:"promise-的基本流程",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-的基本流程",children:"#"}),"Promise 的基本流程"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:d})}),"\n",(0,s.jsxs)(r.h2,{id:"promise-的基本使用",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-的基本使用",children:"#"}),"Promise 的基本使用"]}),"\n",(0,s.jsxs)(r.h3,{id:"以-nodejs-读取文件为例",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#以-nodejs-读取文件为例",children:"#"}),"以 nodejs 读取文件为例："]}),"\n",(0,s.jsxs)(l.Tabs,{children:[(0,s.jsx)(l.Tab,{value:"callback",label:"回调函数",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'const fs = require("fs");\r\n\r\nfs.readFile("./为学.md"， (err, data) => {\r\n  if (err) { throw err; }\r\n  console.log(data.toString());\r\n});\n'})})}),(0,s.jsx)(l.Tab,{value:"promise",label:"Promise",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'const fs = require("fs");\r\n\r\nconst p = new Promise(function (resolve, reject) {\r\n  fs.readFile("./为学.md", (err, data) => {\r\n    if (err) { reject(err); }\r\n    resolve(data)\r\n  });\r\n});\r\n\r\np.then(function (value) {\r\n  console.log(value.toString());\r\n}, function (reason) {\r\n  console.log("读取失败");\r\n});\n'})})})]}),"\n",(0,s.jsxs)(r.h3,{id:"以连续读取三个文件为例",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#以连续读取三个文件为例",children:"#"}),"以连续读取三个文件为例"]}),"\n",(0,s.jsxs)(l.Tabs,{children:[(0,s.jsx)(l.Tab,{value:"callback",label:"回调函数",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'const fs = require("fs");\r\n\r\nfs.readFile("./为学.md", (err, data1) => {\r\n  fs.readFile("./插秧诗", (err, data2) => {\r\n    fs.readFile("./观书有感", (err, data3) => {\r\n      let result = data1 + \'\\n\' + data2 + \'\\n\' + data3;\r\n      console.log(result);\r\n    })\r\n  })\r\n})\n'})})}),(0,s.jsx)(l.Tab,{value:"promise",label:"Promise",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'const fs = require("fs");\r\nconst p = new Promise((resolve, reject) => {\r\n  fs.readFile("./为学.md", (err, data) => {\r\n    resolve(data);\r\n  });\r\n});\r\n\r\np.then(value => {\r\n  return new Promise((resolve, reject) => {\r\n    fs.readFile("./插秧诗.md", (err, data) => {\r\n      resolve([value, data]);\r\n    });\r\n  });\r\n}).then(value => {\r\n  return new Promise((resolve, reject) => {\r\n    fs.readFile("./观书有感.md", (err, data) => {\r\n      value.push(data);\r\n      resolve(value);\r\n    });\r\n  });\r\n}).then(value => {\r\n  console.log(value[0] + "\\n" + value[1] + "\\n" + value[2]);\r\n});\n'})})})]}),"\n",(0,s.jsxs)(r.h2,{id:"为什么使用-promise",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#为什么使用-promise",children:"#"}),"为什么使用 Promise"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Promise 支持链式调用，能够解决回调地狱问题"}),"\n",(0,s.jsx)(r.p,{children:"传统的异步编程，会将函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数的执行条件，这被称之为回调地狱。"}),"\n",(0,s.jsx)(r.p,{children:"回调地狱倒置代码难以阅读和维护。"}),"\n",(0,s.jsx)(r.p,{children:"Promise 支持链式调用，让代码能更加方便阅读和维护。"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"什么时候用-promisethen-的第二个函数什么时候用-catch",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#什么时候用-promisethen-的第二个函数什么时候用-catch",children:"#"}),"什么时候用 Promise.then() 的第二个函数，什么时候用 catch"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["适合使用 Promise.then() 第二个函数的情况","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"成功和失败逻辑上非常紧密、比如读取文件成功、失败"}),"\n",(0,s.jsx)(r.li,{children:"需要避免过多 catch 嵌套的场景"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["适合用 catch 的情况","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Promise 链路全局错误捕获，类似于「兜底」"}),"\n",(0,s.jsx)(r.li,{children:"统一处理所以错误信息，比如给用户显示错误信息"}),"\n",(0,s.jsx)(r.li,{children:"Promise.all、Promise.race 操作的情况"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"promise-的常见-api",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-的常见-api",children:"#"}),"Promise 的常见 API"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"API"}),(0,s.jsx)(r.th,{children:"类型"}),(0,s.jsx)(r.th,{children:"说明"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise(excutor) "}),(0,s.jsxs)(r.td,{children:["excutor 类型为 ",(0,s.jsx)(r.code,{children:"(resolve, reject) => {}"})]}),(0,s.jsx)(r.td,{children:"Promise 的构造函数"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.prototype.then"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"(onResolved, onRejected) => {}"})}),(0,s.jsx)(r.td,{children:"onResolved 是成功时的回调函数, onRejected 是失败时的回调函数，它们能指定之后返回的新 Promise 对象"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.prototype.catch"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"(onRejected) => {}"})}),(0,s.jsx)(r.td,{children:"失败时的回调函数"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.resolve"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"(value) => {}"})}),(0,s.jsx)(r.td,{children:"返回一个成功的 Promise 对象"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.reject"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"(reason) => {}"})}),(0,s.jsx)(r.td,{children:"返回一个失败的 Promise 对象"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.all"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"(promises) => {}"}),"，promises 是包含 n 个 Promise 的数组"]}),(0,s.jsxs)(r.td,{children:["返回一个新的 Promise, ",(0,s.jsx)(r.strong,{children:"只有所有的 Promise 都成功才成功"}),", ",(0,s.jsx)(r.strong,{children:"只要有一个失败就直接失败"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Promise.race"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"(promises) => {}"})}),(0,s.jsxs)(r.td,{children:["返回一个新的 Promise, ",(0,s.jsx)(r.strong,{children:"最先完成的 Promise 的状态就是最终的结果状态"})]})]})]})]}),"\n",(0,s.jsxs)(r.h2,{id:"举例学习-promise-的细节",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#举例学习-promise-的细节",children:"#"}),"举例学习 Promise 的细节"]}),"\n",(0,s.jsxs)(r.h3,{id:"如何改变-promise-的状态",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#如何改变-promise-的状态",children:"#"}),"如何改变 Promise 的状态"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"resolve(value)"}),": 如果当前是 pending 状态就变为 resolved"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"reject(value)"}),": 如果当前是 pending 状态就变为 rejected"]}),"\n",(0,s.jsx)(r.li,{children:"抛出异常: 如果当前是 pending 状态就变为 rejected"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",meta:"",children:'const p = new Promise((resolve, reject) => {\r\n    throw new Error("出错了");\r\n});\r\nconsole.log(p); // rejected 的 Promise\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"一个-promise-指定多个成功失败回调函数-都会调用吗",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#一个-promise-指定多个成功失败回调函数-都会调用吗",children:"#"}),"一个 Promise 指定多个成功/失败回调函数, 都会调用吗"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"一个 Promise 指定多个成功/失败回调函数, 都会调用"})}),"\n",(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"点击查看代码"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'const p = new Promise((resolve, reject) => {\r\n  resolve(1);\r\n});\r\n\r\np.then(value => {\r\n  console.log("resolve 1");\r\n});\r\n\r\np.then(value => {\r\n  console.log("resolve 2");\r\n});\r\n\r\np.then(value => {\r\n  console.log("resolve 3");\r\n});\r\n\r\n// resolve 1\r\n// resolve 2\r\n// resolve 3\n'})})]}),"\n",(0,s.jsxs)(r.h3,{id:"promiseprototypethen-返回的新-promise-状态有什么决定",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promiseprototypethen-返回的新-promise-状态有什么决定",children:"#"}),"Promise.prototype.then 返回的新 Promise 状态有什么决定"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"简单表达: 由 then() 指定的回调函数的执行结果决定"}),"\n",(0,s.jsxs)(r.li,{children:["详细表达:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"如果抛出异常, 则新 Promise 状态为 rejected, reason 为抛出的异常"}),"\n",(0,s.jsx)(r.li,{children:"如果返回的是非 Promise 的任意值, 则新 Promise 状态为 resolved, value 为返回的值"}),"\n",(0,s.jsx)(r.li,{children:"如果返回的是 Promise, 则由 Promise 决定"}),"\n",(0,s.jsxs)(r.li,{children:["没有返回则相当于 ",(0,s.jsx)(r.code,{children:"return undefined;"}),", 则新 Promise 状态为 resolved"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"点击查看代码"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",meta:"",children:'const p = new Promise((resolve, reject) => {\r\n  reject(1);\r\n});\r\n\r\np.then(\r\n  value => {\r\n    console.log("resolve 1");\r\n  },\r\n  reason => {\r\n    console.log("reject 1");\r\n  }\r\n).then(\r\n  value => {\r\n    console.log("resolve 2");\r\n  },\r\n  reason => {\r\n    console.log("reject 2");\r\n  }\r\n);\r\n// reject 1\r\n// resolve 2\n'})})]}),"\n",(0,s.jsxs)(r.h3,{id:"promise-可以串联多个同步和异步任务",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-可以串联多个同步和异步任务",children:"#"}),"Promise 可以串联多个同步和异步任务"]}),"\n",(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"点击查看代码"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:'new Promise((resolve, reject) => {\r\n  setTimeout(() => {\r\n    console.log("执行任务 1 —— 异步");\r\n    resolve(1);\r\n  }, 1000);\r\n}).then(\r\n  value => {\r\n    console.log("任务 1 的结果: ", value);\r\n    console.log("执行任务2 —— 同步");\r\n    return 2;\r\n  }\r\n).then(\r\n  value => {\r\n    console.log("任务 2 的结果: ", value);\r\n    return new Promise((resolve, reject) => {\r\n      setTimeout(() => {\r\n        console.log("执行任务 3 —— 异步");\r\n        resolve(3);\r\n      }, 1000);\r\n    });\r\n  }\r\n).then(\r\n  value => {\r\n    console.log("任务 3 的结果: ", value);\r\n  }\r\n);\r\n// 执行任务 1 —— 异步\r\n// 任务 1 的结果:  1\r\n// 执行任务2 —— 同步\r\n// 任务 2 的结果:  2\r\n// 执行任务 3 —— 异步\r\n// 任务 3 的结果:  3\n'})})]}),"\n",(0,s.jsxs)(r.h3,{id:"promise-异常穿透传透",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#promise-异常穿透传透",children:"#"}),"Promise 异常穿透/传透"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"当使用 then 链式调用时, 可以在最后指定失败的回调"}),"\n",(0,s.jsx)(r.li,{children:"前面的任何操作出了异常, 都会传到最后失败的回调处理中"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["没写 ",(0,s.jsx)(r.code,{children:"reason"})," 相当于 ",(0,s.jsx)(r.code,{children:"reason => { throw reason; }"})]}),"\n",(0,s.jsxs)(r.h3,{id:"中断-promise-链",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#中断-promise-链",children:"#"}),"中断 Promise 链"]}),"\n",(0,s.jsx)(r.p,{children:"在 then 的回调函数中, 返回:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",meta:"",children:"return new Promise(() => {}); // 返回一个状态为 pending 的 Promise\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}let h=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fdocs%2Fjs%2F%E6%9C%9F%E7%BA%A6%E4%B8%8E%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0%2F%E6%9C%9F%E7%BA%A6.mdx"]={toc:[{id:"promise-的状态改变",text:"Promise 的状态改变",depth:2},{id:"promise-的基本流程",text:"Promise 的基本流程",depth:2},{id:"promise-的基本使用",text:"Promise 的基本使用",depth:2},{id:"以-nodejs-读取文件为例",text:"以 nodejs 读取文件为例：",depth:3},{id:"以连续读取三个文件为例",text:"以连续读取三个文件为例",depth:3},{id:"为什么使用-promise",text:"为什么使用 Promise",depth:2},{id:"什么时候用-promisethen-的第二个函数什么时候用-catch",text:"什么时候用 Promise.then() 的第二个函数，什么时候用 catch",depth:2},{id:"promise-的常见-api",text:"Promise 的常见 API",depth:2},{id:"举例学习-promise-的细节",text:"举例学习 Promise 的细节",depth:2},{id:"如何改变-promise-的状态",text:"如何改变 Promise 的状态",depth:3},{id:"一个-promise-指定多个成功失败回调函数-都会调用吗",text:"一个 Promise 指定多个成功/失败回调函数, 都会调用吗",depth:3},{id:"promiseprototypethen-返回的新-promise-状态有什么决定",text:"Promise.prototype.then 返回的新 Promise 状态有什么决定",depth:3},{id:"promise-可以串联多个同步和异步任务",text:"Promise 可以串联多个同步和异步任务",depth:3},{id:"promise-异常穿透传透",text:"Promise 异常穿透/传透",depth:3},{id:"中断-promise-链",text:"中断 Promise 链",depth:3}],title:"期约（Promise）",frontmatter:{}}}}]);