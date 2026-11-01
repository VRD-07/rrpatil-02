import React from 'react';
import { Monitor, Edit3, BarChart2 } from 'lucide-react';

export const AssessmentSystem = () => {
  return (
    <section id="assessment" className="py-16 sm:py-24 bg-[#0F3D2E] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Decorative Radial Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Large Numeral & Testing Structure */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                DIAGNOSTIC ANALYTICS
              </span>
            </div>

            {/* Large Numeral Callout */}
            <div className="mb-6">
              <div className="font-editorial text-6xl sm:text-7xl font-bold tracking-tight text-[#B08D57]">
                18,500+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAF7F0]/80 mt-1">
                MCQs across our testing platform
              </div>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF7F0] mb-4">
              Rigorous Assessment & Student Tracking
            </h2>

            <p className="text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed font-normal mb-8">
              Every student's weekly progress is recorded and analyzed to ensure no one gets lost in the batch.
            </p>

            {/* Two Tests Breakdown */}
            <div className="space-y-4 w-full">
              {/* Test 1 */}
              <div className="p-4 rounded-lg bg-[#0A2A20] border border-[#B08D57]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#B08D57] text-[#14110F] flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#FAF7F0] mb-1">
                    1 Domain Test (via website/app)
                  </h4>
                  <p className="text-xs text-[#FAF7F0]/75 leading-relaxed font-normal">
                    Weekly digital MCQ assessment with topic-wise speed & accuracy metrics.
                  </p>
                </div>
              </div>

              {/* Test 2 */}
              <div className="p-4 rounded-lg bg-[#0A2A20] border border-[#B08D57]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#B08D57] text-[#14110F] flex items-center justify-center shrink-0">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#FAF7F0] mb-1">
                    1 Theory Test (written paper)
                  </h4>
                  <p className="text-xs text-[#FAF7F0]/75 leading-relaxed font-normal">
                    Weekly subjective exam focusing on board answer presentation & marking scheme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Mock Diagnostic Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-lg bg-[#0A2A20] border border-[#B08D57]/40 shadow-xl relative">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#FAF7F0]/10">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#B08D57]" />
                  <span className="font-editorial text-base font-bold text-[#FAF7F0]">
                    Weekly Diagnostic Analytics
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#B08D57] text-[#14110F] text-[10px] font-extrabold uppercase">
                  ACTIVE PLATFORM
                </span>
              </div>

              {/* Mock Metric Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-lg bg-[#0F3D2E] border border-[#B08D57]/30">
                  <div className="text-[10px] text-[#B08D57] font-bold uppercase">Physics Accuracy</div>
                  <div className="font-editorial text-2xl font-bold text-[#FAF7F0]">94.2%</div>
                  <div className="text-[10px] text-[#FAF7F0]/60 mt-0.5">Rotational Dynamics</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0F3D2E] border border-[#B08D57]/30">
                  <div className="text-[10px] text-[#B08D57] font-bold uppercase">Math Speed Index</div>
                  <div className="font-editorial text-2xl font-bold text-[#FAF7F0]">1.2m / Q</div>
                  <div className="text-[10px] text-[#FAF7F0]/60 mt-0.5">Integration Calculus</div>
                </div>
              </div>

              {/* Mock Graph Lines */}
              <div className="p-4 rounded-lg bg-[#0F3D2E] border border-[#FAF7F0]/10 mb-4">
                <div className="flex justify-between text-xs text-[#FAF7F0]/70 mb-2">
                  <span>Weekly Score Progression</span>
                  <span className="text-[#B08D57] font-bold">Top 5% Rank</span>
                </div>
                {/* Visual Bars */}
                <div className="flex items-end gap-2 h-16 pt-2">
                  <div className="w-1/5 bg-[#B08D57]/30 rounded-t h-8" />
                  <div className="w-1/5 bg-[#B08D57]/50 rounded-t h-10" />
                  <div className="w-1/5 bg-[#B08D57]/70 rounded-t h-12" />
                  <div className="w-1/5 bg-[#B08D57]/90 rounded-t h-14" />
                  <div className="w-1/5 bg-[#B08D57] rounded-t h-16 shadow-xs" />
                </div>
              </div>

              <div className="text-[11px] text-[#FAF7F0]/60 text-center italic">
                * Weekly parent SMS report sent every Sunday after test evaluations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSystem;
