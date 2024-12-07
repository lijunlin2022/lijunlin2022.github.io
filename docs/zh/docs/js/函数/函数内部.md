# 函数和 this 指向

## 创建函数的四种方式

1. 命名函数

```javascript
function fn() {};
```

2. 匿名函数

```javascript
var fn = function() {};
```

3. 利用 Function 关键字

```javascript
var fn = new Function('参数1', '参数2', '函数体');
```

举例而言：

```javascript
var fn = new Function('a', 'b', 'console.log(a + b)');
fn(1, 2); // 3
```

4. 箭头函数

```javascript
let fn = () => {};
```

## 函数的类别

1. 普通函数

```javascript
function fn() {
    console.log("Hello World!");
}
```

2. 对象的方法

```javascript
var o = {
    sayHi: function() {
        console.log("Hello World!");
    }
}
```

3. 构造函数

```javascript
function Star(name) {
    this.name = name;
}
var ldh = new Star("刘德华");
```

4. 绑定事件函数

```javascript
var btn = document.querySelector("button");
btn.onclick = function() {};
```

5. 定时器函数

```javascript
setInterval(function() {}, 1000);
```

6. 立即执行函数

```javascript
(function() {
    console.log("Hello World!");
})();
```

7. 箭头函数

```javascript
let fn = () => {
    console.log("Hello World!");
};
```

## 不同函数内 this 的指向

这些 this 的指向，是当我们调用函数时决定的，调用方式的不同决定了 this 的指向不同，一般**指向函数的调用者**

| 调用方式     | this 指向                                  |
| ------------ | ------------------------------------------ |
| 普通函数调用 | window                                     |
| 对象方法调用 | 该方法所属对象                             |
| 构造函数调用 | 实例对象, 原型对象里面的方法也指向实例对象 |
| 绑定事件函数 | 绑定事件对象                               |
| 定时器函数   | window                                     |
| 立即执行函数 | window                                     |
| 箭头函数     | (静态的) 函数声明时所在的作用域            |

## 改变 this 指向的三种方法

JavaScript 为我们提供了一些函数方法帮助我们改变函数的指向，常用的有 `bind()`、`call()` 和 `apply()` 三种方法

- call()

call 可以调用函数，可以改变函数内的 this 指向，之前用来实现继承

```javascript
function Father(uname, age, sex) {
    this.uname = uname;
    this.age = age;
    this.sex = sex;
}

function Son(uname, age, sex) {
    Father.call(this, uname, age, sex);
}

var son = new Star("刘德华", 40, '男');
```

- apply()

apply() 方法调用一个函数，也可以改变函数内部 this 的指向，不过它传递的参数是数组形式

语法：

```javascript
fun.apply(thisArg, [argsArray]);
```

参数：

* thisArg: this 将要指定的对象
* argsArray: 传递的值，必须包含在数组里面

```javascript
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

它常见的功能就是借助数学内置对象求最大值和最小值:

```javascript
var arr = [1, 66, 3, 99, 4];
var max = Math.max.apply(Math, arr);
console.log(max); // 99
var min = Math.min.apply(Math, arr);
console.log(min); // 1
```

- bind()

bind() 方法**不会调用函数**，但是能改变函数内部 this 指向

语法：

```javascript
fun.bind(thisArg, arg1, arg2, ...)
```

参数：

* thisArg: this 将要指定的对象
* arg1, arg2, ...: 将要传递的参数

返回值：

返回改变后的**函数拷贝**

举例：

```javascript
function fn(a, b) {
  console.log(a + b);
}
var obj = {};
var f = fn.bind(obj, 1, 2);
f(); // 3
```

bind() 非常常用，下面举一个例子：

假设有一个按钮，当我们点击按钮之后，需要禁用按钮 3 秒之后，按钮才能继续使用，应该如何实现呢？

```javascript
var btn = document.querySelector("button");
btn.onclick = function() {
    this.disabled = true;
    setTimeout(function() {
        this.disabled = false;  // setTimeout 的 this 指向 window, 通过 bind 改回 btn
    }.bind(this), 3000);
}
```

有时 A 对象调用 B 函数，B 函数需要有自己的 this，也需要 A 对象的 this，可以好好利用 bind() 传参：

```javascript
A.onclick = B.bind(A, this);

B(that) {
    that.fn(); // B 中的 that 就是 B.bind(A, this) 中的 this
    this.fun();
}
```

## call() apply() bind() 总结

**相同点**:

都可以改变函数内部的 this 指向

**区别点**:

1. call() 和 apply() 会调用函数，而 bind() 不会
2. call() 和 bind() 传递的是参数 arg1, arg2, ...，而 apply() 传递的参数是数组

**主要应用场景**:

1. call() 经常用作继承
2. apply() 经常和数组有关，比如借助数学对象实现找到数组的最大值和最小值
3. bind() 常常用来改变 this 指向，比如改变定时器内部 this 的指向

## 严格模式

JavaScript 除了正常模式之外，还提供严格模式，严格模式在 IE10+ 浏览器中才会被支持

严格模式对正常的 JavaScipt 做了一些更改：

**变量规定**

1. 在正常模式下，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先声明后使用
2. 严禁删除已经声明的变量

**this 指向**

1. **严格模式下全局作用域中的函数中的 this 是 undefined**
2. 严格模式下，构造函数不加 new 调用会报错
3. 其余 this 和普通模式一样

**函数变化**

1. 函数不能有重名的参数
2. 函数必须声明在顶层，不允许在非函数的代码块内声明函数

用法：

```html
<script>
"use strict";
...
</script>
```

```html
<script>
(function() {
    "use strict";
    ...
})();
</script>
```

```html
<script>
function fun1() {
    "use strict";
    ...
}
function fun2() {
    ...
}
</script>
```

## 不同绑定规则和优先级

* 默认绑定规则：也就是全局的属性和对象默认绑定到 window

* 隐式绑定规则：谁调用谁就绑定谁

* 显示绑定规则：call()、bind() 和 apply()

* new 绑定：谁 new 的 this 指向就指向谁

  ```javascript
  function Person () {
      this.name = 'zhangsan'
  }
  
  const p = new Person()
  console.log(p.name)  // ‘zhangsan’
  ```

这四种绑定规则的优先级从低到高为：

**默认绑定 < 隐式绑定 < 显示绑定 ＜ new 绑定**

美团有一道面试题目，重点就是不同绑定方式：

```javascript
// 打印的值是
var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);
}, 0);
console.log(bar.name);
  
var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);

// 'foo', 因为 new 绑定优先级高于 bind 显示绑定
// 'foo2'
// 'global'
```
