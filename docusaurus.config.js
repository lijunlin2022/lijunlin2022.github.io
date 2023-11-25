import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: "李俊霖的网络日志",
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
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        {
          to: "/blog",
          label: "博客",
          position: "left",
        },
        {
          to: "/life/orthodontic",
          label: "生活",
          position: "left",
          activeBaseRegex: `/life/`,
        },
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
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "life",
        path: "life",
        routeBasePath: "life",
        sidebarPath: require.resolve("./sidebars-of-life.js"),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "novel",
        path: "novel",
        routeBasePath: "novel",
        sidebarPath: require.resolve("./sidebars-of-novel.js"),
      }),
    ],
  ],
};
