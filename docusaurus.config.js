// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

// Custom domain van de hoofdsite. Enkel de hoofdrepo publiceert hierheen.
const CUSTOM_DOMAIN = 'csharp.programmeren-ap.be';
const owner = (process.env.GITHUB_REPOSITORY_OWNER || 'VincentVCAP').toLowerCase();
const isMainSite = owner === 'vincentvcap';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Programmeren & OOP',
  tagline: 'Cursus Basis Programmeren & Object-Oriented Programming',
  favicon: 'img/favicon.png',

  // Wie de site publiceert wordt uit de omgeving gehaald, zodat een fork vanzelf naar
  // zijn eigen GitHub Pages verwijst in plaats van naar die van de hoofdrepo.
  // GITHUB_REPOSITORY_OWNER zet GitHub Actions zelf; lokaal valt alles terug op VincentVCAP.
  // De hoofdsite draait op een custom domain (root, dus baseUrl '/'); forks draaien op
  // <owner>.github.io/graduaat-csharp-programmeren/ en houden daar de repo-naam als baseUrl.
   url: isMainSite ? `https://${CUSTOM_DOMAIN}` : `https://${owner}.github.io`,
   baseUrl: isMainSite ? '/' : '/graduaat-csharp-programmeren/',
  //url: `https://${owner}.github.io`,
  //baseUrl: '/graduaat-csharp-programmeren/',

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
        (isMainSite || owner === 'stephanevanrossem02'
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
          // Twee aparte vakken, elk met twee zijbalken: theorie en oefeningen (zie
          // sidebars.js). Het vak blijft actief op alle pagina's van dat vak.
          {
            to: '/bp',
            position: 'left',
            label: 'Basis Programmeren',
            className: 'navbar-vak navbar-vak--bp',
            activeBaseRegex: '/(bp|semester-1-programming-principles|semester-1-appendix)(/|$)',
          },
          {
            to: '/oop',
            position: 'left',
            label: 'OOP',
            className: 'navbar-vak navbar-vak--oop',
            activeBaseRegex: '/(oop|semester-2-oop|semester-2-appendix|pro-geen-leerstof-en-of-in-opbouw)(/|$)',
          },
          {
            type: 'docSidebar',
            sidebarId: 'algemeen',
            position: 'right',
            label: 'Info & afspraken',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Basis Programmeren',
            items: [
              { label: 'Overzicht', to: '/bp' },
              { label: 'Planning', to: '/bp/planning' },
              { label: 'Slides', to: '/bp/slides' },
            ],
          },
          {
            title: 'Object-Oriented Programming',
            items: [
              { label: 'Overzicht', to: '/oop' },
              { label: 'Planning', to: '/oop/planning' },
              { label: 'Slides', to: '/oop/slides' },
            ],
          },
          {
            title: 'Algemeen',
            items: [
              { label: 'Inleiding', to: '/inleiding' },
              { label: 'Afspraken code', to: '/inleiding/afsprakencode' },
              { label: 'Coding guidelines', to: '/appendix/coding-guidelines' },
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
