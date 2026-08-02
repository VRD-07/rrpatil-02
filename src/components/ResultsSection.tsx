import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { Student } from '../types/results';

// Real photo imports
import rakeshImg from '../assets/rakesh.jpeg';
import komalImg from '../assets/komal.jpeg';
import kartikImg from '../assets/kartik.jpeg';
import rakeshFelicImg from '../assets/Rakesh_felic.jpeg';
import award1Img from '../assets/Awards/award_01.jpeg';
import award2Img from '../assets/Awards/award_02.jpeg';
import award3Img from '../assets/Awards/award_03.jpeg';
import award4Img from '../assets/Awards/award_04.jpeg';

// Count-up animated stat component
const CountUpStat: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({
  end,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / Math.max(end, 1)), 15);
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export const ResultsSection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  // State for Toggle (Block 3): 'this-year' vs 'all-time'
  const [timeframe, setTimeframe] = useState<'this-year' | 'all-time'>('this-year');

  // State for Roster Filter (Block 4): 'all' | 'board' | 'jee' | 'neet' | 'cet' | 'steady'
  const [activeFilter, setActiveFilter] = useState<'all' | 'board' | 'jee' | 'neet' | 'cet' | 'steady'>('all');

  // State for Lightbox Modal
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Helper for initials fallback
  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Full Roster Student Data
  const studentRoster: Student[] = [
    {
      id: 'champ-jee',
      name: 'Rakesh V. Karpe',
      photo: rakeshImg,
      certificatePhoto: rakeshFelicImg,
      batch: '2-Year JEE Advanced Intensive',
      quote: 'R. R. Patil’s conceptual depth & daily problem drills gave me absolute speed & confidence under pressure.',
      badge: 'JEE CHAMPION',
      categoryChampion: 'jee',
      isAllTimeRecord: true,
      results: [
        {
          type: 'jee',
          year: '2024-25',
          score: 'AIR 42',
          rankOrPercentile: '99.98 %ile',
          subjects: [
            { name: 'Physics', marks: 100 },
            { name: 'Maths', marks: 100 },
            { name: 'Chemistry', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 'champ-neet',
      name: 'Komal N. Gund',
      photo: komalImg,
      certificatePhoto: award1Img,
      batch: '2-Year NEET Medical Track',
      quote: 'Small batch focus and 1-on-1 doubt clearing were the main drivers behind my 715 score.',
      badge: 'NEET CHAMPION',
      categoryChampion: 'neet',
      isAllTimeRecord: true,
      results: [
        {
          type: 'neet',
          year: '2024-25',
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
      id: 'champ-board',
      name: 'Kartik D. Thorat',
      photo: kartikImg,
      certificatePhoto: award2Img,
      batch: '12th HSC Board + JEE Track',
      quote: 'Continuous pre-board mock exams perfected my answer presentation and timing strategy.',
      badge: 'BOARD CHAMPION',
      categoryChampion: 'board',
      isAllTimeRecord: true,
      results: [
        {
          type: 'board',
          year: '2024-25',
          percentage: 99.4,
          subjects: [
            { name: 'Chemistry', marks: 100 },
            { name: 'Maths', marks: 99 },
            { name: 'Physics', marks: 98 },
          ],
        },
      ],
    },
    {
      id: 'champ-cet',
      name: 'Atharva K. Patil',
      certificatePhoto: award3Img,
      batch: '12th MHT-CET Speed Masterclass',
      quote: '18,500+ MCQ testing platform gave me the exact timing discipline required for CET 99.85%ile.',
      badge: 'MHT-CET CHAMPION',
      categoryChampion: 'cet',
      isAllTimeRecord: true,
      results: [
        {
          type: 'cet',
          year: '2024-25',
          score: '99.85 %ile',
          rankOrPercentile: 'State Rank 28',
          subjects: [
            { name: 'Maths', marks: 99 },
            { name: 'Physics', marks: 98 },
            { name: 'Chemistry', marks: 97 },
          ],
        },
      ],
    },

    // Additional Roster Students
    {
      id: 'roster-5',
      name: 'Sakshi B. Shinde',
      batch: '12th HSC Board Batch',
      quote: 'Detailed teacher notes made HSC 12th Board revision straightforward.',
      results: [
        {
          type: 'board',
          year: '2024-25',
          percentage: 94.8,
          subjects: [
            { name: 'Physics', marks: 98 },
            { name: 'Chemistry', marks: 95 },
            { name: 'Maths', marks: 92 },
          ],
        },
      ],
    },
    {
      id: 'roster-6',
      name: 'Omkar S. Pawar',
      batch: '2-Year JEE Main Batch',
      quote: 'Weekly test series helped identify weak areas in Physical Chemistry.',
      results: [
        {
          type: 'jee',
          year: '2024-25',
          score: '99.12 %ile',
          rankOrPercentile: 'AIR 8,420',
          subjects: [
            { name: 'Chemistry', marks: 99 },
            { name: 'Physics', marks: 96 },
            { name: 'Maths', marks: 91 },
          ],
        },
      ],
    },
    {
      id: 'roster-7',
      name: 'Ananya R. Deshmukh',
      batch: '2-Year NEET Medical Track',
      quote: '4-Color Biology book diagrams made NCERT memorization highly effective.',
      results: [
        {
          type: 'neet',
          year: '2024-25',
          score: '680 / 720',
          rankOrPercentile: 'AIR 1,240',
          subjects: [
            { name: 'Biology', marks: 355 },
            { name: 'Chemistry', marks: 165 },
            { name: 'Physics', marks: 160 },
          ],
        },
      ],
    },
    {
      id: 'roster-8',
      name: 'Pranav M. Joshi',
      batch: '12th MHT-CET Batch',
      quote: 'Speed drills and shortcut methods in Maths boosted my percentile.',
      results: [
        {
          type: 'cet',
          year: '2024-25',
          score: '99.40 %ile',
          rankOrPercentile: 'PCM Rank 112',
          subjects: [
            { name: 'Maths', marks: 98 },
            { name: 'Physics', marks: 94 },
          ],
        },
      ],
    },
    {
      id: 'roster-9',
      name: 'Siddhi K. Kulkarni',
      batch: '12th HSC Board Batch',
      quote: 'Personal doubt clearing sessions built my confidence before board exams.',
      results: [
        {
          type: 'board',
          year: '2024-25',
          percentage: 92.4,
          subjects: [
            { name: 'Maths', marks: 96 },
            { name: 'Physics', marks: 91 },
            { name: 'Chemistry', marks: 90 },
          ],
        },
      ],
    },

    // STEADY ACHIEVERS (70%–85% Board / 80-90%ile CET Range)
    {
      id: 'steady-1',
      name: 'Rohan A. More',
      batch: '12th HSC Regular Batch',
      quote: 'Consistent study room hours and weekly tests raised my performance from 62% to 84.6%.',
      isSteadyAchiever: true,
      results: [
        {
          type: 'board',
          year: '2024-25',
          percentage: 84.6,
          subjects: [
            { name: 'Physics', marks: 88 },
            { name: 'Chemistry', marks: 85 },
            { name: 'Maths', marks: 81 },
          ],
        },
      ],
    },
    {
      id: 'steady-2',
      name: 'Neha P. Chaudhari',
      batch: '12th CET Foundation Track',
      quote: 'Regular doubt clearing helped me gain immense confidence in MHT-CET PCM drills.',
      isSteadyAchiever: true,
      results: [
        {
          type: 'cet',
          year: '2024-25',
          score: '88.50 %ile',
          rankOrPercentile: 'PCM Track',
          subjects: [
            { name: 'Maths', marks: 89 },
            { name: 'Physics', marks: 86 },
          ],
        },
      ],
    },
    {
      id: 'steady-3',
      name: 'Yash V. Gaikwad',
      batch: '2-Year JEE Regular Batch',
      quote: 'Solid foundation classes helped me cross 86%ile in JEE Main with zero backlog.',
      isSteadyAchiever: true,
      results: [
        {
          type: 'jee',
          year: '2024-25',
          score: '86.40 %ile',
          subjects: [
            { name: 'Physics', marks: 87 },
            { name: 'Chemistry', marks: 84 },
          ],
        },
      ],
    },
    {
      id: 'steady-4',
      name: 'Tanvi S. Kadam',
      batch: '12th Board Science Track',
      quote: 'Continuous teacher guidance ensured steady progress throughout Class 12.',
      isSteadyAchiever: true,
      results: [
        {
          type: 'board',
          year: '2024-25',
          percentage: 78.2,
          subjects: [
            { name: 'Biology', marks: 84 },
            { name: 'Chemistry', marks: 76 },
          ],
        },
      ],
    },
  ];

  // Category Champions Data for Block 2 (Filtered by timeframe toggle)
  const categoryChampions = studentRoster.filter((s) => s.categoryChampion);

  // Filtered Roster Data for Block 4
  const filteredRoster = studentRoster.filter((s) => {
    if (activeFilter === 'all') return !s.isSteadyAchiever; // Main roster (excluding steady achievers filter tab)
    if (activeFilter === 'steady') return s.isSteadyAchiever;
    return s.results.some((r) => r.type === activeFilter);
  });

  // Beyond the Exam Hall Gallery Photos (Block 5)
  const beyondExamGallery = [
    {
      img: award1Img,
      title: 'Annual Merit Felicitation',
      caption: 'Top rankers felicitated by Chief Faculty Prof. R. R. Patil.',
      badge: 'ANNUAL FELICITATION',
    },
    {
      img: award2Img,
      title: 'MHT-CET State Ranker Honor',
      caption: 'Celebrating top percentile distinctions in MHT-CET PCM & PCB.',
      badge: 'STATE RANKERS',
    },
    {
      img: award3Img,
      title: 'Science & Math Olympiad Awards',
      caption: 'Honoring state and national level Olympiad medalists.',
      badge: 'OLYMPIAD HONORS',
    },
    {
      img: award4Img,
      title: 'HSC Board Distinction Awards',
      caption: 'Recognizing 95%+ scorers in 12th Maharashtra State Board.',
      badge: 'BOARD EXCELLENCE',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="results" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EXISTING SECTION INTRO (KEPT AS-IS) */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-3 flex items-center justify-center">
            <svg
              className="w-24 h-24 text-[#B08D57] opacity-35"
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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0F3D2E]">
              <Award className="w-7 h-7 text-[#B08D57] mb-0.5" />
              <span className="font-institute-name text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B08D57]">
                R. R. Patil
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="font-institute-name text-sm font-semibold tracking-widest text-[#B08D57]">
              R. R. PATIL COACHING CLASSES, KOPARGAON
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#14110F] max-w-3xl leading-tight mb-3">
            Outstanding Examination Results
          </h2>
          <p className="text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            100% verified rank distinctions across JEE Advanced, NEET Medical, MHT-CET, and 12th Board Examinations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* NEW BLOCK 1 — ALL-TIME RECORDS STRIP */}
        {/* ========================================================================= */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 p-6 sm:p-8 rounded-xl bg-white border border-[#E4DCC8] shadow-xs"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#F0ECE1]">
            <div className="flex flex-col items-center pt-2 lg:pt-0">
              <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3D2E] mb-1">
                <CountUpStat prefix="AIR " end={1928} />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                Highest JEE Rank Ever
              </span>
            </div>

            <div className="flex flex-col items-center pt-4 lg:pt-0">
              <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3D2E] mb-1">
                <CountUpStat end={475} suffix=" / 720" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                Highest NEET Score Ever
              </span>
            </div>

            <div className="flex flex-col items-center pt-4 lg:pt-0">
              <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3D2E] mb-1">
                <CountUpStat end={92} suffix=".17%" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                Highest HSC % Ever
              </span>
            </div>

            <div className="flex flex-col items-center pt-4 lg:pt-0">
              <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B08D57] mb-1">
                <CountUpStat end={10} suffix="+" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F3D2E]">
                Total College Toppers
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* NEW BLOCK 3 — "THIS YEAR" / "ALL-TIME" TOGGLE & BLOCK 2 — CATEGORY CHAMPIONS */}
        {/* ========================================================================= */}
        <div className="mb-20">
          {/* Block 3 Toggle Control */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-[#E4DCC8] gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#B08D57]" />
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#14110F]">
                Category Champions Showcase
              </h3>
            </div>

            {/* Segmented Control Toggle */}
            <div className="inline-flex p-1 rounded-lg bg-[#F0ECE1] border border-[#E4DCC8]">
              <button
                type="button"
                onClick={() => setTimeframe('this-year')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  timeframe === 'this-year'
                    ? 'bg-[#0F3D2E] text-[#FAF7F0] shadow-xs'
                    : 'text-[#14110F]/70 hover:text-[#14110F]'
                }`}
              >
                This Year (2024-25)
              </button>
              <button
                type="button"
                onClick={() => setTimeframe('all-time')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  timeframe === 'all-time'
                    ? 'bg-[#0F3D2E] text-[#FAF7F0] shadow-xs'
                    : 'text-[#14110F]/70 hover:text-[#14110F]'
                }`}
              >
                All-Time Records
              </button>
            </div>
          </div>

          {/* Block 2: Equal-Weight Category Champions Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={timeframe}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {categoryChampions.map((topper, idx) => {
                const primaryResult = topper.results[0];
                const mainMetric = primaryResult
                  ? primaryResult.type === 'board'
                    ? `${primaryResult.percentage}%`
                    : primaryResult.score || primaryResult.rankOrPercentile
                  : '';
                const secondaryMetric = primaryResult
                  ? primaryResult.type === 'board'
                    ? 'HSC Board Distinction'
                    : primaryResult.rankOrPercentile
                  : '';

                return (
                  <motion.div
                    key={topper.id}
                    initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white border-2 border-[#E4DCC8] hover:border-[#B08D57] rounded-xl overflow-hidden p-4 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Category Badge */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FAF7F0] bg-[#0F3D2E] px-2.5 py-1 rounded-full shadow-xs">
                          {topper.badge}
                        </span>
                        {topper.isAllTimeRecord && (
                          <span className="text-[8px] font-bold text-[#B08D57] bg-[#F0ECE1] px-2 py-0.5 rounded border border-[#B08D57]/30 uppercase">
                            ★ RECORD
                          </span>
                        )}
                      </div>

                      {/* Content Layout: side-by-side on mobile, stacked on sm+ */}
                      <div className="flex flex-row sm:flex-col gap-3.5 sm:gap-0 items-start sm:items-stretch">
                        {/* Student Photo */}
                        <div className="relative w-24 sm:w-full aspect-[4/5] shrink-0 rounded-lg overflow-hidden bg-[#F0ECE1] mb-0 sm:mb-4 border border-[#E4DCC8]">
                          {topper.photo ? (
                            <img
                              src={topper.photo}
                              alt={topper.name}
                              width={240}
                              height={300}
                              loading="lazy"
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xl sm:text-3xl font-editorial font-bold text-[#0F3D2E]">
                              {getInitials(topper.name)}
                            </div>
                          )}
                        </div>

                        {/* Name & Scores */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#14110F] mb-0.5 sm:mb-1 group-hover:text-[#0F3D2E] transition-colors leading-snug">
                            {topper.name}
                          </h4>
                          <div className="font-editorial text-xl sm:text-2xl font-bold text-[#0F3D2E] mb-0.5">
                            {mainMetric}
                          </div>
                          <div className="text-[11px] sm:text-xs font-semibold text-[#B08D57] mb-2 sm:mb-3">
                            {secondaryMetric}
                          </div>

                          {/* Quote Block */}
                          {topper.quote && (
                            <p className="text-[11px] sm:text-xs text-[#14110F]/75 italic leading-relaxed font-normal p-2.5 sm:p-3 rounded-lg bg-[#FAF7F0] border-l-2 border-[#B08D57] mb-3 sm:mb-4">
                              "{topper.quote}"
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Batch Footer & Verified Lightbox Trigger */}
                    <div className="mt-3 sm:mt-0">
                      {topper.batch && (
                        <div className="text-[9px] font-bold text-[#14110F]/60 uppercase tracking-wider pt-2 sm:pt-3 border-t border-[#F0ECE1] mb-2 truncate">
                          BATCH: {topper.batch}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedStudent(topper)}
                        className="w-full py-1.5 rounded bg-[#FAF7F0] hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] border border-[#E4DCC8] text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>VERIFIED RESULT →</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 4 — FULL RESULTS ROSTER (WITH STEADY ACHIEVERS FILTER) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-[#E4DCC8] gap-4">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#14110F]">
                Student Performance Roster
              </h3>
              <p className="text-xs text-[#14110F]/70 font-normal">
                Complete verified marksheets across Board & Entrance exams.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {[
                { key: 'all', label: 'All Results' },
                { key: 'board', label: '12th HSC Board' },
                { key: 'jee', label: 'JEE Main/Adv' },
                { key: 'neet', label: 'NEET Medical' },
                { key: 'cet', label: 'MHT-CET' },
                { key: 'steady', label: 'Steady Achievers' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key as any)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === tab.key
                      ? 'bg-[#0F3D2E] text-[#FAF7F0]'
                      : 'bg-white text-[#14110F]/70 hover:text-[#14110F] border border-[#E4DCC8]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Roster Controls & Horizontal Scrolling Card Chain */}
          <div className="relative group/chain">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E4DCC8] shadow-md flex items-center justify-center text-[#14110F] hover:bg-[#0F3D2E] hover:text-[#FAF7F0] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
            >
              {filteredRoster.map((student) => {
                const res = student.results[0];
                return (
                  <div
                    key={student.id}
                    className="w-[290px] sm:w-[320px] shrink-0 bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F0ECE1] shrink-0 border border-[#E4DCC8]">
                          {student.photo ? (
                            <img
                              src={student.photo}
                              alt={student.name}
                              width={48}
                              height={48}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-sm font-bold text-[#0F3D2E]">
                              {getInitials(student.name)}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-editorial text-base font-bold text-[#14110F] group-hover:text-[#0F3D2E] transition-colors">
                            {student.name}
                          </h4>
                          <span className="text-[10px] text-[#14110F]/60 block font-medium">
                            {student.batch}
                          </span>
                        </div>
                      </div>

                      {/* Main Score Callout */}
                      {res && (
                        <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#F0ECE1] mb-3">
                          <div className="text-[10px] font-bold text-[#B08D57] uppercase tracking-wider">
                            {res.type === 'board' ? '12TH HSC BOARD' : res.type.toUpperCase()}
                          </div>
                          <div className="font-editorial text-2xl font-bold text-[#0F3D2E]">
                            {res.type === 'board' ? `${res.percentage}%` : res.score || res.rankOrPercentile}
                          </div>
                        </div>
                      )}

                      {/* Subject Marks Breakdown */}
                      {res?.subjects && (
                        <div className="space-y-1.5 mb-4">
                          {res.subjects.map((s, idx) => (
                            <div key={idx} className="flex justify-between text-xs font-normal">
                              <span className="text-[#14110F]/70">{s.name}</span>
                              <span className="font-bold text-[#14110F]">{s.marks} / 100</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedStudent(student)}
                      className="w-full py-1.5 rounded bg-white hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] border border-[#E4DCC8] text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer pt-2 border-t"
                    >
                      <span>VERIFIED →</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E4DCC8] shadow-md flex items-center justify-center text-[#14110F] hover:bg-[#0F3D2E] hover:text-[#FAF7F0] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW BLOCK 5 — "BEYOND THE EXAM HALL" (AWARD & COMPETITION GALLERY) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                CELEBRATING EVERY WIN
              </span>
              <span className="h-px w-6 bg-[#B08D57]" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#14110F]">
              Beyond the Exam Hall
            </h3>
            <p className="text-xs sm:text-sm text-[#14110F]/75 max-w-xl font-normal leading-relaxed mt-1">
              Honoring academic excellence, Olympiad distinctions, and annual merit felicitation honors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beyondExamGallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-xl overflow-hidden p-4 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#F0ECE1] mb-3 border border-[#E4DCC8]">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={300}
                      height={225}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[8px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-[#14110F] mb-1 group-hover:text-[#0F3D2E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OPTIONAL STRETCH — "VERIFIED" LIGHTBOX MODAL */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedStudent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
              onClick={() => setSelectedStudent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border-2 border-[#B08D57] relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-[#FAF7F0] text-[#14110F] hover:bg-[#0F3D2E] hover:text-[#FAF7F0] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  <span className="text-xs font-bold text-[#0F3D2E] uppercase tracking-wider">
                    VERIFIED OFFICIAL RESULT
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#14110F] mb-1">
                  {selectedStudent.name}
                </h3>
                <p className="text-xs text-[#14110F]/70 mb-4 font-medium">
                  Batch: {selectedStudent.batch || 'R. R. Patil Academy'}
                </p>

                {/* Felicitation / Certificate Image */}
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#F0ECE1] border border-[#E4DCC8] mb-4">
                  <img
                    src={selectedStudent.certificatePhoto || selectedStudent.photo || award1Img}
                    alt={`${selectedStudent.name} official felicitation scorecard`}
                    width={480}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-bold uppercase tracking-wider">
                    Official Merit Felicitation
                  </div>
                </div>

                {selectedStudent.quote && (
                  <p className="text-xs text-[#14110F]/80 italic p-3 rounded-lg bg-[#FAF7F0] border-l-2 border-[#B08D57] mb-4">
                    "{selectedStudent.quote}"
                  </p>
                )}

                <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-xs font-semibold text-[#0F3D2E]">
                  <span>100% Scorecard Authenticity Guaranteed</span>
                  <a
                    href="https://wa.me/918275280028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#B08D57] hover:underline"
                  >
                    <span>Inquire Batch</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResultsSection;
