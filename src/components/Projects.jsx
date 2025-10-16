import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      timeline: '18 months',
      budget: '$12M'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'Residential',
      timeline: '24 months',
      budget: '$25M'
    },
    {
      id: 3,
      title: 'Manufacturing Facility',
      category: 'Industrial',
      timeline: '14 months',
      budget: '$8M'
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      category: 'Commercial',
      timeline: '16 months',
      budget: '$15M'
    },
    {
      id: 5,
      title: 'Waterfront Condominiums',
      category: 'Residential',
      timeline: '20 months',
      budget: '$18M'
    },
    {
      id: 6,
      title: 'Warehouse Distribution Hub',
      category: 'Industrial',
      timeline: '12 months',
      budget: '$6M'
    }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Industrial'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successfully completed construction projects
          </p>
          
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
                    alt={`${project.title} construction project`}
                   src="https://images.unsplash.com/photo-1586423951975-ba24e359efc0" />
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