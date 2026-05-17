export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div>
        <span className="eyebrow">Operations · Technology · Entrepreneurship</span>
        <h1>Anouk van Anrooij</h1>
        <p className="hero-subtitle">
          I implement operational technology and build the processes and teams that make it work in practice.
        </p>
        <div className="hero-actions">
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
      <div className="photo-frame">
        <div className="photo-wrapper">
          <img src="/photo.png" alt="Portrait of Anouk van Anrooij" />
        </div>
      </div>
    </section>
  )
}
