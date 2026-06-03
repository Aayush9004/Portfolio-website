import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let particles = [];
    let columns = 0;
    let drops = [];
    let animationFrameId = null;
    let frame = 0;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|<>?/\\;:SELECT FROM WHERE JOIN API REST JWT SPRING BOOT MONGO DB JAVA'.split('');
    const fontSize = 13;

    // Floating code particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2.5 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.05;
        this.color = Math.random() > 0.5 ? '0, 194, 255' : '0, 255, 213';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const resizeCanvas = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      columns = Math.floor(W / fontSize);
      drops = new Array(columns).fill(1);
      
      // Re-init particles to fit viewport
      particles = [];
      for (let i = 0; i < 120; i++) {
        particles.push(new Particle());
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(7, 13, 26, 0.05)';
      ctx.fillRect(0, 0, W, H);
      ctx.font = fontSize + 'px JetBrains Mono, monospace';
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.95) {
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          const alpha = Math.random() * 0.4 + 0.05;
          const isGreen = Math.random() > 0.7;
          if (isGreen) {
            ctx.fillStyle = `rgba(0, 255, 213, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(0, 194, 255, ${alpha * 0.5})`;
          }
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, x, y);
          if (y > H && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 194, 255, ${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      frame++;
      if (frame % 3 === 0) drawMatrix();
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      if (frame % 2 === 0) drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef}></canvas>;
}
