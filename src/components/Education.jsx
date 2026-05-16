export default function Education() {
  return (
    <section id="education">
      <div className="section-header reveal">
        <div className="section-kicker">Education</div>
        <div>
          <h2>Interdisciplinary and international.</h2>
          <p className="section-intro">
            Both degrees cum laude at Tilburg University, with an exchange semester at Monash University Malaysia.
          </p>
        </div>
      </div>

      <div className="education-grid">
        <article className="info-card reveal">
          <h3>MSc Strategic Management — Entrepreneurship</h3>
          <p className="card-meta">Tilburg University · Cum Laude · GPA 8.3 · Best Thesis Award</p>
          <p className="card-thesis">
            <em>How actors in their ecosystem influence the ability of enterprises with an upcycling business model to upscale</em>
          </p>
        </article>
        <article className="info-card reveal" style={{ '--reveal-delay': '0.08s' }}>
          <h3>BSc Liberal Arts &amp; Sciences — Business &amp; Economics</h3>
          <p className="card-meta">Tilburg University · Cum Laude · GPA 8.5</p>
          <p className="card-thesis">
            <em>Performance feedback in project management: A study of managerial responses to negative performance feedback</em>
          </p>
        </article>
      </div>

      <article className="info-card reveal" style={{ marginTop: '14px', '--reveal-delay': '0.16s' }}>
        <h3>Recognition</h3>
        <ul className="recognition-list">
          <li>Winner of the Tilburg University Challenge ideation category</li>
          <li>Winner of Rabo Food Forward</li>
          <li>Winner of Dragon's Den entrepreneurship pitching competition</li>
          <li>Raised €12,000 in early-stage funding for an entrepreneurship concept during university</li>
        </ul>
      </article>
    </section>
  )
}
