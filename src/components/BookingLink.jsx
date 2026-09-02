import { Link } from 'react-router-dom'
import { site } from '../config/site.js'
import { getBookingUrl, isBookingEnabled } from '../lib/features.js'

export default function BookingLink({ className = 'btn btn--primary', children, fallbackPath = '/contact' }) {
  const label = children || site.booking?.label || 'Book a Session'

  if (isBookingEnabled()) {
    return (
      <a
        href={getBookingUrl()}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={fallbackPath} className={className}>
      {label}
    </Link>
  )
}

export function HeroCta({ cta, className }) {
  if (cta.useBooking && isBookingEnabled()) {
    return <BookingLink className={className}>{cta.label}</BookingLink>
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
