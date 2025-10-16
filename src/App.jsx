import React, { StrictMode } from 'react'
import { Helmet } from 'react-helmet'

// UI / Sections (keep paths as you have them; change to relative if not using alias)
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/** -------- Inline Error Boundary (shows which section crashed) -------- */
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
          <strong style={{ color: '#b91c1c' }}>Section crashed: {this.props.label}</strong>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{String(this.state.err)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

/** ------------------------- App ------------------------- */
function App() {
  return (
    <StrictMode>
      <Helmet>
        <title>H28 Construction Management | Building Success Managing Excellence</title>
        <meta
          name="description"
          content="Professional construction management services for commercial and residential projects. Expert project oversight, budget management, and contractor coordination."
        />
      </Helmet>

      {/* Simple sanity bar so you know the app mounted */}
      <div style={{ position: 'fixed', inset: 'auto 0 0 0', padding: '6px 10px', fontSize: 12, background: '#f8fafc', color: '#475569', borderTop: '1px solid #e2e8f0', zIndex: 9999 }}>
        App mounted • If a section crashes, a red box will appear above it.
      </div>

      <div className="min-h-screen bg-white">
        <ErrorBoundary label="Navbar">
          <Navbar />
        </ErrorBoundary>

        <main>
          <ErrorBoundary label="Hero">
            <Hero />
          </ErrorBoundary>

          <ErrorBoundary label="About">
            <About />
          </ErrorBoundary>

          <ErrorBoundary label="Stats">
            <Stats />
          </ErrorBoundary>

          <ErrorBoundary label="Services">
            <Services />
          </ErrorBoundary>

          <ErrorBoundary label="Projects">
            <Projects />
          </ErrorBoundary>

          <ErrorBoundary label="Testimonials">
            <Testimonials />
          </ErrorBoundary>

          <ErrorBoundary label="Contact">
            <Contact />
          </ErrorBoundary>
        </main>

        <ErrorBoundary label="Footer">
          <Footer />
        </ErrorBoundary>

        <ErrorBoundary label="Toaster">
          <Toaster />
        </ErrorBoundary>
      </div>
    </StrictMode>
  )
}

export default App
