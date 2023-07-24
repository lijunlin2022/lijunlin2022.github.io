---
slug: catch-5w-pigs
title: 三天内抓完五万头猪吗？
authors:
  name: 李俊霖
  title: 生活越丰富，心里越宽绰；写得勤了，就会有得心应手的那一天
  url: https://github.com/lijunlin2022
  image_url: https://avatars.githubusercontent.com/u/60834609?s=400&u=c1bc0d8c2e512d6fd391909c3f125fe8e517ab6b&v=4
tags: [python]
--- 

# 三天内抓完五万头猪吗？

## 抓猪猜想

![](./img/capture_5w_pigs1.png)
![](./img/capture_5w_pigs2.png)

《亮剑》中，楚云飞有一个猜想，「就是五万多头猪，共军抓三天也抓不完」，这就是「抓猪猜想」。

许多人尝试证明「抓猪猜想」，虽然没有给出完美的证明，但也留下了宝贵的探索经验。

## 宝贵的探索经验

2014 年，一位知乎用户，阐释了证明此问题的思路[^1]。

他认为，可以先算出三天内抓完五万头猪需要多少人，再对比计算结果和我军人数。如果我军人数少于计算结果，那么「抓猪猜想」是正确的，反之就是错误的。

我觉得这位知乎用户的思路很符合直觉。

2021 年，一位 B 站 UP 主，创造性地使用 Python 模拟，为解决问题带来了新工具[^2]。

他认为，可以先假设人有全图视角，会沿最短的路径抓猪；猪没有全图视角，只能随机移动。通过模拟，算出一千人抓五千头猪需要多少时间，就可以大致估算出一万人抓五万头猪需要多少时间。

我觉得这位 B 站 UP 主的工具很好用，但是假设不符合常理。人类虽然聪慧，但不可能知道所有猪的位置；猪虽然蠢笨，但是见到抓自己的人肯定会跑。

## 我的假设与方法

现在我提出四条规则。

1. 人和猪都有观察范围，人的观察范围大于猪。
2. 人和猪都有速度，人的速度低于猪。（目前不考虑人开着汽车，骑着摩托等情况）。
3. 人的力气比猪小，需要几个人才能抓住一头猪。
4. 人如果观察到猪，会靠近猪；如果观察不到，则会按照指令往固定方向走；猪观察到人时，会远离人；如果观察不到，则会随机移动。

以这四条规则为基础，我想到的抓猪方法是：

人排成人墙，像梳子一样，从地图左边一路梳到右边，将猪逼到地图边缘，先抓住一部分的猪；接下来，人又排成人墙，从地图左边梳到左边，又抓住一部分的猪。如此循环往复，直到地图上的猪全部被抓完。

好了，理论分析完毕，现在开始写代码进行实验。

## pygame 绘制地图，人和猪

我们先假定地图宽 800，长 600，人用红点来表示，猪则用绿点来表示。

```python
import pygame

width, height = 800, 600
screen = pygame.display.set_mode((width, height))

RED = (255, 0, 0)
GREEN = (0, 255, 0)

human_position = (400, 300)
pig_position = (200, 400)

running = True
while running:
    # event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Clear the screen
    screen.fill((0, 0, 0))

    # Draw the human dot
    pygame.draw.circle(screen, RED, human_position, 5)

    # Draw the pig dot
    pygame.draw.circle(screen, GREEN, pig_position, 5)

    # Update the display
    pygame.display.flip()
```

## 编写人类和猪的行为逻辑

我们

[^1]: [抓五万头猪需要多少时间？- 知乎](https://www.zhihu.com/question/27227180)
[^2]: [【python模拟】三天内能抓完五万头猪吗？ - BiliBili](https://www.bilibili.com/video/BV1FV411E7Ea/)