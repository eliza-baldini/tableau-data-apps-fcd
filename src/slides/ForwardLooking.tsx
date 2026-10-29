import { forwardLooking as c } from '../content/deck'
import { Build } from '../deck/Build'
import { TableauMark } from '../components/ui/TableauMark'

/** Slide 2 · Forward-looking statements. Builds: 0 title · 1 statement card. */
export function ForwardLooking() {
  return (
    <div className="relative flex h-full flex-col px-24 pt-[72px] pb-16 text-white">
      <Build y={16}>
        <div className="flex items-center justify-between">
          <h2 className="display text-[54px]">{c.title}</h2>
          <div className="flex items-center gap-3 text-white">
            <TableauMark size={30} className="text-white" />
            <span className="text-[18px] font-semibold tracking-[0.3em] lowercase">tableau</span>
          </div>
        </div>
      </Build>
      <Build at={1} y={24} className="mt-10 flex-1">
        <div className="rounded-3xl bg-white px-14 py-12 shadow-[0_30px_80px_-30px_rgba(0,10,80,0.6)]">
          <p className="text-[22px] leading-[1.55] text-navy-900">{c.body}</p>
        </div>
      </Build>
    </div>
  )
}
