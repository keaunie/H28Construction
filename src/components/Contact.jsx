import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, FileText, CalendarCheck, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="relative py-24 px-4 bg-black text-white overflow-hidden">
      {/* Decorative maple leaf accent */}
      {/* Mobile (<md) */}
      <img
        src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760967879/mapleleaf_wf3ixn.webp"
        alt=""
        aria-hidden="true"
        className="
          block md:hidden
          pointer-events-none select-none
          absolute bottom-4 left-[-40px]
          w-[140px]
          opacity-100 drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]
          z-[2]
        "
      />
      {/* Desktop (md+) */}
      <img
        src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760967879/mapleleaf_wf3ixn.webp"
        alt=""
        aria-hidden="true"
        className="
          hidden md:block
          pointer-events-none select-none
          absolute -bottom-14 left-[-0px]
          w-[200px] lg:w-[350px]
          opacity-100 drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]
          z-[2]
        "
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[0]" />

      <div className="relative z-[2] max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Ready to Build With Confidence?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how H28 can transform your next project — seamlessly, safely, and successfully.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Get in Touch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <CalendarCheck className="w-6 h-6 text-yellow-400" strokeWidth={1.6} />
                <span>Schedule a Consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-yellow-400" strokeWidth={1.6} />
                <span>FAQs</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-yellow-400" strokeWidth={1.6} />
                <a
                  href="https://heyzine.com/flip-book/f3f89b2d65.html#page/1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-white-400 hover:underline"
                >
                  View the Brochure
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-yellow-400"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-yellow-400"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-yellow-400"
                required
              />
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold py-6"
              >
                Send Message
              </Button>
            </form>

            <div className="flex text-center mt-40">
              <h5 className="flex text-center text-2xl md:text-4xl font-semibold tracking-tight text-white z-[3]">
                Family Owned & Proudly Canadian
              </h5>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h4 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
              Reach Us Directly
            </h4>

            {/* <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <Phone className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-1">Phone</h5>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div> */}

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <Mail className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-1">Email</h5>
                <p className="text-gray-400">info@h28construction.ca</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <MapPin className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-1">Office</h5>
                <p className="text-gray-400">
                  47 Morton Ave East, Unit 3<br />
                  Branton, ON N3R 7J5<br />
                  Canada
                </p>
              </div>
            </div>

            <div className="mt-8 aspect-video bg-gray-800 border border-white/20">
              <img
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Office location map"
                src="https://images.unsplash.com/photo-1693305884918-4ca847aa59cd"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
