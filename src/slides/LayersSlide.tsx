import { motion } from 'motion/react'
import { groups, layers, legend, type LayersSlideContent, type Status } from '../content/layers'
import { Build, useBuildTransition } from '../deck/Build'
import { RichText } from '../components/ui/RichText'

const tile: Record<Status, { bg: string; dot: string; glyph: string }> = {
  ok: { bg: '#dff5e8', dot: '#2e7d4f', glyph: '✓' },
  partial: { bg: '#fff1d9', dot: '#e08a00', glyph: '!' },
  no: { bg: '#fde2e4', dot: '#e8201c', glyph: '✕' },
}
const legendDot = ['#2e7d4f', '#e08a00', '#e8201c']

/**
 * Slides 6, 7, 11, 13 · the 18-layer governance grid.
 * Builds: 0 header + score · 1 tiles (staggered). Slides 6 and 7 share one canvas, so tiles recolor in place.
 */
export function LayersSlide({ content: c }: { content: LayersSlideContent }) {
  const tileTransition = useBuildTransition(1, 0, 0.7)
  // row index within each column
  const rowIn: number[] = []
  const counts = [0, 0, 0, 0, 0]
  layers.forEach((l, i) => (rowIn[i] = counts[l.group]++))

  return (
    <div className="relative flex h-full flex-col px-[60px] pt-[56px] pb-10 text-white">
      <header className="flex items-start justify-between gap-10 px-2">
        <div className="min-w-0">
          <Build y={20}>
            <h2 className="display max-w-[1100px] text-[54px] leading-[1.06]">
              <RichText text={c.title} accentClass="text-gold" />
            </h2>
          </Build>
          <Build delay={0.1} y={14}>
            <p className="mt-3 max-w-[1130px] text-[22px] leading-snug text-white/90">{c.subtitle}</p>
          </Build>
        </div>
        <Build delay={0.15} y={14} className="shrink-0">
          <div className="w-[280px] rounded-2xl bg-white px-6 py-5 text-center text-navy-900 shadow-[0_20px_50px_-20px_rgba(0,10,80,0.6)]">
            <div className="display text-[46px] leading-none">{c.scoreBig}</div>
            <div className="mt-1.5 text-[18px]">{c.scoreSmall}</div>
          </div>
        </Build>
      </header>

      <div className="mt-8 grid flex-1 grid-cols-5 gap-x-[28px] px-1">
        {groups.map((g, gi) => (
          <div key={g}>
            <Build y={10}>
              <h3 className="mb-3 px-2 text-[24px] font-semibold">{g}</h3>
            </Build>
            <div className="flex flex-col gap-4">
              {layers.map((l, i) => {
                if (l.group !== gi) return null
                const st = c.status[i]
                const note = c.notes?.[i]
                return (
                  <Build key={l.name} at={1} y={18} delay={(gi * 4 + rowIn[i]) * 0.025} duration={0.6}>
                    <motion.div
                      className="relative flex h-[104px] flex-col justify-center rounded-2xl px-4 text-navy-900"
                      initial={false}
                      animate={{ backgroundColor: tile[st].bg }}
                      transition={tileTransition}
                    >
                      <div className="pr-10 text-[21px] leading-tight font-semibold">{l.name}</div>
                      {note && <div className="mt-1 pr-6 text-[16px] leading-tight text-navy-900/75">{note}</div>}
                      <motion.span
                        className="absolute top-2.5 right-2.5 grid size-9 place-items-center rounded-full text-[18px] font-bold text-white"
                        initial={false}
                        animate={{ backgroundColor: tile[st].dot }}
                        transition={tileTransition}
                      >
                        {tile[st].glyph}
                      </motion.span>
                    </motion.div>
                  </Build>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Build at={1} delay={0.3} y={8}>
        <div className="flex items-center gap-12 px-3 pt-2 text-[20px]">
          {legend.map((l, i) => (
            <span key={l} className="flex items-center gap-3">
              <span className="size-7 rounded-full" style={{ background: legendDot[i] }} />
              {l}
            </span>
          ))}
        </div>
      </Build>
    </div>
  )
}
