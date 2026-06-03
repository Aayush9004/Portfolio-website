export default function Skills() {
  const skillsList = [
    { icon: '☕', name: 'Java', delay: 'delay-1' },
    { icon: '🍃', name: 'Spring Boot', delay: 'delay-2' },
    { icon: '🍃', name: 'MongoDB', delay: 'delay-3' },
    { icon: '⚡', name: 'REST APIs', delay: 'delay-4' },
    { icon: '🔐', name: 'JWT Auth', delay: 'delay-5' },
    { icon: '🐬', name: 'MySQL', delay: 'delay-1' },
    { icon: '☁️', name: 'AWS', delay: 'delay-2' },
    { icon: '🐙', name: 'Git', delay: 'delay-3' },
    { icon: '🐍', name: 'Python', delay: 'delay-4' },
  ];

  return (
    <section id="skills">
      <div className="section-header fade-up">
        <span className="section-label">02 &mdash; tech stack</span>
        <h2 className="section-title">Tools I <span>Ship With</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-grid" id="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className={`skill-card fade-up ${skill.delay}`}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
