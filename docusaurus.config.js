// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '苍岚屿',
  tagline: '一方天地，自此入道',
  favicon: 'img/logo-title.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.geyino.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aklmed', // Usually your GitHub org/user name.
  projectName: 'aklmed.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AKLMED/aklmed.github.io/tree/main',
          showLastUpdateTime: true, 
          showLastUpdateAuthor: true,
        },
        blog: false,/*{
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        }, */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '源夕之境 - 苍岚屿',
    /*    logo: {
          alt: 'Logo',
          src: 'img/logo-2.png',
        }, */
        items: [
          {
            type: 'doc',
            docId: 'intro',      // 这里写你的 Markdown 文件开头的 id
            position: 'right',
            label: '快速开始',
          },
          {
            type: 'doc',
            docId: '/category/玩法百科', // 换成你玩法教程文章的真实 ID
            position: 'right',
            label: '玩法百科',
          },
          {
            type: 'doc',
            docId: '/category/疑难解答', // 换成你玩法教程文章的真实 ID
            position: 'right',
            label: '常见问题',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://qm.qq.com/q/OrZULZbRKO',
            label: 'QQ',
            position: 'right',
            className: 'navbar-qq-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/BFRlcXDsiY',
              },
            ],
          },
          {
            title: '帮助',
            items: [
              {
                label: 'Minecraft官网',
                to: 'https://www.minecraft.net',
              },
              {
                label: 'Minecraft教程',
                href: 'https://zh.minecraft.wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 源夕之境`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
