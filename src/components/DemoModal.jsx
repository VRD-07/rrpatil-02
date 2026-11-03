import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, BookOpen, Users, Sparkles, MessageSquare } from 'lucide-react';

const courseOptionsByGrade = {
  'Class 6th – 7th': ['6th–10th Regular Tuition'],
  'Class 8th – 10th': ['6th–10th Regular Tuition', '8th/9th/10th Foundation Batch'],
  'Class 11th Science': [
    '11th–12th Regular Board Batch',
    '11th–12th Competitive (External JEE/NEET/CET) Batch',
  ],
  'Class 12th Science': [
    '11th–12th Regular Board Batch',
    '11th–12th Competitive (External JEE/NEET/CET) Batch',
  ],
  'College / Tech Aspirant': ['AI-ML Bootcamp & Placement Assistance'],
};

export const DemoModal = ({
  isOpen,
  onClose,
  initialCourse = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Class 11th Science',
    course: '11th–12th Regular Board Batch',
    customMessage: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Synchronize initial course prop when passed from section CTA buttons
  useEffect(() => {
    if (initialCourse) {
      let matchedGrade = 'Class 11th Science';
      for (const [g, courses] of Object.entries(courseOptionsByGrade)) {
        if (
          courses.some(
            (c) =>
              c.toLowerCase().includes(initialCourse.toLowerCase()) ||
              initialCourse.toLowerCase().includes(c.toLowerCase())
          )
        ) {
          matchedGrade = g;
          break;
        }
      }
      setFormData((prev) => ({
        ...prev,
        grade: matchedGrade,
        course: initialCourse,
      }));
    }
  }, [initialCourse]);

  // Handle dynamic standard/grade change
  const handleGradeChange = (newGrade) => {
    const availableCourses = courseOptionsByGrade[newGrade] || [];
    setFormData((prev) => ({
      ...prev,
      grade: newGrade,
      course: availableCourses[0] || '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send to Backend
    fetch('http://localhost:5000/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.error) {
          throw new Error(data.details || data.error || 'Server error');
        }
        return data;
      })
      .then((data) => {
        console.log('Backend Success:', data);
        alert('Thank you! Your demo class is booked (ID: ' + data.bookingId + ').');
        onClose(); // Close modal
      })
      .catch((err) => {
        console.error('Backend Error:', err);
        alert('Database error: ' + err.message);
      });

    const messageLines = [
      `Hello R. R. Patil Academy,`,
      `I would like to book a Free Demo & Evaluation Class.`,
      ``,
      `*Student Details:*`,
      `• Student Name: ${formData.name}`,
      `• Contact Number: ${formData.phone}`,
      `• Current Grade: ${formData.grade}`,
      `• Target Program: ${formData.course}`,
    ];

    if (formData.customMessage.trim()) {
      messageLines.push(`• Custom Note / Questions: ${formData.customMessage.trim()}`);
    }

    messageLines.push(``);
    messageLines.push(`Please confirm our demo session slot and counselor call.`);

    const message = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/918275280028?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const currentAvailableCourses = courseOptionsByGrade[formData.grade] || [
    '6th–10th Regular Tuition',
    '8th/9th/10th Foundation Batch',
    '11th–12th Regular Board Batch',
    '11th–12th Competitive (External JEE/NEET/CET) Batch',
    'AI-ML Bootcamp & Placement Assistance',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#14110F]/70 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FAF7F0] border border-[#E4DCC8] rounded-xl shadow-2xl p-6 sm:p-8 z-10 transition-transform duration-200">
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-[#14110F]/60 hover:text-[#0F3D2E] rounded-md hover:bg-[#E4DCC8]/50 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                FREE EVALUATION & DEMO CLASS
              </span>
            </div>
            
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#14110F] mb-1.5">
              Book Your Demo Class
            </h3>
            
            <p className="text-xs text-[#14110F]/75 leading-relaxed mb-5 font-normal">
              Experience direct dual-faculty teaching (Prof. R. R. Patil, Prof. Harshal Belapurkar & Prof. Prasad Patil) with zero sub-staff reliance.
            </p>

            {/* Key Value Strip */}
            <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-[#F0ECE1] border border-[#E4DCC8] mb-5 text-center">
              <div className="flex flex-col items-center justify-center p-1">
                <Users className="w-3.5 h-3.5 text-[#0F3D2E] mb-1" />
                <span className="text-[9px] font-bold text-[#0F3D2E] uppercase leading-tight">Master Faculty</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 border-x border-[#E4DCC8]">
                <BookOpen className="w-3.5 h-3.5 text-[#B08D57] mb-1" />
                <span className="text-[9px] font-bold text-[#0F3D2E] uppercase leading-tight">In-House Books</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0F3D2E] mb-1" />
                <span className="text-[9px] font-bold text-[#0F3D2E] uppercase leading-tight">Full Journey</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E4DCC8] bg-white text-xs sm:text-sm text-[#14110F] focus:outline-none focus:border-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E]"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1">
                  Parent / Guardian Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E4DCC8] bg-white text-xs sm:text-sm text-[#14110F] focus:outline-none focus:border-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1">
                    Current Grade / Standard
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => handleGradeChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#E4DCC8] bg-white text-xs text-[#14110F] focus:outline-none focus:border-[#0F3D2E]"
                  >
                    <option value="Class 6th – 7th">Class 6th – 7th</option>
                    <option value="Class 8th – 10th">Class 8th – 10th (Board/Foundation)</option>
                    <option value="Class 11th Science">Class 11th Science</option>
                    <option value="Class 12th Science">Class 12th Science</option>
                    <option value="College / Tech Aspirant">College / Tech Aspirant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1">
                    Target Program Track
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#E4DCC8] bg-white text-xs text-[#14110F] focus:outline-none focus:border-[#0F3D2E]"
                  >
                    {currentAvailableCourses.map((cOption) => (
                      <option key={cOption} value={cOption}>
                        {cOption}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-[#B08D57]" />
                  <span>Add Custom Note / Questions (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Asking about hostel guidance, fee structure, or specific subject doubt assistance..."
                  value={formData.customMessage}
                  onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E4DCC8] bg-white text-xs text-[#14110F] focus:outline-none focus:border-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-bold uppercase tracking-wider hover:bg-[#0A2A20] active:scale-[0.99] transition-all min-h-[44px] shadow-xs cursor-pointer"
                >
                  <span>Reserve Demo Seat via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#B08D57]" />
                </button>
              </div>

              <p className="text-[10px] text-[#14110F]/60 text-center pt-1 font-medium">
                Instant confirmation on WhatsApp · Zero spam calls · 100% Free Demo Session
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#0F3D2E] text-[#FAF7F0] mx-auto flex items-center justify-center mb-4 border-2 border-[#B08D57] shadow-sm">
              <CheckCircle className="w-8 h-8 text-[#B08D57]" />
            </div>
            <h3 className="font-editorial text-2xl font-semibold text-[#14110F] mb-2">
              Demo Request Sent!
            </h3>
            <p className="text-xs text-[#14110F]/80 leading-relaxed mb-6 font-normal max-w-sm mx-auto">
              Thank you, <span className="font-bold text-[#0F3D2E]">{formData.name}</span>. We have generated your WhatsApp booking message for <span className="font-bold">{formData.course}</span>. Our senior counselor will confirm your session details shortly.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] text-xs font-bold uppercase tracking-wider hover:bg-[#0A2A20] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
