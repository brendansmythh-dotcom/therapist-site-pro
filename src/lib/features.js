import { site } from '../config/site.js'
import { getBookingUrl as resolveBookingUrl } from './booking.js'

export function hasFeature(name) {
  return Boolean(site.features?.[name])
}

export function getBookingUrl() {
  return resolveBookingUrl()
}

export function isBookingEnabled() {
  return hasFeature('booking') && Boolean(getBookingUrl())
}
