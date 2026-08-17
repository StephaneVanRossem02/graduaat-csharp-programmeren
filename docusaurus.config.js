// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Programmeren & OOP',
  tagline: 'Cursus Programming Principles & Object-Oriented Programming',
  favicon: 'img/favicon.png',

  // Wie de site publiceert wordt uit de omgeving gehaald, zodat een fork vanzelf naar
  // zijn eigen GitHub Pages verwijst in plaats van naar die van de hoofdrepo.
  // GITHUB_REPOSITORY_OWNER zet GitHub Actions zelf; lokaal valt alles terug op VincentVCAP.
  url: `https://${(process.env.GITHUB_REPOSITORY_OWNER || 'VincentVCAP').toLowerCase()}.github.io`,
  baseUrl: '/graduaat-csharp-programmeren/',

  organizationName: process.env.GITHUB_REPOSITORY_OWNER || 'VincentVCAP',
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

  customFields: {
    // Overschrijft de standaardwaarden van de oefening-assistent (zie
    // src/components/OefeningAssistent/config.js).
    oefeningAssistent: {
      // Adres van de Cloudflare Worker die de referentie-oplossing aan de prompt
      // toevoegt. Volgorde: een expliciete env-var wint altijd; anders krijgt enkel
      // de test-fork (StephaneVanRossem02) de gedeployede Worker, en blijft de
      // hoofdsite (Vincent) zonder Worker draaien (null). Op localhost heeft de
      // localStorage-override nog voorrang.
      workerUrl:
        process.env.OEFENING_ASSISTENT_WORKER_URL ||
        ((process.env.GITHUB_REPOSITORY_OWNER || '').toLowerCase() === 'stephanevanrossem02'
          ? 'https://oefening-assistent.stephanevanrossem2.workers.dev'
          : null),
    },
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
