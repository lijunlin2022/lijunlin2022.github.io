# 垃圾回收

JavaScript 通过自动内存管理实现内存分配和限制资源回收，它的基本思路是：确定哪个变量不会再使用，然后释放它的内存。整个过程是周期性的，即**垃圾回收程序每隔一定时间就会自动运行**。

## 标记策略

为了跟踪哪个变量不会再使用，浏览器发展历史上用到过两种主要的标记策略：

* 标记清理
* 引用计数

### 标记清理

`标记清理`（mark-and-sweep）是 JavaScript 最常用的垃圾回收策略。

当变量进入上下文，比如在函数内部声明一个变量时，整个变量会被加上存在于上下文中的标记。而在上下文中的变量，逻辑上讲，永远不应该释放它们的内存，因为只要上下文中的代码还在运行，就有可能用到它们。

当变量离开山下问时，也会被加上离开的标记。

垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会去除掉所有在上下文中的变量，以及被在上下文中的变量引用的变量，留下待删除的变量。随后垃圾回收程序做一次**内存清理**，销毁带标记的所有值并回收它们的内存。

### 引用计数

`引用计数`（reference-counting）则相对不常用。

它的思路是：对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个值的引用数为 1。

* 如果同一个值又被赋给另一个变量，那么引用数加 1
* 如果保存该值的引用的变量被其他值给覆盖了，那么引用数减 1

当一个值的引用数为 0 时，就说明没办法再访问到这个值了，因此可以安全地回收内存。

垃圾回收机制下次运行时会自动释放引用数为 0 的值的内存。

**引用计数的问题**

引用计数可能出现**循环引用**的问题，如下所示：

```javascript
function problem () {
    let objA = new Object()
    let objB = new Object()
    
    objA.someOtherObj = objB
    objB.anotherObj = objA
}
```

* 如果使用标记清理策略，函数结束后，`objA` 和 `objB` 都会被回收
* 使用引用计数，它们的引用数都是 2，函数结束后不会被回收

由于引用计数的缺陷，Netscape 4.0 放弃引用计数而采用标记清理。

**IE8 和 IE 以前的问题**

IE8 以前，DOM 和 BOM 都是 C++ 实现的组件对象模型，它们还是使用引用计数来实现垃圾清理的。为此，当出现 JavaScript 原生对象和 DOM 或者 BOM 循环引用时，就会出现问题，如下所示

```javascript
let element = document.getElementById('some_element')
let myObj = new Object()
myObj.element = element
element.someObj = myObj
```

为此，我们需要讲变量设置为 `null` 切断原生 JavaScript 对象和 DOM 元素之间的连接

```javascript
myObj.element = null
element.someObj = null
```

**值得高兴的是**，**IE9 讲 DOM 和 BOM 改为了 JavaScript 对象**，**避免了这个问题**

## 性能

垃圾回收程序会周期性运行，如果内存中分配了很多变量，则可能造成性能损失。尤其在内存有限的移动设备上，垃圾回收有可能会明显拖慢渲染的速度和帧速率。

由于开发者并不知道什么时候会运行垃圾回收机制，因此最好的办法就是在写代码的时候要做到：**无论什么时候开始收集垃圾**，**都能让它尽快结束工作**。

和其他使用垃圾回收的编程环境不同，JavaScript 运行在一个内存管理和垃圾回收都很特殊的环境——**分配给浏览器的内存通常要比分配给大型桌面软件的要少很多**，分配给移动浏览器的就更少了。这更多出于安全的考虑，目的是避免大量 JavaScript 网页耗尽系统内存而导致操作系统崩溃。

## 性能优化

### 解除引用

如果数据不再必要，那么把它设置为 null，从而释放其引用，就叫**解除引用**。这个建议最适合全局变量和全局对象的属性。局部变量在超出作用域后会被自动解除引用。

如下所示：`globalPerson` 是一个全局变量，应该在不再需要时手动解除其引用，最后一行就是这么做的

```javascript
function createPerson(name) {
    let localPerson = new Object()
    localPerson.name = name
    return localPerson
}

let globalPerson = createPerson('Tom')

// 解除 globalPerson 对值的引用

globalPerson = null
```

### 通过 const 和 let 声明提升性能

这两个关键字不仅可以改善代码风格，还可以改进垃圾回收。

因为 const 和 let 都以块（而非函数）作为作用域，所以使用这两个关键字可能会更早地让垃圾回收程序介入。

### 隐藏类和删除操作

V8 引擎在将解释后的 JavaScript 代码变为为实际的机器码时会利用 “隐藏类”。如果代码非常注重性能，这一点非常重要。

下述代码会让 `a1` 和 `a2` 共享隐藏类：

```javascript
function Article () {
    this.title = 'Hello'
}

let a1 = new Article()
let a2 = new Article()
```

但如果添加：

```javascript
a2.author = 'Tom'
```

就会让两个 `Article` 对应不同的隐藏类。根据这种操作的频率和隐藏类的大小，这可能对性能产生明显的影响。

解决方案是：**避免动态添加属性**

```javascript
function Article (author) {
    this.title = 'Hello'
    this.author = author
}

let a1 = new Article()
let a2 = new Article('Tom')
```

此外：**使用 `delete` 关键字会导致无法共享隐藏类**

```javascript
function Article (author) {
    this.title = 'Hello'
    this.author = author
}

let a1 = new Article()
let a2 = new Article('Tom')

delete a2.author
```

解决方案是：**避免动态删除属性**

```javascript
a2.author = null
```

**总结**，为了性能更好，我们应该：

* 避免动态添加属性、避免动态删除属性

### 内存泄漏

在内存有限的设备上，内存泄漏是一个大问题，JavaScript 中的内存写偶偶大部分是由不合理的引用导致的。

* 意外声明全局变量——最常见也最容易修复的问题

  ```javascript
  function setName () {
      name = 'Tom'
  }
  ```

  此时会把 name 当作 window 的属性创建，这种情况下只需要使用 `var`、`const` 和 `let` 即可

* 定时器也可能悄悄地造成内存泄漏

  ```javascript
  let name = 'Jake'
  setInterval(() => {
      return function() {
          return name
      }
  })
  ```

  只要定时器一直运行，回调函数中的 name 就会一直占用内存。所以定时器我们需要及时清除

* 使用 JavaScript 闭包很可能会在不知不觉间造成内存泄漏

  ```javascript
  let outer = function () {
      let name = 'Tom'
      return function() {
          return name
      }
  }
  ```

  调用 outer 就会导致分配给 name 的内存被泄漏

  因为只要返回的函数还存在，没有被调用，就会导致垃圾清理程序一直不能清理 name，假如 name 的内容很大，那可能就是大问题

### 静态分配与对象池

浏览器决定何时运行垃圾回收程序的一个标准是对象更替的速度。如果有很多对象被初始化，然后又都超出了作用域，俺么浏览器就会采用更激进的办法调度垃圾回收程序。

因此，一个办法就是不要动态创建对象，而使用已有的对象。这种办法中的一个策略就是**对象池**。

 在初始化的某一刻，创建一个对象池，用来管理一组可回收的对象，应用程序可以次昂这个对象池请求一个对象、设置器属性、使用它，然后在操作完成后再把它还给对象池。由于没发生对象的初始化，垃圾回收探测就不会发现有对象更替。

> **注意**：静态分配时优化的一种极端形式。如果你的应用程序被垃圾回收严重地拖了后腿，可以利用它提升性能。但是这种情况并不多见。大多数情况下，这都属于过早优化，因此不用考虑。

## 参考资料

本节内容根据 《JavaScript 高级程序设计（第 4 版）》整理。
