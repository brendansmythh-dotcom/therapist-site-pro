import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getVisibleNav, site } from '../config/site.js'
import Analytics from './Analytics.jsx'
import BookingLink from './BookingLink.jsx'
import Seo from './Seo.jsx'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navItems = getVisibleNav()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Seo pathname={location.pathname} />
      <Analytics />

      <a href="#main" className="skip-link">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="site-logo">
            <span className="site-logo__name">{site.name}</span>
            <span className="site-logo__title">{site.title}</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>

          <nav id="site-nav" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}>
            <ul className="site-nav__list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <BookingLink className="btn btn--primary btn--nav" />
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <p className="footer-name">{site.name}</p>
            <p className="footer-title">{site.title}</p>
            <p className="footer-location">{site.location}</p>
            {site.instagram?.url ? (
              <a href={site.instagram.url} className="footer-instagram" target="_blank" rel="noreferrer">
                {site.instagram.handle}
              </a>
            ) : null}
          </div>

          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer-disclaimer">{site.footer.disclaimer}</p>
        <p className="footer-copy">{site.footer.copyright}</p>
      </footer>
    </>
  )
}
