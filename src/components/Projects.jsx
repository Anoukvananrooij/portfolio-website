import { useRef } from 'react'

const MAIN_PROJECTS = [
  {
    title: 'Security Technology Implementation for a Multi-Tenant Building',
    summary: 'Rolled out a new security infrastructure across a large multi-tenant building with 1,500 users and 250 tenant organizations. Technology, processes and people had to move together.',
    context: 'A continuously operating, multi-stakeholder environment with growing security requirements. On-site coverage was limited, and getting tenants, on-site staff and external parties aligned was essential to making anything stick.',
    role: 'I translated security measures into operational workflows, coordinated external parties, onboarded internal teams and managed tenant communication. I also cleaned up a database from previous migrations and aligned processes with the new access control infrastructure.',
    result: 'Trust between tenants and management improved. Incidents stopped. The processes and responsibilities established during the project remained in place after handover.',
    topics: ['Access Control', 'Physical Security', 'Process Design', 'Stakeholder Management', 'Crisis Management', 'Camera Surveillance'],
  },
  {
    title: 'Operational Stabilization and Team Rebuilding During Organizational Change',
    summary: 'A coworking location needed to rebuild after a period of significant leadership changes and a difficult CRM transition. I rebuilt the team and made operations reliable again.',
    context: 'Multiple consecutive leadership changes and a new CRM rollout had created uncertainty across the team. Turnover was high and day-to-day operations needed someone to take the wheel.',
    role: 'As location manager, I recruited and onboarded around 12 people, redesigned CRM-based workflows, standardized processes across sales, facility management and helpdesk, and ran daily operations directly during understaffed periods.',
    result: 'The team became stable and self-sufficient. Customer satisfaction improved significantly. The location could run reliably without me being in the middle of everything.',
    topics: ['Operational Management', 'Team Leadership', 'Recruitment & Onboarding', 'Workflow Automation', 'CRM Systems', 'Change Management'],
  },
  {
    title: 'Recovery and Redesign of an Autonomous Robotics R&D Project',
    summary: 'Took over coordination of a robotics R&D project with four technical teams. Pushed for a fundamental redesign and renegotiated the commercial model to get it back on track.',
    context: 'The project had accumulated delays and misaligned expectations across embedded systems, electronics, mechanics and UI/UX disciplines. Getting it moving again required both a clearer direction and a new way of working with the client.',
    role: 'I took over as project coordinator, did market research and field visits, and made the case for a simpler architecture. I renegotiated from milestone-based payments to transparent on-site hourly engagement, which gave both sides more clarity and room to work.',
    result: 'The project found solid ground. The client relationship recovered. The new collaboration structure became financially important for the organization.',
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
          <h2>Things I've fixed, built and figured out.</h2>
          <p className="section-intro">
            Complex situations, real people, and what actually happened.
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
