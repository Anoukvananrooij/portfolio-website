export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-card reveal">
        <div className="contact-grid">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="contact-title">Let's connect.</h2>
            <p className="section-intro">
              I enjoy conversations about operations, technology, entrepreneurship and
              organizational change. If you're working on something where people, processes and
              technology need to come together — reach out.
            </p>
          </div>
          <div>
            <div className="contact-links">
              <a href="mailto:anouk@vananrooij.com">anouk@vananrooij.com</a>
              <a href="https://www.linkedin.com/in/anouk-van-anrooij/" target="_blank" rel="noopener">
                linkedin.com/in/anouk-van-anrooij
              </a>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="CALENDAR_URL_HERE" target="_blank" rel="noopener">
                Book a Meeting
              </a>
              <a className="button" href="mailto:anouk@vananrooij.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
