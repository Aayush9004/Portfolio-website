export default function Projects() {
  const projectsList = [
    {
      title: 'AI-Powered Resume Screener',
      desc: 'Intelligent ATS system that ranks candidate resumes against job descriptions using the OpenAI API. Features role-based access control for recruiters and candidates, with structured scoring and real-time feedback.',
      icon: '🤖',
      featured: true,
      tags: ['Spring Boot', 'MongoDB', 'OpenAI API', 'JWT', 'REST API', 'RBAC'],
      github: '#',
      demo: '#',
      delay: 'delay-1',
    },
    {
      title: 'Student Management System',
      desc: 'Full-stack CRUD application for managing student records with layered MVC architecture. Clean separation of concerns across controller, service, and repository layers with MongoDB persistence.',
      icon: '📚',
      featured: false,
      tags: ['Spring Boot', 'MongoDB', 'MVC', 'CRUD', 'REST API'],
      github: 'https://github.com/Aayush9904/Student-Management',
      demo: null,
      delay: 'delay-2',
    },
  ];

  return (
    <section id="projects">
      <div className="section-header fade-up">
        <span className="section-label">03 &mdash; projects</span>
        <h2 className="section-title font-bold">Things I've <span>Built</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="projects-grid">
        {projectsList.map((project, idx) => (
          <div key={idx} className={`project-card fade-up ${project.delay}`}>
            {project.featured && <span className="project-featured">Featured</span>}
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target={project.github !== '#' ? '_blank' : '_self'}
                    rel={project.github !== '#' ? 'noopener noreferrer' : ''}
                    className="project-link"
                    title="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target={project.demo !== '#' ? '_blank' : '_self'}
                    rel={project.demo !== '#' ? 'noopener noreferrer' : ''}
                    className="project-link"
                    title="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
