# Native 向 Webview 发送消息

```objc title="ViewController.m"
- (void)loadLocalHtml {
    NSString *path = [[NSBundle mainBundle] pathForResource:@"pageFrame" ofType:@"html"];
    NSURL *url = [NSURL fileURLWithPath:path];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    [self._webview loadRequest:request];
}
```

```objc title="ViewController.m"
- (void)clickButton {
    printf("Click Button\n");
    [self._webview evaluateJavaScript:@"receiveNativeMessage('我是来自 native 的消息')" completionHandler:nil];
}
```

```html title="pageFrame.html"
<body>
  <div>我是本地的 HTML</div>
  <div id="native-msg"></div>
  <script>
    window.receiveNativeMessage = function (msg) {
      const nativeMsg = document.getElementById('native-msg')
      nativeMsg.innerHTML = msg
    }
  </script>
</body>
```
