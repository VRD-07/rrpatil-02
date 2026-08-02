import React from 'react';

// ES Module imports for ground-truth institute assets
import rPatilImg from '../assets/Faculties/R_patil-removebg-preview.png';
import pPatilImg from '../assets/Faculties/P_patil.jpeg';
import ccImg from '../assets/learn_01.png';
import ccImg2 from '../assets/Infra/class.jpeg';
import compLab from '../assets/Infra/comp_lab_2.jpeg';
import foundBook from '../assets/Books/foundation_book.jpeg';
import rakeshAward from '../assets/Awards/award_06.jpeg';
import oneOnOne from '../assets/Faculties/pp_std_2.jpeg';
import turf from '../assets/turf.jpeg';
import bio from '../assets/Books/Biology.jpeg';
import trip from '../assets/cult_trip.jpeg';
import studyRoom from '../assets/Infra/study_3.jpeg';

export const HeroPhotoWall: React.FC = () => {
  // Column 1 Photos (Scrolls UP - 40s)
  const column1Photos = [
    { src: ccImg2, alt: 'Faculty conducting whiteboard problem-solving session', pos: 'object-center', tag: 'Interactive Classroom' },
    { src: foundBook, alt: '10th Foundation Book tailored in-house', pos: 'object-center', tag: '10th Foundation' },
    { src: compLab, alt: 'Computer Lab', pos: 'object-center', tag: 'Computer Lab' },
    { src: ccImg, alt: 'library study hall session', pos: 'object-center', tag: 'Uniformed classes' },
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400&auto=format&fit=crop', alt: 'Diagnostic testing room', pos: 'object-center', tag: 'Weekly Test Lab' },
  ];

  // Column 2 Photos (FEATURED CENTER COLUMN - Scrolls DOWN - 55s)
  const column2Photos = [
    { src: rakeshAward, alt: 'Kunal Kharat - JEE AIR-1928', pos: 'object-top', tag: 'JEE-Topper' },
    {
      isFeatured: true,
      src: rPatilImg,
      alt: 'Prof. R. R. Patil - Founder & Director',
      pos: 'object-contain object-bottom',
      name: 'Prof. R. R. Patil',
      role: 'Founder & Director',
      tag: '⭐ CHIEF MENTOR',
    },
    { src: pPatilImg, alt: 'Prof. Prasad Patil - Head of Mathematics', pos: 'object-top', tag: 'Maths Faculty' },
    { src: oneOnOne, alt: 'One-on-one interactive sessions', pos: 'object-center', tag: '1-on-1 session' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop', alt: 'Digital Testing & Computer Lab', pos: 'object-center', tag: 'AI & Digital Lab' },
  ];

  // Column 3 Photos (Scrolls UP - 45s, Desktop visible)
  const column3Photos = [
    { src: trip, alt: 'Monsoon outing', pos: 'object-top', tag: 'Monsoon Outing' },
    { src: studyRoom, alt: 'Big Study Rooms', pos: 'object-center', tag: 'Study Room' },
    { src: bio, alt: 'In-house Study Material books', pos: 'object-center', tag: 'Proprietary Books' },
    { src: turf, alt: 'Monthly Turf visits', pos: 'object-center', tag: 'Beyond Academics' },
    { src: ccImg2, alt: 'Interactive lecture discussion', pos: 'object-top', tag: 'Small Batches' },
  ];

  // Duplicate arrays for infinite seamless loop
  const col1Loop = [...column1Photos, ...column1Photos];
  const col2Loop = [...column2Photos, ...column2Photos];
  const col3Loop = [...column3Photos, ...column3Photos];

  return (
    <div className="photo-wall-container relative w-full h-[460px] sm:h-[540px] overflow-hidden rounded-xl bg-gradient-to-b from-[#FAF7F0] via-[#F0ECE1]/50 to-[#FAF7F0] p-2 border border-[#E4DCC8] shadow-xs [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 h-full">
        {/* COLUMN 1 (Scroll UP - 40s) */}
        <div className="relative overflow-hidden h-full">
          <div className="animate-scroll-up-1 flex flex-col gap-3">
            {col1Loop.map((item, idx) => (
              <div
                key={`c1-${idx}`}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-[#E4DCC8] shadow-xs shrink-0 group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={240}
                  height={180}
                  className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-500`}
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 (FEATURED CENTER COLUMN - Scroll DOWN - 55s) */}
        <div className="relative overflow-hidden h-full">
          <div className="animate-scroll-down-2 flex flex-col gap-3">
            {col2Loop.map((item, idx) => {
              if (item.isFeatured) {
                return (
                  <div
                    key={`c2-feat-${idx}`}
                    className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-b from-[#B08D57]/30 via-[#0F3D2E] to-[#0A2A20] border-2 border-[#B08D57] shadow-lg shrink-0 group p-2 flex flex-col justify-between"
                  >
                    {/* Hand-drawn Gold Arrow Annotation */}
                    <div className="absolute -top-1 right-2 flex items-center gap-1 z-20 pointer-events-none">
                      <svg
                        className="w-10 h-10 text-[#B08D57] -rotate-12 animate-pulse"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M 20 80 Q 50 20 85 45 M 85 45 L 70 40 M 85 45 L 75 55"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-editorial text-[10px] font-bold text-[#B08D57] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#B08D57]/40 shadow-xs whitespace-nowrap">
                        Founder & Director
                      </span>
                    </div>

                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                      <img
                        src={item.src}
                        alt={item.alt}
                        width={260}
                        height={340}
                        className={`w-full h-full ${item.pos} drop-shadow-md group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>

                    {/* Bottom Founder Label */}
                    <div className="bg-[#0A2A20]/95 backdrop-blur-xs p-2.5 rounded-md border border-[#B08D57]/40 text-center">
                      <span className="font-editorial text-sm font-bold text-[#FAF7F0] block">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-semibold text-[#B08D57] uppercase tracking-wider block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={`c2-${idx}`}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-[#E4DCC8] shadow-xs shrink-0 group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={240}
                    height={180}
                    className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3 (Scroll UP - 45s, Desktop Only) */}
        <div className="hidden lg:block relative overflow-hidden h-full">
          <div className="animate-scroll-up-3 flex flex-col gap-3">
            {col3Loop.map((item, idx) => (
              <div
                key={`c3-${idx}`}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#white] border border-[#E4DCC8] shadow-xs shrink-0 group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={240}
                  height={180}
                  className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-500`}
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPhotoWall;
