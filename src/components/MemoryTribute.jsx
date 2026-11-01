import React from 'react';
import { Flame } from 'lucide-react';

import kartikMemImg from '../assets/kartik_mem.jpg';
import kartikMemFaceImg from '../assets/kartik_mem_face.jpeg';

export const MemoryTribute = () => {
  return (
    <section
      id="tribute"
      className="py-10 sm:py-14 bg-[#FAF7F0] border-y border-[#E4DCC8]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#14110F] text-[#FAF7F0] p-6 sm:p-8 border border-[#B08D57]/40 shadow-xl relative overflow-hidden">
          {/* Mobile view background image */}
          <div
            className="sm:hidden absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
            style={{
              backgroundImage: `url(${kartikMemImg})`,
              backgroundPosition: 'center center',
            }}
          />

          {/* Desktop view background image */}
          <div
            className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-55 pointer-events-none"
            style={{
              backgroundImage: `url(${kartikMemImg})`,
              backgroundPosition: 'center center',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#14110F]/70 sm:bg-gradient-to-r sm:from-[#14110F]/85 sm:via-[#14110F]/65 sm:to-[#14110F]/90 pointer-events-none" />

          {/* Card Content Layered Above Background */}
          <div className="relative z-10">
            {/* Header Badge */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="h-px w-6 bg-[#B08D57]/60" />
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B08D57]">
                <Flame className="w-3.5 h-3.5 text-[#B08D57]" />
                IN RESPECTFUL MEMORY • ETERNAL TRIBUTE
              </span>
              <span className="h-px w-6 bg-[#B08D57]/60" />
            </div>

            {/* Layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              {/* Face Image Circle */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#B08D57] p-1 shadow-lg bg-[#241F1A] overflow-hidden">
                  <img
                    src={kartikMemFaceImg}
                    alt="Late Kartik Sonawane"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
                <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#B08D57]">
                  Om Shanti 🙏
                </span>
              </div>

              {/* Tribute Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF7F0]">
                  Late Kartik Sonawane
                </h3>
                <p className="text-xs text-[#B08D57] font-medium tracking-wide mb-3">
                  12th Science HSC Batch (2024–2025) • R. R. Patil Coaching Classes
                </p>

                <blockquote className="text-xs sm:text-sm italic text-[#FAF7F0]/90 leading-relaxed p-3.5 rounded-lg bg-[#FAF7F0]/5 border-l-2 border-[#B08D57] mb-3 backdrop-blur-xs">
                  "A bright, humble soul whose quiet dedication, warm smile, and curiosity touched everyone at R. R. Patil Academy. Though taken from us during his 12th standard, his memory remains an eternal light in our classrooms."
                </blockquote>

                <div className="pt-2 border-t border-[#FAF7F0]/10 flex items-center justify-between text-[11px] text-[#FAF7F0]/60">
                  <span className="font-medium tracking-wider uppercase">
                    Always remembered by the R. R. Patil Academy family
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTribute;
