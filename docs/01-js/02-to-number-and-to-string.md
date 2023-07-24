# 转换数值和转换字符串

## 转换数值

有 3 个函数可以将非数值转换为数值，`Number()`, `parseInt()` 和 `parseFloat()`。

- `Number()` 是转型函数，可用于任何数据类型
- 后两个函数主要用于将字符串转换为数值
- **对于同样的参数, 这 3 个函数执行的操作也不同**

### `Number()` 函数

Number() 函数基于如下规则执行转换：

- 布尔值，true 转换为 1，false 转换为 0

- 数值，直接返回

- null，返回 0

- undefined，返回 NaN

- 字符串，应用以下规则：

  - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值（忽略前面的 0）

  ```javascript
  // 字符串包含整数
  console.log(Number("1"));      // 1
  console.log(Number("+123"));   // 123
  console.log(Number("-456"));   // -456
  console.log(Number("0789"));   // 789
  ```

  - 如果字符串包含有效的浮点值格式为 "1.1"，则会转换为相应的浮点数（忽略前面的 0）

  ```javascript
  // 字符串包含浮点数
  console.log(Number("1.1"));    // 1.1
  console.log(Number("+0.123")); // 0.123
  console.log(Number("-0.456")); // -0.456
  console.log(Number("00.789")); // 0.789
  ```

  - 如果字符串包含有效的十六进制，则会转换为与十六进制数值对应的十进制数值

  ```javascript
  // 字符串十六进制整数
  console.log(Number("0xf"));    // 15
  console.log(Number("+0xf"));   // NaN
  console.log(Number("-0xf"));   // NaN
  ```

  - 如果是空字符串以及空白字符串

  ```javascript
  console.log(Number(""));       // 0
  console.log(Number(" "));      // 0
  console.log(Number("12blue")); // NaN
  ```

  - 如果字符串包含除上述情况之上其他字符串，则返回 NaN

### parseInt() 函数

考虑了用 `Number()` 函数转换字符串时相对复杂且有点反常规，通常再需要得到整数时可以有限使用 `parseInt()` 函数

下面是三条与 Number 不一样的规则：

```javascript
console.log(parseInt("1234blue"));  // 1234
console.log(parseInt(""));          // NaN
console.log(parseInt("22.5"));      // 22
```

而 parseInt() 中可以有第二个参数：第二个参数代表进制：

```javascript
console.log(parseInt("10", 2));  // 2
console.log(parseInt("10", 8));  // 8
console.log(parseInt("10", 10)); // 10
console.log(parseInt("10", 16)); // 16
```

### parseFloat() 函数

- 16 进制数值始终会返回 0

```javascript
console.log(parseInt("1234blue"));  // 1234
console.log(parseInt("0xA"));       // 0
console.log(parseInt("22.5"));      // 22.5
console.log(parseInt("22.34.5"));   // 22.34
console.log(parseInt("0908.5"));    // 908.5
console.log(parseInt("3.125e7"));   // 31250000 
```

## 转换字符串

有 3 种方法可以将非字符串转换为字符串

- `toString()` 函数
- `String()` 函数
- `+` 操作符

### `toString()` 方法

数值，布尔值，对象和字符串都有 toString() 方法，null 的 undefined 没有：

```javascript
const num = 100;
const flag = true;
const obj = {
    A: 1,
    B: ["a", "b", "c"]
};
const str = "Hello World!";

// 下方的 "" 仅代表它打印出来的是字符串, 实际打印没有 ""
console.log(num.toString());    // "100"
console.log(flag.toString());   // "true"
console.log(obj.toString());    // "[object Object]"
console.log(str.toString());    // "Hello World!"
```

多数情况下，toString() 不接受任何参数，但在对数值调用时可以接收一个底数参数：

```javascript
let num = 10;
console.log(num.toString());    // "10"
console.log(num.toString(2));   // "1010"
console.log(num.toString(8));   // "12"
console.log(num.toString(10));  // "10"
console.log(num.toString(16));  // "a"
```

### `String()` 方法

String() 方法遵循如下规则：

- 如果值有 toString() 方法，则调用该方法（不传参数）并返回结果
- 如果值是 null，返回 ”null"
- 如果值是 undefined，返回 “undefined"

```javascript
const v1 = null;
let v2 = undefined;

console.log(String(v1));  // "null"
console.log(String(v2));  // "undefined"
```

### 加法运算符

执行加法运算时，只要有一个是字符串，就要运用如下规则：

- 如果两个操作符都是字符串，则第二个字符串拼接到第一个字符串后面
- 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再进行拼接
  - 有 toString() 方法就用 toString() 方法转换
  - 没有 toString() 方法就用 String() 方法转换

```javascript
console.log(5 + 5);           // 10
console.log(5 + "5");         // "55"
console.log("5" + null);      // "5null"
console.log(undefined + "5"); // "undefined5"

const obj = {
  A: 1,
  B: [1, 2, 3]
};
console.log(obj + "5");        // "[object Object]5"

let msg = "The sum of 5 and 10 is " + 5 + 10;
console.log(msg); // "the sum of 5 and 10 is 510"
```

> 用加号操作符给一个值加上一个空字符串 "" 可以将其转换为字符串
