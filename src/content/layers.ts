export type Status = 'ok' | 'partial' | 'no'

export const groups = ['Hosting', 'Data', 'Semantics', 'Access', 'Experience'] as const

/** The 18 governance layers, in column order (column = group index). */
export const layers: { group: number; name: string }[] = [
  { group: 0, name: 'Network access' },
  { group: 0, name: 'Uptime & scaling' },
  { group: 0, name: 'Patching' },
  { group: 0, name: 'Compliance' },
  { group: 1, name: 'Secure connections' },
  { group: 1, name: 'Pipeline history' },
  { group: 1, name: 'Lineage & impact' },
  { group: 2, name: 'Certified data' },
  { group: 2, name: 'Shared logic' },
  { group: 2, name: 'Data quality' },
  { group: 3, name: 'SSO & sign-in' },
  { group: 3, name: 'Permissions' },
  { group: 3, name: 'Row-level security' },
  { group: 3, name: 'Audit logging' },
  { group: 4, name: 'Ownership' },
  { group: 4, name: 'Discoverability' },
  { group: 4, name: 'Subscriptions' },
  { group: 4, name: 'Consistent UX' },
]

export const legend = ['Covered', 'Partial', 'Not covered']

export interface LayersSlideContent {
  title: string
  subtitle: string
  scoreBig: string
  scoreSmall: string
  status: Status[]
  /** Optional one-line note under a tile's name (same order as layers). */
  notes?: string[]
}

const all = (s: Status): Status[] => layers.map(() => s)

/** Slide 6 · Tableau content inherits 18 layers */
export const inherits18: LayersSlideContent = {
  title: 'Tableau content inherits [[18 layers]]',
  subtitle: 'Governance built and hardened over 20 years. Everything published to Tableau gets all 18 by default.',
  scoreBig: '18 of 18',
  scoreSmall: 'covered',
  status: all('ok'),
}

/** Slide 7 · A vibe-coded app starts with none of them */
export const vibeNone: LayersSlideContent = {
  title: 'A vibe-coded app starts with [[none of them]]',
  subtitle: 'Every builder has to solve each layer alone, and most don’t.',
  scoreBig: '0 of 18',
  scoreSmall: 'covered',
  status: all('no'),
  notes: [
    'Public URL or someone’s VPN',
    'Down until the builder notices',
    'Libraries go unpatched',
    'No certified hosting',
    'Credentials in app code',
    'Transforms run ad hoc',
    'No view of what breaks',
    'Built from exports',
    'Revenue defined per app',
    'Stale looks like fresh',
    'Shared links, homegrown logins',
    'Anyone with the link sees all',
    'One account sees every row',
    'No record of who saw what',
    'Orphaned when builder leaves',
    'Found by link, then rebuilt',
    'No alerts or mobile',
    'Every app looks different',
  ],
}

/** Slide 11 · Data Apps covers half the stack on day one */
export const dataAppsHalf: LayersSlideContent = {
  title: 'Data Apps covers [[half the stack]] on day one',
  subtitle: 'Hosting, sign-in, permissions, audit and ownership come with Tableau. Business logic still lives in the app’s code.',
  scoreBig: '9 of 18',
  scoreSmall: 'covered · 7 partial',
  // order: Network, Uptime, Patching, Compliance | Secure, Pipeline, Lineage | Certified, Shared, Quality | SSO, Perms, RLS, Audit | Owner, Discover, Subs, UX
  status: ['ok', 'ok', 'partial', 'ok', 'ok', 'partial', 'partial', 'partial', 'no', 'partial', 'ok', 'ok', 'partial', 'ok', 'ok', 'ok', 'partial', 'no'],
}

/** Slide 13 · Studio apps inherit 17 of 18 layers */
export const studio17: LayersSlideContent = {
  title: 'Studio apps inherit [[17 of 18 layers]]',
  subtitle: 'Built on Tableau’s semantic layer, security model and viz engine. Review custom extensions for consistent UX.',
  scoreBig: '17 of 18',
  scoreSmall: 'covered · 1 partial',
  status: [...all('ok').slice(0, 17), 'partial'],
}
