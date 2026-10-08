import React, { useEffect, useRef } from 'react';
import './custom-cursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    // Check for touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    document.body.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = 0.9;
        glow.style.opacity = 1;
        dotX = mouseX;
        dotY = mouseY;
        glowX = mouseX;
        glowY = mouseY;
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = 0;
      glow.style.opacity = 0;
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = 0.9;
      glow.style.opacity = 1;
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });

    // Render loop using requestAnimationFrame for optimal performance
    let animationFrameId;
    const render = () => {
      // Dot follows almost immediately
      dotX += (mouseX - dotX) * 0.6;
      dotY += (mouseY - dotY) * 0.6;
      
      // Glow follows with subtle delay/trail
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      // Calculate scale
      let scale = 1;
      if (isClicking) {
        scale = 0.8;
      } else if (isHovering) {
        scale = 2.5;
      }
      
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%) scale(${scale})`;
      
      if (isHovering && !isClicking) {
        glow.style.backgroundColor = 'rgba(214, 214, 214, 0.15)';
        glow.style.borderColor = 'rgba(214, 214, 214, 0.25)';
      } else {
        glow.style.backgroundColor = 'transparent';
        glow.style.borderColor = 'rgba(214, 214, 214, 0.15)';
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    // Event delegation for hover states
    const interactiveSelectors = 'a, button, input, select, textarea, [role="button"], .archive-card, .project-card, .skill-tag';
    
    const handleMouseOver = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        isHovering = true;
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        isHovering = false;
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={glowRef} className="custom-cursor-glow" />
    </>
  );
};

export default CustomCursor;
