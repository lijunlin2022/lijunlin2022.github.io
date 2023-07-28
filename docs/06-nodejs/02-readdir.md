# 读取目录

现在的 Node.js 提供了三种读取目录的方法：

- `fsPromises.readdir(path[, options])`，异步读取，返回值为 Promise 类型

```js
// 示例代码
const { readdir } = require('fs/promises')

const getFiles = async () => {
  try {
    const files = await readdir(__dirname)
    files.forEach(f => console.log(f))
  } catch (e) {
    console.error(e)
  }
}

getFiles()
```

- `fs.readdir(path[, options], callback)`，异步读取，利用回调函数来处理成功和失败的情况

```js
const { readdir } = require('fs')

const getFiles = () => {
  readdir(__dirname, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      files.forEach(f => console.log(f))
    }
  })
}

getFiles()
```

- `fs.readdirSync(path[, options])`，同步读取

```js
const { readdirSync } = require('fs')

const getFiles = () => {
  const files = readdirSync(__dirname)
  files.forEach(f => console.log(f))
}

getFiles()
```

同步读取目录的巧妙用法

通常来说，我们在读取文件时，常常使用异步的方法，但是有时使用同步方法有妙用，比如 Koa 注册路由的时候：

```
routes
├─index.js
├─users.js
├─topics.js
├─questions.js
└─answers.js
```

我们需要为每一个文件注册一个路由，但一行一行地写很麻烦，因此我们可以使用同步读取文件的方法：

```js
const { readdirSync } = require('fs')

module.exports = (app) => {
	readdirSync(__dirname).forEach(file => {
  	if (file === 'index.js') {
      return
    }
    const router = require(`./${file}`)
    app.use(router.routes()).use(router.allowedMethods())
  })
}
```
