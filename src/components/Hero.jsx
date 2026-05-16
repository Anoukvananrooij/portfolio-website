export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div>
        <span className="eyebrow">Operations · Technology · People</span>
        <h1>Anouk van Anrooij</h1>
        <p className="hero-subtitle">
          I'm direct. I care a lot about the people I work with.
          I tend to do my best work when there's actually something at stake.
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
