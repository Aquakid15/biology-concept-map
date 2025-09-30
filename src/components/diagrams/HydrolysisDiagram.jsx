import { motion } from 'framer-motion';

function HydrolysisDiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 240 : 80;

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 140 80">
      {/* Polymer (joined) */}
      <g>
        <rect x="30" y="10" width="25" height="25" rx="4" fill="#8b5cf6" opacity="0.8" />
        <rect x="55" y="10" width="25" height="25" rx="4" fill="#8b5cf6" opacity="0.8" />
        <text x="35" y="27" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        <text x="60" y="27" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        {/* Bond line */}
        <line x1="55" y1="22" x2="55" y2="22" stroke="#fff" strokeWidth="3" />
      </g>
      
      {/* Water molecule being added */}
      <motion.g
        animate={animate ? {
          y: [20, 0, 20],
          opacity: [0, 1, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      >
        <circle cx="60" cy="25" r="6" fill="#3b82f6" opacity="0.6" />
        <text x="55" y="28" fontSize="6" fill="#fff">H₂O</text>
      </motion.g>
      
      {/* Arrow */}
      <motion.path
        d="M 60 45 L 60 55 M 55 50 L 60 55 L 65 50"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate ? {
          opacity: [0.3, 0.8, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Separated monomers */}
      <motion.g
        animate={animate ? {
          x: [0, -10, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="20" y="60" width="25" height="25" rx="4" fill="#10b981" opacity="0.8" />
        <text x="25" y="77" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        <text x="40" y="75" fontSize="6" fill="#f97316">OH</text>
      </motion.g>
      
      <motion.g
        animate={animate ? {
          x: [0, 10, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="75" y="60" width="25" height="25" rx="4" fill="#10b981" opacity="0.8" />
        <text x="80" y="77" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        <text x="70" y="75" fontSize="6" fill="#f97316">H</text>
      </motion.g>
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="40" y="7" fontSize="5" fill="rgba(255,255,255,0.7)">Polymer</text>
          <text x="30" y="95" fontSize="5" fill="rgba(255,255,255,0.7)">Separated Monomers</text>
        </>
      )}
    </svg>
  );
}

export default HydrolysisDiagram;
