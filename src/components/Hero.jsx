import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleCTA = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover grayscale" 
          alt="Modern construction site with steel framework and workers"
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
          Professional construction management for commercial and residential projects
        </p>
        <Button 
          onClick={handleCTA}
          size="lg" 
          className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-8 py-6 text-lg transition-all duration-300"
        >
          Request a Consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;