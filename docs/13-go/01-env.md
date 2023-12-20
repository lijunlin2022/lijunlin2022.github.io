# 配置环境

```bash
go version # 查看 go 的版本
```

```bash
go env -w GO111MODULE=on # 开启 go 模块功能
```

```bash
go env -w  GOPROXY=https://goproxy.cn,direct # 设置 CDN
```

```bash
go mod init hello-go # 生成 go module
```

```bash
go run hello.go # 运行 go 文件
```
