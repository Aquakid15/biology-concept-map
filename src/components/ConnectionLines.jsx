import { motion } from 'framer-motion';
import { categories } from '../data/termsData';

function ConnectionLines({ positions, termsData, selectedTerm, hoveredTerm }) {
  const connections = [];
  
  // Build connection list from termsData relationships
  Object.entries(termsData).forEach(([termId, term]) => {
    if (term.relatedTerms && positions[termId]) {
      term.relatedTerms.forEach(relatedId => {
        if (positions[relatedId]) {
          // Avoid duplicates by only adding if termId < relatedId
          if (termId < relatedId) {
            connections.push({
              from: termId,
              to: relatedId,
              fromPos: positions[termId],
              toPos: positions[relatedId]
            });
          }
        }
      });
    }
  });

  const getLineOpacity = (connection) => {
    const activeTerm = selectedTerm || hoveredTerm;
    
    if (!activeTerm) return 0.15; // Default subtle
    
    // Highlight if this connection involves the active term
    if (connection.from === activeTerm || connection.to === activeTerm) {
      return 0.8;
    }
    
    // Check if it's between two connected terms
    const activeTermData = termsData[activeTerm];
    if (activeTermData?.relatedTerms) {
      const isRelevant = 
        (activeTermData.relatedTerms.includes(connection.from) && connection.to === activeTerm) ||
        (activeTermData.relatedTerms.includes(connection.to) && connection.from === activeTerm) ||
        (activeTermData.relatedTerms.includes(connection.from) && activeTermData.relatedTerms.includes(connection.to));
      
      if (isRelevant) return 0.4;
    }
    
    return 0.08; // Dim others
  };

  const getLineColor = (connection) => {
    const activeTerm = selectedTerm || hoveredTerm;
    if (connection.from === activeTerm || connection.to === activeTerm) {
      const term = termsData[activeTerm];
      const category = categories[term.category];
      return category?.color || '#ffffff';
    }
    return '#ffffff';
  };

  // Create curved path between two points
  const createCurvedPath = (from, to) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Control point for curve (perpendicular to line)
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const offsetX = -dy * 0.15;
    const offsetY = dx * 0.15;
    
    return `M ${from.x} ${from.y} Q ${midX + offsetX} ${midY + offsetY} ${to.x} ${to.y}`;
  };

  return (
    <g className="connections-layer">
      {connections.map((connection, index) => {
        const opacity = getLineOpacity(connection);
        const color = getLineColor(connection);
        const isHighlighted = opacity > 0.5;
        
        return (
          <motion.path
            key={`${connection.from}-${connection.to}`}
            d={createCurvedPath(connection.fromPos, connection.toPos)}
            stroke={color}
            strokeWidth={isHighlighted ? 0.3 : 0.15}
            fill="none"
            strokeLinecap="round"
            opacity={opacity}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: opacity
            }}
            transition={{ 
              pathLength: { duration: 1, delay: index * 0.01 },
              opacity: { duration: 0.3 }
            }}
            style={{
              filter: isHighlighted ? `drop-shadow(0 0 2px ${color})` : 'none'
            }}
          />
        );
      })}
    </g>
  );
}

export default ConnectionLines;
