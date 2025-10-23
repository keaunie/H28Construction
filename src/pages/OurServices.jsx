import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Factory,
  Layers,
  ShoppingCart,
  Users,
  Leaf,
  ShieldCheck,
  DollarSign,
  ClipboardCheck,
  FileCheck2,
  Map,
  PenTool,
  ThermometerSun,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

const OurServices = () => {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/h28/image/upload/v1760978547/14_upgnzf.png"
            alt="Modular construction site with workers and prefabricated units being assembled"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Construction Management
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Hybrid builds. Smart sourcing. Integrated design-build. Complete construction management services—delivered with precision, efficiency, and excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {/* same-page jump is fine as an anchor if this page has #contact; if not, link to /#contact instead */}
            <Link to="/#contact">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-full px-8 py-6">
                Start Your Project
              </Button>
            </Link>

            <a href="#capabilities">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
              >
                Explore Capabilities
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* VALUE PILLARS / CAPABILITIES */}
      <section id="capabilities" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">What We Do Best</h2>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
              We combine modular precision with on-site agility to build faster, safer, and smarter—without compromising on design or quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                Icon: Factory,
                title: "Prefabricated Modular Construction",
                desc:
                  "Offsite manufacturing for rapid on-site assembly—consistent quality, fewer delays, and cleaner job sites.",
              },
              {
                Icon: Layers,
                title: "Hybrid Structural Solutions",
                desc:
                  "Traditional meets modular. Tailored structures for residential to light commercial—flexible, scalable, efficient.",
              },
              {
                Icon: ShoppingCart,
                title: "Strategic Multi-Marketplace Procurement",
                desc:
                  "Broad supplier networks drive 10–20% material cost savings with improved timeline reliability and risk control.",
              },
              {
                Icon: Users,
                title: "In-House Architectural & Design Coordination",
                desc:
                  "Designers and PMs work as one. Faster approvals, fewer RFIs, and smoother transitions from concept to build.",
              },
              {
                Icon: Leaf,
                title: "Sustainable Practices",
                desc:
                  "Eco-friendly materials, energy-efficient envelopes, and waste-reducing workflows built into every phase.",
              },
              {
                Icon: ShieldCheck,
                title: "Safety-First Protocols",
                desc:
                  "Rigorous safety standards protect crews and clients—planning, training, and site controls from start to finish.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.05 * i)}
                className="p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-yellow-400 mb-4" strokeWidth={1.6} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Cost Savings Banner */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 md:mt-14 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <DollarSign className="w-10 h-10 text-yellow-500" strokeWidth={1.8} />
              <h4 className="text-2xl font-bold">Cost-Saving Measures</h4>
            </div>
            <p className="text-gray-700 md:ml-auto max-w-3xl">
              At the core of our management services is a simple truth: we deliver savings without sacrificing quality—
              through hybrid builds, smart sourcing, and an integrated design-build approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRE-CONSTRUCTION SERVICES */}
      <section id="preconstruction" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Pre-Construction Services</h2>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
              Get your project off to the best possible start with transparent planning, coordinated design, and
              approval-ready documentation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                Icon: ClipboardCheck,
                title: "Planning",
                desc:
                  "We align goals, budget, schedule, and delivery method—so execution is predictable and efficient.",
              },
              {
                Icon: DollarSign,
                title: "Estimation",
                desc:
                  "Detailed, transparent cost breakdowns to support smart decision-making from day one.",
              },
              {
                Icon: FileCheck2,
                title: "Approvals & Permits",
                desc:
                  "We coordinate with local authorities and manage the paperwork to keep momentum strong.",
              },
              {
                Icon: Map,
                title: "Site Survey & Grading",
                desc:
                  "Site assessments and grading plans that reduce downstream issues and change orders.",
              },
              {
                Icon: PenTool,
                title: "Architectural / Engineering Plans",
                desc:
                  "In-house experts deliver precise, constructible drawings that meet code and design intent.",
              },
              {
                Icon: ThermometerSun,
                title: "HVAC Layout & Heat Loss",
                desc:
                  "Advanced calculations for comfort and efficiency—meeting standards while cutting energy waste.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.05 * i)}
                className="p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-yellow-400 mb-4" strokeWidth={1.6} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="text-center mt-12">
            <a href="#contact">
              <Link to="/#contact">
              <Button className="bg-yellow-400 text-white hover:bg-yellow-300 rounded-full">
                Start Your Pre-Con Today
              </Button>
            </Link>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h3 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold">
            Ready to build with confidence?
          </motion.h3>
          <motion.p {...fadeUp(0.05)} className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Tell us about your goals—we’ll help you plan, prioritize, and deliver with clarity and control.
          </motion.p>
          <motion.div {...fadeUp(0.1)} className="mt-8 flex justify-center gap-3">
            <Link to="/#contact">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-full">
                Talk to a Project Lead
              </Button>
            </Link>
            <Link to="/#projects" className="inline-flex">
              <Button variant="outline" className="border-white rounded-full text-white hover:bg-white hover:text-black">
                See Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
