import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Downtown Office Complex', category: 'Commercial', timeline: '18 months', budget: '$12M', alttext: 'Modern office tower integrating hybrid modular systems for faster completion.' },
    { id: 2, title: 'Luxury Residential Tower', category: 'Residential', timeline: '24 months', budget: '$25M', alttext: 'Premium mixed-use development combining modern design with sustainable materials.' },
    { id: 3, title: 'Manufacturing Facility', category: 'Industrial', timeline: '14 months', budget: '$8M', alttext: 'State-of-the-art production site built using rapid modular integration.' },
    { id: 4, title: 'Retail Shopping Center', category: 'Commercial', timeline: '16 months', budget: '$15M', alttext: 'Energy-efficient commercial plaza with advanced prefabricated structures.' },
    { id: 5, title: 'Waterfront Condominiums', category: 'Residential', timeline: '20 months', budget: '$18M', alttext: 'High-end condos featuring modular structural components and elegant urban design.' },
    { id: 6, title: 'Warehouse Distribution Hub', category: 'Industrial', timeline: '12 months', budget: '$6M', alttext: 'Flexible, large-scale logistics center optimized for durability and operational efficiency.' }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Industrial'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden bg-gray-50">
      {/* === Right Accent Background === */}
      <div
        className="absolute inset-y-0 right-0 w-[100%] md:w-[100%] lg:w-[100%] xl:w-[30%] bg-no-repeat bg-right bg-contain opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dczzibbkw/image/upload/v1760966198/habitat28halfbackgroundaccent_v7msan.png')"
        }}
      ></div>

      {/* === Optional white overlay to soften contrast === */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent" />

      {/* === Foreground Content === */}
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-black drop-shadow-sm">
            Featured Projects
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-4">
            Results That Speak for Themselves.
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore some of our completed and ongoing projects — each one a story of collaboration, precision, and success.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={`${
                  filter === category
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'border-black text-black hover:bg-black hover:text-white'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white border-2 border-black overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
                    alt={project.alttext}
                    src="https://images.unsplash.com/photo-1586423951975-ba24e359efc0"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Timeline: {project.timeline}</span>
                    <span>Budget: {project.budget}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
