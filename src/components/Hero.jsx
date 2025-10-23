import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/our-services'); // ✅ redirects to your new page
  };


  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale"
          alt="Modern construction site with steel framework and professional workers overseeing progress."
          src="https://images.unsplash.com/photo-1585072746984-82cbcc8388cf" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building with Precision,<br /> Passion, and Purpose.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
          Professional Construction Management for Commercial, Residential, <br/>and Industrial Projects.
        </p>
        <a href="#contact" class="
                ml-2 inline-flex items-center justify-center
                px-4 py-2 lg:px-5 lg:py-2.5
                rounded-full
                bg-yellow-400 text-black font-semibold
                hover:bg-white hover:text-black
                border-2 border-yellow-400
                transition-all duration-300
                shadow-sm hover:shadow-lg
              ">Start Your Project</a>
      </motion.div>
    </section>
  );
};

export default Hero;