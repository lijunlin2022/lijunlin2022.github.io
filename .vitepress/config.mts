import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  head: [
    [
      'meta', {
        name: 'google-site-verification', content: 'z1w9iBabIBZmBrBiQPn3K-e8msiNRO_hR9O3oWhdcok'
      }
    ]
  ],
  title: "小霖家的混江龙",
  description: "我是一个前端程序员，擅长 H5 和小程序开发",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/2023/07/30/' }
    ],
    sidebar: {
      '/blog/': [
        {
          text: '2024',
          items: [
            { text: '取余和取模如何区分与应用?', link: '/blog/2024/01/18/' },
            { text: 'H5 离线包放入 HTML 后降级方案如何设计?', link: '/blog/2024/01/27/' },
            { text: 'H5、小程序商品加入购物车的抛物线动画如何实现?', link: '/blog/2024/02/03/' },
            { text: 'H5 蛟龙闹海动画如何实现（不引用图片）?', link: '/blog/2024/02/09/' },
            { text: 'H5、小程序高度变化的轮播图如何实现?', link: '/blog/2024/02/16/' },
            { text: 'H5、小程序中四个反向圆角的图片如何实现?', link: '/blog/2024/02/19/' },
            { text: 'H5 下拉刷新如何实现?', link: '/blog/2024/02/28/' },
            { text: 'H5 上滑加载（触底加载）如何实现?', link: '/blog/2024/03/02/' },
            { text: '百亿补贴为什么用 H5? H5 未来会如何发展?', link: '/blog/2024/03/03/' },
            { text: 'H5、小程序能用 webp 图片吗? 如何判断环境是否支持?', link: '/blog/2024/03/10/' },
            { text: '仿百亿补贴, H5 中图片先模糊后清晰的效果如何实现?', link: '/blog/2024/03/23/' },
            { text: '对比小红书与电商三巨头的瀑布流, H5 瀑布流实现方案应该如何选择?', link: '/blog/2024/04/08/' },
            { text: '仿拼多多现金大转盘, H5 抽奖转盘如何实现?', link: '/blog/2024/04/17/' },
            { text: '仿物美超市, H5 列表滚动回弹效果如何实现?', link: '/blog/2024/05/07/' },
            { text: '仿微信读书, H5 翻转卡片如何实现?', link: '/blog/2024/05/17/' },
            { text: '仿今日头条, H5 循环播放的通知栏如何实现?', link: '/blog/2024/05/26/' },
            { text: '从拼多多分享商品说起, canvas 绘图如何实现 contain 和 cover 效果?', link: '/blog/2024/07/11/' },
            { text: '从商品海报说起, canvas 文本如何实现溢出截断、溢出显示省略号和自动换行?', link: '/blog/2024/07/15/' },
            { text: '仿拼多多领红包、金额数字移动如何实现?', link: '/blog/2024/10/27/' },
            { text: '对比静态替换和动态插入标签, Vite 打包 H5 注入版本号哪种方式更优雅?', link: '/blog/2024/10/29/' },
            { text: 'H5 更早发出的请求、更晚被响应，应该怎么办？—— 请求竞态问题', link: '/blog/2024/11/06/' },
            { text: '如何结合 Vite 和 Rust, 在 Vue/React 中运行 WebAssembly 模块?', link: '/blog/2024/11/16/' },
            { text: '小程序如何检测无流量组件? 分享一种打点检测方法', link: '/blog/2024/12/04/' },
            { text: '介绍小程序套小程序的三种方案, 最后一种也许只有大厂才用', link: '/blog/2024/12/14' }
          ]
        },
        {
          text: '2023',
          items: [
            { text: 'H5、小程序 Tab 如何滚动居中？', link: '/blog/2023/07/30/' },
            { text: 'H5 不复制元素的循环轮播图如何实现？——取模', link: '/blog/2023/12/14/' },
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lijunlin2022' }
    ]
  }
})
