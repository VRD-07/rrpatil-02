import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, CheckCircle2 } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import rPatilImg from '../assets/R_patil-removebg-preview.png';
import hbImg from '../assets/h_b.png';
import pPatilImg from '../assets/P_patil.jpeg';

export const FacultySection: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  // Star Faculty - Founder & Chief Pedagogy Head
  const starFaculty = {
    name: 'Prof. R. R. Patil',
    role: 'Founder, Director & Star Faculty',
    subject: 'Senior Head of Physics & Mathematics',
    photo: rPatilImg,
    degree: 'M.Tech & Senior Pedagogy Scholar',
    experience: '20+ Years Teaching Mastery',
    highlights: [
      'Personal Mentor to 12,500+ Alumni',
      'Produced 450+ Top 1000 JEE/NEET Rankers',
      'Author of Proprietary Problem Drills',
    ],
    bio: 'Renowned nationwide for transforming complex Physics and Mathematics concepts into intuitive, first-principles problem-solving algorithms. Under his personal guidance, hundreds of students achieve top 100 AIR rank distinctions each year.',
    quote: 'Teaching is not about delivering lectures; it is about building an unshakable conceptual foundation that performs under intense exam pressure.',
  };

  // 2 Senior Co-Faculties
  const coFaculties = [
    {
      name: 'Prof. Harshal Belapurkar',
      role: 'Head of Chemistry',
      photo: hbImg,
      degree: 'Ph.D. Organic Chemistry (IIT Bombay)',
      experience: '15+ Years Pedagogy Experience',
      subject: 'Organic & Physical Chemistry',
      bio: 'Master of reaction mechanisms & stoichiometry. Known for step-by-step analytical methods that turn Chemistry into a scoring superpower.',
    },
    {
      name: 'Prof. Prasad Patil',
      role: 'Head of Mathematics & NEET Biology',
      photo: pPatilImg,
      degree: 'M.Sc. Applied Mathematics & Life Sciences',
      experience: '14+ Years Pedagogy Experience',
      subject: 'Calculus, Geometry & NEET Life Sciences',
      bio: 'Specialist in speed optimization & NCERT line-by-line breakdown, enabling top scores in both Board exams and competitive entrances.',
    },
  ];

  return (
    <section id="faculty" className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#F0ECE1]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                OUR FACULTY & FOUNDER
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F]">
              Guided by Master Educators
            </h2>
          </div>
          <p className="text-sm text-[#14110F]/70 max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
            At Vidhata, every single lecture is conducted directly by our 3 senior master faculty members — ensuring unmatched mentorship depth.
          </p>
        </div>

        {/* FACULTY SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* STAR FACULTY FEATURED CARD (7 Columns on Desktop) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-[#0F3D2E] text-[#FAF7F0] p-6 sm:p-8 lg:p-10 border-2 border-[#B08D57] shadow-lg relative overflow-hidden group"
          >
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
                <div className="sm:col-span-5 flex justify-center">
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
          </motion.div>

          {/* 2 CO-FACULTIES CARDS (5 Columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {coFaculties.map((faculty, idx) => (
              <motion.div
                key={faculty.name}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.15 + idx * 0.1 }}
                className="flex-1 p-6 rounded-xl bg-white border border-[#E4DCC8] hover:border-[#B08D57] transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="w-16 h-16 rounded-lg object-cover object-top border-2 border-[#E4DCC8] group-hover:border-[#B08D57] transition-colors shrink-0 shadow-xs"
                    />
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
