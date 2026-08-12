// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Programmeren & OOP',
  tagline: 'Cursus Programming Principles & Object-Oriented Programming',
  favicon: 'img/favicon.png',

  url: 'https://VincentVCAP.github.io',
  baseUrl: '/graduaat-csharp-programmeren/',

  organizationName: 'VincentVCAP',
  projectName: 'graduaat-csharp-programmeren',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['nl'],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Programmeren & OOP',
        logo: {
          alt: 'C# logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Cursus',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cursus',
            items: [
              { label: 'Semester 1', to: '/semester-1-programming-principles/h0-werken-met-visual-studio' },
              { label: 'Semester 2', to: '/semester-2-oop/h8-klassen-en-objecten' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AP Hogeschool`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'java'],
      },
    }),
};

module.exports = config;
