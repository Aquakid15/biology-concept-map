import { motion } from 'framer-motion';
import DiagramSelector from './diagrams/DiagramSelector';
import { categories } from '../data/termsData';

function NetworkNode({ 
  term, 
  position, 
  isSelected, 
  isHovered, 
  isConnected,
  isDimmed,
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}) {
  const category = categories[term.category];
  const categoryColor = category?.color || '#6366f1';
  
  const nodeSize = isSelected ? 12 : isHovered ? 10 : 8;
  const opacity = isDimmed ? 0.3 : 1;

  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Glow effect for selected/hovered */}
      {(isSelected || isHovered || isConnected) && (
        <motion.circle
          cx="0"
          cy="0"
          r={nodeSize + 2}
          fill={categoryColor}
          opacity="0.3"
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Node background circle */}
      <motion.circle
        cx="0"
        cy="0"
        r={nodeSize}
        fill="rgba(255, 255, 255, 0.1)"
        stroke={categoryColor}
        strokeWidth={isSelected ? 0.8 : isConnected ? 0.5 : 0.3}
        opacity={opacity}
        style={{
          backdropFilter: 'blur(10px)',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Mini diagram inside node */}
      <g transform={`scale(${nodeSize / 80})`} opacity={opacity}>
        <foreignObject x="-40" y="-40" width="80" height="80">
          <div style={{ 
            width: '80px', 
            height: '80px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <DiagramSelector 
              termId={term.id} 
              size="small" 
              animate={isHovered || isSelected}
            />
          </div>
        </foreignObject>
      </g>
      
      {/* Term label */}
      <motion.text
        y={nodeSize + 3}
        textAnchor="middle"
        fontSize="2.5"
        fill="#ffffff"
        fontWeight={isSelected || isHovered ? "600" : "400"}
        opacity={opacity}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {term.name}
      </motion.text>
      
      {/* Pulse ring for connected nodes */}
      {isConnected && !isSelected && !isHovered && (
        <motion.circle
          cx="0"
          cy="0"
          r={nodeSize}
          fill="none"
          stroke={categoryColor}
          strokeWidth="0.5"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
    </g>
  );
}

export default NetworkNode;
