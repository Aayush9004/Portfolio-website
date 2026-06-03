export default function About() {
  return (
    <section id="about">
      <div className="section-header fade-up">
        <span className="section-label">01 &mdash; about me</span>
        <h2 className="section-title">The Person Behind the <span>Code</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-grid">
        <div className="about-text fade-left">
          <p>
            Hey! I'm <strong>Aayush</strong>, a final-year <strong>B.Tech Information Technology</strong> student at{' '}
            <strong>Shah &amp; Anchor Kutchhi Engineering College</strong>, affiliated with Mumbai University.
          </p>
          <p>
            My world revolves around <span className="highlight">backend systems</span> — designing REST APIs that don't buckle under load, 
            architecting Spring Boot applications with clean layered patterns, and squeezing performance out of MongoDB pipelines.
          </p>
          <p>
            When I'm not writing code, I'm grinding through <strong>Striver's A2Z DSA sheet</strong>, exploring cloud fundamentals on AWS, 
            or creating short-form tech content to break down complex concepts for beginners.
          </p>
          <p>
            I believe <span class="highlight">great backend systems are invisible</span> — they just work. That's what I build.
          </p>
        </div>
        <div className="about-stats fade-right">
          <div className="stat-card delay-1">
            <div className="stat-value">8.60</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-card delay-2">
            <div className="stat-value">2+</div>
            <div className="stat-label">Live Projects</div>
          </div>
          <div className="stat-card delay-3">
            <div className="stat-value">A2Z</div>
            <div className="stat-label">DSA Sheet</div>
          </div>
          <div className="stat-card delay-4">
            <div className="stat-value">☁️</div>
            <div className="stat-label">AWS Basics</div>
          </div>
        </div>
      </div>
    </section>
  );
}
