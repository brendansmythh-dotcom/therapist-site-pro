import { useId } from 'react'
import { getBookingLabel, getEmbedUrl } from '../../lib/booking.js'
import { site } from '../../config/site.js'

export default function BookingInline({ id = 'booking' }) {
  const titleId = useId()
  const embedUrl = getEmbedUrl()

  return (
    <section id={id} className="section section--soft booking-inline" aria-labelledby={titleId}>
      <div className="booking-inline__header">
        <h2 id={titleId}>{site.booking?.inlineHeadline || getBookingLabel()}</h2>
        <p>{site.booking?.inlineSubhead || site.contact.subhead}</p>
      </div>
      <div className="booking-inline__frame-wrap">
        <iframe
          title={getBookingLabel()}
          src={embedUrl}
          className="booking-inline__frame"
          loading="lazy"
        />
      </div>
    </section>
  )
}
