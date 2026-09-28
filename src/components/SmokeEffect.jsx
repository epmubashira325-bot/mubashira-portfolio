import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 15 + 5; // Slightly larger for better visibility
    this.speedX = Math.random() * 2 - 1;
    this.speedY = -Math.random() * 3 - 1;
    this.life = 100;
    this.initialSize = this.size;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 1.5; // Slightly faster fade
    this.size = Math.max(0, this.initialSize * (this.life / 100));
  }
}

const SmokeEffect = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particlesRef.current = particlesRef.current
        .filter(particle => particle.life > 0 && particle.size > 0)
        .map(particle => {
          particle.update();
          
          // Draw particle
          if (particle.size > 0) {
            const opacity = (particle.life / 100) * 0.3; // Soft smoke opacity
            ctx.fillStyle = `rgba(180, 200, 255, ${opacity})`; // Soft blueish-white smoke
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }
          
          return particle;
        });

      // Add new particles near mouse position
      if (mousePosRef.current.x !== 0 && mousePosRef.current.y !== 0) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(
            new Particle(
              mousePosRef.current.x + (Math.random() * 20 - 10),
              mousePosRef.current.y + (Math.random() * 20 - 10)
            )
          );
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Set initial canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: 0, y: 0 };
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // ensures it renders over everything
      }}
    />
  );
};

export default SmokeEffect;
