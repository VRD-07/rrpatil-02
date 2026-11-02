import React from 'react';
import { GraduationCap, Star, CheckCircle2, Users } from 'lucide-react';
import Reveal from './Reveal';

import rPatilImg from '../assets/Faculties/R_patil-removebg-preview.png';
import hbImg from '../assets/Faculties/h_b.png';
import pPatilImg from '../assets/Faculties/P_patil.jpeg';
import mentoringSessionImg from '../assets/Faculties/pp_std_3.jpeg';

export const FacultySection = () => {
  const starFaculty = {
    name: 'Prof. R. R. Patil',
    role: 'Founder, Director & Star Faculty',
    subject: 'Senior Head of Physics & Mathematics',
    photo: rPatilImg,
    degree: 'Senior Instructor',
    experience: '20+ Years Teaching Mastery',
    highlights: [
      'Personal Mentor to thousands of Alumni',
      'Produced Top JEE/NEET Rankers',
      'Author of Proprietary Problem Drills',
    ],
    bio: 'Acting as a founder of the institute and a senior faculty, Prof. R. R. Patil has immense experience of more than 15 years and more.',
    quote: 'Teaching is not about delivering lectures; it is about building an unshakable conceptual foundation that performs under intense exam pressure.',
  };

  const coFaculties = [
    {
      name: 'Prof. Harshal Belapurkar',
      role: 'Head of Chemistry and Biology',
      photo: hbImg,
      degree: 'M.Pharma',
      experience: '10+ Years Pedagogy Experience',
      subject: 'Chemistry AND Biology',
      bio: 'Master of reaction mechanisms & stoichiometry. Known for step-by-step analytical methods that turn Chemistry into a scoring superpower.',
    },
    {
      name: 'Prof. Prasad Patil',
      role: 'Head of Mathematics & Physics',
      photo: pPatilImg,
      degree: 'M.Tech(NIT Calicut)',
      experience: '10+ Years Pedagogy and Corporate (Amazon) Experience ',
      subject: 'Mathematics and Physics',
      bio: 'Renowned teacher in the field of Mathematics, specially handling JEE-level Physics and Mathematics',
    },
  ];

  return (
    <section id="faculty" className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 1-on-1 Mentoring Visual Proof */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 pb-8 border-b border-[#F0ECE1]">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#B08D57]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                  OUR FACULTY & FOUNDER
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F]">
                Guided by Master Educators
              </h2>
              <p className="text-sm text-[#14110F]/70 max-w-2xl mt-3 leading-relaxed font-normal">
                At R. R. Patil, every single lecture is conducted directly by our 3 senior master faculty members — ensuring unmatched mentorship depth and zero sub-staff reliance.
              </p>
            </div>

            {/* 1-on-1 Mentoring Proof Badge */}
            <div className="lg:col-span-4 flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E4DCC8] shadow-xs">
              <img
                src={mentoringSessionImg}
                alt="1-on-1 faculty mentoring session with student"
                width={80}
                height={60}
                loading="lazy"
                className="w-20 h-14 rounded-lg object-cover object-center border border-[#E4DCC8] shrink-0"
              />
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#0F3D2E]">
                  <Users className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>1-on-1 Personal Mentoring</span>
                </div>
                <span className="text-[10px] text-[#14110F]/60 leading-tight block mt-0.5">
                  Every student receives individual doubt clearance and progress tracking.
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FACULTY SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* STAR FACULTY FEATURED CARD */}
          <Reveal delay={100} className="lg:col-span-7 h-full">
            <div className="h-full flex flex-col justify-between rounded-xl bg-[#0F3D2E] text-[#FAF7F0] p-6 sm:p-8 lg:p-10 border-2 border-[#B08D57] shadow-lg relative overflow-hidden group">
              {/* Background Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

              <div>
                {/* Star Ribbon & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B08D57] text-[#14110F] text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-[#14110F]" />
                    <span>STAR FACULTY & FOUNDER</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57] bg-[#0A2A20] px-3 py-1 rounded-md border border-[#B08D57]/30">
                    CHIEF MENTOR
                  </span>
                </div>

                {/* Layout for Photo & Info */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                  {/* Photo Frame */}
                  <div className="sm:col-span-5 flex flex-col items-center">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden bg-gradient-to-b from-[#B08D57]/30 to-[#0A2A20] border-2 border-[#B08D57] shadow-md flex items-center justify-center p-2">
                      <img
                        src={starFaculty.photo}
                        alt={starFaculty.name}
                        width={220}
                        height={220}
                        loading="lazy"
                        className="w-full h-full object-contain object-bottom drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#B08D57] border border-[#B08D57]/40 text-[9px] font-bold uppercase">
                        20+ YRS EXP
                      </div>
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <div className="sm:col-span-7 flex flex-col items-start text-left">
                    <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF7F0] mb-1">
                      {starFaculty.name}
                    </h3>
                    <div className="text-sm font-semibold uppercase tracking-wider text-[#B08D57] mb-2">
                      {starFaculty.role}
                    </div>
                    <div className="text-xs font-medium text-[#FAF7F0]/80 mb-4 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <span>{starFaculty.degree}</span>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 w-full pt-3 border-t border-[#B08D57]/30">
                      {starFaculty.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#FAF7F0]/90 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio Paragraph */}
                <p className="text-xs sm:text-sm text-[#FAF7F0]/85 leading-relaxed font-normal mb-6">
                  {starFaculty.bio}
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-4 rounded-lg bg-[#0A2A20] border-l-4 border-[#B08D57] text-xs italic text-[#FAF7F0]/90">
                "{starFaculty.quote}"
              </div>
            </div>
          </Reveal>

          {/* 2 CO-FACULTIES CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {coFaculties.map((faculty, idx) => (
              <Reveal key={faculty.name} delay={180 + idx * 100} className="flex-1">
                <div
                  className="h-full p-6 rounded-xl bg-white border border-[#E4DCC8] hover:border-[#B08D57] transition-all flex flex-col justify-between shadow-xs group"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-[#E4DCC8] group-hover:border-[#B08D57] transition-colors shadow-xs">
                        <img
                          src={faculty.photo}
                          alt={faculty.name}
                          width={64}
                          height={64}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] bg-[#F0ECE1] px-2.5 py-0.5 rounded">
                          {faculty.subject}
                        </span>
                        <h4 className="font-editorial text-xl font-bold text-[#14110F] mt-1">
                          {faculty.name}
                        </h4>
                        <div className="text-xs font-semibold text-[#0F3D2E]">
                          {faculty.role}
                        </div>
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="flex items-center justify-between text-xs text-[#14110F]/70 mb-3 pb-3 border-b border-[#F0ECE1]">
                      <span className="flex items-center gap-1 font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-[#B08D57]" />
                        {faculty.degree}
                      </span>
                      <span className="font-semibold text-[#B08D57]">
                        {faculty.experience}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                      {faculty.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
