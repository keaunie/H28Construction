import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ClipboardCheck,
  Clock,
  BarChart3,
  Users2,
  FileSpreadsheet
} from 'lucide-react';

const advantages = [
  {
    icon: FileSpreadsheet,
    value: '±2% Budget Control',
    label: 'Disciplined estimating, progress-claim checks, and change-management keep variance tight.'
  },
  {
    icon: Clock,
    value: '95% On-Time',
    label: 'Look-ahead schedules, critical-path control, and escalation keep delivery on track.'
  },
  {
    icon: ShieldCheck,
    value: 'Safety & Compliance',
    label: 'H&S plans, toolbox talks, and inspection readiness—zero tolerance for non-compliance.'
  },
  {
    icon: ClipboardCheck,
    value: 'QA/QC Closeout',
    label: 'Deficiency logs, test reports, and commissioning for clean handover and fewer callbacks.'
  },
  {
    icon: Users2,
    value: 'Trade & Tendering',
    label: '20–30 packages tendered client-side for scope clarity, pricing power, and accountability.'
  },
  {
    icon: BarChart3,
    value: 'Transparent Reporting',
    label: 'Live dashboards: cost-to-complete, risk register, and schedule status for full visibility.'
  }
];

const Advantage = () => {
  return (
    <section
      id="advantage"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white text-black"
      // ensure hash links don't hide under sticky navbar
      style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-extrabold tracking-tight leading-[1.05] text-[clamp(1.9rem,4.2vw,3.2rem)]"
        >
          The <span className="text-yellow-500">H28</span> Advantage
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-[clamp(1rem,1.6vw,1.25rem)] font-semibold text-gray-900"
        >
          Construction management you can measure.
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-5 max-w-3xl text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-gray-700"
        >
          We sit on your side of the contract—controlling cost, schedule, safety, and quality from pre-con through
          closeout. No prefab or product claims here—this is pure client-side construction management.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg"
              >
                <Icon className="mb-4 h-12 w-12 text-yellow-500" strokeWidth={1.6} />
                <p className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-extrabold leading-tight">{item.value}</p>
                <p className="mt-2 max-w-[280px] text-[15px] leading-relaxed text-gray-700">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
