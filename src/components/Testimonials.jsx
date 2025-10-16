import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "H28 Construction delivered our commercial complex ahead of schedule and under budget. Their attention to detail is unmatched.",
      author: "Sarah Mitchell",
      company: "Mitchell Properties"
    },
    {
      quote: "Professional, reliable, and incredibly organized. They transformed our vision into reality with precision.",
      author: "David Chen",
      company: "Chen Development Group"
    },
    {
      quote: "The best construction management team we've worked with. Communication was flawless throughout the entire project.",
      author: "Jennifer Rodriguez",
      company: "Rodriguez Investments"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-2 border-black p-8 relative group hover:border-yellow-400 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 mb-4 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t-2 border-black pt-4 group-hover:border-yellow-400 transition-colors duration-300">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;