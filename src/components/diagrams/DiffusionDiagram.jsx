import { motion } from 'framer-motion';

function DiffusionDiagram({ size = 'small', animate = false }) {
  const isLarge = size === 'large';
  const dimensions = isLarge ? 220 : 80;

  const Particle = ({ cx, cy, delay = 0 }) => (
    <motion.circle
      cx={cx}
      cy={cy}
      r={isLarge ? 3 : 2}
      fill="#06b6d4"
      opacity="0.8"
      animate={animate ? {
        x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
        y: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <svg width={dimensions} height={dimensions} viewBox="0 0 100 60">
      {/* Container */}
      <rect x="5" y="5" width="90" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" rx="4" />
      
      {/* Divider (fading) */}
      <motion.line
        x1="50"
        y1="5"
        x2="50"
        y2="55"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
        strokeDasharray="2,2"
        animate={animate ? {
          opacity: [1, 0.3, 1],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      
      {/* High concentration side (left) */}
      {isLarge ? (
        <>
          <Particle cx={15} cy={15} delay={0} />
          <Particle cx={25} cy={25} delay={0.2} />
          <Particle cx={20} cy={35} delay={0.4} />
          <Particle cx={30} cy={15} delay={0.1} />
          <Particle cx={35} cy={30} delay={0.3} />
          <Particle cx={40} cy={20} delay={0.5} />
          <Particle cx={15} cy={45} delay={0.6} />
          <Particle cx={35} cy={45} delay={0.7} />
        </>
      ) : (
        <>
          <Particle cx={20} cy={20} delay={0} />
          <Particle cx={30} cy={25} delay={0.2} />
          <Particle cx={25} cy={35} delay={0.4} />
          <Particle cx={35} cy={15} delay={0.3} />
        </>
      )}
      
      {/* Low concentration side (right) - fewer particles */}
      <Particle cx={65} cy={25} delay={0.8} />
      <Particle cx={80} cy={35} delay={1} />
      {isLarge && <Particle cx={75} cy={15} delay={0.9} />}
      
      {/* Arrows showing movement */}
      <motion.path
        d="M 45 30 L 55 30 M 52 27 L 55 30 L 52 33"
        stroke="#ec4899"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate ? {
          opacity: [0, 1, 0],
          x: [-5, 0, 5],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Labels */}
      {isLarge && (
        <>
          <text x="8" y="10" fontSize="4" fill="rgba(255,255,255,0.6)">High</text>
          <text x="75" y="10" fontSize="4" fill="rgba(255,255,255,0.6)">Low</text>
        </>
      )}
    </svg>
  );
}

export default DiffusionDiagram;
