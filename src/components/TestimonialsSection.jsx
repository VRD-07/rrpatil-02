import React from 'react';
import { Quote, CheckCircle2, Award } from 'lucide-react';
import Reveal from './Reveal';

import rakeshImg from '../assets/rakesh.jpeg';
import komalImg from '../assets/komal.jpeg';
import kartikImg from '../assets/kartik.jpeg';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Prof. R. R. Patil's step-by-step Physics drills and Prof. Harshal Belapurkar's Organic Chemistry mechanisms helped me score 92.17% in HSC. The daily doubt sessions and dual-faculty parallel lectures made all the difference.",
      author: 'Rakesh Vilas Karpe',
      avatar: rakeshImg,
      batch: '12th HSC Science Regular Batch',
      result: 'HSC 92.17% (Physics 91/100, Maths 92/100)',
      verification: 'Verified Topper · Marksheet Checked',
    },
    {
      quote:
        "Prof. Prasad Patil's NCERT line-by-line breakdown for Biology and Maths speed shortcuts gave me complete confidence during board exams. The small batch size ensures every single student receives personal attention.",
      author: 'Komal Navnath Gund',
      avatar: komalImg,
      batch: '12th HSC Science Regular Batch',
      result: 'HSC 89.67% (Biology 94/100, Chem 88/100)',
      verification: 'Verified Topper · Marksheet Checked',
    },
    {
      quote:
        "The in-house authored practice modules and weekly diagnostic chapter tests kept my preparation structured throughout 11th and 12th standard. I never needed any outside private tuition or extra books.",
      author: 'Kartik Deepak Thorat',
      avatar: kartikImg,
      batch: '12th HSC Science & Entrance Batch',
      result: 'HSC 89.33% (Maths 91/100, Physics 88/100)',
      verification: 'Verified Topper · Marksheet Checked',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF7F0] border-y border-[#E4DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                AUTHENTICATED ALUMNI VOICES
              </span>
              <span className="h-px w-8 bg-[#B08D57]" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-2xl">
              Words from Our Verified Toppers
            </h2>
            <p className="text-xs sm:text-sm text-[#14110F]/70 max-w-xl mt-2 font-normal leading-relaxed">
              Real feedback from students who completed their 11th & 12th standard journey at R. R. Patil Academy.
            </p>
          </div>
        </Reveal>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 100} className="h-full">
              <div
                className="h-full p-6 sm:p-8 rounded-xl bg-white border border-[#E4DCC8] hover:border-[#B08D57] transition-all flex flex-col justify-between relative shadow-xs group"
              >
                <div>
                  {/* Header Badge: Verified Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0F3D2E]/10 text-[#0F3D2E] text-[10px] font-bold uppercase tracking-wider border border-[#0F3D2E]/20">
                      <CheckCircle2 className="w-3 h-3 text-[#0F3D2E]" />
                      <span>{t.verification}</span>
                    </span>
                    <Quote className="w-6 h-6 text-[#B08D57] opacity-60" />
                  </div>

                  {/* Quote Body */}
                  <p className="font-editorial text-base sm:text-lg text-[#14110F] italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Attribution Line */}
                <div className="border-t border-[#F0ECE1] pt-4 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B08D57]/40 shrink-0 shadow-xs">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-sans font-bold text-sm text-[#0F3D2E] truncate">
                      {t.author}
                    </div>
                    <div className="text-[10px] font-medium text-[#14110F]/70 truncate uppercase tracking-wider">
                      {t.batch}
                    </div>
                    <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-[#FAF7F0] text-[#B08D57] font-bold text-[10px] border border-[#E4DCC8]">
                      <Award className="w-3 h-3 text-[#B08D57]" />
                      <span className="truncate">{t.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
