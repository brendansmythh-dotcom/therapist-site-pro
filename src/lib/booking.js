import { site } from '../config/site.js'

export function getBookingUrl() {
  return site.booking?.bookingUrl || site.booking?.url || site.contact?.bookingUrl || ''
}

export function getBookingDisplayMode() {
  return site.booking?.bookingDisplayMode === 'inline' ? 'inline' : 'modal'
}

export function getBookingProvider(url = getBookingUrl()) {
  if (url.includes('calendly.com')) return 'calendly'
  if (url.includes('cal.com')) return 'calcom'
  return 'unknown'
}

export function getEmbedUrl(url = getBookingUrl()) {
  const base = url.split('?')[0].replace(/\/$/, '')
  const provider = getBookingProvider(base)

  if (provider === 'calendly') {
    const domain = typeof window !== 'undefined'
      ? window.location.hostname
      : new URL(site.siteUrl || 'https://example.com').hostname

    const params = new URLSearchParams({
      embed_domain: domain,
      embed_type: 'Inline',
      hide_gdpr_banner: '1',
      background_color: '1a2332',
      text_color: 'f5f0e8',
      primary_color: 'b87d4b',
    })

    return `${base}?${params.toString()}`
  }

  if (provider === 'calcom') {
    const params = new URLSearchParams({ embed: 'true', theme: 'light' })
    return `${base}?${params.toString()}`
  }

  return base
}

export function getBookingLabel() {
  return site.booking?.label || 'Book a Session'
}
