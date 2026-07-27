import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const TestimonialsSection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  const testimonials = [
    {
      quote:
        'The weekly diagnostic testing at Vidhata changed how I prepared for Class 12 Boards and JEE. Instead of randomly solving questions, I knew exactly which chapters needed attention.',
      author: 'Ananya Deshmukh',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      batch: 'Class 12 Board Intensive & JEE Batch',
      result: 'CBSE 97.6% | JEE Adv AIR 342',
    },
    {
      quote:
        'What sets Vidhata apart is the accessibility of faculty. Dr. Arishta Vardhan spent hours helping me master rotational mechanics from scratch after regular class hours.',
      author: 'Siddharth Mehta',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
      batch: '2-Year JEE Advanced Batch',
      result: 'JEE Adv AIR 189',
    },
    {
      quote:
        'As a parent, I valued the transparent communication. We received weekly performance reports that were detailed and constructive, not just generic marks lists.',
      author: 'Dr. Rameshwar Kulkarni',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      batch: 'Parent of NEET Foundation Student',
      result: 'NEET Score 685/720',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08D57]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              REFLECTIONS & VOICES
            </span>
            <span className="h-px w-8 bg-[#B08D57]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-2xl">
            Words from Our Students & Parents
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.08 }}
              className="p-8 rounded-lg bg-white border border-[#F0ECE1] flex flex-col justify-between relative shadow-xs"
            >
              <div>
                {/* Brass Quotation Mark */}
                <div className="text-[#B08D57] mb-4">
                  <Quote className="w-8 h-8 opacity-80" />
                </div>
                {/* Quote Body */}
                <p className="font-editorial text-base sm:text-lg text-[#14110F] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution Line with Avatar */}
              <div className="border-t border-[#F0ECE1] pt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-[#F0ECE1] shrink-0"
                />
                <div>
                  <div className="font-sans font-semibold text-sm text-[#0F3D2E]">
                    {t.author}
                  </div>
                  <div className="text-[11px] font-medium text-[#14110F]/70 uppercase tracking-wider">
                    {t.batch}
                  </div>
                  <div className="inline-block mt-1 px-2 py-0.5 rounded bg-[#F0ECE1] text-[#B08D57] font-semibold text-[10px]">
                    {t.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
