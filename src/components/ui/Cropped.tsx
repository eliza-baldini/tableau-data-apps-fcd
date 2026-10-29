import type { CSSProperties } from 'react'

export interface Crop {
  l?: number
  r?: number
  t?: number
  b?: number
}

const asset = (name: string) => `${import.meta.env.BASE_URL}img/${name}`

/** An image shown through a Slides-style crop (fractions trimmed from each edge) that fills its box. */
export function Cropped({ src, crop = {}, className = '', style, alt = '' }: { src: string; crop?: Crop; className?: string; style?: CSSProperties; alt?: string }) {
  const { l = 0, r = 0, t = 0, b = 0 } = crop
  const fw = 1 - l - r
  const fh = 1 - t - b
  return (
    <div className={`overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`} style={style}>
      <img
        src={asset(src)}
        alt={alt}
        draggable={false}
        className="absolute max-w-none"
        style={{ width: `${100 / fw}%`, height: `${100 / fh}%`, left: `${(-l / fw) * 100}%`, top: `${(-t / fh) * 100}%` }}
      />
    </div>
  )
}

export { asset }
