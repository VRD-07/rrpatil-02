import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export const StudyMaterial = () => {
  const packages = [
    {
      id: 'foundation-10th',
      badge: '10TH FOUNDATION',
      title: 'Class 10th Foundation Module',
      bookCount: '1 Complete Module',
      subText: 'Science, Maths & Mental Ability',
      highlights: ['NCERT & Olympiad Aligned', 'First-Principles Problem Drills'],
      isFeatured: false,
    },
    {
      id: 'pcm-stream',
      badge: '11TH & 12TH PCM',
      title: 'PCM Stream Series',
      bookCount: '7 In-House Books / Year',
      subText: 'Physics (2 Vol), Chem (2 Vol), Maths (3 Vol)',
      highlights: ['Step-by-Step Theory', 'JEE Main & CET Practice Sets'],
      isFeatured: false,
    },
    {
      id: 'pcmb-stream',
      badge: '11TH & 12TH PCMB',
      title: 'PCMB Stream Series',
      bookCount: '9 In-House Books / Year',
      subText: 'Physics, Chem, Maths & Biology (2 Vol)',
      highlights: ['Full 4-Color High-Res Print', 'NCERT Line-by-Line Breakdown'],
      isFeatured: true,
    },
    {
      id: 'pyq-bank',
      badge: 'ENTRANCE PYQ BANK',
      title: 'MHT-CET & JEE PYQ Book',
      bookCount: '1 PYQ Question Bank',
      subText: '50 Handpicked Questions / Chapter',
      highlights: ['Topic-Wise Past Year Questions', 'Formula & Shortcut Index'],
      isFeatured: false,
    },
  ];

  return (
    <section id="study-material" className="py-12 sm:py-20 bg-[#FAF7F0] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              PROPRIETARY PUBLICATIONS & MODULES
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-3xl">
            Study Material Built In-House
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            Authored directly by our senior faculty for deep conceptual understanding — provided free with every course enrollment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl p-3.5 sm:p-5 shadow-xs transition-all duration-300 flex flex-col justify-between group ${
                pkg.isFeatured
                  ? 'bg-white border-2 border-[#B08D57] shadow-sm relative'
                  : 'bg-white border border-[#E4DCC8] hover:border-[#B08D57]'
              }`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                    pkg.isFeatured ? 'bg-[#B08D57] text-[#14110F]' : 'bg-[#F0ECE1] text-[#0F3D2E]'
                  }`}>
                    {pkg.badge}
                  </span>
                  {pkg.isFeatured && (
                    <Sparkles className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                  )}
                </div>

                {/* Main Book Count Pill */}
                <div className="my-2 p-2 sm:p-2.5 rounded-lg bg-[#FAF7F0] border border-[#F0ECE1] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span className="font-editorial text-sm sm:text-base font-bold text-[#0F3D2E] leading-tight">
                    {pkg.bookCount}
                  </span>
                </div>

                <h3 className="font-editorial text-sm sm:text-lg font-bold text-[#14110F] mb-1 group-hover:text-[#0F3D2E] transition-colors leading-snug">
                  {pkg.title}
                </h3>
                
                <p className="text-[10px] sm:text-xs text-[#14110F]/70 mb-3 leading-normal font-medium">
                  {pkg.subText}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-[#F0ECE1]">
                  {pkg.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5 text-[10px] sm:text-xs text-[#0F3D2E]">
                      <CheckCircle2 className="w-3 h-3 text-[#B08D57] shrink-0 mt-0.5" />
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#0F3D2E] text-[#FAF7F0] border border-[#B08D57] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-[#B08D57]" />
            </div>
            <div>
              <h4 className="font-editorial text-base sm:text-lg font-bold text-white">
                30+ Total In-House Books & Practice Modules Included Free
              </h4>
              <p className="text-[11px] sm:text-xs text-[#FAF7F0]/80 mt-0.5">
                Every student receives their complete set of physical books & practice modules upon enrollment.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#B08D57]">
            <span className="px-2.5 py-1 rounded bg-[#FAF7F0]/10 border border-[#FAF7F0]/20">100% Faculty Authored</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF7F0]/10 border border-[#FAF7F0]/20">Zero Photocopy Notes</span>
            <span className="px-2.5 py-1 rounded bg-[#FAF7F0]/10 border border-[#FAF7F0]/20">Included With Course</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudyMaterial;
