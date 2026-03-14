import { motion } from 'framer-motion'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'

function ProjectsPage() {
  const { t } = useSite()

  return (
    <motion.section
      className="section page-section"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={Smooth}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h1 className="page-title">{t.projects.title}</h1>
      <p className="section-subtitle">{t.projects.subtitle}</p>

      <div className="cards-grid">
        {t.projects.sections.map((section, index) => (
          <motion.article
            key={section.title}
            className="project-card skill-card"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...Smooth, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <h3>{section.title}</h3>
            <ul className="info-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsPage
