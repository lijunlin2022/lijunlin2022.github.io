# 文件

## 管道流

Node 本身有一个文件的管道流概念，文件就是装水的桶，文件就是水，然后用一个管道连接两个桶，从而实现大文件的复制过程。

```mermaid
graph LR
source --pipe--> dest
```

```js
const { createReadStream, createWriteStream } = require('fs')

const reader = createReadStream('input.txt')
const writer = createWriteStream('output.txt')

reader.pipe(writer)
```

在 Gulp 中，不仅文件支持管道流的概念，文件夹也支持管道流的概念。

```js
const { src, dest } = require('gulp')

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'))
}

exports.copy = copy
```

## Node 的四种流类型

Node.js 中有四种基本的流类型 [^2]：

- Readable，可读的流，例如 fs.createReadStream()
- Writable，可写的流，例如 fs.createWriteStream()
- Duplex，可读写的流，例如 net.Socket
- Transform，在读写过程中可以修改和变换数据的 Duplex 流

如果我们需要自己实现某一种流，那么需要重写一些方法：[^3]

| 类 | 需要重写的方法 |
| -- | -- |
| Readable | _read |
| Writable | _write |
| Duplex | _read, _write |
| Transform | _transform, _flush |

举一个自定义 Transform 的例子：

```js
const { Transform } = require('stream')

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
})

process.stdin.pipe(upperCaseTr).pipe(process.stdout)
```

这个流可以将控制台的输入流，转换为全大写的字母，然后输出。

## Node.js 文件操作

`path.parse()` 函数，返回的对象有如下属性：`root`, `dir`, `base`, `name`, `ext`。[^4]

## 流操作是异步的

Node.js 中的流是异步操作。使用流进行数据的读取和写入时，会异步地进行数据传输，即读取和写入过程会在后台异步完成，不会阻塞代码的执行。当读取或写入操作完成时，会触发相应的事件（例如 `data`，`end`，`error` 事件等），执行这些事件对应的回调函数。

因为流是异步的，所以为了避免数据丢失问题，我们一般会使用回调函数或者 Promise 等方式来处理数据。

## 判断是文件还是文件夹

Node.js 中，我们可以用 `fs.statSync()` 获取文件信息，然后利用 `stat.isFile()` 和 `stat.isDirectory()` 来判断是文件还是文件夹。

## 创建文件夹

在 Node.js 中，`fs.mkdir` 和 `fs.mkdirSync` 方法用于创建文件夹。在调用这些方法时，需要指定需要创建的文件夹路径。如果在该路径中的某些目录不存在时，则会抛出一个错误。例如，如果我们要创建目录 `./a/b/c/d`，但是 `./a/b` 这个目录不存在，就会出现错误。

为了解决这个问题，Node.js 从 10.x 版本开始增加了 `recursive` 配置参数，它用于控制是否按需创建父文件夹。当该配置参数为 true 时，如果目标路径中的某些目录不存在，则会自动递归创建这些目录。如果设置为 false 或者不设置这个参数，则会抛出一个错误。

## 复制文件

```js
const fs = require('fs')
const path = require('path')

/**
 * @description 复制源路径下的文件或者文件夹到目标路径
 * @param {string} src 源路径
 * @param {string} dest 目标路径
 */
function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isFile()) {
    // 如果是文件，则创建读取流和写入流进行复制
    const readStream = fs.createReadStream(src)
    const writeStream = fs.createWriteStream(dest)
    readStream.pipe(writeStream)
  } else if (stat.isDirectory()) {
    // 如果是文件夹，则先创建目标文件夹，然后递归调用 copy 函数复制文件夹下的所有内容
    fs.mkdirSync(dest, { recursive: true })
    const files = fs.readdirSync(src)
    files.forEach(file => {
      const fileSrc = path.join(src, file)
      const fileDest = path.join(dest, file)
      copy(fileSrc, fileDest)
    })
  }
}
```

使用 Promise 的方式改写：

```js
const fs = require('fs')
const path = require('path')

function copy(src, dest) {
  return new Promise((resolve, reject) => {
    const stat = fs.statSync(src)
    if (stat.isFile()) {
      // 如果是文件，则创建读取流和写入流进行复制
      const readStream = fs.createReadStream(src)
      const writeStream = fs.createWriteStream(dest)
      readStream.pipe(writeStream)
      readStream.on('error', reject)
      writeStream.on('error', reject)
      writeStream.on('finish', resolve)
    } else if (stat.isDirectory()) {
      // 如果是文件夹，则先创建目标文件夹，然后递归调用 copy 函数复制文件夹下的内容
      fs.mkdir(dest, { recursive: true }, err => {
        if (err) {
          reject(err)
        }
        const files = fs.readdirSync(src)
        return Promise.all(
          files.map(file => {
            const fileSrc = path.join(src, file)
            const fileDest = path.join(dest, file)
            return copy(fileSrc, fileDest)
          })
        ).then(() => resolve())
        .catch(reject)
      })
    }
  })
}
```

## Node.js 相对路径变为绝对路径

```js
const path = require('path');

const relativePath = './example.js';
const absolutePath = path.resolve(relativePath);

console.log(absolutePath); // 输出转换后的绝对路径
```

[^2]: [流（Stream）| Node.js 中文文档](https://www.nodeapp.cn/stream.html#stream_types_of_streams)
[^3]: [Node.js 中的 Stream（流）](https://heptaluan.github.io/2019/10/09/Node/01/#%E6%B5%81%E7%9A%84%E5%88%86%E7%B1%BB)
[^4]: [path.parse(path) | Node.js API](https://nodejs.cn/api/path/path_parse_path.html)
