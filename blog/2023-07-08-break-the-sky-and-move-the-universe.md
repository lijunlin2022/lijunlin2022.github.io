---
slug: break-the-sky-and-move-the-universe
title: 《斗破苍穹》和《武动乾坤》
authors:
  name: 李俊霖
  title: 经验是生活的肥料，有什么样的经验便变成什么样的人。
  url: https://github.com/lijunlin2022
  image_url: /img/logo.png
tags: [爬虫]
---

最近写了个半自动的爬虫，简单爬了一下截止 2023-07-09，《斗破苍穹》和《武动乾坤》贴吧第一页的帖子。得到了一些有趣的结论：

1. 《武动乾坤》的讨论度比《斗破苍穹》高。从发帖人来看，《武动乾坤》发帖人正常昵称较多，而《斗破苍穹》发帖人昵称则大多是"贴吧用户_xxx"；从回帖人来看，《武动乾坤》吧新发的帖子，大部分都有人回复，而《斗破苍穹》吧新发的发帖，大部分都没人回复。
2. 《斗破苍穹》吧目前谈论度最高的话题，是 "三上云岚宗"，应该是因为最近动画要播到这个事件了。
3. 《武动乾坤》吧目前讨论度最高的话题，是林动和绫清竹，应该是因为最近天蚕土豆的公众号，推荐了绫清竹的图片。

**爬虫代码**

```python
import re
import csv

with open('index.html', 'r', encoding = 'utf-8') as f:
  source = f.read()

posts = re.findall('j_thread_list clearfix thread_item_box"(.*?)</li>',
  source,
  re.S
)

list = []

for post in posts:
  item = {}
  title_list = re.findall('class="j_th_tit ">(.*?)</a>', post, re.S)
  author_list = re.findall('"主题作者: (.*?)"', post, re.S)
  replyer_list = re.findall('最后回复人: (.*?)"', post, re.S)
  time_list = re.findall('"最后回复时间">(.*?)</span>', post, re.S)

  title = title_list[0] if len(title_list) > 0 else 'N/A'
  author = author_list[0] if len(author_list) > 0 else 'N/A'
  last_replyer = replyer_list[0] if len(replyer_list) > 0 else 'N/A'
  last_time = time_list[0] if len(time_list) > 0 else 'N/A'

  item['title'] = title.strip()
  item['author'] = author.strip()
  item['last_replyer'] = last_replyer.strip()
  item['last_time'] = last_time.strip()

  list.append(item)

with open('tieba.csv', 'w', encoding = 'utf-8') as f:
  writer = csv.DictWriter(f, fieldnames = [
    'title',
    'author',
    'last_replyer',
    'last_time'
  ])
  writer.writeheader()
  writer.writerows(list)
```
