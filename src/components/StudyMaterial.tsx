import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// ES Module imports for ground-truth book cover photography
import book10thImg from '../assets/Books/foundation_book.jpeg';
import bookBioImg from '../assets/Books/Biology.jpeg';
import bookPyqImg from '../assets/Books/PYQ_12th.jpeg';

// Tiled sub-grid book cover thumbnails
import subBook1 from '../assets/Books/math-I.jpeg';
import subBook2 from '../assets/Books/maths.jpeg';
import subBook3 from '../assets/Books/foundation_book.jpeg';
import subBook4 from '../assets/Books/Biology.jpeg';
import subBook5 from '../assets/Books/PYQ_12th.jpeg';
import subBook6 from '../assets/Books/math-I.jpeg';
import subBook7 from '../assets/Books/maths.jpeg';
import subBook8 from '../assets/Books/foundation_book.jpeg';

export const StudyMaterial: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  const tiledBooks = [
    { src: subBook1, title: 'Maths Vol. I', desc: 'Calculus & Vectors' },
    { src: subBook2, title: 'Physics Vol. I', desc: 'Mechanics & Dynamics' },
    { src: subBook3, title: 'Chemistry Vol. I', desc: 'Physical & Organic' },
    { src: subBook4, title: 'Maths Vol. II', desc: 'Algebra & Geometry' },
    { src: subBook5, title: 'Physics Vol. II', desc: 'Electro & Optics' },
    { src: subBook6, title: 'Chemistry Vol. II', desc: 'Inorganic & Practical' },
    { src: subBook7, title: 'CET Question Bank', desc: 'Topic-wise Speed Sets' },
    { src: subBook8, title: 'NEET Practice Modules', desc: 'NCERT Exemplar Solutions' },
  ];

  return (
    <section id="study-material" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              PROPRIETARY PUBLICATIONS
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-3xl">
            Study Material Built In-House
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            Authored specifically by our senior faculty for deep conceptual understanding — not generic photocopied notes.
          </p>
        </div>

        {/* 3 Featured Priority Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: 10th Foundation Book */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] hover:border-[#B08D57] shadow-xs flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#0F3D2E]/5 border border-[#E4DCC8] mb-6 shadow-xs">
                <img
                  src={book10thImg}
                  alt="10th Foundation Book Cover"
                  width={300}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2.5 py-1 rounded">
                CLASS 10 FOUNDATION
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#14110F] mt-3 mb-2">
                10th Foundation Book
              </h3>
              <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed font-normal">
                Single comprehensive module covering core Science, Mathematics & Logical Reasoning with rocket-launch problem sets.
              </p>
            </div>
            <div className="pt-6 border-t border-[#F0ECE1] mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F3D2E]">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
                <span>Single In-House Authored Module</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Biology Book (Full 4-Color Print) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-6 sm:p-8 rounded-lg bg-white border-2 border-[#B08D57] shadow-md flex flex-col justify-between relative group"
          >
            <div>
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#0F3D2E]/5 border border-[#E4DCC8] mb-6 shadow-xs">
                <img
                  src={bookBioImg}
                  alt="Biology Book Full 4-Color Print Cover"
                  width={300}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#14110F] bg-[#B08D57] px-2.5 py-1 rounded">
                11TH & 12TH BIOLOGY
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#14110F] mt-3 mb-2">
                11th & 12th Stream Books
              </h3>
              <p className="text-xs sm:text-sm text-[#14110F]/80 font-medium mb-2">
                7 books for PCM stream · 9 books for PCMB stream
              </p>
            </div>

            {/* Biology 4-Color Callout Badge */}
            <div className="p-3.5 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] border border-[#B08D57] text-xs font-bold flex items-center gap-2 mt-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>Full 4-Color Print — High-Res Diagrams</span>
            </div>
          </motion.div>

          {/* Card 3: PYQ Book */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-6 sm:p-8 rounded-lg bg-white border border-[#E4DCC8] hover:border-[#B08D57] shadow-xs flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#0F3D2E]/5 border border-[#E4DCC8] mb-6 shadow-xs">
                <img
                  src={bookPyqImg}
                  alt="MHT-CET Previous Year Questions PYQ Book Cover"
                  width={300}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2.5 py-1 rounded">
                COMPREHENSIVE PYQ BANK
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#14110F] mt-3 mb-2">
                MHT-CET 2026 PYQ Book
              </h3>
              <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed font-normal">
                1 comprehensive PYQ book, 50 questions per chapter, covering all subjects with past exam trends.
              </p>
            </div>
            <div className="pt-6 border-t border-[#F0ECE1] mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F3D2E]">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
                <span>50 Handpicked Questions / Chapter</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tiled Sub-Grid: Complete PCM/PCB Subject Series */}
        <div className="pt-8 border-t border-[#E4DCC8]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-editorial text-xl font-bold text-[#14110F]">
              Complete PCM & PCMB In-House Subject Series (7–9 Books)
            </h4>
            <span className="text-xs text-[#B08D57] font-semibold uppercase tracking-wider">
              Authored In-House
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tiledBooks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-md p-2 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="aspect-[3/4] w-full rounded overflow-hidden bg-[#F0ECE1] mb-2">
                  <img
                    src={item.src}
                    alt={item.title}
                    width={150}
                    height={200}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#14110F] truncate">{item.title}</div>
                <div className="text-[9px] text-[#14110F]/60 truncate">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterial;
