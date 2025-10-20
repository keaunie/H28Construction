import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const values = [
    { icon: Award, title: 'Quality', description: 'Every project is built to exceed expectations through uncompromising attention to detail.' },
    { icon: Users, title: 'Efficiency', description: 'Streamlined project delivery from concept to completion, maximizing productivity.' },
    { icon: Target, title: 'Transparency', description: 'Clear communication and honest reporting at every phase of construction.' },
    { icon: Award, title: 'Sustainability', description: 'Environmentally responsible solutions that minimize waste and optimize performance.' }
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 30 years of combined construction expertise, H28 Construction Management — a division of Habitat28 Canada — delivers comprehensive project oversight that ensures every build is completed on time, within budget, and to the highest standards. We specialize in hybrid building methodologies that integrate modular efficiency with on-site precision, allowing us to deliver projects up to 35% faster and 22% more cost-effective than traditional construction methods.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black rounded-full group hover:border-yellow-400 transition-colors">
                <value.icon className="w-10 h-10 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brochure Section */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative inline-block px-8 py-10 border border-gray-200 rounded-2xl shadow-sm bg-gradient-to-br from-gray-50 to-white"
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Company Brochure</h3>
              <p className="text-gray-600 mb-6">
                Explore our capabilities, methodology, and project highlights in our interactive flipbook.
              </p>
              <button
                onClick={() => setBrochureOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-md bg-black text-white hover:bg-yellow-400 hover:text-black font-semibold transition-colors"
              >
                Open Brochure
              </button>
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
