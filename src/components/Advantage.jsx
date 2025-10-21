import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers } from 'lucide-react';

const advantage = [
  {
    icon: Award,
    value: 'CSA-A277',
    label: 'Factory certification for consistent, auditable quality.'
  },
  {
    icon: ShieldCheck,
    value: 'OBC Compliant',
    label: 'Built to Ontario Building Code standards across phases.'
  },
  {
    icon: Layers,
    value: 'Modular Integration',
    label: 'Industry-leading hybrid + prefabrication for speed & control.'
  },
];

const Advantage = () => {
  return (
    <section
      id="advantage"
      className="py-24 text-black bg-gradient-to-b from-[#FFFFFF] to-[#000000]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          The H28 Advantage
        </motion.h2>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-lg md:text-xl font-semibold text-black"
        >
          Backed by Habitat28 — Certified. Proven. Recognized.
        </motion.p>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-3xl mx-auto text-gray-800 leading-relaxed"
        >
          As part of the Habitat28 family, H28 Construction Management carries the same DNA of innovation,
          compliance, and craftsmanship. Every project benefits from CSA-A277 certification, OBC compliance,
          and industry-leading modular integration, offering unparalleled control, consistency, and speed.
        </motion.p>

        {/* Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          {advantage.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-white"
            >
              <item.icon className="w-12 h-12 text-yellow-400 mb-4" strokeWidth={1.5} />
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight">{item.value}</p>
              <p className="text-base text-gray-300 mt-2 max-w-[220px]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
