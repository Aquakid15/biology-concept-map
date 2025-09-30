import { motion } from 'framer-motion';

function ProteinDiagram({ size = 'small', animate = false, termId = 'proteins' }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;
  
  const highlightRGroups = termId === 'rGroup';
  const highlightAminoAcids = termId === 'aminoAcids';

  const AminoAcid = ({ x, y, color, delay = 0 }) => (
    <motion.g
      animate={animate ? {
        y: [0, -2, 0],
        scale: (highlightAminoAcids || highlightRGroups) ? [1, 1.1, 1] : 1,
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <circle 
        cx={x} 
        cy={y} 
        r={isLarge ? 6 : 4} 
        fill={color} 
        opacity="0.8" 
      />
      {/* Glow for amino acids */}
      {highlightAminoAcids && (
        <circle cx={x} cy={y} r={isLarge ? 9 : 6} fill={color} opacity="0.3" />
      )}
      
      {(isLarge || highlightRGroups) && (
        <>
          {/* R-group indicator */}
          <motion.circle 
            cx={x + 4} 
            cy={y - 4} 
            r={highlightRGroups ? 3 : 2} 
            fill="#f59e0b" 
            opacity="0.9"
            animate={animate && highlightRGroups ? {
              r: [3, 4, 3],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            }}
          />
          {/* Glow for R-group */}
          {highlightRGroups && (
            <circle cx={x + 4} cy={y - 4} r="5" fill="#f59e0b" opacity="0.3" />
          )}
          <text x={x + 2} y={y - 2} fontSize="3" fill="#fff" fontWeight="bold">R</text>
        </>
      )}
    </motion.g>
  );

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 60">
      {/* Protein chain */}
      <motion.path
        d="M 15 30 Q 30 20, 45 30 T 85 30"
        stroke="rgba(139, 92, 246, 0.5)"
        strokeWidth={isLarge ? 3 : 2}
        fill="none"
        strokeLinecap="round"
        animate={animate ? {
          d: [
            "M 15 30 Q 30 20, 45 30 T 85 30",
            "M 15 30 Q 30 25, 45 30 T 85 30",
            "M 15 30 Q 30 20, 45 30 T 85 30"
          ],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Amino acids along chain */}
      <AminoAcid x={15} y={30} color="#8b5cf6" delay={0} />
      <AminoAcid x={35} y={23} color="#a78bfa" delay={0.2} />
      <AminoAcid x={50} y={30} color="#8b5cf6" delay={0.4} />
      <AminoAcid x={65} y={23} color="#a78bfa" delay={0.6} />
      <AminoAcid x={80} y={30} color="#8b5cf6" delay={0.8} />
      
      {/* Peptide bonds */}
      {isLarge && (
        <>
          <line x1={21} y1={30} x2={29} y2={23} stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
          <line x1={41} y1={23} x2={44} y2={30} stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
          <line x1={56} y1={30} x2={59} y2={23} stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
          <line x1={71} y1={23} x2={74} y2={30} stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
        </>
      )}
      
      {/* Labels */}
      {isLarge && (
        <>
          <text 
            x="20" 
            y="50" 
            fontSize={highlightAminoAcids ? 6 : 5} 
            fill={highlightAminoAcids ? "#a78bfa" : "rgba(255,255,255,0.7)"}
            fontWeight={highlightAminoAcids ? "bold" : "normal"}
          >
            {highlightAminoAcids ? "Amino Acids" : "Amino Acid Chain"}
          </text>
          <text 
            x="5" 
            y="10" 
            fontSize={highlightRGroups ? 5 : 4} 
            fill={highlightRGroups ? "#f59e0b" : "rgba(255,255,255,0.5)"}
            fontWeight={highlightRGroups ? "bold" : "normal"}
          >
            R = Variable R-group
          </text>
          {highlightRGroups && (
            <text x="5" y="58" fontSize="4" fill="#f59e0b" opacity="0.8">
              (makes each amino acid unique)
            </text>
          )}
        </>
      )}
    </svg>
  );
}

export default ProteinDiagram;
