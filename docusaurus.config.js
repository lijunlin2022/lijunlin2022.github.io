import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: "小霖家的混江龙",
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
          blogSidebarCount: "ALL",
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
      title: "小霖家的混江龙",
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
        // {
        //   to: '/reader-runner/dev-log/index',
        //   sidebarId: "readerRunnerSidebar",
        //   position: "left",
        //   label: "伴读伴跑"
        // },
        {
          href: "https://github.com/lijunlin2022",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "readerRunnerSidebar",
        path: 'reader-runner',
        routeBasePath: 'reader-runner',
        sidebarPath: './sidebars-reader-runner.js',
      },
    ],
  ],
};
