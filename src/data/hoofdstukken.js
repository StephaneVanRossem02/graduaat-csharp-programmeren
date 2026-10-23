// De twee vakken en hun hoofdstukken. Elk vak nummert zijn hoofdstukken vanaf 1.
// Gebruikt door de overzichts-, planning- en slidespagina's en de homepage.
const BP = '/semester-1-programming-principles';
const OOP = '/semester-2-oop';

export const vakken = {
  bp: {
    naam: 'Basis Programmeren',
    kort: 'BP',
    semester: 'Semester 1',
    pagina: '/bp',
    omschrijving:
      'Je eerste stappen in C#: variabelen, beslissingen, loops, methoden en arrays. Je leert denken als een programmeur.',
    // [titel, pagina, oefeningen: true voor <pagina>/oefeningen, of een eigen pad]
    hoofdstukken: [
      ['Werken met Visual Studio', `${BP}/h1-werken-met-visual-studio`, true],
      ['Variabelen en datatypes', `${BP}/h2-variabelen-en-datatypes`, true],
      ['Strings en hun methoden', `${BP}/h3-tekst-in-code`, true],
      ['Beslissingen', `${BP}/h4-beslissingen`, true],
      ['Loops', `${BP}/h5-loops`, true],
      ['Arrays', `${BP}/h6-arrays`, true],
      ['Methoden', `${BP}/h7-methoden`, true],
      ['Numerieke data', `${BP}/h8-numerieke-data`, true],
      ['Meerdimensionaal werken', `${BP}/h9-meerdimensionaal-werken`, true],
      ['Gevorderde tekstverwerking', `${BP}/h10-gevorderde-tekstverwerking`, true],
    ],
  },
  oop: {
    naam: 'Object-Oriented Programming',
    kort: 'OOP',
    semester: 'Semester 2',
    pagina: '/oop',
    omschrijving:
      "Programma's opbouwen met klassen en objecten: overerving, interfaces, exceptions en testen.",
    // De mappen heten nog h11 tot h19 (zo blijven bestaande links werken).
    // SOLID (h20) staat nog als draft en ontbreekt daarom.
    hoofdstukken: [
      ['Klassen en objecten', `${OOP}/h11-klassen-en-objecten`, true],
      ['Objecten (al dan niet) aanmaken', `${OOP}/h12-objecten-al-dan-niet-aanmaken`, true],
      ['Geheugenmanagement bij klassen', `${OOP}/h13-geheugenmanagement-bij-klassen`, true],
      ['Datastructuren', `${OOP}/h14-datastructuren`, true],
      ['Overerving', `${OOP}/h15-overerving`, true],
      ['Geavanceerde overerving', `${OOP}/h16-geavanceerde-overerving`, true],
      ['Exception handling', `${OOP}/h17-exception-handling`, true],
      ['Polymorfisme en interfaces', `${OOP}/h18-polymorfisme-en-interfaces`, true],
      ['Testing', `${OOP}/h19-testing`, `${OOP}/h19-testing/oefening-even-of-oneven-getal`],
    ],
  },
};

export function hoofdstuk(vak, nummer) {
  const gegevens = vakken[vak]?.hoofdstukken[nummer - 1];
  if (!gegevens) {
    return { vak, nummer, naam: `H${nummer}`, titel: `H${nummer}`, pagina: null, oefeningen: null };
  }
  const [naam, pagina, metOefeningen] = gegevens;
  return {
    vak,
    nummer,
    naam,
    titel: `H${nummer}: ${naam}`,
    pagina,
    oefeningen: metOefeningen === true ? `${pagina}/oefeningen` : metOefeningen || null,
  };
}

export function hoofdstukkenVan(vak) {
  return vakken[vak].hoofdstukken.map((_, index) => hoofdstuk(vak, index + 1));
}
