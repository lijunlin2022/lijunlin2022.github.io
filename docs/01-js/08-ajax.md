# ajax

Ajax 是浏览器提供的一套方法,可以实现页面无刷新更新数据,提高用户浏览网站应用的体验。

Ajax 的应用场景举例:

1. 页面上拉加载更多数据
2. 列表数据无刷新分页
3. 表单项离开焦点数据验证
4. 搜索框提示文字下拉列表

## Ajax的实现步骤

1.创建Ajax对象

```js
var xhr = new XMLHttpRequest()
```

2.告诉 Ajax 请求地址以及请求方式

```js
xhr.open("get", "http://www.example.com")
```

3.发送请求

```js
xhr.send()
```

4.获取服务器端给与客户端的响应数据

```js
xhr.onload = function() {
  console.log(xhr.responseText)
}
```

在真实的项目中,服务器端大多数情况下会以 JSON 对象作为响应数据的格式。当客户端拿到响应数据时
要将 JSON 数据转变为对象

于是代码可能为:

```js
xhr.onload = function() {
  var responseText = JSON.parse(xhr.responseText)
  var str = `<h2>${responseText}</h2>`
  document.body.innerHTML = str
}
```

## Ajax 请求参数传递

### GET 请求方式

GET 请求方式, 需要在路径后面拼接参数, 类似

```
http://www.example.com?name=zhangsan&age=20
```

因此一般会创建一个 params 作为拼接的请求参数

```js
var params = "username=" + nameValue +"&age=" + ageValue
xhr.open("get", "http://localhost:3000/get?" + params)
xhr.send()
```

### POST 请求方式

POST 请求参数的格式有两种

- application/x-www-form-urlencoded

```
name=zhangsan&age=20
```

- application/json

```json
{ "name": "zhangsan", "age": 20 }
```

因此, POST 请求方式有两个注意点

- POST 请求方式需要设置 `header`
- POST 请求方式的 `send()` 有参数

下面分别举例看看 POST 两种请求方式的代码:

```js
//  application/x-www-form-urlencoded
var xhr = new XMLHttpRequest()
var nameValue = username.vaule
var ageValue = age.value
var params = "username=" + nameValue + "&age=" + ageValue
xhr.open("post", "http://localhost:3000/post")

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
xhr.send(params)

xhr.onload = function() {
  console.log(JSON.parse(xhr.responseText))
}
```

```js
// application/json
var xhr = new XMLHttpRequest()
var nameValue = username.vaule
var ageValue = age.value
xhr.open("post", "http://localhost:3000/post")

xhr.setRequestHeader("Content-Type", "application/json")
xhr.send(JSON.stringify({name: nameValue, age: ageValue}))

xhr.onload = function() {
  console.log(JSON.parse(xhr.responseText))
}
```

## Ajax 获取服务端的响应

之前我们已经用过 xhr 的 onload 事件来判定服务端已经响应, 其实还有另外一种方法, 用 xhr 的 onreadystatechange 事件来判定

在创建 ajax 对象,配置 ajax 对象, 发送请求, 以及接收完服务器端响应数据, 这个过程中的毎一个步骤都会对应一个数值, 这个数值就是 `ajax 状态码`

- 0: 请求未初始化 (还没有调用 `open()`)
- 1: 请求已经建立,但是还没有发送 (还没殳有调用 `send()`)
- 2: 请求已经发送
- 3: 请求正在处理中, 通常响应中已经有部分数据可以用了
- 4: 响应已经完成, 可以获取并使用服务器的响应了

```js
xhr.readyState // 获取 Ajax 状态码
```

`onreadystatechange` 事件: 当Ajax状态码发生变化时将自动触发该事件

```js
var xhr = new XMLHttpRequest()

// 已经创建了 ajax 对象但是还没有对 ajax 对象进行配置
console.log(xhr.readyState) // 0

xhr.open("get", "http://localhost:3000/readystate")

// 请求已经建立, 但是还没有发送
console.log(xhr.readyState) // 1

xhr.onreadystatechange = function() {
  // 2 请求已经发送了
  // 3 已经接收到服务器端的部分数据了
  // 4 服务器端的响应数据已经接收完成
  console.log(xhr.readyState)

  if (xhr.readyState === 4) {
    console.log(xhr.responseText)
  }
}

xhr.send();
```

## `onload` 和 `onreadystatechange` 对比

| 区别描述                 | onload | onreadystatechange |
| ------------------------ | ------ | ------------------ |
| 是否兼容 IE 低版本       | 不兼容 | 兼容               |
| 是否需要判断 Ajax 状态码 | 不需要 | 需要               |
| 被调用次数               | 一次   | 多次               |

## Ajax 状态码和 HTTP 状态码的区别

- Ajax 状态码: 表示 Ajax 请求的过程状态, 是 ajax 对象返回的
- Http状态码: 表示请求的处理结果, 是服务器端返回的

## Ajax 错误处理

1. 网络畅通, 服务器端能接收到求, 但服务器端返回的结果不是预期结果

用 xhr.status 获取 http 状态码, 分别进行处理

```javascript
xhr.onload = function() {
  if (xhr.status === 400) {
    alert("请求出错")
  }
}
```

2. 网络畅通, 服务器端殳有接收到请求, 返回 404 状态码

检查请求地址是否错误

3. 网络畅通, 服努器端能接收到求, 脶务器端返回 500 状态码

服务器端错误, 找后端程序员进行沟通

4. 网络中断, 请求无法发送到服务器端

会触发 xhr 对象下面的 onerror 事件, 在  onerror 事件处理函数中对错误进行处理

```js
xhr.onload = function() {
  ...
}
xhr.onerror = function() {
  alert("网络中断, 无法发送 Ajax 请求")
}
```

## 低版本浏览器的缓存问题

问题: 在低版本的 IE 浏览器中, Ajax 请求有严重的缓存问题, 即在请求地址不发生变化的情兄下, 只有第一次请求会真正发送到服务器端, 后续的请求都会从浏览器的缓存中获取结果。
即使服务器端的数据更新了, 客户端依然拿到的是缓存中的旧的数据

解决方案: 在请求地址的后面加请求参数, 保证每一次请求中的请求参数的值不相同

```js
xhr.open('get','http://www.example.com?t=' + Math.random())
```
