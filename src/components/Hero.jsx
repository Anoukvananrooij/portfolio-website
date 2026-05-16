export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div>
        <span className="eyebrow">Operations · Technology · Organizational Growth</span>
        <h1>Anouk van Anrooij</h1>
        <p className="hero-subtitle">
          I work where operations, technology and people need to come together.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="CALENDAR_URL_HERE" target="_blank" rel="noopener">
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
        <img src="/photo.png" alt="Portrait of Anouk van Anrooij" />
      </div>
    </section>
  )
}
