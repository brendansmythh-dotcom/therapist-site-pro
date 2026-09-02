import { Link } from 'react-router-dom'
import { site } from '../config/site.js'
import FadeIn from '../components/FadeIn.jsx'

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--pro">
        <FadeIn>
          <p className="eyebrow">About</p>
          <h1>{site.about.headline}</h1>
          <p className="page-hero__lead">{site.about.intro}</p>
        </FadeIn>
      </section>

      <section className="section">
        <div className="split split--about">
          <FadeIn>
            <div className="portrait-frame portrait-frame--large">
              <img src={site.about.photo} alt={site.about.photoAlt} />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="prose">
              {site.about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}

              <div className="credentials">
                <h2>Education & credentials</h2>
                <ul>
                  {site.about.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn btn--primary">Get in touch</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section--soft">
        <FadeIn>
          <div className="section-header">
            <p className="eyebrow">Approach</p>
            <h2>{site.work.approach.headline}</h2>
          </div>

          <ul className="approach-list">
            {site.work.approach.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </>
  )
}
