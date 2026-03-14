import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useSite } from '../context/SiteContext'

function Navbar() {
  const { t, theme, toggleTheme, language, setLanguage } = useSite()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMenus = () => {
    setIsMobileMenuOpen(false)
    setIsLanguageMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand-btn">
        Thiago
      </NavLink>

      <div className="mobile-controls">
        <button
          type="button"
          className="icon-link utility-btn"
          onClick={toggleTheme}
          aria-label={t.nav.themeLabel}
          title={t.nav.themeLabel}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 12.8A8.8 8.8 0 1 1 11.2 4a7 7 0 1 0 8.8 8.8Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                fill="currentColor"
                d="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm0 17.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.5 11.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Zm17 0a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2ZM5.64 4.58a.75.75 0 0 1 1.06 0l1.41 1.41a.75.75 0 0 1-1.06 1.06L5.64 5.64a.75.75 0 0 1 0-1.06Zm12.31 12.31a.75.75 0 0 1 1.06 0l1.41 1.41a.75.75 0 0 1-1.06 1.06l-1.41-1.41a.75.75 0 0 1 0-1.06ZM19.42 4.58a.75.75 0 0 1 0 1.06l-1.41 1.41a.75.75 0 1 1-1.06-1.06l1.41-1.41a.75.75 0 0 1 1.06 0ZM7.05 16.89a.75.75 0 0 1 0 1.06L5.64 19.36a.75.75 0 0 1-1.06-1.06l1.41-1.41a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="icon-link utility-btn mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12.01l-6.3-6.3-1.4 1.41 6.29 6.3-6.3 6.29 1.42 1.41 6.3-6.29 6.29 6.3 1.41-1.42-6.29-6.3 6.3-6.29-1.42-1.41Z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M3 6.5h18v2H3v-2Zm0 4.5h18v2H3v-2Zm0 4.5h18v2H3v-2Z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="nav-right">
        <NavLink to="/" className="nav-link" onClick={closeMenus}>
          {t.nav.home}
        </NavLink>
        <NavLink to="/skills" className="nav-link" onClick={closeMenus}>
          {t.nav.skills}
        </NavLink>
        <NavLink to="/projects" className="nav-link" onClick={closeMenus}>
          {t.nav.projects}
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenus}>
          {t.nav.about}
        </NavLink>

        <a
          href="https://github.com/ThiagoKrz"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-krauzer/"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.32V9h3.42v1.56h.05c.48-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.42v6.33ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
            />
          </svg>
        </a>

        <button
          type="button"
          className="icon-link utility-btn"
          onClick={toggleTheme}
          aria-label={t.nav.themeLabel}
          title={t.nav.themeLabel}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 12.8A8.8 8.8 0 1 1 11.2 4a7 7 0 1 0 8.8 8.8Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                fill="currentColor"
                d="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm0 17.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.5 11.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Zm17 0a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2ZM5.64 4.58a.75.75 0 0 1 1.06 0l1.41 1.41a.75.75 0 0 1-1.06 1.06L5.64 5.64a.75.75 0 0 1 0-1.06Zm12.31 12.31a.75.75 0 0 1 1.06 0l1.41 1.41a.75.75 0 0 1-1.06 1.06l-1.41-1.41a.75.75 0 0 1 0-1.06ZM19.42 4.58a.75.75 0 0 1 0 1.06l-1.41 1.41a.75.75 0 1 1-1.06-1.06l1.41-1.41a.75.75 0 0 1 1.06 0ZM7.05 16.89a.75.75 0 0 1 0 1.06L5.64 19.36a.75.75 0 0 1-1.06-1.06l1.41-1.41a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          )}
        </button>

        <div className="language-switch">
          <button
            type="button"
            className="icon-link utility-btn"
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
            aria-label={t.nav.languageLabel}
            title={t.nav.languageLabel}
          >
            <span
              className={language === 'pt-BR' ? 'flag flag-br' : 'flag flag-us'}
              aria-hidden="true"
            ></span>
          </button>

          {isLanguageMenuOpen ? (
            <div className="lang-menu" role="menu" aria-label={t.nav.languageLabel}>
              <button
                type="button"
                className="lang-option"
                onClick={() => {
                  setLanguage('pt-BR')
                  closeMenus()
                }}
              >
                <span className="flag flag-br" aria-hidden="true"></span>
                PT-BR
              </button>

              <button
                type="button"
                className="lang-option"
                onClick={() => {
                  setLanguage('en')
                  closeMenus()
                }}
              >
                <span className="flag flag-us" aria-hidden="true"></span>
                EN
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="mobile-menu-panel" role="menu" aria-label="Menu mobile">
          <NavLink to="/" className="mobile-menu-link" onClick={closeMenus}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/skills" className="mobile-menu-link" onClick={closeMenus}>
            {t.nav.skills}
          </NavLink>
          <NavLink
            to="/projects"
            className="mobile-menu-link"
            onClick={closeMenus}
          >
            {t.nav.projects}
          </NavLink>
          <NavLink to="/about" className="mobile-menu-link" onClick={closeMenus}>
            {t.nav.about}
          </NavLink>

          <div className="mobile-menu-row">
            <a
              href="https://github.com/ThiagoKrz"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/thiago-krauzer/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.32V9h3.42v1.56h.05c.48-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.42v6.33ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
                />
              </svg>
            </a>
          </div>

          <div className="mobile-language-row">
            <button
              type="button"
              className="lang-option"
              onClick={() => {
                setLanguage('pt-BR')
                closeMenus()
              }}
            >
              <span className="flag flag-br" aria-hidden="true"></span>
              PT-BR
            </button>
            <button
              type="button"
              className="lang-option"
              onClick={() => {
                setLanguage('en')
                closeMenus()
              }}
            >
              <span className="flag flag-us" aria-hidden="true"></span>
              EN
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
