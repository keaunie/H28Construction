import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinksLeft = [
    { name: 'https://res.cloudinary.com/dczzibbkw/image/upload/v1760714234/habitat28_foirsa.webp', href: '#' },
  ];

  const navLinksRight = [
    // { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAV ROW */}
        <div
          className={cn(
            'relative flex items-center justify-between overflow-hidden transition-[height] duration-300',
            scrolled
              ? 'h-14 md:h-16 lg:h-20 xl:h-22'
              : 'h-22 md:h-26 lg:h-30 xl:h-32'
          )}
        >
          {/* LEFT — Habitat28 Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            {navLinksLeft.map((l) => (
              <a key={l.name} href={l.href} aria-label="Habitat28" className="block">
                <motion.img
                  src={l.name}
                  alt="Habitat28"
                  className="object-contain"
                  style={{ height: '40px' }}
                  animate={{ scale: scrolled ? 0.70 : 1.20 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                />
              </a>
            ))}
          </div>

          {/* CENTER LOGO (clickable home button) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: scrolled ? 0.7 : 1.45 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <Link
              to="/"
              aria-label="Go to Home"
              className="pointer-events-auto cursor-pointer"
            >
              <motion.img
                src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760962770/h28construction_je3slj.webp"
                alt="H28 Construction Management Logo"
                className="
        object-contain
        h-[70px] sm:h-[80px] md:h-[92px] lg:h-[104px] xl:h-[112px]
        max-h-full
      "
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              />
            </Link>
          </motion.div>


          {/* RIGHT — Nav Links + Button */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinksRight.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium text-sm lg:text-base hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Start Your Project Button */}
            <a
              href="#contact"
              className="
                ml-2 inline-flex items-center justify-center
                px-4 py-2 lg:px-5 lg:py-2.5
                rounded-full
                bg-yellow-400 text-black font-semibold
                hover:bg-white hover:text-black
                border-2 border-yellow-400
                transition-all duration-300
                shadow-sm hover:shadow-lg
              "
            >
              Start Your Project
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7">
              <path
                fillRule="evenodd"
                d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-white/10"
          >
            <div className="px-4 py-3 sm:px-6">
              <nav className="flex flex-col gap-2">
                {navLinksRight.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-2 text-white text-base font-medium rounded hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                {/* Mobile Button */}
                <a
                  href="#contact"
                  className="mt-3 inline-flex justify-center rounded-md bg-yellow-400 text-black font-semibold py-3 hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Your Project
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
