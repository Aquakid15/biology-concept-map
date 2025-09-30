import { motion } from 'framer-motion';

function AtomDiagram({ size = 'small', animate = false, termId = 'atom' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 200 : 80;
  
  // Determine what to highlight
  const highlightProtons = termId === 'proton';
  const highlightNeutrons = termId === 'neutron';
  const highlightElectrons = termId === 'electron';

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 100">
      {/* Nucleus background */}
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill="#ec4899"
        opacity={highlightElectrons ? 0.3 : 0.8}
        animate={animate ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Protons */}
      <motion.g
        animate={animate && highlightProtons ? {
          scale: [1, 1.15, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <circle 
          cx="47" 
          cy="48" 
          r="3" 
          fill="#f97316" 
          opacity={highlightNeutrons || highlightElectrons ? 0.3 : 1}
        />
        <circle 
          cx="53" 
          cy="48" 
          r="3" 
          fill="#f97316"
          opacity={highlightNeutrons || highlightElectrons ? 0.3 : 1}
        />
        <circle 
          cx="50" 
          cy="52" 
          r="3" 
          fill="#f97316"
          opacity={highlightNeutrons || highlightElectrons ? 0.3 : 1}
        />
        
        {/* Proton charge labels */}
        {(highlightProtons || isLarge) && (
          <>
            <text x="46" y="49.5" fontSize="3" fill="#fff" fontWeight="bold">+</text>
            <text x="52" y="49.5" fontSize="3" fill="#fff" fontWeight="bold">+</text>
            <text x="49" y="53.5" fontSize="3" fill="#fff" fontWeight="bold">+</text>
          </>
        )}
        
        {/* Glow effect for protons */}
        {highlightProtons && (
          <>
            <circle cx="47" cy="48" r="5" fill="#f97316" opacity="0.3" />
            <circle cx="53" cy="48" r="5" fill="#f97316" opacity="0.3" />
            <circle cx="50" cy="52" r="5" fill="#f97316" opacity="0.3" />
          </>
        )}
      </motion.g>
      
      {/* Neutrons */}
      <motion.g
        animate={animate && highlightNeutrons ? {
          scale: [1, 1.15, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <circle 
          cx="47" 
          cy="52" 
          r="3" 
          fill="#94a3b8"
          opacity={highlightProtons || highlightElectrons ? 0.3 : 1}
        />
        <circle 
          cx="53" 
          cy="52" 
          r="3" 
          fill="#94a3b8"
          opacity={highlightProtons || highlightElectrons ? 0.3 : 1}
        />
        
        {/* Neutron charge labels (neutral = 0) */}
        {(highlightNeutrons || isLarge) && (
          <>
            <text x="45.5" y="53.5" fontSize="3" fill="#fff" fontWeight="bold">0</text>
            <text x="51.5" y="53.5" fontSize="3" fill="#fff" fontWeight="bold">0</text>
          </>
        )}
        
        {/* Glow effect for neutrons */}
        {highlightNeutrons && (
          <>
            <circle cx="47" cy="52" r="5" fill="#94a3b8" opacity="0.3" />
            <circle cx="53" cy="52" r="5" fill="#94a3b8" opacity="0.3" />
          </>
        )}
      </motion.g>
      
      {/* Electron orbits */}
      <motion.ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="15"
        fill="none"
        stroke="#06b6d4"
        strokeWidth={highlightElectrons ? "1" : "0.5"}
        opacity={highlightProtons || highlightNeutrons ? 0.3 : (highlightElectrons ? 0.9 : 0.6)}
        animate={animate ? {
          rotate: 360,
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.ellipse
        cx="50"
        cy="50"
        rx="15"
        ry="30"
        fill="none"
        stroke="#06b6d4"
        strokeWidth={highlightElectrons ? "1" : "0.5"}
        opacity={highlightProtons || highlightNeutrons ? 0.3 : (highlightElectrons ? 0.9 : 0.6)}
        animate={animate ? {
          rotate: -360,
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Electrons */}
      <motion.g opacity={highlightProtons || highlightNeutrons ? 0.3 : 1}>
        <motion.g
          animate={animate && highlightElectrons ? {
            scale: [1, 1.3, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle
            cx="80"
            cy="50"
            r={highlightElectrons ? 3 : 2.5}
            fill="#06b6d4"
          >
            <animateMotion
              dur={animate ? "3s" : "0s"}
              repeatCount="indefinite"
              path="M50,50 m-30,0 a30,15 0 1,0 60,0 a30,15 0 1,0 -60,0"
            />
          </circle>
          
          {/* Electron charge label */}
          {highlightElectrons && (
            <text fontSize="4" fill="#06b6d4" fontWeight="bold">
              <animateMotion
                dur={animate ? "3s" : "0s"}
                repeatCount="indefinite"
                path="M50,50 m-30,0 a30,15 0 1,0 60,0 a30,15 0 1,0 -60,0"
              />
              -
            </text>
          )}
          
          {/* Glow for electrons */}
          {highlightElectrons && (
            <circle r="5" fill="#06b6d4" opacity="0.3">
              <animateMotion
                dur={animate ? "3s" : "0s"}
                repeatCount="indefinite"
                path="M50,50 m-30,0 a30,15 0 1,0 60,0 a30,15 0 1,0 -60,0"
              />
            </circle>
          )}
        </motion.g>
        
        <motion.g
          animate={animate && highlightElectrons ? {
            scale: [1, 1.3, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.75
          }}
        >
          <circle
            cx="50"
            cy="20"
            r={highlightElectrons ? 3 : 2.5}
            fill="#06b6d4"
          >
            <animateMotion
              dur={animate ? "4s" : "0s"}
              repeatCount="indefinite"
              path="M50,50 m0,-30 a15,30 0 1,0 0,60 a15,30 0 1,0 0,-60"
            />
          </circle>
          
          {/* Electron charge label */}
          {highlightElectrons && (
            <text fontSize="4" fill="#06b6d4" fontWeight="bold">
              <animateMotion
                dur={animate ? "4s" : "0s"}
                repeatCount="indefinite"
                path="M50,50 m0,-30 a15,30 0 1,0 0,60 a15,30 0 1,0 0,-60"
              />
              -
            </text>
          )}
          
          {/* Glow for electrons */}
          {highlightElectrons && (
            <circle r="5" fill="#06b6d4" opacity="0.3">
              <animateMotion
                dur={animate ? "4s" : "0s"}
                repeatCount="indefinite"
                path="M50,50 m0,-30 a15,30 0 1,0 0,60 a15,30 0 1,0 0,-60"
              />
            </circle>
          )}
        </motion.g>
      </motion.g>
      
      {/* Labels */}
      {isLarge && (
        <>
          {highlightProtons && (
            <text x="65" y="50" fontSize="5" fill="#f97316" fontWeight="bold">Proton (+)</text>
          )}
          {highlightNeutrons && (
            <text x="65" y="50" fontSize="5" fill="#94a3b8" fontWeight="bold">Neutron (0)</text>
          )}
          {highlightElectrons && (
            <text x="35" y="12" fontSize="5" fill="#06b6d4" fontWeight="bold">Electron (−)</text>
          )}
        </>
      )}
    </svg>
  );
}

export default AtomDiagram;
