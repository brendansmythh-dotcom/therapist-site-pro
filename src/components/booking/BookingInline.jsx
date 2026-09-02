import { useEffect, useId, useState } from 'react'
import {
  getBookingLabel,
  getBookingOptions,
  getEmbedUrl,
  hasMultipleBookingOptions,
} from '../../lib/booking.js'
import { site } from '../../config/site.js'

export default function BookingInline({ id = 'booking' }) {
  const titleId = useId()
  const options = getBookingOptions()
  const multiple = hasMultipleBookingOptions()
  const [activeOptionId, setActiveOptionId] = useState(options[0]?.id || null)
  const activeOption = options.find((option) => option.id === activeOptionId) || options[0]
  const sectionId = multiple && activeOption ? `${id}-${activeOption.id}` : id

  useEffect(() => {
    if (!multiple || typeof window === 'undefined') return

    const hash = window.location.hash.replace('#', '')
    if (!hash.startsWith('booking')) return

    const optionId = hash.replace(/^booking-?/, '') || options[0]?.id
    if (options.some((option) => option.id === optionId)) {
      setActiveOptionId(optionId)
    }
  }, [multiple, options])

  useEffect(() => {
    if (!multiple || !activeOptionId || typeof window === 'undefined') return

    const nextHash = `#booking-${activeOptionId}`
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', `${window.location.pathname}${nextHash}`)
    }
  }, [activeOptionId, multiple])

  if (!activeOption) return null

  return (
    <section id={sectionId} className="section section--soft booking-inline" aria-labelledby={titleId}>
      <div className="booking-inline__header">
        <h2 id={titleId}>{site.booking?.inlineHeadline || getBookingLabel()}</h2>
        <p>{site.booking?.inlineSubhead || site.contact.subhead}</p>
      </div>

      {multiple ? (
        <div className="booking-inline__tabs" role="tablist" aria-label="Appointment type">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={activeOptionId === option.id}
              className={`booking-inline__tab${activeOptionId === option.id ? ' booking-inline__tab--active' : ''}`}
              onClick={() => setActiveOptionId(option.id)}
            >
              <span>{option.label}</span>
              {option.duration ? (
                <span className="booking-inline__tab-duration">{option.duration}</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}

      <div className="booking-inline__frame-wrap">
        <iframe
          key={activeOption.id}
          title={activeOption.label}
          src={getEmbedUrl(activeOption.url)}
          className="booking-inline__frame"
          loading="lazy"
        />
      </div>
    </section>
  )
}
