import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Announcement from './components/Announcement';
import TrustStrip from './components/TrustStrip';
import WhyChooseUs from './components/WhyChooseUs';
import ResultsSection from './components/ResultsSection';
import MemoryTribute from './components/MemoryTribute';
import ProgramsAndBatches from './components/ProgramsAndBatches';
import StudyMaterial from './components/StudyMaterial';
import AssessmentSystem from './components/AssessmentSystem';
import Facilities from './components/Facilities';
import FacultySection from './components/FacultySection';
import BeyondAcademics from './components/BeyondAcademics';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { fetchLatestAnnouncement } from './sanity/client';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [announcement, setAnnouncement] = useState(null);

  // Fetch optional announcement from Sanity CMS
  useEffect(() => {
    fetchLatestAnnouncement()
      .then((data) => {
        if (data) {
          setAnnouncement(data);
        }
      })
      .catch((err) => {
        console.warn('[App] Could not load announcement:', err);
      });
  }, []);

  const handleOpenDemo = (courseName = '') => {
    setSelectedCourse(courseName);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
    setSelectedCourse('');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#14110F] font-sans antialiased">
      {/* Navbar Header */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenDemo={() => handleOpenDemo()} />

        {/* Announcement (if active in Sanity CMS) */}
        <Announcement data={announcement} />

        {/* Trust Strip Metrics */}
        <TrustStrip />

        {/* SECTION A: Why Choose Us */}
        <WhyChooseUs />

        {/* Results Section & Verified Scorecards */}
        <ResultsSection />

        {/* Dedicated Memorial Tribute Section: Late Kartik Sonawane */}
        <MemoryTribute />

        {/* SECTION B: Programs & Batches Schedule */}
        <ProgramsAndBatches onOpenDemo={(course) => handleOpenDemo(course)} />

        {/* SECTION C: Study Material */}
        <StudyMaterial />

        {/* SECTION D: Assessment System */}
        <AssessmentSystem />

        {/* SECTION E: Campus Facilities */}
        <Facilities />

        {/* Faculty Section */}
        <FacultySection />

        {/* SECTION F: Beyond Academics */}
        <BeyondAcademics />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chatbot Widget */}
      <ChatWidget />

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        initialCourse={selectedCourse}
      />
    </div>
  );
}

export default App;
