import { site } from '../config/site.js'
import GalleryGrid from '../components/GalleryGrid.jsx'
import FadeIn from '../components/FadeIn.jsx'
import { hasFeature } from '../lib/features.js'

export default function Gallery() {
  const showInstagram = hasFeature('gallery') && site.instagram?.url

  return (
    <>
      <section className="page-hero">
        <FadeIn>
          <p className="eyebrow">Gallery</p>
          <h1>{site.gallery.headline}</h1>
          <p className="page-hero__lead">{site.gallery.subhead}</p>
          {showInstagram ? (
            <a href={site.instagram.url} className="instagram-link" target="_blank" rel="noreferrer">
              Follow {site.instagram.handle} on Instagram →
            </a>
          ) : null}
        </FadeIn>
      </section>

      <section className="section">
        <GalleryGrid images={site.gallery.images} />
      </section>
    </>
  )
}
