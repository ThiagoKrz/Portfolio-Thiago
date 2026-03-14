import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'

function HomePage() {
  const { t } = useSite()
  const [roleIndex, setRoleIndex] = useState(0)
  const roleTimeoutRef = useRef(null)
  const rotatingRoles = t.home.rotatingRoles

  useEffect(() => {
    setRoleIndex(0)
  }, [rotatingRoles])

  useEffect(() => {
    const interval = setInterval(() => {
      roleTimeoutRef.current = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length)
      }, 430)
    }, 4600)

    return () => {
      clearInterval(interval)
      clearTimeout(roleTimeoutRef.current)
    }
  }, [rotatingRoles.length])

  const currentRole = rotatingRoles[roleIndex]

  return (
    <motion.header
      className="home-hero"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={Smooth}
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        className="home-copy"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.12 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="home-name">Thiago Krauzer</p>

        <div className="home-title-block" role="heading" aria-level={2}>
          <h1 className="home-role-main">{t.home.primaryRole}</h1>

          <div className="home-role-line">
            <span className="home-plus">+</span>
            <span className="home-rotator" aria-live="polite">
              <motion.span
                key={`sweep-${roleIndex}`}
                className="home-rotator-sweep"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                animate={{
                  scaleX: [0, 1, 0],
                  transformOrigin: ['left', 'left', 'right'],
                }}
                transition={{ duration: 0.9, times: [0, 0.5, 1], ease: Smooth.ease }}
              />

              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="home-rotator-word"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: Smooth.ease }}
                >
                  {currentRole}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>

        <div className="actions">
          <Link to="/projects" className="btn btn-primary">
            {t.home.ctaProjects}
          </Link>
          <Link to="/about" className="btn btn-ghost">
            {t.home.ctaBio}
          </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default HomePage
