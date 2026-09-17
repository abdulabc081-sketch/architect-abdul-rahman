import React from 'react';
import { Mail, MapPin, Phone, Globe, Clock, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.876.518 3.63 1.42 5.13L2 22l4.995-1.352A9.94 9.94 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.03a8.01 8.01 0 01-4.086-1.118l-.293-.174-3.033.822.822-3.033-.174-.293A8.01 8.01 0 013.97 12c0-4.43 3.6-8.03 8.03-8.03 4.43 0 8.03 3.6 8.03 8.03 0 4.43-3.6 8.03-8.03 8.03z" />
  </svg>
);

interface ContactProps {
  isDark: boolean;
}

// Section header fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Divider line draw-in
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Left column contact cards, staggered from left
const cardStagger = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Social icons, small stagger
const iconStagger = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
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
          <motion.div
            className="flex items-center gap-3 mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            variants={fadeUp}
          >
            <span
              className={`font-manrope text-xs font-bold tracking-[0.25em] uppercase ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            >
              GET IN TOUCH
            </span>
            <motion.div
              className={`w-12 h-[1px] origin-left ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={lineGrow}
            />
          </motion.div>
          <motion.h2
            className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] mb-3 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            variants={fadeUp}
          >
            CONTACT
          </motion.h2>
          <motion.p
            className={`font-manrope max-w-2xl text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            variants={fadeUp}
          >
            Let's collaborate on your next project. Feel free to reach out through any of the channels below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 5 Contact Info Blocks (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* 1. Phone / WhatsApp */}
            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className={`p-5 rounded-2xl border transition-all flex items-start gap-4 group ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/60'
                  : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 shadow-sm'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={cardStagger}
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
            </motion.a>

            {/* 2. Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className={`p-5 rounded-2xl border transition-all flex items-start gap-4 group ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/60'
                  : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 shadow-sm'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={cardStagger}
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
            </motion.a>

            {/* 3. Location */}
            <motion.div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              variants={cardStagger}
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
            </motion.div>

            {/* 4. Languages */}
            <motion.div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              variants={cardStagger}
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
            </motion.div>

            {/* 5. Availability */}
            <motion.div
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              variants={cardStagger}
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
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 text-[#C5A880] hover:border-[#C5A880]'
                    : 'bg-white border-neutral-200 text-[#9E7D4E] hover:border-[#9E7D4E] shadow-sm'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0}
                variants={iconStagger}
              >
                <WhatsAppIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 text-[#C5A880] hover:border-[#C5A880]'
                    : 'bg-white border-neutral-200 text-[#9E7D4E] hover:border-[#9E7D4E] shadow-sm'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={1}
                variants={iconStagger}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Let's Build Together Banner (7 cols) */}
          <motion.div
            className={`lg:col-span-7 p-8 sm:p-12 rounded-2xl border flex flex-col justify-center ${
              isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
            }`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className={`font-manrope text-xs font-bold tracking-[0.25em] uppercase mb-4 ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            >
              THANK YOU - LET'S BUILD TOGETHER
            </span>
            <h3
              className={`font-cormorant text-5xl sm:text-6xl font-bold leading-[1.05] mb-6 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Let's Build
              <br />
              <span className={`italic ${isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}`}>Together.</span>
            </h3>
            <div className={`w-full h-[1px] mb-6 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            <p
              className={`font-manrope text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Open to architectural and interior design opportunities across Dubai and the wider UAE — from
              concept-led residential interiors to full-lifecycle institutional projects with authority submissions.
            </p>
          </motion.div>
        </div>

        {/* Bottom Closing Banner matching Page 5 */}
        <motion.div
          className="mt-20 pt-10 border-t border-neutral-800/40 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
