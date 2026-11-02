import React from 'react';
import { Laptop, BookOpen, ShieldCheck, Shirt } from 'lucide-react';
import Reveal from './Reveal';

import labMainImg from '../assets/Infra/comp_lab_1.jpeg';
import labAngleImg from '../assets/Infra/comp_lab_3.jpeg';
import studyHallImg from '../assets/Infra/study_1.jpeg';
import classroomSafetyImg from '../assets/Infra/class_02.jpeg';
import uniformGroupImg from '../assets/rrp_tshirt.jpeg';

export const Facilities = () => {
  return (
    <section id="facilities" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                CAMPUS INFRASTRUCTURE
              </span>
              <span className="h-px w-6 bg-[#B08D57]" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-3xl">
              Campus Infrastructure & Safety
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
              Real classroom, lab, study hall, and safety environment designed for student success.
            </p>
          </div>
        </Reveal>

        {/* 4 Photo-Based Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Computer Lab */}
          <Reveal delay={0} className="h-full">
            <div className="h-full bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F3D2E]/10">
                  <img
                    src={labMainImg}
                    alt="Computer Lab showing rows of monitors and front smartboard"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Secondary Thumbnail Inset */}
                  <div className="absolute bottom-2 right-2 w-16 h-12 rounded border border-white/80 overflow-hidden shadow-xs">
                    <img
                      src={labAngleImg}
                      alt="Computer Lab alternate angle"
                      width={64}
                      height={48}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                    <Laptop className="w-3 h-3 text-[#B08D57]" />
                    <span>AI & COMP LAB</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-xl font-bold text-[#14110F] mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    Computer & AI Lab
                  </h3>
                  <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                    Wide, depth-showing lab with rows of workstations equipped for AI-ML coursework and online diagnostic practice.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Dedicated Study Room */}
          <Reveal delay={80} className="h-full">
            <div className="h-full bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F3D2E]/10">
                  <img
                    src={studyHallImg}
                    alt="Vidhata quiet dedicated study hall space"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-[#B08D57]" />
                    <span>SELF-STUDY SPACE</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-xl font-bold text-[#14110F] mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    Dedicated Study Hall
                  </h3>
                  <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                    Our study space doubles as our computer lab — quiet, air-conditioned, and always available for self-study and revision.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Audio-CCTV Safety */}
          <Reveal delay={160} className="h-full">
            <div className="h-full bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F3D2E]/10">
                  <img
                    src={classroomSafetyImg}
                    alt="Real classroom session monitored under CCTV supervision"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#B08D57]" />
                    <span>CCTV & SAFETY</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-xl font-bold text-[#14110F] mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    Audio-CCTV Safety
                  </h3>
                  <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                    Audio-enabled CCTV coverage across every classroom and hall for complete student safety and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Institute Uniform */}
          <Reveal delay={240} className="h-full">
            <div className="h-full bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F3D2E]/10">
                  <img
                    src={uniformGroupImg}
                    alt="Students seated in class wearing teal RR-branded polo uniform"
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                    <Shirt className="w-3 h-3 text-[#B08D57]" />
                    <span>INSTITUTE UNIFORM</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-editorial text-xl font-bold text-[#14110F] mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    Institute Uniform
                  </h3>
                  <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                    Teal RR-branded polo shirts included in fee structure — fosters discipline and unity across all batches.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
