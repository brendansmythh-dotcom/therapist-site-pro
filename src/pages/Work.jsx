import { site } from '../config/site.js'
import BookingLink from '../components/BookingLink.jsx'
import FadeIn from '../components/FadeIn.jsx'

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <FadeIn>
          <p className="eyebrow">Work</p>
          <h1>{site.work.headline}</h1>
          <p className="page-hero__lead">{site.work.subhead}</p>
        </FadeIn>
      </section>

      <section className="section">
        <div className="card-grid card-grid--2">
          {site.work.services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 80}>
              <article className="service-card">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="split split--work">
          <FadeIn>
            <p className="eyebrow">Approach</p>
            <h2>{site.work.approach.headline}</h2>
            <ul className="approach-list approach-list--compact">
              {site.work.approach.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="session-card">
              <h2>{site.work.sessionInfo.headline}</h2>
              <dl className="session-details">
                {site.work.sessionInfo.items.map((item) => (
                  <div key={item.label} className="session-details__row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section--cta">
        <FadeIn>
          <div className="cta-panel">
            <h2>Not sure where to start?</h2>
            <p>A brief consultation can help us figure out the best path forward together.</p>
            <BookingLink className="btn btn--primary btn--light" />
          </div>
        </FadeIn>
      </section>
    </>
  )
}
