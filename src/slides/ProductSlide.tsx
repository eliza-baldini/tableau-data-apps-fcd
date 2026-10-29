import { dataApps, studio } from '../content/deck'
import { Build } from '../deck/Build'
import { Cropped, asset } from '../components/ui/Cropped'

function Bullets({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((b, i) => (
        <Build key={b} at={1} delay={i * 0.12} x={-20} y={0}>
          <li className="mb-7 leading-[1.25]">{b}</li>
        </Build>
      ))}
    </ul>
  )
}

/** Slide 9 · Tableau Data Apps. Builds: 0 title + screenshot · 1 bullets (staggered) + availability. */
export function DataAppsSlide() {
  const c = dataApps
  return (
    <div className="relative h-full text-white">
      <div className="absolute top-[62px] left-[62px] w-[690px]">
        <Build y={16}>
          <h2 className="display text-[64px] text-gold">{c.title}</h2>
          <p className="mt-2 text-[36px] leading-[1.18] font-semibold">{c.subtitle}</p>
        </Build>
        <Bullets items={c.bullets} className="mt-9 text-[28px]" />
      </div>
      <div className="absolute bottom-[56px] left-[62px] space-y-4">
          {c.availability.map((a, i) => (
            <Build key={a.where} at={1} delay={0.6 + i * 0.12} y={12}>
            <div className="flex w-[640px] items-center justify-between rounded-xl bg-white px-6 py-3 text-[24px] text-navy-900">
              <span>{a.where}</span>
              <span className="font-semibold text-link">{a.when}</span>
            </div>
            </Build>
          ))}
      </div>
      <Build x={60} y={0} scale={0.97} duration={1} className="absolute top-[200px] right-[60px] w-[753px]">
        <div className="rounded-[34px] bg-white p-3 shadow-[0_30px_80px_-30px_rgba(0,10,80,0.7)]">
          <Cropped src="dataapp-still.jpg" crop={{ l: 0.1108, r: 0.1107, t: 0.0163, b: 0.0458 }} className="aspect-[753/460] rounded-[24px]" />
        </div>
      </Build>
    </div>
  )
}

/** Slide 12 · Tableau Studio. Builds: 0 title + laptop · 1 bullets, skills, agent, availability. */
export function StudioSlide() {
  const c = studio
  return (
    <div className="relative h-full text-white">
      <div aria-hidden className="absolute inset-y-0 right-0 left-[700px] rounded-l-[140px] bg-wash" />
      <div className="absolute top-[82px] left-[62px] w-[620px]">
        <Build y={16}>
          <h2 className="display text-[60px] text-gold">{c.title}</h2>
          <p className="mt-2 text-[36px] leading-[1.18] font-semibold">{c.subtitle}</p>
        </Build>
        <Bullets items={c.bullets} className="mt-9 text-[28px]" />
      </div>
      <Build at={1} delay={0.6} y={12} className="absolute bottom-[56px] left-[62px]">
        <div className="flex w-[560px] items-center justify-between rounded-xl bg-navy-900 px-6 py-3 text-[24px]">
          <span>{c.availability.where}</span>
          <span className="font-semibold">{c.availability.when}</span>
        </div>
      </Build>
      <Build x={60} y={0} scale={0.97} duration={1} className="absolute inset-0">
        <img src={asset('s13524.png')} alt="" className="absolute rounded-xl shadow-2xl" style={{ left: 860, top: 275, width: 654 }} />
      </Build>
      <Build at={1} delay={0.2} x={60} y={0} scale={0.97} className="absolute inset-0">
        <img src={asset('s13525.png')} alt="" className="absolute rounded-xl shadow-2xl" style={{ left: 795, top: 470, width: 207 }} />
      </Build>
      <Build at={1} delay={0.4} x={60} y={0} scale={0.97} className="absolute inset-0">
        <img src={asset('s13526.png')} alt="" className="absolute rounded-xl shadow-2xl" style={{ left: 1344, top: 220, width: 232 }} />
      </Build>
    </div>
  )
}
