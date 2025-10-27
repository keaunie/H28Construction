import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // or replace with a <button> if this path isn’t real
// import PropTypes from 'prop-types'; // optional

const Hero = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const goServices = () => navigate('/our-services');

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <header
      id="hero"
      role="banner"
      className="relative isolate flex min-h-[100vh] items-center justify-center overflow-hidden bg-black"
      aria-label="H28 Construction — Client-side construction management services"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1920"
          alt="City construction skyline with cranes at sunrise—symbolizing complex, high-stakes builds."
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-5xl"
        >
          Client-Side <span className="text-yellow-400">Construction Management</span>
          <br className="hidden md:block" />
          <br/>
          On&nbsp;Budget. On&nbsp;Schedule. On&nbsp;Site.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg"
        >
          H28 Construction safeguards your project interests end-to-end cost planning, procurement, trade tendering,
          site coordination, safety, and quality control, so you get predictable outcomes without surprises.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={goServices}
            className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition-all hover:bg-white hover:text-black"
          >
            Explore Management Services
          </Button>

          <a
            href="#contact"
            className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition-all hover:bg-white hover:text-black"
          >
            Book a Consultation
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur md:grid-cols-4"
          aria-label="Performance and assurance metrics"
        >
          <Stat kpi="±2%" label="Budget variance through disciplined cost control" />
          <Stat kpi="95%" label="On-time delivery across managed schedules" />
          <Stat kpi="24/7" label="Site coordination & issue escalation" />
          <Stat kpi="Zero" label="Tolerance for safety non-compliance" />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-3xl text-sm text-gray-400"
        >
          We sit on your side of the contract—tendering 20–30 trade packages, managing progress claims, inspections,
          and quality so you retain transparency and control from pre-con to handover.
        </motion.p>
      </div>
    </header>
  );
};

const Stat = ({ kpi, label }) => (
  <div className="rounded-xl bg-black/30 p-4">
    <div className="text-2xl font-extrabold text-white md:text-3xl">{kpi}</div>
    <div className="mt-1 text-xs leading-snug text-gray-300">{label}</div>
  </div>
);

// Optional runtime checks
// Stat.propTypes = {
//   kpi: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// };

export default Hero;
