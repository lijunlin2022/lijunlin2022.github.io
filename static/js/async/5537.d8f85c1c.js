"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["5537"],{42967:function(n,e,r){r.r(e),r.d(e,{default:function(){return i}});var s=r(85893),a=r(50065),d=r(95895);function t(n){let e=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"本文是汇编贪吃蛇的最后一篇，简单介绍了如何进行碰撞检测"}),"\n",(0,s.jsxs)(e.h2,{id:"碰撞检测",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#碰撞检测",children:"#"}),"碰撞检测"]}),"\n",(0,s.jsx)(d.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsx)(e.p,{children:"碰撞检测其实包含两个部分："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"检测蛇是否撞到墙壁"}),"\n",(0,s.jsx)(e.li,{children:"检测蛇是否吃到食物"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["这两部分都比较简单，由于贪吃蛇的特殊性，碰撞检测时只需要检测蛇头和墙壁、食物有没有重叠就好。其中墙壁的值为 ",(0,s.jsx)(e.code,{children:"0bh"}),"，而食物的值为 ",(0,s.jsx)(e.code,{children:"0ch"}),"，"]}),"\n",(0,s.jsx)(e.p,{children:"碰撞检测代码如下："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",meta:"",children:"void judgeDetection() {\r\n	int x;\r\n	int y;\r\n	__asm {\r\n		// 取出蛇头的 xy 坐标\r\n		lea eax, dword ptr ds : [globalSnakeArr]\r\n		mov ecx, dword ptr ds : [eax]\r\n		mov edx, dword ptr ds : [eax + 4]\r\n		mov dword ptr ds : [x] , ecx\r\n		mov dword ptr ds : [y] , edx\r\n\r\n		// 是否撞墙\r\n		lea eax, dword ptr ds : [globalMapArr]\r\n		imul ecx, ecx, 25\r\n		add eax, ecx\r\n		add eax, edx\r\n		// 从二维数组里面取指定下标值\r\n		mov cl, byte ptr ds : [eax]\r\n\r\n		// 判断是否撞墙\r\n		cmp cl, 0bh\r\n		je snake_dead\r\n\r\n\r\n		// 判断是否吃到食物\r\n		cmp cl, 0ch\r\n		je snake_add_len\r\n\r\n		// 啥都没做\r\n		jmp fun_end\r\n\r\n	snake_dead :\r\n		call calculateScore\r\n\r\n	snake_add_len :\r\n\r\n		call addSnakeLen\r\n		call initMapData\r\n		call setWall\r\n		call setFoodPosition\r\n\r\n	fun_end :\r\n		nop\r\n	}\r\n}\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"总结",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#总结",children:"#"}),"总结"]}),"\n",(0,s.jsx)(e.p,{children:"写到这里，代码的主要难点我已经全部讲解了，至于翻译为纯汇编，并不是困难的事情，相信读者参照着我的代码，很快就能明白究竟是怎么翻译的"}),"\n",(0,s.jsx)(e.p,{children:"今天刚好是我们汇编大作业的展示，看到台上其他人的作品，真的是太强了，甚至有小组用汇编写出了 3D 的游戏，这样一对比说实话挺难受的"}),"\n",(0,s.jsx)(e.p,{children:"但毕竟是我投入了大量心血的作品，不甘心没给它一个结尾，现在不管结尾美不美好，它至少是有一个结局了"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"如果你是北理工的同学，一定注意，光靠这个汇编贪吃蛇是无法立足的，如果最后大作业要展示，大佬的作品会超出你的想象"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"想要将这个贪吃蛇做得更加精美的话，可以看看在我队友添加亿点点之后的 super-snake.asm"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/lijunlin2022/assembly-snake",target:"_blank",rel:"noopener noreferrer",children:"assembly-snake | GitHub"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(t,n)})):t(n)}let i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["docs%2Fbit-life%2Fsnake%2Fcollision-detection.md"]={toc:[{id:"碰撞检测",text:"碰撞检测",depth:2},{id:"总结",text:"总结",depth:2}],title:"",frontmatter:{}}},95895:function(n,e,r){r.d(e,{Z:function(){return i}});var s=r(85893),a=r(67294),d=r(45687);r(6175);let t={"zh-CN":n=>`预计阅读时间: ${n.minutes>=1?`${Math.ceil(n.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":n=>`Estimated reading time: ${n.minutes>=1?`${Math.ceil(n.minutes)} minutes`:"less than 1 minute"}`};function l(n,e,r){let s=Object.keys(t).includes(e)?e:r;return t[s](n)}let i=n=>{let{defaultLocale:e="en-US"}=n,r=(0,d.Vi)().page.readingTimeData,t=(0,d.Jr)(),i=(0,d.e7)(),[c,h]=(0,a.useState)(l(r,t,e));return(0,a.useEffect)(()=>{h(l(r,t,e))},[t,r]),(0,s.jsx)("span",{"data-dark":String(i),className:"rp-reading-time",children:c})}}}]);