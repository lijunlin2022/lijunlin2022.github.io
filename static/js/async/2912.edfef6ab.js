"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2912"],{85714:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var s=r(85893),i=r(50065),c=r(95895);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code",ol:"ol",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"跨域资源共享",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#跨域资源共享",children:"#"}),"跨域资源共享"]}),"\n",(0,s.jsx)(c.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsx)(n.p,{children:"Ajax 请求有限制, 只能向自己的服务器发送请求. Ajax 的限制属于同源政策的一部分"}),"\n",(0,s.jsxs)(n.h2,{id:"什么是同源",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是同源",children:"#"}),"什么是同源"]}),"\n",(0,s.jsx)(n.p,{children:"如果两个页面拥有相同的协议、域名和端口, 那么这两个页面就属于同一个源, 其中只要有一个不相同, 就是不同源"}),"\n",(0,s.jsxs)(n.h2,{id:"同源政策的目的",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#同源政策的目的",children:"#"}),"同源政策的目的"]}),"\n",(0,s.jsx)(n.p,{children:"同源政策是为了保证用户信息的安全, 防止恶意的网站窃取数据。最初的同源政策是指 A 网站在客户端设置的 Cookie, B 网站是不能访问的"}),"\n",(0,s.jsx)(n.p,{children:"随着互联网的发展, 同源政策也越来越严格, 在不同源的情况下, 其中有一项规定就是无法向非同源地址发送 Ajax 请求, 如果请求, 浏览器就会报错"}),"\n",(0,s.jsxs)(n.h2,{id:"解决同源限制问题-跨域问题-办法",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#解决同源限制问题-跨域问题-办法",children:"#"}),"解决同源限制问题 (跨域问题) 办法"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"JSONP"}),"\n",(0,s.jsx)(n.li,{children:"CORS"}),"\n",(0,s.jsx)(n.li,{children:"代理服务器"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"所有的跨域, 都必须经过 server 端允许和配合"})}),"\n",(0,s.jsxs)(n.h3,{id:"使用-jsonp-解决同源限制问题",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-jsonp-解决同源限制问题",children:"#"}),"使用 JSONP 解决同源限制问题"]}),"\n",(0,s.jsx)(n.p,{children:"JSONP 是 json with padding (带填充的 JSON) 的缩写, 它不属于 Ajax 请求, 但它可以模拟 Ajax 请求。"}),"\n",(0,s.jsxs)(n.p,{children:["它的原理是",(0,s.jsx)(n.strong,{children:"加载图片 css js 可以无视同源策略"})]}),"\n",(0,s.jsx)(n.p,{children:"比如:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<img />"})," 可用于统计打点, 可使用第三方统计服务"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"link/>"})," ",(0,s.jsx)(n.code,{children:"< script>"})," 可使用 CDN, CDN 一般都是外域"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<script>"})," 可实现 JSONP"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"下面介绍 JSONP 的使用步骤:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"将不同源的服务器端请求地址写在 script 标签的 src 属性中"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:"",children:'<script src="http://localhost:3000/jsonp"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"script 标签请求地址不一定必须以.js 结尾, 但是必须返回合法的 JavaScript 代码"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"服务器端响应数据必须是一个函数的调用, 真正要发送给客户端的数据需要作为函数调用的参数"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:"",children:'server.on("request", (req, res) => {\r\n  if (req.url === "/jsonp") {\r\n    const data = "fn({name:\'张三\', age: 20 })"\r\n    res.end(data)\r\n  }\r\n})\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"在客户端全局作用域下定义函数 fn"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:"",children:'<script>\r\nfunction fn() {};\r\n<\/script>\r\n<script src="http://localhost:3000/jsonp"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"定义 fn 函数必须在获得 jsonp 的 script 标签之前"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"在 fn 函数内部对服务端返回的数据进行处理"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:"",children:'<script>\r\nfunction fn(data) {\r\n  console.log(data)\r\n}\r\n<\/script>\r\n<script src="http://localhost:3000/jsonp"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"以上只是简单地介绍了 jsonp 的用法。"}),"\n",(0,s.jsxs)(n.h3,{id:"cors-跨域资源共享",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cors-跨域资源共享",children:"#"}),"CORS 跨域资源共享"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。'}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"对于简单请求, 浏览器会给跨域的 AJAX 请求添加一个 Origin 字段"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Origin 字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"如果 Origin 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段（详见下文），就知道出错了，从而抛出一个错误，被 XMLHttpRequest 的 onerror 回调函数捕获"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["总的来说, 就是浏览器代码不用改 (origin 由浏览器自动添加), 服务器代码的响应头部多出 ",(0,s.jsx)(n.code,{children:"Access-Control-Allow-Origin"})," 方法"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:"",children:'<script>\r\nvar xhr = new XMLHttpRequest()\r\nxhr.open("get", "http://localhost:3000/ajax")\r\nxhr.send()\r\nxhr.onload = function() {\r\n  console.log(xhr.responseText)\r\n}\r\n<\/script>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:"",children:'server.on("request", (req, res) => {\r\n  if (req.url === "/ajax") {\r\n    const data = "hello"\r\n    res.setHeader("Access-Control-Allow-Origin", "*")\r\n    res.end(data)\r\n  }\r\n})\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"withCredentials 属性"})}),"\n",(0,s.jsx)(n.p,{children:"在使用 Ajax 技术发送跨域请求时, 默认情兄下不会在请求中携带 cookie 信息"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"withCredentials"}),": 指定在涉及到跨域请求时, 是否携带 cookie 信息, 默认值为 false"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Access-Control-Allow-Credentials: true"})," 允许客户端发送请求时携带 cookie"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:"",children:'xhr.open("get", "http://localhost:3001/checkLogin")\r\nxhr.withCredentials = true\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:"",children:'res.setHeader("Access-Control-Allow-Credentials", true)\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"代理服务器",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代理服务器",children:"#"}),"代理服务器"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{meta:"",children:"浏览器 --请求--\x3e 代理服务器;\r\n代理服务器 --转发请求--\x3e 服务器;\r\n服务器 --响应--\x3e 代理服务器;\r\n代理服务器 --转发响应--\x3e 浏览器;\n"})}),"\n",(0,s.jsx)(n.p,{children:"能使用代理服务器的原因, 是服务器和服务器之间没有同源政策。"})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["docs%2Fjs%2F%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82%E4%B8%8E%E8%BF%9C%E7%A8%8B%E8%B5%84%E6%BA%90%2F%E8%B7%A8%E5%9F%9F%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB.md"]={toc:[{id:"什么是同源",text:"什么是同源",depth:2},{id:"同源政策的目的",text:"同源政策的目的",depth:2},{id:"解决同源限制问题-跨域问题-办法",text:"解决同源限制问题 (跨域问题) 办法",depth:2},{id:"使用-jsonp-解决同源限制问题",text:"使用 JSONP 解决同源限制问题",depth:3},{id:"cors-跨域资源共享",text:"CORS 跨域资源共享",depth:3},{id:"代理服务器",text:"代理服务器",depth:3}],title:"跨域资源共享",frontmatter:{}}},95895:function(e,n,r){r.d(n,{Z:function(){return d}});var s=r(85893),i=r(67294),c=r(45687);r(6175);let l={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function t(e,n,r){let s=Object.keys(l).includes(n)?n:r;return l[s](e)}let d=e=>{let{defaultLocale:n="en-US"}=e,r=(0,c.Vi)().page.readingTimeData,l=(0,c.Jr)(),d=(0,c.e7)(),[h,a]=(0,i.useState)(t(r,l,n));return(0,i.useEffect)(()=>{a(t(r,l,n))},[l,r]),(0,s.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:h})}}}]);