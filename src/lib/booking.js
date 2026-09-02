import { site } from '../config/site.js'

function getLegacyBookingUrl() {
  return (
    site.booking?.defaultBookingUrl
    || site.booking?.bookingUrl
    || site.booking?.url
    || site.contact?.bookingUrl
    || ''
  )
}

function resolveOptionUrl(option) {
  return option?.url || getLegacyBookingUrl()
}

export function getBookingOptions() {
  const options = site.booking?.options
  if (Array.isArray(options) && options.length > 0) {
    return options
      .map((option) => ({
        ...option,
        url: resolveOptionUrl(option),
      }))
      .filter((option) => option.url)
  }

  const legacy = getLegacyBookingUrl()
  if (legacy) {
    return [
      {
        id: 'default',
        label: site.booking?.label || 'Book a Session',
        url: legacy,
      },
    ]
  }

  return []
}

export function getBookingOption(optionId) {
  if (!optionId) return null
  return getBookingOptions().find((option) => option.id === optionId) || null
}

export function getBookingUrl(optionId) {
  if (optionId) {
    return getBookingOption(optionId)?.url || ''
  }

  const options = getBookingOptions()
  return options[0]?.url || getLegacyBookingUrl()
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

export function getBookingLabel(optionId) {
  if (optionId) {
    const option = getBookingOption(optionId)
    if (option?.label) return option.label
  }

  return site.booking?.label || 'Book a Session'
}

export function getBookingPickerTitle() {
  return site.booking?.modalPickerTitle || 'What would you like to book?'
}

export function hasMultipleBookingOptions() {
  const urls = new Set(getBookingOptions().map((option) => option.url))
  return urls.size > 1
}
