题材：先请求后返回的 3 种解决办法

- 取消请求，可以用 clearTimeout 来模拟
- 忽略请求，可以用 tabIndex !== currentIndex 来模拟
- 映射请求，可以用 lists.children[tabIndex].innerHTML = data 拉模拟

主题：

1、忽略请求是最常见、实用的方法；
2、映射请求经常和忽略请求结合使用，需要缓存数据减少请求时非常有效
3、取消请求需要搭建项目时就考虑清除，后期添加取消请求功能非常麻烦
