import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Clock } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface CoursesSectionProps {
  onOpenDemo: (courseName?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenDemo }) => {
  const reducedMotion = usePrefersReducedMotion();
  const [activeCourseIndex, setActiveCourseIndex] = useState<number | null>(null);

  const courses = [
    {
      id: 'foundation',
      title: 'Foundation Batch',
      target: 'Classes 8th, 9th & 10th',
      badge: 'Early Advantage',
      duration: '1 to 2 Academic Years',
      batchSize: 'Max 25 Students',
      description:
        'Strengthen core conceptual understanding in Mathematics and Sciences while preparing for Board exams, NTSE, and Olympiads.',
      features: [
        'Comprehensive NCERT + Advanced Problem Sets',
        'Logic & Analytical Reasoning Drills',
        'Weekly Assessment & Parent Progress Reviews',
        'Foundation Modules for Class 11 Entrance',
      ],
      highlight: false,
    },
    {
      id: 'board-intensive',
      title: 'Board Exam Intensive',
      target: 'Classes 10th & 12th (CBSE / State Board)',
      badge: 'Top Results',
      duration: '1 Academic Year',
      batchSize: 'Max 20 Students',
      description:
        'Focused board preparation covering theoretical writing, diagrammatic presentation, past 10-year paper solutions, and pre-board series.',
      features: [
        'Answer Presentation & Marking Scheme Workshops',
        '10+ Full Syllabus Mock Board Examinations',
        'Doubt Resolution Seminars by Senior Board Examiners',
        'Strict Time-Bound Answer Practice',
      ],
      highlight: true,
    },
    {
      id: 'jee-neet',
      title: 'Competitive Exam Track',
      target: 'Classes 11th, 12th & 12th Pass (JEE / NEET)',
      badge: 'High Rigor',
      duration: '1 or 2 Years Intensive',
      batchSize: 'Max 25 Students',
      description:
        'Advanced problem-solving techniques for JEE Main, JEE Advanced, and NEET-UG with daily practice problems (DPPs) and All-India test series.',
      features: [
        'Physics, Chemistry, Math & Biology Deep Dives',
        'Speed & Accuracy Optimization Modules',
        'Computer-Based Mock Test Simulator (JEE Pattern)',
        'Personalized Rank Predictor & Analysis',
      ],
      highlight: false,
    },
    {
      id: 'mentoring',
      title: '1-on-1 Elite Mentoring',
      target: 'Select Students (All Grades)',
      badge: 'Custom Tailored',
      duration: 'Flexible Term',
      batchSize: 'Individual 1:1',
      description:
        'Dedicated personal mentor assigned for complete customized pacing, specific weak area targeting, and specialized competitive prep.',
      features: [
        'Customized Learning Schedule & Speed',
        'On-Demand Doubt Resolution Sessions',
        'Direct Access to Senior Subject Heads',
        'Parent-Faculty Weekly Briefings',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="courses" className="py-20 sm:py-28 bg-[#F0ECE1] border-y border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#B08D57]/20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                CURRICULUMS & PROGRAMS
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F]">
              Tailored Pathways to Academic Mastery
            </h2>
          </div>
          <p className="text-sm text-[#14110F]/70 max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
            Every batch at Vidhata is structured around small group learning, ensuring individualized attention and rigorous progress monitoring.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => {
            return (
              <motion.div
                key={course.id}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: reducedMotion ? 0 : idx * 0.08 }}
                onMouseEnter={() => setActiveCourseIndex(idx)}
                onMouseLeave={() => setActiveCourseIndex(null)}
                onClick={() => setActiveCourseIndex(activeCourseIndex === idx ? null : idx)}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-lg transition-all duration-300 cursor-pointer ${
                  course.highlight
                    ? 'bg-[#0F3D2E] text-[#F6F1E7] shadow-md border border-[#0F3D2E]'
                    : 'bg-white/80 text-[#14110F] border border-[#E4DCC8] hover:border-[#B08D57]/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Badge & Target */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        course.highlight
                          ? 'bg-[#B08D57] text-[#14110F]'
                          : 'bg-[#E4DCC8]/60 text-[#0F3D2E]'
                      }`}
                    >
                      {course.badge}
                    </span>
                    <div className="flex items-center gap-3 text-xs opacity-80 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title & Target Grade */}
                  <h3
                    className={`font-editorial text-2xl sm:text-3xl font-semibold mb-1 ${
                      course.highlight ? 'text-[#F6F1E7]' : 'text-[#14110F]'
                    }`}
                  >
                    {course.title}
                  </h3>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                      course.highlight ? 'text-[#B08D57]' : 'text-[#0F3D2E]'
                    }`}
                  >
                    Target: {course.target}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                      course.highlight ? 'text-[#F6F1E7]/85' : 'text-[#14110F]/80'
                    }`}
                  >
                    {course.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-current/10 mb-8">
                    {course.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            course.highlight ? 'text-[#B08D57]' : 'text-[#0F3D2E]'
                          }`}
                        />
                        <span className="opacity-90">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDemo(course.title);
                    }}
                    className={`w-full inline-flex items-center justify-between px-5 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] ${
                      course.highlight
                        ? 'bg-[#F6F1E7] text-[#0F3D2E] hover:bg-white active:scale-[0.99]'
                        : 'bg-[#0F3D2E] text-[#F6F1E7] hover:bg-[#0A2A20] active:scale-[0.99]'
                    }`}
                  >
                    <span>Request Batch Seat & Syllabus</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${
                        course.highlight ? 'text-[#0F3D2E]' : 'text-[#B08D57]'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
