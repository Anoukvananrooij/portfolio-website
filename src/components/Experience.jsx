const EMPLOYERS = [
  {
    name: 'AVA Investments BV',
    role: 'Founder & Director',
    years: '2025 – present',
    note: 'Available as a project or operations manager, or for other entrepreneurial collaborations.',
  },
  {
    name: 'Microlab',
    role: 'Location Manager',
    years: '2025 – 2026',
    note: 'Multi-tenant coworking & real estate. Led security technology implementation, team management, tenant relations, sales and facility operations across a 1,500-user building.',
  },
  {
    name: 'Microtuin',
    role: 'Location Manager',
    years: '2025',
    note: 'Multi-tenant coworking & facility operations. Responsible for team management, tenant relations, sales, events and facility management.',
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

      <div className="experience-list reveal">
        {EMPLOYERS.map(({ name, role, years, note }) => (
          <div key={name} className="experience-item">
            <div className="experience-item-header">
              <span className="experience-name">{name}</span>
              <span className="experience-meta">{role} · {years}</span>
            </div>
            {note && <p className="experience-note">{note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
