import { useEffect } from 'react'
import { hasFeature } from '../lib/features.js'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function Analytics() {
  useEffect(() => {
    if (!hasFeature('analytics') || !measurementId) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', measurementId, { anonymize_ip: true })

    return () => {
      script.remove()
    }
  }, [])

  return null
}
