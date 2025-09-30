import { motion } from 'framer-motion';

function DehydrationSynthesis({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 240 : 80;

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 140 80">
      {/* Left monomer */}
      <g>
        <rect x="10" y="25" width="25" height="25" rx="4" fill="#06b6d4" opacity="0.8" />
        <text x="15" y="42" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        {/* OH group */}
        <text x="30" y="40" fontSize="6" fill="#f97316">OH</text>
      </g>
      
      {/* Right monomer */}
      <motion.g
        animate={animate ? {
          x: [-35, 0, -35],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="85" y="25" width="25" height="25" rx="4" fill="#06b6d4" opacity="0.8" />
        <text x="90" y="42" fontSize="8" fill="#fff" fontWeight="bold">M</text>
        {/* H group */}
        <text x="80" y="40" fontSize="6" fill="#f97316">H</text>
      </motion.g>
      
      {/* Water molecule being released */}
      <motion.g
        animate={animate ? {
          y: [0, 20, 20],
          opacity: [0, 1, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      >
        <circle cx="60" cy="40" r="6" fill="#3b82f6" opacity="0.6" />
        <text x="55" y="43" fontSize="6" fill="#fff">H₂O</text>
      </motion.g>
      
      {/* Arrow */}
      <motion.path
        d="M 60 60 L 60 70 M 55 65 L 60 70 L 65 65"
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
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="5" y="10" fontSize="5" fill="rgba(255,255,255,0.7)">Monomers</text>
          <text x="35" y="75" fontSize="5" fill="rgba(255,255,255,0.7)">Water released</text>
        </>
      )}
    </svg>
  );
}

export default DehydrationSynthesis;
