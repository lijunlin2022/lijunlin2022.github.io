# cookie，local storage 和 session storage

## Cookie

cookie 本身用于浏览器和 server 通讯, 被 “借用” 到本地存储来

cookie 的特点:

- 存储大小: 最大 4KB
- http 请求时需要发送到服务端, 增加请求数据量
- 只能使用 `document.cookie = '...'` 来修改

```js
document.cookie = "a=100;b=200;"
```

对于 cookie 来说, 用 document.cookie 来设置时, 同一个 key 设置值会导致值被覆盖, 不同的 key 设置值则将 key 和 value 追加到 cookie 中

## LocalStorage 和 SessionStorage

localStorage 和 sessionStorage 是 HTML5 为存储设计的, 它们的特点为:

- 存储大小: 最大可存 5MB
- 不会随着 http 请求被发送出去
- API 简单易用 `setitem("key", "value")` 和 `getitem("key")`

不过 localStorage 个 session 有些区别:

- `localStorage` 数据会永久存储, 除非代码或手动删除
- `sessionStorage` 数据只存在于当前会话, 浏览器关闭则清空

一般我们用 `sessionStorage` 要多一些

## Cookie LocalStorage 和 SessionStorage 对比

|                  | cookie | localStorage | sessionStorage |
| ---------------- | ------ | ------------ | -------------- |
| 存储大小         | 4KB    | 5MB          | 5MB            |
| 是否随请求头提交 | 是     | 否           | 否             |
| 是否可以跨页     | 是     | 是           | 否             |
| API              | 粗陋   | 精细         | 精细           |
