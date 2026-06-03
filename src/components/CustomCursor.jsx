import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      if (glowRef.current) {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top = `${glowY}px`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const interactive = target.closest('a, button, .skill-card, .project-card, .timeline-content, .social-link');
        if (interactive && ringRef.current) {
          ringRef.current.classList.add('hover');
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const interactive = target.closest('a, button, .skill-card, .project-card, .timeline-content, .social-link');
        if (interactive && ringRef.current) {
          // If we are moving to another element that is also interactive, don't remove hover
          const relatedTarget = e.relatedTarget;
          if (relatedTarget && typeof relatedTarget.closest === 'function' && relatedTarget.closest('a, button, .skill-card, .project-card, .timeline-content, .social-link')) {
            return;
          }
          ringRef.current.classList.remove('hover');
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
      <div id="cursor-glow" ref={glowRef}></div>
    </>
  );
}
