# 创建 Button

```objc
- (void)viewDidLoad {
    [super viewDidLoad];
    printf("Hello world\n");
    [self createButton];
}

- (void)createButton {
    printf("Create Button\n");
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    button.frame = CGRectMake(100, 100, 200, 40);
    button.layer.borderWidth = 1;
    [button setTitle:@"按钮" forState:UIControlStateNormal];
    [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(clickButton) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)clickButton {
    printf("Click Button\n");
}
```
