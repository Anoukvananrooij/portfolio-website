import { useRef } from 'react'

const MAIN_PROJECTS = [
  {
    title: 'Security Technology Implementation for a Multi-Tenant Building',
    summary: 'Security technology, process design and stakeholder communication in a complex 24/7 multi-tenant environment following multiple burglaries.',
    context: 'A building with 250 tenant organizations and 1,500 users operating 24/7, with aging infrastructure and growing security concerns following multiple burglaries. On-site staff were only present during office hours.',
    role: 'Translated security measures into operational workflows, coordinated external parties, onboarded internal teams and managed tenant communication. Aligned processes with the access control infrastructure, including a database cleanup from previous migrations.',
    result: 'Trust was restored among tenants. The combination of operational measures and law enforcement collaboration contributed to identifying the responsible individual. Incidents stopped for a significant period. Clearer processes and operational responsibilities remained after the project.',
    topics: ['Access Control', 'Physical Security', 'Process Design', 'Stakeholder Management', 'Crisis Management', 'Camera Surveillance'],
  },
  {
    title: 'Operational Stabilization and Team Rebuilding During Organizational Change',
    summary: 'Rebuilding teams and restoring stability at a coworking location after frequent management changes, high turnover and failing software implementations.',
    context: 'A multi-tenant coworking operation facing high employee turnover and declining service quality following frequent management changes and a poorly executed software rollout.',
    role: 'As location manager, recruited and onboarded approximately 12 employees and interns, redesigned CRM-based workflows, standardized processes across sales, facility management and helpdesk, and managed daily operations directly during understaffed periods.',
    result: 'The operational organization became stable and autonomous again. Customer feedback improved significantly and teams could manage the building independently within the new structures.',
    topics: ['Operational Management', 'Team Leadership', 'Recruitment & Onboarding', 'Workflow Automation', 'CRM Systems', 'Change Management'],
  },
  {
    title: 'Recovery and Redesign of an Autonomous Robotics R&D Project',
    summary: 'Project recovery, system redesign and commercial renegotiation in a technically complex robotics R&D environment with deteriorating client trust.',
    context: 'An autonomous robotics R&D project with growing delays, unclear expectations and deteriorating trust between client and four technical teams across embedded systems, electronics, mechanics and UI/UX.',
    role: 'Took over as project coordinator, initiated market research and field visits, and pushed for a fundamental redesign. Renegotiated the commercial model from milestone-based payments to transparent on-site hourly engagement — improving trust and financial stability.',
    result: 'The project was repositioned with a simpler, more reliable architecture. The client relationship recovered, and the new collaboration structure became financially important for the organization.',
    topics: ['R&D Management', 'Robotics', 'Stakeholder Management', 'System Redesign', 'Client Negotiation', 'Product Strategy'],
  },
]

const SUPPORTING_PROJECTS = [
  {
    title: 'Wireless Access Control Stabilization',
    summary: 'Troubleshot a cloud-based access control system for a 700-user 24/7 building. Root cause turned out to be a gateway networking issue, fixed by switching to wired connections.',
    topics: ['Access Control', 'Troubleshooting', 'Team Training'],
  },
  {
    title: 'AI Camera Analytics Pilot',
    summary: 'Coordinated an AI camera pilot with a live usage dashboard. People counting in an outdoor environment to generate operational insights.',
    topics: ['AI Cameras', 'Dashboard', 'Pilot Management'],
  },
  {
    title: 'Regional Smart Mobility Network',
    summary: 'Built a regional stakeholder network around a shared smart mobility roadmap. Interviewed around 60 organizations, secured funding, and ran the kickoff event.',
    topics: ['Stakeholders', 'Smart Mobility', 'Ecosystem Development'],
  },
]

export default function Projects() {
  const refs = useRef([])

  const handleToggle = (idx) => (e) => {
    if (!e.currentTarget.open) return
    refs.current.forEach((ref, i) => {
      if (i !== idx && ref) ref.open = false
    })
  }

  return (
    <section id="projects">
      <div className="section-header reveal">
        <div className="section-kicker">Projects</div>
        <div>
          <h2>Selected work.</h2>
          <p className="section-intro">
            Operational leadership, technology implementation, team rebuilding and stakeholder alignment.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {MAIN_PROJECTS.map((p, i) => (
          <details
            key={p.title}
            className="project-card reveal"
            style={{ '--reveal-delay': `${i * 0.08}s` }}
            ref={el => refs.current[i] = el}
            onToggle={handleToggle(i)}
          >
            <summary className="project-summary-wrap">
              <div>
                <h3>{p.title}</h3>
                <p className="project-blurb">{p.summary}</p>
              </div>
              <span className="toggle-icon" aria-hidden="true">+</span>
            </summary>
            <div className="project-body">
              <h4>Context</h4>
              <p>{p.context}</p>
              <h4>My Role</h4>
              <p>{p.role}</p>
              <h4>Result</h4>
              <p>{p.result}</p>
              <div className="topics">
                {p.topics.map(t => <span key={t} className="topic">{t}</span>)}
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="supporting-grid">
        {SUPPORTING_PROJECTS.map((p, i) => (
          <div key={p.title} className="project-card reveal" style={{ '--reveal-delay': `${i * 0.08}s` }}>
            <div className="supporting-inner">
              <h3>{p.title}</h3>
              <p className="project-blurb">{p.summary}</p>
              <div className="topics">
                {p.topics.map(t => <span key={t} className="topic">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
