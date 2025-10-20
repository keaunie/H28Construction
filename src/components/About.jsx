import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Every project is built to exceed expectations through uncompromising attention to detail.'
    },
    {
      icon: Users,
      title: 'Efficiency',
      description: 'Streamlined project delivery from concept to completion, maximizing productivity.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication and honest reporting at every phase of construction.'
    },
    {
      icon: Award,
      title: 'Sustainability',
      description: 'Environmentally responsible solutions that minimize waste and optimize performance.'
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
            With over 30 years of combined construction expertise, H28 Construction Management a division of Habitat28 Canada, delivers comprehensive project oversight that ensures every build is completed on time, within budget, and to the highest standards.
            We specialize in hybrid building methodologies that integrate modular efficiency with on-site precision, allowing us to deliver projects up to 35% faster and 22% more cost-effective than traditional construction methods.
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