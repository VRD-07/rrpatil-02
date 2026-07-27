import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Users } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import ccImg2 from '../assets/cc_img2.png';

export const AboutSection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  const pillars = [
    {
      icon: Target,
      title: 'First-Principles Understanding',
      description:
        'We reject formulaic memorization. Concepts in Physics, Chemistry, Mathematics, and Biology are taught from foundational principles down to exam application.',
    },
    {
      icon: Brain,
      title: 'Diagnostic Test Analytics',
      description:
        'Every weekend examination provides granular topic-wise accuracy metrics, enabling targeted weakness rectifications before main examinations.',
    },
    {
      icon: Users,
      title: 'Monitored Study & Doubts',
      description:
        'Dedicated 1-on-1 doubt clearing hours after regular lectures ensure no student leaves campus with unresolved conceptual bottlenecks.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[#B08D57]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Bold Statement */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] leading-[1.15] mb-6">
              Academic excellence is not luck. It is a predictable outcome of deliberate methodology.
            </h2>
            <p className="text-base text-[#14110F]/80 leading-relaxed font-normal mb-6">
              Founded in 2012 by educators from top technical universities, Vidhata Academy was built to address the dilution of rigor in secondary coaching. We combine small batch sizes with uncompromising syllabus depth.
            </p>
            <div className="p-4 rounded-md border-l-2 border-[#B08D57] bg-[#F0ECE1] text-xs font-medium text-[#0F3D2E]">
              "The goal of competitive exam coaching is to make complex problem-solving intuitive under pressure."
            </div>
          </motion.div>

          {/* Right Column: Supporting Classroom Image */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#F0ECE1] shadow-xs bg-white">
              <img
                src={ccImg2}
                alt="Faculty member conducting interactive problem-solving session at whiteboard"
                width={500}
                height={333}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white border-t border-[#F0ECE1]">
                <div className="flex items-center justify-between text-xs text-[#14110F]/80">
                  <span className="font-semibold text-[#0F3D2E]">Interactive Classroom Sessions</span>
                  <span className="text-[11px] text-[#14110F]/60">Max 25 Students / Lecture</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.1 }}
                className="p-6 rounded-lg bg-white border border-[#F0ECE1] hover:border-[#B08D57]/60 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-md bg-[#0F3D2E] text-[#FAF7F0] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#14110F] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
