import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Award, ShieldCheck, MapPin } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// ES Module imports for ground-truth award handover & dusk campus exterior photos
import verifiedResultsImg from '../assets/Awards/award_02.jpeg';
import duskExteriorImg from '../assets/Infra/building_front.jpeg';

export const WhyChooseUs: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  const pillars = [
    {
      icon: CheckCircle2,
      title: 'Real, Verified Results',
      desc: 'Tied directly to actual institute toppers with 100% verified official scorecards.',
      link: '#results',
      photo: verifiedResultsImg,
      badge: 'VERIFIED SCORECARDS',
    },
    {
      icon: BookOpen,
      title: 'Our Own Study Material',
      desc: 'Proprietary in-house books authored specifically by our senior faculty.',
      link: '#study-material',
    },
    {
      icon: Award,
      title: 'Weekly Testing & Tracking',
      desc: '18,500+ MCQ testing platform with weekly written and digital diagnostic analysis.',
      link: '#assessment',
    },
    {
      icon: ShieldCheck,
      title: 'Safe, Structured Campus',
      desc: 'Audio-enabled CCTV coverage across campus for safety and disciplined study focus.',
      link: '#facilities',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              INSTITUTE DISTINCTIONS
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-3xl">
            Why Families Trust Us
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            Purely affirmative, proven principles that make R. R. Patil Coaching Classes Kopargaon’s preferred choice.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.08 }}
                className="bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Inset for Card 1 */}
                  {item.photo ? (
                    <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-[#0F3D2E]/10 mb-4">
                      <img
                        src={item.photo}
                        alt="Verified merit recognition award presentation"
                        width={300}
                        height={170}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[8px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#B08D57]" />
                    </div>
                  )}

                  <h3 className="font-editorial text-xl font-bold text-[#14110F] mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#14110F]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] hover:text-[#B08D57] transition-colors gap-1 pt-4 border-t border-[#F0ECE1]"
                >
                  <span>Learn More</span>
                  <span className="text-[#B08D57] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Campus Dusk Exterior Banner */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-xl overflow-hidden bg-[#0F3D2E] text-[#FAF7F0] border border-[#B08D57] shadow-md flex flex-col md:flex-row items-center justify-between"
        >
          {/* Exterior Dusk Image */}
          <div className="relative w-full md:w-1/2 aspect-[16/9] md:aspect-auto md:h-64 overflow-hidden">
            <img
              src={duskExteriorImg}
              alt="R. R. Patil Academy lit-up campus building at dusk"
              width={680}
              height={306}
              loading="lazy"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F3D2E]/40 to-[#0F3D2E] hidden md:block" />
          </div>

          {/* Text Content */}
          <div className="p-6 sm:p-8 md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#B08D57]" />
              <span className="text-xs font-bold text-[#B08D57] uppercase tracking-wider">
                MAIN KOPARGAON CAMPUS
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold mb-2">
              State-of-the-Art Academic Facility
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed font-normal mb-4">
              Fully lit-up campus with high-visibility signage, dedicated study rooms, and complete audio-CCTV security for late evening study sessions.
            </p>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-[#B08D57] hover:bg-[#c4a169] text-[#14110F] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Visit Our Campus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
