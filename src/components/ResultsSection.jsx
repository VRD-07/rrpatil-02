import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

// Real photo imports
import kunalImg from '../assets/kunal_upscaled.jpeg';
import varadImg from '../assets/varad.jpeg';
import result2024 from '../assets/Result_2024.jpeg';
import result26 from '../assets/Result_26.jpeg';
import kartikResult from '../assets/kartik_result.jpg';
import kartikD from '../assets/kartik_upscaled.jpg';

import rakeshImg from '../assets/rakesh.jpeg';
import komalImg from '../assets/komal.jpeg';
import rakeshFelicImg from '../assets/Rakesh_felic.jpeg';
import award1Img from '../assets/Awards/award_01.jpeg';
import award2Img from '../assets/Awards/award_02.jpeg';
import award3Img from '../assets/Awards/award_03.jpeg';
import award4Img from '../assets/Awards/award_04.jpeg';

// Count-up animated stat component (triggers when scrolled into view)
const CountUpStat = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Start counter only when element enters the viewport (matches original onViewportEnter)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, []);

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
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

// ============================================================================
// 1. ALL-TIME RECORDS CHAMPIONS (Edit this array for All-Time Records)
// ============================================================================
export const allTimeChampions = [
  {
    id: 'alltime-jee',
    name: 'Kunal Kharat',
    photo: kunalImg,
    certificatePhoto: rakeshFelicImg,
    batch: '2-Year JEE Advanced Intensive',
    quote: 'R. R. Patil’s conceptual depth & daily problem drills gave me absolute speed & confidence under pressure.',
    badge: 'JEE ALL-TIME RECORD',
    isAllTimeRecord: true,
    score: 'AIR 1928',
    subScore: 'AIR-1928 [Category Rank]',
  },
  {
    id: 'alltime-neet',
    name: 'Varad Chavhan',
    photo: varadImg,
    certificatePhoto: result2024,
    batch: '2-Year NEET Medical Track',
    quote: 'Small batch focus and 1-on-1 doubt clearing were the main drivers behind my 715 score.',
    badge: 'NEET ALL-TIME RECORD',
    isAllTimeRecord: true,
    score: '475 / 720',
    subScore: 'Highest NEET Score Record',
  },
  {
    id: 'alltime-board',
    name: 'Rakesh Karpe',
    photo: rakeshImg,
    certificatePhoto: result26,
    batch: '12th HSC Board + JEE Track',
    quote: 'Continuous pre-board mock exams perfected my answer presentation and timing strategy.',
    badge: 'BOARD ALL-TIME RECORD',
    isAllTimeRecord: true,
    score: '92.17%',
    subScore: 'HSC Board Distinction',
  },
];

// ============================================================================
// 2. THIS YEAR TOPPERS (2025-26) (Edit this array for This Year Toppers)
// ============================================================================
export const thisYearChampions = [
  {
    id: 'alltime-board',
    name: 'Rakesh Karpe',
    photo: rakeshImg,
    certificatePhoto: result26,
    batch: '12th HSC Board + JEE Track',
    quote: 'Continuous pre-board mock exams perfected my answer presentation and timing strategy.',
    badge: 'BOARD ALL-TIME RECORD',
    isAllTimeRecord: true,
    score: '92.17%',
    subScore: 'HSC Board Distinction',
  },
  {
    id: 'thisyear-CET',
    name: 'Kartik Divekar',
    photo: kartikD,
    certificatePhoto: kartikResult,
    batch: '12th HSC Board + JEE Track (2025-26)',
    quote: 'Weekly assessment not only increases the probability of success, but also makes us disciplined',
    badge: 'CET topper 2026',
    isAllTimeRecord: false,
    score: '96.48 %ile',
    subScore: 'MHT-CET Distinction',
  },
  {
    id: 'thisyear-board2',
    name: 'Komal N. Gund',
    photo: komalImg,
    certificatePhoto: result26,
    batch: '2-Year NEET Medical Track (2025-26)',
    quote: 'Small batch focus and 1-on-1 doubt clearing were the main drivers behind my HSC score.',
    badge: 'Board 2nd Topper',
    isAllTimeRecord: false,
    score: '89.67%',
    subScore: 'HSC Board Disctinction',
  },
];// Imports from res_indi (HSC Board 2026 ground-truth marksheets)
import res1 from '../assets/res_indi/student-result-01.jpeg';
import res2 from '../assets/res_indi/student-result-02.jpeg';
import res3 from '../assets/res_indi/student-result-03.jpeg';
import res4 from '../assets/res_indi/student-result-04.jpeg';
import res5 from '../assets/res_indi/student-result-05.jpeg';
import res6 from '../assets/res_indi/student-result-06.jpeg';
import res7 from '../assets/res_indi/student-result-07.jpeg';
import res8 from '../assets/res_indi/student-result-08.jpeg';
import res9 from '../assets/res_indi/student-result-09.jpeg';
import res10 from '../assets/res_indi/student-result-10.jpeg';
import res11 from '../assets/res_indi/student-result-11.jpeg';
import res12 from '../assets/res_indi/student-result-12.jpeg';
import res13 from '../assets/res_indi/student-result-13.jpeg';
import res14 from '../assets/res_indi/student-result-14.jpeg';
import res15 from '../assets/res_indi/student-result-15.jpeg';
import res16 from '../assets/res_indi/student-result-16.jpeg';
import res17 from '../assets/res_indi/student-result-17.jpeg';
import res18 from '../assets/res_indi/student-result-18.jpeg';
import res19 from '../assets/res_indi/student-result-19.jpeg';
import res20 from '../assets/res_indi/student-result-20.jpeg';
import res21 from '../assets/res_indi/student-result-21.jpeg';
import res22 from '../assets/res_indi/student-result-22.jpeg';
import res23 from '../assets/res_indi/student-result-23.jpeg';
import res24 from '../assets/res_indi/student-result-24.jpeg';
import res25 from '../assets/res_indi/student-result-25.jpeg';
import res26 from '../assets/res_indi/student-result-26.jpeg';

// ============================================================================
// 3. FULL STUDENT PERFORMANCE ROSTER (HSC Board 2026 Verified Results)
// ============================================================================
export const studentRoster = [
  {
    id: 'res-5',
    name: 'Rakesh Vilas Karpe',
    certificatePhoto: res5,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 92.17,
        subjects: [
          { name: 'Maths', marks: 98 },
          { name: 'Biology', marks: 95 },
          { name: 'Physics', marks: 93 },
        ],
      },
    ],
  },
  {
    id: 'res-4',
    name: 'Komal Navnath Gund',
    certificatePhoto: res4,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 89.67,
        subjects: [
          { name: 'Maths', marks: 96 },
          { name: 'Biology', marks: 93 },
          { name: 'Physics', marks: 92 },
        ],
      },
    ],
  },
  {
    id: 'res-6',
    name: 'Kartik Deepak Thorat',
    certificatePhoto: res6,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 89.33,
        subjects: [
          { name: 'Maths', marks: 96 },
          { name: 'Biology', marks: 94 },
          { name: 'Chemistry', marks: 91 },
        ],
      },
    ],
  },
  {
    id: 'res-2',
    name: 'Swati Gorakh Ghodake',
    certificatePhoto: res2,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 88.67,
        subjects: [
          { name: 'Maths & Stats', marks: 93 },
          { name: 'Physics', marks: 92 },
          { name: 'Chemistry', marks: 90 },
        ],
      },
    ],
  },
  {
    id: 'res-1',
    name: 'Aditya Babasaheb Pune',
    certificatePhoto: res1,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 88.17,
        subjects: [
          { name: 'Maths', marks: 94 },
          { name: 'Chemistry', marks: 93 },
          { name: 'Physics', marks: 92 },
        ],
      },
    ],
  },
  {
    id: 'res-8',
    name: 'Prajwal Mohan Thorat',
    certificatePhoto: res8,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 88.00,
        subjects: [
          { name: 'Maths & Stats', marks: 93 },
          { name: 'Biology', marks: 93 },
          { name: 'Physics', marks: 92 },
        ],
      },
    ],
  },
  {
    id: 'res-9',
    name: 'Shree Vijay Godage',
    certificatePhoto: res9,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 87.50,
        subjects: [
          { name: 'Maths & Stats', marks: 98 },
          { name: 'Physics', marks: 93 },
          { name: 'Biology', marks: 93 },
        ],
      },
    ],
  },
  {
    id: 'res-3',
    name: 'Anushka Machindra Pathare',
    certificatePhoto: res3,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 87.33,
        subjects: [
          { name: 'Maths', marks: 94 },
          { name: 'Physics', marks: 92 },
          { name: 'Biology', marks: 92 },
        ],
      },
    ],
  },
  {
    id: 'res-15',
    name: 'Pratik Shivaji Gaikwad',
    certificatePhoto: res15,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 86.83,
        subjects: [
          { name: 'Maths & Stats', marks: 93 },
          { name: 'Biology', marks: 92 },
          { name: 'Chemistry', marks: 91 },
        ],
      },
    ],
  },
  {
    id: 'res-21',
    name: 'Yugant Sunil Pawar',
    certificatePhoto: res21,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 86.33,
        subjects: [
          { name: 'Maths & Stats', marks: 97 },
          { name: 'Physics', marks: 94 },
          { name: 'Biology', marks: 94 },
        ],
      },
    ],
  },
  {
    id: 'res-23',
    name: 'Sairaj Prabhakar Kalaskar',
    certificatePhoto: res23,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 86.17,
        subjects: [
          { name: 'Maths', marks: 94 },
          { name: 'Physics', marks: 91 },
          { name: 'Chemistry', marks: 89 },
        ],
      },
    ],
  },
  {
    id: 'res-16',
    name: 'Alfaiz Sadik Shaikh',
    certificatePhoto: res16,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 85.00,
        subjects: [
          { name: 'Maths & Stats', marks: 95 },
          { name: 'Biology', marks: 92 },
          { name: 'Physics', marks: 89 },
        ],
      },
    ],
  },
  {
    id: 'res-26',
    name: 'Kunal Manohar Gaikwad',
    certificatePhoto: res26,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 85.00,
        subjects: [
          { name: 'Maths & Stats', marks: 94 },
          { name: 'Biology', marks: 92 },
          { name: 'Physics', marks: 89 },
        ],
      },
    ],
  },
  {
    id: 'res-19',
    name: 'Kartik Dattatray Divekar',
    certificatePhoto: res19,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 84.83,
        subjects: [
          { name: 'Maths & Stats', marks: 95 },
          { name: 'Biology', marks: 94 },
          { name: 'Chemistry', marks: 90 },
        ],
      },
    ],
  },
  {
    id: 'res-11',
    name: 'Vedant Anil Chavan',
    certificatePhoto: res11,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 84.67,
        subjects: [
          { name: 'Maths & Stats', marks: 95 },
          { name: 'IT (Sci)', marks: 94 },
          { name: 'Physics', marks: 92 },
        ],
      },
    ],
  },
  {
    id: 'res-13',
    name: 'Kunal Sunil Deokar',
    certificatePhoto: res13,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 84.67,
        subjects: [
          { name: 'IT (Sci)', marks: 96 },
          { name: 'Maths & Stats', marks: 95 },
          { name: 'Biology', marks: 94 },
        ],
      },
    ],
  },
  {
    id: 'res-25',
    name: 'Shivam Hanuman Gunjal',
    certificatePhoto: res25,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 84.67,
        subjects: [
          { name: 'Maths & Stats', marks: 96 },
          { name: 'Chemistry', marks: 93 },
          { name: 'Biology', marks: 90 },
        ],
      },
    ],
  },
  {
    id: 'res-17',
    name: 'Kaustubh Pramod Gund',
    certificatePhoto: res17,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 84.50,
        subjects: [
          { name: 'Maths & Stats', marks: 92 },
          { name: 'Chemistry', marks: 89 },
          { name: 'Geography', marks: 85 },
        ],
      },
    ],
  },
  {
    id: 'res-14',
    name: 'Aradhya Sachin Amrutkar',
    certificatePhoto: res14,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 83.50,
        subjects: [
          { name: 'Chemistry', marks: 91 },
          { name: 'Geography', marks: 89 },
          { name: 'IT (Sci)', marks: 89 },
        ],
      },
    ],
  },
  {
    id: 'res-12',
    name: 'Om Jalindar Jagtap',
    certificatePhoto: res12,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 83.17,
        subjects: [
          { name: 'Chemistry', marks: 91 },
          { name: 'Physics', marks: 88 },
          { name: 'IT (Sci)', marks: 88 },
        ],
      },
    ],
  },
  {
    id: 'res-10',
    name: 'Shreyank Amol Sakhare',
    certificatePhoto: res10,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 82.83,
        subjects: [
          { name: 'Biology', marks: 93 },
          { name: 'Chemistry', marks: 90 },
          { name: 'Maths & Stats', marks: 88 },
        ],
      },
    ],
  },
  {
    id: 'res-24',
    name: 'Atharva Ganesh Kangune',
    certificatePhoto: res24,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 82.33,
        subjects: [
          { name: 'Maths & Stats', marks: 93 },
          { name: 'Physics', marks: 87 },
          { name: 'Chemistry', marks: 87 },
        ],
      },
    ],
  },
  {
    id: 'res-7',
    name: 'Gaurav Gorakh Lohakane',
    certificatePhoto: res7,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 81.83,
        subjects: [
          { name: 'Physics', marks: 94 },
          { name: 'IT (Sci)', marks: 87 },
          { name: 'Maths', marks: 85 },
        ],
      },
    ],
  },
  {
    id: 'res-20',
    name: 'Samiksha Santosh Kadam',
    certificatePhoto: res20,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 81.00,
        subjects: [
          { name: 'Maths & Stats', marks: 98 },
          { name: 'Physics', marks: 87 },
          { name: 'Geography', marks: 86 },
        ],
      },
    ],
  },
  {
    id: 'res-18',
    name: 'Tanishka Sandeep Pawar',
    certificatePhoto: res18,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 80.50,
        subjects: [
          { name: 'Chemistry', marks: 93 },
          { name: 'Maths & Stats', marks: 91 },
          { name: 'Biology', marks: 91 },
        ],
      },
    ],
  },
  {
    id: 'res-22',
    name: 'Vedant Santosh Talekar',
    certificatePhoto: res22,
    batch: '12th HSC Science (2026)',
    results: [
      {
        type: 'board',
        year: '2026',
        percentage: 80.17,
        subjects: [
          { name: 'Maths & Stats', marks: 92 },
          { name: 'Biology', marks: 92 },
          { name: 'Physics', marks: 81 },
        ],
      },
    ],
  },
];

export const ResultsSection = () => {

  // State for Toggle (Block 3): 'all-time' (default) vs 'this-year'
  const [timeframe, setTimeframe] = useState('all-time');

  // State for Roster Filter (Block 4): 'all' (Filter tabs can be re-enabled when JEE/NEET results are added)
  const activeFilter = 'all';

  // State for Lightbox Modal
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Helper for initials fallback
  const getInitials = (name) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Category Champions Data for Block 2 (Separated into allTimeChampions & thisYearChampions)
  const categoryChampions = timeframe === 'all-time' ? allTimeChampions : thisYearChampions;

  // Filtered Roster Data for Block 4
  const filteredRoster = studentRoster.filter((s) => {
    if (activeFilter === 'all') return !s.isSteadyAchiever; // Main roster (excluding steady achievers filter tab)
    if (activeFilter === 'steady') return s.isSteadyAchiever;
    return s.results.some((r) => r.type === activeFilter);
  });
  
  // Duplicated Roster for Infinite Carousel Loop
  const rosterLoop =
    filteredRoster.length > 0
      ? filteredRoster.length < 5
        ? [...filteredRoster, ...filteredRoster, ...filteredRoster, ...filteredRoster]
        : [...filteredRoster, ...filteredRoster]
      : [];

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
      title: 'JEE & NEET High Performers Honor',
      caption: 'Felicitation ceremony celebrating national percentile distinctions.',
      badge: 'NATIONAL DISTINCTION',
    },
    {
      img: award3Img,
      title: 'MHT-CET Top Ranker Felicitation',
      caption: 'Honoring state-level engineering & pharmacy toppers.',
      badge: 'CET TOPPERS',
    },
    {
      img: award4Img,
      title: 'Board Exam Merit Award',
      caption: 'Recognizing 95%+ scorers in 12th Maharashtra State Board.',
      badge: 'BOARD EXCELLENCE',
    },
  ];

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
        <Reveal delay={100}>
          <div className="mb-14 p-6 sm:p-8 rounded-xl bg-white border border-[#E4DCC8] shadow-xs">
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
          </div>
        </Reveal>

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
                onClick={() => setTimeframe('all-time')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  timeframe === 'all-time'
                    ? 'bg-[#0F3D2E] text-[#FAF7F0] shadow-xs'
                    : 'text-[#14110F]/70 hover:text-[#14110F]'
                }`}
              >
                All-Time Records
              </button>
              <button
                type="button"
                onClick={() => setTimeframe('this-year')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  timeframe === 'this-year'
                    ? 'bg-[#0F3D2E] text-[#FAF7F0] shadow-xs'
                    : 'text-[#14110F]/70 hover:text-[#14110F]'
                }`}
              >
                This Year (2025-26)
              </button>
            </div>
          </div>

          {/* Block 2: Equal-Weight Category Champions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {categoryChampions.map((topper, idx) => (
              <Reveal key={topper.id} delay={idx * 100} className="h-full">
                <div className="h-full bg-white border-2 border-[#E4DCC8] hover:border-[#B08D57] rounded-xl overflow-hidden p-4 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
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
                          {topper.score}
                        </div>
                        <div className="text-[11px] sm:text-xs font-semibold text-[#B08D57] mb-2 sm:mb-3">
                          {topper.subScore}
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
                </div>
              </Reveal>
            ))}
          </div>
          
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 4 — FULL RESULTS ROSTER (HSC BOARD 2026 VERIFIED RESULTS) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-[#E4DCC8] gap-4">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-[#14110F]">
                Student Performance Roster
              </h3>
              <p className="text-xs text-[#14110F]/70 font-normal">
                Complete 100% verified HSC Board 2026 scorecards.
              </p>
            </div>

            {/* Filter Tabs (Currently disabled for HSC Board results; re-enable when JEE/NEET results are added) */}
            {/*
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
            */}
          </div>

          {/* Infinitely Rotating Marquee Carousel with Fading Edges */}
          <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            {/* Left & Right Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF7F0] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAF7F0] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div
              key={activeFilter}
              className="flex gap-5 animate-marquee hover:[animation-play-state:paused]"
            >
              {rosterLoop.map((student, idx) => {
                const res = student.results[0];
                return (
                  <div
                    key={`${student.id}-${idx}`}
                    className="w-[280px] sm:w-[310px] shrink-0 bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Top Header Row with Initials Circle & Verified Button at Top Right */}
                      <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#F0ECE1]">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-[#0F3D2E] text-[#FAF7F0] shrink-0 border-2 border-[#B08D57]/40 flex items-center justify-center font-editorial font-bold text-sm shadow-xs">
                          {getInitials(student.name)}
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedStudent(student)}
                          className="px-2.5 py-1 rounded bg-[#FAF7F0] hover:bg-[#0F3D2E] text-[#0F3D2E] hover:text-[#FAF7F0] border border-[#E4DCC8] hover:border-[#0F3D2E] text-[9px] font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                          <span>VERIFIED →</span>
                        </button>
                      </div>

                      {/* Name & Batch */}
                      <div className="mb-3">
                        <h4 className="font-editorial text-base sm:text-lg font-bold text-[#14110F] group-hover:text-[#0F3D2E] transition-colors leading-snug truncate">
                          {student.name}
                        </h4>
                        <span className="text-[10px] text-[#14110F]/60 block font-medium mt-0.5 truncate">
                          {student.batch}
                        </span>
                      </div>

                      {/* Main Score Callout */}
                      {res && (
                        <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#F0ECE1] mb-3">
                          <div className="text-[10px] font-bold text-[#B08D57] uppercase tracking-wider">
                            {res.type === 'board' ? '12TH HSC BOARD 2026' : res.type.toUpperCase()}
                          </div>
                          <div className="font-editorial text-2xl font-bold text-[#0F3D2E]">
                            {res.type === 'board' ? `${res.percentage}%` : res.score || res.rankOrPercentile}
                          </div>
                        </div>
                      )}

                      {/* Subject Marks Breakdown */}
                      {res?.subjects && (
                        <div className="space-y-1.5 mb-2">
                          {res.subjects.map((s, sIdx) => (
                            <div key={sIdx} className="flex justify-between text-xs font-normal">
                              <span className="text-[#14110F]/70">{s.name}</span>
                              <span className="font-bold text-[#14110F]">{s.marks} / 100</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW BLOCK 5 — "BEYOND THE EXAM HALL" (AWARD & COMPETITION GALLERY) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                CELEBRATING EVERY WIN
              </span>
              <span className="h-px w-6 bg-[#B08D57]" />
            </div>
            <h3 className="font-editorial text-xl sm:text-3xl font-bold text-[#14110F]">
              Beyond the Exam Hall
            </h3>
            <p className="text-[11px] sm:text-sm text-[#14110F]/75 max-w-xl font-normal leading-relaxed mt-0.5">
              Honoring academic excellence, Olympiad distinctions, and annual merit felicitation honors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {beyondExamGallery.map((item, idx) => (
              <Reveal key={idx} delay={idx * 80} className="h-full">
                <div className="h-full bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg sm:rounded-xl overflow-hidden p-2.5 sm:p-4 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[4/3] w-full rounded-md sm:rounded-lg overflow-hidden bg-[#F0ECE1] mb-2 sm:mb-3 border border-[#E4DCC8]">
                      <img
                        src={item.img}
                        alt={item.title}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-1.5 left-1.5 px-1.5 sm:px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[7px] sm:text-[8px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-editorial text-sm sm:text-lg font-bold text-[#14110F] mb-0.5 sm:mb-1 group-hover:text-[#0F3D2E] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#14110F]/75 leading-normal sm:leading-relaxed font-normal">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OPTIONAL STRETCH — "VERIFIED" LIGHTBOX MODAL */}
        {/* ========================================================================= */}
        {selectedStudent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs" onClick={() => setSelectedStudent(null)}>
              <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border-2 border-[#B08D57] relative max-h-[90vh] overflow-y-auto"
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
              </div>
            </div>
          )}
        
      </div>
    </section>
  );
};

export default ResultsSection;
