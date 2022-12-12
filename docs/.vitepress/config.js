const { getSidebarItems } = require('./getSidebarItems')

export default {
  title: `LiJunlin's Blog`,
  titleTemplate: false,
  lastUpdated: true,
  themeConfig: {
    siteTitle: `LiJunlin's Blog`,
    logo: '/clover.png',
    nav: [
      {
        text: 'Blog',
        items: [
          {
            text: 'JavaScript 基础知识',
            link: '/blog/basic-javascript-knowledge/'
          },
          {
            text: '微信小程序',
            link: '/blog/wechat-mini-program/'
          },
          {
            text: 'Vue',
            link: '/blog/vue/'
          },
          {
            text: 'React',
            link: '/blog/react/'
          },
          {
            text: 'React Native',
            link: '/blog/react-native/'
          },
          {
            text: 'Node',
            link: '/blog/node/'
          },
          {
            text: 'VitePress',
            link: '/blog/vitepress/'
          },
          {
            text: '计算机基础知识',
            link: '/blog/basic-computer-knowledge/'
          }
        ]
      },
      {
        text: 'Experience',
        items: [
          {
            text: 'Work',
            link: '/experience/work/'
          },
          {
            text: 'Life',
            link: '/experience/life/'
          }
        ]
      },
      {
        text: 'Meditation',
        link: '/meditation/'
      }
    ],
    sidebar: {
      '/blog/basic-javascript-knowledge/': [
        {
          text: '碎片的 JavaScript 知识',
          items: getSidebarItems('../blog/basic-javascript-knowledge/fragment/')
        },
        {
          text: 'Underscore 源码解析',
          items: getSidebarItems('../blog/basic-javascript-knowledge/underscore/')
        },
      ],
      '/blog/wechat-mini-program/': [{
        text: '微信小程序',
        items: getSidebarItems('../blog/wechat-mini-program/')
      }],
      '/blog/vue/': [{
        text: 'Vue',
        items: getSidebarItems('../blog/vue/')
      }],
      '/blog/react/': [{
        text: 'React',
        items: getSidebarItems('../blog/react/')
      }],
      '/blog/react-native/': [{
        text: 'React Native',
        items: getSidebarItems('../blog/react-native/')
      }],
      '/blog/node/': [{
        text: 'Node',
        items: getSidebarItems('../blog/node/')
      }],
      '/blog/vitepress': [{
        text: 'VitePress',
        items: getSidebarItems('../blog/vitepress/')
      }],
      '/experience/work/': [{
        text: 'Work',
        items: getSidebarItems('../experience/work/')
      }],
      '/experience/life/': [{
        text: 'Life',
        items: getSidebarItems('../experience/life/')
      }],
      '/meditation/': [{
        text: '英文随笔',
        items: getSidebarItems('../meditation/')
      }],
      '/blog/basic-computer-knowledge/': [{
        text: '计算机基础知识',
        items: getSidebarItems('../blog/basic-computer-knowledge/code/')
      }]
    }
  }
}
