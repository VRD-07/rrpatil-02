import React, { useState } from 'react';
import {
  Clock,
  Users,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  GraduationCap,
  BookOpen,
  MessageCircle,
  Code,
} from 'lucide-react';
import Reveal from './Reveal';
import instructorImg from '../assets/Faculties/Akshay.jpeg';

export const ProgramsAndBatches = ({ onOpenDemo }) => {
  // Accordion open/close state per card
  const [openCards, setOpenCards] = useState({
    's1-c1': false,
    's1-c2': false,
    's2-c1': false,
    's2-c2': false,
    's3-c1': false,
  });

  const toggleCard = (cardId) => {
    setOpenCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const expandAll = () => {
    setOpenCards({
      's1-c1': true,
      's1-c2': true,
      's2-c1': true,
      's2-c2': true,
      's3-c1': true,
    });
  };

  const collapseAll = () => {
    setOpenCards({
      's1-c1': false,
      's1-c2': false,
      's2-c1': false,
      's2-c2': false,
      's3-c1': false,
    });
  };

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FAF7F0] border-y border-[#E4DCC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#B08D57]/20 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-[#B08D57]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                  THE FULL STUDENT JOURNEY · 6TH TO PLACEMENT
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F]">
                Programs & Batch Schedule
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-[#14110F]/75 max-w-md leading-relaxed font-normal">
                A continuous, structured academic ecosystem guiding students from early foundation to engineering career placement.
              </p>

              {/* Quick Accordion Toggle Controls */}
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider shrink-0">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-2.5 py-1 rounded bg-[#F0ECE1] hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] border border-[#E4DCC8] transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-2.5 py-1 rounded bg-[#F0ECE1] hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] border border-[#E4DCC8] transition-colors cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3-STAGE VERTICAL JOURNEY TIMELINE */}
        <div className="relative pl-6 sm:pl-12 lg:pl-16">
          
          {/* Vertical Timeline Rail Line */}
          <div className="absolute left-2 sm:left-4 lg:left-5 top-4 bottom-12 w-0.5 sm:w-1 bg-[#E4DCC8] rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-[#0F3D2E] via-[#0F3D2E] to-[#B08D57] rounded-full shadow-xs" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            
            {/* STAGE 1 — FOUNDATION YEARS (6TH - 10TH) */}
            <Reveal>
              <div className="relative">
              {/* Stage Marker */}
              <div className="absolute -left-6 sm:-left-12 lg:-left-16 top-0 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0F3D2E] text-[#FAF7F0] border-2 border-[#B08D57] flex items-center justify-center font-editorial font-bold text-sm sm:text-base shadow-sm shrink-0 z-10">
                  01
                </div>
              </div>

              <div className="pt-0.5 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0ECE1] border border-[#E4DCC8] text-[10px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>STAGE 1 · FOUNDATION YEARS (6TH – 10TH)</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F]">
                  Building Strong Core Concepts & Analytical Thinking
                </h3>
              </div>

              {/* Stage 1 Accordion Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Card 1: 6th-10th Regular Tuition */}
                <div className="bg-white rounded-xl border border-[#E4DCC8] shadow-xs hover:border-[#B08D57] transition-all overflow-hidden flex flex-col justify-between">
                  <div
                    onClick={() => toggleCard('s1-c1')}
                    className="p-5 sm:p-6 cursor-pointer select-none flex items-start justify-between gap-4 bg-white hover:bg-[#FAF7F0]/60 transition-colors"
                  >
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded bg-[#F0ECE1] text-[#0F3D2E] text-[9px] font-bold uppercase tracking-wider mb-2">
                        CLASS 6TH TO 10TH
                      </div>
                      <h4 className="font-editorial text-xl font-bold text-[#14110F] group-hover:text-[#0F3D2E]">
                        6th–10th Regular Tuition
                      </h4>
                      <p className="text-xs text-[#14110F]/70 mt-1 leading-relaxed">
                        Comprehensive NCERT & School Board Preparation for Foundation Excellence.
                      </p>
                    </div>
                    <div className={`p-1.5 rounded-full bg-[#FAF7F0] text-[#0F3D2E] border border-[#E4DCC8] shrink-0 mt-1 transition-transform duration-200 ${openCards['s1-c1'] ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {openCards['s1-c1'] && (
                    <div className="overflow-hidden border-t border-[#F0ECE1] bg-[#FAF7F0]/40">
                      <div className="p-5 sm:p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>NCERT Textbooks & School Board Syllabus</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>Daily Homework Assistance & Chapter Tests</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>Personalized Doubt Sessions & Progress Tracking</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('6th–10th Regular Tuition')}
                            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors cursor-pointer"
                          >
                            <span>Request Seat Booking</span>
                            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card 2: 8th/9th/10th Foundation Batch */}
                <div className="bg-white rounded-xl border border-[#E4DCC8] shadow-xs hover:border-[#B08D57] transition-all overflow-hidden flex flex-col justify-between">
                  <div
                    onClick={() => toggleCard('s1-c2')}
                    className="p-5 sm:p-6 cursor-pointer select-none flex items-start justify-between gap-4 bg-white hover:bg-[#FAF7F0]/60 transition-colors"
                  >
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded bg-[#B08D57]/20 text-[#0F3D2E] text-[9px] font-bold uppercase tracking-wider mb-2">
                        EARLY ADVANTAGE
                      </div>
                      <h4 className="font-editorial text-xl font-bold text-[#14110F]">
                        8th/9th/10th Foundation Batch
                      </h4>
                      <p className="text-xs text-[#14110F]/70 mt-1 leading-relaxed">
                        Competitive Foundation for NTSE, Olympiads & Early Entrance Advantage.
                      </p>
                    </div>
                    <div className={`p-1.5 rounded-full bg-[#FAF7F0] text-[#0F3D2E] border border-[#E4DCC8] shrink-0 mt-1 transition-transform duration-200 ${openCards['s1-c2'] ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {openCards['s1-c2'] && (
                    <div className="overflow-hidden border-t border-[#F0ECE1] bg-[#FAF7F0]/40">
                      <div className="p-5 sm:p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>Advanced Problem Sets for NTSE & Olympiads</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>Analytical Logic & Diagnostic Testing</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#0F3D2E] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                            <span>Early Headstart for 11th-12th JEE & NEET Concepts</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('8th/9th/10th Foundation Batch')}
                            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors cursor-pointer"
                          >
                            <span>Request Seat Booking</span>
                            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </Reveal>

          {/* STAGE 2 — BOARD & COMPETITIVE MASTERY (11TH - 12TH) */}
          <Reveal>
            <div className="relative">
              {/* Stage Marker */}
              <div className="absolute -left-6 sm:-left-12 lg:-left-16 top-0 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0F3D2E] text-[#FAF7F0] border-2 border-[#B08D57] flex items-center justify-center font-editorial font-bold text-sm sm:text-base shadow-sm shrink-0 z-10">
                  02
                </div>
              </div>

              <div className="pt-0.5 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0ECE1] border border-[#E4DCC8] text-[10px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>STAGE 2 · BOARD & COMPETITIVE MASTERY (11TH – 12TH)</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F]">
                  Dual-Teacher Parallel Learning & Entrance Ranks
                </h3>
              </div>

              {/* Stage 2 Accordion Cards */}
              <div className="space-y-5">
                
                {/* Accordion Card 1: 11th-12th Regular (Board) Batch */}
                <div className="bg-white rounded-xl border border-[#E4DCC8] shadow-xs hover:border-[#B08D57] transition-all overflow-hidden">
                  <div
                    onClick={() => toggleCard('s2-c1')}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:bg-[#FAF7F0]/60 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2.5 py-0.5 rounded">
                          HSC BOARD TRACK
                        </span>
                        <span className="text-[11px] text-[#14110F]/60 font-medium">
                          For SSGM & KJS College students
                        </span>
                      </div>
                      <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#14110F]">
                        11th–12th Regular (Board) Batch
                      </h4>
                      <p className="text-xs text-[#14110F]/70 mt-1">
                        Morning Batch · 6:15 AM – 11:00 AM · Structured around morning college schedules
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E] bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E4DCC8]">
                        <Clock className="w-4 h-4 text-[#B08D57]" />
                        <span>6:15 AM – 11:00 AM</span>
                      </div>
                      <div className={`p-1.5 rounded-full bg-[#FAF7F0] text-[#0F3D2E] border border-[#E4DCC8] transition-transform duration-200 ${openCards['s2-c1'] ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {openCards['s2-c1'] && (
                    <div className="overflow-hidden border-t border-[#F0ECE1] bg-[#FAF7F0]/40">
                      <div className="p-5 sm:p-6 space-y-4">
                        
                        {/* Timing Table */}
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              6:15 AM – 8:15 AM
                            </span>
                            <span className="text-xs font-semibold text-[#14110F]">
                              Biology (Regular + NEET)
                            </span>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              8:15 AM – 9:30 AM
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 1</span>
                                11th Chemistry
                              </div>
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 2 (PARALLEL)</span>
                                12th Maths / Physics
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              9:30 AM – 11:00 AM
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 1</span>
                                12th Chemistry
                              </div>
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 2 (PARALLEL)</span>
                                11th Maths / Physics
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Parallel Faculty Callout */}
                        <div className="p-3.5 rounded-lg bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold text-[#0F3D2E] flex items-start gap-2">
                          <Users className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <span>Two senior faculty teach in parallel every session — no single teacher stretched across every subject.</span>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('11th–12th Regular (Board) Batch')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors cursor-pointer"
                          >
                            <span>Request Seat Booking</span>
                            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion Card 2: 11th-12th Competitive Batch */}
                <div className="bg-white rounded-xl border border-[#E4DCC8] shadow-xs hover:border-[#B08D57] transition-all overflow-hidden">
                  <div
                    onClick={() => toggleCard('s2-c2')}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:bg-[#FAF7F0]/60 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FAF7F0] bg-[#0F3D2E] px-2.5 py-0.5 rounded">
                          JEE / NEET / CET COMPETITIVE
                        </span>
                        <span className="text-[11px] text-[#14110F]/60 font-medium">
                          For External & Sanjivani College students
                        </span>
                      </div>
                      <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#14110F]">
                        11th–12th Competitive (External JEE/NEET/CET) Batch
                      </h4>
                      <p className="text-xs text-[#14110F]/70 mt-1">
                        Afternoon Batch · 3:00 PM – 7:00 PM · Dedicated entrance coaching
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E] bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E4DCC8]">
                        <Clock className="w-4 h-4 text-[#B08D57]" />
                        <span>3:00 PM – 7:00 PM</span>
                      </div>
                      <div className={`p-1.5 rounded-full bg-[#FAF7F0] text-[#0F3D2E] border border-[#E4DCC8] transition-transform duration-200 ${openCards['s2-c2'] ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {openCards['s2-c2'] && (
                    <div className="overflow-hidden border-t border-[#F0ECE1] bg-[#FAF7F0]/40">
                      <div className="p-5 sm:p-6 space-y-4">
                        
                        {/* Timing Table */}
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              3:00 PM – 5:00 PM
                            </span>
                            <span className="text-xs font-semibold text-[#14110F]">
                              Competitive Maths — JEE (11th + 12th)
                            </span>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              5:00 PM – 6:00 PM
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 1</span>
                                12th Physics / Maths
                              </div>
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 2 (PARALLEL)</span>
                                11th Chemistry
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs font-bold text-[#0F3D2E] min-w-[130px]">
                              6:00 PM – 7:00 PM
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 1</span>
                                12th Chemistry
                              </div>
                              <div className="px-3 py-1.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-xs font-medium text-[#14110F]">
                                <span className="text-[9px] text-[#B08D57] font-extrabold block uppercase">FACULTY 2 (PARALLEL)</span>
                                11th Physics / Maths
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Free NEET Biology Callout */}
                        <div className="p-3.5 rounded-lg bg-[#0F3D2E]/10 border border-[#0F3D2E]/30 text-xs font-semibold text-[#0F3D2E] flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0F3D2E] shrink-0 mt-0.5" />
                          <span>External NEET students also get full Biology coverage through our morning batch — included, no extra fee.</span>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('11th–12th Competitive (External JEE/NEET/CET) Batch')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors cursor-pointer"
                          >
                            <span>Request Seat Booking</span>
                            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </Reveal>

          {/* STAGE 3 — COLLEGE & CAREER (AI-ML BOOTCAMP) */}
          <Reveal>
            <div className="relative">
              {/* Stage Marker */}
              <div className="absolute -left-6 sm:-left-12 lg:-left-16 top-0 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#B08D57] text-[#14110F] border-2 border-[#0F3D2E] flex items-center justify-center font-editorial font-bold text-sm sm:text-base shadow-sm shrink-0 z-10">
                  03
                </div>
              </div>

              <div className="pt-0.5 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#FAF7F0] text-[10px] font-bold uppercase tracking-wider mb-1">
                  <Code className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>STAGE 3 · COLLEGE & CAREER (NEW CHAPTER)</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F]">
                  AI-ML Bootcamp & Tech Placement Assistance
                </h3>
              </div>

              {/* Stage 3 Emerald Card */}
              <div className="bg-[#0F3D2E] rounded-2xl border-2 border-[#B08D57] p-6 sm:p-8 text-[#FAF7F0] shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#B08D57]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FAF7F0]/15">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#B08D57] text-[#14110F] text-[10px] font-extrabold uppercase tracking-wider">
                          NEW / LAUNCHING SOON
                        </span>
                        <span className="text-xs text-[#B08D57] font-semibold">
                          For Engineering & Tech Aspirants
                        </span>
                      </div>
                      <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                        AI-ML Bootcamp & Placement Assistance
                      </h4>
                      <p className="text-xs sm:text-sm text-[#FAF7F0]/80 mt-1 max-w-xl font-normal">
                        Flexible batch timing — contact us to join the next cohort.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenDemo('AI-ML Bootcamp')}
                      className="px-6 py-3 rounded-lg bg-[#B08D57] hover:bg-[#c4a169] text-[#14110F] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>Book Free Demo Class</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Featured Instructor Sub-Card */}
                  <div className="bg-[#FAF7F0] text-[#14110F] rounded-xl p-5 sm:p-6 border border-[#B08D57]/40 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                      
                      {/* Photo Container */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#F0ECE1] shrink-0 border-2 border-[#B08D57]/50 shadow-xs">
                        <img
                          src={instructorImg}
                          alt="AI-ML Program Lead Instructor"
                          width={112}
                          height={112}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-[#0F3D2E]/90 text-[#FAF7F0] text-[8px] font-bold text-center py-0.5 uppercase tracking-wider">
                          Faculty Lead
                        </div>
                      </div>

                      {/* Instructor Bio */}
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 justify-center sm:justify-start">
                          <h5 className="font-editorial text-lg font-bold text-[#14110F]">
                            Akshay R. Patil
                          </h5>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#0F3D2E] text-[#FAF7F0] text-[9px] font-bold uppercase tracking-wider self-center sm:self-auto">
                            AI/ML Program Lead
                          </span>
                        </div>

                        <p className="text-xs text-[#14110F]/80 leading-relaxed mb-4 font-normal">
                          M.Tech(AI/ML) [IISC Bangalore]
                          <br />Professional instructor well-known in field of AI/ML and have helped acquiring internship opportunities to more than 15 students from IIT-Bombay.
                        </p>

                        <a
                          href="https://wa.me/919226274885"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                          <span>Connect directly on WhatsApp →</span>
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Full Journey Closing Narrative Banner */}
                  <div className="pt-4 border-t border-[#FAF7F0]/15 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-[#FAF7F0]/90">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <span className="italic font-editorial text-sm text-[#B08D57]">
                        "From your first formula to your first job — we're with you the whole way."
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FAF7F0]/60 font-semibold">
                      R. R. Patil Academy Lifetime Mentorship
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsAndBatches;
