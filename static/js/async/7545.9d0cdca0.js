"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["7545"],{64492:function(r,e,n){n.r(e),n.d(e,{default:function(){return c}});var t=n(85893),i=n(50065);function s(r){let e=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code"},(0,i.ah)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"defer",children:[(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#defer",children:"#"}),"defer"]}),"\n",(0,t.jsx)(e.p,{children:"defer 是 go 语言的延迟执行语句。添加 defer 的语句，会被放到函数返回前处理。"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",meta:"",children:"// 最终结果是 0 2 1\r\nfunc main() {\r\n  fmt.Println(0)\r\n  defer fmt.Println(1)\r\n  fmt.Println(2)\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"同样被 defer 的语句，先被 defer 的语句最后执行，最后被 defer 的语句最先执行，类似栈的执行顺序。"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",meta:"",children:"func main() {\r\n  defer fmt.Println(0)\r\n  defer fmt.Println(1)\r\n  fmt.Println(2)\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"defer 常用来处理业务逻辑中成对的操作，比如打开文件和关闭文件，接收请求和回复请求，加锁和解锁等等。"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",meta:"",children:'func main() {\r\n  f, err := os.OpenFile("./song.txt", os.O_WRONLY|os.O_CREATE, 0666)\r\n  if err != nil {\r\n    fmt.Println("文件打开失败")\r\n    return\r\n  }\r\n  defer f.Close()\r\n\r\n  str := "挪威的森林\\n"\r\n\r\n  // 写入时，使用带缓存的 *Writer\r\n  writer := bufio.NewWriter(f)\r\n  for i := 0; i < 3; i++ {\r\n    writer.WriteString(str)\r\n  }\r\n\r\n  // 因为 writer 是带缓存的，因此在调用 WriterString 方法时，内容是先写入缓存的\r\n  // 所以要调用 Flush方法，将缓存的数据真正写入到文件中\r\n  writer.Flush()\r\n}\n'})})]})}function d(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),r.components);return e?(0,t.jsx)(e,Object.assign({},r,{children:(0,t.jsx)(s,r)})):s(r)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fdocs%2Fgo%2F11-defer.md"]={toc:[],title:"defer",frontmatter:{}}}}]);