import React from 'react';
import { skills } from '../data/skills';
import DraggableWidgetGrid from './ui/draggable-widget-grid';
import './SkillUniverse.css';

const WIDGETS = [
  { id: 'PROGRAMMING', size: 'wide', label: 'Programming' },
  { id: 'BACKEND & APIs', size: 'wide', label: 'Backend' },
  { id: 'AI / MACHINE LEARNING', size: 'wide', label: 'AI' },
  { id: 'DEEP LEARNING / COMPUTER VISION', size: 'wide', label: 'CV' },
  { id: 'NLP / GENERATIVE AI', size: 'wide', label: 'NLP' },
  { id: 'WEB DEVELOPMENT', size: 'wide', label: 'Web' },
  { id: 'EMBEDDED AI & AUTOMATION', size: 'wide', label: 'Embedded & Automation' },
  { id: 'DATABASE & TOOLS', size: 'wide', label: 'DB & Tools' },
];

const renderWidget = (item) => {
  const categorySkills = skills[item.id] || [];
  
  return (
    <div className="skill-card-inner">
      <h3 className="category-title mono">{item.id}</h3>
      <div className="skills-list">
        {categorySkills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const SkillUniverse = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title mono text-center">05 // SKILL CONSTELLATION</h2>
      
  

      <div className="skills-grid-wrapper">
        <DraggableWidgetGrid
          items={WIDGETS}
          renderItem={renderWidget}
          maxColumns={4}
          cellSize={240}
        />
      </div>
    </section>
  );
};

export default SkillUniverse;
