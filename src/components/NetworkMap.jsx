import { motion } from 'framer-motion';
import { useState } from 'react';
import NetworkNode from './NetworkNode';
import ConnectionLines from './ConnectionLines';
import { termsData } from '../data/termsData';
import './NetworkMap.css';

function NetworkMap({ onTermClick, selectedTerm }) {
  const [hoveredTerm, setHoveredTerm] = useState(null);

  // Define positions for all nodes in a radial/organic layout
  const nodePositions = {
    // Center - The Cell concept
    cellMembrane: { x: 50, y: 50 },
    
    // Inner ring - Cell Structures (close to center)
    phospholipids: { x: 50, y: 35 },
    hydrophobic: { x: 62, y: 42 },
    hydrophilic: { x: 38, y: 42 },
    organelle: { x: 50, y: 65 },
    
    // Chemistry ring (top-left quadrant)
    atom: { x: 20, y: 20 },
    proton: { x: 15, y: 30 },
    neutron: { x: 25, y: 30 },
    electron: { x: 12, y: 38 },
    organicCompound: { x: 30, y: 25 },
    acidBase: { x: 25, y: 15 },
    conservationOfMatter: { x: 35, y: 18 },
    
    // Macromolecules ring (left side)
    macromolecule: { x: 15, y: 50 },
    monomerPolymer: { x: 8, y: 55 },
    dehydrationSynthesis: { x: 12, y: 62 },
    hydrolysis: { x: 20, y: 62 },
    
    // Proteins cluster (bottom-left)
    proteins: { x: 25, y: 70 },
    aminoAcids: { x: 20, y: 78 },
    rGroup: { x: 30, y: 78 },
    enzyme: { x: 32, y: 65 },
    
    // Carbohydrates cluster (bottom)
    carbohydrates: { x: 42, y: 75 },
    monosaccharides: { x: 42, y: 83 },
    
    // Lipids cluster (bottom-right)
    lipids: { x: 58, y: 75 },
    
    // Nucleic acids (right-bottom)
    nucleicAcids: { x: 70, y: 70 },
    
    // Transport ring (right side)
    passiveTransport: { x: 75, y: 45 },
    activeTransport: { x: 75, y: 55 },
    diffusion: { x: 85, y: 40 },
    osmosis: { x: 85, y: 50 },
    facilitatedDiffusion: { x: 82, y: 35 },
    endocytosis: { x: 82, y: 60 },
    exocytosis: { x: 85, y: 65 },
    
    // Solutions cluster (top-right)
    hypertonic: { x: 75, y: 25 },
    hypotonic: { x: 82, y: 20 },
    isotonic: { x: 68, y: 22 },
    homeostasis: { x: 70, y: 30 },
  };

  return (
    <div className="network-map">
      {/* Header */}
      <motion.header 
        className="map-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Biology Concept Map</h1>
        <p className="subtitle">Interactive Network: Life at the Molecular & Cellular Level</p>
      </motion.header>

      {/* SVG Canvas for the network */}
      <div className="network-canvas">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Connection lines layer */}
          <ConnectionLines 
            positions={nodePositions}
            termsData={termsData}
            selectedTerm={selectedTerm}
            hoveredTerm={hoveredTerm}
          />
          
          {/* Nodes layer */}
          <g className="nodes-layer">
            {Object.entries(nodePositions).map(([termId, position]) => {
              const term = termsData[termId];
              if (!term) return null;
              
              return (
                <NetworkNode
                  key={termId}
                  term={term}
                  position={position}
                  isSelected={selectedTerm === termId}
                  isHovered={hoveredTerm === termId}
                  isConnected={
                    selectedTerm && term.relatedTerms?.includes(selectedTerm) ||
                    hoveredTerm && term.relatedTerms?.includes(hoveredTerm)
                  }
                  isDimmed={
                    (selectedTerm || hoveredTerm) && 
                    selectedTerm !== termId && 
                    hoveredTerm !== termId &&
                    !(selectedTerm && term.relatedTerms?.includes(selectedTerm)) &&
                    !(hoveredTerm && term.relatedTerms?.includes(hoveredTerm))
                  }
                  onClick={() => onTermClick(termId)}
                  onMouseEnter={() => setHoveredTerm(termId)}
                  onMouseLeave={() => setHoveredTerm(null)}
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Legend */}
      <motion.div 
        className="network-legend glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#6366f1' }}></div>
          <span>Chemistry</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#8b5cf6' }}></div>
          <span>Macromolecules</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#ec4899' }}></div>
          <span>Cell Structures</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#06b6d4' }}></div>
          <span>Transport</span>
        </div>
      </motion.div>

      {/* Instructions */}
      <motion.div 
        className="instructions glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p>💡 <strong>Hover</strong> to see connections • <strong>Click</strong> to explore in detail</p>
      </motion.div>
    </div>
  );
}

export default NetworkMap;
