"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["6616"],{40034:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var s=e(85893),i=e(50065);function t(n){let r=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"条件循环语句",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#条件循环语句",children:"#"}),"条件、循环语句"]}),"\n",(0,s.jsxs)(r.h2,{id:"条件语句",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#条件语句",children:"#"}),"条件语句"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"if 不需要用括号包围"}),"\n",(0,s.jsx)(r.li,{children:"switch 默认情况下 case 最后自带 break 语句，匹配成功后就不会执行其他 case，如果我们需要执行后面的 case，可以使用 fallthrough"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"循环语句",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#循环语句",children:"#"}),"循环语句"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"for 不需要用括号包围"}),"\n",(0,s.jsx)(r.li,{children:"go 语言没有 while 和 do while，全部都是用 for 来解释"}),"\n",(0,s.jsx)(r.li,{children:"go 语言可以利用 for 循环遍历数组、Map 等"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",meta:"",children:'func usingFor() {\r\n  sum := 0\r\n  for i := 0; i <= 10; i++ {\r\n    sum += i\r\n  }\r\n  fmt.Printf("%d\\n", sum)\r\n}\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",meta:"",children:'// 下面的写法类似 while\r\nfunc usingFor() {\r\n  sum := 1\r\n  for sum <= 10 {\r\n    sum += 1\r\n  }\r\n  fmt.Printf("%d\\n", sum)\r\n}\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",meta:"",children:'// 死循环的写法\r\nfunc usingFor() {\r\n  for {\r\n    fmt.Println("hello!")\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",meta:"",children:'// 遍历字符串、数组和 Map\r\nfunc usingFor() {\r\n  strs := []string{"hello", "world"}\r\n  for index, str := range strs {\r\n    fmt.Printf("index: %d, str: %s\\n", index, str)\r\n  }\r\n\r\n  nums := [3]int{0, 1}\r\n  for index, num := range nums {\r\n    fmt.Printf("index: %d, num: %d\\n", index, num)\r\n  }\r\n\r\n  tempMap := make(map[string]string)\r\n  tempMap["js"] = "JavaScript"\r\n  tempMap["go"] = "golang"\r\n\r\n  for key, value := range tempMap {\r\n    fmt.Printf("key: %s, value: %s\\n", key, value)\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"goto-语句",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#goto-语句",children:"#"}),"goto 语句"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",meta:"",children:'func usingGoTo() {\r\n  var num int\r\n  fmt.Println("请输入一个数字")\r\n  fmt.Scan(&num)\r\n  switch num {\r\n  case 0:\r\n    goto END\r\n  case 1:\r\n    fmt.Println("输入数字 1")\r\n  case 2:\r\n    fmt.Println("输入数字 2")\r\n  default:\r\n    fmt.Println("进入了 default")\r\n  }\r\n  fmt.Println("以上是 switch 的内容")\r\nEND:\r\n  fmt.Println("结束啦")\r\n}\n'})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),n.components);return r?(0,s.jsx)(r,Object.assign({},n,{children:(0,s.jsx)(t,n)})):t(n)}let l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fdocs%2Fgo%2F04-if-switch.md"]={toc:[{id:"条件语句",text:"条件语句",depth:2},{id:"循环语句",text:"循环语句",depth:2},{id:"goto-语句",text:"goto 语句",depth:2}],title:"条件、循环语句",frontmatter:{}}}}]);