import { motion } from 'framer-motion';

function CarbohydrateDiagram({ size = 'small', animate = false, termId = 'carbohydrates' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;
  
  const highlightMonosaccharides = termId === 'monosaccharides';

  const Hexagon = ({ cx, cy, size: hexSize, delay = 0, highlight = false }) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + hexSize * Math.cos(angle);
      const y = cy + hexSize * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    
    return (
      <motion.g
        animate={animate ? {
          rotate: [0, 5, 0],
          scale: highlight ? [1, 1.1, 1] : 1,
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        {/* Glow for highlighted monosaccharide */}
        {highlight && (
          <polygon
            points={points.join(' ')}
            fill="#10b981"
            opacity="0.3"
            stroke="none"
            transform={`scale(1.3) translate(${cx * -0.23}, ${cy * -0.23})`}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        )}
        <polygon
          points={points.join(' ')}
          fill="#10b981"
          opacity="0.7"
          stroke="#34d399"
          strokeWidth={highlight ? "2.5" : "1.5"}
        />
        {isLarge && (
          <>
            <circle cx={cx} cy={cy - hexSize * 0.6} r="2" fill="#3b82f6" opacity="0.8" />
            <circle cx={cx + hexSize * 0.5} cy={cy - hexSize * 0.3} r="2" fill="#f59e0b" opacity="0.8" />
            <circle cx={cx + hexSize * 0.5} cy={cy + hexSize * 0.3} r="2" fill="#3b82f6" opacity="0.8" />
            <circle cx={cx} cy={cy + hexSize * 0.6} r="2" fill="#f59e0b" opacity="0.8" />
            <circle cx={cx - hexSize * 0.5} cy={cy + hexSize * 0.3} r="2" fill="#3b82f6" opacity="0.8" />
            <circle cx={cx - hexSize * 0.5} cy={cy - hexSize * 0.3} r="2" fill="#f59e0b" opacity="0.8" />
          </>
        )}
      </motion.g>
    );
  };

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 60">
      {/* Glucose molecules */}
      <Hexagon cx={isLarge ? 25 : 30} cy={30} size={isLarge ? 12 : 8} delay={0} highlight={highlightMonosaccharides} />
      {isLarge && (
        <>
          <Hexagon cx={50} cy={30} size={12} delay={0.3} highlight={highlightMonosaccharides} />
          <Hexagon cx={75} cy={30} size={12} delay={0.6} highlight={highlightMonosaccharides} />
          
          {/* Connection lines */}
          <motion.line
            x1={37}
            y1={30}
            x2={38}
            y2={30}
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            animate={animate ? {
              opacity: [0.5, 1, 0.5],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.line
            x1={62}
            y1={30}
            x2={63}
            y2={30}
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            animate={animate ? {
              opacity: [0.5, 1, 0.5],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3
            }}
          />
        </>
      )}
      
      {/* Labels */}
      {isLarge && (
        <>
          <text 
            x="18" 
            y="52" 
            fontSize={highlightMonosaccharides ? 6 : 5} 
            fill={highlightMonosaccharides ? "#10b981" : "rgba(255,255,255,0.7)"}
            fontWeight={highlightMonosaccharides ? "bold" : "normal"}
          >
            Glucose (C₆H₁₂O₆)
          </text>
          <text 
            x="10" 
            y="10" 
            fontSize={highlightMonosaccharides ? 5 : 4} 
            fill={highlightMonosaccharides ? "#34d399" : "rgba(255,255,255,0.5)"}
            fontWeight={highlightMonosaccharides ? "bold" : "normal"}
          >
            Monosaccharide{highlightMonosaccharides ? ' (simple sugar)' : ' Ring'}
          </text>
        </>
      )}
    </svg>
  );
}

export default CarbohydrateDiagram;
