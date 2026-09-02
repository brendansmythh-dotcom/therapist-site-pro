import { Link } from 'react-router-dom'
import { getBookingLabel } from '../../lib/booking.js'
import { isBookingEnabled } from '../../lib/features.js'
import { useBooking } from './BookingProvider.jsx'

export default function BookingButton({
  className = 'btn btn--primary',
  children,
  fallbackPath = '/contact',
}) {
  const label = children || getBookingLabel()
  const { openBooking, displayMode, isBookingEnabled: bookingOn } = useBooking()

  if (!bookingOn) {
    return (
      <Link to={fallbackPath} className={className}>
        {label}
      </Link>
    )
  }

  if (displayMode === 'inline') {
    return (
      <Link to={`${fallbackPath}#booking`} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <button type="button" className={className} onClick={openBooking}>
      {label}
    </button>
  )
}

export function HeroCta({ cta, className }) {
  if (cta.useBooking && isBookingEnabled()) {
    return <BookingButton className={className}>{cta.label}</BookingButton>
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
