import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, PiggyBank, BadgeCheck, Users, Eye } from 'lucide-react';


const BROCHURE_COVER_URL =
  // TODO: Replace with your brochure front page image
  'https://res.cloudinary.com/dczzibbkw/image/upload/v1761051661/8a009d24-e58f-4685-8ca8-0f4194671051.png';


const About = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description:
        'We pioneer hybrid construction techniques that combine traditional craftsmanship with modular and prefabricated components—consistently delivering projects 35% faster than conventional approaches.'
    },
    {
      icon: PiggyBank,
      title: 'Cost Optimization',
      description:
        'Through strategic multi-marketplace procurement, hybrid methodologies, and waste reduction, we routinely deliver projects 15–25% below traditional costs—without sacrificing quality.'
    },
    {
      icon: BadgeCheck,
      title: 'Quality Excellence',
      description:
        'Factory-controlled modules undergo rigorous QA that exceeds on-site standards. With inspection Partnerships and comprehensive testing every project meets or exceeds all requirements and building codes.'
    },
    {
      icon: Users,
      title: 'Partnership Commitment',
      description:
        'We treat every engagement as a long-term partnership—collaborating on key decisions and leveraging our network of suppliers, regulators, and consultants to support outcomes.'
    },
    {
      icon: Eye,
      title: 'Operational Transparency',
      description:
        'Clear reporting, transparent cost tracking, and proactive issue identification ensure you always know project status, risks, and mitigation steps.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">"We don't just manage projects. We orchestrate Success"</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 40 years of combined construction expertise, H28 Construction Management — a division of Habitat28 Ltd. — delivers comprehensive project oversight that ensures every build is completed on time, within budget, and to the highest standards. We specialize in hybrid building methodologies that integrate modular efficiency with on-site precision, allowing us to deliver projects up to 35% faster and 22% more cost-effective than traditional construction methods.
          </p>
        </motion.div>

        {/* Core Values (desktop tooltips) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black rounded-full group-hover:border-yellow-400 transition-colors">
                  <Icon className="w-10 h-10 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>

                {/* Inline description for <lg (mobile & tablet) */}
                <p className="text-gray-600 leading-relaxed lg:hidden">{value.description}</p>

                {/* Tooltip (lg+ only) */}
                <div
                  role="tooltip"
                  className="
                            hidden lg:block
                            pointer-events-none
                            absolute left-1/2 -translate-x-1/2 top-full mt-3
                            w-80 text-left
                            opacity-0 translate-y-1
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-200
                            z-20
                          "
                >
                  <div className="relative rounded-xl border border-black/10 bg-gray-900 text-gray-100 shadow-2xl p-5">
                    <p className="text-[15px] leading-relaxed tracking-wide text-gray-100">
                      {value.description}
                    </p>
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-gray-900 border-l border-t border-black/10"
                      aria-hidden="true"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* === Brochure Section — FULL BLEED, keeps design === */}
        <div className="mt-20 relative left-1/2 -translate-x-1/2 w-screen">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
      relative
      border-y-2 border-black
      bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500
      ring-1 ring-yellow-200/50
      shadow-[0_20px_40px_rgba(0,0,0,0.15)]
      overflow-hidden
    "
          >
            {/* Soft decorative glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-3xl bg-yellow-200/50" />

            {/* Content grid — full width, but padded for readability */}
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Left: image preview (front page) */}
              <div className="relative">
                <div className="relative mx-auto w-full h-full min-h-[280px] md:min-h-[360px] lg:min-h-[420px] overflow-hidden">
                  <img
                    src={BROCHURE_COVER_URL}
                    alt="H28 Company Brochure — Front Page"
                    className="absolute inset-0 h-full w-full object-contain p-6 md:p-8 lg:p-10"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Right: text + actions */}
              <div className="relative">
                {/* Featured badge (desktop only) */}
                <span className="hidden md:inline-block absolute top-5 left-6 rounded-full bg-black text-yellow-300 px-3 py-1 text-xs font-semibold tracking-wide z-10">
                  FEATURED
                </span>

                <div className="px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 flex items-center">
                  <div className="w-full text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
                      Company Brochure
                    </h3>
                    <p className="text-black/85 md:text-lg mb-7 max-w-xl md:max-w-none mx-auto md:mx-0">
                      Explore our capabilities, methodology, and project highlights in our interactive flipbook.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

                      <button
                        onClick={() => setBrochureOpen(true)}
                        className="
                  ml-2 inline-flex items-center justify-center
                px-4 py-2 lg:px-5 lg:py-2.5
                rounded-full
                bg-black text-white font-semibold
                hover:bg-white hover:text-black
                border-2 border-yellow-400
                transition-all duration-300
                shadow-sm hover:shadow-lg
                "
                      >
                        Open Brochure
                      </button>

                      <a
                        href="https://heyzine.com/flip-book/f3f89b2d65.html#page/1"
                        target="_blank"
                        rel="noreferrer"
                        className="
                  inline-flex items-center justify-center
                  px-4 py-2 lg:px-5 lg:py-2.5
                  rounded-full
                  bg-transparent text-black
                  hover:bg-black hover:text-white
                  border-2 border-black
                  font-semibold
                  transition-colors
                "
                      >
                        View in new tab
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Fullscreen Flipbook Modal */}
      <AnimatePresence>
        {brochureOpen && (
          <motion.div
            key="brochure-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setBrochureOpen(false)}
                className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors"
                aria-label="Close brochure"
              >
                ✕
              </button>

              {/* Heyzine Flipbook Embed */}
              <div className="aspect-[16/10] bg-white">
                <iframe
                  title="H28 Brochure"
                  src="https://heyzine.com/flip-book/f3f89b2d65.html#page/1"
                  className="w-full h-full"
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
