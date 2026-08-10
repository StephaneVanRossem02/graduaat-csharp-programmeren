import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroLabel}>Graduaat Programmeren — AP Hogeschool</p>
        <h1 className={styles.heroTitle}>Programmeren &amp; OOP</h1>
        <p className={styles.heroSub}>
          Alle cursusinhoud voor <strong>Programming Principles</strong> en{' '}
          <strong>Object-Oriented Programming</strong> op één plaats.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/semester-1-programming-principles/h1-werken-met-visual-studio">
            Semester 1 — Programming Principles
          </Link>
          <Link className={styles.btnSecondary} to="/semester-2-oop/h8-klassen-en-objecten">
            Semester 2 — OOP
          </Link>
        </div>
      </div>
    </header>
  );
}

function CardGrid() {
  const cards = [
    {
      title: 'Inleiding',
      description: 'Benodigdheden, afspraken en hoe je de cursus gebruikt.',
      to: '/inleiding/benodigdheden',
      emoji: '📖',
    },
    {
      title: 'Semester 1 — Programming Principles',
      description: 'Variabelen, datatypes, beslissingen, loops, methoden, arrays en meer.',
      to: '/semester-1-programming-principles/h1-werken-met-visual-studio',
      badge: '1',
    },
    {
      title: 'Semester 2 — OOP',
      description: 'Klassen, objecten, overerving, interfaces, generics, testing en meer.',
      to: '/semester-2-oop/h8-klassen-en-objecten',
      badge: '2',
    },
    {
      title: 'Appendices',
      description: 'Extra materiaal, all-in projecten en verdiepende onderwerpen.',
      to: '/semester-2-appendix/compositie-en-aggregatie',
      emoji: '📎',
    },
  ];

  return (
    <section className={styles.cardSection}>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <Link key={card.to} className={styles.card} to={card.to}>
            {card.badge
              ? <span className={styles.cardBadge}>{card.badge}</span>
              : <span className={styles.cardEmoji}>{card.emoji}</span>
            }
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDesc}>{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HeroSection />
      <main>
        <CardGrid />
      </main>
    </Layout>
  );
}
