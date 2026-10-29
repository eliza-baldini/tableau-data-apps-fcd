import type { ComponentType } from 'react'
import { dataAppsHalf, inherits18, studio17, vibeNone } from '../content/layers'
import { sections } from '../content/navigation'
import { ForwardLooking } from '../slides/ForwardLooking'
import { HerokuSlide } from '../slides/HerokuSlide'
import { LayersSlide } from '../slides/LayersSlide'
import { AnywhereSlide } from '../slides/AnywhereSlide'
import { Opening } from '../slides/Opening'
import { DataAppsSlide, StudioSlide } from '../slides/ProductSlide'
import { VibeSlide } from '../slides/VibeSlide'

/** Design size of every slide; the stage scales it to fit the screen. */
export const CANVAS_W = 1600
export const CANVAS_H = 900

export type Surface = 'paper' | 'navy' | 'blue' | 'sky'

/** Slide background, also used to fill the letterbox around the canvas. */
export const surfaceBg: Record<Surface, string> = {
  paper: '#f5f9ff',
  sky: '#cfe9fe',
  navy: '#000f33',
  blue: 'linear-gradient(160deg,#0418a8 0%,#0a2fd0 55%,#0418a8 100%)',
}

export interface SlideDef {
  id: string
  /** Position in the app. */
  number: number
  title: string
  /** Section tab this slide belongs to. */
  chapter: string
  /** Number of build states (1 = no builds). */
  steps: number
  /**
   * Milliseconds to wait before each automatic build: pace[0] is the wait after the slide
   * arrives before build 1, pace[1] before build 2, and so on. Falls back to DEFAULT_PACE.
   */
  pace?: number[]
  surface: Surface
  /**
   * Consecutive slides with the same group share one canvas: moving between them keeps the
   * component mounted (no slide transition) and only its props change, so it can build on itself.
   */
  group?: string
  props?: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- each slide pairs Component with its own props
  Component: ComponentType<any>
}

export const with_ = <P extends object>(C: ComponentType<P>, props: P): ComponentType => () => <C {...props} />

type Entry = Omit<SlideDef, 'number' | 'chapter'>

/**
 * Slides per deck section, in deck order. Each entry: id (also the URL hash), title, steps (build states,
 * 1 = none), pace (ms before each auto-build), surface, Component.
 *
 * Slides that build on one diagram share a `group` and one Component with different `props`:
 * moving between them keeps the canvas mounted, so only the changes animate. Example:
 *   { id: 'arch-today', group: 'arch', Component: Architecture, props: { stage: 'today' }, ... },
 *   { id: 'arch-roadmap', group: 'arch', Component: Architecture, props: { stage: 'roadmap' }, ... },
 * Variants of one template that should transition normally use with_(Component, props) instead.
 */
const bySection: Record<string, Entry[]> = {
  opening: [
    { id: 'cover', title: 'Tableau Data Apps', steps: 1, surface: 'blue', Component: Opening },
    { id: 'forward-looking', title: 'Forward-looking statements', steps: 2, pace: [500], surface: 'blue', Component: ForwardLooking },
  ],
  problem: [
    { id: 'vibe-dashboard', title: 'Anyone can vibe code a dashboard in minutes…', group: 'vibe', steps: 1, surface: 'blue', Component: VibeSlide, props: { stage: 'intro' } },
    { id: 'vibe-chaos', title: '…but speed without trust leads to chaos', group: 'vibe', steps: 4, pace: [900, 700, 700], surface: 'blue', Component: VibeSlide, props: { stage: 'chaos' } },
  ],
  layers: [
    { id: 'inherits-18', title: 'Tableau content inherits 18 layers', group: 'layers-a', steps: 2, pace: [700], surface: 'blue', Component: LayersSlide, props: { content: inherits18 } },
    { id: 'vibe-none', title: 'A vibe-coded app starts with none of them', group: 'layers-a', steps: 2, pace: [700], surface: 'blue', Component: LayersSlide, props: { content: vibeNone } },
  ],
  dataapps: [
    { id: 'anywhere', title: 'Vibe code anywhere. Stay governed everywhere.', steps: 4, pace: [500, 500, 500], surface: 'sky', Component: AnywhereSlide },
    { id: 'data-apps', title: 'Tableau Data Apps', steps: 6, pace: [500, 450, 450, 450, 450], surface: 'blue', Component: DataAppsSlide },
    { id: 'half-stack', title: 'Data Apps covers half the stack on day one', steps: 2, pace: [700], surface: 'blue', Component: LayersSlide, props: { content: dataAppsHalf } },
  ],
  studio: [
    { id: 'studio', title: 'Tableau Studio', steps: 6, pace: [500, 450, 450, 450, 450], surface: 'blue', Component: StudioSlide },
    { id: 'studio-17', title: 'Studio apps inherit 17 of 18 layers', steps: 2, pace: [700], surface: 'blue', Component: LayersSlide, props: { content: studio17 } },
  ],
  heroku: [{ id: 'heroku', title: 'Tableau Data Apps & Heroku', steps: 3, pace: [600, 700], surface: 'sky', Component: HerokuSlide }],
}

export const slides: SlideDef[] = sections
  .flatMap((sec) => (bySection[sec.id] ?? []).map((s) => ({ ...s, chapter: sec.id })))
  .map((s, i) => ({ ...s, number: i + 1 }))

/** Tabs for the top bar: one per deck section, pointing at its first slide. */
export const sectionTabs = sections.map((s) => ({ id: s.id, label: s.tab, first: slides.findIndex((sl) => sl.chapter === s.id) }))

const DEFAULT_PACE = 600

/** Multiplier on every slide's pacing: below 1 is faster, above 1 slower. */
export const PACE_SCALE = 1

/** Delay before advancing from `step` to `step + 1` on slide `index`. */
export function buildDelay(index: number, step: number) {
  return (slides[index].pace?.[step] ?? DEFAULT_PACE) * PACE_SCALE
}
