import MDXComponents from '@theme-original/MDXComponents';
import OefeningAssistent from '@site/src/components/OefeningAssistent';
import DownloadSlot from '@site/src/components/DownloadSlot';

/**
 * Globaal beschikbaar maken in MDX, zodat een oefeningpagina enkel
 *
 *   <OefeningAssistent oefening="H1-Rubbish" hoofdstuk="H1" />
 *   <DownloadSlot hoofdstuk="H1" />
 *
 * nodig heeft, zonder import bovenaan.
 */
export default {
  ...MDXComponents,
  OefeningAssistent,
  DownloadSlot,
};
