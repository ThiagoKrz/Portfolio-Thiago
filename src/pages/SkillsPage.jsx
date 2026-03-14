import { motion as Motion } from 'framer-motion'
import { useState } from 'react'
import Smooth from '../animations/Smooth'
import { useSite } from '../context/SiteContext'

const skillIcons = [
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8 4 12l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16 8 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 4-4 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9.5h8M8 13h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.5 19V22M10.5 22h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 9.2h6.2M11.6 9.2c0 4.5-2.7 6.6-2.7 6.6M10.1 12.8h4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 11v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
]

function TechIcon({ type }) {
  const icons = {
    react: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(-60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.2 9h7.6M11 9v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15.8 14.4c.4.8 1.8 1 2.4.1.7-1.2-1.4-1.4-1.9-2.3-.5-.9.4-1.8 1.5-1.7.7 0 1.2.3 1.5.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    vite: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 7 4-4.8 13.8H9.8L5 7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m12 7-2.2 4h2.6l-1.8 6 4.1-6h-2.6z" fill="currentColor" />
      </svg>
    ),
    angular: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4.7 5.6l1.1 9.7L12 21l6.2-5.7 1.1-9.7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m12 7-3.1 8.5h1.8l.7-2h3.1l.7 2h1.8zM12.8 12h-1.6L12 9.8z" fill="currentColor" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 10c1.1-2 2.3-2.8 3.9-2.8 2.5 0 2.8 2.3 4.1 2.3 1 0 1.7-.5 2.6-1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 14c1.1-2 2.3-2.8 3.9-2.8 2.5 0 2.8 2.3 4.1 2.3 1 0 1.7-.5 2.6-1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    html: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.4 3.8h13.2l-1.2 13.9L12 20.1l-5.4-2.4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 8.1h6M12 8.1v8.1M9.8 12.2h4.4" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
        <path d="M15 15.6h1" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    ),
    css: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h14l-1.3 15.5L12 21l-5.7-2.5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 8.2H8.5l.2 2.8h6.3l-.4 4.4-2.7 1.1-2.6-1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    node: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 7 4v10l-7 4-7-4V7z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.2 9.2v5.6M10.2 9.2l3.5 5.6V9.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6.5h5.6c1.8 0 2.9 1.1 2.9 2.8v2.1H9.8c-1.5 0-2.4.8-2.4 2.2V16c0 1.4.9 2.2 2.4 2.2h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 17.5H10.4c-1.8 0-2.9-1.1-2.9-2.8v-2.1h6.7c1.5 0 2.4-.8 2.4-2.2V8c0-1.4-.9-2.2-2.4-2.2h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6.8" rx="6.7" ry="2.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.3 6.8v10.4c0 1.5 3 2.8 6.7 2.8s6.7-1.3 6.7-2.8V6.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.3 12c0 1.5 3 2.8 6.7 2.8s6.7-1.3 6.7-2.8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8 4 12l3 4M17 8l3 4-3 4M14.5 6 9.5 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 8h4M12 8v8h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="9" width="3" height="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <rect x="8.5" y="9" width="3" height="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="9" width="3" height="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 14h10.8c1.9 0 3.6-1.1 4.2-2.8.7.6 1.3.8 2 .8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    dotnet: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 12h1.6a1.6 1.6 0 1 0 0-3.2H8v6.4h1.9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2 8.8v6.4M16.8 8.8v6.4M13.2 12h3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    csharp: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.3" y="4.3" width="15.4" height="15.4" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.3 8.9a3.2 3.2 0 1 0 0 6.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.1 10h4.1M16.15 7.95v4.1M17.6 7.95v4.1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    reverseEngineering: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.2 6.4 7.6 9l2.6 2.6M13.8 6.4 16.4 9l-2.6 2.6M12 5v10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.2 17.5h13.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tooling: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5a3.3 3.3 0 0 1 4.3 4.3l-2 2-2.3-2.3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.6 10.9 4.5 15a2 2 0 0 0 2.8 2.8l4.1-4.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    troubleshooting: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.2" cy="10.2" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m13.7 13.7 4.3 4.3M10.2 8.2v2.3M10.2 12.8h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 12a7.5 7.5 0 1 1 15 0v3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="13.5" width="3.5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="17.5" y="13.5" width="3.5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    management: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h5M15.8 14.8l1.3 1.3 2.4-2.7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    planning: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 3.8v2.6M16 3.8v2.6M4 9.2h16M8 13h3M8 16h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    autonomy: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m12 12 4-4M12 12v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 12h16M12 4c2.4 2.2 2.4 13.8 0 16M12 4c-2.4 2.2-2.4 13.8 0 16" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    language: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6h6M9 6v12M6 12h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 17c1.7-1.5 2.8-3.4 3.4-5.8M12.8 11.2h7.4M16.5 11.2c0 3.2 1.5 6 3 7.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    review: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 12h8M8 15h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    localization: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    communication: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H10l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    organization: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    learning: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7.5 12 4l7 3.5-7 3.5zM5 11l7 3.5L19 11M5 14.5l7 3.5 7-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    problemSolving: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m10.8 12.1 1.2 1.2 2.2-2.4M12 15v5M9 20h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[type] || icons.react
}

const previewByLanguage = {
  'pt-BR': [
    [
      { label: 'React', icon: 'react' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Vite', icon: 'vite' },
      { label: 'Angular', icon: 'angular' },
      { label: 'Tailwind CSS', icon: 'tailwind' },
      { label: 'HTML5', icon: 'html' },
    ],
    [
      { label: 'Node.js', icon: 'node' },
      { label: 'Python', icon: 'python' },
      { label: 'Banco de Dados', icon: 'database' },
      { label: 'C#', icon: 'csharp' },
      { label: 'REST API', icon: 'api' },
      { label: 'Git', icon: 'git' },
    ],
    [
      { label: 'Inglês C1', icon: 'language' },
      { label: 'Traduções', icon: 'globe' },
      { label: 'Localização', icon: 'localization' },
      { label: 'Revisão', icon: 'review' },
      { label: 'Gestão de Projetos', icon: 'management' },
    ],
    [
      { label: 'Comunicação', icon: 'communication' },
      { label: 'Organização', icon: 'organization' },
      { label: 'Aprendizado', icon: 'learning' },
      { label: 'Resolução de Problemas', icon: 'problemSolving' },
      { label: 'Planejamento', icon: 'planning' },
      { label: 'Autonomia', icon: 'autonomy' },
    ],
  ],
  en: [
    [
      { label: 'React', icon: 'react' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Vite', icon: 'vite' },
      { label: 'Angular', icon: 'angular' },
      { label: 'Tailwind CSS', icon: 'tailwind' },
      { label: 'HTML5', icon: 'html' },
    ],
    [
      { label: 'C# / .NET', icon: 'csharp' },
      { label: 'Node.js', icon: 'node' },
      { label: 'Python', icon: 'python' },
      { label: 'SQL Server', icon: 'database' },
      { label: 'RESTful APIs', icon: 'api' },
      { label: 'ORM', icon: 'database' },
    ],
    [
      { label: 'English C1', icon: 'language' },
      { label: 'Translations', icon: 'globe' },
      { label: 'Localization', icon: 'localization' },
      { label: 'Reverse Engineering', icon: 'reverseEngineering' },
      { label: 'Tooling Python/C#', icon: 'tooling' },
    ],
    [
      { label: 'Troubleshooting', icon: 'troubleshooting' },
      { label: 'Empathetic Support', icon: 'support' },
      { label: 'Project Management', icon: 'management' },
      { label: 'Fast Learning', icon: 'learning' },
      { label: 'Problem Solving', icon: 'problemSolving' },
      { label: 'Organization', icon: 'organization' },
    ],
  ],
}

function SkillsPage() {
  const { t, language } = useSite()
  const previewCards = previewByLanguage[language] || previewByLanguage.en
  const [openCardIndex, setOpenCardIndex] = useState(null)

  return (
    <Motion.section
      className="page-section skills-page"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={Smooth}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h1 className="page-title">{t.skills.title}</h1>
      <p className="section-subtitle">{t.skills.subtitle}</p>

      <div className="cards-grid skills-grid">
        {t.skills.categories.map((category, index) => (
          (() => {
            const isOpen = openCardIndex === index

            return (
          <Motion.article
            key={category.title}
            className={`project-card skill-card${isOpen ? ' is-open' : ''}`}
            tabIndex={0}
            role="button"
            aria-expanded={isOpen}
            onClick={() => {
              setOpenCardIndex((prev) => (prev === index ? null : index))
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setOpenCardIndex((prev) => (prev === index ? null : index))
              }
            }}
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...Smooth, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="skill-card-face">
              <header className="skill-card-header skill-card-header-static">
                <span className="skill-card-icon">{skillIcons[index] || skillIcons[0]}</span>
                <h3 className="skill-face-title">{category.title}</h3>
              </header>
              <ul className="tech-grid" aria-hidden="true">
                {(previewCards[index] || []).map((tech) => (
                  <li key={`${category.title}-${tech.label}`} className="tech-item">
                    <span className="tech-icon">
                      <TechIcon type={tech.icon} />
                    </span>
                    <span className="tech-name">{tech.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="skill-card-details">
              <header className="skill-card-header">
                <span className="skill-card-icon">{skillIcons[index] || skillIcons[0]}</span>
                <h3>{category.title}</h3>
              </header>
              <ul className="info-list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Motion.article>
            )
          })()
        ))}
      </div>
    </Motion.section>
  )
}

export default SkillsPage
