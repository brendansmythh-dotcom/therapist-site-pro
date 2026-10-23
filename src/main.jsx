import { StrictMode, useEffect } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource-variable/dm-sans/wght-italic.css'
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/playfair-display/wght-italic.css'
import './index.css'
import App from './App.jsx'
import { hasFeature } from './lib/features.js'

function Root() {
  useEffect(() => {
    document.documentElement.classList.toggle('features-pro', hasFeature('animations'))
    document.documentElement.classList.add('theme-pro')
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <Root />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
