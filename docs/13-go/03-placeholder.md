# 字符串占位符

本文所提到的占位符，均可以到 go 官网查看: [https://pkg.go.dev/fmt](https://pkg.go.dev/fmt)

## 普通占位符

| 占位符 | 说明 |
| -- | -- |
| %v | 相应值的默认格式。 |
| %+v | 打印结构体时，会添加字段名 |
| %#v | 相应值的 go 语法表示 |
| %T | 相应值的类型的 go 语法表示 |
| %% | 字面上的百分号，并非值的占位符 |

```go
type Dog struct {
  name string
}

func main() {
  d := Dog{"旺财"}
  fmt.Printf("%v\n", d)  // {旺财}
  fmt.Printf("%+v\n", d) // {name:旺财}
  fmt.Printf("%#v\n", d) // main.Dog{name:"旺财"}
  fmt.Printf("%T\n", d)  // main.Dog
  fmt.Printf("%%\n")     // %
}
```

## 布尔占位符

| 占位符 | 说明 |
| -- | -- |
| %t | true 或者 false |

```go
func main() {
  b := false
  fmt.Printf("%t\n", b) // false
}
```

## 整数占位符

| 占位符 | 说明 |
| -- | -- |
| %b | 二进制表示 |
| %o | 八进制表示 |
| %d | 十进制表示 |
| %x | 十六进制表示，字母形式为小写 a-f |
| %X | 十六进制表示，字母形式为大写 A-F |
| %c | 相应 Unicode 码点所表示的字符 |
| %q | 单引号围绕的字符字面值，由 go 语法安全地转义 |
| %U | Unicode 格式：U+1234，等同于 “U+%04X” |

```go
func main() {
  fmt.Printf("%b\n", 15) // 1111
  fmt.Printf("%o\n", 15) // 17
  fmt.Printf("%d\n", 15) // 15
  fmt.Printf("%x\n", 15) // f
  fmt.Printf("%X\n", 15) // F
}
```

```go
func main() {
  fmt.Printf("%c\n", 0x4E2D) // 中
  fmt.Printf("%q\n", 0x4E2D) // '中'
  fmt.Printf("%U\n", 0x4E2D) // U+4E2D
}
```

| 占位符 | 说明 |
| -- | -- |
| %2d | 将整数格式化为十进制的形式，如果整数的位数不足 4 位，则在前面补空格，直到整数的位数为 2 位。 |
| %02d | 将整数格式化为十进制的形式，如果整数的位数不足 2位 ，则在前面补 0，直到整数的位数为 2 位。 |

```go
func main() {
  fmt.Printf("AB%2dCD\n", 5)  // AB 5CD
  fmt.Printf("AB%02dCD\n", 5) // AB05CD
}
```

## 浮点数和复数的组成部分（实部和虚部）

| 占位符 | 说明 |
| -- | -- |
| %b | 无小数部分，指数为二的幂的科学计数法，与 strconv.FormatFloat 的 'b' 转换格式一致。 |
| %e | 科学计数法，例如 -1234.456e+78 |
| %E | 科学计数法，例如 -1234.456E+78 |
| %f | 有小数点而无指数，例如 123.456 |
| %g | 根据情况选择 %e 或 %f 以产生更紧凑的（无末尾的0）输出 |
| %G | 根据情况选择 %E 或 %f 以产生更紧凑的（无末尾的0）输出 |

```go
func main() {
  fmt.Printf("%b\n", 1.2) // 5404319552844595p-52
  fmt.Printf("%e\n", 1.2) // 1.200000e+00
  fmt.Printf("%E\n", 1.2) // 1.200000E+00
  fmt.Printf("%f\n", 1.2) // 1.200000
  fmt.Printf("%g\n", 1.2) // 1.2
  fmt.Printf("%G\n", 1.2) // 1.2
}
```

## 字符串和字符切片

| 占位符 | 说明 |
| -- | -- |
| %s | 输出字符串 (string 类型或 []byte) |
| %q | 双引号围绕的字符串，由 go 语法安全地转义 |
| %x | 十六进制，小写字母，每字节两个字符 |
| %X | 十六进制，大写字母，每字节两个字符 |

```go
func main() {
  fmt.Printf("%s\n", "golang") // golang
  fmt.Printf("%q\n", "golang") // "golang"
  fmt.Printf("%x\n", "golang") // 676f6c616e67
  fmt.Printf("%X\n", "golang") // 676F6C616E67
}
```
