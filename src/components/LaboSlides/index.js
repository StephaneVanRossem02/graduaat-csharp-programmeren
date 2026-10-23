import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import decks from '@site/src/data/slides.json';
import styles from './styles.module.css';

/**
 * De slides van de labo's, als kaartjes die het deck in een nieuw tabblad openen.
 *
 * De decks zelf staan in static/slides/<vak>/<map>/index.html. Ze worden gebouwd met
 * slides/bouw.py, dat ook src/data/slides.json bijwerkt. Op de website staat enkel
 * de studentversie: de sprekersnotities zitten er niet in.
 *
 *   <LaboSlides vak="bp" hoofdstuk={5} />            de labo's van H5, met een kopje
 *   <LaboSlides vak="bp" hoofdstuk={5} zonderKop />  idem zonder kopje
 *
 * Elk vak (bp of oop) nummert zijn hoofdstukken vanaf 1.
 *
 * Heeft een hoofdstuk (nog) geen slides, dan toont het component niets.
 */
export default function LaboSlides({ vak, hoofdstuk, zonderKop = false }) {
  const lijst = decks.filter((deck) => deck.vak === vak && deck.hoofdstuk === hoofdstuk);
  if (lijst.length === 0) return null;

  return (
    <section className={styles.blok}>
      {!zonderKop && <h2>Slides van de labo's</h2>}
      <div className={styles.raster}>
        {lijst.map((deck) => (
          <DeckKaart key={deck.map} deck={deck} />
        ))}
      </div>
    </section>
  );
}

export function DeckKaart({ deck }) {
  const url = useBaseUrl(`/slides/${deck.map}/index.html`);
  const pdfUrl = useBaseUrl(`/slides/${deck.map}/${deck.pdf}`);
  return (
    <div className={styles.kaart}>
      <span className={styles.label}>H{deck.hoofdstuk} · labo {deck.labo}</span>
      <span className={styles.titel}>{deck.titel.replace(/^H\d+:\s*/, '')}</span>
      {deck.subtitel && <span className={styles.subtitel}>{deck.subtitel}</span>}
      <div className={styles.acties}>
        <a className={styles.open} href={url} target="_blank" rel="noopener noreferrer">
          Open slides →
        </a>
        {deck.pdf && (
          <a className={styles.pdf} href={pdfUrl} download>
            PDF ↓
          </a>
        )}
      </div>
    </div>
  );
}
