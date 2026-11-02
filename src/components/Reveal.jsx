import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal Component
 * Smoothly reveals and pops elements into view when they enter the viewport.
 * Uses native IntersectionObserver + hardware-accelerated CSS transforms.
 * 
 * Easy to explain in oral exam / viva:
 * - `useRef` attaches to the DOM node.
 * - `useEffect` initializes the browser's native `IntersectionObserver`.
 * - When `entry.isIntersecting` is true, state `isVisible` flips to true.
 * - CSS transition smoothly animates opacity, translateY, and scale ("reveal & pop").
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 700,
  direction = 'up',
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Fallback if browser doesn't support IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate once
        }
      },
      { threshold }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, [threshold]);

  // Initial hidden transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8 scale-[0.97]';
      case 'down':
        return '-translate-y-8 scale-[0.97]';
      case 'left':
        return 'translate-x-8 scale-[0.97]';
      case 'right':
        return '-translate-x-8 scale-[0.97]';
      case 'none':
        return 'scale-95';
      default:
        return 'translate-y-8 scale-[0.97]';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
