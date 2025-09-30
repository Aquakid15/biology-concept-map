import { motion } from 'framer-motion';

function EndoExoDiagram({ size = 'small', animate = false, termId = 'endocytosis' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;
  const isEndo = termId === 'endocytosis';

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 80">
      {/* Cell membrane */}
      <motion.path
        d={isEndo ? "M 10 40 L 30 40 Q 40 40, 45 50 Q 50 60, 55 50 Q 60 40, 70 40 L 90 40" : "M 10 40 L 30 40 L 70 40 L 90 40"}
        stroke="#ec4899"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={animate && isEndo ? {
          d: [
            "M 10 40 L 30 40 Q 40 40, 45 50 Q 50 60, 55 50 Q 60 40, 70 40 L 90 40",
            "M 10 40 L 30 40 Q 35 40, 40 45 Q 50 55, 60 45 Q 65 40, 70 40 L 90 40",
            "M 10 40 L 30 40 L 70 40 L 90 40"
          ]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Particle/Material */}
      <motion.g
        animate={animate ? (isEndo ? {
          y: [-20, -10, 20],
          x: [50, 50, 50],
        } : {
          y: [20, 10, -20],
          x: [50, 50, 50],
        }) : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="50" cy={isEndo ? 20 : 60} r="5" fill="#06b6d4" opacity="0.9" />
        {isLarge && (
          <>
            <circle cx="48" cy={isEndo ? 18 : 58} r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="52" cy={isEndo ? 22 : 62} r="1.5" fill="#3b82f6" opacity="0.7" />
          </>
        )}
      </motion.g>
      
      {/* Vesicle forming */}
      {animate && (
        <motion.circle
          cx="50"
          cy="55"
          r="8"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="4,2"
          animate={isEndo ? {
            opacity: [0, 1, 0],
            r: [5, 8, 10],
          } : {
            opacity: [0, 1, 0],
            r: [10, 8, 5],
            cy: [55, 45, 35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Arrow indicating direction */}
      <motion.path
        d={isEndo ? "M 75 25 L 75 35 M 72 32 L 75 35 L 78 32" : "M 75 55 L 75 45 M 72 48 L 75 45 L 78 48"}
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
      
      {/* ATP indicator */}
      <circle cx="20" cy="20" r="6" fill="#f59e0b" opacity="0.7" />
      {isLarge && (
        <text x="15" y="23" fontSize="5" fill="#fff" fontWeight="bold">ATP</text>
      )}
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="15" y="75" fontSize="5" fill="rgba(255,255,255,0.7)">
            {isEndo ? 'Endocytosis (IN)' : 'Exocytosis (OUT)'}
          </text>
          <text x="5" y="10" fontSize="4" fill="rgba(255,255,255,0.5)">Active Transport</text>
        </>
      )}
    </svg>
  );
}

export default EndoExoDiagram;
