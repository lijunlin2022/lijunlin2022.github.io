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
        link: '/blog/basic-knowledge-of-javascript/'
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
      '/meditation/': [{
        text: '英文随笔',
        items: getSidebarItems('../meditation/')
      }]
    }
  }
}
