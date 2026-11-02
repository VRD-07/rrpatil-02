import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { HeroPhotoWall } from './HeroPhotoWall';

export const HeroSection = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-[#FAF7F0]">
      {/* Subtle background brass radial element */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#B08D57]/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0ECE1] border border-[#B08D57]/30 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              <span>Academic & Competitive Prep 2026–27</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#14110F] leading-[1.08] mb-6">
              Where Discipline <br />
              <span className="italic text-[#0F3D2E] font-medium">Meets Direction.</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-xl text-[#14110F]/80 max-w-2xl font-normal leading-relaxed mb-8">
              R. R. Patil Academy delivers structured, high-yield coaching for School Board Exams, JEE, and NEET. We substitute guesswork with relentless clarity and proven practice.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-md bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] active:scale-[0.98] transition-all shadow-xs min-h-[48px] cursor-pointer"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 text-[#B08D57]" />
              </button>

              <a
                href="tel:+918275280028"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md border-2 border-[#0F3D2E] hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider transition-all min-h-[48px] shadow-xs group"
              >
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span>Call Admissions</span>
              </a>

              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-md border border-[#F0ECE1] hover:border-[#B08D57] bg-white/60 text-[#14110F] text-xs font-medium uppercase tracking-wider hover:bg-white transition-all min-h-[48px]"
              >
                <span>Explore Curriculums</span>
              </a>
            </div>

            {/* Credibility highlights pill list */}
            <div className="mt-10 pt-8 border-t border-[#F0ECE1] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Affordable Education</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Weekly Diagnostic Tests</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="text-xs font-medium text-[#14110F]/80">Custom Material</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Auto-Scrolling Photo Wall */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroPhotoWall />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
