import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import ccImg from '../assets/cc_img.png';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const reducedMotion = usePrefersReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-[#FAF7F0]">
      {/* Subtle background brass radial element */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#B08D57]/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0ECE1] border border-[#B08D57]/30 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              <span>Academic & Competitive Prep 2026–27</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#14110F] leading-[1.08] mb-6"
            >
              Where Discipline <br />
              <span className="italic text-[#0F3D2E] font-medium">Meets Direction.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-[#14110F]/80 max-w-2xl font-normal leading-relaxed mb-8"
            >
              R. R. Patil Academy delivers structured, high-yield coaching for School Board Exams, JEE, and NEET. We substitute guesswork with relentless clarity and proven practice.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] active:scale-[0.98] transition-all shadow-xs min-h-[48px]"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 text-[#B08D57]" />
              </button>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#F0ECE1] hover:border-[#B08D57] bg-white/60 text-[#14110F] text-xs font-medium uppercase tracking-wider hover:bg-white transition-all min-h-[48px]"
              >
                <span>Explore Curriculums</span>
              </a>
            </motion.div>

            {/* Credibility highlights pill list */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-[#F0ECE1] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Small Batch Size (Max 25)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Weekly Diagnostic Tests</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Custom Material</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Contained Photography Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md rounded-lg overflow-hidden bg-white border border-[#F0ECE1] shadow-xs group">
              {/* Contained Hero Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F3D2E]/5">
                <img
                  src={ccImg}
                  alt="R. R. Patil Academy students engaged in collaborative problem solving in library"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle emerald tint overlay */}
                <div className="absolute inset-0 bg-[#0F3D2E]/10 mix-blend-multiply pointer-events-none" />

                {/* Floating Brass Stamp */}
                <div className="absolute top-4 right-4 bg-[#FAF7F0]/95 backdrop-blur-xs border border-[#B08D57]/40 rounded px-3 py-1.5 shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F3D2E]">
                    Est. 2012 Campus
                  </span>
                </div>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="p-5 bg-white border-t border-[#F0ECE1]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="font-editorial text-base font-semibold text-[#14110F]">
                      Small-Group Learning Rigor
                    </span>
                    <span className="text-[11px] text-[#14110F]/70">
                      Deccan Gymkhana Main Campus Study Hall
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#F0ECE1] text-[#0F3D2E] text-[10px] font-semibold uppercase">
                    Class 8–12th
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
