import React, { useState } from 'react';
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
const Node = ({ x, y, icon: Icon, delay = 0, onEnter, onLeave }) => (
    <motion.g {...nodeAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
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
const Pill = ({ x, y, label, tone = 'beige', delay = 0, onEnter, onLeave }) => {
    const fill = tone === 'beige' ? '#E6DED6' : '#8C97A6';
    return (
        <motion.g {...pillAnim(delay)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
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
// ---- SVG Tooltip (auto-flips, clamps, and adds inner padding)
const Tooltip = ({ x, y, title, desc, show, side = 'top', W, H }) => {
    if (!show) return null;

    const CARD_W = 340;   // ⬅️ wider box
    const CARD_H = 126;   // ⬅️ taller for wrapped lines
    const PADDING_X = 18; // ⬅️ internal padding
    const PADDING_Y = 14;
    const ARROW = 12;
    const PAD = 16;       // minimum gap from edges

    // Flip tooltip if it would go out of bounds
    let sideEff = side;
    if (side === 'top' && y - CARD_H - ARROW < PAD) sideEff = 'bottom';
    if (side === 'bottom' && y + CARD_H + ARROW > H - PAD) sideEff = 'top';

    // Offset based on side
    const dy = sideEff === 'top' ? -(CARD_H + ARROW) : ARROW;

    // Clamp horizontally
    const half = CARD_W / 2;
    const clampedX = Math.max(PAD + half, Math.min(W - PAD - half, x));

    const cardX = clampedX - half;
    const cardY = y + dy;

    return (
        <g style={{ pointerEvents: 'none' }}>
            {/* Shadow */}
            <rect
                x={cardX}
                y={cardY}
                width={CARD_W}
                height={CARD_H}
                rx="12"
                ry="12"
                fill="#00000022"
            />
            {/* Main card */}
            <rect
                x={cardX}
                y={cardY}
                width={CARD_W}
                height={CARD_H}
                rx="12"
                ry="12"
                fill="#ffffff"
                stroke="#111827"
                strokeWidth="1"
            />
            {/* Arrow */}
            {sideEff === 'top' ? (
                <path
                    d={`M ${clampedX - 10} ${cardY + CARD_H} L ${clampedX} ${cardY + CARD_H + ARROW} L ${clampedX + 10} ${cardY + CARD_H}`}
                    fill="#ffffff"
                    stroke="#111827"
                />
            ) : (
                <path
                    d={`M ${clampedX - 10} ${cardY} L ${clampedX} ${cardY - ARROW} L ${clampedX + 10} ${cardY}`}
                    fill="#ffffff"
                    stroke="#111827"
                />
            )}

            {/* Text with improved padding */}
            <text
                x={cardX + PADDING_X}
                y={cardY + PADDING_Y + 10}
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#111827"
            >
                {title}
            </text>
            <text
                x={cardX + PADDING_X}
                y={cardY + PADDING_Y + 30}
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="12.5"
                fill="#374151"
            >
                {wrapSvgText(desc, 48).map((line, i) => (
                    <tspan key={i} x={cardX + PADDING_X} dy={i === 0 ? 0 : 16}>
                        {line}
                    </tspan>
                ))}
            </text>
        </g>
    );
};



// helper to wrap text for SVG tspans
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
    return lines.slice(0, 4); // keep tooltip compact (max ~4 lines)
}
// ---- Desktop / Tablet Diagram (Phase 4 ↔ Phase 5 swapped)
const DesktopDiagram = () => {
    const [hovered, setHovered] = useState(null);

    // Slightly taller to avoid tooltip clipping
    const W = 1200, H = 640;

    // Layout (left side unchanged)
    const topL = { x: 380, y: 140 }; // Phase 2
    const botL = { x: 260, y: 370 }; // Phase 1
    const botC = { x: 600, y: 370 }; // Phase 3

    // ⬇️ SWAP: top-right is now Phase 4; bottom-right is Phase 5
    const topR = { x: 820, y: 140 }; // Phase 4 (Parallel Execution)
    const botR = { x: 940, y: 370 }; // Phase 5 (Quality Assurance)

    // Phase details for tooltips
    const details = {
        1: {
            title: 'PHASE 1 · INTEGRATED DESIGN & PLANNING',
            desc:
                'Our in-house architects and designers eliminate coordination delays by integrating construction expertise from day one, reducing design-related change orders by 40%.',
            node: botL,
            side: 'bottom',
        },
        2: {
            title: 'PHASE 2 · HYBRID CONSTRUCTION',
            desc:
                'Combining on-site construction with factory-produced modular components delivers 22% cost reduction and 35% faster timelines. BIM integration adds 8% cost savings and 12% timeline improvement.',
            node: topL,
            side: 'top',
        },
        3: {
            title: 'PHASE 3 · STRATEGIC PROCUREMENT',
            desc:
                'Multi-marketplace sourcing relationships reduce material costs 10–20% while ensuring guaranteed delivery and eliminating supply risks.',
            node: botC,
            side: 'bottom',
        },
        4: {
            title: 'PHASE 4 · PARALLEL EXECUTION',
            desc:
                'Secondary site capability enables parallel processing, eliminating sequential bottlenecks through advanced project management optimization.',
            node: topR,
            side: 'top',
        },
        5: {
            title: 'PHASE 5 · QUALITY ASSURANCE',
            desc:
                'Comprehensive quality control from factory to installation, leveraging inspector relationships to reduce punch list items by 60%.',
            node: botR,
            side: 'bottom',
        },
    };

    return (
        <motion.svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            {/* connectors */}
            <AnimatedLine x1={topL.x} y1={topL.y + 50} x2={botL.x} y2={botL.y - 50} delay={0.05} />
            <AnimatedLine x1={topL.x} y1={topL.y + 50} x2={botC.x} y2={botC.y - 50} delay={0.20} />
            <AnimatedLine x1={topR.x} y1={topR.y + 50} x2={botC.x} y2={botC.y - 50} delay={0.35} />
            <AnimatedLine x1={topR.x} y1={topR.y + 50} x2={botR.x} y2={botR.y - 50} delay={0.50} />

            {/* nodes (hover targets) */}
            <Node x={topL.x} y={topL.y} icon={Factory} delay={0.10}
                onEnter={() => setHovered(2)} onLeave={() => setHovered(null)} />
            <Node x={botL.x} y={botL.y} icon={Lightbulb} delay={0.25}
                onEnter={() => setHovered(1)} onLeave={() => setHovered(null)} />
            <Node x={botC.x} y={botC.y} icon={ShoppingCart} delay={0.40}
                onEnter={() => setHovered(3)} onLeave={() => setHovered(null)} />
            {/* ⬇️ top-right is Phase 4 (gear) */}
            <Node x={topR.x} y={topR.y} icon={Settings} delay={0.55}
                onEnter={() => setHovered(4)} onLeave={() => setHovered(null)} />
            {/* ⬇️ bottom-right is Phase 5 (check) */}
            <Node x={botR.x} y={botR.y} icon={CheckCircle} delay={0.70}
                onEnter={() => setHovered(5)} onLeave={() => setHovered(null)} />

            {/* pills (hover targets) */}
            <Pill x={botL.x - 20} y={botL.y + 70} label="PHASE 1" tone="beige" delay={0.28}
                onEnter={() => setHovered(1)} onLeave={() => setHovered(null)} />
            <Pill x={topL.x - 170} y={topL.y - 10} label="PHASE 2" tone="beige" delay={0.13}
                onEnter={() => setHovered(2)} onLeave={() => setHovered(null)} />
            <Pill x={botC.x} y={botC.y + 70} label="PHASE 3" tone="slate" delay={0.43}
                onEnter={() => setHovered(3)} onLeave={() => setHovered(null)} />
            {/* ⬇️ swapped labels */}
            <Pill x={topR.x + 170} y={topR.y - 10} label="PHASE 4" tone="beige" delay={0.58}
                onEnter={() => setHovered(4)} onLeave={() => setHovered(null)} />
            <Pill x={botR.x + 20} y={botR.y + 70} label="PHASE 5" tone="beige" delay={0.73}
                onEnter={() => setHovered(5)} onLeave={() => setHovered(null)} />

            {/* labels under/over nodes */}
            <SvgLabel x={botL.x - 20} y={botL.y + 110} lines={['INTEGRATED DESIGN &', 'PLANNING']} delay={0.30} />
            <SvgLabel x={topL.x - 170} y={topL.y + 30} lines={['HYBRID CONSTRUCTION']} delay={0.15} />
            <SvgLabel x={botC.x} y={botC.y + 110} lines={['STRATEGIC PROCUREMENT', '& SOURCING']} delay={0.45} />
            {/* ⬇️ swapped text positions */}
            <SvgLabel x={topR.x + 170} y={topR.y + 30} lines={['PARALLEL EXECUTION']} delay={0.60} />
            <SvgLabel x={botR.x + 20} y={botR.y + 110} lines={['QUALITY ASSURANCE']} delay={0.75} />

            {/* tooltips (pass W/H if you’ve added auto-flip) */}
            {Object.entries(details).map(([id, d]) => (
                <Tooltip
                    key={id}
                    x={d.node.x}
                    y={d.node.y}
                    title={d.title}
                    desc={d.desc}
                    side={d.side}
                    show={hovered === Number(id)}
                    W={W}
                    H={H}
                />
            ))}
        </motion.svg>
    );
};


// ---- Mobile layout (unchanged)
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
