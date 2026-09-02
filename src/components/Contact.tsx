import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Globe, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-neutral-900 text-white' : 'bg-[#faf8f5] border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`font-manrope text-xs font-bold tracking-[0.25em] uppercase ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            >
              GET IN TOUCH
            </span>
            <div className={`w-12 h-[1px] ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`} />
          </div>
          <h2
            className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] mb-3 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            CONTACT
          </h2>
          <p
            className={`font-manrope max-w-2xl text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Let's collaborate on your next project. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 5 Contact Info Blocks (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* 1. Phone / WhatsApp */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className={`p-5 rounded-2xl border transition-all flex items-start gap-4 group ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/60'
                  : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 shadow-sm'
              }`}
            >
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-[#C5A880] group-hover:border-[#C5A880]'
                    : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E] group-hover:border-[#9E7D4E]'
                }`}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">
                  PHONE
                </span>
                <span
                  className={`text-sm sm:text-base font-bold group-hover:underline mt-0.5 block ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {personalInfo.phone}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Call or WhatsApp for quick inquiries
                </span>
              </div>
            </a>

            {/* 2. Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-5 rounded-2xl border transition-all flex items-start gap-4 group ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/60'
                  : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 shadow-sm'
              }`}
            >
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-[#C5A880] group-hover:border-[#C5A880]'
                    : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E] group-hover:border-[#9E7D4E]'
                }`}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">
                  EMAIL
                </span>
                <span
                  className={`text-sm sm:text-base font-bold group-hover:underline mt-0.5 block break-all ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {personalInfo.email}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Direct email for project proposals
                </span>
              </div>
            </a>

            {/* 3. Location */}
            <div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div
                className={`p-3 rounded-xl border ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-[#C5A880]'
                    : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E]'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">
                  LOCATION
                </span>
                <span className={`text-sm sm:text-base font-bold mt-0.5 block ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  Dubai, UAE
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Available for meetings across UAE
                </span>
              </div>
            </div>

            {/* 4. Languages */}
            <div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div
                className={`p-3 rounded-xl border ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-[#C5A880]'
                    : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E]'
                }`}
              >
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">
                  LANGUAGES
                </span>
                <span className={`text-sm sm:text-base font-bold mt-0.5 block ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  English, Arabic, Urdu
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Fluent in spoken & technical English
                </span>
              </div>
            </div>

            {/* 5. Availability */}
            <div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div
                className={`p-3 rounded-xl border ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800 text-[#C5A880]'
                    : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E]'
                }`}
              >
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">
                  AVAILABILITY
                </span>
                <span className={`text-sm sm:text-base font-bold mt-0.5 block ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  Available for Full-time & Consultancy
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Immediate joining / Project-based
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form (7 cols) */}
          <div
            className={`lg:col-span-7 p-7 sm:p-9 rounded-2xl border transition-all ${
              isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
            }`}
          >
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border ${
                    isDark
                      ? 'bg-[#C5A880]/15 border-[#C5A880] text-[#C5A880]'
                      : 'bg-[#9E7D4E]/15 border-[#9E7D4E] text-[#9E7D4E]'
                  }`}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  className="font-cormorant text-2xl sm:text-3xl font-bold uppercase tracking-wide"
                >
                  MESSAGE TRANSMITTED
                </h3>
                <p className="font-manrope text-sm max-w-md text-neutral-400">
                  Thank you for reaching out, {formData.name}. Abdul Rahman Azhar will review your message and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className={`font-manrope mt-4 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase border transition-colors ${
                    isDark
                      ? 'border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-black'
                      : 'border-[#9E7D4E] text-[#9E7D4E] hover:bg-[#9E7D4E] hover:text-white'
                  }`}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 text-left">
                <h3
                  className="font-cormorant text-2xl font-bold uppercase tracking-wider mb-4"
                >
                  SEND A MESSAGE
                </h3>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Tariq Al Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                        isDark
                          ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-600'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                        isDark
                          ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-600'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
                  >
                    SUBJECT / PROJECT TYPE *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Architectural Design & DM Authority Approval Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-600'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Describe your project requirements, scope, plot details, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880] ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-600'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-manrope w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                    isDark
                      ? 'bg-[#C5A880] hover:bg-[#d8c3a5] text-black shadow-lg'
                      : 'bg-[#9E7D4E] hover:bg-[#85663B] text-white shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Closing Banner matching Page 5 */}
        <div className="mt-20 pt-10 border-t border-neutral-800/40 text-center">
          <p
            className={`text-xs font-bold tracking-[0.25em] uppercase mb-1.5 ${
              isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
            }`}
          >
            THANK YOU FOR REVIEWING MY PORTFOLIO
          </p>
          <p className={`text-sm font-semibold tracking-wider uppercase ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            ABDUL RAHMAN AZHAR • ARCHITECT & PROJECT DELIVERY SPECIALIST • UAE
          </p>
        </div>
      </div>
    </section>
  );
};

