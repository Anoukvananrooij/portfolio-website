export default function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-kicker">About</div>
        <div>
          <h2>Operations, technology and people.</h2>
          <div className="about-body">
            <p>
              I'm Anouk — I work where operations, technology and people need to come together.
              I'm drawn to complexity: building structures that don't exist yet, implementing
              technology that actually sticks, and helping teams find their footing during change.
            </p>
            <p>
              My background spans operational leadership, technology implementation and team
              building across R&D, facility management, security and smart mobility. Early in my
              career I developed a commercial mindset that still shapes how I communicate and
              solve problems today.
            </p>
            <p>
              I learn fast, think clearly under pressure, and enjoy stepping into unfamiliar
              environments. I'm most energized when there's no existing playbook.
            </p>
          </div>
          <div className="pill-row reveal" style={{ '--reveal-delay': '0.1s' }}>
            <span className="pill">Operational Leadership</span>
            <span className="pill">Technology Implementation</span>
            <span className="pill">Process Design</span>
            <span className="pill">Team Building</span>
          </div>
        </div>
      </div>
    </section>
  )
}
