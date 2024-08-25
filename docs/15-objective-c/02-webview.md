# 创建 Webview

```objc title="ViewController.h"
#import <UIKit/UIKit.h>
#import "WebKit/WebKit.h"

@interface ViewController : UIViewController;
@property (strong, nonatomic) WKWebView *_webview;

@end
```

```objc title="ViewController.m"
#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    printf("Hello world\n");
    [self initWebview];
}

- (void)initWebview {
    [self createWebview];
    [self loadBaidu];
}

- (void)createWebview {
    printf("Create WebView\n");
    WKWebViewConfiguration *webviewConfig = [[WKWebViewConfiguration alloc] init];
    
    CGRect positionInfo = CGRectMake(10, 200, 300, 400);
    self._webview = [[WKWebView alloc] initWithFrame:positionInfo configuration:webviewConfig];
    self._webview.layer.borderWidth = 1;
    self._webview.layer.borderColor = [UIColor blackColor].CGColor;
    [self.view addSubview:self._webview];
}

- (void)loadBaidu {
    printf("Load Baidu\n");
    NSURL *url = [NSURL URLWithString:@"https://baidu.com"];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    [self._webview loadRequest:request];
}

@end
```
