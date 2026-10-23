import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, site, blogPosts, hasFeature } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)

const routes = ['/', '/about', '/work', '/contact']
if (hasFeature('gallery')) routes.push('/gallery')
if (hasFeature('blog')) {
  routes.push('/blog', ...blogPosts.map((post) => `/blog/${post.slug}`))
}

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

function pageTitle(pathname) {
  if (pathname === '/') return `${site.name} — ${site.title}`
  const navItem = site.nav.find((item) => item.path === pathname)
  if (navItem) return `${navItem.label} — ${site.name}`
  const post = blogPosts.find((item) => pathname === `/blog/${item.slug}`)
  if (post) return `${post.title} — ${site.name}`
  return site.name
}

const assets = await readdir(join(distDir, 'assets'))
const preloadFonts = [
  'playfair-display-latin-wght-normal',
  'dm-sans-latin-wght-normal',
]
  .map((prefix) => assets.find((file) => file.startsWith(prefix) && file.endsWith('.woff2')))
  .filter(Boolean)
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin>`)
  .join('\n  ')

const htmlClasses = ['theme-pro', hasFeature('animations') ? 'features-pro' : null]
  .filter(Boolean)
  .join(' ')

const template = (await readFile(join(distDir, 'index.html'), 'utf8'))
  .replace(/<html lang="en"[^>]*>/, `<html lang="en" class="${htmlClasses}">`)
  .replace('</title>', `</title>\n  ${preloadFonts}`)

await writeFile(join(distDir, 'spa.html'), template)

for (const pathname of routes) {
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(pageTitle(pathname))}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${render(pathname)}</div>`)

  const outDir = pathname === '/' ? distDir : join(distDir, pathname)
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'index.html'), html)
}

await rm(serverDir, { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages: ${routes.join(', ')}`)
