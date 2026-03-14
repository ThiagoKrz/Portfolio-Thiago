import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.png'

const localImages = {
  proj1,
  proj2,
  proj3,
  game1,
  game2,
  game3,
}

function getProjectImage(project) {
  if (project.image && localImages[project.image]) {
    return localImages[project.image]
  }

  if (project.thumbnail) {
    return `https://img.youtube.com/vi/${project.thumbnail}/hqdefault.jpg`
  }

  return ''
}

function ActionIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8a8.7 8.7 0 0 0-2.75 16.96c.43.08.59-.18.59-.42v-1.47c-2.42.53-2.93-1.02-2.93-1.02-.4-1-.96-1.26-.96-1.26-.79-.54.06-.53.06-.53.88.06 1.34.88 1.34.88.77 1.34 2.04.95 2.53.73.08-.57.31-.95.56-1.17-1.93-.22-3.96-.95-3.96-4.27 0-.94.34-1.7.88-2.3-.09-.22-.38-1.12.08-2.33 0 0 .72-.23 2.36.88a8.3 8.3 0 0 1 4.3 0c1.64-1.11 2.36-.88 2.36-.88.46 1.21.17 2.11.08 2.33.55.6.88 1.36.88 2.3 0 3.33-2.04 4.05-3.98 4.26.31.27.59.8.59 1.62v2.4c0 .23.16.5.59.42A8.7 8.7 0 0 0 12 3.8Z" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.4a2.9 2.9 0 0 0-2.04-2.05C17.16 6 12 6 12 6s-5.16 0-6.96.35A2.9 2.9 0 0 0 3 8.4C2.65 10.2 2.65 12 2.65 12s0 1.8.35 3.6a2.9 2.9 0 0 0 2.04 2.05C6.84 18 12 18 12 18s5.16 0 6.96-.35A2.9 2.9 0 0 0 21 15.6c.35-1.8.35-3.6.35-3.6s0-1.8-.35-3.6Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m10.2 9.5 4.3 2.5-4.3 2.5Z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 12h10M12 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectsPage() {
  const { t } = useSite()
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) return undefined

    window.scrollTo({ top: 0, behavior: 'smooth' })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProject])

  const openProject = (project) => {
    if (project.thumbnail) {
      window.open(project.primaryAction.href, '_blank', 'noopener,noreferrer')
      return
    }

    setActiveProject({
      ...project,
      imageSrc: getProjectImage(project),
    })
  }

  return (
    <motion.section
      className="page-section"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={Smooth}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h1 className="page-title">{t.projects.title}</h1>
      <p className="section-subtitle">{t.projects.subtitle}</p>

      <div className="projects-sections">
        {t.projects.sections.map((section, sectionIndex) => (
          <motion.section
            key={section.title}
            className="projects-group"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...Smooth, delay: sectionIndex * 0.08 }}
            viewport={{ once: true, amount: 0.18 }}
          >
            <h2 className="projects-group-title">{section.title}</h2>

            <div className="projects-showcase-grid">
              {section.projects.map((project, projectIndex) => {
                const imageSrc = getProjectImage(project)
                const hasSecondaryAction = Boolean(project.secondaryAction)
                const hasEnabledSecondaryAction = Boolean(project.secondaryAction?.href)
                const actionsClassName = `project-actions${project.primaryAction && !hasSecondaryAction ? ' project-actions-single' : ''}`

                return (
                  <motion.article
                    key={project.title}
                    className="project-showcase-card"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...Smooth, delay: sectionIndex * 0.08 + projectIndex * 0.06 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <button
                      type="button"
                      className="project-showcase-media"
                      onClick={() => openProject(project)}
                      aria-label={`Abrir detalhes de ${project.title}`}
                    >
                      {imageSrc ? (
                        <img src={imageSrc} alt={project.title} className="project-showcase-image" />
                      ) : (
                        <div className="project-showcase-image project-showcase-image-blank" aria-hidden="true" />
                      )}
                    </button>

                    <div className="project-showcase-body">
                      <div className="project-showcase-copy">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <ul className="project-tech-list">
                          {project.tech.map((item) => (
                            <li key={`${project.title}-${item}`}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={actionsClassName}>
                        <a
                          href={project.primaryAction.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action-btn"
                        >
                          <ActionIcon type={project.primaryAction.type} />
                          <span>{project.primaryAction.label}</span>
                        </a>

                        {hasSecondaryAction ? (
                          hasEnabledSecondaryAction ? (
                            <a
                              href={project.secondaryAction.href}
                              target="_blank"
                              rel="noreferrer"
                              className="project-action-btn project-action-btn-secondary"
                            >
                              <ActionIcon type={project.secondaryAction.type} />
                              <span>{project.secondaryAction.label}</span>
                            </a>
                          ) : (
                            <span
                              className="project-action-btn project-action-btn-secondary project-action-btn-disabled"
                              aria-disabled="true"
                            >
                              <ActionIcon type={project.secondaryAction.type} />
                              <span>{project.secondaryAction.label}</span>
                            </span>
                          )
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </motion.section>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="project-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: Smooth.ease }}
          >
            <button
              type="button"
              className="project-overlay-backdrop"
              aria-label="Fechar detalhes do projeto"
              onClick={() => setActiveProject(null)}
            />

            <motion.article
              className="project-modal"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ ...Smooth, duration: 0.5 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Fechar detalhes do projeto"
              >
                <span aria-hidden="true">x</span>
              </button>

              <div className="project-modal-media">
                {activeProject.imageSrc ? (
                  <img src={activeProject.imageSrc} alt={activeProject.title} className="project-modal-image" />
                ) : (
                  <div className="project-modal-image project-showcase-image-blank" aria-hidden="true" />
                )}
                <div className="project-modal-title-shell">
                  <h2>{activeProject.title}</h2>
                </div>
              </div>

              <div className="project-modal-body">
                <ul className="project-tech-list project-tech-list-modal">
                  {activeProject.tech.map((item) => (
                    <li key={`${activeProject.title}-${item}`}>{item}</li>
                  ))}
                </ul>

                <p className="project-modal-description">
                  {activeProject.longDescription || activeProject.description}
                </p>

                <div className={`project-actions${activeProject.primaryAction && !activeProject.secondaryAction ? ' project-actions-single' : ''}`}>
                  <a
                    href={activeProject.primaryAction.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-btn"
                  >
                    <ActionIcon type={activeProject.primaryAction.type} />
                    <span>{activeProject.primaryAction.label}</span>
                  </a>

                  {activeProject.secondaryAction ? (
                    <a
                      href={activeProject.secondaryAction.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-btn project-action-btn-secondary"
                    >
                      <ActionIcon type={activeProject.secondaryAction.type} />
                      <span>{activeProject.secondaryAction.label}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  )
}

export default ProjectsPage
