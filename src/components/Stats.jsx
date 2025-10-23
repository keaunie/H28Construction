import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building, Maximize, ShieldCheck, Star, Medal, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Building,
    value: '40+',
    label: 'Years of Construction Excellence',
  },
  {
    icon: Maximize,
    value: '1M+',
    label: 'ft² Delivered Worldwide',
  },
  {
    icon: Award,
    value: 'Top 10',
    label: 'Modular Solutions Provider 2024',
  },
  {
    icon: Award,
    value: 'Best',
    label: 'Modular Tiny Home Builder 2025',
  },
  {
    icon: ShieldCheck,
    value: '2024',
    label: 'CorporateLiveWire Innovation & Excellence – Housing Solutions Provider of the Year',
  },
  {
    icon: Star,
    value: '2024',
    label: 'CBRB Inc. Best Business Award – Best Prefabricated Tiny Houses in Brantford',
  },
  {
    icon: Medal,
    value: '2023',
    label: 'Halton Hills Chamber of Commerce – Business Excellence Award',
  },
  {
    icon: Trophy,
    value: '2024',
    label: 'Milton Chamber of Commerce – Milton Excellence Award',
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          What Sets Us Apart
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="w-12 h-12 text-yellow-400 mb-4" strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="text-base text-gray-700 mt-2 max-w-[220px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
