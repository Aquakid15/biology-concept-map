import { motion } from 'framer-motion';
import { useState } from 'react';
import DiagramSelector from './diagrams/DiagramSelector';
import './FlowchartTerm.css';

function FlowchartTerm({ term, categoryColor, isSelected, onClick, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`flowchart-term ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      style={{ '--term-color': categoryColor }}
    >
      {/* Mini diagram */}
      <div className="term-diagram-container">
        <DiagramSelector 
          termId={term.id} 
          size="small" 
          animate={isHovered || isSelected}
        />
      </div>

      {/* Term name */}
      <div className="term-name">{term.name}</div>

      {/* Glow effect */}
      <div className="term-glow" style={{ background: categoryColor }}></div>
    </motion.div>
  );
}

export default FlowchartTerm;
