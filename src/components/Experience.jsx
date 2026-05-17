const EMPLOYERS = [
  { name: 'Microlab', role: 'Location Manager', years: '2025 – 2026' },
  { name: 'Microtuin', role: 'Location Manager', years: '2025' },
  { name: 'Alltrons', role: 'Operational Manager', years: '2023 – 2024' },
  { name: 'ROM Utrecht Region', role: 'Business Developer', years: '2022 – 2023' },
  { name: 'SAFENED', role: 'HR, Finance & Administration', years: '2016 – 2021' },
  { name: 'Tilburg University', role: 'Assistant to the Academic Director', years: '2020 – 2022' },
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
        {EMPLOYERS.map(({ name, role, years }, i) => (
          <article key={name} className="experience-card reveal" style={{ '--reveal-delay': `${i * 0.06}s` }}>
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <p className="card-meta">{years}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
