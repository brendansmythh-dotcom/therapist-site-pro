import FadeIn from './FadeIn.jsx'

export default function GalleryGrid({ images, limit }) {
  const items = limit ? images.slice(0, limit) : images

  return (
    <div className="gallery-grid">
      {items.map((image, index) => (
        <FadeIn key={image.src} className="gallery-item" delay={index * 80}>
          <figure>
            <img src={image.src} alt={image.alt} loading="lazy" />
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        </FadeIn>
      ))}
    </div>
  )
}
