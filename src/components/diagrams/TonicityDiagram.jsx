import { motion } from 'framer-motion';

function TonicityDiagram({ size = 'small', animate = false, termId = 'isotonic' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  const Cell = ({ type, x }) => {
    const scale = type === 'hypotonic' ? 1.2 : type === 'hypertonic' ? 0.8 : 1;
    
    return (
      <g transform={`translate(${x}, 30)`}>
        {/* Cell membrane */}
        <motion.ellipse
          cx="0"
          cy="0"
          rx={15 * scale}
          ry={12 * scale}
          fill="rgba(236, 72, 153, 0.2)"
          stroke="#ec4899"
          strokeWidth="1.5"
          animate={animate ? {
            rx: type === 'hypotonic' ? [15, 18, 15] : type === 'hypertonic' ? [12, 10, 12] : [15, 15.5, 15],
            ry: type === 'hypotonic' ? [12, 14, 12] : type === 'hypertonic' ? [10, 8, 10] : [12, 12.5, 12],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Water molecules inside */}
        {type === 'hypotonic' ? (
          // More water
          <>
            <circle cx="-5" cy="-3" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="5" cy="-3" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="0" cy="3" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="-6" cy="4" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="6" cy="4" r="1.5" fill="#3b82f6" opacity="0.7" />
          </>
        ) : type === 'hypertonic' ? (
          // Less water
          <>
            <circle cx="-3" cy="0" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="3" cy="0" r="1.5" fill="#3b82f6" opacity="0.7" />
          </>
        ) : (
          // Normal water
          <>
            <circle cx="-4" cy="-2" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="4" cy="-2" r="1.5" fill="#3b82f6" opacity="0.7" />
            <circle cx="0" cy="3" r="1.5" fill="#3b82f6" opacity="0.7" />
          </>
        )}
        
        {/* Arrow for water movement */}
        {type !== 'isotonic' && animate && (
          <motion.path
            d={type === 'hypotonic' ? "M -20 0 L -16 0 M -17 -2 L -16 0 L -17 2" : "M 16 0 L 20 0 M 17 -2 L 20 0 L 17 2"}
            stroke="#3b82f6"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </g>
    );
  };

  const getType = () => {
    if (termId === 'hypotonic') return 'hypotonic';
    if (termId === 'hypertonic') return 'hypertonic';
    return 'isotonic';
  };

  const type = getType();

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 80 60">
      {/* Solution container */}
      <rect x="5" y="15" width="70" height="35" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" rx="4" />
      
      {/* Cell */}
      <Cell type={type} x={40} />
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="25" y="12" fontSize="5" fill="rgba(255,255,255,0.7)">
            {type === 'hypotonic' ? 'Hypotonic (swells)' : 
             type === 'hypertonic' ? 'Hypertonic (shrinks)' : 
             'Isotonic (balanced)'}
          </text>
          <text x="15" y="57" fontSize="4" fill="rgba(255,255,255,0.5)">
            {type === 'hypotonic' ? 'Water enters cell' : 
             type === 'hypertonic' ? 'Water leaves cell' : 
             'No net movement'}
          </text>
        </>
      )}
    </svg>
  );
}

export default TonicityDiagram;
