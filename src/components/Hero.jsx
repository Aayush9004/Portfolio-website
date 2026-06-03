import { useState, useEffect } from 'react';
import CanvasBackground from './CanvasBackground';
import resumePdf from '../assets/Resume.pdf';

export default function Hero() {
  const [roleText, setRoleText] = useState('//');
  const roles = [
    '// Backend Developer | Spring Boot Enthusiast',
    '// Java Developer | REST API Architect',
    '// Cloud Explorer | AWS + MongoDB',
    '// DSA Grinder | Problem Solver',
  ];

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId = null;

    const typeRole = () => {
      const current = roles[roleIdx];

      if (isDeleting) {
        setRoleText(current.substring(0, charIdx - 1));
        charIdx--;

        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeoutId = setTimeout(typeRole, 400);
        } else {
          timeoutId = setTimeout(typeRole, 40);
        }
      } else {
        setRoleText(current.substring(0, charIdx + 1));
        charIdx++;

        if (charIdx === current.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeRole, 2500);
        } else {
          timeoutId = setTimeout(typeRole, 60);
        }
      }
    };

    // Initial delay matching original template (1500ms)
    timeoutId = setTimeout(typeRole, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero">
      <CanvasBackground />
      <div className="hero-content">
        <div className="hero-badge">Available for internships &amp; freelance</div>
        <h1 className="hero-name">Aayush</h1>
        <p className="hero-role">{roleText}</p>
        <p className="hero-tagline">
          I turn <em>complex backend logic</em> into clean, scalable APIs —<br />
          one endpoint at a time.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary" id="cta-projects">
            <i className="fas fa-code"></i> View Projects
          </a>
          <a href={resumePdf} download="Resume.pdf" className="btn-outline" id="cta-resume">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
