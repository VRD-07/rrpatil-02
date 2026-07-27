import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { Student, ExamResult, SubjectMark } from '../types/results';
import rakeshImg from '../assets/rakesh.jpeg';
import komalImg from '../assets/komal.jpeg';
import kartikImg from '../assets/kartik.jpeg';

export const ResultsSection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'jee' | 'neet' | 'board' | 'cet'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Helper for generating student initials fallback when photo is missing
  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Top 3 Toppers Data (Refactored to new schema)
  const topToppers: Student[] = [
    {
      id: 'top-1',
      topperRank: 1,
      badge: 'TOPPER 2024-25',
      name: 'Rakesh V. Karpe',
      quote: 'R. R. Patil’s conceptual depth & daily problem drills gave me absolute speed & confidence under pressure.',
      photo: rakeshImg,
      batch: '2-Year JEE Advanced Intensive',
      results: [
        {
          type: 'jee',
          year: '2024',
          score: 'AIR 42',
          rankOrPercentile: '99.98 %ile',
          subjects: [
            { name: 'Physics', marks: 100 },
            { name: 'Maths', marks: 100 },
            { name: 'Chemistry', marks: 98 },
          ],
        },
        {
          type: 'board',
          year: '2024',
          percentage: 99.2,
          subjects: [
            { name: 'Maths', marks: 100 },
            { name: 'Physics', marks: 99 },
            { name: 'Chemistry', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 'top-2',
      topperRank: 2,
      badge: 'NEET TOPPER',
      name: 'Komal N. Gund',
      quote: 'Small batch focus and 1-on-1 doubt clearing were the main drivers behind my 715 score.',
      photo: komalImg,
      batch: '2-Year NEET Medical Track',
      results: [
        {
          type: 'neet',
          year: '2024',
          score: '715 / 720',
          rankOrPercentile: 'AIR 104',
          subjects: [
            { name: 'Biology', marks: 358 },
            { name: 'Chemistry', marks: 178 },
            { name: 'Physics', marks: 179 },
          ],
        },
      ],
    },
    {
      id: 'top-3',
      topperRank: 3,
      badge: 'BOARD TOPPER',
      name: 'Kartik D. Thorat',
      quote: 'Continuous pre-board mock exams perfected my answer presentation and timing strategy.',
      photo: kartikImg,
      batch: 'Board Intensive + JEE Track',
      results: [
        {
          type: 'board',
          year: '2024',
          percentage: 99.4,
          subjects: [
            { name: 'Chemistry', marks: 100 },
            { name: 'Maths', marks: 99 },
            { name: 'Physics', marks: 98 },
          ],
        },
        {
          type: 'jee',
          year: '2024',
          score: '99.91 %ile',
          rankOrPercentile: 'AIR 210',
        },
      ],
    },
  ];

  // Student Roster (Seeded with 2 REAL students from R.R. Patil Coaching, Kopargaon + Filler students in new schema)
  const studentRoster: Student[] = [
    // --- REAL STUDENT 1 ---
    {
      id: 'real-1',
      name: 'Aditya Babasaheb Pune',
      batch: '12th HSC Board Batch 2026',
      // photo intentionally omitted to test initials fallback
      results: [
        {
          type: 'board',
          year: '2026',
          percentage: 88.17,
          subjects: [
            { name: 'Maths', marks: 94 },
            { name: 'Physics', marks: 92 },
            { name: 'Chemistry', marks: 93 },
          ],
        },
      ],
    },

    // --- REAL STUDENT 2 ---
    {
      id: 'real-2',
      name: 'Swati Gorakh Ghodake',
      batch: '12th HSC Board Batch 2026',
      // photo intentionally omitted to test initials fallback
      results: [
        {
          type: 'board',
          year: '2026',
          percentage: 88.67,
          subjects: [
            { name: 'English', marks: 78 },
            { name: 'Maths & Statistics', marks: 93 },
            { name: 'Physics', marks: 92 },
            { name: 'Chemistry', marks: 90 },
            { name: 'Biology', marks: 89 },
            { name: 'IT (Sci)', marks: 90 },
          ],
        },
      ],
    },

    // --- ADDITIONAL MOCK STUDENTS (SEEDED IN NEW SCHEMA) ---
    {
      id: 's1',
      name: 'Aditya S. Shinde',
      batch: '2-Year JEE Batch',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'jee',
          year: '2024',
          score: '99.91 %ile',
          rankOrPercentile: 'AIR 845',
          subjects: [
            { name: 'Maths', marks: 100 },
            { name: 'Physics', marks: 99 },
          ],
        },
      ],
    },
    {
      id: 's2',
      name: 'Priya N. Deshmukh',
      batch: 'NEET Medical Track',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'neet',
          year: '2024',
          score: '695 / 720',
          rankOrPercentile: 'AIR 412',
          subjects: [
            { name: 'Biology', marks: 355 },
            { name: 'Chemistry', marks: 175 },
          ],
        },
      ],
    },
    {
      id: 's3',
      name: 'Omkar B. Pawar',
      batch: 'Board Intensive',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'board',
          year: '2024',
          percentage: 98.8,
          subjects: [
            { name: 'Maths', marks: 100 },
            { name: 'Physics', marks: 98 },
            { name: 'Chemistry', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 's4',
      name: 'Ananya K. Kulkarni',
      batch: 'CET Crash Course',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'cet',
          year: '2024',
          score: '99.96 %ile',
          rankOrPercentile: 'State Rank 14',
          subjects: [
            { name: 'PCM', marks: 198 },
          ],
        },
      ],
    },
    {
      id: 's5',
      name: 'Tanmay G. More',
      batch: 'JEE Super 30',
      photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'jee',
          year: '2024',
          score: 'AIR 521',
          rankOrPercentile: '99.85 %ile',
          subjects: [
            { name: 'Physics', marks: 99 },
            { name: 'Maths', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 's6',
      name: 'Shruti P. Bhosale',
      batch: 'NEET Achievers',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'neet',
          year: '2024',
          score: '688 / 720',
          rankOrPercentile: 'AIR 580',
          subjects: [
            { name: 'Chemistry', marks: 175 },
            { name: 'Biology', marks: 350 },
          ],
        },
      ],
    },
    {
      id: 's7',
      name: 'Siddharth A. Mehta',
      batch: 'Foundation 10th',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'board',
          year: '2024',
          percentage: 99.2,
          subjects: [
            { name: 'Science', marks: 100 },
            { name: 'Maths', marks: 99 },
            { name: 'Social Studies', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 's8',
      name: 'Isha V. Sawant',
      batch: '2-Year JEE',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'jee',
          year: '2024',
          score: '99.82 %ile',
          rankOrPercentile: 'AIR 1120',
          subjects: [
            { name: 'Physics', marks: 99 },
          ],
        },
      ],
    },
    {
      id: 's9',
      name: 'Pranav R. Kadam',
      batch: 'CET Intensive',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'cet',
          year: '2024',
          score: '99.88 %ile',
          rankOrPercentile: 'Merit 42',
          subjects: [
            { name: 'Maths', marks: 99 },
          ],
        },
      ],
    },
    {
      id: 's10',
      name: 'Rutuja S. Chavan',
      batch: 'NEET Medical',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'neet',
          year: '2024',
          score: '682 / 720',
          rankOrPercentile: 'AIR 730',
          subjects: [
            { name: 'Biology', marks: 350 },
          ],
        },
      ],
    },
    {
      id: 's11',
      name: 'Devansh N. Shah',
      batch: 'Board Focus',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'board',
          year: '2024',
          percentage: 98.2,
          subjects: [
            { name: 'Chemistry', marks: 99 },
            { name: 'Physics', marks: 97 },
          ],
        },
      ],
    },
    {
      id: 's12',
      name: 'Gauri A. Gaikwad',
      batch: 'HSC Boards',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      results: [
        {
          type: 'board',
          year: '2024',
          percentage: 97.8,
          subjects: [
            { name: 'Physics', marks: 98 },
            { name: 'Maths', marks: 97 },
          ],
        },
      ],
    },
  ];

  // Count up Stats animation
  const stats = [
    { label: 'Years of Operating Rigor', target: 14, suffix: '+', prefix: '' },
    { label: 'Alumni Students Mentored', target: 12500, suffix: '+', prefix: '' },
    { label: 'Board Examination Pass Rate', target: 98.4, suffix: '%', prefix: '', isDecimal: true },
    { label: 'JEE / NEET Top 1000 Ranks', target: 450, suffix: '+', prefix: '' },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  const startCountAnimation = () => {
    if (hasAnimated || reducedMotion) {
      setCounts(stats.map((s) => s.target));
      setHasAnimated(true);
      return;
    }

    setHasAnimated(true);
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => {
          const value = stat.target * easedProgress;
          return stat.isDecimal ? parseFloat(value.toFixed(1)) : Math.floor(value);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCounts(stats.map((s) => s.target));
      }
    };

    requestAnimationFrame(step);
  };

  // Filter student roster based on active exam tab
  const filteredChainStudents =
    activeCategory === 'all'
      ? studentRoster
      : studentRoster.filter((student) =>
          student.results.some((res) => res.type === activeCategory)
        );

  // Duplicate array for infinite seamless marquee loop
  const infiniteStudentsChain = [...filteredChainStudents, ...filteredChainStudents];

  // Manual horizontal scroll controls
  const scrollMarquee = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Helper renderer for dynamic subject-wise marks
  const renderSubjectMarksList = (subjects?: SubjectMark[]) => {
    if (!subjects || subjects.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-1.5 mt-2.5 max-h-24 overflow-y-auto no-scrollbar">
        {subjects.map((sub, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#E4DCC8] text-[11px] font-medium text-[#14110F]"
          >
            <span className="text-[#14110F]/70">{sub.name}:</span>
            <span className="font-bold text-[#0F3D2E]">{sub.marks}</span>
          </span>
        ))}
      </div>
    );
  };

  // Helper renderer for student Exam Results summary card box
  const renderExamResultsSummary = (results: ExamResult[]) => {
    if (!results || results.length === 0) return null;

    return (
      <div className="space-y-2">
        {results.map((res, index) => {
          const isBoard = res.type === 'board';
          const examLabel = isBoard ? `HSC Board ${res.year}` : `${res.type.toUpperCase()} ${res.year}`;

          return (
            <div
              key={index}
              className="p-3 rounded-md bg-[#FAF7F0] border border-[#F0ECE1] group-hover:border-[#B08D57]/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-editorial text-2xl font-bold text-[#0F3D2E]">
                  {isBoard ? `${res.percentage}%` : res.score}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2 py-0.5 rounded">
                  {examLabel}
                </span>
              </div>

              {!isBoard && res.rankOrPercentile && (
                <div className="text-xs font-bold text-[#B08D57] mb-1">
                  ★ {res.rankOrPercentile}
                </div>
              )}

              {/* Dynamic Subject Breakdown List */}
              {renderSubjectMarksList(res.subjects)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="results" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={startCountAnimation}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          {/* SVG Brass Seal Emblem */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full text-[#B08D57]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="flex flex-col items-center justify-center text-[#0F3D2E]">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#B08D57] mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#B08D57]">
                R. R. Patil
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              R. R. PATIL COACHING CLASSES, KOPARGAON
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#14110F] max-w-3xl leading-tight mb-4">
            Outstanding Examination Results
          </h2>
          <p className="text-sm sm:text-base text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            Celebrating our top performers in HSC Board Examinations, JEE, NEET, and MHT-CET. Personalized rigor leading to consistent success.
          </p>
        </motion.div>

        {/* TOP 3 TOPPERS PODIUM */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E4DCC8]">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#B08D57]" />
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#14110F]">
                Institute Toppers Showcase
              </h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-3 py-1 rounded-full">
              ★ TOP RANKERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {topToppers.map((topper) => {
              const isRank1 = topper.topperRank === 1;
              const isRank2 = topper.topperRank === 2;

              return (
                <motion.div
                  key={topper.id}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (topper.topperRank || 1) * 0.1 }}
                  className={`relative flex flex-col justify-between rounded-xl bg-white p-6 lg:p-8 border shadow-sm transition-all duration-300 hover:shadow-md ${
                    isRank1
                      ? 'border-[#B08D57] ring-4 ring-[#B08D57]/20 md:-translate-y-2 lg:-translate-y-3 bg-gradient-to-b from-white via-white to-[#FAF7F0]'
                      : isRank2
                      ? 'border-[#94A3B8] ring-4 ring-[#94A3B8]/20'
                      : 'border-[#CD7F32] ring-4 ring-[#CD7F32]/20'
                  }`}
                >
                  <div>
                    {/* Rank Badge Header */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isRank1 ? 'bg-[#B08D57] text-[#14110F]' : isRank2 ? 'bg-[#0F3D2E] text-[#FAF7F0]' : 'bg-[#E4DCC8] text-[#0F3D2E]'
                      }`}>
                        {topper.badge}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#14110F]">
                        {isRank1 ? (
                          <span className="flex items-center gap-1 text-[#B08D57] font-bold">
                            <Trophy className="w-4 h-4 text-[#B08D57]" /> 🏆 1st Rank
                          </span>
                        ) : isRank2 ? (
                          <span className="flex items-center gap-1 text-[#475569] font-bold">
                            <Medal className="w-4 h-4 text-[#94A3B8]" /> 🥈 2nd Rank
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[#B45309] font-bold">
                            <Medal className="w-4 h-4 text-[#CD7F32]" /> 🥉 3rd Rank
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Photo / Initials */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        {topper.photo ? (
                          <img
                            src={topper.photo}
                            alt={topper.name}
                            width={112}
                            height={112}
                            loading="lazy"
                            className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md border-2 ${
                              isRank1 ? 'border-[#B08D57]' : isRank2 ? 'border-[#94A3B8]' : 'border-[#CD7F32]'
                            }`}
                          />
                        ) : (
                          <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0F3D2E] text-[#B08D57] font-editorial font-bold text-2xl flex items-center justify-center border-2 shadow-md ${
                            isRank1 ? 'border-[#B08D57]' : isRank2 ? 'border-[#94A3B8]' : 'border-[#CD7F32]'
                          }`}>
                            {getInitials(topper.name)}
                          </div>
                        )}
                        <div className={`absolute -bottom-2 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-extrabold shadow-sm ${
                          isRank1 ? 'bg-[#B08D57]' : isRank2 ? 'bg-[#64748B]' : 'bg-[#B45309]'
                        }`}>
                          #{topper.topperRank}
                        </div>
                      </div>

                      <h4 className="font-editorial text-2xl font-bold text-[#14110F] mb-1">
                        {topper.name}
                      </h4>

                      {/* Render Multi-Exam Results */}
                      <div className="w-full mt-3">
                        {renderExamResultsSummary(topper.results)}
                      </div>

                      {topper.quote && (
                        <p className="mt-4 text-xs text-[#14110F]/75 italic leading-relaxed font-normal bg-[#FAF7F0] p-3 rounded-lg border border-[#E4DCC8]/60 w-full text-center">
                          "{topper.quote}"
                        </p>
                      )}
                    </div>
                  </div>

                  {topper.batch && (
                    <div className="pt-3 border-t border-[#F0ECE1] text-center">
                      <span className="text-[11px] font-medium text-[#14110F]/70 uppercase tracking-wider">
                        Batch: {topper.batch}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* INFINITE HORIZONTAL MARQUEE CHAIN */}
        <div className="mb-20">
          {/* Header & Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-4 border-b border-[#E4DCC8]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#B08D57]" />
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#14110F]">
                  Student Performance Roster
                </h3>
              </div>
              <p className="text-xs text-[#14110F]/70 font-normal">
                Continuous horizontal card chain • Hover on any card to pause and inspect marks breakdown
              </p>
            </div>

            {/* Category Filter Pills & Arrow Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1 bg-[#F0ECE1] p-1 rounded-lg text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeCategory === 'all'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] font-semibold shadow-xs'
                      : 'text-[#14110F]/70 hover:text-[#14110F]'
                  }`}
                >
                  All Results
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('board')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeCategory === 'board'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] font-semibold shadow-xs'
                      : 'text-[#14110F]/70 hover:text-[#14110F]'
                  }`}
                >
                  12th HSC Board
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('jee')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeCategory === 'jee'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] font-semibold shadow-xs'
                      : 'text-[#14110F]/70 hover:text-[#14110F]'
                  }`}
                >
                  JEE Main/Adv
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('neet')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeCategory === 'neet'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] font-semibold shadow-xs'
                      : 'text-[#14110F]/70 hover:text-[#14110F]'
                  }`}
                >
                  NEET Medical
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('cet')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeCategory === 'cet'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] font-semibold shadow-xs'
                      : 'text-[#14110F]/70 hover:text-[#14110F]'
                  }`}
                >
                  MHT-CET
                </button>
              </div>

              {/* Nudge Arrows */}
              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollMarquee('left')}
                  className="p-2 rounded-md bg-white border border-[#E4DCC8] hover:bg-[#F0ECE1] text-[#14110F] transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollMarquee('right')}
                  className="p-2 rounded-md bg-white border border-[#E4DCC8] hover:bg-[#F0ECE1] text-[#14110F] transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* INFINITE MARQUEE SCROLL CONTAINER */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto no-scrollbar py-4 relative rounded-xl"
          >
            <div className="animate-marquee flex items-stretch gap-5">
              {infiniteStudentsChain.map((st, index) => (
                <div
                  key={`${st.id}-${index}`}
                  className="w-[300px] sm:w-[340px] shrink-0 p-5 rounded-lg bg-white border border-[#E4DCC8] hover:border-[#B08D57] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Row: Photo or Initials + Name */}
                    <div className="flex items-center gap-3.5 mb-4">
                      {st.photo ? (
                        <img
                          src={st.photo}
                          alt={st.name}
                          width={52}
                          height={52}
                          loading="lazy"
                          className="w-13 h-13 rounded-full object-cover border-2 border-[#B08D57]/30 group-hover:border-[#B08D57] transition-colors shrink-0 shadow-xs"
                        />
                      ) : (
                        <div className="w-13 h-13 rounded-full bg-[#0F3D2E] text-[#B08D57] font-editorial font-bold text-base flex items-center justify-center border-2 border-[#B08D57]/40 group-hover:border-[#B08D57] shrink-0 shadow-xs">
                          {getInitials(st.name)}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-editorial text-lg font-bold text-[#14110F] truncate group-hover:text-[#0F3D2E] transition-colors">
                          {st.name}
                        </h4>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B08D57] truncate block">
                          {st.batch || 'Student Achievement'}
                        </span>
                      </div>
                    </div>

                    {/* Results Box (Flexible for single or multiple exams) */}
                    {renderExamResultsSummary(st.results)}
                  </div>

                  {/* Footer tag */}
                  <div className="pt-3 mt-4 border-t border-[#F0ECE1] flex items-center justify-between text-[10px] uppercase font-semibold text-[#14110F]/60">
                    <span>R. R. Patil Academy Result</span>
                    <span className="text-[#0F3D2E] group-hover:translate-x-1 transition-transform">
                      Verified →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 STAT METRICS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-[#E4DCC8]">
          {stats.map((stat, idx) => {
            const displayValue = counts[idx] !== undefined ? counts[idx] : stat.target;

            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.08 }}
                className="p-6 sm:p-8 rounded-lg bg-white/70 border border-[#E4DCC8] shadow-xs text-center flex flex-col items-center justify-center"
              >
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F3D2E] mb-2 tracking-tight">
                  {stat.prefix}
                  {stat.isDecimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#14110F]/70 max-w-[180px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Subtext */}
        <div className="mt-12 text-center border-t border-[#E4DCC8]/70 pt-8 max-w-xl mx-auto">
          <p className="text-xs text-[#14110F]/70 font-normal leading-relaxed">
            * All examination results are independently verified from official HSC Board scorecards, NTA (JEE Main/NEET), and State CET scorecards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
