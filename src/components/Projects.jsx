import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    shortTitle: 'Facility Operations',
    title: 'Operational Turnaround at a Multi-Tenant Facility',
    summary: 'Taking on full operational management of a large multi-tenant coworking building during a period of organisational change — implementing security measures, rebuilding the team, completing a CRM migration across locations and restoring operational stability.',
    context: 'A large multi-tenant coworking facility with 24/7 operations had experienced a period of significant organisational instability. Security incidents had increased, the operational team had largely turned over and the organisation was mid-way through a migration between two CRM systems — one of which was still being configured. Managing daily operations while addressing all three challenges simultaneously required prioritisation and a structured approach.',
    role: 'As location manager, responsible for the full operational management of the building: client satisfaction, team management, facility management, sales, events, HR and financial reporting. I coordinated the security response, led the team rebuild and drove the CRM migration — all running in parallel. During understaffed periods, I also performed many operational tasks directly while continuing to coordinate the broader operation.',
    implemented: 'On the security side, access control policies were tightened and the system was switched to wired connections to improve reliability. The access control database was restructured and cleaned, including outdated data from previous migrations. A new key management process was designed and rolled out to the operations team. Mechanical security throughout the building was strengthened and closing rounds were redesigned. The existing camera infrastructure was extended with new monitoring software and an external partner was contracted for nightly surveillance. Member communication was increased and structured throughout. Collaboration with local law enforcement was intensified in parallel.\n\nIn parallel, approximately 12 employees and interns were hired, onboarded and integrated into structured workflows across sales, facility management, helpdesk and client operations. Where processes did not exist, they were designed from scratch. Where automations proved unreliable in practice, workflows were temporarily reverted to manual processes first — so team members understood the underlying logic before automation was reintroduced.\n\nThe CRM migration covered multiple locations. The new system was configured to reflect how work actually needed to flow, rather than a generic out-of-the-box setup. Operational pipelines were built to guide team members step by step through sales follow-ups, administrative actions, handovers and task management — giving teams a system they could operate and maintain independently.',
    result: 'Member trust was restored and security incidents reduced significantly. The combination of operational measures and collaboration with law enforcement contributed to identifying the individual responsible for the incidents. The operational team became capable of running the building independently within the new structures. The CRM migration was completed across locations, and client feedback reflected a meaningful improvement in service levels compared to the period before the reorganisation.',
    topics: ['Operations Management', 'Security Implementation', 'Team Building', 'CRM Migration', 'Change Management'],
  },
  {
    shortTitle: 'Robotics R&D',
    title: 'Recovery and Redesign of an Autonomous Robotics R&D Project',
    summary: 'Taking over coordination of an R&D project for an autonomous mobile robot that had stalled due to misaligned requirements and accumulated delays. Led the system redesign, restored the client relationship and renegotiated the contract to put the project on a sustainable footing.',
    context: 'The project involved developing an autonomous mobile robot for use in a demanding industrial environment. By the time I joined, the project had accumulated significant delays and the client relationship had become strained. The underlying cause was a gap in expectations that had not been fully resolved from the outset: the technical team and the client had different understandings of what the product needed to do, and the original plan had set targets that proved difficult to meet both technically and in terms of timelines.',
    role: 'I took over this project mid-way as project manager, responsible for coordinating the four technical teams and the client relationship. I spoke individually with each team to understand the actual state of the project, and established a more direct line of communication with the client. I initiated a competitor analysis and organised a field visit to see a comparable product in practice. This led to the conclusion that a fundamental redesign was necessary — and I drove that process end to end: negotiating with the client to fund it, working with the teams on the new architecture, drafting the project plan and making the case internally for renegotiated contract terms.',
    implemented: 'The competitor analysis and field visit made clear that the original architecture was significantly more complex than the problem required. An AI-driven approach to environment mapping and segmentation had added technical cost and operational constraints that the use case did not justify. The new design took a different starting point: it built on approaches proven to work in comparable products, then added specific sensor capabilities where there was a genuine technical case for doing so. The result was an architecture that was simpler to build, easier to maintain and well suited to the actual requirements.',
    result: 'The client approved the new architecture and the working relationship recovered. The redesign proved durable — the product has remained in development with only incremental adjustments in the years since. The contract was renegotiated, the team moved to work on-site at the client\'s location, and project management was taken over internally by the client. The arrangement became a long-term and financially significant engagement for the organisation.',
    topics: ['R&D Management', 'System Redesign', 'Client Negotiation', 'Robotics'],
  },
  {
    shortTitle: 'Access Control',
    title: 'Troubleshooting and Stabilization of a Wireless Access Control System',
    summary: 'Troubleshooting and stabilising a cloud-based wireless access control system serving several hundred users in a building with round-the-clock operations.',
    context: 'The system was experiencing persistent reliability issues affecting daily access for users and staff. The failures required a structural solution rather than repeated workarounds.',
    role: 'Led the troubleshooting process and coordinated the infrastructure change. Subsequently trained the on-site team to manage and operate the system independently.',
    implemented: 'Systematic troubleshooting identified the root cause as a networking problem at the gateway level. The system was switched from wireless to wired connections and the infrastructure was reconfigured. The on-site team was then trained on day-to-day system management.',
    result: 'The system stabilised and the team was able to manage it independently without ongoing external support.',
    topics: ['Access Control', 'Troubleshooting', 'Team Training'],
  },
  {
    shortTitle: 'AI Camera Pilot',
    title: 'AI Camera Analytics Pilot',
    summary: 'Coordinating a pilot using AI camera technology to turn real-time people detection data into operational insights for facility and planning decisions.',
    context: 'A pilot was initiated to assess whether AI camera technology could be used to detect and count people in an outdoor environment and translate that data into something actionable for operations.',
    role: 'Coordinated the pilot end to end — from setting up the camera infrastructure to overseeing development of a dashboard to make the data usable for operational teams.',
    implemented: 'Camera infrastructure was set up in the outdoor environment. A software dashboard was developed to process real-time detection data and present it in a format relevant to facility management and planning.',
    result: 'The pilot delivered a working proof of concept, with live camera data made actionable through the dashboard.',
    topics: ['AI Cameras', 'Dashboard', 'Pilot Management'],
  },
  {
    shortTitle: 'Ecosystem Building',
    title: 'Building a Regional Public-Private Ecosystem',
    summary: 'Developing a public-private ecosystem around a shared regional innovation agenda, aligning approximately 60 private organisations with public partners around a common roadmap.',
    context: 'In collaboration with regional public institutions, a structured effort was set up to build an innovation ecosystem across a region in the Netherlands, aligning public and private parties around a shared agenda.',
    role: 'Led the stakeholder development process — identifying, interviewing and recruiting private organisations, aligning them with the public partners involved, securing funding and organising the regional launch event.',
    implemented: 'Approximately 60 private organisations were approached, interviewed and recruited into the ecosystem. A shared roadmap was developed and agreed upon across public and private parties. Funding was secured and a regional kickoff event was organised.',
    result: 'A functioning public-private ecosystem was established across the region. The kickoff event, attended by the majority of participating organisations, marked the transition from planning to active collaboration.',
    topics: ['Ecosystem Building', 'Stakeholder Engagement', 'Public-Private Collaboration'],
  },
]

function renderBody(text) {
  return text.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
}

export default function Projects() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const project = PROJECTS[active]

  useEffect(() => { setExpanded(false) }, [active])

  return (
    <section id="projects">
      <div className="section-header reveal">
        <div className="section-kicker">Projects</div>
        <div>
          <h2>Selected work.</h2>
          <p className="section-intro">
            Case studies in operational leadership and technology implementation. Details have been adjusted to protect confidentiality.
          </p>
        </div>
      </div>

      <div className="project-tabs reveal">
        <div className="tab-list" role="tablist">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              className={`tab-btn${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="tab-num">0{i + 1}</span>
              {p.shortTitle}
            </button>
          ))}
        </div>

        <div className="tab-panel" role="tabpanel">
          <p className="project-blurb">{project.summary}</p>

          {project.context && !expanded && (
            <button className="expand-btn" onClick={() => setExpanded(true)}>
              Read full case →
            </button>
          )}

          {project.context && expanded && (
            <div className="project-body">
              <h4>Context</h4>
              {renderBody(project.context)}
              <h4>My Role</h4>
              {renderBody(project.role)}
              <h4>Implemented</h4>
              {renderBody(project.implemented)}
              <h4>Result</h4>
              {renderBody(project.result)}
              <button className="expand-btn collapse" onClick={() => setExpanded(false)}>
                ↑ Collapse
              </button>
            </div>
          )}

          <div className="topics">
            {project.topics.map(t => <span key={t} className="topic">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
