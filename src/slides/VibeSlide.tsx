import { AnimatePresence, motion } from 'motion/react'
import { collage, vibe as c } from '../content/deck'
import { Build, useBuildTransition } from '../deck/Build'
import { Cropped, asset } from '../components/ui/Cropped'
import { RichText } from '../components/ui/RichText'

const px = (emu: number) => (emu * 1600) / 18288000
const BOX = 3_000_000

/** Callout bubbles on the chaos slide: EMU position, icon and icon placement. */
const bubbles = [
  { x: 9100551, y: 3333056, icon: 'alert.png', ix: 11051378, iy: 2554088, iw: 800_000, flip: true },
  { x: 13203984, y: 4639962, icon: 'caution.png', ix: 12622750, iy: 4472455, iw: 1_160_000 },
  { x: 10698850, y: 7566125, icon: 'alert-sm.png', ix: 10045266, iy: 7604684, iw: 950_000 },
]

/**
 * Slides 3 and 5 · one shared canvas.
 * stage "intro": builds 0 title + collage. stage "chaos": 0 headline · 1–3 pill + matching callout.
 */
export function VibeSlide({ stage }: { stage: 'intro' | 'chaos' }) {
  const chaos = stage === 'chaos'
  const dimTransition = useBuildTransition(0, 0, 1)
  return (
    <div className="relative h-full overflow-hidden text-white">
      <Build y={0} duration={1.2} className="absolute inset-0">
        <motion.div className="absolute inset-0" initial={false} animate={{ opacity: chaos ? 0.55 : 1, filter: chaos ? 'saturate(0.25) brightness(0.9)' : 'saturate(1) brightness(1)' }} transition={dimTransition}>
          {collage.map((it) => (
            <Cropped
              key={it.src}
              src={it.src}
              crop={it.crop}
              className="absolute rounded-xl shadow-[0_20px_50px_-20px_rgba(0,10,80,0.6)]"
              style={{ left: px(it.x), top: px(it.y), width: px(BOX * it.sx), height: px(BOX * it.sy) }}
            />
          ))}
        </motion.div>
      </Build>

      <div className="absolute left-[75px] w-[600px]" style={{ top: chaos ? 211 : 300 }}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={stage}
            className="display text-[66px] leading-[1.08]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
          >
            <RichText text={chaos ? '…but speed without trust leads to [[chaos|red]]' : 'Anyone can [[vibe code a dashboard|gold]] in minutes…'} />
          </motion.h2>
        </AnimatePresence>
      </div>

      {chaos && (
        <>
          <div className="absolute left-[75px] w-[513px]" style={{ top: 505 }}>
            {c.pills.map((p, i) => (
              <Build key={p} at={i + 1} y={24} className="mb-[18px]">
                <div className="grid h-[83px] place-items-center rounded-2xl bg-gradient-to-b from-[#e8201c] to-[#9c0f10] px-4 text-center text-[26px] font-semibold ring-2 ring-white/70">{p}</div>
              </Build>
            ))}
          </div>
          {bubbles.map((b, i) => (
            <Build key={c.callouts[i]} at={i + 1} y={16} scale={0.94} className="absolute inset-0 pointer-events-none">
              <div
                className="absolute flex items-center rounded-full bg-gradient-to-b from-[#d9efff] to-[#a9d8ff] px-8 py-3 text-center text-[21px] leading-tight font-medium text-navy-900 shadow-[0_10px_30px_-10px_rgba(0,20,100,0.6)] ring-1 ring-white/80"
                style={{ left: px(b.x), top: px(b.y), width: px(3_745_000), height: px(767_000) }}
              >
                {c.callouts[i]}
              </div>
              <img src={asset(b.icon)} alt="" className="absolute" style={{ left: px(b.ix), top: px(b.iy), width: px(b.iw), transform: b.flip ? 'scaleX(-1)' : undefined }} />
            </Build>
          ))}
        </>
      )}
    </div>
  )
}
