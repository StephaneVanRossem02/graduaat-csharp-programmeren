import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { vakken, hoofdstukkenVan } from '@site/src/data/hoofdstukken';
import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroLabel}>Graduaat Programmeren · AP Hogeschool</p>
        <h1 className={styles.heroTitle}>Programmeren &amp; OOP</h1>
        <p className={styles.heroSub}>
          Twee vakken, één leerlijn. In het eerste semester leer je programmeren in C#, in het
          tweede bouw je daarop verder met objectgericht programmeren.
        </p>
      </div>
    </header>
  );
}

function VakKaart({ vak }) {
  const gegevens = vakken[vak];
  const hoofdstukken = hoofdstukkenVan(vak);
  const eerste = hoofdstukken[0].nummer;
  const laatste = hoofdstukken[hoofdstukken.length - 1].nummer;

  return (
    <article className={styles.vak} data-vak={vak}>
      <div className={styles.vakKop}>
        <span className={styles.vakSemester}>{gegevens.semester}</span>
        <span className={styles.vakAfkorting}>{gegevens.kort}</span>
      </div>
      <div className={styles.vakBody}>
        <h2 className={styles.vakNaam}>{gegevens.naam}</h2>
        <p className={styles.vakTekst}>{gegevens.omschrijving}</p>
        <ul className={styles.vakHoofdstukken}>
          {hoofdstukken.map((item) => (
            <li key={item.nummer}>
              <Link to={item.pagina} title={item.titel}>
                H{item.nummer}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.vakBereik}>
          Hoofdstuk {eerste} tot {laatste}
        </p>
        <div className={styles.vakKnoppen}>
          <Link className={styles.vakStart} to={gegevens.pagina}>
            Naar {gegevens.kort} →
          </Link>
          <Link className={styles.vakLink} to={`${gegevens.pagina}/planning`}>
            Planning
          </Link>
          <Link className={styles.vakLink} to={`${gegevens.pagina}/slides`}>
            Slides
          </Link>
        </div>
      </div>
    </article>
  );
}

const ALGEMEEN = [
  { titel: 'Inleiding', tekst: 'Wat heb je nodig en hoe gebruik je deze cursus.', to: '/inleiding' },
  { titel: 'Afspraken code', tekst: 'Hoe we code schrijven en benoemen.', to: '/inleiding/afsprakencode' },
  { titel: 'Coding guidelines', tekst: 'Veelgemaakte fouten en hoe het beter kan.', to: '/appendix/coding-guidelines' },
  { titel: 'Visual Studio tips', tekst: 'Sneltoetsen en handige trucs.', to: '/appendix/visual-studio-tips-and-tricks' },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline} wrapperClassName="homepage">
      <HeroSection />
      <main className={styles.main}>
        <section className={styles.vakken}>
          <VakKaart vak="bp" />
          <VakKaart vak="oop" />
        </section>

        <section className={styles.algemeen}>
          <h2 className={styles.algemeenTitel}>Voor beide vakken</h2>
          <div className={styles.algemeenRaster}>
            {ALGEMEEN.map((item) => (
              <Link key={item.to} to={item.to} className={styles.algemeenKaart}>
                <strong>{item.titel}</strong>
                <span>{item.tekst}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
