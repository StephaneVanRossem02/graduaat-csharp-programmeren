import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import LaboSlides from '@site/src/components/LaboSlides';
import decks from '@site/src/data/slides.json';

// Hoofdstukpagina per hoofdstuknummer, zodat elk kopje naar de leerstof linkt.
const HOOFDSTUKKEN = {
  1: ['H1: Werken met Visual Studio', 'h1-werken-met-visual-studio'],
  2: ['H2: Variabelen en datatypes', 'h2-variabelen-en-datatypes'],
  3: ['H3: Strings en hun methoden', 'h3-tekst-in-code'],
  4: ['H4: Beslissingen', 'h4-beslissingen'],
  5: ['H5: Loops', 'h5-loops'],
  6: ['H6: Arrays', 'h6-arrays'],
  7: ['H7: Methoden', 'h7-methoden'],
  8: ['H8: Numerieke data', 'h8-numerieke-data'],
  9: ['H9: Meerdimensionaal werken', 'h9-meerdimensionaal-werken'],
  10: ['H10: Gevorderde tekstverwerking', 'h10-gevorderde-tekstverwerking'],
};

export default function Slides() {
  const nummers = [...new Set(decks.map((deck) => deck.hoofdstuk))];

  return (
    <Layout title="Slides" description="De slides van de labo's Basis Programmeren">
      <main className="container margin-vert--lg">
        <h1>Slides van de labo's</h1>
        <p>
          De presentaties uit de labo's van Basis Programmeren, per hoofdstuk. Een deck opent in
          een nieuw tabblad. Blader met de pijltjes of de spatiebalk, druk <kbd>F</kbd> voor
          schermvullend en <kbd>Esc</kbd> voor een overzicht van alle slides. Met de knop PDF
          download je het deck om offline te lezen of er notities op te maken.
        </p>
        {nummers.map((nummer) => {
          const [titel, pad] = HOOFDSTUKKEN[nummer] ?? [`H${nummer}`, null];
          return (
            <section key={nummer} className="margin-top--lg">
              <h2>
                {pad ? (
                  <Link to={`/semester-1-programming-principles/${pad}`}>{titel}</Link>
                ) : (
                  titel
                )}
              </h2>
              <LaboSlides hoofdstuk={nummer} zonderKop />
            </section>
          );
        })}
      </main>
    </Layout>
  );
}
