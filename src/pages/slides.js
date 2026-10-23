import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// De slides staan nu per vak (/bp/slides en /oop/slides). Oude links naar /slides
// komen bij Basis Programmeren uit.
export default function Slides() {
  return <Redirect to={useBaseUrl('/bp/slides')} />;
}
