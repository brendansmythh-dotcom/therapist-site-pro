import { site } from '../config/site.js'
import BookingButton from '../components/booking/BookingButton.jsx'
import BookingInline from '../components/booking/BookingInline.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FadeIn from '../components/FadeIn.jsx'
import { getBookingDisplayMode } from '../lib/booking.js'
import { isBookingEnabled } from '../lib/features.js'

export default function Contact() {
  const showInlineBooking = isBookingEnabled() && getBookingDisplayMode() === 'inline'

  return (
    <>
      <section className="page-hero">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <h1>{site.contact.headline}</h1>
          <p className="page-hero__lead">{site.contact.subhead}</p>
          {isBookingEnabled() && !showInlineBooking ? (
            <div className="page-hero__actions">
              <BookingButton />
            </div>
          ) : null}
        </FadeIn>
      </section>

      {showInlineBooking ? <BookingInline /> : null}

      <section className="section">
        <div className="contact-layout">
          <FadeIn>
            <div className="contact-details">
              <div className="contact-block">
                <h2>Email</h2>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </div>

              <div className="contact-block">
                <h2>Phone</h2>
                <a href={`tel:${site.contact.phone.replace(/\D/g, '')}`}>{site.contact.phone}</a>
              </div>

              <div className="contact-block">
                <h2>Office</h2>
                <p>{site.contact.office.split('\n').map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < site.contact.office.split('\n').length - 1 && <br />}
                  </span>
                ))}</p>
              </div>

              <div className="contact-block">
                <h2>Hours</h2>
                <p>{site.contact.hours}</p>
              </div>

              <p className="contact-note">{site.contact.formNote}</p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="contact-form-wrap">
              <h2>Send a message</h2>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
