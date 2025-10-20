import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinksLeft = [
    { name: 'https://res.cloudinary.com/dczzibbkw/image/upload/v1760714234/habitat28_foirsa.webp', href: '#' },
  ];
  const navLinksRight = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black bg-opacity-100 shadow-lg' : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAV ROW: make it relative + overflow-hidden so logo stays inside */}
        <div
          className={cn(
            'relative flex items-center justify-between overflow-hidden transition-[height] duration-300',
            scrolled
              ? 'h-20 sm:h-22 md:h-24 lg:h-28 xl:h-32'   // smaller when scrolled
              : 'h-24 sm:h-26 md:h-28 lg:h-32 xl:h-40'   // base heights
          )}
        >
          {/* LEFT */}
          <div className="flex items-center gap-4 sm:gap-6">
            {navLinksLeft.map(l => (
              <a key={l.name} href={l.href} aria-label="Habitat28" className="block">
                <img
                  src={l.name}
                  alt="Habitat28"
                  className="object-contain h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
                />
              </a>
            ))}
          </div>

          {/* CENTER LOGO — perfectly centered & constrained inside the row */}
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            animate={{ scale: scrolled ? 0.85 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <img
              src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760962770/h28construction_je3slj.webp"
              alt="H28 Construction Management"
              className="
                object-contain
                h-[88px]  sm:h-[96px]  md:h-[104px]  lg:h-[120px]  xl:h-[500px]
                max-h-full   /* never exceed the navbar row height */
              "
            />
          </motion.div>

          {/* RIGHT (desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinksRight.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium text-sm lg:text-base hover:text-yellow-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
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
            className="md:hidden overflow-hidden bg-black bg-opacity-100 border-t border-white/10"
          >
            <div className="px-4 py-3 sm:px-6">
              <nav className="flex flex-col gap-2">
                {navLinksRight.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-2 text-white text-base font-medium rounded hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
