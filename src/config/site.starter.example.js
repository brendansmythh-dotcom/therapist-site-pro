/**
 * Starter tier reference — copy these values into site.js for a basic client site.
 */
export const starterFeatures = {
  tier: 'starter',
  features: {
    booking: false,
    gallery: false,
    blog: false,
    seo: true,
    analytics: false,
    animations: false,
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ],
}

/**
 * Pro add-on examples — enable only what the client purchased:
 *
 * booking:    set booking.url to Calendly / Jane / SimplePractice link
 * gallery:    replace gallery.images + instagram handle
 * blog:       edit src/config/blog.js with client articles
 * seo:        set siteUrl, meta.description, meta.keywords, update public/sitemap.xml
 * analytics:  add VITE_GA_MEASUREMENT_ID in Vercel
 * animations: scroll fade-ins on sections (no extra setup)
 */
