import React from 'react';
import Link from '@docusaurus/Link';

import LaboSlides, { DeckKaart } from '@site/src/components/LaboSlides';
import decks from '@site/src/data/slides.json';
import planning from '@site/src/data/planning.json';
import { vakken, hoofdstuk, hoofdstukkenVan } from '@site/src/data/hoofdstukken';
import styles from './styles.module.css';

/**
 * Bouwstenen voor de pagina's van een vak (Basis Programmeren of OOP).
 * Elk vak heeft drie pagina's in docs/<vak>/: index, planning en slides.
 *
 *   <VakOverzicht vak="bp" />   kop van het vak, snelkoppelingen en alle hoofdstukken
 *   <VakPlanning vak="bp" />    tijdlijn per week, uit src/data/planning.json en de decks
 *   <VakSlides vak="bp" />      alle decks van het vak, per hoofdstuk
 *   <VakOefeningen vak="bp" />  per hoofdstuk een link naar de oefeningen
 *   <Leerdoelen>...</Leerdoelen> kader met de leerdoelen bovenaan een hoofdstuk
 */

function decksVan(vak) {
  return decks.filter((deck) => deck.vak === vak);
}

export function VakOverzicht({ vak }) {
  const gegevens = vakken[vak];
  const vakDecks = decksVan(vak);
  const nieuwste = [...vakDecks].sort((a, b) => (b.week ?? 0) - (a.week ?? 0) || b.labo - a.labo)[0];
  const [eerste] = hoofdstukkenVan(vak);

  return (
    <div className={styles.vak} data-vak={vak}>
      <header className={styles.banner}>
        <span className={styles.semester}>{gegevens.semester}</span>
        <h1 className={styles.bannerTitel}>{gegevens.naam}</h1>
        <p className={styles.bannerTekst}>{gegevens.omschrijving}</p>
        <div className={styles.knoppen}>
          <Link className={styles.knopWit} to={eerste.pagina}>
            Begin bij H{eerste.nummer}
          </Link>
          <Link className={styles.knopRand} to={`${gegevens.pagina}/planning`}>
            Planning
          </Link>
          <Link className={styles.knopRand} to={`${gegevens.pagina}/slides`}>
            Slides
          </Link>
        </div>
      </header>

      {nieuwste && (
        <section className={styles.sectie}>
          <h2 className={styles.sectieTitel}>Laatste labo</h2>
          <div className={styles.nieuwste}>
            <DeckKaart deck={nieuwste} />
          </div>
        </section>
      )}

      <section className={styles.sectie}>
        <h2 className={styles.sectieTitel}>Hoofdstukken</h2>
        <div className={styles.hoofdstukken}>
          {hoofdstukkenVan(vak).map((item) => {
            const aantal = vakDecks.filter((deck) => deck.hoofdstuk === item.nummer).length;
            return (
              <Link key={item.nummer} to={item.pagina} className={styles.hoofdstuk}>
                <span className={styles.badge}>H{item.nummer}</span>
                <span className={styles.hoofdstukNaam}>{item.naam}</span>
                {aantal > 0 && (
                  <span className={styles.chip}>
                    {aantal} {aantal === 1 ? 'deck' : 'decks'}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Een week staat in de planning zodra ze in planning.json staat of er een deck
// voor die week is (het weeknummer komt uit de subtitel van het deck).
function wekenVan(vak) {
  const perWeek = new Map(
    (planning[vak] ?? []).map((week) => [week.week, { ...week, decks: [] }]),
  );
  for (const deck of decksVan(vak)) {
    if (!deck.week) continue;
    if (!perWeek.has(deck.week)) {
      perWeek.set(deck.week, { week: deck.week, hoofdstukken: [deck.hoofdstuk], decks: [] });
    }
    perWeek.get(deck.week).decks.push(deck);
  }
  return [...perWeek.values()].sort((a, b) => a.week - b.week);
}

export function VakPlanning({ vak }) {
  const weken = wekenVan(vak);
  if (weken.length === 0) {
    return <Leeg>De planning van {vakken[vak].naam} volgt nog.</Leeg>;
  }

  return (
    <ol className={styles.tijdlijn} data-vak={vak}>
      {weken.map((week) => (
        <li key={week.week} className={styles.week}>
          <div className={styles.weeknummer}>
            <span>Week</span>
            <strong>{week.week}</strong>
          </div>
          <div className={styles.weekInhoud}>
            {week.hoofdstukken.map((nummer) => {
              const { titel, pagina, oefeningen } = hoofdstuk(vak, nummer);
              return (
                <div key={nummer} className={styles.weekHoofdstuk}>
                  <Link to={pagina} className={styles.weekTitel}>
                    {titel}
                  </Link>
                  {oefeningen && (
                    <Link to={oefeningen} className={styles.weekOefeningen}>
                      Oefeningen
                    </Link>
                  )}
                </div>
              );
            })}
            {week.opmerking && <p className={styles.opmerking}>{week.opmerking}</p>}
            {week.decks.length > 0 && (
              <div className={styles.decks}>
                {week.decks.map((deck) => (
                  <DeckKaart key={deck.map} deck={deck} />
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function VakSlides({ vak }) {
  const nummers = [...new Set(decksVan(vak).map((deck) => deck.hoofdstuk))];
  if (nummers.length === 0) {
    return <Leeg>Voor {vakken[vak].naam} zijn er nog geen slides.</Leeg>;
  }

  return (
    <div data-vak={vak}>
      {nummers.map((nummer) => {
        const { titel, pagina } = hoofdstuk(vak, nummer);
        return (
          <section key={nummer} className={styles.slidesHoofdstuk}>
            <h2>
              <Link to={pagina}>{titel}</Link>
            </h2>
            <LaboSlides vak={vak} hoofdstuk={nummer} zonderKop />
          </section>
        );
      })}
    </div>
  );
}

export function VakOefeningen({ vak }) {
  return (
    <div className={styles.oefeningen} data-vak={vak}>
      {hoofdstukkenVan(vak)
        .filter((item) => item.oefeningen)
        .map((item) => (
          <Link key={item.nummer} to={item.oefeningen} className={styles.oefening}>
            <span className={styles.badge}>H{item.nummer}</span>
            <span className={styles.hoofdstukNaam}>{item.naam}</span>
            <span className={styles.pijl} aria-hidden="true">→</span>
          </Link>
        ))}
    </div>
  );
}

export function Leerdoelen({ children }) {
  return (
    <aside className={styles.leerdoelen}>
      <p className={styles.leerdoelenKop}>Na dit hoofdstuk kan je</p>
      {children}
    </aside>
  );
}

function Leeg({ children }) {
  return <p className={styles.leeg}>{children}</p>;
}
