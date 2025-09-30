import { motion } from 'framer-motion';

function FlowchartArrows({ hoveredCategory }) {
  const arrows = [
    // Chemistry → Macromolecules
    { from: 'chemistry', to: 'macromolecules', path: 'M 30 25 L 70 25', label: 'builds' },
    // Macromolecules → Cell Structures
    { from: 'macromolecules', to: 'cellStructures', path: 'M 70 35 L 70 50 L 30 50 L 30 75', label: 'forms' },
    // Chemistry → Cell Structures
    { from: 'chemistry', to: 'cellStructures', path: 'M 30 35 L 30 75', label: 'creates' },
    // Cell Structures → Transport
    { from: 'cellStructures', to: 'transport', path: 'M 30 85 L 70 85', label: 'enables' },
    // Macromolecules → Transport
    { from: 'macromolecules', to: 'transport', path: 'M 70 35 L 70 75', label: 'powers' },
  ];

  const getOpacity = (arrow) => {
    if (!hoveredCategory) return 0.3;
    if (arrow.from === hoveredCategory || arrow.to === hoveredCategory) return 0.8;
    return 0.1;
  };

  return (
    <>
      {arrows.map((arrow, index) => {
        const opacity = getOpacity(arrow);
        const isHighlighted = opacity > 0.5;

        return (
          <g key={index}>
            <motion.path
              d={arrow.path}
              stroke="rgba(139, 92, 246, 0.8)"
              strokeWidth={isHighlighted ? "2" : "1"}
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: opacity
              }}
              transition={{ 
                pathLength: { duration: 1, delay: index * 0.2 },
                opacity: { duration: 0.3 }
              }}
              style={{
                filter: isHighlighted ? 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))' : 'none'
              }}
            />
          </g>
        );
      })}

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3, 0 6"
            fill="rgba(139, 92, 246, 0.8)"
          />
        </marker>
      </defs>
    </>
  );
}

export default FlowchartArrows;
