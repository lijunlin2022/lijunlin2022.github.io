# promise

Promise 是 JavaScript 中进行异步编程的新的解决方法，从语法上看，Promise 是一个构造函数，从功能上看，Promise 用来封装一个异步操作并可以获取其结果

## Promise 的状态改变

* `pending` 变为 `resolved`
* `pending` 变为 `rejected`

说明：只有这两种改变方式，且一个 Promise 对象只能够改变一次

无论成功还是失败，都会有一个结果数据，成功的结果数据称为 `value`，失败的结果数据称为 `reason`。

## Promise 的基本流程

![](./assets/promise1.png)

## Promise 的基本使用

### 以 nodejs 读取文件为例：

使用回调函数的代码：

```javascript
const fs = require("fs");

fs.readFile("./为学.md"， (err, data) => {
    if (err) { throw err; }
    console.log(data.toString());
});
```

使用 Promise 的代码：

```javascript
const fs = require("fs");

const p = new Promise(function (resolve, reject) {
    fs.readFile("./为学.md", (err, data) => {
        if (err) { reject(err); }
        resolve(data)
    });
});

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log("读取失败");
});
```

### 以发送原生 ajax 请求为例：

使用回调函数的代码：

```javascript
// 1. 创建对象
const xhr = new XMLHttpRequest();
// 2. 初始化
xhr.open("GET", "https://api/");
// 3. 发送
xhr.send();
// 4. 绑定响应状态结果
xhr.onreadystatechange = function () {
    // 判断响应状态码 200 - 299
    if (xhr.status >= 200 && xhr.status < 300) {
        // 成功
        console.log(xhr.response);
    } else {
        // 失败
        console.log(xhr.status);
    }
}
```

使用 Promise 的代码：

```javascript
const p = new Promise(function (resolve, reject) {
    // 1. 创建对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    xhr.open("GET", "https://api/");
    // 3. 发送
    xhr.send();
    // 4. 绑定响应状态结果
    xhr.onreadystatechange = function () {
        // 判断响应状态码 200 - 299
        if (xhr.status >= 200 && xhr.status < 300) {
            // 成功
            resolve(xhr.response);
        } else {
            // 失败
            reject(xhr.status);
        }
    } 
});

p.then(function (value) {
    console.log(valuse);
}, function (reason) {
    console.error(reason);
});
```

### 以连续读取三个文件为例

使用回调函数的代码为：

```javascript
const fs = require("fs");

fs.readFile("./为学.md", (err, data1) => {
    fs.readFile("./插秧诗", (err, data2) => {
        fs.readFile("./观书有感", (err, data3) => {
            let result = data1 + '\n' + data2 + '\n' + data3;
            console.log(result);
        })
    })
})
```

使用 Promise 的代码为：

```javascript
const fs = require("fs");
const p = new Promise((resolve, reject) => {
  fs.readFile("./为学.md", (err, data) => {
      resolve(data);
  });
});

p.then(value => {
  return new Promise((resolve, reject) => {
      fs.readFile("./插秧诗.md", (err, data) => {
          resolve([value, data]);
      });
  });
}).then(value => {
  return new Promise((resolve, reject) => {
      fs.readFile("./观书有感.md", (err, data) => {
          value.push(data);
          resolve(value);
      });
  });
}).then(value => {
  console.log(value[0] + "\n" + value[1] + "\n" + value[2]);
});
```

## 为什么使用 Promise

* Promise 支持链式调用，能够解决回调地狱问题

  传统的异步编程，会将函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数的执行条件，这被称之为回调地狱。

  回调地狱倒置代码难以阅读和维护。

  Promise 支持链式调用，让代码能更加方便阅读和维护。

## Promise 的常见 API

1. Promise 构造函数：`Promise(excutor) {}`

   1. `excutor` 函数：执行器 `(resolve, reject) => {}`
   2. `resolve` 函数：内部定义成功时我们调用的函数
   3. `reject` 函数：内部定义失败时我们调用的函数

   **说明**: excutor 会在 Promise 内部立即**同步**执行，异步操作在 `resolve` 和 `reject` 中执行

2. `Promise.prototype.then` 方法：`(onResolved, onRejected) => {}`

   1. `onResolved 函数`: 成功时的回调函数, `(value) => {}`
   2. `onRejected 函数`: 失败时的回调函数, `(reason) => {}`

   **说明**: 指定之后返回的新的 Promise 对象

3. `Promise.prototype.catch` 方法: `(onRejected) => {}` 

   1. `onrejected 函数`: 失败时的回调函数, `(reason) => {}`

   **说明**: `then()` 的语法糖, 相当于 `then(undefined, onRejected)`

4. `Promise.resolve` 方法: `(value) => {}`

   1. `value`: 成功的数据

   **说明**: 返回一个成功的 Promise 对象

5. `Promise.reject` 方法: `(reason) => {}`

   1. `reason`: 失败的原因

   **说明**: 返回一个失败的 Promise 对象

6. `Promise.all` 方法: `(promises) => {}`

   1. `promises`: 包含 n 个 Promise 的数组
   2. 返回一个新的 Promise, **只有所有的 Promise 都成功才成功**, **只要有一个失败就直接失败**

   ```javascript
   const pAll = Promise.all([p1, p2, p3]);
   pAll.then(
       values => {
           console.log("all onResolved()", values);
       },
       reasons => {
           console.log("all onRejected()", reasons);
       }
   );
   ```

7. `Promise.race` 方法: `(promises) => {}`

   1. `promises`: 包含 n 个 Promise 的数组
   2. 返回一个新的 Promise, **最先完成的 Promise 的状态就是最终的结果状态**

   ```javascript
   const pAll = Promise.all([p1, p2, p3]);
   pRace.then(
       value => {
           console.log("all onResolved()", values);
       },
       reason => {
           console.log("all onRejected()", reasons);
       }
   );
   ```

## 举例学习 Promise 的细节

### 如何改变 Promise 的状态

1. `resolve(value)`: 如果当前是 pending 状态就变为 resolved
2. `reject(value)`: 如果当前是 pending 状态就变为 rejected
3. 抛出异常: 如果当前是 pending 状态就变为 rejected

```javascript
const p = new Promise((resolve, reject) => {
    throw new Error("出错了");
});
console.log(p); // rejected 的 Promise
```

### 一个 Promise 指定多个成功/失败回调函数, 都会调用吗

```javascript
const p = new Promise((resolve, reject) => {
    resolve(1);
});

p.then(value => {
    console.log("resolve 1");
});

p.then(value => {
    console.log("resolve 2");
});

p.then(value => {
    console.log("resolve 3");
});

// resolve 1
// resolve 2
// resolve 3
```

**一个 Promise 指定多个成功/失败回调函数, 都会调用**

### Promise.prototype.then 返回的新 Promise 状态有什么决定

* 简单表达: 由 then() 指定的回调函数的执行结果决定
* 详细表达:
  * 如果抛出异常, 则新 Promise 状态为 rejected, reason 为抛出的异常
  * 如果返回的是非 Promise 的任意值, 则新 Promise 状态为 resolved, value 为返回的值
  * 如果返回的是 Promise, 则由 Promise 决定
  * 没有返回则相当于 `return undefined;`, 则新 Promise 状态为 resolved

```javascript
const p = new Promise((resolve, reject) => {
    reject(1);
});

p.then(
    value => {
        console.log("resolve 1");
    },
    reason => {
        console.log("reject 1");
    }
).then(
    value => {
        console.log("resolve 2");
    },
    reason => {
        console.log("reject 2");
    }
);
// reject 1
// resolve 2
```

### Promise 可以串联多个同步和异步任务

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("执行任务 1 —— 异步");
        resolve(1);
    }, 1000);
}).then(
    value => {
        console.log("任务 1 的结果: ", value);
        console.log("执行任务2 —— 同步");
        return 2;
    }
).then(
    value => {
        console.log("任务 2 的结果: ", value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("执行任务 3 —— 异步");
                resolve(3);
            }, 1000);
        });
    }
).then(
    value => {
        console.log("任务 3 的结果: ", value);
    }
);
// 执行任务 1 —— 异步
// 任务 1 的结果:  1
// 执行任务2 —— 同步
// 任务 2 的结果:  2
// 执行任务 3 —— 异步
// 任务 3 的结果:  3
```

### Promise 异常穿透/传透

1. 当使用 then 链式调用时, 可以在最后指定失败的回调
2. 前面的任何操作出了异常, 都会传到最后失败的回调处理中

没写 `reason` 相当于 `reason => { throw reason; }`


### 中断 Promise 链

在 then 的回调函数中, 返回:

```javascript
return new Promise(() => {}); // 返回一个状态为 pending 的 Promise
```
