export default function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-kicker">About</div>
        <div>
          <h2>No nonsense. People first.</h2>
          <div className="about-body">
            <p>
              I'm Anouk. I care most about the people I work with. Not as a nice-to-have,
              but as the whole point. When teams trust each other and know what they're working
              toward, almost everything else becomes solvable.
            </p>
            <p>
              My work connects operations, technology and organizational change. I've implemented
              security systems, rebuilt teams, untangled R&D projects and helped organizations
              think regionally about smart mobility. What drives me in all of it is whether the
              work actually makes things better. For the organization, for the people in it, and
              for the world around it.
            </p>
            <p>
              I work best in multidisciplinary teams where honesty is just the default. People
              tend to open up to me pretty quickly. I think it's because I'm genuinely curious
              about them, and because I say what I actually think.
            </p>
          </div>
          <div className="pill-row reveal" style={{ '--reveal-delay': '0.1s' }}>
            <span className="pill">People First</span>
            <span className="pill">Operational Leadership</span>
            <span className="pill">Technology That Sticks</span>
            <span className="pill">Sustainable Impact</span>
            <span className="pill">Honest by Default</span>
          </div>
        </div>
      </div>
    </section>
  )
}
