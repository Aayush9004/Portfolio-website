import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled class
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = document.querySelectorAll('section[id], header[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'content', label: 'Content' },
  ];

  return (
    <>
      <nav
        id="navbar"
        style={{
          background: isScrolled ? 'rgba(7, 13, 26, 0.95)' : 'rgba(7, 13, 26, 0.75)',
        }}
      >
        <a href="#hero" className="nav-logo" onClick={() => setIsMobileOpen(false)}>
          &lt;<span>Aayush</span> /&gt;
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta">
              Hire Me
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span style={{ transform: isMobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMobileOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`} id="mobileNav">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsMobileOpen(false)}>
          Contact
        </a>
      </div>
    </>
  );
}
