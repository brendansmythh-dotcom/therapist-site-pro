import { Link } from 'react-router-dom'
import { blogPosts } from '../config/blog.js'
import { site } from '../config/site.js'
import BookingButton from '../components/booking/BookingButton.jsx'
import BlogCard from '../components/BlogCard.jsx'
import FadeIn from '../components/FadeIn.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import HeroPro from '../components/HeroPro.jsx'
import ProHighlights from '../components/ProHighlights.jsx'
import { hasFeature } from '../lib/features.js'

export default function Home() {
  const previewServices = site.work.services.slice(0, 3)

  return (
    <>
      <HeroPro services={previewServices} />

      <ProHighlights />

      <section className="section section--soft">
        <FadeIn>
          <div className="section-header section-header--center">
            <p className="eyebrow">Support for real life</p>
            <h2>Therapy that meets you where you are</h2>
            <p className="section-lead">
              Whether you are feeling stuck, overwhelmed, or simply ready for change,
              we will work together at a pace that feels right for you.
            </p>
          </div>
        </FadeIn>

        <div className="card-grid card-grid--3">
          {previewServices.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <article className="info-card info-card--pro">
                <span className="info-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="section-cta section-cta--center">
          <Link to="/work" className="btn btn--ghost">Explore my work →</Link>
        </div>
      </section>

      {hasFeature('gallery') ? (
        <section className="section section--dark">
          <FadeIn>
            <div className="section-header section-header--center section-header--light">
              <p className="eyebrow">Gallery</p>
              <h2>{site.gallery.headline}</h2>
              <p className="section-lead">{site.gallery.subhead}</p>
            </div>
          </FadeIn>
          <GalleryGrid images={site.gallery.images} limit={3} />
          <div className="section-cta section-cta--center">
            <Link to="/gallery" className="btn btn--ghost btn--ghost-light">View full gallery →</Link>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="split split--about-home">
          <FadeIn delay={120}>
            <div className="portrait-frame portrait-frame--pro">
              <img src={site.about.photo} alt={site.about.photoAlt} />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="eyebrow">About</p>
            <h2>{site.about.headline}</h2>
            <p className="section-lead">{site.about.intro}</p>
            <Link to="/about" className="btn btn--primary">Read my story</Link>
          </FadeIn>
        </div>
      </section>

      {hasFeature('blog') ? (
        <section className="section section--soft">
          <FadeIn>
            <div className="section-header section-header--center">
              <p className="eyebrow">Blog</p>
              <h2>{site.blog.headline}</h2>
              <p className="section-lead">{site.blog.subhead}</p>
            </div>
          </FadeIn>
          <div className="blog-grid blog-grid--preview">
            {blogPosts.slice(0, 2).map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
          <div className="section-cta section-cta--center">
            <Link to="/blog" className="btn btn--ghost">Read all articles →</Link>
          </div>
        </section>
      ) : null}

      <section className="section section--cta">
        <FadeIn>
          <div className="cta-panel cta-panel--pro">
            <p className="cta-panel__eyebrow">Begin your journey</p>
            <h2>Ready to take the first step?</h2>
            <p>Schedule a free 15-minute consultation to see if we are a good fit.</p>
            <BookingButton className="btn btn--primary btn--light" />
          </div>
        </FadeIn>
      </section>
    </>
  )
}
