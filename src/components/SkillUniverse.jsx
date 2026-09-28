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
  { id: 'EMBEDDED AI', size: 'wide', label: 'Embedded' },
  { id: 'TOOLS', size: 'wide', label: 'Tools' },
];

const renderWidget = (item) => {
  const categorySkills = skills[item.id] || [];
  
  return (
    <div style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 className="category-title mono" style={{ marginBottom: '1rem', fontSize: '1rem' }}>{item.id}</h3>
      <div className="skills-list" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignContent: 'flex-start' }}>
        {categorySkills.map(skill => (
          <span key={skill} className="skill-tag" style={{ margin: 0 }}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const SkillUniverse = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title mono text-center">02 // SKILL CONSTELLATION</h2>
      
      <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.85rem' }}>
        Drag and rearrange widgets to customize the layout.
      </p>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
