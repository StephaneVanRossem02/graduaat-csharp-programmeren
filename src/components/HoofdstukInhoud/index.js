import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';

import { hoofdstuk } from '@site/src/data/hoofdstukken';
import styles from './styles.module.css';

/**
 * De theorie van het huidige hoofdstuk als genummerde kaartjes, in de volgorde
 * van de zijbalk, met daarna een kaartje naar de oefeningen.
 *
 *   <HoofdstukInhoud vak="bp" hoofdstuk={5} />
 *
 * De oefeningen staan in de zijbalk onder de tab Oefeningen (zie sidebars.js).
 * Werkt enkel op een pagina die in sidebars.js als `link` van een categorie staat.
 */
export default function HoofdstukInhoud({ vak, hoofdstuk: nummer }) {
  const categorie = useCurrentSidebarCategory();
  const lessen = categorie.items.filter((item) => item.href);
  const oefeningen = vak && nummer ? hoofdstuk(vak, nummer).oefeningen : null;

  return (
    <div className={styles.raster}>
      {lessen.map((item, index) => (
        <Link key={item.href} to={item.href} className={styles.kaart}>
          <span className={styles.nummer}>{index + 1}</span>
          <span className={styles.titel}>{item.label}</span>
        </Link>
      ))}
      {oefeningen && (
        <Link to={oefeningen} className={`${styles.kaart} ${styles.oefeningen}`}>
          <span className={styles.nummer}>✎</span>
          <span className={styles.titel}>Oefeningen</span>
        </Link>
      )}
    </div>
  );
}
