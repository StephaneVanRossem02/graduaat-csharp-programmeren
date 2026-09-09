/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Inleiding',
      collapsed: false,
      link: { type: 'doc', id: 'inleiding/index' },
      items: [
        'inleiding/benodigdheden',
        'inleiding/afsprakencode',
        'inleiding/afsprakenoefeningen',
        'inleiding/nuttigeextras',
        'inleiding/dankwoord',
        'inleiding/helpen',
      ],
    },

    // ─── SEMESTER 1 ───────────────────────────────────────────────
    {
      type: 'category',
      label: 'Semester 1: Programming Principles',
      items: [
        {
          type: 'category',
          label: 'H1: Werken met Visual Studio',
          link: { type: 'doc', id: 'semester-1-programming-principles/h1-werken-met-visual-studio' },
          items: [
            'semester-1-programming-principles/h1-werken-met-visual-studio/introductie-tot-c',
            'semester-1-programming-principles/h1-werken-met-visual-studio/visual-studio-installeren',
            'semester-1-programming-principles/h1-werken-met-visual-studio/een-project-maken-in-visual-studio',
            'semester-1-programming-principles/h1-werken-met-visual-studio/fouten-in-je-code',
            'semester-1-programming-principles/h1-werken-met-visual-studio/je-eerste-stappen-in-c',
            'semester-1-programming-principles/h1-werken-met-visual-studio/console',
            'semester-1-programming-principles/h1-werken-met-visual-studio/kleuren',
            'semester-1-programming-principles/h1-werken-met-visual-studio/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H2: Variabelen en datatypes',
          link: { type: 'doc', id: 'semester-1-programming-principles/h2-variabelen-en-datatypes' },
          items: [
            'semester-1-programming-principles/h2-variabelen-en-datatypes/csharpessentials',
            'semester-1-programming-principles/h2-variabelen-en-datatypes/datatypes',
            'semester-1-programming-principles/h2-variabelen-en-datatypes/variabelen',
            'semester-1-programming-principles/h2-variabelen-en-datatypes/expressies',
            'semester-1-programming-principles/h2-variabelen-en-datatypes/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H3: Strings en hun methoden',
          link: { type: 'doc', id: 'semester-1-programming-principles/h3-tekst-in-code' },
          items: [
            'semester-1-programming-principles/h3-tekst-in-code/chars-strings',
            'semester-1-programming-principles/h3-tekst-in-code/strings-samenvoegen',
            'semester-1-programming-principles/h3-tekst-in-code/omzetten-van-en-naar-strings',
            'semester-1-programming-principles/h3-tekst-in-code/functionaliteit-van-strings',
            'semester-1-programming-principles/h3-tekst-in-code/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H4: Beslissingen',
          link: { type: 'doc', id: 'semester-1-programming-principles/h4-beslissingen' },
          items: [
            'semester-1-programming-principles/h4-beslissingen/beslissingen-intro',
            'semester-1-programming-principles/h4-beslissingen/enkelvoudige-booleaanse-expressies',
            'semester-1-programming-principles/h4-beslissingen/if',
            'semester-1-programming-principles/h4-beslissingen/samengestelde-booleaanse-expressies',
            'semester-1-programming-principles/h4-beslissingen/scope',
            'semester-1-programming-principles/h4-beslissingen/switch',
            'semester-1-programming-principles/h4-beslissingen/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H5: Loops',
          link: { type: 'doc', id: 'semester-1-programming-principles/h5-loops' },
          items: [
            'semester-1-programming-principles/h5-loops/loops-intro',
            'semester-1-programming-principles/h5-loops/while-dowhile',
            'semester-1-programming-principles/h5-loops/for',
            'semester-1-programming-principles/h5-loops/debuggen',
            'semester-1-programming-principles/h5-loops/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H6: Arrays',
          link: { type: 'doc', id: 'semester-1-programming-principles/h6-arrays' },
          items: [
            'semester-1-programming-principles/h6-arrays/array-principes',
            'semester-1-programming-principles/h6-arrays/alternatieve-syntax',
            'semester-1-programming-principles/h6-arrays/werken-met-arrays',
            'semester-1-programming-principles/h6-arrays/defaultwaarden',
            'semester-1-programming-principles/h6-arrays/list-en-listmethods',
            'semester-1-programming-principles/h6-arrays/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H7: Methoden',
          link: { type: 'doc', id: 'semester-1-programming-principles/h7-methoden' },
          items: [
            'semester-1-programming-principles/h7-methoden/methoden-intro',
            'semester-1-programming-principles/h7-methoden/parameters',
            'semester-1-programming-principles/h7-methoden/returnwaarden',
            'semester-1-programming-principles/h7-methoden/geavanceerde-methoden',
            'semester-1-programming-principles/h7-methoden/oefeningen',
          ],
        },
        'semester-1-programming-principles/intermezzo-textcell',
        {
          type: 'category',
          label: 'H8: Numerieke data',
          link: { type: 'doc', id: 'semester-1-programming-principles/h8-numerieke-data' },
          items: [
            'semester-1-programming-principles/h8-numerieke-data/de-math-klasse',
            'semester-1-programming-principles/h8-numerieke-data/random',
            'semester-1-programming-principles/h8-numerieke-data/casting-en-conversie',
            'semester-1-programming-principles/h8-numerieke-data/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H9: Meerdimensionaal werken',
          link: { type: 'doc', id: 'semester-1-programming-principles/h9-meerdimensionaal-werken' },
          items: [
            'semester-1-programming-principles/h9-meerdimensionaal-werken/n-dimensionale-arrays',
            'semester-1-programming-principles/h9-meerdimensionaal-werken/geneste-iteratie',
            'semester-1-programming-principles/h9-meerdimensionaal-werken/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H10: Gevorderde tekstverwerking',
          link: { type: 'doc', id: 'semester-1-programming-principles/h10-gevorderde-tekstverwerking' },
          items: [
            'semester-1-programming-principles/h10-gevorderde-tekstverwerking/voorstelling-van-tekst',
            'semester-1-programming-principles/h10-gevorderde-tekstverwerking/interpolatie-met-formattering',
            'semester-1-programming-principles/h10-gevorderde-tekstverwerking/werken-met-arrays-van-strings',
            'semester-1-programming-principles/h10-gevorderde-tekstverwerking/input-en-output-van-tekstbestanden',
            'semester-1-programming-principles/h10-gevorderde-tekstverwerking/oefeningen',
          ],
        },
        'semester-1-programming-principles/afsluiter-textcell2d',
      ],
    },

    // ─── SEMESTER 2 ───────────────────────────────────────────────
    {
      type: 'category',
      label: 'Semester 2: Object-Oriented Programming',
      items: [
        {
          type: 'category',
          label: 'H11: Klassen en objecten',
          link: { type: 'doc', id: 'semester-2-oop/h11-klassen-en-objecten' },
          items: [
            'semester-2-oop/h11-klassen-en-objecten/intro',
            'semester-2-oop/h11-klassen-en-objecten/aanmaken',
            'semester-2-oop/h11-klassen-en-objecten/datetime',
            'semester-2-oop/h11-klassen-en-objecten/enumeraties',
            'semester-2-oop/h11-klassen-en-objecten/weergeven',
            'semester-2-oop/h11-klassen-en-objecten/attributen',
            'semester-2-oop/h11-klassen-en-objecten/methoden',
            'semester-2-oop/h11-klassen-en-objecten/accessmodifiers',
            'semester-2-oop/h11-klassen-en-objecten/properties',
            'semester-2-oop/h11-klassen-en-objecten/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H12: Objecten (al dan niet) aanmaken',
          link: { type: 'doc', id: 'semester-2-oop/h12-objecten-al-dan-niet-aanmaken' },
          items: [
            'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/constructors',
            'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/strings',
            'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H13: Geheugenmanagement bij klassen',
          link: { type: 'doc', id: 'semester-2-oop/h13-geheugenmanagement-bij-klassen' },
          items: [
            'semester-2-oop/h13-geheugenmanagement-bij-klassen/value-en-reference-met-eigen-objecten',
            'semester-2-oop/h13-geheugenmanagement-bij-klassen/nullable-value-types',
            'semester-2-oop/h13-geheugenmanagement-bij-klassen/nullreference-exception',
            'semester-2-oop/h13-geheugenmanagement-bij-klassen/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H14: Datastructuren',
          link: { type: 'doc', id: 'semester-2-oop/h14-datastructuren' },
          items: [
            'semester-2-oop/h14-datastructuren/foreach',
            'semester-2-oop/h14-datastructuren/list',
            'semester-2-oop/h14-datastructuren/dictionary',
            'semester-2-oop/h14-datastructuren/immutable',
            'semester-2-oop/h14-datastructuren/verdere-datastructuren',
            'semester-2-oop/h14-datastructuren/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H15: Overerving',
          link: { type: 'doc', id: 'semester-2-oop/h15-overerving' },
          items: [
            'semester-2-oop/h15-overerving/intro',
            'semester-2-oop/h15-overerving/virtual-override',
            'semester-2-oop/h15-overerving/abstract',
            'semester-2-oop/h15-overerving/constructors',
            'semester-2-oop/h15-overerving/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H16: Geavanceerde overerving',
          link: { type: 'doc', id: 'semester-2-oop/h16-geavanceerde-overerving' },
          items: [
            'semester-2-oop/h16-geavanceerde-overerving/protected',
            'semester-2-oop/h16-geavanceerde-overerving/base',
            'semester-2-oop/h16-geavanceerde-overerving/system-object',
            'semester-2-oop/h16-geavanceerde-overerving/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H17: Exception handling',
          link: { type: 'doc', id: 'semester-2-oop/h17-exception-handling' },
          items: [
            'semester-2-oop/h17-exception-handling/werken',
            'semester-2-oop/h17-exception-handling/maken',
            'semester-2-oop/h17-exception-handling/wanneer',
            'semester-2-oop/h17-exception-handling/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H18: Polymorfisme en interfaces',
          link: { type: 'doc', id: 'semester-2-oop/h18-polymorfisme-en-interfaces' },
          items: [
            'semester-2-oop/h18-polymorfisme-en-interfaces/polymorfisme',
            'semester-2-oop/h18-polymorfisme-en-interfaces/polymorfisme-praktijk',
            'semester-2-oop/h18-polymorfisme-en-interfaces/interfaces',
            'semester-2-oop/h18-polymorfisme-en-interfaces/losse-koppeling',
            'semester-2-oop/h18-polymorfisme-en-interfaces/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H19: Testing',
          link: { type: 'doc', id: 'semester-2-oop/h19-testing' },
          items: [
            'semester-2-oop/h19-testing/wat',
            'semester-2-oop/h19-testing/waarom',
            'semester-2-oop/h19-testing/wanneer',
            'semester-2-oop/h19-testing/aaa',
            'semester-2-oop/h19-testing/voorbeeld-sum',
            'semester-2-oop/h19-testing/assert',
            'semester-2-oop/h19-testing/oefening-even-of-oneven-getal',
            'semester-2-oop/h19-testing/testinitialize-en-datarows',
            'semester-2-oop/h19-testing/oefening-bmi',
            'semester-2-oop/h19-testing/exception-testing',
            'semester-2-oop/h19-testing/oefening-bmi-exception',
            'semester-2-oop/h19-testing/oefening-schooladmin-test-null-waarden-en-testcleanup',
            'semester-2-oop/h19-testing/oefening-schooladmin-test-equals',
            'semester-2-oop/h19-testing/oefening-schooladmin-test-cursus-zoeken-met-id',
            'semester-2-oop/h19-testing/dependencies-bij-unit-testing',
            'semester-2-oop/h19-testing/mocking',
            'semester-2-oop/h19-testing/oefeningen-mocking',
            'semester-2-oop/h19-testing/test-driven-development',
            'semester-2-oop/h19-testing/class-library',
            'semester-2-oop/h19-testing/oefeningen-tdd',
          ],
        },
        {
          type: 'category',
          label: 'H20: SOLID',
          link: { type: 'doc', id: 'semester-2-oop/h20-solid' },
          items: [
            'semester-2-oop/h20-solid/single-responsibility-principle-srp',
            'semester-2-oop/h20-solid/open-closed-principle-ocp',
            'semester-2-oop/h20-solid/liskov-substitution-principle-lsp',
            'semester-2-oop/h20-solid/interface-segregation-principle-isp',
            'semester-2-oop/h20-solid/dependency-inversion-principle-dip',
          ],
        },
      ],
    },

    // ─── APPENDIX ─────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/visual-studio-tips-and-tricks',
        {
          type: 'category',
          label: 'Coding guidelines',
          link: { type: 'doc', id: 'appendix/coding-guidelines/index' },
          items: [
            'appendix/coding-guidelines/compileert-niet',
            'appendix/coding-guidelines/klassen-in-1-bestand',
            'appendix/coding-guidelines/redundante-code',
            'appendix/coding-guidelines/bladspiegel',
            'appendix/coding-guidelines/naamgeving',
            'appendix/coding-guidelines/goto-break-continue',
            'appendix/coding-guidelines/linq-gebruiken',
            'appendix/coding-guidelines/methoden-in-methoden',
            'appendix/coding-guidelines/toplevel-statements',
          ],
        },
        'appendix/graveyard',
      ],
    },
    {
      type: 'category',
      label: 'Semester 1 Appendix',
      items: [
        {
          type: 'category',
          label: 'Nice to know stuff',
          link: { type: 'doc', id: 'semester-1-appendix/prostuff' },
          items: [
            'semester-1-appendix/prostuff/outenref',
            'semester-1-appendix/prostuff/jaggedarrays',
          ],
        },
        'semester-1-appendix/all-in-projecten',
      ],
    },
    {
      type: 'category',
      label: 'Semester 2 Appendix',
      items: [
        'semester-2-appendix/operatoroverloading',
        'semester-2-appendix/object-initializer-syntax',
        'semester-2-appendix/compositie-en-aggregatie',
        {
          type: 'category',
          label: 'Nice to know stuff',
          link: { type: 'doc', id: 'semester-2-appendix/nice-to-know-stuff' },
          items: [
            'semester-2-appendix/nice-to-know-stuff/namespaces',
            'semester-2-appendix/nice-to-know-stuff/exprbody',
          ],
        },
        {
          type: 'category',
          label: 'All-In-Projecten',
          link: { type: 'doc', id: 'semester-2-appendix/all-in-projecten' },
          items: [
            'semester-2-appendix/all-in-projecten/schooladmin',
          ],
        },
      ],
    },

    // ─── PRO / IN OPBOUW ──────────────────────────────────────────
    {
      type: 'category',
      label: 'Pro / In opbouw',
      items: [
        'pro-geen-leerstof-en-of-in-opbouw/bitwise',
        'pro-geen-leerstof-en-of-in-opbouw/generics-en-collections',
        'pro-geen-leerstof-en-of-in-opbouw/events',
        {
          type: 'category',
          label: 'Software engineering',
          link: { type: 'doc', id: 'pro-geen-leerstof-en-of-in-opbouw/software-engineering' },
          items: [
            'pro-geen-leerstof-en-of-in-opbouw/software-engineering/solid1',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
