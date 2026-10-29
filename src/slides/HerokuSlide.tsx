import { heroku as c } from '../content/deck'
import { Build } from '../deck/Build'
import { RichText } from '../components/ui/RichText'
import { TableauMark } from '../components/ui/TableauMark'

/** Slide 14 · Tableau Data Apps & Heroku. Builds: 0 title · 1 left card · 2 right card. */
export function HerokuSlide() {
  return (
    <div className="relative flex h-full flex-col px-[72px] pt-[60px] pb-14 text-navy-900">
      <Build y={20}>
        <h2 className="display text-[64px] leading-[1.02]">{c.title}</h2>
        <p className="mt-2 text-[34px] leading-tight">{c.subtitle}</p>
      </Build>
      <div className="mt-8 grid min-h-0 flex-1 grid-cols-2 gap-[56px]">
        {c.columns.map((col, i) => (
          <Build key={col.name} at={i + 1} y={30} className="relative min-h-0 pt-6">
            <span className="absolute top-0 left-2 z-10 grid size-[88px] place-items-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(0,30,91,0.3)]">
              {i === 0 ? (
                <TableauMark size={54} className="text-royal" />
              ) : (
                <span className="grid size-[62px] place-items-center rounded-xl bg-[#79589f] text-[40px] font-bold text-white">h</span>
              )}
            </span>
            <article className="h-full rounded-[64px] bg-white px-14 pt-9 pb-8">
              <h3 className="text-center text-[34px] font-semibold">{col.name}</h3>
              <ul className="mt-5 space-y-2.5 text-[27px] leading-[1.27]">
                {col.items.map((it, j) => (
                  <Build key={it} at={i + 1} delay={0.25 + j * 0.1} x={-16} y={0} duration={0.7}>
                  <li className="flex gap-4">
                    <span className="mt-[0.62em] size-2.5 shrink-0 rounded-full bg-navy-900" />
                    <span>
                      <RichText text={it} accentClass="" />
                    </span>
                  </li>
                  </Build>
                ))}
              </ul>
            </article>
          </Build>
        ))}
      </div>
    </div>
  )
}
