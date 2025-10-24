import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers } from 'lucide-react';

const advantage = [
    {
        icon: Award,
        value: 'CSA-A277',
        label: 'Factory certification for consistent, auditable quality.',
    },
    {
        icon: ShieldCheck,
        value: 'OBC Compliant',
        label: 'Built to Ontario Building Code standards across phases.',
    },
    {
        icon: Layers,
        value: 'Modular Integration',
        label: 'Industry-leading hybrid + prefabrication for speed & control.',
    },
];

const Advantage = () => {
    return (
        <section
            id="advantage"
            className="py-20 sm:py-24 text-black bg-gradient-to-b from-white to-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
            flex flex-wrap justify-center items-center gap-2 sm:gap-4
            font-sans font-extrabold text-black
            leading-[1.05] tracking-tight text-center
            text-[clamp(1.75rem,4.5vw,4rem)]
          "
                >
                    <span>The</span>
                    <motion.img
                        src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760962770/h28construction_je3slj.webp"
                        alt="H28 Construction Management Logo"
                        className="
              inline-block object-contain
              /* fluid scaling for all screens */
              h-[clamp(2.5rem,15vw,7.5rem)]
              w-auto
              mx-1
              drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]
            "
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    />
                    <span>Modular Advantage</span>
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="
            mt-3 sm:mt-4 font-semibold text-black
            text-[clamp(1rem,1.6vw,1.375rem)]
            leading-snug
          "
                >
                    Backed by Habitat28 — Certified. Proven. Recognized.
                </motion.p>

                {/* Supporting text */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="
            mt-4 sm:mt-5 max-w-3xl mx-auto
            text-gray-800 leading-relaxed
            text-[clamp(0.95rem,1.2vw,1.125rem)]
          "
                >
                    As part of the Habitat28 family, H28 Construction Management carries the same DNA of innovation,
                    compliance, and craftsmanship. Every project benefits from CSA-A277 certification, OBC compliance,
                    and industry-leading modular integration, offering unparalleled control, consistency, and speed.
                </motion.p>

                {/* Highlights Grid */}
                <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-center">
                    {advantage.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="flex flex-col items-center text-white"
                        >
                            <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" strokeWidth={1.5} />
                            <p className="font-extrabold leading-tight text-[clamp(1.375rem,2.4vw,2.125rem)] text-white">
                                {item.value}
                            </p>
                            <p className="mt-2 max-w-[260px] text-gray-300 leading-relaxed text-[clamp(0.85rem,1.1vw,1rem)]">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
