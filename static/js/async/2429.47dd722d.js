"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2429"],{13969:function(e,n,t){t.r(n),t.d(n,{default:()=>o});var r=t("85893"),i=t("50065"),d=t("95895");let s=t.p+"static/image/pdd.1ff13206.gif",c=t.p+"static/image/scroll-left.0a226a3e.png",l=t.p+"static/image/calculate-scroll-left.e3340e0c.png";function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"h5小程序-tab-如何滚动居中",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#h5小程序-tab-如何滚动居中",children:"#"}),"H5、小程序 Tab 如何滚动居中？"]}),"\n",(0,r.jsx)(d.Z,{defaultLocale:"zh-CN"}),"\n",(0,r.jsx)(n.p,{children:"Tab 在 PC 端、移动端应用都上很常见，不过 Tab 在移动端 比 PC 端更复杂。为什么呢？移动端设备屏幕较窄，一般仅能展示 4 ~ 7 个 Item。考虑到用户体验，UI 往往要求程序员实现一个功能——点击 Item 后，Item 滚动到屏幕中央，拼多多的 Tab 就实现了这个功能。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s})}),"\n",(0,r.jsx)(n.p,{children:"如果你也想实现这个功能，看了这篇文章，你一定会有所收获。我会先说明 Tab 滚动的本质，分析出滚动距离的计算公式，接着给出伪代码，最后再给出 Vue、React 和微信小程序的示例代码。"}),"\n",(0,r.jsxs)(n.h2,{id:"tab-滚动的本质",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tab-滚动的本质",children:"#"}),"Tab 滚动的本质"]}),"\n",(0,r.jsx)(n.p,{children:"Tab 滚动，本质是包裹着 Item 的容器在滚动。"}),"\n",(0,r.jsx)(n.p,{children:"如下图，竖着的虚线长方形代表手机屏幕，横着的长方形代表 Tab 的容器，标着数字的小正方形代表一个个 Tab Item。"}),"\n",(0,r.jsx)(n.p,{children:"左半部分中，Tab 容器紧贴手机屏幕左侧。右半部分中，Item 4 位于屏幕中央，两部分表示 Item 4 从屏幕右边滚动到屏幕中央。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c})}),"\n",(0,r.jsx)(n.p,{children:"不难看出，Item 4 滚动居中，其实就是容器向左移动 distance。此时容器滚动条到容器左边缘的距离也是 distance。"}),"\n",(0,r.jsxs)(n.p,{children:["换句话说，",(0,r.jsx)(n.strong,{children:"让容器向左移动 distance，Item 4 就能居中。"})," 因此只要你能找出计算 distance 的公式，就能控制某个 Item 居中。"]}),"\n",(0,r.jsxs)(n.h2,{id:"计算-distance-的公式",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#计算-distance-的公式",children:"#"}),"计算 distance 的公式"]}),"\n",(0,r.jsx)(n.p,{children:"该如何计算 distance 呢？你看下方这张更细致的示意图。"}),"\n",(0,r.jsxs)(n.p,{children:["屏幕中央有一条线，它把 Item 4 分成了左右等宽的两部分，也把手机屏幕分成了左右等宽的两部分。你可以把 Item 4 一半的宽度记为 ",(0,r.jsx)(n.code,{children:"halfItemWidth"}),"，把手机屏幕一半的宽度记为 ",(0,r.jsx)(n.code,{children:"halfScreenWidth"}),"。再把 Item 4 左侧到容器左侧的距离记为 ",(0,r.jsx)(n.code,{children:"itemOffsetLeft"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:l})}),"\n",(0,r.jsx)(n.p,{children:"不难看出，这四个值满足如下等式："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{meta:"",children:"distance + halfScreenWidth = itemOffsetLeft + halfItemWidth\n"})}),"\n",(0,r.jsx)(n.p,{children:"简单推导一下，就得到了计算 distance 的公式。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{meta:"",children:"distance = itemOffsetLeft + halfItemWidth - halfScreenWidth\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"公式的伪代码实现",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#公式的伪代码实现",children:"#"}),"公式的伪代码实现"]}),"\n",(0,r.jsx)(n.p,{children:"现在开始解释公式的代码实现。"}),"\n",(0,r.jsxs)(n.p,{children:["先看下 ",(0,r.jsx)(n.code,{children:"itemOffsetLeft"}),"、",(0,r.jsx)(n.code,{children:"halfItemWidth"})," 和 ",(0,r.jsx)(n.code,{children:"halfScreenWidth"})," 如何获取。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"itemOffsetLeft"})," 是 Item 元素到容器左侧的距离，你可以用 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft",target:"_blank",rel:"noopener noreferrer",children:"HTMLElement.offsetLeft"})," 作它的值。"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"halfItemWidth"})," 是 Item 元素一半的宽度。",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth",target:"_blank",rel:"noopener noreferrer",children:"HTMLElement.offsetWidth"})," 是元素的整体宽度，你可以用 ",(0,r.jsx)(n.code,{children:"offsetWidth / 2"})," 作它的值，也可以先用 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener noreferrer",children:"Element.getBoundingClientRect()"})," 获取一个 ",(0,r.jsx)(n.code,{children:"itemRect"})," 对象，再用 ",(0,r.jsx)(n.code,{children:"itemRect.width / 2"})," 作它的值。"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"halfScreenWidth"})," 是手机屏幕一半的宽度。 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth",target:"_blank",rel:"noopener noreferrer",children:"window.innerWidth"})," 是手机屏幕的整体宽度，你可以用 ",(0,r.jsx)(n.code,{children:"innerWidth / 2"})," 作它的值。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"再看下如何把 distance 设置到容器上。"}),"\n",(0,r.jsxs)(n.p,{children:["在 HTML 中，你可以使用 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollLeft",target:"_blank",rel:"noopener noreferrer",children:"Element.scrollLeft"})," 来读取和设置元素滚动条到元素左边的位置。因此，你只需要容器的 ",(0,r.jsx)(n.code,{children:"scrollLeft"})," 赋值为 distance，就可以实现 Item 元素滚动居中。"]}),"\n",(0,r.jsx)(n.p,{children:"现在给出点击 tab 的函数的伪代码："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"",children:"const onClick = () => {\r\n  const itemOffsetLeft = item.offsetLeft;\r\n  const halfItemWidth = item.offsetWidth / 2;\r\n  const halfScreenWidth = window.innerWidth / 2;\r\n  tabContainer.scrollLeft = itemOffsetLeft + halfItemWidth - halfScreenWidth\r\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"代码示例",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码示例",children:"#"}),"代码示例"]}),"\n",(0,r.jsxs)(n.h3,{id:"vue",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue",children:"#"}),"Vue"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://codesandbox.io/p/sandbox/vue-tab-scroll-to-center-qxw4vc",target:"_blank",rel:"noopener noreferrer",children:"Tab 滚动居中 | Vue"})}),"\n",(0,r.jsxs)(n.h3,{id:"react",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react",children:"#"}),"React"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://codesandbox.io/p/sandbox/react-tab-scroll-to-center-22939z",target:"_blank",rel:"noopener noreferrer",children:"Tab 滚动居中 | React"})}),"\n",(0,r.jsxs)(n.h3,{id:"微信小程序",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#微信小程序",children:"#"}),"微信小程序"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developers.weixin.qq.com/s/npBjVpmj7XKc",target:"_blank",rel:"noopener noreferrer",children:"Tab 滚动居中 | 微信小程序"})}),"\n",(0,r.jsx)(n.p,{children:":::info\r\n小程序的 API 和浏览器的 API 有差异。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"itemOffsetLeft"})," ，你需要从点击事件的 ",(0,r.jsx)(n.code,{children:"event.currentTarget"})," 中获取。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"halfItemWidth"}),"，你需要先用 ",(0,r.jsx)(n.code,{children:"wx.createSelectorQuery()"})," 选取到 Item 后，从 ",(0,r.jsx)(n.code,{children:"exec()"})," 的执行结果中获取到 Item 整体宽度，然后再除以 2。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"halfScreenWidth"}),"，你需要先用 ",(0,r.jsx)(n.code,{children:"wx.getSystemInfoSync()"})," 获取屏幕整体宽度，然后再除以 2。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["至于把 ",(0,r.jsx)(n.code,{children:"distance"})," 设置到容器上，微信小程序 ",(0,r.jsx)(n.code,{children:"scroll-view"})," 组件中，有 ",(0,r.jsx)(n.code,{children:"scroll-left"})," 这个属性，你可以把 ",(0,r.jsx)(n.code,{children:"distance"})," 赋值给 ",(0,r.jsx)(n.code,{children:"scroll-left"}),"。"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}let o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["blog%2F2023%2F07%2F30%2Findex.md"]={toc:[{id:"tab-滚动的本质",text:"Tab 滚动的本质",depth:2},{id:"计算-distance-的公式",text:"计算 distance 的公式",depth:2},{id:"公式的伪代码实现",text:"公式的伪代码实现",depth:2},{id:"代码示例",text:"代码示例",depth:2},{id:"vue",text:"Vue",depth:3},{id:"react",text:"React",depth:3},{id:"微信小程序",text:"微信小程序",depth:3}],title:"H5、小程序 Tab 如何滚动居中？",frontmatter:{tags:["H5","小程序"]}}},95895:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(85893),i=t(67294),d=t(45687);t(6175);let s={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,n,t){let r=Object.keys(s).includes(n)?n:t;return s[r](e)}let l=e=>{let{defaultLocale:n="en-US"}=e,t=(0,d.Vi)().page.readingTimeData,s=(0,d.Jr)(),l=(0,d.e7)(),[h,a]=(0,i.useState)(c(t,s,n));return(0,i.useEffect)(()=>{a(c(t,s,n))},[s,t]),(0,r.jsx)("span",{"data-dark":String(l),className:"rp-reading-time",children:h})}}}]);