import MDXComponents from '@theme-original/MDXComponents';
import OefeningAssistent from '@site/src/components/OefeningAssistent';
import DownloadSlot from '@site/src/components/DownloadSlot';
import LaboSlides from '@site/src/components/LaboSlides';
import HoofdstukInhoud from '@site/src/components/HoofdstukInhoud';
import { VakOverzicht, VakPlanning, VakSlides, VakOefeningen, Leerdoelen } from '@site/src/components/Vak';

/**
 * Globaal beschikbaar maken in MDX, zodat een oefeningpagina enkel
 *
 *   <OefeningAssistent oefening="H1-Rubbish" hoofdstuk="H1" />
 *   <DownloadSlot hoofdstuk="H1" />
 *   <LaboSlides vak="bp" hoofdstuk={5} />
 *   <HoofdstukInhoud vak="bp" hoofdstuk={5} />
 *   <VakOverzicht vak="bp" />, <VakPlanning />, <VakSlides />, <VakOefeningen />
 *   <Leerdoelen>- ...</Leerdoelen>
 *
 * nodig heeft, zonder import bovenaan.
 */
export default {
  ...MDXComponents,
  OefeningAssistent,
  DownloadSlot,
  LaboSlides,
  HoofdstukInhoud,
  VakOverzicht,
  VakPlanning,
  VakSlides,
  VakOefeningen,
  Leerdoelen,
};
