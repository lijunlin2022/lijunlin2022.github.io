"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9722"],{90475:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(85893),s=r(50065),i=r(95895);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"简单网页爬虫",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简单网页爬虫",children:"#"}),"简单网页爬虫"]}),"\n",(0,t.jsx)(i.Z,{defaultLocale:"zh-CN"}),"\n",(0,t.jsx)(n.p,{children:"爬虫的数据爬取量非常大，显然不可能对每个页面都手动复制源代码，因此就有必要使用自动化的方式来获取网页源代码。requests 是 Python 的一个第三方 HTTP（Hypertext Transfer Protocol，超文本传输协议）库，它比 Python 自带的网络库 urllib 更加简单、方便和人性化。使用 requests 可以让Python实现访问网页并获取源代码的功能。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{meta:"",children:"pip install requests\n"})}),"\n",(0,t.jsx)(n.p,{children:"如果系统同时有 Python 2 和 Python 3，并且 Python 3 是后安装的，那么要为  Python 3安装第三方库，就需要使用如下命令:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{meta:"",children:"pip3 install requests\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"使用-requests-获取网页源代码",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-requests-获取网页源代码",children:"#"}),"使用 requests 获取网页源代码"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"import requests\r\n\r\nhtml = requests.get('网址')\r\nhtml_bytes = html.content # 使用 .content 这个属性来显示 bytes 型网页的源代码\r\nhtml_str = html_bytes.decode() # 将 bytes 型的网页源代码解码为字符串型的源代码\n"})}),"\n",(0,t.jsx)(n.p,{children:"有时需要使用 requests 的 post() 方法来获取源代码。post() 方法的格式如下："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"import requests\r\n\r\ndata = {\r\n  'key1': 'value1',\r\n  'key2': 'value2'\r\n}\r\nhtml_formdata = requests.post('网址', data=data).content.decode() # 用 formdata 提交数据\n"})}),"\n",(0,t.jsx)(n.p,{children:"其中，data 这个字典的内容和项数需要根据实际情况修改，Key 和 Value在不同的网站是不一样的。而做爬虫，构造这个字典是任务之一。还有一些网址，提交的内容需要是 JSON 格式的，因此 post() 方法的参数需要进行一些修改："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"html_json = requests.post('网址', json = data).content.decode() # 使用 JSON 提交数据\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"多线程爬虫",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#多线程爬虫",children:"#"}),"多线程爬虫"]}),"\n",(0,t.jsx)(n.p,{children:"在掌握了 requests 与正则表达式以后，就可以开始实战爬取一些简单的网址了。但是，此时的爬虫只有一个进程、一个线程，因此称为单线程爬虫。单线程爬虫每次只访问一个页面，不能充分利用计算机的网络带宽。一个页面最多也就几百KB，所以爬虫在爬取一个页面的时候，多出来的网速和从发起请求到得到源代码中间的时间都被浪费了。"}),"\n",(0,t.jsx)(n.p,{children:"如果可以让爬虫同时访问 10 个页面，就相当于爬取速度提高了 10 倍。为了达到这个目的，就需要使用多线程技术了。这里有一点要强调，Python 这门语言在设计的时候，有一个全局解释器锁（Global Interpreter Lock, GIL）。这导致 Python 的多线程都是伪多线程，即本质上还是一个线程，但是这个线程每个事情只做几毫秒，几毫秒以后就保存现场，换做其他事情，几毫秒后再做其他事情，一轮之后回到第一件事上，恢复现场再做几毫秒，继续换……微观上的单线程，在宏观上就像同时在做几件事。"}),"\n",(0,t.jsx)(n.p,{children:"这种机制在 I/O（Input/Output，输入/输出）密集型的操作上影响不大，但是在 CPU 计算密集型的操作上面，由于只能使用 CPU 的一个核，就会对性能产生非常大的影响。所以涉及计算密集型的程序，就需要使用多进程，Python 的多进程不受 GIL 的影响。"}),"\n",(0,t.jsx)(n.p,{children:"爬虫属于 I/O 密集型的程序，所以使用多线程可以大大提高爬取效率。"}),"\n",(0,t.jsxs)(n.h3,{id:"多进程库",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#多进程库",children:"#"}),"多进程库"]}),"\n",(0,t.jsx)(n.p,{children:"multiprocessing 本身是 Python 的多进程库，用来处理与多进程相关的操作。但是由于进程与进程之间不能直接共享内存和堆栈资源，而且启动新的进程开销也比线程大得多，因此使用多线程来爬取比使用多进程有更多的优势。multiprocessing 下面有一个 dummy 模块，它可以让 Python 的线程使用multiprocessing 的各种方法。"}),"\n",(0,t.jsx)(n.p,{children:"dummy 下面有一个 Pool 类，它用来实现线程池。这个线程池有一个 map() 方法，可以让线程池里面的所有线程都“同时”执行一个函数。"}),"\n",(0,t.jsx)(n.p,{children:"例如计算 0～9的每个数的平方。在学习了 for 循环之后，代码可能会写成这样："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"for i in range(10):\r\n  print(i * i)\n"})}),"\n",(0,t.jsx)(n.p,{children:"这种写法当然可以得到结果，但是代码是一个数一个数地计算，效率并不高。而如果使用多线程的技术，让代码同时计算很多个数的平方，就需要使用 multiprocessing.dummy 来实现："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"from multiprocessing.dummy import Pool\r\n\r\ndef calc_power2(num):\r\n  return num * num\r\n\r\npool = Pool(3)\r\norigin_num = [x for x in range(10)]\r\nresult = pool.map(calc_power2, origin_num)\r\n\r\nprint(f'计算 0-9 的平方分别为：{result}')\n"})}),"\n",(0,t.jsx)(n.p,{children:"在上面的代码中，先定义了一个函数用来计算平方，然后初始化了一个有 3 个线程的线程池。这 3 个线程负责计算 10 个数字的平方，谁先计算完手上的这个数，谁就先取下一个数继续计算，直到把所有的数字都计算完成为止。"}),"\n",(0,t.jsx)(n.p,{children:"在这个例子中，线程池的 map() 方法接收两个参数，第 1 个参数是函数名，第 2 个参数是一个列表。注意：第 1 个参数仅仅是函数的名字，是不能带括号的。第 2 个参数是一个可迭代的对象，这个可迭代对象里面的每一个元素都会被函数 clac_power2() 接收来作为参数。除了列表以外，元组、集合或者字典都可以作为 map() 的第 2 个参数。"}),"\n",(0,t.jsx)(n.p,{children:"需要注意的是，这个例子仅仅用来演示多线程的使用方法。由于这个例子不涉及 I/O 操作，所以在 Python GIL 的影响下，使用 3 个线程并不会使代码的运行时间小于单线程的运行时间。"}),"\n",(0,t.jsxs)(n.h3,{id:"开发多线程爬虫",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发多线程爬虫",children:"#"}),"开发多线程爬虫"]}),"\n",(0,t.jsx)(n.p,{children:"由于爬虫是 I/O 密集型的操作，特别是在请求网页源代码的时候，如果使用单线程来开发，会浪费大量的时间来等待网页返回，所以把多线程技术应用到爬虫中，可以大大提高爬虫的运行效率。"}),"\n",(0,t.jsx)(n.p,{children:"举一个例子。洗衣机洗完衣服要 50min，水壶烧水要 15min，背单词要 1h。如果先等着洗衣机洗衣服，衣服洗完了再烧水，水烧开了再背单词，一共需要125min。但是如果换一种方式，从整体上看，3 件事情是可以同时运行的，假设你突然分身出另外两个人，其中一个人负责把衣服放进洗衣机并等待洗衣机洗完，另一个人负责烧水并等待水烧开，而你自己只需要背单词就可以了。等到水烧开，负责烧水的分身先消失。等到洗衣机洗完衣服，负责洗衣服的分身再消失。最后你自己本体背完单词。只需要 60min 就可以同时完成 3 件事。"}),"\n",(0,t.jsx)(n.p,{children:"当然，聪明的读者肯定会发现上面的例子并不是生活中的实际情况。现实中没有人会分身。真实生活中的情况是，人背单词的时候就专心背单词；水烧开后，水壶会发出响声提醒；衣服洗完了，洗衣机会发出“滴滴”的声音。所以到提醒的时候再去做相应的动作就好，没有必要每分钟都去检查。"}),"\n",(0,t.jsx)(n.p,{children:"上面的两种差异，其实就是多线程和事件驱动的异步模型的差异。本小节讲到的是多线程操作，后面的章节会讲到使用异步操作的爬虫框架。现在，读者只需要记住，在需要操作的动作数量不大的时候，这两种方式的性能没有什么区别，但是一旦动作的数量大量增长，多线程的效率提升就会下降，甚至比单线程还差。而到那个时候，只有异步操作才是解决问题的办法。"}),"\n",(0,t.jsx)(n.p,{children:"下面通过两段代码来对比单线程爬虫和多线程爬虫爬取百度首页的性能差异。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",meta:"",children:"import requests\r\nimport time\r\nfrom multiprocessing.dummy import Pool\r\n\r\ndef query(url):\r\n  requests.get(url)\r\n\r\nstart = time.time()\r\nfor i in range(100):\r\n  query('https://baidu.com')\r\nend = time.time()\r\nprint(f'单线程循环访问 100 次百度首页，耗时：{end - start}')\r\n\r\nstart = time.time()\r\nurl_list = []\r\nfor i in range(100):\r\n  url_list.append('https://baidu.com')\r\npool = Pool(5)\r\npool.map(query, url_list)\r\nend = time.time()\r\nprint(f'5 线程循环访问 100 次百度首页，耗时：{end - start}')\n"})}),"\n",(0,t.jsx)(n.p,{children:"从运行结果可以看到，一个线程用时约 16.2s, 5 个线程用时约 3.5s，时间 5 线程大于是单线程的五分之一。可以看到 5 个线程“同时运行”的效果。"}),"\n",(0,t.jsx)(n.p,{children:"但并不是说线程池设置得越大越好。从上面的结果也可以看到，5 个线程运行的时间其实比一个线程运行时间的五分之一要多一点。这多出来的一点其实就是线程切换的时间。这也从侧面反映了 Python 的多线程在微观上还是串行的。因此，如果线程池设置得过大，线程切换导致的开销可能会抵消多线程带来的性能提升。线程池的大小需要根据实际情况来确定，并没有确切的数据。"})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}let d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["docs%2Fpython%2F06-simple-web-crawler.md"]={toc:[{id:"使用-requests-获取网页源代码",text:"使用 requests 获取网页源代码",depth:2},{id:"多线程爬虫",text:"多线程爬虫",depth:2},{id:"多进程库",text:"多进程库",depth:3},{id:"开发多线程爬虫",text:"开发多线程爬虫",depth:3}],title:"简单网页爬虫",frontmatter:{}}},95895:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(85893),s=r(67294),i=r(45687);r(6175);let a={"zh-CN":e=>`预计阅读时间: ${e.minutes>=1?`${Math.ceil(e.minutes)} 分钟`:"小于 1 分钟"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function l(e,n,r){let t=Object.keys(a).includes(n)?n:r;return a[t](e)}let d=e=>{let{defaultLocale:n="en-US"}=e,r=(0,i.Vi)().page.readingTimeData,a=(0,i.Jr)(),d=(0,i.e7)(),[h,c]=(0,s.useState)(l(r,a,n));return(0,s.useEffect)(()=>{c(l(r,a,n))},[a,r]),(0,t.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:h})}}}]);