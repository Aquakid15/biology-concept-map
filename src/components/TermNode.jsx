import { motion } from 'framer-motion';
import { useState } from 'react';
import DiagramSelector from './diagrams/DiagramSelector';
import './TermNode.css';

function TermNode({ term, categoryColor, onClick, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className={`term-node glass ${isSelected ? 'selected' : ''}`}
      variants={nodeVariants}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ '--term-color': categoryColor }}
    >
      <div className="term-diagram-mini">
        <DiagramSelector 
          termId={term.id} 
          size="small" 
          animate={isHovered}
        />
      </div>
      
      <div className="term-info">
        <h4 className="term-name">{term.name}</h4>
        <p className="term-short-def">{term.shortDef}</p>
      </div>

      <div className="term-glow" style={{ background: categoryColor }}></div>
    </motion.div>
  );
}

export default TermNode;
