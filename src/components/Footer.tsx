import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14110F] text-[#FAF7F0] pt-16 pb-12 border-t border-[#B08D57]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F0]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-[#FAF7F0] text-[#0F3D2E] flex items-center justify-center font-editorial font-bold text-base">
                V
              </div>
              <span className="font-editorial text-xl font-bold tracking-tight text-[#FAF7F0]">
                VIDHATA ACADEMY
              </span>
            </div>
            <p className="text-xs text-[#FAF7F0]/70 leading-relaxed font-normal max-w-sm mb-6">
              Vidhata Academy is a premier academic coaching institute specializing in Board Examination mastery and JEE/NEET competitive foundation. Built on rigor, discipline, and conceptual clarity.
            </p>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F3D2E] border border-[#B08D57]/40 text-[#B08D57] text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Batch 03 Seats: 6 Remaining</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B08D57] mb-4">
              ACADEMIC SECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F0]/80">
              <li>
                <a href="#about" className="hover:text-[#B08D57] transition-colors">
                  Educational Philosophy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#B08D57] transition-colors">
                  Foundation & Entrance Curriculums
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[#B08D57] transition-colors">
                  Examination Outcomes & Stats
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-[#B08D57] transition-colors">
                  Scholar Pedagogy Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#B08D57] transition-colors">
                  Alumni & Parent Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B08D57] mb-4">
              CAMPUS & INQUIRIES
            </h4>
            <div className="space-y-2 text-xs text-[#FAF7F0]/80 leading-relaxed">
              <p>Knowledge Park 3, Deccan Gymkhana, Pune, MH 411004</p>
              <p>Inquiry Email: <span className="text-[#FAF7F0]">admissions@vidhataacademy.demo</span></p>
              <p>Helpline: <span className="text-[#FAF7F0]">+91 (020) 2450-8900</span></p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F0]/50 gap-4">
          <div>
            © 2026 VIDHATA ACADEMY. Portfolio Demo Template. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#B08D57] hover:text-[#FAF7F0] transition-colors uppercase tracking-wider font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
