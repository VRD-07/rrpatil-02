import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';

// Code-split below-the-fold components for minimal initial bundle size & fast LCP
const WhyChooseUs = lazy(() =>
  import('./components/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs }))
);
const ResultsSection = lazy(() =>
  import('./components/ResultsSection').then((m) => ({ default: m.ResultsSection }))
);
const ProgramsAndBatches = lazy(() =>
  import('./components/ProgramsAndBatches').then((m) => ({ default: m.ProgramsAndBatches }))
);
const StudyMaterial = lazy(() =>
  import('./components/StudyMaterial').then((m) => ({ default: m.StudyMaterial }))
);
const AssessmentSystem = lazy(() =>
  import('./components/AssessmentSystem').then((m) => ({ default: m.AssessmentSystem }))
);
const Facilities = lazy(() =>
  import('./components/Facilities').then((m) => ({ default: m.Facilities }))
);
const FacultySection = lazy(() =>
  import('./components/FacultySection').then((m) => ({ default: m.FacultySection }))
);
const BeyondAcademics = lazy(() =>
  import('./components/BeyondAcademics').then((m) => ({ default: m.BeyondAcademics }))
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
const ChatWidget = lazy(() =>
  import('./components/ChatWidget').then((m) => ({ default: m.ChatWidget }))
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

        {/* SECTION A: Why Choose Us (AFTER TrustStrip, BEFORE ResultsSection) */}
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>

        {/* Results Section */}
        <Suspense fallback={<SectionLoader />}>
          <ResultsSection />
        </Suspense>

        {/* SECTION B: Programs & Batches (AFTER ResultsSection) */}
        <Suspense fallback={<SectionLoader />}>
          <ProgramsAndBatches onOpenDemo={(course) => handleOpenDemo(course)} />
        </Suspense>

        {/* SECTION C: Study Material (AFTER ProgramsAndBatches) */}
        <Suspense fallback={<SectionLoader />}>
          <StudyMaterial />
        </Suspense>

        {/* SECTION D: Assessment System (AFTER StudyMaterial) */}
        <Suspense fallback={<SectionLoader />}>
          <AssessmentSystem />
        </Suspense>

        {/* SECTION E: Facilities (AFTER AssessmentSystem, BEFORE FacultySection) */}
        <Suspense fallback={<SectionLoader />}>
          <Facilities />
        </Suspense>

        {/* Faculty Section */}
        <Suspense fallback={<SectionLoader />}>
          <FacultySection />
        </Suspense>

        {/* SECTION F: Beyond Academics (AFTER FacultySection, BEFORE Testimonials) */}
        <Suspense fallback={<SectionLoader />}>
          <BeyondAcademics />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<SectionLoader />}>
          <ContactSection onOpenDemo={() => handleOpenDemo()} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      {/* Floating AI Chatbot Widget */}
      <Suspense fallback={null}>
        <ChatWidget />
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
