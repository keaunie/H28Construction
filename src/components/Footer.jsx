import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold">H28</span>
            <p className="text-gray-400 text-sm mt-2">
              Excellence in construction management since 1995
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Services</span>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Project Management</li>
              <li>Budget Oversight</li>
              <li>Scheduling</li>
              <li>Contractor Coordination</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Connect</span>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} H28 Construction Management. All rights reserved. | <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;