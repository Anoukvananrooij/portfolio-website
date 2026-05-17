import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="page footer">
        © {new Date().getFullYear()} Anouk van Anrooij. All rights reserved.
      </footer>
    </>
  )
}
