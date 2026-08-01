import React from 'react';
import { ShieldCheck, GraduationCap, Award, Compass } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const metrics = [
    { label: 'Years of Operating Rigor', value: '5+ Years', icon: Compass },
    { label: 'Students Mentored', value: '1000+', icon: GraduationCap },
    { label: 'Board Pass Percentage', value: '100%', icon: ShieldCheck },
    { label: 'MHT-CET Highest percentile', value: '99.1%', icon: Award },
  ];

  return (
    <div className="border-y border-[#E4DCC8] bg-[#F6F1E7]/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E4DCC8]">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#E4DCC8]/40 border border-[#B08D57]/30 flex items-center justify-center text-[#0F3D2E] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-editorial text-xl sm:text-2xl font-bold text-[#0F3D2E]">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[#14110F]/70">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
