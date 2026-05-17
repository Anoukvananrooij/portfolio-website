import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    shortTitle: 'Facility Operations',
    title: 'CRM Implementation and Location Management at a Multi-Tenant Coworking Facility',
    summary: 'An engagement that began as a project management role on a CRM and access control implementation, then evolved into full location management — covering operational process design, team building, commercial development and a security programme, with responsibilities expanding progressively throughout.',
    context: 'A large multi-tenant coworking facility with 24/7 operations and a broad, diverse user base. The engagement started with a focused technology implementation before transitioning into operational leadership, with scope growing step by step as new departments and workstreams came into view.',
    role: 'I joined initially as project manager for a CRM migration. Once the implementation was stable, I transitioned into the location manager role. From there, my responsibilities expanded progressively — starting with operational process design and team development, then broadening to cover more departments, a sustained commercial push and ultimately a security programme as well.',
    implemented: 'The engagement started with a CRM migration and access control implementation. I configured the CRM frontend and managed the data import — which first required getting the source data cleaned and correctly structured. I also managed the integration between the CRM and the building\'s custom-built access control system, and configured that module in the frontend. Getting the integration right required a thorough understanding of how both systems worked and how the operational team would use them day to day.\n\nAs location manager, my first priority was building the operational foundation the team needed to work autonomously. I designed the core processes and configured the second CRM platform around them — sales pipelines, administrative workflows, task structures and handovers — so each role had a clear, software-supported way of working from day one. Hiring ran in parallel, with new team members joining into a working system rather than building one themselves.\n\nAs the scope of my role expanded, I applied the same approach to each new department: understand the work, design or improve the process, configure the tooling and onboard the people. This eventually covered sales, facility management, helpdesk and client operations.\n\nSales became a significant focus in the later stages. I took on a meaningful share of commercial activity directly alongside running the operation, and signed two new contracts in the final week of my engagement.\n\nThe last major workstream was security. Together with the CEO and external partners, I coordinated a broad programme of measures across access control, camera surveillance, key management and closing procedures — maintaining operational continuity and member trust throughout.',
    result: 'By the end of the engagement, the team was capable of running the building independently within the structures and systems we had built together. Two new client contracts were signed in the final week. The security programme delivered measurable results, including collaboration with law enforcement that identified the individual responsible for the incidents. Client feedback reflected strong service levels across the board.',
    topics: ['CRM Implementation', 'Access Control', 'Operations Management', 'Team Building', 'Sales'],
  },
  {
    shortTitle: 'Robotics R&D',
    title: 'Stakeholder Alignment and System Redesign in an Autonomous Robotics R&D Project',
    summary: 'Joining mid-way as project manager on an autonomous mobile robot development project — coordinating four technical teams, managing the client relationship and playing a central role in securing agreement for a fundamental system redesign.',
    context: 'The project involved developing an autonomous mobile robot for use in a demanding industrial environment, with four specialist teams covering embedded systems, electronics, mechanics and software. I was brought in as project manager to coordinate the teams and manage the client relationship.',
    role: 'My focus was on project coordination, client communication and stakeholder alignment — not on the technical direction itself. I held individual sessions with each team to understand where things stood, and worked to establish open and direct communication with the client. I initiated a competitor analysis and organised a field visit to a comparable product in operation. Together with company leadership, and informed by what the teams and the market research were showing, we concluded that a fundamental redesign was the right path forward.\n\nFrom that point, my role had two main dimensions. The first was the client: making the case for why a new direction was needed, securing their confidence and agreement to support the redesign, and keeping the relationship constructive throughout. The second was the team: starting from scratch after significant effort is demanding, and a meaningful part of my role was keeping people motivated and focused during that transition. Together with the team, we developed a new project plan and presented it to the client.',
    implemented: 'The technical redesign was a team effort — the specialist teams developed the new architecture, building on approaches proven in comparable products and adding targeted capabilities where the use case justified it. My contribution was in the process: facilitating the team\'s work, keeping the client engaged and informed at each step, and co-developing the project plan that brought the new direction to life. Alongside the technical work, I took a leading role in renegotiating the commercial collaboration structure — drawing on my operational background to make the case internally and with the client for a model with greater transparency and stability for both parties.',
    result: 'The client approved the redesigned architecture and the project moved forward on a stronger footing. The team\'s motivation recovered as the new direction gave them a clearer and more achievable target. The redesign proved durable — the product has continued development on this foundation with only incremental adjustments since. The renegotiated engagement became a long-term and financially significant collaboration for the organisation.',
    topics: ['R&D Management', 'Stakeholder Management', 'Client Negotiation', 'Team Leadership'],
  },
  {
    shortTitle: 'AI Camera Pilot',
    title: 'AI Camera Analytics Pilot',
    summary: 'Joining an AI camera pilot as the interface between the client and our development team — gathering requirements through end user interviews, configuring the software platform and ensuring the dashboard reflected how operational teams actually worked.',
    context: 'A pilot was underway using AI camera technology to detect and count people in an outdoor environment, with the goal of turning that data into actionable insights for facility management and planning. The camera infrastructure was already in place and a developer was handling the technical build. My role was to bridge the operational and technical sides of the project.',
    role: 'I worked closely with the client\'s project manager to understand their requirements and expectations, and translated these into clear direction for our developer. To do this well, I invested significant time in understanding the client\'s processes from the ground up — holding structured interviews with end users across different functions to map how they worked, what they needed and where the data would add value. I also ensured the client\'s administrative data was complete and up to date, since accurate configuration depended on it.',
    implemented: 'Based on the end user interviews and a solid understanding of both the client\'s processes and our software architecture, I configured the software frontend — deciding what data to surface, how to structure the interface and how to present information in a way that matched the actual workflows of the teams using it. Throughout the project, I maintained the communication line between the client\'s project manager and our developer, ensuring that feedback was captured, translated accurately and acted on.',
    result: 'The pilot delivered a working proof of concept — live camera data made accessible and actionable through a configured dashboard that reflected how the client\'s operational teams actually worked.',
    topics: ['Requirements Gathering', 'Software Configuration', 'Stakeholder Communication', 'AI Cameras'],
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
