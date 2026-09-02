import { useEffect, useId, useRef } from 'react'
import {
  getBookingLabel,
  getBookingOption,
  getBookingOptions,
  getBookingPickerTitle,
  getEmbedUrl,
  hasMultipleBookingOptions,
} from '../../lib/booking.js'

export default function BookingModal({
  open,
  onClose,
  selectedOptionId,
  onSelectOption,
}) {
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const options = getBookingOptions()
  const showPicker = hasMultipleBookingOptions() && !selectedOptionId
  const selectedOption = selectedOptionId ? getBookingOption(selectedOptionId) : null
  const embedUrl = selectedOption ? getEmbedUrl(selectedOption.url) : ''
  const title = showPicker
    ? getBookingPickerTitle()
    : getBookingLabel(selectedOptionId)

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
          <div className="booking-modal__title-wrap">
            {!showPicker && hasMultipleBookingOptions() ? (
              <button
                type="button"
                className="booking-modal__back"
                onClick={() => onSelectOption(null)}
              >
                ← Back
              </button>
            ) : null}
            <h2 id={titleId}>{title}</h2>
          </div>
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

        {showPicker ? (
          <div className="booking-modal__picker">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                className="booking-picker-card"
                onClick={() => onSelectOption(option.id)}
              >
                <span className="booking-picker-card__top">
                  <span className="booking-picker-card__label">{option.label}</span>
                  {option.duration ? (
                    <span className="booking-picker-card__duration">{option.duration}</span>
                  ) : null}
                </span>
                {option.description ? (
                  <span className="booking-picker-card__description">{option.description}</span>
                ) : null}
              </button>
            ))}
          </div>
        ) : (
          <div className="booking-modal__frame-wrap">
            <iframe
              title={title}
              src={embedUrl}
              className="booking-modal__frame"
            />
          </div>
        )}
      </div>
    </div>
  )
}
