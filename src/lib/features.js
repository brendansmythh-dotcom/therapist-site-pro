import { site } from '../config/site.js'

export function hasFeature(name) {
  return Boolean(site.features?.[name])
}

export function getBookingUrl() {
  return site.booking?.url || site.contact.bookingUrl || ''
}

export function isBookingEnabled() {
  return hasFeature('booking') && Boolean(getBookingUrl())
}
