import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SiteProvider } from './context/SiteContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </SiteProvider>
  </StrictMode>,
)
