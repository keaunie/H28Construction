import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-black text-white overflow-hidden">
      {/* Decorative maple leaf accent on the left side */}
      <img
        src="https://res.cloudinary.com/dczzibbkw/image/upload/v1760967879/mapleleaf_wf3ixn.webp"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -bottom-10 -left-10
          w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]
          opacity-90 blur-[1px]
          drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]
          z-[1]
        "
      />

      {/* Gradient overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[0]" />

      <div className="relative z-[2] max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to build your future? Let’s bring your vision to life with precision, efficiency, and trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <Phone className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <Mail className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-400">info@h28construction.ca</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group hover:border-yellow-400 transition-colors">
                <MapPin className="w-6 h-6 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office</h3>
                <p className="text-gray-400">
                  46 Morton Ave East<br />
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

        {/* Tagline */}
        <div className="relative text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Family Owned & Proudly Canadian 🇨🇦
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
