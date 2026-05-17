import { useRef } from 'react'

const MAIN_PROJECTS = [
  {
    title: 'Implementation of Security Technology and Operational Processes for a Multi-Tenant Building',
    summary: 'Security technology, process design and stakeholder communication across a complex 24/7 multi-tenant environment with 250 tenant organizations and 1,500 users.',
    context: 'A large multi-tenant building with 24/7 user access operated with limited on-site staff coverage. The environment was complex: high user volume, aging infrastructure, deferred building maintenance and fragmented stakeholder responsibilities between building ownership and operations. Increasing security concerns created pressure to act quickly while day-to-day operations had to continue without disruption.',
    role: 'Together with the CEO and external partners, we defined and coordinated a broad set of operational and technical security measures. My role focused on translating these into operational workflows, coordinating execution by external parties, onboarding internal teams into new processes and managing communication towards 250 tenant organizations and other stakeholders. I also played an important role in aligning processes with the building\'s access control infrastructure, drawing on earlier experience with a CRM migration involving custom access control integrations.',
    implemented: 'On the technical side, the existing camera infrastructure was extended with a new recorder and monitoring software. Motion detection was configured for specific zones and time windows, and an external partner was contracted for nightly surveillance. Physical door security throughout the building was improved and access control policies were tightened, temporarily centralizing entry through the main entrance to centralize monitoring.\n\nNew internal processes were designed for key management, building closing procedures and security reporting. Teams were onboarded into these workflows and monitored for consistent execution. Collaboration with local law enforcement was intensified. Tenant communication was formalized through digital channels and direct stakeholder meetings. Structured reporting was introduced to document completed actions, identified risks and outstanding responsibilities between stakeholders.\n\nThe access control database was also cleaned and restructured, including outdated data from previous software migrations and integrations.',
    result: 'The implemented measures helped restore trust among tenants. Collaboration with law enforcement contributed to identifying the individual responsible for the security incidents. Incidents appeared to stop for a significant period following the implementation. The project also resulted in more structured security processes, clearer operational responsibilities and improved communication between operational teams, tenants and external stakeholders.',
    topics: ['Access Control', 'Physical Security', 'Process Design', 'Stakeholder Management', 'Crisis Management', 'Camera Surveillance'],
  },
  {
    title: 'Operational Stabilization and Team Rebuilding During Organizational Change',
    summary: 'Rebuilding operational teams and restoring stability at a multi-tenant coworking location during a period of significant organizational change and high employee turnover.',
    context: 'A multi-tenant coworking and real estate operation was going through a period of significant organizational instability. Frequent management changes, uncertainty about the future of the organization and the introduction of new software systems had resulted in high employee turnover and declining operational quality. At the time of joining, several team members had already resigned, while operational continuity and customer satisfaction were under pressure.',
    role: 'As location manager, responsible for the operational performance of the building and teams across sales, facility management, helpdesk, events, administration and account management. This included recruitment, onboarding, operational coordination, process implementation and day-to-day team management. During understaffed periods, many operational tasks were performed directly while coordination of the broader operation continued.',
    implemented: 'Over time, approximately 12 employees and interns were recruited, onboarded and integrated into newly structured operational workflows. Processes were redesigned and standardized across sales, facility management, helpdesk and customer operations.\n\nBecause many existing automations proved unreliable in practice, several workflows were temporarily reverted to manual processes first. This allowed team members to understand the operational logic fully before automation was gradually reintroduced.\n\nWithin the CRM environment (HubSpot), operational software pipelines were designed to guide employees step-by-step through their daily work. While marketing lead funnels were developed with external partners, the underlying operational logic — including sales follow-ups, administrative actions, task handovers and workflow structures — was designed and built directly in the system. Examples included automated lead qualification and scheduling flows where leads could submit requirements online and directly book meetings with the sales team.',
    result: 'The operational organization became stable and autonomous again. Customer feedback indicated that quality, team stability and service levels had improved significantly compared to the period before the organizational changes. By the end of the engagement, teams were capable of running the building independently within the new operational structures.',
    topics: ['Operational Management', 'Team Leadership', 'Recruitment & Onboarding', 'Workflow Automation', 'CRM Systems', 'Process Design', 'Change Management'],
  },
  {
    title: 'Recovery and Redesign of an Autonomous Robotics R&D Project',
    summary: 'Project recovery, system redesign and commercial renegotiation for an autonomous robotics R&D project spanning multiple technical disciplines with deteriorating client expectations.',
    context: 'An R&D project for an autonomous robotics product had accumulated delays and misaligned expectations between the client and the technical teams involved. The project spanned multiple disciplines — embedded systems, electronics, mechanics and interface design — without sufficient alignment on the overall architecture. The commercial relationship had become strained due to missed milestones and a lack of clarity on direction.',
    role: 'Took over as project coordinator during a period in which both technical direction and client trust needed to be re-established. This involved understanding the technical challenges across disciplines, assessing the current state of development and creating a path forward in close collaboration with both the internal teams and the client.',
    implemented: 'A market research phase and field visits were initiated to better understand the actual operational context of the product. Based on these findings, a fundamental redesign was proposed and agreed upon, resulting in a simpler and more technically feasible architecture that was better suited to the real use case.\n\nIn parallel, the commercial model was renegotiated. The original milestone-based payment structure was replaced with a transparent on-site hourly engagement model. This reduced financial uncertainty for both parties and created a more open and stable working relationship with the client.',
    result: 'The project was repositioned on a more solid technical and commercial foundation. The redesigned architecture was better aligned with the actual operational requirements. The client relationship recovered, and the new collaboration structure became financially important to the organization.',
    topics: ['R&D Management', 'Robotics', 'Project Coordination', 'System Redesign', 'Client Negotiation', 'Stakeholder Management'],
  },
]

const SUPPORTING_PROJECTS = [
  {
    title: 'Troubleshooting and Stabilization of a Wireless Access Control System',
    summary: 'A cloud-based wireless access control system serving approximately 700 users in a 24/7 building was experiencing persistent reliability issues. Systematic troubleshooting identified the root cause as a networking problem at the gateway level. The issue was resolved by switching to wired connections and reconfiguring the infrastructure. On-site teams were subsequently trained to manage and operate the system independently.',
    topics: ['Access Control', 'Troubleshooting', 'Infrastructure', 'Team Training'],
  },
  {
    title: 'AI Camera Analytics Pilot',
    summary: 'Coordinated a pilot project using AI camera technology to detect and count people in an outdoor environment. The project involved setting up the camera infrastructure and developing a software dashboard to translate real-time data into operational insights for facility and planning decisions.',
    topics: ['AI Cameras', 'Object Detection', 'Dashboard', 'Pilot Management'],
  },
  {
    title: 'Regional Smart Mobility Stakeholder Network',
    summary: 'In collaboration with regional public institutions, built a stakeholder network around a shared smart mobility roadmap for the Utrecht region. Interviewed and recruited approximately 60 private organizations, aligned public and private parties around a shared innovation agenda, secured funding and organized a regional kickoff event attended by the majority of participating organizations.',
    topics: ['Stakeholder Management', 'Smart Mobility', 'Ecosystem Building', 'Public-Private Collaboration'],
  },
]

function renderBody(text) {
  return text.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
}

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
              {renderBody(p.context)}
              <h4>My Role</h4>
              {renderBody(p.role)}
              <h4>What We Implemented</h4>
              {renderBody(p.implemented)}
              <h4>Result</h4>
              {renderBody(p.result)}
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
