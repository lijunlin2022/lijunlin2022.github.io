"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3577],{48572:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(85893),i=r(11151);const o={},t="\u8bfb\u53d6\u76ee\u5f55",c={id:"nodejs/readdir",title:"\u8bfb\u53d6\u76ee\u5f55",description:"\u73b0\u5728\u7684 Node.js \u63d0\u4f9b\u4e86\u4e09\u79cd\u8bfb\u53d6\u76ee\u5f55\u7684\u65b9\u6cd5\uff1a",source:"@site/docs/06-nodejs/02-readdir.md",sourceDirName:"06-nodejs",slug:"/nodejs/readdir",permalink:"/docs/nodejs/readdir",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6",permalink:"/docs/nodejs/file"},next:{title:"\u5f02\u6b65\u5206\u5305",permalink:"/docs/miniprogram/async-subpackage"}},d={},l=[];function a(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u8bfb\u53d6\u76ee\u5f55",children:"\u8bfb\u53d6\u76ee\u5f55"}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\u7684 Node.js \u63d0\u4f9b\u4e86\u4e09\u79cd\u8bfb\u53d6\u76ee\u5f55\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fsPromises.readdir(path[, options])"}),"\uff0c\u5f02\u6b65\u8bfb\u53d6\uff0c\u8fd4\u56de\u503c\u4e3a Promise \u7c7b\u578b"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u793a\u4f8b\u4ee3\u7801\r\nconst { readdir } = require('fs/promises')\r\n\r\nconst getFiles = async () => {\r\n  try {\r\n    const files = await readdir(__dirname)\r\n    files.forEach(f => console.log(f))\r\n  } catch (e) {\r\n    console.error(e)\r\n  }\r\n}\r\n\r\ngetFiles()\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fs.readdir(path[, options], callback)"}),"\uff0c\u5f02\u6b65\u8bfb\u53d6\uff0c\u5229\u7528\u56de\u8c03\u51fd\u6570\u6765\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u7684\u60c5\u51b5"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { readdir } = require('fs')\r\n\r\nconst getFiles = () => {\r\n  readdir(__dirname, (err, files) => {\r\n    if (err) {\r\n      console.log(err)\r\n    } else {\r\n      files.forEach(f => console.log(f))\r\n    }\r\n  })\r\n}\r\n\r\ngetFiles()\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fs.readdirSync(path[, options])"}),"\uff0c\u540c\u6b65\u8bfb\u53d6"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { readdirSync } = require('fs')\r\n\r\nconst getFiles = () => {\r\n  const files = readdirSync(__dirname)\r\n  files.forEach(f => console.log(f))\r\n}\r\n\r\ngetFiles()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u6b65\u8bfb\u53d6\u76ee\u5f55\u7684\u5de7\u5999\u7528\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u5e38\u6765\u8bf4\uff0c\u6211\u4eec\u5728\u8bfb\u53d6\u6587\u4ef6\u65f6\uff0c\u5e38\u5e38\u4f7f\u7528\u5f02\u6b65\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u6709\u65f6\u4f7f\u7528\u540c\u6b65\u65b9\u6cd5\u6709\u5999\u7528\uff0c\u6bd4\u5982 Koa \u6ce8\u518c\u8def\u7531\u7684\u65f6\u5019\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"routes\r\n\u251c\u2500index.js\r\n\u251c\u2500users.js\r\n\u251c\u2500topics.js\r\n\u251c\u2500questions.js\r\n\u2514\u2500answers.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u4e3a\u6bcf\u4e00\u4e2a\u6587\u4ef6\u6ce8\u518c\u4e00\u4e2a\u8def\u7531\uff0c\u4f46\u4e00\u884c\u4e00\u884c\u5730\u5199\u5f88\u9ebb\u70e6\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u540c\u6b65\u8bfb\u53d6\u6587\u4ef6\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { readdirSync } = require('fs')\r\n\r\nmodule.exports = (app) => {\r\n\treaddirSync(__dirname).forEach(file => {\r\n  \tif (file === 'index.js') {\r\n      return\r\n    }\r\n    const router = require(`./${file}`)\r\n    app.use(router.routes()).use(router.allowedMethods())\r\n  })\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var s=r(67294);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);