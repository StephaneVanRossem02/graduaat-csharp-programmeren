/**
 * Instellingen voor de oefening-assistent.
 *
 * Alles hier kan per site overschreven worden in docusaurus.config.js:
 *
 *   customFields: {
 *     oefeningAssistent: { model: 'gemini-3.5-flash', vragenPerDag: 20 },
 *   },
 */

export const DEFAULT_CONFIG = {
  /**
   * Modelnaam. Stabiele Flash-modellen op het moment van schrijven:
   * gemini-3.6-flash, gemini-3.5-flash, gemini-2.5-flash,
   * gemini-3.5-flash-lite, gemini-3.1-flash-lite, gemini-2.5-flash-lite.
   * Flash-lite is het goedkoopst en heeft de ruimste gratis limieten.
   */
  model: 'gemini-3.5-flash-lite',

  apiBasis: 'https://generativelanguage.googleapis.com/v1beta',

  /**
   * Bewust hoger dan de ~400 die je zou verwachten voor korte hints.
   *
   * Gemini 3.x-modellen denken na voor ze antwoorden, en die denk-tokens tellen
   * mee als output-tokens. Bij een harde limiet van 400 kan het model zijn budget
   * opgebruiken tijdens het denken en een LEEG antwoord teruggeven.
   * De hints blijven kort omdat de system prompt dat oplegt, niet omdat de
   * token-limiet ze afkapt. Die limiet is enkel een noodrem.
   */
  maxOutputTokens: 1000,

  /**
   * Denkniveau ('minimal' | 'low' | 'medium' | 'high'), of null om het veld
   * helemaal niet mee te sturen.
   *
   * Standaard null: niet elk model kent dit veld, en een onbekend veld levert
   * een 400 op. Als jouw model het wel ondersteunt, zet dit op 'minimal' voor
   * snellere en goedkopere antwoorden.
   */
  thinkingLevel: null,

  temperature: 0.4,

  /** Maximum aantal tekens code dat een student in een keer mag plakken. */
  maxCodeTekens: 4000,

  /** Maximum lengte van de vraag zelf. */
  maxVraagTekens: 1000,

  /** Dagquota per student, geteld in localStorage. */
  vragenPerDag: 30,

  /**
   * Aantal eerdere beurten dat meegestuurd wordt als context.
   * Hoger = beter geheugen, maar meer tokens per vraag.
   */
  maxBeurtenGeheugen: 6,
};

/** Voegt de overrides uit docusaurus.config.js samen met de standaardwaarden. */
export function leesConfig(siteConfig) {
  return { ...DEFAULT_CONFIG, ...(siteConfig?.customFields?.oefeningAssistent ?? {}) };
}
