import { motion } from 'framer-motion';

function TransportDiagram({ size = 'small', animate = false, termId = 'passiveTransport' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;
  const isActive = termId === 'activeTransport';

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 60">
      {/* Membrane */}
      <rect x="45" y="5" width="10" height="50" fill="rgba(236, 72, 153, 0.3)" stroke="rgba(236, 72, 153, 0.8)" strokeWidth="1" />
      
      {/* Channel protein */}
      <ellipse cx="50" cy="30" rx="8" ry="20" fill="#8b5cf6" opacity="0.7" />
      <ellipse cx="50" cy="30" rx="4" ry="18" fill="rgba(0,0,0,0.2)" />
      
      {/* Particle moving through */}
      <motion.circle
        cx={isActive ? 25 : 25}
        cy="30"
        r={isLarge ? 4 : 3}
        fill="#06b6d4"
        opacity="0.9"
        animate={animate ? {
          cx: isActive ? [25, 50, 75] : [25, 50, 75],
          cy: [30, 30, 30],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Arrow showing direction */}
      <motion.path
        d={isActive ? "M 25 45 L 75 45 M 72 42 L 75 45 L 72 48" : "M 25 45 L 75 45 M 72 42 L 75 45 L 72 48"}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate ? {
          opacity: [0.3, 0.9, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* ATP symbol for active transport */}
      {isActive && (
        <motion.g
          animate={animate ? {
            opacity: [1, 0.3, 1],
            scale: [1, 0.8, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <circle cx="50" cy="15" r="6" fill="#f59e0b" opacity="0.7" />
          <text x="45" y="18" fontSize="5" fill="#fff" fontWeight="bold">ATP</text>
        </motion.g>
      )}
      
      {/* Concentration indicators */}
      {isActive ? (
        <>
          <text x="8" y="15" fontSize={isLarge ? 5 : 4} fill="rgba(255,255,255,0.5)">Low</text>
          <text x="75" y="15" fontSize={isLarge ? 5 : 4} fill="rgba(255,255,255,0.5)">High</text>
        </>
      ) : (
        <>
          <text x="8" y="15" fontSize={isLarge ? 5 : 4} fill="rgba(255,255,255,0.5)">High</text>
          <text x="78" y="15" fontSize={isLarge ? 5 : 4} fill="rgba(255,255,255,0.5)">Low</text>
        </>
      )}
      
      {/* Labels */}
      {isLarge && (
        <text x="20" y="58" fontSize="5" fill="rgba(255,255,255,0.7)">
          {isActive ? 'Active (needs ATP)' : 'Passive (no energy)'}
        </text>
      )}
    </svg>
  );
}

export default TransportDiagram;
