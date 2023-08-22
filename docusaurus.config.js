const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "李俊霖的网络日志",
  favicon: "img/favicon.ico",
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
        alt: "",
        src: "img/logo.png",
      },
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
          href: "https://github.com/lijunlin2022",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  themes: ["@docusaurus/theme-live-codeblock"],
};
