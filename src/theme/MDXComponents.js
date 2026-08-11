import MDXComponents from '@theme-original/MDXComponents';
import OefeningAssistent from '@site/src/components/OefeningAssistent';

/**
 * Globaal beschikbaar maken in MDX, zodat een oefeningpagina enkel
 *
 *   <OefeningAssistent oefening="H1-Rubbish" hoofdstuk="H1" />
 *
 * nodig heeft, zonder import bovenaan.
 */
export default {
  ...MDXComponents,
  OefeningAssistent,
};
