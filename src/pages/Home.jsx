import { Link } from 'react-router-dom'
import { blogPosts } from '../config/blog.js'
import { site } from '../config/site.js'
import BookingLink, { HeroCta } from '../components/BookingLink.jsx'
import BlogCard from '../components/BlogCard.jsx'
import FadeIn from '../components/FadeIn.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { hasFeature } from '../lib/features.js'

export default function Home() {
  const previewServices = site.work.services.slice(0, 3)

  return (
    <>
      <section className="hero">
        <FadeIn className="hero__content">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.headline}</h1>
          <p className="hero__subhead">{site.hero.subhead}</p>
          <div className="hero__actions">
            <HeroCta cta={site.hero.primaryCta} className="btn btn--primary" />
            <HeroCta cta={site.hero.secondaryCta} className="btn btn--ghost" />
          </div>
          <p className="hero__location">{site.location}</p>
        </FadeIn>

        <FadeIn className="hero__aside" delay={120}>
          <div className="hero-card">
            <p className="hero-card__label">Areas of focus</p>
            <ul>
              {previewServices.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
            <Link to="/work" className="hero-card__link">View all services →</Link>
          </div>
        </FadeIn>
      </section>

      <section className="section section--soft">
        <FadeIn>
          <div className="section-header">
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
              <article className="info-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/work" className="btn btn--ghost">Explore my work →</Link>
        </div>
      </section>

      {hasFeature('gallery') ? (
        <section className="section">
          <FadeIn>
            <div className="section-header">
              <p className="eyebrow">Gallery</p>
              <h2>{site.gallery.headline}</h2>
              <p className="section-lead">{site.gallery.subhead}</p>
            </div>
          </FadeIn>
          <GalleryGrid images={site.gallery.images} limit={3} />
          <div className="section-cta">
            <Link to="/gallery" className="btn btn--ghost">View full gallery →</Link>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="split">
          <FadeIn>
            <p className="eyebrow">About</p>
            <h2>{site.about.headline}</h2>
            <p className="section-lead">{site.about.intro}</p>
            <Link to="/about" className="btn btn--primary">Read my story</Link>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="portrait-frame">
              <img src={site.about.photo} alt={site.about.photoAlt} />
            </div>
          </FadeIn>
        </div>
      </section>

      {hasFeature('blog') ? (
        <section className="section section--soft">
          <FadeIn>
            <div className="section-header">
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
          <div className="section-cta">
            <Link to="/blog" className="btn btn--ghost">Read all articles →</Link>
          </div>
        </section>
      ) : null}

      <section className="section section--cta">
        <FadeIn>
          <div className="cta-panel">
            <h2>Ready to take the first step?</h2>
            <p>Schedule a free 15-minute consultation to see if we are a good fit.</p>
            <BookingLink className="btn btn--primary btn--light" />
          </div>
        </FadeIn>
      </section>
    </>
  )
}
