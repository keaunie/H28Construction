import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll helper
  const scrollToSection = (e, target) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#262626] text-white border-t border-white/10">
      {/* Soft vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* --- LOGO --- */}
          <div>
            <img
              src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760962770/h28construction_je3slj.webp"
              alt="H28 Construction Management"
              className="object-contain h-[70px] sm:h-[80px] md:h-[92px] lg:h-[104px] xl:h-[112px] max-h-full"
            />
            <p className="text-gray-300 text-xs mt-1">
              A division of <span className="font-semibold">Habitat28</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              H28 Construction Management, delivering precision-driven, certified construction solutions.
            </p>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* --- SERVICES (scroll to homepage #services) --- */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Services</span>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Project Management',
                'Budget Oversight',
                'Scheduling',
                'Contractor Coordination',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- SOCIAL LINKS --- */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Connect</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} H28 Construction Management. All rights reserved. |{' '}
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
