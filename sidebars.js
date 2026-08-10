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
          label: 'H10: Klassen en objecten',
          link: { type: 'doc', id: 'semester-2-oop/h8-klassen-en-objecten' },
          items: [
            'semester-2-oop/h8-klassen-en-objecten/oop_intro',
            'semester-2-oop/h8-klassen-en-objecten/0b_oopincs',
            'semester-2-oop/h8-klassen-en-objecten/datetime',
            'semester-2-oop/h8-klassen-en-objecten/enumeraties-nog-een-eigen-datatype',
            'semester-2-oop/h8-klassen-en-objecten/klassen-en-objecten-weergeven-deel-1',
            'semester-2-oop/h8-klassen-en-objecten/attributen',
            'semester-2-oop/h8-klassen-en-objecten/methoden',
            'semester-2-oop/h8-klassen-en-objecten/accessmodifiers',
            'semester-2-oop/h8-klassen-en-objecten/properties',
            'semester-2-oop/h8-klassen-en-objecten/a_practica',
          ],
        },
        {
          type: 'category',
          label: 'H11: Objecten (al dan niet) aanmaken',
          link: { type: 'doc', id: 'semester-2-oop/h11-objecten-al-dan-niet-aanmaken' },
          items: [
            'semester-2-oop/h11-objecten-al-dan-niet-aanmaken/constructors',
            'semester-2-oop/h11-objecten-al-dan-niet-aanmaken/strings',
            'semester-2-oop/h11-objecten-al-dan-niet-aanmaken/a_practica3',
          ],
        },
        {
          type: 'category',
          label: 'H12: Geheugenmanagement bij klassen',
          link: { type: 'doc', id: 'semester-2-oop/h9-geheugenmanagement-bij-klassen' },
          items: [
            'semester-2-oop/h9-geheugenmanagement-bij-klassen/value-en-reference-met-eigen-objecten',
            'semester-2-oop/h9-geheugenmanagement-bij-klassen/nullable-value-types',
            'semester-2-oop/h9-geheugenmanagement-bij-klassen/nullreference-exception',
            'semester-2-oop/h9-geheugenmanagement-bij-klassen/geheugenmgmt-labo',
          ],
        },
        {
          type: 'category',
          label: 'H13: Datastructuren',
          link: { type: 'doc', id: 'semester-2-oop/h11-datastructuren' },
          items: [
            'semester-2-oop/h11-datastructuren/foreach',
            'semester-2-oop/h11-datastructuren/list',
            'semester-2-oop/h11-datastructuren/dictionary',
            'semester-2-oop/h11-datastructuren/immutable-datastructuren',
            'semester-2-oop/h11-datastructuren/verdere-datastructuren',
            'semester-2-oop/h11-datastructuren/labo-datastructuren',
          ],
        },
        {
          type: 'category',
          label: 'H14: Overerving',
          link: { type: 'doc', id: 'semester-2-oop/h12-overerving' },
          items: [
            'semester-2-oop/h12-overerving/overerving_intro',
            'semester-2-oop/h12-overerving/virtual_override',
            'semester-2-oop/h12-overerving/abstract',
            'semester-2-oop/h12-overerving/constructors_inheritance',
            'semester-2-oop/h12-overerving/oefeningen',
          ],
        },
        {
          type: 'category',
          label: 'H15: Geavanceerde overerving',
          link: { type: 'doc', id: 'semester-2-oop/geavanceerde-overerving' },
          items: [
            'semester-2-oop/geavanceerde-overerving/protected-access-modifier',
            'semester-2-oop/geavanceerde-overerving/base',
            'semester-2-oop/geavanceerde-overerving/system_object',
            'semester-2-oop/geavanceerde-overerving/labo',
          ],
        },
        {
          type: 'category',
          label: 'H16: Exception handling',
          link: { type: 'doc', id: 'semester-2-oop/exception-handling' },
          items: [
            'semester-2-oop/exception-handling/werken-met-exceptions',
            'semester-2-oop/exception-handling/zelf-uitzonderingen-maken',
            'semester-2-oop/exception-handling/waar-exceptions-plaatsen',
            'semester-2-oop/exception-handling/labo',
          ],
        },
        {
          type: 'category',
          label: 'H17: Polymorfisme en interfaces',
          link: { type: 'doc', id: 'semester-2-oop/h17-polymorfisme-en-interfaces' },
          items: [
            'semester-2-oop/h17-polymorfisme-en-interfaces/polymorfisme',
            'semester-2-oop/h17-polymorfisme-en-interfaces/polymorfisme-in-de-praktijk',
            'semester-2-oop/h17-polymorfisme-en-interfaces/interfaces',
            'semester-2-oop/h17-polymorfisme-en-interfaces/losse-koppeling',
            'semester-2-oop/h17-polymorfisme-en-interfaces/labo-1',
          ],
        },
        {
          type: 'category',
          label: 'H18: Testing',
          link: { type: 'doc', id: 'semester-2-oop/h18-testing' },
          items: [
            'semester-2-oop/h18-testing/wat-is-unit-testing',
            'semester-2-oop/h18-testing/waarom-unit-testing',
            'semester-2-oop/h18-testing/wanneer-unit-testing',
            'semester-2-oop/h18-testing/schrijven-van-een-unit-test-aaa-methode',
            'semester-2-oop/h18-testing/eerste-voorbeeld-sum',
            'semester-2-oop/h18-testing/assert',
            'semester-2-oop/h18-testing/oefening-even-of-oneven-getal',
            'semester-2-oop/h18-testing/testinitialize-en-datarows',
            'semester-2-oop/h18-testing/oefening-bmi',
            'semester-2-oop/h18-testing/exception-testing',
            'semester-2-oop/h18-testing/oefening-bmi-exception',
            'semester-2-oop/h18-testing/oefening-schooladmin-test-null-waarden-en-testcleanup',
            'semester-2-oop/h18-testing/oefening-schooladmin-test-equals',
            'semester-2-oop/h18-testing/oefening-schooladmin-test-cursus-zoeken-met-id',
            'semester-2-oop/h18-testing/dependencies-bij-unit-testing',
            'semester-2-oop/h18-testing/mocking',
            'semester-2-oop/h18-testing/oefeningen-mocking',
            'semester-2-oop/h18-testing/test-driven-development',
            'semester-2-oop/h18-testing/class-library',
            'semester-2-oop/h18-testing/oefeningen-tdd',
          ],
        },
        {
          type: 'category',
          label: 'H19: SOLID',
          link: { type: 'doc', id: 'semester-2-oop/h19-solid' },
          items: [
            'semester-2-oop/h19-solid/single-responsibility-principle-srp',
            'semester-2-oop/h19-solid/open-closed-principle-ocp',
            'semester-2-oop/h19-solid/liskov-substitution-principle-lsp',
            'semester-2-oop/h19-solid/interface-segregation-principle-isp',
            'semester-2-oop/h19-solid/dependency-inversion-principle-dip',
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
        'appendix/codingguidelines',
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
