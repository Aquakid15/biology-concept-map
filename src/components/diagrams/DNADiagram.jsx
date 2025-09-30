import { motion } from 'framer-motion';

function DNADiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 80 100">
      {/* DNA double helix */}
      <motion.g
        animate={animate ? {
          y: [0, -5, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Left strand */}
        <path
          d="M 20 10 Q 15 30, 20 50 Q 25 70, 20 90"
          stroke="#ec4899"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Right strand */}
        <path
          d="M 60 10 Q 65 30, 60 50 Q 55 70, 60 90"
          stroke="#ec4899"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Base pairs */}
        <g>
          <line x1="20" y1="15" x2="60" y2="20" stroke="#06b6d4" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="25" x2="60" y2="28" stroke="#8b5cf6" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="35" x2="60" y2="36" stroke="#10b981" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="45" x2="60" y2="44" stroke="#f59e0b" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="55" x2="60" y2="52" stroke="#06b6d4" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="65" x2="60" y2="60" stroke="#8b5cf6" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="75" x2="60" y2="72" stroke="#10b981" strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="85" x2="60" y2="80" stroke="#f59e0b" strokeWidth="2" opacity="0.8" />
        </g>
        
        {/* Nucleotide markers */}
        {isLarge && (
          <>
            <circle cx="20" cy="15" r="2.5" fill="#06b6d4" />
            <circle cx="60" cy="20" r="2.5" fill="#06b6d4" />
            <circle cx="20" cy="35" r="2.5" fill="#10b981" />
            <circle cx="60" cy="36" r="2.5" fill="#10b981" />
            <circle cx="20" cy="55" r="2.5" fill="#06b6d4" />
            <circle cx="60" cy="52" r="2.5" fill="#06b6d4" />
            <circle cx="20" cy="75" r="2.5" fill="#10b981" />
            <circle cx="60" cy="72" r="2.5" fill="#10b981" />
          </>
        )}
      </motion.g>
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="25" y="8" fontSize="5" fill="rgba(255,255,255,0.7)">DNA Double Helix</text>
          <text x="15" y="98" fontSize="4" fill="rgba(255,255,255,0.5)">Base Pairs</text>
        </>
      )}
    </svg>
  );
}

export default DNADiagram;
