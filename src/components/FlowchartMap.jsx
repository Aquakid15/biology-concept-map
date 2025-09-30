import { motion } from 'framer-motion';
import { useState } from 'react';
import FlowchartCategory from './FlowchartCategory';
import FlowchartArrows from './FlowchartArrows';
import { categories, getTermsByCategory } from '../data/termsData';
import './FlowchartMap.css';

function FlowchartMap({ onTermClick, selectedTerm }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="flowchart-map">
      {/* Header */}
      <motion.header 
        className="map-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Biology Concept Map</h1>
        <p className="subtitle">Interactive Flowchart: Life at the Molecular & Cellular Level</p>
      </motion.header>

      {/* Flowchart Content */}
      <div className="flowchart-content">
        <svg className="flowchart-arrows" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
          <FlowchartArrows hoveredCategory={hoveredCategory} />
        </svg>

        {/* Chemistry Foundations - Top Left */}
        <motion.div
          className="flowchart-section section-chemistry"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FlowchartCategory
            category={categories.chemistry}
            terms={getTermsByCategory('chemistry')}
            onTermClick={onTermClick}
            selectedTerm={selectedTerm}
            onHover={setHoveredCategory}
          />
        </motion.div>

        {/* Macromolecules - Top Right */}
        <motion.div
          className="flowchart-section section-macromolecules"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FlowchartCategory
            category={categories.macromolecules}
            terms={getTermsByCategory('macromolecules')}
            onTermClick={onTermClick}
            selectedTerm={selectedTerm}
            onHover={setHoveredCategory}
          />
        </motion.div>

        {/* Cell Structures - Bottom Left */}
        <motion.div
          className="flowchart-section section-cellstructures"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FlowchartCategory
            category={categories.cellStructures}
            terms={getTermsByCategory('cellStructures')}
            onTermClick={onTermClick}
            selectedTerm={selectedTerm}
            onHover={setHoveredCategory}
          />
        </motion.div>

        {/* Transport & Solutions - Bottom Right */}
        <motion.div
          className="flowchart-section section-transport"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FlowchartCategory
            category={categories.transport}
            terms={getTermsByCategory('transport')}
            onTermClick={onTermClick}
            selectedTerm={selectedTerm}
            onHover={setHoveredCategory}
          />
        </motion.div>

      </div>

      {/* Instructions */}
      <motion.div 
        className="instructions glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p>💡 <strong>Click</strong> any term to explore in detail</p>
      </motion.div>
    </div>
  );
}

export default FlowchartMap;
