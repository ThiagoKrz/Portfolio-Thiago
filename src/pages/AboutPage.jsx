import { motion } from 'framer-motion'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'
import homeImage from '../assets/home_image.png'

function AboutPage() {
  const { t } = useSite()

  return (
    <div className="about-page">
      <motion.section
        className="section about-intro"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={Smooth}
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div
          className="photo-frame"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...Smooth, delay: 0.08 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <img
            className="profile-photo"
            src={homeImage}
            alt={t.about.photoAlt}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...Smooth, delay: 0.14 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h1 className="page-title">{t.about.title}</h1>
          <p>{t.about.bio}</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="section resume-section"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={Smooth}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2>{t.about.resumeTitle}</h2>
        <p className="section-subtitle">{t.about.resumeSubtitle}</p>

        <motion.div
          className="resume-sheet"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...Smooth, delay: 0.08 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          {t.about.resumeParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default AboutPage
