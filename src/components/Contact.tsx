import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Globe, Clock, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.876.518 3.63 1.42 5.13L2 22l4.995-1.352A9.94 9.94 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.03a8.01 8.01 0 01-4.086-1.118l-.293-.174-3.033.822.822-3.033-.174-.293A8.01 8.01 0 013.97 12c0-4.43 3.6-8.03 8.03-8.03 4.43 0 8.03 3.6 8.03 8.03 0 4.43-3.6 8.03-8.03 8.03z" />
  </svg>
);
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
                  English, Tamil, Malayalam
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

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 text-[#C5A880] hover:border-[#C5A880]'
                    : 'bg-white border-neutral-200 text-[#9E7D4E] hover:border-[#9E7D4E] shadow-sm'
                }`}
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 text-[#C5A880] hover:border-[#C5A880]'
                    : 'bg-white border-neutral-200 text-[#9E7D4E] hover:border-[#9E7D4E] shadow-sm'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Send a Message Form (7 cols) */}
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

