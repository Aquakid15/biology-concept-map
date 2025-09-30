import { motion } from 'framer-motion';

function PhospholipidBilayer({ size = 'small', animate = false, termId = 'cellMembrane' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 240 : 80;
  
  const highlightHydrophilic = termId === 'hydrophilic';
  const highlightHydrophobic = termId === 'hydrophobic';

  const Phospholipid = ({ x, y, flip = false }) => (
    <g transform={`translate(${x}, ${y}) ${flip ? 'scale(1, -1)' : ''}`}>
      {/* Head (hydrophilic) */}
      <motion.circle 
        cx="0" 
        cy="0" 
        r={highlightHydrophilic ? 4 : 3}
        fill="#06b6d4" 
        opacity={highlightHydrophobic ? 0.3 : 0.9}
        animate={animate && highlightHydrophilic ? {
          r: [4, 5, 4],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Glow for hydrophilic heads */}
      {highlightHydrophilic && (
        <circle cx="0" cy="0" r="6" fill="#06b6d4" opacity="0.3" />
      )}
      
      {/* Tails (hydrophobic) */}
      <motion.path
        d="M -1 3 Q -2 8, -1.5 13"
        stroke="#f59e0b"
        strokeWidth={highlightHydrophobic ? 2.5 : 1.5}
        fill="none"
        strokeLinecap="round"
        opacity={highlightHydrophilic ? 0.3 : 1}
        animate={animate ? {
          d: highlightHydrophobic ? [
            "M -1 3 Q -2 8, -1.5 13",
            "M -1 3 Q -3 8, -2 13",
            "M -1 3 Q -2 8, -1.5 13"
          ] : [
            "M -1 3 Q -2 8, -1.5 13",
            "M -1 3 Q -1 8, -1.5 13",
            "M -1 3 Q -2 8, -1.5 13"
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M 1 3 Q 2 8, 1.5 13"
        stroke="#f59e0b"
        strokeWidth={highlightHydrophobic ? 2.5 : 1.5}
        fill="none"
        strokeLinecap="round"
        opacity={highlightHydrophilic ? 0.3 : 1}
        animate={animate ? {
          d: highlightHydrophobic ? [
            "M 1 3 Q 2 8, 1.5 13",
            "M 1 3 Q 3 8, 2 13",
            "M 1 3 Q 2 8, 1.5 13"
          ] : [
            "M 1 3 Q 2 8, 1.5 13",
            "M 1 3 Q 1 8, 1.5 13",
            "M 1 3 Q 2 8, 1.5 13"
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      />
    </g>
  );

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 100">
      {/* Top layer phospholipids */}
      {[...Array(isLarge ? 8 : 5)].map((_, i) => (
        <Phospholipid 
          key={`top-${i}`} 
          x={10 + (i * (isLarge ? 11 : 18))} 
          y={25} 
          flip={false}
        />
      ))}
      
      {/* Bottom layer phospholipids */}
      {[...Array(isLarge ? 8 : 5)].map((_, i) => (
        <Phospholipid 
          key={`bottom-${i}`} 
          x={10 + (i * (isLarge ? 11 : 18))} 
          y={75} 
          flip={true}
        />
      ))}
      
      {/* Membrane protein */}
      {isLarge && (
        <motion.g
          animate={animate ? {
            y: [0, 2, 0],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ellipse cx="50" cy="50" rx="6" ry="18" fill="#8b5cf6" opacity="0.8" />
          <ellipse cx="50" cy="50" rx="4" ry="16" fill="#a78bfa" opacity="0.6" />
        </motion.g>
      )}
      
      {/* Labels for large view */}
      {isLarge && (
        <>
          <text 
            x="5" 
            y="18" 
            fontSize={highlightHydrophilic ? 5 : 4} 
            fill="#06b6d4" 
            opacity={highlightHydrophobic ? 0.4 : 1}
            fontWeight={highlightHydrophilic ? "bold" : "normal"}
          >
            Hydrophilic (water-loving)
          </text>
          <text 
            x="15" 
            y="95" 
            fontSize={highlightHydrophilic ? 5 : 4} 
            fill="#06b6d4" 
            opacity={highlightHydrophobic ? 0.4 : 1}
            fontWeight={highlightHydrophilic ? "bold" : "normal"}
          >
            Hydrophilic
          </text>
          <text 
            x="25" 
            y="50" 
            fontSize={highlightHydrophobic ? 5 : 4} 
            fill="#f59e0b" 
            opacity={highlightHydrophilic ? 0.4 : 1}
            fontWeight={highlightHydrophobic ? "bold" : "normal"}
          >
            Hydrophobic (water-fearing)
          </text>
        </>
      )}
    </svg>
  );
}

export default PhospholipidBilayer;
