import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, ClipboardCheck, ShieldCheck, Award, Users2, BarChart3, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '1M+',
    label: 'Square Feet Managed Across Residential & Commercial Projects',
  },
  {
    icon: Clock,
    value: '95%',
    label: 'On-Time Project Delivery Rate',
  },
  {
    icon: ClipboardCheck,
    value: '±2%',
    label: 'Average Budget Variance Through Cost Control Systems',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Regulatory Compliance & Safety Record',
  },
  {
    icon: Users2,
    value: '30+',
    label: 'Trusted Trade & Consultant Partners',
  },
  {
    icon: BarChart3,
    value: '35%',
    label: 'Average Schedule Efficiency vs Traditional Methods',
  },
  {
    icon: Award,
    value: '6+',
    label: 'Industry Awards for Excellence & Innovation',
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Client Satisfaction and Repeat Engagements',
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 text-black"
      style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-4xl font-bold md:text-5xl"
        >
          Our Track Record of Excellence
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-4 h-12 w-12 text-yellow-400" strokeWidth={1.6} />
                <p className="text-4xl font-extrabold text-black md:text-5xl">{stat.value}</p>
                <p className="mt-2 max-w-[220px] text-sm text-gray-700">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative band / credibility note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl bg-black py-6 px-8 text-center text-white shadow-xl"
        >
          <p className="text-base md:text-lg">
            Recognized nationally for project delivery excellence, innovation in construction management, and unwavering
            client commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
