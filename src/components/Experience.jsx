const EMPLOYERS = [
  { name: 'Microlab', role: 'Location Manager' },
  { name: 'Microtuin', role: 'Location Manager' },
  { name: 'Alltrons', role: 'Operational Manager' },
  { name: 'ROM Utrecht Region', role: 'Business Developer' },
  { name: 'SAFENED', role: 'HR, Finance, Administration & Reception' },
  { name: 'Tilburg University', role: 'Assistant to the Academic Director' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <div className="section-kicker">Experience</div>
        <div>
          <h2>Organizations &amp; referrals.</h2>
          <p className="section-intro">Previous organizations and roles. References available upon request.</p>
        </div>
      </div>

      <div className="experience-grid">
        {EMPLOYERS.map(({ name, role }) => (
          <article key={name} className="experience-card">
            <div>
              <h3>{name}</h3>
              <p className="role">{role}</p>
            </div>
            <a
              className="button"
              href={`mailto:anouk@vananrooij.com?subject=Referral request - ${name}`}
            >
              Request Referral
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
