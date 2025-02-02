import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
    },
  ],
  lang: 'zh',
  builderConfig: {
    source: {
      alias: {
        '@components': './src/components',
      },
    },
  },
  title: '小霖家的混江龙',
  icon: '/img/logo.png',
  logo: '/img/logo.png',
  logoText: '小霖家的混江龙',
  root: 'docs',
  route: {
    cleanUrls: true,
  },
  plugins: [mermaid()]
});