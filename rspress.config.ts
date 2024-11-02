import { defineConfig } from 'rspress/config';
import type { RspressPlugin } from '@rspress/shared';

const blogPattern = /^\/blog\/(\d{4})-(\d{2})-(\d{2})-([a-zA-Z0-9_-]+)\/$/

function transformRoute(): RspressPlugin {
  return {
    // 插件名称
    name: 'plugin-routes',
    // 在构建之后执行的钩子
    async routeGenerated(routes, isProd) {
      routes.forEach((r, index) => {
        const match = r.routePath.match(blogPattern)
        console.log(r.routePath)
        if (match) {
          const [, year, month, day, remainingPart] = match
          const val =  `/blog/${year}/${month}/${day}/${remainingPart}`
          routes[index].routePath = val
        }
      })
    },
  };
}

export default defineConfig({
  title: '小霖家的混江龙',
  icon: '/img/logo.png',
  logo: '/img/logo.png',
  logoText: '小霖家的混江龙',
  // head: [
  //   {
  //     tag: 'meta',
  //     attrs: {
  //       name: 'google-site-verification',
  //       content: 'z1w9iBabIBZmBrBiQPn3K-e8msiNRO_hR9O3oWhdcok'
  //     }
  //   },
  // ],
  // head: [
  //   '<meta name="author" content="John Doe">'
  // ],
  root: 'docs',
  route: {
    cleanUrls: true,
  },
  plugins: [transformRoute()]
});