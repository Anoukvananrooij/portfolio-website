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
      <div className="section-header reveal">
        <div className="section-kicker">Experience</div>
        <div>
          <h2>Where I've worked.</h2>
          <p className="section-intro">
            Previous roles and organizations. Happy to connect you with people I've worked with.
          </p>
        </div>
      </div>

      <div className="experience-grid">
        {EMPLOYERS.map(({ name, role }, i) => (
          <article key={name} className="experience-card reveal" style={{ '--reveal-delay': `${i * 0.06}s` }}>
            <div>
              <h3>{name}</h3>
              <p className="role">{role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
