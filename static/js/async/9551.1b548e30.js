"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9551"],{35051:function(n,e,r){r.r(e),r.d(e,{default:function(){return c}});var s=r(85893),l=r(50065);function i(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",p:"p",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul"},(0,l.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"函数和-this-指向",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#函数和-this-指向",children:"#"}),"函数和 this 指向"]}),"\n",(0,s.jsxs)(e.h2,{id:"创建函数的四种方式",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#创建函数的四种方式",children:"#"}),"创建函数的四种方式"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"命名函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"function fn() {};\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"匿名函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"var fn = function() {};\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"利用 Function 关键字"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"var fn = new Function('参数1', '参数2', '函数体');\n"})}),"\n",(0,s.jsx)(e.p,{children:"举例而言："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"var fn = new Function('a', 'b', 'console.log(a + b)');\r\nfn(1, 2); // 3\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"箭头函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"let fn = () => {};\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"函数的类别",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#函数的类别",children:"#"}),"函数的类别"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"普通函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'function fn() {\r\n    console.log("Hello World!");\r\n}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"对象的方法"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'var o = {\r\n    sayHi: function() {\r\n        console.log("Hello World!");\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"构造函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'function Star(name) {\r\n    this.name = name;\r\n}\r\nvar ldh = new Star("刘德华");\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"绑定事件函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'var btn = document.querySelector("button");\r\nbtn.onclick = function() {};\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"5",children:["\n",(0,s.jsx)(e.li,{children:"定时器函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"setInterval(function() {}, 1000);\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"6",children:["\n",(0,s.jsx)(e.li,{children:"立即执行函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'(function() {\r\n    console.log("Hello World!");\r\n})();\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"7",children:["\n",(0,s.jsx)(e.li,{children:"箭头函数"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'let fn = () => {\r\n    console.log("Hello World!");\r\n};\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"不同函数内-this-的指向",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#不同函数内-this-的指向",children:"#"}),"不同函数内 this 的指向"]}),"\n",(0,s.jsxs)(e.p,{children:["这些 this 的指向，是当我们调用函数时决定的，调用方式的不同决定了 this 的指向不同，一般",(0,s.jsx)(e.strong,{children:"指向函数的调用者"})]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"调用方式"}),(0,s.jsx)(e.th,{children:"this 指向"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"普通函数调用"}),(0,s.jsx)(e.td,{children:"window"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"对象方法调用"}),(0,s.jsx)(e.td,{children:"该方法所属对象"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"构造函数调用"}),(0,s.jsx)(e.td,{children:"实例对象, 原型对象里面的方法也指向实例对象"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"绑定事件函数"}),(0,s.jsx)(e.td,{children:"绑定事件对象"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"定时器函数"}),(0,s.jsx)(e.td,{children:"window"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"立即执行函数"}),(0,s.jsx)(e.td,{children:"window"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"箭头函数"}),(0,s.jsx)(e.td,{children:"(静态的) 函数声明时所在的作用域"})]})]})]}),"\n",(0,s.jsxs)(e.h2,{id:"改变-this-指向的三种方法",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#改变-this-指向的三种方法",children:"#"}),"改变 this 指向的三种方法"]}),"\n",(0,s.jsxs)(e.p,{children:["JavaScript 为我们提供了一些函数方法帮助我们改变函数的指向，常用的有 ",(0,s.jsx)(e.code,{children:"bind()"}),"、",(0,s.jsx)(e.code,{children:"call()"})," 和 ",(0,s.jsx)(e.code,{children:"apply()"})," 三种方法"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"call()"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"call 可以调用函数，可以改变函数内的 this 指向，之前用来实现继承"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"function Father(uname, age, sex) {\r\n    this.uname = uname;\r\n    this.age = age;\r\n    this.sex = sex;\r\n}\r\n\r\nfunction Son(uname, age, sex) {\r\n    Father.call(this, uname, age, sex);\r\n}\r\n\r\nvar son = new Star(\"刘德华\", 40, '男');\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"apply()"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"apply() 方法调用一个函数，也可以改变函数内部 this 的指向，不过它传递的参数是数组形式"}),"\n",(0,s.jsx)(e.p,{children:"语法："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"fun.apply(thisArg, [argsArray]);\n"})}),"\n",(0,s.jsx)(e.p,{children:"参数："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"thisArg: this 将要指定的对象"}),"\n",(0,s.jsx)(e.li,{children:"argsArray: 传递的值，必须包含在数组里面"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"var array = ['a', 'b'];\r\nvar elements = [0, 1, 2];\r\narray.push.apply(array, elements);\r\nconsole.info(array); // [\"a\", \"b\", 0, 1, 2]\n"})}),"\n",(0,s.jsx)(e.p,{children:"它常见的功能就是借助数学内置对象求最大值和最小值:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"var arr = [1, 66, 3, 99, 4];\r\nvar max = Math.max.apply(Math, arr);\r\nconsole.log(max); // 99\r\nvar min = Math.min.apply(Math, arr);\r\nconsole.log(min); // 1\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"bind()"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["bind() 方法",(0,s.jsx)(e.strong,{children:"不会调用函数"}),"，但是能改变函数内部 this 指向"]}),"\n",(0,s.jsx)(e.p,{children:"语法："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"fun.bind(thisArg, arg1, arg2, ...)\n"})}),"\n",(0,s.jsx)(e.p,{children:"参数："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"thisArg: this 将要指定的对象"}),"\n",(0,s.jsx)(e.li,{children:"arg1, arg2, ...: 将要传递的参数"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"返回值："}),"\n",(0,s.jsxs)(e.p,{children:["返回改变后的",(0,s.jsx)(e.strong,{children:"函数拷贝"})]}),"\n",(0,s.jsx)(e.p,{children:"举例："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"function fn(a, b) {\r\n  console.log(a + b);\r\n}\r\nvar obj = {};\r\nvar f = fn.bind(obj, 1, 2);\r\nf(); // 3\n"})}),"\n",(0,s.jsx)(e.p,{children:"bind() 非常常用，下面举一个例子："}),"\n",(0,s.jsx)(e.p,{children:"假设有一个按钮，当我们点击按钮之后，需要禁用按钮 3 秒之后，按钮才能继续使用，应该如何实现呢？"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:'var btn = document.querySelector("button");\r\nbtn.onclick = function() {\r\n    this.disabled = true;\r\n    setTimeout(function() {\r\n        this.disabled = false;  // setTimeout 的 this 指向 window, 通过 bind 改回 btn\r\n    }.bind(this), 3000);\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"有时 A 对象调用 B 函数，B 函数需要有自己的 this，也需要 A 对象的 this，可以好好利用 bind() 传参："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"A.onclick = B.bind(A, this);\r\n\r\nB(that) {\r\n    that.fn(); // B 中的 that 就是 B.bind(A, this) 中的 this\r\n    this.fun();\r\n}\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"call-apply-bind-总结",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#call-apply-bind-总结",children:"#"}),"call() apply() bind() 总结"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"相同点"}),":"]}),"\n",(0,s.jsx)(e.p,{children:"都可以改变函数内部的 this 指向"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"区别点"}),":"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"call() 和 apply() 会调用函数，而 bind() 不会"}),"\n",(0,s.jsx)(e.li,{children:"call() 和 bind() 传递的是参数 arg1, arg2, ...，而 apply() 传递的参数是数组"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"主要应用场景"}),":"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"call() 经常用作继承"}),"\n",(0,s.jsx)(e.li,{children:"apply() 经常和数组有关，比如借助数学对象实现找到数组的最大值和最小值"}),"\n",(0,s.jsx)(e.li,{children:"bind() 常常用来改变 this 指向，比如改变定时器内部 this 的指向"}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"严格模式",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#严格模式",children:"#"}),"严格模式"]}),"\n",(0,s.jsx)(e.p,{children:"JavaScript 除了正常模式之外，还提供严格模式，严格模式在 IE10+ 浏览器中才会被支持"}),"\n",(0,s.jsx)(e.p,{children:"严格模式对正常的 JavaScipt 做了一些更改："}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"变量规定"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"在正常模式下，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先声明后使用"}),"\n",(0,s.jsx)(e.li,{children:"严禁删除已经声明的变量"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"this 指向"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"严格模式下全局作用域中的函数中的 this 是 undefined"})}),"\n",(0,s.jsx)(e.li,{children:"严格模式下，构造函数不加 new 调用会报错"}),"\n",(0,s.jsx)(e.li,{children:"其余 this 和普通模式一样"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"函数变化"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"函数不能有重名的参数"}),"\n",(0,s.jsx)(e.li,{children:"函数必须声明在顶层，不允许在非函数的代码块内声明函数"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"用法："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",meta:"",children:'<script>\r\n"use strict";\r\n...\r\n<\/script>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",meta:"",children:'<script>\r\n(function() {\r\n    "use strict";\r\n    ...\r\n})();\r\n<\/script>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",meta:"",children:'<script>\r\nfunction fun1() {\r\n    "use strict";\r\n    ...\r\n}\r\nfunction fun2() {\r\n    ...\r\n}\r\n<\/script>\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"不同绑定规则和优先级",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#不同绑定规则和优先级",children:"#"}),"不同绑定规则和优先级"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"默认绑定规则：也就是全局的属性和对象默认绑定到 window"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"隐式绑定规则：谁调用谁就绑定谁"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"显示绑定规则：call()、bind() 和 apply()"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"new 绑定：谁 new 的 this 指向就指向谁"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"function Person () {\r\n    this.name = 'zhangsan'\r\n}\r\n\r\nconst p = new Person()\r\nconsole.log(p.name)  // ‘zhangsan’\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"这四种绑定规则的优先级从低到高为："}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"默认绑定 < 隐式绑定 < 显示绑定 ＜ new 绑定"})}),"\n",(0,s.jsx)(e.p,{children:"美团有一道面试题目，重点就是不同绑定方式："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",meta:"",children:"// 打印的值是\r\nvar name = 'global';\r\nvar obj = {\r\n    name: 'local',\r\n    foo: function(){\r\n        this.name = 'foo';\r\n    }.bind(window)\r\n};\r\nvar bar = new obj.foo();\r\nsetTimeout(function() {\r\n    console.log(window.name);\r\n}, 0);\r\nconsole.log(bar.name);\r\n  \r\nvar bar3 = bar2 = bar;\r\nbar2.name = 'foo2';\r\nconsole.log(bar3.name);\r\n\r\n// 'foo', 因为 new 绑定优先级高于 bind 显示绑定\r\n// 'foo2'\r\n// 'global'\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(i,n)})):i(n)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fdocs%2Fjs%2F%E5%87%BD%E6%95%B0%2F%E5%87%BD%E6%95%B0%E5%86%85%E9%83%A8.md"]={toc:[{id:"创建函数的四种方式",text:"创建函数的四种方式",depth:2},{id:"函数的类别",text:"函数的类别",depth:2},{id:"不同函数内-this-的指向",text:"不同函数内 this 的指向",depth:2},{id:"改变-this-指向的三种方法",text:"改变 this 指向的三种方法",depth:2},{id:"call-apply-bind-总结",text:"call() apply() bind() 总结",depth:2},{id:"严格模式",text:"严格模式",depth:2},{id:"不同绑定规则和优先级",text:"不同绑定规则和优先级",depth:2}],title:"函数和 this 指向",frontmatter:{}}}}]);