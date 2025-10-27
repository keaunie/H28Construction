import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, PiggyBank, BadgeCheck, Users, Eye } from 'lucide-react';

const BROCHURE_COVER_URL =
  'https://res.cloudinary.com/dczzibbkw/image/upload/v1761051661/8a009d24-e58f-4685-8ca8-0f4194671051.png';

const values = [
  {
    icon: Lightbulb,
    title: 'Leadership in Delivery',
    description:
      'We lead complex builds with disciplined planning, scope control, and proactive risk management—so schedules and budgets stay predictable.'
  },
  {
    icon: PiggyBank,
    title: 'Cost Optimisation',
    description:
      'Competitive tendering, transparent progress claims, and change-management protocols keep variance within ±2% on average.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality & Compliance',
    description:
      'QA/QC plans, inspection readiness, and documentation closeouts ensure work meets code and specification with fewer punch-list items.'
  },
  {
    icon: Users,
    title: 'Stakeholder Coordination',
    description:
      'Clear lines of accountability with owners, trades, consultants, and authorities—reducing rework and decision latency.'
  },
  {
    icon: Eye,
    title: 'Operational Transparency',
    description:
      'Dashboards, cost reports, and look-ahead schedules provide real-time visibility into status, risks, and mitigations.'
  }
];

const About = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-white px-4 py-24 overflow-x-hidden"
      // prevent hash-link anchor from hiding under fixed navbar
      style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold md:text-5xl">About Us</h2>
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">
            “We don’t just manage projects — we orchestrate success.”
          </h3>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            With decades of combined construction experience, <strong>H28 Construction</strong> delivers client-side
            construction management that keeps projects <strong>on budget, on schedule, and on spec</strong>. Our team
            handles cost planning, trade tendering, site coordination, safety, and quality—providing the transparency
            and control owners expect on high-stakes builds.
          </p>
        </motion.div>

        {/* Core values */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative text-center"
              >
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-black transition-colors group-hover:border-yellow-400">
                  <Icon className="h-10 w-10 transition-colors group-hover:text-yellow-400" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{v.title}</h3>

                {/* Inline for mobile/tablet */}
                <p className="leading-relaxed text-gray-600 lg:hidden">{v.description}</p>

                {/* Tooltip for lg+ (also accessible on focus) */}
                <div
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 hidden w-80 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 lg:block"
                >
                  <div className="relative rounded-xl border border-black/10 bg-gray-900 p-5 text-gray-100 shadow-2xl">
                    <p className="text-[15px] leading-relaxed tracking-wide">{v.description}</p>
                    <div
                      className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-gray-900 border-l border-t border-black/10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brochure band (full-bleed but no horizontal scroll) */}
        <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border-y-2 border-black bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-yellow-200/50"
          >
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-200/50 blur-3xl" />

            <div className="grid items-stretch md:grid-cols-2">
              {/* Left image */}
              <div className="relative">
                <div className="relative mx-auto h-full w-full min-h-[280px] overflow-hidden md:min-h-[360px] lg:min-h-[420px]">
                  <img
                    src={BROCHURE_COVER_URL}
                    alt="H28 Construction — company brochure cover"
                    className="absolute inset-0 h-full w-full object-contain p-6 md:p-8 lg:p-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Right text/actions */}
              <div className="relative">
                <span className="absolute left-6 top-5 z-10 hidden rounded-full bg-black px-3 py-1 text-xs font-semibold tracking-wide text-yellow-300 md:inline-block">
                  FEATURED
                </span>

                <div className="flex items-center px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
                  <div className="w-full text-center md:text-left">
                    <h3 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">Company Brochure</h3>
                    <p className="mb-7 max-w-xl text-black/85 md:mx-0 md:text-lg">
                      See how we manage budget, schedule, safety, and quality across complex projects—plus recent
                      highlights and credentials.
                    </p>

                    <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                      <button
                        onClick={() => setBrochureOpen(true)}
                        className="inline-flex items-center justify-center rounded-full border-2 border-yellow-400 bg-black px-4 py-2 font-semibold text-white transition-all hover:bg-white hover:text-black lg:px-5 lg:py-2.5"
                      >
                        Open Brochure
                      </button>

                      <a
                        href="https://heyzine.com/flip-book/f3f89b2d65.html#page/1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border-2 border-black bg-transparent px-4 py-2 font-semibold text-black transition-colors hover:bg-black hover:text-white lg:px-5 lg:py-2.5"
                      >
                        View in New Tab
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brochure modal */}
      <AnimatePresence>
        {brochureOpen && (
          <motion.div
            key="brochure-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setBrochureOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-yellow-400 hover:text-black"
                aria-label="Close brochure"
              >
                ✕
              </button>

              <div className="bg-white [aspect-ratio:16/10]">
                <iframe
                  title="H28 Construction – Company Brochure"
                  src="https://heyzine.com/flip-book/f3f89b2d65.html#page/1"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
