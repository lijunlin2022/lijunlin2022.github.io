"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9658"],{66847:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var s=r(85893),o=r(50065);function c(e){let n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",ul:"ul",li:"li",blockquote:"blockquote",pre:"pre"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"本节介绍了在贪吃蛇游戏中，如何画出墙壁和食物，以及为了在特定位置画出蛇，必须使用一个函数 SetConsoleCursorPosition，并封装了一个函数 gotoxyUtil"}),"\n",(0,s.jsxs)(n.h2,{id:"画墙壁和食物",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#画墙壁和食物",children:"#"}),"画墙壁和食物"]}),"\n",(0,s.jsxs)(n.p,{children:["在第 4 章时我们设置地图时同时设置了墙壁，在 ",(0,s.jsx)(n.code,{children:"globalMapArr[25][25]"})," 中，是墙壁的地方均被设置为 ",(0,s.jsx)(n.code,{children:"0bh"})]}),"\n",(0,s.jsxs)(n.p,{children:["在第 5 章时我们设置了食物，",(0,s.jsx)(n.code,{children:"globalMapArr[globalFoodX][globalFoodY]"})," 被设置为 ",(0,s.jsx)(n.code,{children:"0ch"})]}),"\n",(0,s.jsx)(n.p,{children:"画出地图和食物整体还是比较简单的，就是使用双重循环遍历二维数组"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["如果遇到了 ",(0,s.jsx)(n.code,{children:"0bh"}),"，就打印 ",(0,s.jsx)(n.code,{children:"#"})," 当作墙壁"]}),"\n",(0,s.jsxs)(n.li,{children:["如果遇到了 ",(0,s.jsx)(n.code,{children:"0ch"}),"，就打印 ",(0,s.jsx)(n.code,{children:"*"})," 当作食物"]}),"\n",(0,s.jsx)(n.li,{children:"剩余情况，就打印空白"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"setconsolecursorposition--画蛇",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setconsolecursorposition--画蛇",children:"#"}),"SetConsoleCursorPosition —— 画蛇"]}),"\n",(0,s.jsxs)(n.p,{children:["和画墙壁和食物不同，我们需要根据坐标 ",(0,s.jsx)(n.code,{children:"(x, y)"})," 来在特定位置打印 ",(0,s.jsx)(n.code,{children:"O"})," 来充当蛇的身体"]}),"\n",(0,s.jsxs)(n.p,{children:["为了在特定位置画出蛇，需要使用 Windows 提供的函数，",(0,s.jsx)(n.code,{children:"SetConsoleCursorPosition()"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",meta:"",children:"BOOL WINAPI SetConsoleCursorPosition(\r\n  _In_ HANDLE hConsoleOutput,\r\n  _In_ COORD  dwCursorPosition\r\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["参数","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hConsoleOutput"})," 控制台屏幕缓冲区的句柄"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dwCursorPosition"})," 指定新游标位置的 ",(0,s.jsx)(n.code,{children:"oozie.coord.application.path"}),"  结构"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["—— ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/windows/console/setconsolecursorposition",target:"_blank",rel:"noopener noreferrer",children:"SetConsoleCursorPosition 函数 - Windows Console | Microsoft Docs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["至于 ",(0,s.jsx)(n.code,{children:"dwCursorPosition"})," ，它的结构如下："]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"语法"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",meta:"",children:"typedef struct _COORD {\r\n  SHORT X;\r\n  SHORT Y;\r\n} COORD, *PCOORD;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["—— ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/windows/console/coord-str",target:"_blank",rel:"noopener noreferrer",children:"COORD 结构 - Windows Console | Microsoft Docs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"封装在特定位置打印的函数",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#封装在特定位置打印的函数",children:"#"}),"封装在特定位置打印的函数"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",meta:"",children:"void gotoxyUtil(int pos) {\r\n	__asm {\r\n		mov eax, dword ptr ds : [pos]\r\n		push eax\r\n\r\n		push -11\r\n		call GetStdHandle\r\n		push eax\r\n\r\n		call SetConsoleCursorPosition\r\n	}\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"其中，-11 代表句柄"}),"\n",(0,s.jsxs)(n.h2,{id:"值得注意的情况",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#值得注意的情况",children:"#"}),"值得注意的情况"]}),"\n",(0,s.jsxs)(n.p,{children:["可以看到 ",(0,s.jsx)(n.code,{children:"SetConsoleCursorPosition()"})," 中的 ",(0,s.jsx)(n.code,{children:"COORD"})," 结构中，内部参数 x 和 y 都是 short，也就是 16 字节，而我们在 32 位汇编下，一般都使用的是 32 字节的变量，为了能调用整个函数，我们需要对变量进行一些处理："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",meta:"",children:'void drawSnake() {\r\n	int i;\r\n	const char* format = "O";\r\n    ...\r\n    // 得到蛇的坐标, 拼接后调用 gotoxy\r\n    mov ecx, dword ptr ds : [eax]\r\n    // 左移 16 位, 用以将 x 和 y 两个 dword 的值拼接为 1 个 word\r\n    shl ecx, 16													\r\n    mov edx, dword ptr ds : [eax + 4]\r\n    or ecx, edx\r\n    push ecx\r\n    call gotoxyUtil\r\n    add esp, 4\r\n    ...\r\n}\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}let d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fdocs%2Fbit-life%2Fsnake%2Fgotoxy-util.md"]={toc:[{id:"画墙壁和食物",text:"画墙壁和食物",depth:2},{id:"setconsolecursorposition--画蛇",text:"SetConsoleCursorPosition —— 画蛇",depth:2},{id:"封装在特定位置打印的函数",text:"封装在特定位置打印的函数",depth:2},{id:"值得注意的情况",text:"值得注意的情况",depth:2}],title:"",frontmatter:{}}}}]);