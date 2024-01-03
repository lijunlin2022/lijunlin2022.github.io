import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: "李俊霖的网络日志",
  favicon: "img/logo.png",
  url: "https://lijunlin2022.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    // Google 网站验证
    metadata: [
      {
        name: "google-site-verification",
        content: "z1w9iBabIBZmBrBiQPn3K-e8msiNRO_hR9O3oWhdcok",
      },
    ],
    navbar: {
      title: "李俊霖的网络日志",
      logo: {
        src: 'img/logo.png'
      },
      items: [
        {
          to: "/blog",
          label: "技术博客",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "技术笔记",
        },
        {
          to: "/life",
          label: "生活",
          position: "left",
        },
        // {
        //   to: "/impression",
        //   label: "观后感",
        //   position: "left",
        // },
        // {
        //   to: "/resume",
        //   label: "简历",
        //   position: "left",
        // },
        {
          href: "https://github.com/lijunlin2022",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'impression',
        routeBasePath: 'impression',
        path: './impression',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'life',
        routeBasePath: 'life',
        path: './life',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'novel',
        routeBasePath: 'novel',
        path: './novel',
      },
    ],
  ],
};
