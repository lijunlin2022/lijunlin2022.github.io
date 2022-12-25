const { getNavbarItemLink } = require('./getNavbarItemLink')
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
            link: getNavbarItemLink('../blog/basic-javascript-knowledge/fragment/')
          },
          {
            text: '微信小程序',
            link: getNavbarItemLink('../blog/wechat-mini-program/')
          },
          {
            text: 'Vue',
            link: getNavbarItemLink('../blog/vue/')
          },
          {
            text: 'React',
            link: getNavbarItemLink('../blog/react/')
          },
          {
            text: 'React Native',
            link: getNavbarItemLink('../blog/react-native/')
          },
          {
            text: 'Node',
            link: getNavbarItemLink('../blog/node/')
          },
          {
            text: 'VitePress',
            link: getNavbarItemLink('../blog/vitepress/')
          },
          {
            text: '计算机基础知识',
            link: getNavbarItemLink('../blog/basic-computer-knowledge/code/')
          }
        ].filter(v => v.link !== null)
      },
      {
        text: 'Experience',
        items: [
          {
            text: 'Work',
            link: getNavbarItemLink('../experience/work/')
          },
          {
            text: 'Life',
            link: getNavbarItemLink('../experience/life/')
          }
        ].filter(v => v.link !== null)
      },
      {
        text: "Don't Starve",
        link: getNavbarItemLink('../do-not-starve/')
      }
    ],
    sidebar: {
      '/blog/basic-javascript-knowledge/': [
        {
          text: '碎片的 JavaScript 知识',
          collapsible: true,
          items: getSidebarItems('../blog/basic-javascript-knowledge/fragment/')
        },
        {
          text: 'Underscore 源码解析',
          collapsible: true,
          items: getSidebarItems('../blog/basic-javascript-knowledge/underscore/')
        },
      ],
      '/blog/wechat-mini-program/': [{
        text: '微信小程序',
        collapsible: true,
        items: getSidebarItems('../blog/wechat-mini-program/')
      }],
      '/blog/vue/': [{
        text: 'Vue',
        collapsible: true,
        items: getSidebarItems('../blog/vue/')
      }],
      '/blog/react/': [{
        text: 'React',
        collapsible: true,
        items: getSidebarItems('../blog/react/')
      }],
      '/blog/react-native/': [{
        text: 'React Native',
        collapsible: true,
        items: getSidebarItems('../blog/react-native/')
      }],
      '/blog/node/': [{
        text: 'Node',
        collapsible: true,
        items: getSidebarItems('../blog/node/')
      }],
      '/blog/vitepress/': [{
        text: 'VitePress',
        collapsible: true,
        items: getSidebarItems('../blog/vitepress/')
      }],
      '/experience/work/': [{
        text: 'Work',
        collapsible: true,
        items: getSidebarItems('../experience/work/')
      }],
      '/experience/life/': [{
        text: 'Life',
        collapsible: true,
        items: getSidebarItems('../experience/life/')
      }],
      '/do-not-starve/': [{
        text: '饥荒',
        collapsible: true,
        items: getSidebarItems('../do-not-starve/')
      }],
      '/blog/basic-computer-knowledge/': [{
        text: '计算机基础知识',
        collapsible: true,
        items: getSidebarItems('../blog/basic-computer-knowledge/code/')
      }]
    }
  }
}
