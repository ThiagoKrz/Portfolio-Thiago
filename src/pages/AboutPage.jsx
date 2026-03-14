import { motion as Motion } from 'framer-motion'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'
import homeImage from '../assets/home_image.png'

function PublicLinkIcon({ href, label }) {
  const normalized = `${href} ${label}`.toLowerCase()

  if (normalized.includes('linkedin')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.58 9.65h2.72v8.77H5.58V9.65Zm4.43 0h2.61v1.2h.04c.36-.69 1.26-1.42 2.6-1.42 2.77 0 3.28 1.83 3.28 4.2v4.79h-2.72v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.24v4.32h-2.78V9.65Z"/>
      </svg>
    )
  }

  if (normalized.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 3.5a8.5 8.5 0 0 0-2.69 16.57c.42.08.57-.18.57-.41V18.3c-2.32.5-2.81-.98-2.81-.98-.38-.95-.92-1.2-.92-1.2-.76-.52.06-.51.06-.51.84.06 1.31.86 1.31.86.75 1.31 1.97.93 2.45.71.08-.55.3-.92.54-1.14-1.89-.21-3.84-.93-3.84-4.14 0-.91.33-1.65.85-2.22-.09-.21-.37-1.08.08-2.27 0 0 .7-.22 2.29.84a8.05 8.05 0 0 1 4.18 0c1.59-1.06 2.29-.84 2.29-.84.45 1.19.17 2.06.08 2.27.52.57.85 1.31.85 2.22 0 3.22-1.97 3.92-3.85 4.13.3.26.57.77.57 1.57v2.34c0 .22.15.49.57.41A8.5 8.5 0 0 0 12 3.5Z"/>
      </svg>
    )
  }

  return null
}

function AboutPage() {
  const { t } = useSite()
  const resumeSectionId = 'about-resume-section'

  const scrollToResume = () => {
    const target = document.getElementById(resumeSectionId)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="about-page">
      <Motion.section
        className="about-full-section about-hero-full"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={Smooth}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="about-hero-grid">
          <Motion.div
            className="about-photo-tall-frame"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...Smooth, delay: 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <img
              className="about-profile-photo"
              src={homeImage}
              alt={t.about.photoAlt}
            />
          </Motion.div>

          <Motion.div
            className="about-hero-copy"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...Smooth, delay: 0.14 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="about-hero-eyebrow">{t.about.eyebrow}</p>
            <h1 className="page-title">{t.about.title}</h1>
            <p className="about-hero-bio">{t.about.bio}</p>
          </Motion.div>
        </div>

      </Motion.section>

      <button
        type="button"
        className="about-scroll-hint about-scroll-hint-outside"
        onClick={scrollToResume}
        aria-label={t.about.scrollHintLabel}
      >
        <span className="about-scroll-hint-line" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Motion.section
        id={resumeSectionId}
        className="about-full-section about-resume-full"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={Smooth}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="about-resume-title">{t.about.resumeTitle}</h2>
        <p className="section-subtitle">{t.about.resumeSubtitle}</p>

        <div className="about-resume-grid">
          {t.about.resumeSections.map((section) => (
            <Motion.article
              key={section.title}
              className="about-resume-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={Smooth}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{section.title}</h3>
              <ul className="about-resume-list">
                {section.items.map((item) => (
                  <li key={`${section.title}-${item}`}>{item}</li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </div>

        {t.about.publicLinks?.length ? (
          <div className="about-public-links" aria-label="Links públicos">
            {t.about.publicLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="about-public-link">
                <PublicLinkIcon href={link.href} label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </Motion.section>
    </div>
  )
}

export default AboutPage
