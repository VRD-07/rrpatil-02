import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export const Announcement = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = data?.images || [];
  const hasMultipleImages = images.length > 1;

  // Auto-scrolling carousel with pause on hover
  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, images.length]);

  // If no active announcement exists in Sanity, render nothing
  if (!data || !data.images || data.images.length === 0) {
    return null;
  }

  const { title, description } = data;
  const activeIndex = currentIndex >= images.length ? 0 : currentIndex;
  const activeImage = images[activeIndex];

  return (
    <section className="w-full bg-[#FAF7F0] py-8 sm:py-14 relative overflow-hidden border-t border-[#E4DCC8]">
      {/* Subtle brass ambient glow matching Hero */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#B08D57]/10 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0F3D2E] text-[#FAF7F0] border-2 border-[#B08D57] shadow-2xl group flex flex-col justify-end"
          >
            {/* Luminous Ambient Backdrop Layer */}
            <img
              key={`backdrop-${activeIndex}`}
              src={activeImage.url}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-70 pointer-events-none transition-all duration-700 ease-in-out"
            />

            {/* Full-Spanning Main Image as the Complete Background */}
            <img
              key={`bg-${activeIndex}`}
              src={activeImage.url}
              alt={activeImage.alt || title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Fading Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-[#0F3D2E]/80 via-45% to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2E]/60 via-transparent to-transparent hidden md:block pointer-events-none z-10" />

            {/* Announcement Content Overlaid at Bottom */}
            <div className="relative z-20 p-6 sm:p-10 lg:p-14 max-w-4xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0]/15 border border-[#B08D57]/50 text-[#B08D57] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>SPECIAL ANNOUNCEMENT</span>
              </div>

              {/* Headline */}
              <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F0] leading-tight mb-3 drop-shadow-md">
                {title}
              </h2>

              {/* Description */}
              {description && (
                <p className="text-sm sm:text-base lg:text-lg text-[#FAF7F0]/90 leading-relaxed font-normal max-w-3xl whitespace-pre-line drop-shadow-sm">
                  {description}
                </p>
              )}
            </div>

            {/* Minimal Dot Indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 z-30 flex items-center gap-2 px-3 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/15 shadow-lg">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      index === activeIndex
                        ? 'w-6 h-2 bg-[#B08D57]'
                        : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Announcement;
