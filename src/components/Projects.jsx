import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
];

const Card = ({ src, i, n, progress, name, link }) => {
  const step = 1 / Math.max(n - 1, 1);
  const isFirst = i === 0;
  const isLast = i === n - 1;

  // Card i slides up over the previous card. The first card never moves.
  // All ranges stay inside [0, 1].
  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [(i - 1) * step, i * step],
    isFirst ? ['0%', '0%'] : ['100%', '0%']
  );

  // Once the next card covers it, this card shrinks/fades slightly.
  // The last card has nothing covering it, so it stays put.
  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [i * step, (i + 1) * step],
    isLast ? [1, 1] : [1, 0.98]
  );
  const opacity = useTransform(
    progress,
    isLast ? [0, 1] : [i * step, (i + 1) * step],
    isLast ? [1, 1] : [1, 0.6]
  );

  return (
    <motion.figure className="pg-card" style={{ y, scale, opacity }}>
      <img
        src={src}
        alt={`${name}, image ${i + 1} of ${n}`}
        className="pg-img"
        loading={i === 0 ? 'eager' : 'lazy'}
        draggable="false"
      />
      <div className="pg-gradient" />
      <figcaption className="pg-label">{name}</figcaption>
      <a href={link} className="pg-arrow" aria-label={`View ${name}`}>
        <ArrowUpRight size={20} strokeWidth={2} />
      </a>
    </motion.figure>
  );
};

const Gallery = ({ images, name, link }) => {
  const trackRef = useRef(null);
  const n = images.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  return (
    // Track is tall; the inner pin stays sticky while the track scrolls past
    <div className="pg-track" ref={trackRef} style={{ height: `${100 + (n - 1) * 80}vh` }}>
      <div className="pg-pin">
        <div className="pg-stack">
          {images.map((src, i) => (
            <Card
              key={`${src}-${i}`}
              src={src}
              i={i}
              n={n}
              progress={scrollYProgress}
              name={name}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ project, index }) => {
  const images = project.images?.length ? project.images : FALLBACK_IMAGES;

  return (
    <article className="project-section">
      <div className="project-info">
        <span className="project-num mono">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="mono tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-gallery-col">
        <Gallery images={images} name={project.title} link={project.link} />
      </div>
    </article>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title mono gallery-title">04 // SELECTED WORKS</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);

export default Projects;