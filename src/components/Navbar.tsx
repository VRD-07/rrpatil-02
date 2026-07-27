import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Results', href: '#results' },
    { label: 'Courses', href: '#courses' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F0]/95 border-b border-[#F0ECE1] shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#0F3D2E] text-[#FAF7F0] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              <img src="src/assets/logo.png" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#14110F] group-hover:text-[#0F3D2E] transition-colors">
                R. R. Patil Coaching Classes
              </span>
              <span className="h-[2px] w-full bg-[#B08D57] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-[#14110F]/80 hover:text-[#0F3D2E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#B08D57] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] active:scale-[0.98] transition-all shadow-xs min-h-[44px]"
            >
              <span>Book Demo Class</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B08D57]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-[#14110F] hover:text-[#0F3D2E] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-[#F0ECE1]/40 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FAF7F0] border-b border-[#F0ECE1] px-4 pt-3 pb-6 shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-[#14110F] py-2 border-b border-[#F0ECE1]/60 hover:text-[#0F3D2E] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B08D57] text-xs">→</span>
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#0F3D2E] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider min-h-[44px] shadow-xs active:bg-[#0A2A20]"
                >
                  <GraduationCap className="w-4 h-4 text-[#B08D57]" />
                  <span>Book Free Demo Class</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
