const { getSidebarItems } = require('./getSidebarItems')

export default {
  title: `LiJunlin's Blog`,
  titleTemplate: false,
  themeConfig: {
    siteTitle: `LiJunlin's Blog`,
    logo: '/clover.png',
    nav: [
      {
        text: 'Blog',
        items: [
          {
            text: 'JavaScript 基础知识',
            link: '/blog/basic-knowledge-of-javascript/'
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
            text: 'Underscore 源码解析',
            link: '/blog/underscore-source-code-analysis/'
          }
        ]
      },
      {
        text: 'Meditation',
        link: '/meditation/'
      }
    ],
    sidebar: {
      '/blog/basic-knowledge-of-javascript/': [{
        text: 'JavaScript 基础知识',
        items: getSidebarItems('../blog/basic-knowledge-of-javascript/')
      }],
      '/blog/wechat-mini-program/': [{
        text: '微信小程序',
        items: getSidebarItems('../blog/wechat-mini-program/')
      }],
      '/blog/vue/': [{
        text: 'Vue',
        items: getSidebarItems('../blog/vue/')
      }],
      '/blog/react': [{
        text: 'React',
        items: getSidebarItems('../blog/react/')
      }],
      '/blog/react-native/': [{
        text: 'React Native',
        items: getSidebarItems('../blog/react-native/')
      }],
      '/blog/underscore-source-code-analysis/': [{
        text: 'Underscore 源码解析',
        items: getSidebarItems('../blog/underscore-source-code-analysis/')
      }],
      '/blog/node/': [{
        text: 'Node',
        items: getSidebarItems('../blog/node/')
      }],
      '/meditation/': [{
        text: '英文随笔',
        items: getSidebarItems('../meditation/')
      }]
    }
  }
}
