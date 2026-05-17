import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = LINKS
      .map(l => document.getElementById(l.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      }),
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach(s => observer.observe(s))

    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        setActive('contact')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <header className="site-header">
      <div className="page nav">
        <a href="#top" className="nav-name">Anouk van Anrooij</a>
        <nav className="nav-links" aria-label="Main navigation">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'nav-active' : ''}>
              {label}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="nav-mobile page" aria-label="Mobile navigation">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'nav-active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
