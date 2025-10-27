import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ClipboardCheck, ShoppingCart, Settings, ShieldCheck } from 'lucide-react';

/* ====== Animation helpers ====== */
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

/* ====== Helpers ====== */
function wrapSvgText(text, max = 42) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max) {
      lines.push(line.trim());
      line = w;
    } else line += ' ' + w;
  }
  if (line) lines.push(line.trim());
  return lines.slice(0, 4);
}

/* ====== SVG Primitives ====== */
const SvgLabel = ({ x, y, lines, delay = 0 }) => (
  <motion.g {...pillAnim(delay)}>
    <text
      x={x}
      y={y + 12}
      textAnchor="middle"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="13"
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

const Node = ({ x, y, icon: Icon, delay = 0, onEnter, onLeave }) => (
  <motion.g {...nodeAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <circle cx={x} cy={y} r="58" className="fill-black" />
    <circle cx={x} cy={y} r="48" className="fill-white stroke-gray-400" strokeWidth="6" />
    <foreignObject x={x - 18} y={y - 18} width="36" height="36">
      <div className="flex h-full w-full items-center justify-center">
        <Icon className="h-9 w-9 text-yellow-400" strokeWidth={1.6} />
      </div>
    </foreignObject>
  </motion.g>
);

const Pill = ({ x, y, label, delay = 0, onEnter, onLeave }) => (
  <motion.g {...pillAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <rect x={x - 84} y={y - 2} rx="20" ry="20" width="168" height="40" fill="#000" />
    <text
      x={x}
      y={y + 22}
      textAnchor="middle"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="14"
      fontWeight="700"
      letterSpacing="0.06em"
      fill="#fff"
    >
      {label}
    </text>
  </motion.g>
);

const AnimatedLine = ({ x1, y1, x2, y2, delay = 0 }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="#9CA3AF"
    strokeWidth="3"
    strokeDasharray="6 8"
    vectorEffect="non-scaling-stroke"
    {...lineAnim(delay)}
  />
);

/* ====== Tooltip ====== */
const Tooltip = ({ x, y, title, desc, show, W }) => {
  if (!show) return null;
  const CARD_W = 340, CARD_H = 110, PAD_X = 16, PAD_Y = 12, ARROW = 10, OFFSET = 56;
  const targetY = y - OFFSET;
  const cardY = targetY - (CARD_H + ARROW);
  const half = CARD_W / 2;
  const clampedX = Math.max(half + 20, Math.min(W - half - 20, x));
  const cardX = clampedX - half;

  return (
    <g style={{ pointerEvents: 'none' }}>
      <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H} rx="10" fill="#fff" stroke="#111827" strokeWidth="1" />
      <path
        d={`M ${clampedX - 10} ${cardY + CARD_H} L ${clampedX} ${targetY} L ${clampedX + 10} ${cardY + CARD_H}`}
        fill="#fff"
        stroke="#111827"
      />
      <text x={cardX + PAD_X} y={cardY + PAD_Y + 10} fontSize="14" fontWeight="700" fill="#111827">
        {title}
      </text>
      <text x={cardX + PAD_X} y={cardY + PAD_Y + 30} fontSize="12.8" fill="#374151">
        {wrapSvgText(desc, 50).map((l, i) => (
          <tspan key={i} x={cardX + PAD_X} dy={i === 0 ? 0 : 16}>
            {l}
          </tspan>
        ))}
      </text>
    </g>
  );
};

/* ====== Desktop Diagram ====== */
const DesktopDiagram = () => {
  const [hovered, setHovered] = useState(null);
  const W = 1440, H = 440, baseY = 230;
  const span = W * 0.68;
  const startX = (W - span) / 2;
  const step = span / 4;
  const X = Array.from({ length: 5 }, (_, i) => startX + i * step);

  const phases = [
    {
      id: 1,
      icon: Lightbulb,
      pill: 'PHASE 1',
      label: ['PLANNING & DESIGN INTEGRATION'],
      tooltip: {
        title: 'Phase 1 · Planning & Design Integration',
        desc:
          'We coordinate design and construction inputs early to minimize rework and shorten approval cycles.'
      },
    },
    {
      id: 2,
      icon: ClipboardCheck,
      pill: 'PHASE 2',
      label: ['PRE-CONSTRUCTION & BUDGETING'],
      tooltip: {
        title: 'Phase 2 · Pre-Construction & Budgeting',
        desc:
          'Comprehensive estimating, scheduling, and procurement planning deliver cost certainty before breaking ground.'
      },
    },
    {
      id: 3,
      icon: ShoppingCart,
      pill: 'PHASE 3',
      label: ['PROCUREMENT & TRADE TENDERING'],
      tooltip: {
        title: 'Phase 3 · Procurement & Trade Tendering',
        desc:
          'We tender 20–30 trade packages, manage bids, and secure the best value with clear scopes and compliance review.'
      },
    },
    {
      id: 4,
      icon: Settings,
      pill: 'PHASE 4',
      label: ['CONSTRUCTION EXECUTION'],
      tooltip: {
        title: 'Phase 4 · Construction Execution',
        desc:
          'Active site management, safety oversight, progress reporting, and coordination keep work on schedule and on budget.'
      },
    },
    {
      id: 5,
      icon: ShieldCheck,
      pill: 'PHASE 5',
      label: ['QUALITY ASSURANCE & HANDOVER'],
      tooltip: {
        title: 'Phase 5 · Quality Assurance & Handover',
        desc:
          'Testing, inspections, and closeout documentation ensure final turnover meets specifications and client expectations.'
      },
    },
  ];

  return (
    <motion.svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
      <line
        x1={startX - 30}
        y1={baseY}
        x2={startX + span + 30}
        y2={baseY}
        stroke="#E5E7EB"
        strokeWidth="3"
        strokeDasharray="6 10"
      />

      {phases.slice(0, -1).map((p, i) => (
        <AnimatedLine
          key={`line-${p.id}`}
          x1={X[i]}
          y1={baseY}
          x2={X[i + 1]}
          y2={baseY}
          delay={0.1 + i * 0.1}
        />
      ))}

      {phases.map((p, i) => (
        <g key={p.id}>
          <Node
            x={X[i]}
            y={baseY}
            icon={p.icon}
            delay={0.12 + i * 0.1}
            onEnter={() => setHovered(p.id)}
            onLeave={() => setHovered(null)}
          />
          <Pill
            x={X[i]}
            y={baseY + 60}
            label={p.pill}
            delay={0.18 + i * 0.1}
            onEnter={() => setHovered(p.id)}
            onLeave={() => setHovered(null)}
          />
          <SvgLabel x={X[i]} y={baseY + 105} lines={p.label} delay={0.22 + i * 0.1} />
        </g>
      ))}

      {phases.map((p, i) => (
        <Tooltip
          key={`tip-${p.id}`}
          x={X[i]}
          y={baseY}
          title={p.tooltip.title}
          desc={p.tooltip.desc}
          show={hovered === p.id}
          W={W}
        />
      ))}
    </motion.svg>
  );
};

/* ====== Mobile Version ====== */
const MobileList = () => {
  const phases = [
    { id: 1, title: 'Planning & Design Integration', icon: Lightbulb },
    { id: 2, title: 'Pre-Construction & Budgeting', icon: ClipboardCheck },
    { id: 3, title: 'Procurement & Trade Tendering', icon: ShoppingCart },
    { id: 4, title: 'Construction Execution', icon: Settings },
    { id: 5, title: 'Quality Assurance & Handover', icon: ShieldCheck },
  ];
  return (
    <div className="grid gap-6">
      {phases.map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.id}
            className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-black">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <div>
              <div className="mb-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-yellow-300">
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

/* ====== Wrapper ====== */
const ProcessDiagram = () => (
  <section
    id="process"
    className="bg-white py-20 md:py-24 text-black"
    style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
  >
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-3 text-4xl font-bold md:text-5xl">Our Process</h2>
        <h3 className="mb-4 text-2xl font-semibold text-yellow-500 md:text-3xl">
          From Vision to Verification.
        </h3>
        <p className="mx-auto max-w-3xl text-gray-600">
          A five-phase delivery system built for control, transparency, and performance — guiding every project from
          concept to completion.
        </p>
      </motion.div>
    </div>

    <div className="mx-auto max-w-6xl px-4 md:hidden">
      <MobileList />
    </div>

    <div className="relative left-1/2 hidden w-screen -translate-x-1/2 md:block">
      <DesktopDiagram />
    </div>
  </section>
);

export default ProcessDiagram;
