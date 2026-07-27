import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';

// Code-split below-the-fold components for minimal initial bundle size & fast LCP
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const CoursesSection = lazy(() =>
  import('./components/CoursesSection').then((m) => ({ default: m.CoursesSection }))
);
const ResultsSection = lazy(() =>
  import('./components/ResultsSection').then((m) => ({ default: m.ResultsSection }))
);
const FacultySection = lazy(() =>
  import('./components/FacultySection').then((m) => ({ default: m.FacultySection }))
);
const TestimonialsSection = lazy(() =>
  import('./components/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const DemoModal = lazy(() =>
  import('./components/DemoModal').then((m) => ({ default: m.DemoModal }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

// Minimal lightweight loader for Suspense fallback
const SectionLoader: React.FC = () => (
  <div className="py-16 flex items-center justify-center bg-[#FAF7F0]">
    <div className="w-6 h-6 rounded-full border-2 border-[#B08D57] border-t-transparent animate-spin" />
  </div>
);

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const handleOpenDemo = (courseName?: string) => {
    setSelectedCourse(courseName);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
    setSelectedCourse(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#14110F] font-sans antialiased">
      {/* Navbar Header */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Above-the-fold Hero Section */}
      <main>
        <HeroSection onOpenDemo={() => handleOpenDemo()} />
        <TrustStrip />

        {/* Below-the-fold Code-split Sections */}
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ResultsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CoursesSection onOpenDemo={(course) => handleOpenDemo(course)} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FacultySection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection onOpenDemo={() => handleOpenDemo()} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      {/* Demo Booking Modal */}
      <Suspense fallback={null}>
        <DemoModal
          isOpen={demoModalOpen}
          onClose={handleCloseDemo}
          initialCourse={selectedCourse}
        />
      </Suspense>
    </div>
  );
}

export default App;
