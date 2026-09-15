import React, { useCallback, useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';

import { leesConfig } from '../OefeningAssistent/config';
import styles from './styles.module.css';

const OPSLAG_PREFIX = 'oplossing-download:code:';

function leesBewaardeCode(hoofdstuk) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return '';
    return window.localStorage.getItem(OPSLAG_PREFIX + hoofdstuk) ?? '';
  } catch {
    return '';
  }
}

function bewaarCode(hoofdstuk, code) {
  try {
    window.localStorage.setItem(OPSLAG_PREFIX + hoofdstuk, code);
  } catch {
    /* opslag geblokkeerd: dan geldt de code enkel voor deze sessie */
  }
}

/**
 * Downloadknop voor de modeloplossingen van een hoofdstuk, achter een code.
 *
 * De ZIP staat niet in de publieke site maar in Cloudflare KV. De Worker levert hem pas
 * als de code overeenkomt met het secret OPLOSSINGCODE_<hoofdstuk>. Zo geeft de docent een
 * hoofdstuk vrij door de code in de les te noemen.
 *
 * Staat er voor deze site geen Worker ingesteld (bv. de hoofdsite zonder Worker), dan
 * toont het component niets, in plaats van een slot dat nooit opengaat.
 */
export default function DownloadSlot({ hoofdstuk, label }) {
  const isBrowser = useIsBrowser();
  const { siteConfig } = useDocusaurusContext();
  const config = leesConfig(siteConfig);

  const [codeInvoer, setCodeInvoer] = useState('');
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState('');
  const [klaar, setKlaar] = useState(false);

  // Een eerder gebruikte code voorinvullen, maar niet automatisch downloaden.
  useEffect(() => {
    if (!isBrowser) return;
    const bewaard = leesBewaardeCode(hoofdstuk);
    if (bewaard) setCodeInvoer(bewaard);
  }, [isBrowser, hoofdstuk]);

  const download = useCallback(
    async (event) => {
      event.preventDefault();
      const code = codeInvoer.trim();
      if (!code || !config.workerUrl) return;

      setBezig(true);
      setFout('');
      setKlaar(false);
      try {
        const antwoord = await fetch(config.workerUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ actie: 'download', hoofdstuk, code }),
        });
        if (antwoord.status === 403) {
          setFout(
            'Die code klopt niet, of de modeloplossingen van dit hoofdstuk zijn nog niet vrijgegeven.',
          );
          return;
        }
        if (!antwoord.ok) {
          setFout('Er ging iets mis bij het downloaden. Probeer het straks opnieuw.');
          return;
        }
        const bestandsnaam =
          antwoord.headers.get('X-Download-Filename') || `modeloplossingen-${hoofdstuk}.zip`;
        const blob = await antwoord.blob();
        const url = URL.createObjectURL(blob);
        const anker = document.createElement('a');
        anker.href = url;
        anker.download = bestandsnaam;
        document.body.appendChild(anker);
        anker.click();
        anker.remove();
        URL.revokeObjectURL(url);
        bewaarCode(hoofdstuk, code);
        setKlaar(true);
      } catch {
        setFout('Geen verbinding. Zit je online? Probeer het straks opnieuw.');
      } finally {
        setBezig(false);
      }
    },
    [codeInvoer, config.workerUrl, hoofdstuk],
  );

  if (!config.workerUrl) return null;

  if (!isBrowser) {
    return <p className={styles.uitleg}>De download wordt geladen…</p>;
  }

  return (
    <div className={styles.kader}>
      <p className={styles.uitleg}>
        🔒 {label || 'Modeloplossingen van dit hoofdstuk (ZIP)'}. Voer de <strong>code</strong> in
        die je van je docent kreeg. Maak de oefeningen eerst zelf: je leert niets van een
        oplossing die je niet eerst geprobeerd hebt.
      </p>
      <form onSubmit={download} className={styles.rij}>
        <input
          type="text"
          className={styles.invoer}
          value={codeInvoer}
          onChange={(event) => setCodeInvoer(event.target.value)}
          placeholder="Code"
          autoComplete="off"
          spellCheck="false"
          aria-label={`Code voor de modeloplossingen van ${hoofdstuk}`}
          disabled={bezig}
        />
        <button type="submit" className={styles.knop} disabled={bezig || !codeInvoer.trim()}>
          {bezig ? 'Bezig…' : 'Download ZIP'}
        </button>
      </form>
      {klaar && !fout && (
        <p className={styles.klaar} role="status">
          ✓ Download gestart. Kijk in je map met downloads.
        </p>
      )}
      {fout && (
        <p className={styles.fout} role="alert">
          {fout}
        </p>
      )}
    </div>
  );
}
