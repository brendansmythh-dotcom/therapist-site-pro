import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../config/site.js'
import { HeroCta } from './booking/BookingButton.jsx'
import './hero-pro.css'

function renderHeadline(headline, italicPhrase) {
  if (!italicPhrase || !headline.includes(italicPhrase)) {
    return headline
  }

  const index = headline.indexOf(italicPhrase)
  const before = headline.slice(0, index)
  const after = headline.slice(index + italicPhrase.length)

  return (
    <>
      {before}
      <em>{italicPhrase}</em>
      {after}
    </>
  )
}

const easeOut = [0.22, 1, 0.36, 1]

export default function HeroPro({ services }) {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay = 0) => (reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay, ease: easeOut },
      })

  const imageReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.85, delay: 0.15, ease: easeOut },
      }

  return (
    <section className="hero hero--pro" aria-label="Introduction">
      <div className="hero--pro__atmosphere" aria-hidden="true">
        <div className="hero--pro__glow" />
        <div className="hero--pro__blob hero--pro__blob--1" />
        <div className="hero--pro__blob hero--pro__blob--2" />
        <div className="hero--pro__grain" />
      </div>

      <div className="hero--pro__inner">
        <motion.div className="hero--pro__col hero--pro__col--copy" {...fadeUp(0)}>
          <div className="hero__content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow__rule" aria-hidden="true" />
              <p className="hero-eyebrow__text">{site.hero.eyebrow}</p>
            </div>

            <h1>{renderHeadline(site.hero.headline, site.hero.headlineItalicPhrase)}</h1>
            <p className="hero__subhead">{site.hero.subhead}</p>

            <div className="hero__actions">
              <HeroCta cta={site.hero.primaryCta} className="btn btn--primary btn--hero" />
              <HeroCta cta={site.hero.secondaryCta} className="btn btn--ghost btn--ghost-light btn--hero" />
            </div>

            {site.hero.trustBar?.length ? (
              <ul className="hero-trust" aria-label="Credentials">
                {site.hero.trustBar.map((item, index) => (
                  <li key={item}>
                    {index > 0 ? <span className="hero-trust__divider" aria-hidden="true" /> : null}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="hero__location">{site.location}</p>
          </div>
        </motion.div>

        <motion.div className="hero--pro__col hero--pro__col--visual" {...imageReveal}>
          <div className="hero-portrait">
            <div className="hero-portrait__offset" aria-hidden="true" />
            <div className="hero-portrait__frame">
              <img src={site.about.photo} alt={site.about.photoAlt} />
            </div>
            <aside className="hero-portrait__card" aria-label="Areas of focus">
              <p className="hero-card__label">Areas of focus</p>
              <ul>
                {services.map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
              <Link to="/work" className="hero-card__link">View all services →</Link>
            </aside>
          </div>
        </motion.div>
      </div>

      <a href="#after-hero" className="hero-scroll-cue" aria-label="Scroll to learn more">
        <span className="hero-scroll-cue__line" aria-hidden="true" />
      </a>
    </section>
  )
}
