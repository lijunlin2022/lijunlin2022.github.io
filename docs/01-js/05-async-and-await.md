# async 和 await

## async 函数

`async` 函数的返回值为 Promise 对象，且该对象的结果由 `async` 函数执行的结果来决定

```js
async function fn1() {
  return 1;
}
console.log(fn1()); // 得到一个 Promise 对象, value 为 1
```

```js
async function fn2() {
  throw 2;
}
console.log(fn2()); // 得到一个 Promise 对象, value 为 2
```

其余的，例如：`return Promise.resolve(3);` 或者 `return Promise.reject(4);` 等看结果就可以直接决定。

## await 表达式

`await` 右侧的表达式一般为 Promise 对象，但也可以是其他值

- 如果表达式是 Promise 对象，`await` 返回的是 Promise 成功的值
- 如果表达式是其他值，直接将此值作为 `await` 的返回值

**注意**:

- `await` 必须写在 `async` 函数中，但 `async` 中可以没有 `await`
- 如果 `await` 的 Promise 对象失败了，就会抛出异常，需要通过 try ... catch 来捕获处理，且捕获到的异常为 Promise 对象失败的值

```js
async function fn1() {
  throw 2;
}
async function fn2() {
  try {
    const value = await fn1();   
  } catch (error) {
    console.log(error);
  }
}
fn2(); // 2
```

## `async/await` 和 `Promise` 的关系

`async/await` 是消灭异步回调的终极武器，但是和 Promise 并不互斥，通常会将 `async/await` 和 `Promise` 结合使用。

- 执行 `async` 函数，返回的是 `Promise` 对象
- `await` 相当于 `Promise` 的 `then`
- `try ... catch` 可捕获异常，代替了 `Promise` 的 `catch`

不过，js 还是单线程的，还是有一部，还是得基于 `event loop`，`async/await` 只是一个语法糖。

## `async/await` 的执行顺序

看一道题目：

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');
async1();
console.log('script end');

// script start
// async1 start
// async2
// script end
// async1 end
```

**`await` 后面，都可以看作是 callback 里的内容**，类似：

```js
Promise.resolve().then(() => {
  console.log('async1 end');
});
```

这道题目再增加一点难度：

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
  await async3();
  console.log('----------');
}

async function async2() {
  console.log('async2');
}

async function async3() {
  console.log('async3');
}

console.log('script start');
async1();
console.log('script end');

// script start
// async1 start
// async2
// script end
// async1 end
// async3
// ----------
```

最后一道题目：

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```