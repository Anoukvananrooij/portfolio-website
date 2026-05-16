import ObfuscatedText from './EmailImage'

const EMAIL_PARTS = ['anouk', '@', 'vananrooij', '.com']
const LINKEDIN_PARTS = ['linkedin.com', '/in/', 'anouk-van-anrooij']

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-card reveal">
        <div className="contact-grid">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="contact-title">Let's talk.</h2>
            <p className="section-intro">
              If you want to have an honest conversation about work, people or what's
              broken in your organization, I'm genuinely interested. Reach out.
            </p>
          </div>
          <div>
            <div className="contact-links">
              <a href="mailto:anouk@vananrooij.com" aria-label="Email Anouk">
                <ObfuscatedText parts={EMAIL_PARTS} />
              </a>
              <a href="https://www.linkedin.com/in/anouk-van-anrooij/" target="_blank" rel="noopener" aria-label="Anouk's LinkedIn profile">
                <ObfuscatedText parts={LINKEDIN_PARTS} />
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
