import { Link } from 'react-router-dom'
import { site } from '../config/site.js'
import { HeroCta } from './booking/BookingButton.jsx'
import FadeIn from './FadeIn.jsx'

export default function HeroPro({ services }) {
  return (
    <section className="hero hero--pro">
      <div className="hero--pro__inner">
        <div className="hero--pro__col hero--pro__col--copy">
          <FadeIn>
            <div className="hero__content">
              <p className="eyebrow">{site.hero.eyebrow}</p>
              <h1>{site.hero.headline}</h1>
              <p className="hero__subhead">{site.hero.subhead}</p>
              <div className="hero__actions">
                <HeroCta cta={site.hero.primaryCta} className="btn btn--primary" />
                <HeroCta cta={site.hero.secondaryCta} className="btn btn--ghost btn--ghost-light" />
              </div>
              <p className="hero__location">{site.location}</p>
            </div>
          </FadeIn>
        </div>

        <div className="hero--pro__col hero--pro__col--visual">
          <div className="hero--pro__visual-bg" aria-hidden="true" />
          <FadeIn delay={120}>
            <div className="hero-portrait">
              <div className="hero-portrait__frame">
                <img src={site.about.photo} alt={site.about.photoAlt} />
                <span className="hero-portrait__accent" aria-hidden="true" />
              </div>
              <div className="hero-portrait__card">
                <p className="hero-card__label">Areas of focus</p>
                <ul>
                  {services.map((service) => (
                    <li key={service.title}>{service.title}</li>
                  ))}
                </ul>
                <Link to="/work" className="hero-card__link">View all services →</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
