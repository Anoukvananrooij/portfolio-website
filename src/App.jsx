import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="page footer">
        © {new Date().getFullYear()} Anouk van Anrooij. All rights reserved.
      </footer>
    </>
  )
}
