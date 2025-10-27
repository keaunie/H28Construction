import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, DollarSign, Calendar, Users, HardHat, ShieldCheck, FileSpreadsheet, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleRedirect = () => navigate('/our-services');

  const services = [
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description:
        'Strategic oversight from design to delivery—managing schedule, budget, trades, and quality for predictable outcomes.'
    },
    {
      icon: DollarSign,
      title: 'Budget Oversight',
      description:
        'Transparent cost control through early estimating, procurement strategy, and variance tracking within ±2%.'
    },
    {
      icon: Calendar,
      title: 'Scheduling & Coordination',
      description:
        'Critical-path scheduling and live progress tracking ensure timely completion across all project milestones.'
    },
    {
      icon: Users,
      title: 'Contractor & Trade Management',
      description:
        'Tendering and managing 20–30 trade packages per project with clarity, accountability, and safety compliance.'
    },
    {
      icon: HardHat,
      title: 'Health & Safety',
      description:
        'Site-specific safety plans, daily toolbox talks, and inspection readiness with zero-incident commitment.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description:
        'Structured QA/QC programs with test reports, checklists, and inspector sign-offs for code-compliant delivery.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Cost Reporting & Documentation',
      description:
        'Real-time dashboards and monthly cost-to-complete summaries for full financial visibility and control.'
    },
    {
      icon: Wrench,
      title: 'Commissioning & Closeout',
      description:
        'Deficiency management, performance testing, and final documentation for seamless turnover and occupancy.'
    }
  ];

  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 px-4"
      style={{ scrollMarginTop: 'var(--navbar-height, 80px)' }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h2>
          <h3 className="mb-4 text-2xl font-semibold text-yellow-400 md:text-3xl">
            Seamless Management. Solid Results.
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            From concept to completion, H28 Construction delivers full-cycle project management—balancing cost,
            schedule, safety, and quality to protect your investment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group border border-white/20 p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-white/5"
              >
                <Icon
                  className="mb-6 h-12 w-12 text-white transition-colors duration-300 group-hover:text-yellow-400"
                  strokeWidth={1.6}
                />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            onClick={handleRedirect}
            size="lg"
            className="rounded-full bg-yellow-400 px-8 py-6 text-lg font-semibold text-black transition-all duration-300 hover:bg-yellow-300"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
