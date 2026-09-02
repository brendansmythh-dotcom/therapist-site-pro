import { site } from '../config/site.js'
import { hasFeature } from '../lib/features.js'

const highlights = [
  { label: 'Online booking', feature: 'booking' },
  { label: 'Photo gallery', feature: 'gallery' },
  { label: 'Blog & resources', feature: 'blog' },
  { label: 'SEO optimized', feature: 'seo' },
]

export default function ProHighlights() {
  const items = highlights.filter((item) => hasFeature(item.feature))

  if (!items.length) return null

  return (
    <section className="pro-highlights" aria-label="Premium site features">
      <ul>
        {items.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>
    </section>
  )
}
