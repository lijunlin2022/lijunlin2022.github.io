# uniform

attribute 变量只能在顶点着色器里面使用。如果想在片元着色器里面使用，只能使用 uniform 变量。

uniform 变量需要设置精度，分为低精度 lowp、中精度 mediump 和高精度 highp。如果需要改变颜色，可以使用 `precision mediump float;` 设置精度。

```js
const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform vec4 uColor;
  void main() {
    gl_FragColor = uColor;
  }
`
...
gl.uniform4f(uColor, 0.0, 1.0, 0.0, 1.0)
```

## uniform4f() 同族函数介绍

- `gl.uniform1f(location, v0)`
- `gl.uniform2f(location, v0, v1)`
- `gl.uniform3f(location, v0, v1, v2)`
- `gl.uniform4f(location, v0, v1, v2, v3)`

其中，location 指定 uniform 变量的存储位置，而 v0, v1, v2 和 v3 则是传入的四个分量的值。

使用 `uniform3f()` 时，有 1 个分量被省略，我们可以用如下方法给 uniform 变量赋值：

```js
const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor.r, uColor.g, uColor.b, 1.0);
  }
`
...
gl.uniform3f(uColor, 1.0, 1.0, 1.0) // 白色
gl.uniform3f(uColor, 0.0, 0.0, 0.0) // 黑色
```

使用 `uniform2f()` 时，有 2 个分量被省略，我们可以用如下方法给 uniform 变量赋值：

```js
const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform vec2 uColor;
  void main() {
    gl_FragColor = vec4(uColor.r, uColor.g, 1.0, 1.0);
  }
`
...
gl.uniform2f(uColor, 0.0, 0.0)
```

使用 `uniform1f()` 时，有 3 个分量被省略，我们可以用如下方法给 uniform 变量赋值：

```js
const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform float uColor;
  void main() {
    gl_FragColor = vec4(uColor, 0.0, 0.0, 1.0);
  }
`
...
gl.uniform1f(uColor, 1.0)
```
