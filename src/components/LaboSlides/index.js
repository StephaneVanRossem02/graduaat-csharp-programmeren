import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import decks from '@site/src/data/slides.json';
import styles from './styles.module.css';

/**
 * De slides van de labo's, als kaartjes die het deck in een nieuw tabblad openen.
 *
 * De decks zelf staan in static/slides/<map>/index.html. Ze worden gebouwd met
 * slides/bouw.py, dat ook src/data/slides.json bijwerkt. Op de website staat enkel
 * de studentversie: de sprekersnotities zitten er niet in.
 *
 *   <LaboSlides hoofdstuk={5} />            de labo's van H5, met een kopje erboven
 *   <LaboSlides hoofdstuk={5} zonderKop />  idem zonder kopje (voor de Slides-pagina)
 *
 * Heeft een hoofdstuk (nog) geen slides, dan toont het component niets.
 */
export default function LaboSlides({ hoofdstuk, zonderKop = false }) {
  const lijst = decks.filter((deck) => deck.hoofdstuk === hoofdstuk);
  if (lijst.length === 0) return null;

  return (
    <section className={styles.blok}>
      {!zonderKop && <p className={styles.kop}>Slides van de labo's</p>}
      <div className={styles.raster}>
        {lijst.map((deck) => (
          <DeckKaart key={deck.map} deck={deck} />
        ))}
      </div>
    </section>
  );
}

function DeckKaart({ deck }) {
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
