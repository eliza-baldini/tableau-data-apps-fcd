/** Deck identity and its sections, in order. Text is verbatim from the source deck. */
export const meta = {
  title: 'Tableau Data Apps',
  subtitle: '',
  fullTitle: 'Tableau Data Apps FCD',
}

export interface DeckSection {
  id: string
  /** Short label for the top bar tab. */
  tab: string
}

export const sections: DeckSection[] = [
  { id: 'opening', tab: 'Opening' },
  { id: 'problem', tab: 'The Problem' },
  { id: 'layers', tab: 'Governance' },
  { id: 'dataapps', tab: 'Data Apps' },
  { id: 'studio', tab: 'Studio' },
  { id: 'heroku', tab: 'Heroku' },
]
