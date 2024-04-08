# 顶点着色器和片元着色器

着色器，就是让开发者自己去编写一段程序，用来代替固定渲染管线，来处理图片的渲染。

顶点着色器，三维的坐标；片元着色器，可以理解为一个像素。JavaScript 读取相关着色器信息，传递给 webgl 并进行使用。

最基础的，绘制一个点的 webgl 程序：

```html
<canvas id="canvas" width="400" height="400"></canvas>
```

```js
const canvas = document.getElementById('canvas')
const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
  void main() {
    // 要绘制的点坐标分别是 x y z 和 w, 其中 w 是其次坐标 (x/w, y/w, z/w)
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    // 点的大小
    gl_PointSize = 40.0;
  }
`


const FRAGMENT_SHADER_SOURCE = `
  void main() {
    // 颜色, 其中分别是 r g b 和 a
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`

// 创建着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER)
const fragementShader = gl.createShader(gl.FRAGMENT_SHADER)

// 绑定源码
gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
gl.shaderSource(fragementShader, FRAGMENT_SHADER_SOURCE)

// 编译着色器
gl.compileShader(vertexShader)
gl.compileShader(fragementShader)

// 创建一个程度对象
const program = gl.createProgram()

gl.attachShader(program, vertexShader)
gl.attachShader(program, fragementShader)

gl.linkProgram(program)
gl.useProgram(program)

// 执行绘制, 参数分别代表: 要绘制的图像, 开始位置, 使用几个顶点
gl.drawArrays(gl.POINTS, 0, 1)
```

其中，顶点着色器和片元着色器程序中，必须有分号。

上述 js 代码中，可以封装一个初始化着色器的函数：

```js
function initShader(gl, vertexSource, fragementSource) {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragementShader = gl.createShader(gl.FRAGMENT_SHADER)

  // 绑定源码
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
  gl.shaderSource(fragementShader, FRAGMENT_SHADER_SOURCE)

  // 编译着色器
  gl.compileShader(vertexShader)
  gl.compileShader(fragementShader)

  // 创建一个程度对象
  const program = gl.createProgram()

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragementShader)

  gl.linkProgram(program)
  gl.useProgram(program)

  return program
}
```
