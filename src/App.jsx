import React, { StrictMode, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// UI / Sections
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Advantage from './components/Advantage'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import OurServices from '@/pages/OurServices'

/** -------- Inline Error Boundary (unchanged) -------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, err: null }
  }
  static getDerivedStateFromError(err) {
    return { hasError: true, err }
  }
  componentDidCatch(err, info) {
    console.error(`[Crash in ${this.props.label}]`, err, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 16, border: '1px solid #fca5a5', background: '#fff1f2', borderRadius: 8, margin: '8px 0' }}>
          <strong style={{ color: '#b91c1c' }}>
            Section crashed: {this.props.label}
          </strong>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{String(this.state.err)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

/** -------- Smooth scroll to hash on route change -------- */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash like #contact or #projects, scroll to it after navigation/render
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // slight delay to ensure layout is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // No hash: just reset to top on route change
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

/** -------- Home (your one-page sections) -------- */
function Home() {
  return (
    <>
      <ErrorBoundary label="Hero"><Hero /></ErrorBoundary>
      <ErrorBoundary label="About"><About /></ErrorBoundary>
      <ErrorBoundary label="Stats"><Stats /></ErrorBoundary>
      <ErrorBoundary label="Advantage"><Advantage /></ErrorBoundary>
      <ErrorBoundary label="Services"><Services /></ErrorBoundary>
      <ErrorBoundary label="Process"><Process /></ErrorBoundary>
      <ErrorBoundary label="Projects"><Projects /></ErrorBoundary>
      <ErrorBoundary label="Testimonials"><Testimonials /></ErrorBoundary>
      <ErrorBoundary label="Contact"><Contact /></ErrorBoundary>
    </>
  )
}

/** -------- Routes isolated from ErrorBoundary -------- */
function RoutedContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-services" element={<OurServices />} />
      {/* add more routes here as needed */}
    </Routes>
  )
}

/** ------------------------- App ------------------------- */
function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        {/* hash-aware smooth scrolling */}
        <ScrollToHash />

        <Helmet>
          <title>H28 Construction Management | Building Success Managing Excellence</title>
          <meta
            name="description"
            content="Professional construction management services for commercial and residential projects. Expert project oversight, budget management, and contractor coordination."
          />
        </Helmet>

        <div className="min-h-screen bg-white">
          <ErrorBoundary label="Navbar"><Navbar /></ErrorBoundary>

          <main>
            <RoutedContent />
          </main>

          <ErrorBoundary label="Footer"><Footer /></ErrorBoundary>
          <ErrorBoundary label="Toaster"><Toaster /></ErrorBoundary>
        </div>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
