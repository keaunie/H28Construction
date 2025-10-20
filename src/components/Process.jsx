import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Factory, ShoppingCart, Settings, CheckCircle } from 'lucide-react';

// ---- Animation helpers
const viewportOnce = { once: true, amount: 0.35 };
const nodeAnim = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8, y: 8 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { type: 'spring', stiffness: 220, damping: 20, delay },
  viewport: viewportOnce,
});
const pillAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay },
  viewport: viewportOnce,
});
const lineAnim = (delay = 0) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  transition: { duration: 0.9, ease: 'easeInOut', delay },
  viewport: viewportOnce,
});

// ---- Pure-SVG label (no foreignObject)
const SvgLabel = ({ x, y, lines, delay = 0, size = 13 }) => (
  <motion.g {...pillAnim(delay)}>
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize={size}
      fontWeight="600"
      fill="#111827"
    >
      {lines.map((ln, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 16}>
          {ln}
        </tspan>
      ))}
    </text>
  </motion.g>
);

// ---- Node (circle + icon)
const Node = ({ x, y, icon: Icon, delay = 0 }) => (
  <motion.g {...nodeAnim(delay)}>
    <circle cx={x} cy={y} r="58" className="fill-[#e7eaee]" />
    <circle cx={x} cy={y} r="48" className="fill-white stroke-[#8C97A6]" strokeWidth="6" />
    <foreignObject x={x - 18} y={y - 18} width="36" height="36">
      <div className="w-full h-full flex items-center justify-center">
        <Icon className="w-9 h-9 text-black" strokeWidth={1.6} />
      </div>
    </foreignObject>
    <path d={`M ${x - 10} ${y + 56} L ${x} ${y + 72} L ${x + 10} ${y + 56}`} className="fill-[#cfd6df]" />
  </motion.g>
);

// ---- Phase pill
const Pill = ({ x, y, label, tone = 'beige', delay = 0 }) => {
  const fill = tone === 'beige' ? '#E6DED6' : '#8C97A6';
  return (
    <motion.g {...pillAnim(delay)}>
      <rect x={x - 84} y={y - 20} rx="20" ry="20" width="168" height="40" fill={fill} />
      <text
        x={x}
        y={y + 4}
        className="fill-white"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.06em"
        fill="#ffffff"
      >
        {label}
      </text>
    </motion.g>
  );
};

// ---- Animated dashed connector
const AnimatedLine = ({ x1, y1, x2, y2, delay = 0 }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="#7D8897"
    strokeWidth="3"
    strokeDasharray="6 8"
    vectorEffect="non-scaling-stroke"
    {...lineAnim(delay)}
  />
);

// ---- Desktop / Tablet Diagram (Phases 1↔2 and 4↔5 swapped)
const DesktopDiagram = () => {
  const W = 1200, H = 520;

  // Swaps applied:
  // - Phase 2 top-left, Phase 1 bottom-left
  // - Phase 5 top-right, Phase 4 bottom-right
  const topL = { x: 380, y: 140 }; // P2
  const botL = { x: 260, y: 370 }; // P1
  const botC = { x: 600, y: 370 }; // P3
  const topR = { x: 820, y: 140 }; // P5
  const botR = { x: 940, y: 370 }; // P4

  return (
    <motion.svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      {/* connectors */}
      <AnimatedLine x1={topL.x} y1={topL.y + 50} x2={botL.x} y2={botL.y - 50} delay={0.05} />
      <AnimatedLine x1={topL.x} y1={topL.y + 50} x2={botC.x} y2={botC.y - 50} delay={0.20} />
      <AnimatedLine x1={topR.x} y1={topR.y + 50} x2={botC.x} y2={botC.y - 50} delay={0.35} />
      <AnimatedLine x1={topR.x} y1={topR.y + 50} x2={botR.x} y2={botR.y - 50} delay={0.50} />

      {/* nodes */}
      <Node x={topL.x} y={topL.y} icon={Factory} delay={0.10} />      {/* Phase 2 */}
      <Node x={botL.x} y={botL.y} icon={Lightbulb} delay={0.25} />    {/* Phase 1 */}
      <Node x={botC.x} y={botC.y} icon={ShoppingCart} delay={0.40} /> {/* Phase 3 */}
      <Node x={topR.x} y={topR.y} icon={Settings} delay={0.55} />     {/* Phase 5 */}
      <Node x={botR.x} y={botR.y} icon={CheckCircle} delay={0.70} />  {/* Phase 4 */}

      {/* pills */}
      <Pill x={botL.x - 20} y={botL.y + 70} label="PHASE 1" tone="beige" delay={0.28} />
      <Pill x={topL.x - 170} y={topL.y - 10} label="PHASE 2" tone="beige" delay={0.13} />
      <Pill x={botC.x} y={botC.y + 70} label="PHASE 3" tone="slate" delay={0.43} />
      <Pill x={botR.x + 20} y={botR.y + 70} label="PHASE 5" tone="beige" delay={0.73} />
      <Pill x={topR.x + 170} y={topR.y - 10} label="PHASE 4" tone="beige" delay={0.58} />

      {/* labels (pure SVG text) */}
      <SvgLabel
        x={botL.x - 20}
        y={botL.y + 110}
        lines={['INTEGRATED DESIGN &', 'PLANNING']}
        delay={0.30}
      />
      <SvgLabel
        x={topL.x - 170}
        y={topL.y - -30}
        lines={['HYBRID CONSTRUCTION']}
        delay={0.15}
      />
      <SvgLabel
        x={botC.x}
        y={botC.y - -110}
        lines={['STRATEGIC PROCUREMENT', '& SOURCING']}
        delay={0.45}
      />
      <SvgLabel
        x={botR.x + 20}
        y={botR.y + 110}
        lines={['INTEGRATED QUALITY', 'ASSURANCE']}
        delay={0.75}
      />
      <SvgLabel
        x={topR.x + 170}
        y={topR.y - -30}
        lines={['PARALLEL CONSTRUCTION']}
        delay={0.60}
      />
    </motion.svg>
  );
};

// ---- Mobile layout (unchanged)
const MobileList = () => {
  const phases = [
    { id: 1, title: 'Integrated Design & Planning', icon: Lightbulb },
    { id: 2, title: 'Hybrid Construction', icon: Factory },
    { id: 3, title: 'Strategic Procurement & Sourcing', icon: ShoppingCart },
    { id: 4, title: 'Integrated Quality Assurance', icon: CheckCircle },
    { id: 5, title: 'Parallel Construction', icon: Settings },
  ];

  return (
    <div className="grid gap-6">
      {phases.map((p) => {
        const Icon = p.icon;
        return (
          <div key={p.id} className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black shrink-0">
              <Icon className="w-6 h-6" strokeWidth={1.6} />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold tracking-wider text-white bg-gray-400 inline-block px-3 py-1 rounded-full mb-2">
                {`PHASE ${p.id}`}
              </div>
              <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---- Section wrapper
const ProcessDiagram = () => {
  return (
    <section id="process" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A 5-phase, hybrid delivery model that integrates design, modular efficiency, and rigorous QA.
          </p>
        </div>

        {/* Mobile (<md) */}
        <div className="md:hidden">
          <MobileList />
        </div>

        {/* Desktop / Tablet (≥md) */}
        <div className="hidden md:block">
          <DesktopDiagram />
        </div>
      </div>
    </section>
  );
};

export default ProcessDiagram;
