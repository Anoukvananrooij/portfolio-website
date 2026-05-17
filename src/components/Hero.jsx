import { useEffect, useRef } from 'react'

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.14}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div>
        <span className="eyebrow hero-enter" style={{ '--hero-delay': '0s' }}>Operations · Technology · Entrepreneurship</span>
        <h1>
          <span className="hero-enter" style={{ display: 'block', '--hero-delay': '0.15s' }}>Anouk</span>
          <span className="hero-enter" style={{ display: 'block', '--hero-delay': '0.55s' }}>van Anrooij</span>
        </h1>
        <p className="hero-subtitle hero-enter" style={{ '--hero-delay': '0.8s' }}>
          I implement operational technology and build the processes and teams that make it work in practice.
        </p>
        <div className="hero-actions hero-enter" style={{ '--hero-delay': '1s' }}>
          <a className="button primary" href="https://calendar.app.google/DtQvEAzVyGVeotk28" target="_blank" rel="noopener">
            Book a Meeting
          </a>
          <a className="button" href="https://www.linkedin.com/in/anouk-van-anrooij/" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="button" href="mailto:anouk@vananrooij.com">
            Email
          </a>
        </div>
      </div>
      <div className="photo-wrapper">
        <img ref={imgRef} src="/photo.png" alt="Portrait of Anouk van Anrooij" />
      </div>
    </section>
  )
}
