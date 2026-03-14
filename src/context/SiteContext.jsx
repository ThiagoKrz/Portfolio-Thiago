import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import content from '../i18n/content'

const SiteContext = createContext(null)

function SiteProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'pt-BR'
  })

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
      language,
      setLanguage,
      t: content[language],
    }
  }, [theme, language])

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

function useSite() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within SiteProvider')
  }
  return context
}

export { SiteProvider, useSite }
