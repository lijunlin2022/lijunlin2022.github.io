# Webview 向 Native 发送消息

```objc title="ViewController.h"
@interface ViewController : UIViewController<WKScriptMessageHandler>;
```

```objc title="ViewController.m"
- (void)createWebview {
    printf("Create WebView\n");
    WKWebViewConfiguration *webviewConfig = [[WKWebViewConfiguration alloc] init];
    [webviewConfig.userContentController addScriptMessageHandler:self name:@"JSBridge"];
    
    CGRect positionInfo = CGRectMake(10, 200, 300, 400);
    self._webview = [[WKWebView alloc] initWithFrame:positionInfo configuration:webviewConfig];
    self._webview.layer.borderWidth = 1;
    self._webview.layer.borderColor = [UIColor blackColor].CGColor;
    [self.view addSubview:self._webview];
}

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    if ([message.name isEqualToString:@"JSBridge"]) {
        NSString *body = message.body;
        printf("原生层接收到消息:%s\n", [body UTF8String]);
    }
}
```

```html title="pageFrame.html"
<body>
  <div>我是本地的 HTML</div>
  <div id="native-msg"></div>
  <button id="send-to-native">给 native 发送消息</button>
  <script>
    window.receiveNativeMessage = function (msg) {
      const nativeMsg = document.getElementById('native-msg')
      nativeMsg.innerHTML = msg
    }
      
    const sendMsgEl = document.getElementById('send-to-native')
    sendMsgEl.onclick = function (msg) {
      window.webkit.messageHandlers.JSBridge.postMessage('我是来自 Webview 的消息')
    }
  </script>
</body>
```
