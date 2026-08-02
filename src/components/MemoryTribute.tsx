import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Ground-truth memorial photo asset
import kartikMemImg from '../assets/kartik_mem.jpg';

/*
  =============================================================================
  IMPORTANT CLIENT VERIFICATION NOTICE:
  Confirm with the client that Kartik Sonawane's family has been consulted 
  and is comfortable with a public tribute on the website.
  =============================================================================
*/

export const MemoryTribute: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const memorialData = {
    name: 'Kartik Sonawane',
    batch: '12th Science HSC Batch (2024–2025)',
    photo: kartikMemImg,
    quote: 'A bright, humble soul whose quiet dedication, warm smile, and curiosity touched everyone at R. R. Patil Academy. Though taken from us during his 12th standard, his memory remains an eternal light in our classrooms.',
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. QUIET FLOATING TAB — BOTTOM-LEFT CORNER (OPPOSITE CHATWIDGET) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F0] hover:bg-white text-[#14110F]/70 hover:text-[#14110F] border border-[#E4DCC8] hover:border-[#B08D57]/50 shadow-xs transition-all duration-300 cursor-pointer select-none"
          aria-label="In Loving Memory — Quiet Tribute"
        >
          <Flame
            className={`w-3.5 h-3.5 text-[#B08D57] transition-opacity ${
              reducedMotion ? 'opacity-80' : 'animate-pulse opacity-80 group-hover:opacity-100'
            }`}
          />
          <span className="text-[11px] font-medium tracking-wide">In Memory</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 2. EXPANDED QUIET MEMORIAL CARD MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-2xs"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF7F0] border border-[#E4DCC8] rounded-xl max-w-sm w-full p-6 shadow-lg text-center relative overflow-hidden"
            >
              {/* Soft Faded & Blurred Photo Background Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15 blur-md pointer-events-none scale-110"
                style={{ backgroundImage: `url(${memorialData.photo})` }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 p-1 rounded-full text-[#14110F]/40 hover:text-[#14110F] hover:bg-[#F0ECE1] transition-colors cursor-pointer z-20"
                aria-label="Close memorial tribute"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Card Contents Layered Z-10 */}
              <div className="relative z-10">
                {/* Top Diya Emblem */}
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/30 flex items-center justify-center shadow-xs">
                    <Flame className="w-4 h-4 text-[#B08D57]" />
                  </div>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-widest text-[#B08D57] block mb-3">
                  IN RESPECTFUL MEMORY
                </span>

                {/* Center Circle Face Thumbnail */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-3.5 bg-white border-2 border-[#B08D57]/70 overflow-hidden shadow-md">
                  <img
                    src={memorialData.photo}
                    alt={memorialData.name}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Student Name */}
                <h3 className="font-editorial text-2xl font-bold text-[#14110F] mb-0.5">
                  {memorialData.name}
                </h3>

                {/* Batch / Years Line */}
                <div className="text-xs text-[#14110F]/70 font-semibold mb-4">
                  {memorialData.batch}
                </div>

                {/* Remembrance Quote */}
                <div className="text-xs text-[#14110F]/85 italic leading-relaxed p-3.5 rounded-lg bg-white/80 border-l-2 border-[#B08D57]/60 text-center font-normal my-3 shadow-2xs">
                  "{memorialData.quote}"
                </div>

                {/* Closing Respect Banner */}
                <div className="pt-3 border-t border-[#E4DCC8]/60 mt-4">
                  <span className="text-[10px] text-[#14110F]/60 font-semibold tracking-wider uppercase block">
                    Always remembered by the R. R. Patil Academy Family
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MemoryTribute;
