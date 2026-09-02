import { useEffect, useId, useRef } from 'react'
import { getBookingLabel, getEmbedUrl } from '../../lib/booking.js'

export default function BookingModal({ open, onClose }) {
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const embedUrl = getEmbedUrl()

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="booking-modal" role="presentation" onClick={onClose}>
      <div
        className="booking-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="booking-modal__header">
          <h2 id={titleId}>{getBookingLabel()}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="booking-modal__close"
            onClick={onClose}
            aria-label="Close booking scheduler"
          >
            ×
          </button>
        </div>
        <div className="booking-modal__frame-wrap">
          <iframe
            title={getBookingLabel()}
            src={embedUrl}
            className="booking-modal__frame"
          />
        </div>
      </div>
    </div>
  )
}
