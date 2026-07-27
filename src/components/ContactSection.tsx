import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Clock, GraduationCap } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ContactSectionProps {
  onOpenDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemo }) => {
  const reducedMotion = usePrefersReducedMotion();

  const whatsappUrl =
    'https://wa.me/918275280028?text=Hello%20Vidhata%20Academy%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20coaching%20batches.';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0F3D2E] text-[#FAF7F0] relative overflow-hidden">
      {/* Decorative brass accent lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: CTA Statement & Buttons */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0]/10 border border-[#B08D57]/40 text-[#B08D57] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>ADMISSIONS OPEN FOR 2026–27</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#FAF7F0] leading-[1.12] mb-6">
              Begin Your Journey with Purpose & Precision.
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F0]/80 max-w-xl font-normal leading-relaxed mb-8">
              Seats for our core batches are strictly capped at 20–25 students to maintain individual faculty oversight. Reserve a seat for a free evaluation and trial lecture today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#FAF7F0] text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider hover:bg-white active:scale-[0.98] transition-all shadow-sm min-h-[48px]"
              >
                <GraduationCap className="w-4 h-4 text-[#0F3D2E]" />
                <span>Book a Free Demo Class</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#25D366] text-[#14110F] text-xs font-semibold uppercase tracking-wider hover:bg-[#20bd5a] active:scale-[0.98] transition-all min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Admissions</span>
              </a>

              <a
                href="tel:+918275280028"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-md border border-[#FAF7F0]/30 hover:border-[#B08D57] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF7F0]/10 transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span>Call Center</span>
              </a>
            </div>

            <div className="text-xs text-[#FAF7F0]/60 font-normal">
              Direct Helpline: <span className="text-[#B08D57] font-semibold">+91 91729-15773</span> (Mon–Sat, 8:00 AM – 7:30 PM)
            </div>
          </motion.div>

          {/* Right Column: Address & Campus Info Card */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.1 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-lg bg-[#0A2A20] border border-[#B08D57]/30 space-y-6 shadow-md">
              <div className="border-b border-[#FAF7F0]/10 pb-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B08D57] block mb-1">
                  MAIN CAMPUS ADDRESS
                </span>
                <h3 className="font-editorial text-xl font-semibold text-[#FAF7F0]">
                  Vidhata Academic Center
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#FAF7F0]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span>
                    Plot 45, Knowledge Park Sector 3, Near City Library, Deccan Gymkhana, Pune, Maharashtra 411004
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FAF7F0]">Campus Operating Hours:</div>
                    <div className="opacity-80">Monday – Saturday: 7:30 AM – 8:00 PM</div>
                    <div className="opacity-80">Sunday: 9:00 AM – 2:00 PM (Diagnostic Tests Only)</div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="w-full h-32 rounded bg-[#0F3D2E] border border-[#FAF7F0]/10 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B08D57] mb-1">
                  Deccan Gymkhana Campus Map
                </span>
                <span className="text-[10px] text-[#FAF7F0]/60">
                  Landmark: 2 mins walk from Metro Station Gate 2
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
