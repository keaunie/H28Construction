import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinksLeft = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }];
  const navLinksRight = [{
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5,
    ease: 'easeOut'
  }} className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-black shadow-lg' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            {navLinksLeft.map(link => <a key={link.name} href={link.href} className="text-white font-medium hover:text-yellow-400 transition-colors duration-300">
                {link.name}
              </a>)}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#" className="text-white text-3xl font-bold">H28</a>
          </div>
          <div className="flex items-center space-x-8">
            {navLinksRight.map(link => <a key={link.name} href={link.href} className="text-white font-medium hover:text-yellow-400 transition-colors duration-300">
                {link.name}
              </a>)}
          </div>
        </div>
      </div>
    </motion.nav>;
};
export default Navbar;