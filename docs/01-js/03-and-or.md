# 逻辑与和逻辑或

## 逻辑与

逻辑与操作遵循如下真值表：

| 第一个操作数 | 第二个操作数 | 结果  |
| ------------ | ------------ | ----- |
| true         | true         | true  |
| true         | false        | false |
| false        | true         | false |
| false        | false        | false |

逻辑与操作符可用于任何类型的操作数，不限于布尔值。**如果有操作数不是布尔值**，**则逻辑与并不一定会返回布尔值**，而是遵循如下规则：

- 如果第一个操作数是对象，则返回第二个操作数
- 如果第二个操作数是对象，则只有第一个操作数求值为 true 才会返回该对象
- 如果两个操作数都是对象，则返回第二个操作数
- 如果有一个操作数是 null，则返回 null
- 如果有一个操作数是 `NaN`，则返回 `NaN`
- 如果有一个操作数是 undefined，则返回 undefined

**逻辑与操作符是一种短路运算符**，意思就是**如果第一个操作数决定了结果**，**那么就永远不会对第二个操作数求值**。

对于逻辑与来说，如果第一个操作数是 false，那么无论第二个操作数是什么值，结果也不可能等于 true。

举例如下：

```javascript
let found = true
let result = (found && someUndeclaredVariable)		// 这里会出错
console.log(result)		// 不会执行这一行

// 变量 found 的值是 true，逻辑与操作符会继续求值变量 someUndeclaredVariable
// 由于 someUndeclaredVariable 没有定义，不能对它应用逻辑与操作符，因此就报错了
```

```javascript
let found = false
let result = (found && someUndeclaredVariable)		// 不会出错
console.log(result)		// 会执行

// 即使 someUndeclaredVariable 没有定义，由于第一个操作数是 false，逻辑与操作符也不会对它求值
```

## 逻辑或

逻辑或遵循如下真值表：

| 第一个操作符 | 第二个操作符 | 结果  |
| ------------ | ------------ | ----- |
| true         | true         | true  |
| true         | false        | true  |
| false        | true         | true  |
| false        | false        | false |

与逻辑与类似，**如果有一个操作数不是布尔值**，**那么逻辑或也不一定返回布尔值**。它遵循如下规则：

- 如果第一个操作数是对象，则返回第一个操作数
- 如果第一个操作数求值为 false，则返回第二个操作数
- 如果两个操作数都是对象，则返回第一个操作数
- 如果两个操作数都是 null，则返回 null
- 如果两个操作数都是 `NaN`，则返回 `NaN`
- 如果两个操作数都是 undefined，则返回 undefined

同样与逻辑与类似，逻辑或操作数也具有短路的性质。只不过对于逻辑或而言，第一个操作数求值为 true，第二个操作数就不会被求值了。

```javascript
let found = true
let result = (found || someUndeclaredVariable)		// 不会出错
console.log(result)		// 会执行

// 即使 someUndeclaredVariable 没有定义，由于第一个操作数是 true，逻辑或操作符也不会对它求值
```

```javascript
let found = false
let result = (found || someUndeclaredVariable)		// 会出错
console.log(result)		// 不会执行

// 变量 found 的值是 false，逻辑或操作符会继续求值变量 someUndeclaredVariable
// 由于 someUndeclaredVariable 没有定义，不能对它应用逻辑或操作符，因此就报错了
```

**利用逻辑或的性质**，**可以避免给变量赋值 null 或 undefined**，例如：

```javascript
let myObject = preferredObject || backupObject
```

- `preferedObject` 包含首选的值
- `backupObject` 包含备用的值
- 如果 `preferedObject` 的值不是 null 或者 undefined，则它的值回赋给 `myObject`
- 如果 `preferedObject` 的值是 null 或者 undefined，则 `backupObject` 的值会赋给 `myObject`

## 参考资料

本节内容根据 《JavaScript 高级程序设计（第 4 版）》整理。
