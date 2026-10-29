import type { Rich } from './types'

/** Slide 1 · Cover */
export const cover = { title: 'Tableau Data Apps' }

/** Slide 2 · Forward-looking statements (text lives in the deck's layout) */
export const forwardLooking = {
  title: 'Forward-looking statements',
  body: 'This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectation or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce’s reports filed from time to time with the Securities and Exchange Commission, including, but not limited to our ability to consummate the pending acquisition of Informatica on a timely basis or at all; our ability to meet the expectations of our customers; uncertainties regarding Al technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; the pace of change and innovation and our ability to compete in the markets in which we participate; and our ability to maintain and enhance our brands.',
}

/** Slides 3 and 5 · vibe coding → chaos (one shared canvas) */
export const vibe = {
  s3Title: 'Anyone can vibe code a dashboard in minutes…',
  s3Accent: 'vibe code a dashboard',
  s5Title: '…but speed without trust leads to chaos',
  pills: ['Decisions on inaccurate information', 'Governance and security risk', 'Dashboard and app sprawl'],
  callouts: ['Built on raw data instead of trusted semantics', 'Shared with users who don’t have permissions', 'Rebuilt and reshared each week for regular standup'],
}

/** Collage of vibe-coded dashboards (slide 3 layout; positions in Slides EMU, x/y = top-left, sx/sy = scale of a 3,000,000 EMU box). */
export const collage: { src: string; x: number; y: number; sx: number; sy: number; crop: { l?: number; r?: number; t?: number; b?: number } }[] = [
  { src: 'c1904.png', x: 8001000, y: 4045750, sx: 1.8178, sy: 1.2178, crop: { r: 0.25345278, b: 0.13247156 } },
  { src: 'c1905.jpg', x: 8000999, y: 8065275, sx: 2.5013, sy: 0.9619, crop: { b: 0.16331995 } },
  { src: 'c1906.png', x: 16558800, y: 5107275, sx: 0.8653, sy: 0.864, crop: { l: 0.025545996, r: 0.3126406, t: 0.01606388, b: 0.044527948 } },
  { src: 'c1907.png', x: 7984525, y: -133025, sx: 0.8369, sy: 1.2726, crop: { l: 0.027917622, r: 0.20930588, t: 0.09720973, b: 0.0027002096 } },
  { src: 'c1908.png', x: 10858500, y: -138050, sx: 0.8653, sy: 1.2726, crop: { l: 0.022621246, r: 0.097174585, t: 0.072647266, b: 0.029364228 } },
  { src: 'c1909.jpg', x: 13708650, y: 5112075, sx: 0.8653, sy: 0.8608, crop: { l: 0.02236599, r: 0.05341959, t: 0.003167376, b: 0.007027626 } },
  { src: 'c1910.png', x: 13729600, y: -224625, sx: 1.7145, sy: 1.6342, crop: { t: 0.08380567, b: 0.24143046 } },
]

/** Slide 8 · Vibe code anywhere. Stay governed everywhere. */
export const anywhere = {
  title: 'Vibe code anywhere.',
  title2: 'Stay governed everywhere.',
  cards: [
    { title: 'Data Apps', text: 'Get vibe-coded apps onto the platform fast' },
    { title: 'Studio', text: 'Vibe code with the full power of Tableau' },
    { title: 'Knowledge', text: 'Reuse what your business already knows' },
  ],
}

/** Slide 9 · Tableau Data Apps */
export const dataApps = {
  title: 'Tableau Data Apps',
  subtitle: 'Custom analytics built on trusted semantics and hosted in Tableau',
  bullets: [
    'Build conversationally from anywhere',
    'Stay connected to live, governed data and trusted semantics in Tableau',
    'Publish, host, and share seamlessly to Tableau Next, Cloud, and Server',
    'Maintain control with built-in governance, query inspection, and data verification',
  ] as Rich[],
  availability: [
    { where: 'Tableau Cloud & Next', when: 'Beta | Oct ‘26' },
    { where: 'Tableau Cloud, Server & Next', when: 'GA | Nov ‘26' },
  ],
}

/** Slide 12 · Tableau Studio */
export const studio = {
  title: 'Tableau Studio',
  subtitle: 'Vibe code analytics with enterprise trust and governance',
  bullets: [
    'Explore your data through conversational AI',
    'Author on analytics-specific agent skills',
    'Ground in governed data and trusted semantics',
    'Vibe code data apps safely at scale',
  ] as Rich[],
  availability: { where: 'Tableau Cloud & Server', when: 'GA | Nov ‘26' },
}

/** Slide 14 · Tableau Data Apps & Heroku */
export const heroku = {
  title: 'Tableau Data Apps & Heroku',
  subtitle: 'When to use which?',
  columns: [
    {
      name: 'Tableau Data Apps',
      items: [
        '**Managed Hosting:** Deploy into existing Tableau ecosystem',
        '**Governed by default (RLS):** Security and permissions come built in',
        '**Full usage visibility:** Know who’s using what, monitor data refreshes and more',
        '**Build in minutes:** A few prompts, not a few sprints',
        '**No manual refresh required:** Utilize extract schedules',
        '**Composable data sources:** Mix and match data to fit the need',
      ] as Rich[],
    },
    {
      name: 'Heroku',
      items: [
        '**Managed hosting:** Deploy and run your apps without managing infrastructure',
        '**True application capabilities:** Background jobs, write-back, an application database, and more',
        '**Storing inputs:** Best when you need to store user inputs',
        '**Custom back-end logic:** APIs, webhooks, queues, scheduled jobs',
        '**No OOTB:** Heroku uses are unlimited, but functionality is not OOTB',
      ] as Rich[],
    },
  ],
}
