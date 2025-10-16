import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, DollarSign, Calendar, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Comprehensive oversight from conception to completion'
    },
    {
      icon: DollarSign,
      title: 'Budget Oversight',
      description: 'Cost control and financial planning expertise'
    },
    {
      icon: Calendar,
      title: 'Scheduling',
      description: 'Timeline optimization and milestone tracking'
    },
    {
      icon: Users,
      title: 'Contractor Coordination',
      description: 'Seamless management of all project stakeholders'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction management solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 p-8 group hover:border-yellow-400 hover:bg-white/5 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mb-6 text-white group-hover:text-yellow-400 transition-colors duration-300" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;