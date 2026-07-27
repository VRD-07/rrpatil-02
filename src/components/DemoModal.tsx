import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialCourse = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Class 10th Board',
    course: initialCourse || 'Foundation Batch',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello Vidhata Academy, I would like to book a Free Demo Class.\n\n*Student Details:*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Grade: ${formData.grade}\n• Target Course: ${formData.course}`;

    const whatsappUrl = `https://wa.me/918275280028?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-[#14110F]/70 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#FAF7F0] border border-[#F0ECE1] rounded-lg shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 text-[#14110F]/60 hover:text-[#0F3D2E] rounded-md hover:bg-[#E4DCC8]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
                  FREE EVALUATION CLASS
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#14110F] mb-2">
                Reserve Your Demo Seat
              </h3>
              <p className="text-xs text-[#14110F]/70 leading-relaxed mb-6 font-normal">
                Attend a 2-hour live evaluation session with our senior faculty. Experience our structured teaching methodology firsthand.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1.5">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#E4DCC8] bg-white text-sm text-[#14110F] focus:outline-none focus:border-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1.5">
                    Parent / Guardian Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#E4DCC8] bg-white text-sm text-[#14110F] focus:outline-none focus:border-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1.5">
                      Current Grade / Year
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#E4DCC8] bg-white text-xs text-[#14110F] focus:outline-none focus:border-[#0F3D2E]"
                    >
                      <option value="Class 8th / 9th">Class 8th / 9th</option>
                      <option value="Class 10th Board">Class 10th Board</option>
                      <option value="Class 11th Science">Class 11th Science</option>
                      <option value="Class 12th Board / JEE / NEET">Class 12th Board / Entrance</option>
                      <option value="12th Pass / Repeater">12th Pass / Repeater</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#14110F] mb-1.5">
                      Target Course Track
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#E4DCC8] bg-white text-xs text-[#14110F] focus:outline-none focus:border-[#0F3D2E]"
                    >
                      <option value="Foundation Batch">Foundation Batch</option>
                      <option value="Board Exam Intensive">Board Exam Intensive</option>
                      <option value="Competitive Exam Track">JEE / NEET Track</option>
                      <option value="1-on-1 Mentoring">1-on-1 Elite Mentoring</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#0F3D2E] text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider hover:bg-[#0A2A20] active:scale-[0.99] transition-all min-h-[44px]"
                  >
                    <span>Confirm Free Demo Registration</span>
                    <ArrowRight className="w-4 h-4 text-[#B08D57]" />
                  </button>
                </div>

                <p className="text-[10px] text-[#14110F]/60 text-center pt-1">
                  We respect your privacy. No promotional spam calls.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#0F3D2E] text-[#F6F1E7] mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#B08D57]" />
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-[#14110F] mb-2">
                Demo Seat Reserved!
              </h3>
              <p className="text-xs text-[#14110F]/80 leading-relaxed mb-6">
                Thank you, <span className="font-semibold text-[#0F3D2E]">{formData.name}</span>. Our academic counselor will call <span className="font-semibold">{formData.phone}</span> within 2 hours to confirm your scheduled slot.
              </p>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-md bg-[#0F3D2E] text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
