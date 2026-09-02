import { Link } from 'react-router-dom'
import { getBookingLabel, getBookingOption } from '../../lib/booking.js'
import { isBookingEnabled } from '../../lib/features.js'
import { useBooking } from './BookingProvider.jsx'

export default function BookingButton({
  className = 'btn btn--primary',
  children,
  fallbackPath = '/contact',
  bookingOption,
}) {
  const option = bookingOption ? getBookingOption(bookingOption) : null
  const label = children || option?.label || getBookingLabel()
  const { openBooking, displayMode, isBookingEnabled: bookingOn } = useBooking()

  if (!bookingOn) {
    return (
      <Link to={fallbackPath} className={className}>
        {label}
      </Link>
    )
  }

  if (displayMode === 'inline') {
    const hash = bookingOption ? `#booking-${bookingOption}` : '#booking'
    return (
      <Link to={`${fallbackPath}${hash}`} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => openBooking(bookingOption)}
    >
      {label}
    </button>
  )
}

export function HeroCta({ cta, className }) {
  if (cta.useBooking && isBookingEnabled()) {
    return (
      <BookingButton className={className} bookingOption={cta.bookingOption}>
        {cta.label}
      </BookingButton>
    )
  }

  if (cta.path?.startsWith('http')) {
    return (
      <a href={cta.path} className={className} target="_blank" rel="noreferrer">
        {cta.label}
      </a>
    )
  }

  return (
    <Link to={cta.path} className={className}>
      {cta.label}
    </Link>
  )
}
