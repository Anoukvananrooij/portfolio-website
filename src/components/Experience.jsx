const EMPLOYERS = [
  {
    name: 'AVA Investments BV',
    role: 'Founder & Director',
    years: '2025 – present',
    note: 'Available as a project or operations manager, or for other entrepreneurial collaborations.',
  },
  {
    name: 'Microlab & Microtuin',
    role: 'Location Manager',
    years: '2025 – 2026',
    note: 'Multi-tenant coworking & facility operations across two buildings. Led team management, tenant relations, sales, events, facility management and security technology implementation.',
  },
  {
    name: 'Alltrons',
    role: 'Operational Manager',
    years: '2023 – 2024',
    note: 'Hardware and software R&D startup. Managed operations, HR, sales and project delivery during growth from 5 to 15 FTEs.',
  },
  {
    name: 'ROM Utrecht Region',
    role: 'Business Developer',
    years: '2022 – 2023',
    note: 'Regional development organisation. Built a public-private smart mobility collaboration across the Utrecht region, engaging approximately 60 private organisations.',
  },
  {
    name: 'SAFENED',
    role: 'HR, Finance & Administration',
    years: '2016 – 2021',
    note: 'Side role from a young age. First hands-on exposure to the security industry and to how an organisation operates day to day.',
  },
  {
    name: 'Tilburg University',
    role: 'Assistant to the Academic Director',
    years: '2020 – 2022',
    note: 'Supported the Academic Director of the MSc Strategic Management & Organisation Studies programme.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header reveal">
        <div className="section-kicker">Experience</div>
        <div>
          <h2>Where I've worked.</h2>
          <p className="section-intro">
            Previous roles and organisations. Happy to connect you with people I've worked with.
          </p>
        </div>
      </div>

      <div className="experience-grid reveal">
        {EMPLOYERS.map(({ name, role, years, note }) => (
          <div key={name} className="experience-card">
            <span className="experience-name">{name}</span>
            <p className="experience-meta">{role} · {years}</p>
            {note && <p className="experience-note">{note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
