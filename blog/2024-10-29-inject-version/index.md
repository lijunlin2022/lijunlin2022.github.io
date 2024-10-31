# Vite 打包 H5 如何注入版本号？

日常维护 H5 时，你可能有一个诉求，在 H5 发布时带上版本号。这样发现报错时，版本号可以辅助你排查错误；上线优化措施时，版本号可以辅助你观测性能……

本文我会告诉你 Vite 如何在 H5 注入版本号。

拳打 H5，脚踢小程序。我是「小霖家的混江龙」，关注我，带你了解更多实用的 H5、小程序武学。

## 注入版本号的流程

注入版本号主要分为三个步骤：

1. 从命令行读取版本号
2. 插入版本号到 HTML
3. 上报版本号给监控 SDK

为了方便演示这三个流程，我用 Vite 新建一个 Demo 项目。出于习惯，我这里直接选择了 React，你也可以选择 Vue。

![](./img/vite-demo.png)

注入版本号时，你只需要关心 vite.config.js。

![](./img/vite-config-js.png)

## 从命令行读取版本号

Windows、Linux 和 Mac 系统，在命令行设置临时环境变量的写法不同，你可以在安装 cross-env 这个开发依赖。它可以让你在不同系统使用相同方式注入环境变量（比如版本号）。

![](./img/cross-env.png)

安装依赖后，你可以运行如下命令。它的作用是往 process-env 里注入变量 H5_VERSION，并执行打包。

```bash
npx cross-env H5_VERSION=0.0.1 npm run build
```

你可以直接在 vite.config.js 中打印读取到的版本号：

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('H5_VERSION is ', process.env.H5_VERSION)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

可以看到，当运行 build 命令时，在 vite.config.js 内部已经读取到了 H5_VERSION。

![](./img/build.png)

下面，你需要把版本号插入到 HTML 中。

## 插入版本号到 HTML

你可以使用一个 vite 官方插件钩子函数 [transformIndexHtml](https://vitejs.cn/vite3-cn/guide/api-plugin.html#transformindexhtml) 编写一个插件，它可以替换 HTML 的内容，也可以插入 js 脚本。

插件代码如下，transformIndexHtml 函数返回了一个对象，对象包括 html 和 tag 两个属性。不难看出，这个对象的意思就是，在 head 标签靠前的位置插入一个 script 标签，标签内容是 `window.$H5_VERSION="0.0.1"`。

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function injectVersion () {
  return {
    name: 'inject-version',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            injectTo: 'head-prepend',
            tag: 'script',
            children: `window.$H5_VERSION = "${process.env.H5_VERSION}"`
          }
        ]
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), injectVersion()],
})
```

你可以再次启动打包，就能看到 dist 的产物中已经有了插入版本号的脚本。

![](./img/dist.png)

## 上报版本号给监控 SDK

因为版本号脚本在 head 标签最顶层，会最早执行，所以你之后在 HTML、React 中都可以用 `window.$H5_VERSION` 获取版本号。

现在，你要做的就是把版本号上传到监控平台。

以阿里云的错误监控 ARMS 为例，你可以在它初始化 SDK 时给 release 取值 `window.$H5_VERSION`。

```html
<!DOCTYPE html>
<html>
  <!-- ... 省略 -->
  <body>
    <script>
      !(function (c, b, d, a) {
        c[a] || (c[a] = {})
        c[a].config = {
          pid: 'xxx',
          appType: 'web',
          // ARMS 配置应用版本号
          release: window.$H5_VERSION,
          sendResource: true,
          enableLinkTrace: true,
          behavior: true,
          useFmp: true,
          enableSPA: true,
        }
        // ... 省略
      })(window, document, 'xxx.js', '__bl')
    </script>
    <!-- ...省略 -->
  </body>
</html>
```

## 总结

本文介绍了 Vite 如何在 H5 注入版本号。主要包括从命令行读取版本号、插入版本号到 HTML、上报版本号给监控 SDK 三个步骤。

拳打 H5，脚踢小程序。我是「小霖家的混江龙」，关注我，带你了解更多实用的 H5、小程序武学。
