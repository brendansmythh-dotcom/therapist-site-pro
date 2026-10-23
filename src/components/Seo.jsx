import { site, getVisibleNav } from '../config/site.js'
import { hasFeature } from '../lib/features.js'

function getPageTitle(pathname) {
  if (pathname === '/') return `${site.name} — ${site.title}`

  const navItem = getVisibleNav().find((item) => item.path === pathname)
  if (navItem) return `${navItem.label} — ${site.name}`

  if (pathname.startsWith('/blog/')) return `Article — ${site.name}`

  return site.name
}

function getDescription(pathname) {
  if (pathname === '/about') return site.about.intro
  if (pathname === '/work') return site.work.subhead
  if (pathname === '/gallery') return site.gallery.subhead
  if (pathname === '/blog') return site.blog.subhead
  if (pathname === '/contact') return site.contact.subhead
  return site.meta.description
}

export default function Seo({ pathname = '/' }) {
  if (!hasFeature('seo')) return null

  const title = getPageTitle(pathname)
  const description = getDescription(pathname)
  const url = `${site.siteUrl.replace(/\/$/, '')}${pathname === '/' ? '' : pathname}`
  const image = `${site.siteUrl.replace(/\/$/, '')}${site.meta.ogImage}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.meta.description,
    url: site.siteUrl,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.office.split('\n')[0],
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    areaServed: site.location,
    image: image,
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {site.meta.keywords ? <meta name="keywords" content={site.meta.keywords} /> : null}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  )
}
