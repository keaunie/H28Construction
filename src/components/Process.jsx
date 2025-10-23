import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Factory, ShoppingCart, Settings, CheckCircle } from 'lucide-react';

/* =========================
   Animation helpers
========================= */
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

/* =========================
   Small utils
========================= */
function wrapSvgText(text, max = 42) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (const w of words) {
        if ((line + ' ' + w).trim().length > max) {
            lines.push(line.trim());
            line = w;
        } else {
            line += ' ' + w;
        }
    }
    if (line) lines.push(line.trim());
    return lines.slice(0, 4); // keep tooltip compact
}

/* =========================
   Primitives (SVG)
========================= */
const SvgLabel = ({ x, y, lines, delay = 0, size = 13 }) => {
    const verticalShift = 12; // ✅ move label down by 12px (adjust to taste)

    return (
        <motion.g {...pillAnim(delay)}>
            <text
                x={x}
                y={y + verticalShift}
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
};

const Node = ({ x, y, icon: Icon, delay = 0, onEnter, onLeave }) => (
    <motion.g {...nodeAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <circle cx={x} cy={y} r="58" className="fill-[#000000]" />
        <circle cx={x} cy={y} r="48" className="fill-white stroke-[#8C97A6]" strokeWidth="6" />
        <foreignObject x={x - 18} y={y - 18} width="36" height="36">
            <div className="w-full h-full flex items-center justify-center">
                <Icon className="w-9 h-9 text-yellow-400" strokeWidth={1.6} />
            </div>
        </foreignObject>
        <path d={`M ${x - 10} ${y + 56} L ${x} ${y + 72} L ${x + 10} ${y + 56}`} className="fill-[#cfd6df]" />
    </motion.g>
);

const Pill = ({ x, y, label, tone = 'beige', delay = 0, onEnter, onLeave }) => {
    const fill = tone === 'beige' ? '#000000ff' : '#000000ff';
    const verticalShift = 18; // ✅ move everything lower by 10px

    return (
        <motion.g {...pillAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {/* Shift the rect and text down by verticalShift */}
            <rect
                x={x - 84}
                y={y - 20 + verticalShift}
                rx="20"
                ry="20"
                width="168"
                height="40"
                fill={fill}
            />
            <text
                x={x}
                y={y + 4 + verticalShift}
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

/* =========================
   Tooltip (always on TOP)
========================= */
const Tooltip = ({ x, y, title, desc, show, W, H }) => {
    if (!show) return null;

    const CARD_W = 360;
    const CARD_H = 120;
    const PAD_X = 18;
    const PAD_Y = 12;
    const ARROW = 12;
    const VIEW_PAD = 24;

    // Arrow tip sits just outside the inner ring (r=48). Add ~8px.
    const TARGET_OFFSET = 56;
    const targetY = y - TARGET_OFFSET;

    // Card above node, arrow connects card bottom center to targetY
    const cardY = targetY - (CARD_H + ARROW);

    // Keep card inside the SVG horizontally
    const half = CARD_W / 2;
    const clampedX = Math.max(VIEW_PAD + half, Math.min(W - VIEW_PAD - half, x));
    const cardX = clampedX - half;

    return (
        <g style={{ pointerEvents: 'none' }}>
            {/* soft shadow */}
            <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H} rx="12" ry="12" fill="#00000022" />
            {/* panel */}
            <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H} rx="12" ry="12" fill="#ffffff" stroke="#111827" strokeWidth="1" />
            {/* arrow */}
            <path
                d={`M ${clampedX - 10} ${cardY + CARD_H} L ${clampedX} ${targetY} L ${clampedX + 10} ${cardY + CARD_H}`}
                fill="#ffffff"
                stroke="#111827"
            />
            {/* title */}
            <text
                x={cardX + PAD_X}
                y={cardY + PAD_Y + 11}
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="14.5"
                fontWeight="700"
                fill="#111827"
            >
                {title}
            </text>
            {/* body */}
            <text
                x={cardX + PAD_X}
                y={cardY + PAD_Y + 33}
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="13.25"
                fill="#374151"
            >
                {wrapSvgText(desc, 50).map((line, i) => (
                    <tspan key={i} x={cardX + PAD_X} dy={i === 0 ? 0 : 16}>
                        {line}
                    </tspan>
                ))}
            </text>
        </g>
    );
};

/* =========================
   Desktop / Tablet Diagram
   (Linear Phases 1 → 5)
========================= */
const DesktopDiagram = () => {
    const [hovered, setHovered] = useState(null);

    // Full-bleed viewBox; nodes live in a centered, narrower span.
    const W = 1440;
    const H = 440;
    const baseY = 230;

    // Nodes span ~68% of width (centered) for better tooltip space.
    const span = W * 0.68;
    const startX = (W - span) / 2;
    const step = span / 4;
    const X = Array.from({ length: 5 }, (_, i) => Math.round(startX + i * step));

    const phases = [
        {
            id: 1,
            x: X[0],
            y: baseY,
            icon: Lightbulb,
            pill: { x: X[0], y: baseY + 60, tone: 'slate', label: 'PHASE 1' },
            label: { x: X[0], y: baseY + 100, lines: ['INTEGRATED DESIGN &', 'PLANNING'] },
            tooltip: {
                title: 'PHASE 1 · INTEGRATED DESIGN & PLANNING',
                desc:
                    'Our in-house architects and designers eliminate coordination delays by integrating construction expertise from day one, reducing design-related change orders by 40%.',
            },
        },
        {
            id: 2,
            x: X[1],
            y: baseY,
            icon: Factory,
            pill: { x: X[1], y: baseY + 60, tone: 'slate', label: 'PHASE 2' },
            label: { x: X[1], y: baseY + 100, lines: ['HYBRID CONSTRUCTION'] },
            tooltip: {
                title: 'PHASE 2 · HYBRID CONSTRUCTION',
                desc:
                    'Combining on-site construction with factory-produced modular components delivers 22% cost reduction and 35% faster timelines. BIM integration adds 8% cost savings and 12% timeline improvement.',
            },
        },
        {
            id: 3,
            x: X[2],
            y: baseY,
            icon: ShoppingCart,
            pill: { x: X[2], y: baseY + 60, tone: 'slate', label: 'PHASE 3' },
            label: { x: X[2], y: baseY + 100, lines: ['STRATEGIC PROCUREMENT', '& SOURCING'] },
            tooltip: {
                title: 'PHASE 3 · STRATEGIC PROCUREMENT',
                desc:
                    'Multi-marketplace sourcing relationships reduce material costs 10–20% while ensuring guaranteed delivery and eliminating supply risks.',
            },
        },
        {
            id: 4,
            x: X[3],
            y: baseY,
            icon: Settings,
            pill: { x: X[3], y: baseY + 60, tone: 'slate', label: 'PHASE 4' },
            label: { x: X[3], y: baseY + 100, lines: ['PARALLEL EXECUTION'] },
            tooltip: {
                title: 'PHASE 4 · PARALLEL EXECUTION',
                desc:
                    'Secondary site capability enables parallel processing, eliminating sequential bottlenecks through advanced project management optimization.',
            },
        },
        {
            id: 5,
            x: X[4],
            y: baseY,
            icon: CheckCircle,
            pill: { x: X[4], y: baseY + 60, tone: 'slate', label: 'PHASE 5' },
            label: { x: X[4], y: baseY + 100, lines: ['QUALITY ASSURANCE'] },
            tooltip: {
                title: 'PHASE 5 · QUALITY ASSURANCE',
                desc:
                    'Comprehensive quality control from factory to installation, leveraging inspector relationships to reduce punch list items by 60%.',
            },
        },
    ];

    return (
        <motion.svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            {/* faint baseline */}
            <line
                x1={startX - 30}
                y1={baseY}
                x2={startX + span + 30}
                y2={baseY}
                stroke="#E5E7EB"
                strokeWidth="3"
                strokeDasharray="6 10"
            />

            {/* connectors */}
            {phases.slice(0, -1).map((p, i) => (
                <AnimatedLine
                    key={`c-${p.id}-${phases[i + 1].id}`}
                    x1={p.x}
                    y1={p.y}
                    x2={phases[i + 1].x}
                    y2={phases[i + 1].y}
                    delay={0.1 + i * 0.12}
                />
            ))}

            {/* nodes, pills, labels */}
            {phases.map((p, idx) => {
                const Icon = p.icon;
                return (
                    <g key={p.id}>
                        <Node
                            x={p.x}
                            y={p.y}
                            icon={Icon}
                            delay={0.12 + idx * 0.12}
                            onEnter={() => setHovered(p.id)}
                            onLeave={() => setHovered(null)}
                        />
                        <Pill
                            x={p.pill.x}
                            y={p.pill.y}
                            label={p.pill.label}
                            tone={p.pill.tone}
                            delay={0.18 + idx * 0.12}
                            onEnter={() => setHovered(p.id)}
                            onLeave={() => setHovered(null)}
                        />
                        <SvgLabel x={p.label.x} y={p.label.y} lines={p.label.lines} delay={0.22 + idx * 0.12} />
                    </g>
                );
            })}

            {/* tooltips (always TOP) */}
            {phases.map((p) => (
                <Tooltip
                    key={`t-${p.id}`}
                    x={p.x}
                    y={p.y}
                    title={p.tooltip.title}
                    desc={p.tooltip.desc}
                    show={hovered === p.id}
                    W={W}
                    H={H}
                />
            ))}
        </motion.svg>
    );
};

/* =========================
   Mobile list (≤ md)
========================= */
const MobileList = () => {
    const phases = [
        { id: 1, title: 'Integrated Design & Planning', icon: Lightbulb },
        { id: 2, title: 'Hybrid Construction', icon: Factory },
        { id: 3, title: 'Strategic Procurement & Sourcing', icon: ShoppingCart },
        { id: 4, title: 'Parallel Execution', icon: Settings },
        { id: 5, title: 'Quality Assurance', icon: CheckCircle },
    ];

    return (
        <div className="grid gap-6">
            {phases.map((p) => {
                const Icon = p.icon;
                return (
                    <div
                        key={p.id}
                        className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white flex items-start gap-4"
                    >
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

/* =========================
   Section wrapper
========================= */
const ProcessDiagram = () => {
    return (
        <section id="process" className="py-20 md:py-24 bg-white text-black">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header with requested copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">Our Process</h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-4">
                        From Vision to Verification.
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        A 5-phase, hybrid delivery model that integrates design, modular efficiency, and rigorous QA.
                    </p>
                </motion.div>
            </div>

            {/* Mobile (<md) */}
            <div className="md:hidden max-w-6xl mx-auto px-4">
                <MobileList />
            </div>

            {/* Desktop / Tablet (≥md) — FULL BLEED SVG */}
            <div className="hidden md:block relative left-1/2 -translate-x-1/2 w-screen">
                <DesktopDiagram />
            </div>
        </section>
    );
};

export default ProcessDiagram;
