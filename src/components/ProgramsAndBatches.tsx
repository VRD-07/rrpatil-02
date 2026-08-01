import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ProgramsAndBatchesProps {
  onOpenDemo: (courseName?: string) => void;
}

export const ProgramsAndBatches: React.FC<ProgramsAndBatchesProps> = ({ onOpenDemo }) => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#F0ECE1] border-y border-[#E4DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#B08D57]/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                BATCH TIMINGS & SCHEDULE
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F]">
              Programs & Batch Schedule
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#14110F]/75 max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
            Transparent, concrete schedules designed around college timings and dual-teacher parallel learning.
          </p>
        </div>

        <div className="space-y-8">
          {/* TOP ROW: 6th-10th Regular & 8th-10th Foundation (2 Simple Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: 6th–10th Regular */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#F0ECE1] text-[#0F3D2E] text-[10px] font-bold uppercase tracking-wider mb-3">
                  CLASS 6TH TO 10TH
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#14110F] mb-2">
                  6th–10th Regular Tuition
                </h3>
                <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed mb-4">
                  Comprehensive NCERT & School Board Preparation for Foundation Excellence.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#F0ECE1]">
                  <div className="flex items-center gap-2 text-xs text-[#0F3D2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <span>NCERT Textbooks & School Board Syllabus</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0F3D2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <span>Daily Homework Assistance & Chapter Tests</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenDemo('6th–10th Regular Tuition')}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors"
                >
                  <span>Request Seat Booking</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: 8th/9th/10th Foundation Batch */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#B08D57]/20 text-[#0F3D2E] text-[10px] font-bold uppercase tracking-wider mb-3">
                  EARLY ADVANTAGE
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#14110F] mb-2">
                  8th/9th/10th Foundation Batch
                </h3>
                <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed mb-4">
                  Competitive Foundation for NTSE, Olympiads & Early Entrance Advantage.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#F0ECE1]">
                  <div className="flex items-center gap-2 text-xs text-[#0F3D2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <span>Advanced Problem Sets for NTSE & Olympiads</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0F3D2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <span>Analytical Logic & Diagnostic Testing</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenDemo('8th/9th/10th Foundation Batch')}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors"
                >
                  <span>Request Seat Booking</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* CARD 3: 11th–12th Regular (Board) Batch (MORNING BATCH TIMING TABLE) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#F0ECE1] gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2.5 py-1 rounded">
                  HSC BOARD TRACK
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F] mt-2">
                  11th–12th Regular (Board) Batch
                </h3>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E]">
                  <Clock className="w-4 h-4 text-[#B08D57]" />
                  <span>Morning Batch · 6:15 AM – 11:00 AM</span>
                </div>
                <span className="text-[11px] text-[#14110F]/60 font-medium">
                  For SSGM & KJS College students
                </span>
              </div>
            </div>

            {/* Timing Table (Mobile responsive flex stack) */}
            <div className="space-y-3 mb-6">
              {/* Row 1 */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  6:15 AM – 8:15 AM
                </span>
                <span className="text-xs font-semibold text-[#14110F]">
                  Biology (Regular + NEET)
                </span>
              </div>

              {/* Row 2 (Parallel Teaching Grid) */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  8:15 AM – 9:30 AM
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 1</span>
                    11th Chemistry
                  </div>
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 2 (PARALLEL)</span>
                    12th Maths / Physics
                  </div>
                </div>
              </div>

              {/* Row 3 (Parallel Teaching Grid) */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  9:30 AM – 11:00 AM
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 1</span>
                    12th Chemistry
                  </div>
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 2 (PARALLEL)</span>
                    11th Maths / Physics
                  </div>
                </div>
              </div>
            </div>

            {/* Subdued Callout */}
            <div className="p-3.5 rounded-lg bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold text-[#0F3D2E] flex items-start gap-2">
              <Users className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
              <span>Two senior faculty teach in parallel every session — no single teacher stretched across every subject.</span>
            </div>
          </motion.div>

          {/* CARD 4: 11th–12th Competitive Batch (AFTERNOON BATCH TIMING TABLE) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#F0ECE1] gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF7F0] bg-[#0F3D2E] px-2.5 py-1 rounded">
                  JEE / NEET / CET COMPETITIVE
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F] mt-2">
                  11th–12th Competitive (External JEE/NEET/CET) Batch
                </h3>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E]">
                  <Clock className="w-4 h-4 text-[#B08D57]" />
                  <span>Afternoon Batch · 3:00 PM – 7:00 PM</span>
                </div>
                <span className="text-[11px] text-[#14110F]/60 font-medium">
                  For External & Sanjivani College students
                </span>
              </div>
            </div>

            {/* Timing Table */}
            <div className="space-y-3 mb-6">
              {/* Row 1 */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  3:00 PM – 5:00 PM
                </span>
                <span className="text-xs font-semibold text-[#14110F]">
                  Competitive Maths — JEE (11th + 12th)
                </span>
              </div>

              {/* Row 2 (Parallel Teaching Grid) */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  5:00 PM – 6:00 PM
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 1</span>
                    12th Physics / Maths
                  </div>
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 2 (PARALLEL)</span>
                    11th Chemistry
                  </div>
                </div>
              </div>

              {/* Row 3 (Parallel Teaching Grid) */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                  6:00 PM – 7:00 PM
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 1</span>
                    12th Chemistry
                  </div>
                  <div className="px-3 py-1.5 rounded bg-white border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                    <span className="text-[10px] text-[#B08D57] font-bold block">FACULTY 2 (PARALLEL)</span>
                    11th Physics / Maths
                  </div>
                </div>
              </div>
            </div>

            {/* Distinct Callout */}
            <div className="p-3.5 rounded-lg bg-[#0F3D2E]/10 border border-[#0F3D2E]/30 text-xs font-semibold text-[#0F3D2E] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F3D2E] shrink-0 mt-0.5" />
              <span>External NEET students also get full Biology coverage through our morning batch — included, no extra fee.</span>
            </div>
          </motion.div>

          {/* CARD 5: AI-ML Bootcamp & Placement Assistance */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] border border-[#B08D57] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#B08D57] text-[#14110F] text-[10px] font-extrabold uppercase tracking-wider">
                  LAUNCHING SOON
                </span>
                <span className="text-xs text-[#B08D57] font-semibold">
                  For Engineering & Tech Aspirants
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold mb-2">
                AI-ML Bootcamp & Placement Assistance
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F0]/80 max-w-xl font-normal">
                Flexible batch timing — contact us to join the next cohort.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenDemo('AI-ML Bootcamp')}
              className="px-6 py-3.5 rounded-lg bg-[#B08D57] hover:bg-[#c4a169] text-[#14110F] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-xs"
            >
              <span>Book Free Demo Class</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndBatches;
