/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const fs = require('fs');
const path = require('path');
const { createSlugger } = require('@docusaurus/utils');
// Twee vakken, elk met een eigen zijbalk: Basis Programmeren (semester 1) en
// Object-Oriented Programming (semester 2). Wat voor beide geldt, staat in 'algemeen'.
const sidebars = {
  // ─── BASIS PROGRAMMEREN ───────────────────────────────────────
  bp: [
    {
      type: 'html',
      value: '<span class="vak-kop vak-kop--bp"><span class="vak-kop__stip"></span><span><small>Semester 1</small>Basis Programmeren</span></span>',
      defaultStyle: false,
    },
    { type: 'doc', id: 'bp/index', className: 'menu-snel menu-snel--index' },
    { type: 'doc', id: 'bp/planning', className: 'menu-snel menu-snel--planning' },
    { type: 'doc', id: 'bp/slides', className: 'menu-snel menu-snel--slides' },
    {
      type: 'html',
      value: '<span class="menu-groep">Hoofdstukken</span>',
      defaultStyle: false,
    },
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
    {
      type: 'html',
      value: '<span class="menu-groep">Meer</span>',
      defaultStyle: false,
    },
    {
      type: 'category',
      label: 'Extra',
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
  ],

  // ─── OBJECT-ORIENTED PROGRAMMING ──────────────────────────────
  oop: [
    {
      type: 'html',
      value: '<span class="vak-kop vak-kop--oop"><span class="vak-kop__stip"></span><span><small>Semester 2</small>Object-Oriented Programming</span></span>',
      defaultStyle: false,
    },
    { type: 'doc', id: 'oop/index', className: 'menu-snel menu-snel--index' },
    { type: 'doc', id: 'oop/planning', className: 'menu-snel menu-snel--planning' },
    { type: 'doc', id: 'oop/slides', className: 'menu-snel menu-snel--slides' },
    {
      type: 'html',
      value: '<span class="menu-groep">Hoofdstukken</span>',
      defaultStyle: false,
    },
    {
      type: 'category',
      label: 'H1: Klassen en objecten',
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
      label: 'H2: Objecten (al dan niet) aanmaken',
      link: { type: 'doc', id: 'semester-2-oop/h12-objecten-al-dan-niet-aanmaken' },
      items: [
        'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/constructors',
        'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/strings',
        'semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen',
      ],
    },
    {
      type: 'category',
      label: 'H3: Geheugenmanagement bij klassen',
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
      label: 'H4: Datastructuren',
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
      label: 'H5: Overerving',
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
      label: 'H6: Geavanceerde overerving',
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
      label: 'H7: Exception handling',
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
      label: 'H8: Polymorfisme en interfaces',
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
      label: 'H9: Testing',
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
      label: 'H10: SOLID',
      link: { type: 'doc', id: 'semester-2-oop/h20-solid' },
      items: [
        'semester-2-oop/h20-solid/single-responsibility-principle-srp',
        'semester-2-oop/h20-solid/open-closed-principle-ocp',
        'semester-2-oop/h20-solid/liskov-substitution-principle-lsp',
        'semester-2-oop/h20-solid/interface-segregation-principle-isp',
        'semester-2-oop/h20-solid/dependency-inversion-principle-dip',
      ],
    },
    {
      type: 'html',
      value: '<span class="menu-groep">Meer</span>',
      defaultStyle: false,
    },
    {
      type: 'category',
      label: 'Extra',
      items: [
        'semester-2-appendix/schooladmin-overzicht',
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
    {
      type: 'category',
      label: 'Verdieping (geen leerstof)',
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

  // ─── ALGEMEEN: VOOR BEIDE VAKKEN ──────────────────────────────
  algemeen: [
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
    {
      type: 'category',
      label: 'Handige info',
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
  ],
};

// ─── THEORIE EN OEFENINGEN APART ─────────────────────────────────
// Elk vak krijgt twee zijbalken met bovenaan twee tabjes: Hoofdstukken (de
// theorie) en Oefeningen (de oefeningen per hoofdstuk). De hoofdstukken hierboven
// blijven de enige bron: de oefeningen worden er hier automatisch uitgehaald.
const isOefening = (item) => typeof item === 'string' && /\/oefening[^/]*$/.test(item);

function zonderOefeningen(items) {
  return items
    .filter((item) => !isOefening(item))
    .map((item) =>
      item.type === 'category' ? { ...item, items: zonderOefeningen(item.items) } : item,
    );
}

// Het markdownbestand van een doc-id. Een cijfer vooraan de bestandsnaam
// (9-oefening-bmi.md) zit niet in de id.
function bestandVoor(id) {
  const map = path.join(__dirname, 'docs', path.dirname(id));
  const naam = path.basename(id);
  const bestand = fs
    .readdirSync(map)
    .find((f) => /\.mdx?$/.test(f) && f.replace(/^\d+-/, '').replace(/\.mdx?$/, '') === naam);
  return bestand ? path.join(map, bestand) : null;
}

// Platte tekst van een kop, zoals Docusaurus hem ziet (zonder **, `, html, \_).
// Niet inkorten: een spatie voor een weggelaten <a> komt ook in het anker.
function kopTekst(ruw) {
  return ruw
    .replace(/<[^>]*>/g, '')
    .replace(/[*`]/g, '')
    .replace(/\\(.)/g, '$1');
}

// Is dit de kop van een oefening? "Oefening: H5-CountDown", "H9 - FillRandom",
// "H11_4 SchoolAdmin ...", maar niet "Oefeningen FOR" of "Modeloplossingen".
function isOefeningKop(tekst) {
  return /^Oefening\b(?!en)/i.test(tekst) || /\bOefening:/.test(tekst) || /^H\d+\s*[-_]/i.test(tekst);
}

// Korte naam voor in de zijbalk: zonder "Oefening:" en zonder de code H5-.
function korteNaam(tekst) {
  const naam = tekst
    .replace(/^Indien [^:]*:\s*/i, '')
    .replace(/^.*?Oefening:?\s*/i, '')
    .replace(/^H\d+\s*[-_]\s*(\d+\s+)?/i, '');
  // juiste-index-extra-voorzichtig wordt Juiste index extra voorzichtig
  const leesbaar = naam.includes(' ') ? naam : naam.replace(/-/g, ' ');
  return leesbaar.charAt(0).toUpperCase() + leesbaar.slice(1);
}

// De oefeningen op een pagina, als links naar hun kop op die pagina.
function oefeningenOpPagina(id) {
  const bestand = bestandVoor(id);
  if (!bestand) return [];
  const slugger = createSlugger();
  const links = [];
  let inCode = false;
  for (const regel of fs.readFileSync(bestand, 'utf8').split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(regel)) inCode = !inCode;
    const kop = !inCode && regel.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (!kop) continue;
    const anker = slugger.slug(kopTekst(kop[2]));
    const tekst = kopTekst(kop[2]).replace(/\s+/g, ' ').trim();
    if ((kop[1].length === 2 || kop[1].length === 3) && isOefeningKop(tekst)) {
      links.push({
        type: 'link',
        label: korteNaam(tekst),
        href: `/${id}#${anker}`,
        className: 'zijbalk-oefening',
      });
    }
  }
  return links;
}

function oefeningenPerHoofdstuk(items) {
  return items
    .filter((item) => item.type === 'category' && /^H\d+:/.test(item.label))
    .map((hoofdstuk) => {
      const paginas = hoofdstuk.items.filter(isOefening);
      if (paginas.length === 0) return null;
      // Een oefeningenpagina: het hoofdstuk opent die pagina, met daaronder elke
      // oefening apart. Meerdere paginas (zoals bij Testing): elke pagina apart.
      const items =
        paginas.length === 1 ? oefeningenOpPagina(paginas[0]) : paginas;
      return {
        type: 'category',
        label: hoofdstuk.label,
        collapsed: true,
        link: { type: 'doc', id: paginas[0] },
        items,
      };
    })
    .filter(Boolean);
}

function tabjes(vak, actief) {
  const tab = (label, href, naam) => ({
    type: 'link',
    label,
    href,
    className: `zijbalk-tab${actief === naam ? ' zijbalk-tab--actief' : ''}`,
  });
  return [tab('Hoofdstukken', `/${vak}`, 'theorie'), tab('Oefeningen', `/${vak}/oefeningen`, 'oefeningen')];
}

const groepTitel = (titel) => ({
  type: 'html',
  value: `<span class="menu-groep">${titel}</span>`,
  defaultStyle: false,
});

for (const vak of ['bp', 'oop']) {
  const [kop, ...rest] = sidebars[vak];
  sidebars[vak] = [kop, ...tabjes(vak, 'theorie'), ...zonderOefeningen(rest)];
  sidebars[`${vak}-oefeningen`] = [
    kop,
    ...tabjes(vak, 'oefeningen'),
    { type: 'doc', id: `${vak}/oefeningen`, label: 'Alle oefeningen', className: 'menu-snel menu-snel--oefeningen' },
    groepTitel('Per hoofdstuk'),
    ...oefeningenPerHoofdstuk(rest),
  ];
}

module.exports = sidebars;
