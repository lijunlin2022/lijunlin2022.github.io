"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8377"],{65251:function(n,e,r){r.r(e),r.d(e,{default:function(){return t}});var i=r(85893),s=r(50065),c=r(95895);function l(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"切片",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#切片",children:"#"}),"切片"]}),"\n",(0,i.jsx)(c.Z,{defaultLocale:"zh-CN"}),"\n",(0,i.jsx)(e.p,{children:"go 语言中数组是不可变的，切片是对数组的抽象。与数组相比，切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。"}),"\n",(0,i.jsxs)(e.h2,{id:"定义",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#定义",children:"#"}),"定义"]}),"\n",(0,i.jsx)(e.p,{children:"切片有两种定义方式："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"声明一个未指定长度的数组"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:"var slice1 []int\r\n\r\nvar slice2 = []int{1, 2, 3}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["使用 ",(0,i.jsx)(e.code,{children:"make"})," 创建切片"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:"var slice1 []int = make([]int, 3)\r\n\r\nslice2 := make([]string, 2)\r\n\r\n// 第三个参数是可选参数，代表容量 capacity\r\nslice3 := make([]string, 3, 6)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"len-和-cap",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#len-和-cap",children:"#"}),"len() 和 cap()"]}),"\n",(0,i.jsx)(e.p,{children:"go 语言中，切片由三部分组成：指针、长度和容量。指针指向切片的首个元素，长度表示切片中元素的数量，容量表示切片的最大长度。"}),"\n",(0,i.jsx)(e.p,{children:"用 len() 可以获取长度，用 cap() 可以获取容量。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:'func main() {\r\n  var slice1 []int // 空切片默认长度和容量都为 0\r\n\r\n  var slice2 = []int{1, 2, 3} // 未指定长度和容量\r\n\r\n  var slice3 = make([]int, 3, 6) // 初始化切片，指定长度和容量不同\r\n\r\n  // slice: [], len: 0, cap: 0\r\n  fmt.Printf("slice: %v, len: %d, cap: %d\\n", slice1, len(slice1), cap(slice1))\r\n\r\n  // slice: [1 2 3], len: 3, cap: 3\r\n  fmt.Printf("slice: %v, len: %d, cap: %d\\n", slice2, len(slice2), cap(slice2))\r\n\r\n  // slice: [0 0 0], len: 3, cap: 6\r\n  fmt.Printf("slice: %v, len: %d, cap: %d\\n", slice3, len(slice3), cap(slice3))\r\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"截取",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#截取",children:"#"}),"截取"]}),"\n",(0,i.jsx)(e.p,{children:"可以通过设置下限、上限，来将数组截取成切片。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:"func main() {\r\n  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\r\n\r\n  slice1 := arr[2:8]\r\n  fmt.Println(slice1) // [2 3 4 5 6 7]\r\n\r\n  slice2 := arr[2:]\r\n  fmt.Println(slice2) // [2 3 4 5 6 7 8 9]\r\n\r\n  slice3 := arr[:8]\r\n  fmt.Println(slice3) // [0 1 2 3 4 5 6 7]\r\n\r\n  slice4 := arr[:]\r\n  fmt.Println(slice4) // [0 1 2 3 4 5 6 7 8 9]\r\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"切片还可以再次截取成为新的切片。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:"func main() {\r\n  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\r\n\r\n  slice1 := arr[2:8]\r\n  fmt.Println(slice1) // [2 3 4 5 6 7]\r\n\r\n  slice2 := slice1[:3]\r\n  fmt.Println(slice2) // [2 3 4]\r\n\r\n  slice3 := slice2[1:]\r\n  fmt.Println(slice3) // [3 4]\r\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"go 语言中，切片、切片的切片、还有数组是共享内存空间的。因此切片的容量常常大于它的长度。"}),"\n",(0,i.jsxs)(e.p,{children:["go 语言有个特性，当从一个切片创建另一个切片时，我们可以指定一个",(0,i.jsx)(e.strong,{children:"大于原始切片长度"}),"但是",(0,i.jsx)(e.strong,{children:"小于等于原始切片容量"}),"的结束索引。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:"func main() {\r\n  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\r\n\r\n  slice1 := arr[2:4]\r\n  fmt.Println(slice1) // [2 3]\r\n\r\n  slice2 := slice1[0:8]\r\n  fmt.Println(slice2) // [2 3 4 5 6 7 8 9]\r\n}\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"和数组的内存关系",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#和数组的内存关系",children:"#"}),"和数组的内存关系"]}),"\n",(0,i.jsx)(e.p,{children:"一般来说，切片和数组的内存是共享的，因此修改切片的元素，数组的元素也会被改变。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:'func main() {\r\n  arr := []string{"A", "B", "C", "D", "E"}\r\n\r\n  slice := arr[:]\r\n\r\n  slice[2] = "甲"\r\n\r\n  fmt.Println(slice) // [A B 甲 D E]\r\n  fmt.Println(arr)   // [A B 甲 D E]\r\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"但是，如果你添加的元素数量超过了切片的容量，那么 Go 语言会创建一个新的数组，并将所有的元素（包括原始的元素和新添加的元素）复制到新的数组中。在这种情况下，切片不再共享原始数组的内存空间，而是指向新的数组。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",meta:"",children:'func main() {\r\n  arr := []string{"A", "B", "C", "D", "E"}\r\n\r\n  slice := arr[:]\r\n\r\n  slice = append(slice, "甲", "乙")\r\n\r\n  fmt.Println(slice) // [A B C D E 甲 乙]\r\n  fmt.Println(arr)   // [A B C D E]\r\n}\n'})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}let t=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["docs%2Fgo%2F06-slice.md"]={toc:[{id:"定义",text:"定义",depth:2},{id:"len-和-cap",text:"len() 和 cap()",depth:2},{id:"截取",text:"截取",depth:2},{id:"和数组的内存关系",text:"和数组的内存关系",depth:2}],title:"切片",frontmatter:{}}},95895:function(n,e,r){r.d(e,{Z:function(){return t}});var i=r(85893),s=r(67294),c=r(45687);r(6175);let l={"zh-CN":n=>`预计阅读时间: ${n.minutes>=1?`${Math.ceil(n.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":n=>`Estimated reading time: ${n.minutes>=1?`${Math.ceil(n.minutes)} minutes`:"less than 1 minute"}`};function a(n,e,r){let i=Object.keys(l).includes(e)?e:r;return l[i](n)}let t=n=>{let{defaultLocale:e="en-US"}=n,r=(0,c.Vi)().page.readingTimeData,l=(0,c.Jr)(),t=(0,c.e7)(),[d,h]=(0,s.useState)(a(r,l,e));return(0,s.useEffect)(()=>{h(a(r,l,e))},[l,r]),(0,i.jsx)("span",{"data-dark":String(t),className:"rp-reading-time",children:d})}}}]);