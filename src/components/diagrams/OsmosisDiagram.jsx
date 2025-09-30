import { motion } from 'framer-motion';

function OsmosisDiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  const WaterMolecule = ({ cx, cy, delay = 0 }) => (
    <motion.g
      animate={animate ? {
        x: [0, Math.random() * 10 - 5],
        y: [0, Math.random() * 10 - 5],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <circle cx={cx} cy={cy} r={isLarge ? 2 : 1.5} fill="#3b82f6" opacity="0.7" />
    </motion.g>
  );

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 60">
      {/* Container */}
      <rect x="5" y="5" width="90" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" rx="4" />
      
      {/* Semi-permeable membrane */}
      <g>
        <line x1="50" y1="5" x2="50" y2="55" stroke="rgba(236, 72, 153, 0.8)" strokeWidth="2" />
        {/* Pores */}
        {[15, 25, 35, 45].map((y) => (
          <circle key={y} cx="50" cy={y} r="1.5" fill="rgba(139, 92, 246, 0.6)" />
        ))}
      </g>
      
      {/* Left side - more water (hypotonic) */}
      {isLarge ? (
        <>
          <WaterMolecule cx={15} cy={15} delay={0} />
          <WaterMolecule cx={25} cy={20} delay={0.1} />
          <WaterMolecule cx={20} cy={30} delay={0.2} />
          <WaterMolecule cx={30} cy={35} delay={0.3} />
          <WaterMolecule cx={15} cy={45} delay={0.4} />
          <WaterMolecule cx={35} cy={25} delay={0.5} />
          <WaterMolecule cx={40} cy={40} delay={0.6} />
        </>
      ) : (
        <>
          <WaterMolecule cx={20} cy={20} delay={0} />
          <WaterMolecule cx={30} cy={30} delay={0.2} />
          <WaterMolecule cx={25} cy={40} delay={0.4} />
        </>
      )}
      
      {/* Right side - less water, more solute */}
      <WaterMolecule cx={65} cy={25} delay={0.7} />
      <WaterMolecule cx={75} cy={35} delay={0.8} />
      
      {/* Solute particles (can't pass through) */}
      <circle cx="70" cy={15} r={isLarge ? 3.5 : 2.5} fill="#f59e0b" opacity="0.8" />
      <circle cx={80} cy={25} r={isLarge ? 3.5 : 2.5} fill="#f59e0b" opacity="0.8" />
      {isLarge && <circle cx={85} cy={45} r={3.5} fill="#f59e0b" opacity="0.8" />}
      
      {/* Water movement arrows */}
      <motion.path
        d="M 45 30 L 55 30 M 52 27 L 55 30 L 52 33"
        stroke="#3b82f6"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate ? {
          opacity: [0, 1, 0],
          x: [-3, 0, 3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="8" y="10" fontSize="4" fill="rgba(255,255,255,0.6)">More H₂O</text>
          <text x="60" y="10" fontSize="4" fill="rgba(255,255,255,0.6)">More Solute</text>
        </>
      )}
    </svg>
  );
}

export default OsmosisDiagram;
