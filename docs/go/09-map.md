# map

## 定义

```go
func main() {
  m1 := make(map[string]int) // 创建一个空 map
  fmt.Println(m1)            // map[]

  m2 := make(map[string]int, 2) // 创建一个容量为 2 的 map
  fmt.Println(m2)               // map[]

  m3 := map[string]int{ // 使用字面量创建 map
    "apple":  6,
    "banana": 4,
    "orange": 3,
  }
  fmt.Println(m3) // map[apple:6 banana:4 orange:3]
}
```

## 增、删、查、改

```go
func main() {
  m := map[string]string{
    "甲": "A",
    "乙": "B",
  }

  m["丙"] = "C" // 增加
  fmt.Println(m)

  delete(m, "乙") // 删除
  fmt.Println(m)

  v1, ok1 := m["甲"] // 查找，如果键不存在，ok 的值为 false，v 的值为该类型的零值
  fmt.Println(v1, ok1)
  v2, ok2 := m["乙"]
  fmt.Println(v2, ok2)

  m["甲"] = "1" // 修改
  fmt.Println(m)
}
```

## 遍历

```go
func main() {
  m := map[string]string{
    "甲": "A",
    "乙": "B",
    "丙": "C",
  }

  for k, v := range m {
    fmt.Printf("key=%s, v=%s\n", k, v)
  }
}
```
