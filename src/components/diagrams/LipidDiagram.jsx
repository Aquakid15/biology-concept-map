import { motion } from 'framer-motion';

function LipidDiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 80">
      {/* Glycerol head */}
      <motion.g
        animate={animate ? {
          x: [0, -2, 0],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="35" y="10" width="30" height="12" rx="3" fill="#06b6d4" opacity="0.8" />
        {isLarge && (
          <text x="40" y="18" fontSize="5" fill="#fff" fontWeight="bold">Glycerol</text>
        )}
      </motion.g>
      
      {/* Fatty acid tails */}
      <motion.g
        animate={animate ? {
          d: [
            "M 40 22 L 38 30 L 40 38 L 38 46 L 40 54 L 38 62",
            "M 40 22 L 39 30 L 40 38 L 39 46 L 40 54 L 39 62",
            "M 40 22 L 38 30 L 40 38 L 38 46 L 40 54 L 38 62"
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path
          d="M 40 22 L 38 30 L 40 38 L 38 46 L 40 54 L 38 62"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      
      <motion.g
        animate={animate ? {
          d: [
            "M 50 22 L 52 30 L 50 38 L 52 46 L 50 54 L 52 62",
            "M 50 22 L 51 30 L 50 38 L 51 46 L 50 54 L 51 62",
            "M 50 22 L 52 30 L 50 38 L 52 46 L 50 54 L 52 62"
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      >
        <path
          d="M 50 22 L 52 30 L 50 38 L 52 46 L 50 54 L 52 62"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      
      <motion.g
        animate={animate ? {
          d: [
            "M 60 22 L 58 30 L 60 38 L 58 46 L 60 54 L 58 62",
            "M 60 22 L 59 30 L 60 38 L 59 46 L 60 54 L 59 62",
            "M 60 22 L 58 30 L 60 38 L 58 46 L 60 54 L 58 62"
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        <path
          d="M 60 22 L 58 30 L 60 38 L 58 46 L 60 54 L 58 62"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="20" y="72" fontSize="5" fill="rgba(255,255,255,0.7)">Fatty Acid Tails</text>
          <text x="10" y="8" fontSize="4" fill="rgba(255,255,255,0.5)">Triglyceride (Fat)</text>
        </>
      )}
    </svg>
  );
}

export default LipidDiagram;
