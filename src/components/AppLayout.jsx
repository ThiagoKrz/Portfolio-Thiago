import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useSite } from '../context/SiteContext'
import Navbar from './Navbar'

function AppLayout() {
  const { language } = useSite()
  const location = useLocation()

  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${language}-${location.pathname}`}
            className="language-fade-shell"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default AppLayout
