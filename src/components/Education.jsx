export default function Education() {
  return (
    <section id="education">
      <div className="section-header reveal">
        <div className="section-kicker">Education</div>
        <div>
          <h2>Two degrees, both cum laude.</h2>
          <p className="section-intro">
            Tilburg University, with an exchange semester at Monash University Malaysia.
          </p>
        </div>
      </div>

      <div className="education-grid">
        <article className="info-card reveal">
          <h3>MSc Strategic Management — Entrepreneurship</h3>
          <p className="card-meta">Tilburg University · Cum Laude · GPA 8.3 · Best Thesis Award</p>
          <p className="card-thesis">
            Scalability for sustainability: How actors in their ecosystem influence the upscaling of businesses with an upcycling business model
          </p>
        </article>
        <article className="info-card reveal" style={{ '--reveal-delay': '0.08s' }}>
          <h3>BSc Liberal Arts &amp; Sciences — Business &amp; Economics</h3>
          <p className="card-meta">Tilburg University · Cum Laude · GPA 8.5</p>
          <p className="card-thesis">
            Performance feedback in project management: A study of managerial responses to negative performance feedback
          </p>
        </article>
      </div>

    </section>
  )
}
