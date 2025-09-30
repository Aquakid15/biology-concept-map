import { motion } from 'framer-motion';

function EnzymeDiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 120 80">
      {/* Enzyme (lock) */}
      <motion.path
        d="M 20 20 Q 15 25, 20 30 L 20 50 Q 15 55, 20 60 L 50 60 Q 55 55, 50 50 L 50 45 Q 60 45, 60 35 Q 60 25, 50 25 L 50 20 Q 55 15, 50 10 L 20 10 Q 15 15, 20 20 Z"
        fill="#8b5cf6"
        opacity="0.8"
        stroke="#a78bfa"
        strokeWidth="1"
      />
      
      {/* Active site */}
      <path
        d="M 50 25 Q 60 25, 60 35 Q 60 45, 50 45"
        fill="#6366f1"
        opacity="0.6"
      />
      
      {/* Substrate (key) */}
      <motion.g
        animate={animate ? {
          x: [40, 0, 40],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="65" y="28" width="15" height="14" rx="2" fill="#ec4899" opacity="0.8" />
        <rect x="80" y="32" width="20" height="6" rx="1" fill="#ec4899" opacity="0.8" />
        
        {/* Lock teeth matching */}
        <motion.path
          d="M 75 32 L 75 38"
          stroke="#f472b6"
          strokeWidth="2"
          animate={animate ? {
            opacity: [0, 1, 0],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.g>
      
      {/* Product (separated) */}
      {isLarge && animate && (
        <motion.g
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [80, 80, 100, 100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.4, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          <circle cx="0" cy="35" r="4" fill="#10b981" opacity="0.8" />
          <rect x="5" y="32" width="8" height="6" rx="1" fill="#10b981" opacity="0.8" />
        </motion.g>
      )}
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="15" y="75" fontSize="5" fill="rgba(255,255,255,0.7)">Enzyme</text>
          <text x="70" y="20" fontSize="5" fill="rgba(255,255,255,0.7)">Substrate</text>
        </>
      )}
    </svg>
  );
}

export default EnzymeDiagram;
