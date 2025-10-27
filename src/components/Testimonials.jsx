import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'H28 Construction delivered our commercial complex ahead of schedule and under budget. Their attention to detail is unmatched.',
      author: 'Sarah Mitchell',
      company: 'Mitchell Properties'
    },
    {
      quote:
        'Professional, reliable, and incredibly organized. They transformed our vision into reality with precision.',
      author: 'David Chen',
      company: 'Chen Development Group'
    },
    {
      quote:
        'The best construction management team we’ve worked with. Communication was flawless throughout the entire project.',
      author: 'Jennifer Rodriguez',
      company: 'Rodriguez Investments'
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24 text-white"
      style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
    >
      {/* soft vignette gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What Our Clients Say
          </h2>
          <h3 className="text-xl font-medium text-yellow-400">
            Trusted by developers, owners, and investors across sectors.
          </h3>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111111] to-[#1c1c1c] p-10 shadow-lg hover:border-yellow-400 transition-all duration-300"
            >
              <Quote className="mb-5 h-10 w-10 text-yellow-500 opacity-70" />
              <p className="mb-8 text-gray-200 italic leading-relaxed">
                “{t.quote}”
              </p>
              <div className="border-t border-white/20 pt-5">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-gray-400">{t.company}</p>
              </div>
              {/* subtle gold glow on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
