# 时间

```go
func main() {
  t := time.Now()
  fmt.Printf(
    "%04d-%02d-%02d %02d:%02d:%02d\n",
    t.Year(),
    t.Month(),
    t.Day(),
    t.Hour(),
    t.Minute(),
    t.Second(),
  ) // 2023-12-26 20:33:08
}
```
