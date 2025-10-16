import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Committed to delivering superior quality in every project'
    },
    {
      icon: Users,
      title: 'Efficiency',
      description: 'Expert guidance from planning through completion'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Expert guidance from planning through completion'
    },
    {
      icon: Award,
      title: 'Sustainability',
      description: 'Committed to delivering superior quality in every project'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With decades of combined experience, we deliver construction management services 
            that ensure your project is completed on time, within budget, and to the highest standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black rounded-full group hover:border-yellow-400 transition-colors duration-300">
                <value.icon className="w-10 h-10 group-hover:text-yellow-400 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;