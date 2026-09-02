import React from 'react';
import { Award, Building, CheckCircle, ChevronRight, FileCheck, Shield } from 'lucide-react';
import { experienceData, authoritiesWorked, certifications } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section
      id="experience"
      className={`py-20 sm:py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-neutral-900 text-white' : 'bg-[#f7f5f0] border-neutral-200 text-neutral-900'
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
              CAREER JOURNEY
            </span>
            <div className={`w-12 h-[1px] ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`} />
          </div>
          <h2
            className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        {/* 2-Column Layout matching PDF Page 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Full Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-10 relative">
            {/* Vertical timeline line */}
            <div
              className={`absolute left-2 top-3 bottom-3 w-[3px] ${
                isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            />

            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-10 group">
                {/* Timeline node */}
                <div
                  className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 transform -translate-x-1/2 transition-colors ${
                    idx === 0
                      ? isDark
                        ? 'bg-[#C5A880] border-[#C5A880] shadow-[0_0_12px_rgba(197,168,128,0.8)]'
                        : 'bg-[#9E7D4E] border-[#9E7D4E] shadow-[0_0_10px_rgba(158,125,78,0.6)]'
                      : isDark
                      ? 'bg-[#0a0a0a] border-neutral-600 group-hover:border-[#C5A880]'
                      : 'bg-white border-neutral-400 group-hover:border-[#9E7D4E]'
                  }`}
                />

                {/* Period & Role */}
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span
                    className={`text-xs font-bold tracking-[0.18em] uppercase ${
                      isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                    }`}
                  >
                    {exp.period}
                  </span>
                  <span className={isDark ? 'text-neutral-600' : 'text-neutral-400'}>|</span>
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-wide uppercase ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {exp.role}
                  </h3>
                </div>

                {/* Company & Location */}
                <div className={`text-xs sm:text-sm font-medium mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {exp.company} • {exp.location}
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 text-justify ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                  {exp.description}
                </p>

                {/* Bullet Points */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed">
                        <div
                          className={`w-1.5 h-1.5 rounded-sm mt-1.5 flex-shrink-0 ${
                            isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'
                          }`}
                        />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Authorities Worked & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Authorities Worked Block */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Building className={`w-5 h-5 ${isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}`} />
                <h3
                  className={`font-cormorant text-lg sm:text-xl font-bold tracking-[0.08em] uppercase ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  AUTHORITIES WORKED
                </h3>
              </div>

              {/* 2-col or 3-col Grid of Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {authoritiesWorked.map((auth, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-center flex flex-col justify-center items-center transition-transform duration-200 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-neutral-900/80 border-neutral-800 hover:border-[#C5A880]/50'
                        : 'bg-neutral-50 border-neutral-200 hover:border-[#9E7D4E]/50'
                    }`}
                  >
                    <span
                      className={`text-sm font-extrabold tracking-wider mb-1 ${
                        isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                      }`}
                    >
                      {auth.code}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-400 leading-tight mb-1" dir="rtl">
                      {auth.arabicName}
                    </span>
                    <span className={`text-[9px] font-semibold tracking-wider uppercase ${isDark ? 'text-neutral-500' : 'text-neutral-600'}`}>
                      {auth.englishName}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Award className={`w-5 h-5 ${isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}`} />
                <h3
                  className={`font-cormorant text-lg sm:text-xl font-bold tracking-[0.08em] uppercase ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  CERTIFICATIONS & CREDENTIALS
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-neutral-900/60' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <FileCheck
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                      }`}
                    />
                    <span className={`text-xs sm:text-[13px] font-medium leading-snug ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

