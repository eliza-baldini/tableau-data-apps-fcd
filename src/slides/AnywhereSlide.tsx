import { anywhere as c } from '../content/deck'
import { Build } from '../deck/Build'
import { Cropped } from '../components/ui/Cropped'

const asset = (n: string) => `${import.meta.env.BASE_URL}img/${n}`

function CardArt({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="h-full overflow-hidden rounded-xl bg-[#262624] p-0">
        <Cropped src="dataapp-still.jpg" crop={{ l: 0.1108, r: 0.1107, t: 0.0163, b: 0.0458 }} className="h-full w-full" />
      </div>
    )
  if (i === 1)
    return (
      <div className="relative h-full">
        <img src={asset('k10554.png')} alt="" className="absolute right-0 bottom-3 w-[88%] rounded-lg shadow-lg" />
        <img src={asset('k10555.png')} alt="" className="absolute top-0 left-4 w-[34%] rounded-lg shadow-lg" />
        <img src={asset('k10556.png')} alt="" className="absolute right-2 bottom-0 w-[36%] rounded-lg shadow-lg" />
      </div>
    )
  return <Cropped src="k10553.png" crop={{ l: 0.40344805 }} className="h-full w-full" />
}

/** Slide 8 · Vibe code anywhere. Stay governed everywhere. Builds: 0 title · 1–3 cards. */
export function AnywhereSlide() {
  return (
    <div className="relative flex h-full flex-col px-[75px] pt-[58px] pb-14">
      <Build y={20}>
        <h2 className="display text-[64px] leading-[1.06] text-navy-900">
          {c.title}
          <br />
          <span className="text-link">{c.title2}</span>
        </h2>
      </Build>
      <div className="mt-9 grid min-h-0 flex-1 grid-cols-3 gap-[46px]">
        {c.cards.map((card, i) => (
          <Build key={card.title} at={i + 1} y={30} className="min-h-0">
            <article className="flex h-full flex-col rounded-[32px] bg-white/90 p-8">
              <Build at={i + 1} delay={0.15} y={16} scale={0.97} className="min-h-0 flex-1">
                <CardArt i={i} />
              </Build>
              <Build at={i + 1} delay={0.3} y={12}>
                <h3 className="mt-6 text-[36px] font-semibold text-navy-900">{card.title}</h3>
              </Build>
              <Build at={i + 1} delay={0.4} y={12}>
                <p className="mt-2 text-[30px] leading-[1.25] text-navy-900">{card.text}</p>
              </Build>
            </article>
          </Build>
        ))}
      </div>
    </div>
  )
}
