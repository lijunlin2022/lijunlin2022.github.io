"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["3948"],{98333:function(n,r,A){A.r(r),A.d(r,{default:()=>g});var l=A("85893"),e=A("50065");let i=A.p+"static/image/multi-buffer-principle.f39234f3.png";function t(n){let r=Object.assign({h1:"h1",a:"a",p:"p",img:"img",pre:"pre",code:"code",ul:"ul",li:"li"},(0,e.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"多缓冲区和数据偏移",children:[(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#多缓冲区和数据偏移",children:"#"}),"多缓冲区和数据偏移"]}),"\n",(0,l.jsx)(r.p,{children:"上一节介绍了如何利用缓冲区绘制多个点，这节介绍如何创建多缓冲区。"}),"\n",(0,l.jsx)(r.p,{children:"比如同样要画三个点，三个点的位置不一样，大小也不一样，我们可以这样写："}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:"data:image/png;base64,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"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",meta:"",children:"...\r\nconst VERTEX_SHADER_SOURCE = `\r\n  attribute vec4 aPosition;\r\n  attribute float aPointSize;\r\n  void main() {\r\n    gl_Position = aPosition;\r\n    gl_PointSize = aPointSize;\r\n  }\r\n`\r\n...\r\nconst program = initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)\r\nconst aPosition = gl.getAttribLocation(program, 'aPosition')\r\nconst aPointSize = gl.getAttribLocation(program, 'aPointSize')\r\n\r\n// highlight-start\r\nconst points = new Float32Array([\r\n  -0.5, -0.5,\r\n  0.5, -0.5,\r\n  0.0, 0.5\r\n])\r\n\r\nconst buffer = gl.createBuffer()\r\ngl.bindBuffer(gl.ARRAY_BUFFER, buffer)\r\ngl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)\r\ngl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)\r\ngl.enableVertexAttribArray(aPosition)\r\n// highlight-end\r\n\r\n// highlight-start\r\nconst size = new Float32Array([\r\n  10.0,\r\n  20.0,\r\n  30.0\r\n])\r\n\r\nconst sizeBuffer = gl.createBuffer()\r\ngl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)\r\ngl.bufferData(gl.ARRAY_BUFFER, size, gl.STATIC_DRAW)\r\ngl.vertexAttribPointer(aPointSize, 1, gl.FLOAT, false, 0, 0)\r\ngl.enableVertexAttribArray(aPointSize)\r\n// highlight-end\r\n\r\ngl.drawArrays(gl.POINTS, 0, 3)\n"})}),"\n",(0,l.jsx)(r.p,{children:"不难看出，两段代码的相似程度很高，有什么办法可以降低代码重复度吗？"}),"\n",(0,l.jsx)(r.p,{children:"这时候就需要用到代码偏移，代码如下："}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",meta:"",children:"...\r\nconst points = new Float32Array([\r\n  -0.5, -0.5, 10.0,\r\n  0.5, -0.5, 20.0,\r\n  0.0, 0.5, 30.0\r\n])\r\n\r\nconst buffer = gl.createBuffer()\r\ngl.bindBuffer(gl.ARRAY_BUFFER, buffer)\r\ngl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)\r\n\r\nconst BYTES = points.BYTES_PER_ELEMENT\r\n// highlight-next-line\r\ngl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, BYTES * 3, 0)\r\ngl.enableVertexAttribArray(aPosition)\r\n// highlight-next-line\r\ngl.vertexAttribPointer(aPointSize, 1, gl.FLOAT, false, BYTES * 3, BYTES * 2)\r\ngl.enableVertexAttribArray(aPointSize)\r\n\r\ngl.drawArrays(gl.POINTS, 0, 3)\n"})}),"\n",(0,l.jsxs)(r.p,{children:["我们可以复习一下 ",(0,l.jsx)(r.code,{children:"vertexAttribPointer"})," 的使用方法："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",meta:"",children:"gl.vertexAttribPointer(location, size, type, normalized, stride, offset)\n"})}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"location，attribute 变量的存储地址"}),"\n",(0,l.jsx)(r.li,{children:"size，没绘制一个顶点需要几个数据"}),"\n",(0,l.jsxs)(r.li,{children:["type，指定数据格式","\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"gl.FLOAT，浮点型"}),"\n",(0,l.jsx)(r.li,{children:"gl.UNSIGNED_BYTE，无符号字节"}),"\n",(0,l.jsx)(r.li,{children:"gl.SHORT，短整型"}),"\n",(0,l.jsx)(r.li,{children:"gl.UNSIGNED_SHORT，无符号短整型"}),"\n",(0,l.jsx)(r.li,{children:"gl.INT，整型"}),"\n",(0,l.jsx)(r.li,{children:"gl.UNSIGNED_INT，无符号整型"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.li,{children:"normalized，表示是否将数据归一化到 [0, 1] [-1, 1] 这个区间"}),"\n",(0,l.jsx)(r.li,{children:"stride，两个相邻顶点之间的字节数"}),"\n",(0,l.jsx)(r.li,{children:"offset，数据偏移量"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:i})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,e.ah)(),n.components);return r?(0,l.jsx)(r,Object.assign({},n,{children:(0,l.jsx)(t,n)})):t(n)}let g=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fdocs%2Fwebgl%2F06-multi-buffer.md"]={toc:[],title:"多缓冲区和数据偏移",frontmatter:{}}}}]);