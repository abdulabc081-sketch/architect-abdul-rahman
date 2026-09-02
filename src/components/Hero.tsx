import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo, portraitImg } from '../data/portfolioData';
import { downloadCvAsPdf } from '../utils/cvPdfGenerator';

interface HeroProps {
  isDark: boolean;
  onOpenCv: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  onOpenCv,
  onScrollToProjects,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Greeting Tag */}
            <div className="mb-3">
              <span
                className={`font-manrope text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase ${
                  isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                }`}
              >
                HELLO, I'M
              </span>
            </div>

            {/* Main Headline Name */}
            <h1
              id="hero-name"
              className={`font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.06em] leading-[1.04] mb-4 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              ABDUL RAHMAN
              <br />
              AZHAR
            </h1>

            {/* Sub-Roles Banner */}
            <div className="mb-6">
              <p
                className={`font-manrope text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${
                  isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                }`}
              >
                ARCHITECT &nbsp;•&nbsp; PROJECT ARCHITECT &nbsp;•&nbsp; PROJECT DELIVERY
              </p>
            </div>

            {/* Verbatim Bio Copy */}
            <p
              id="hero-bio"
              className={`font-manrope text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal mb-8 text-justify ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                id="hero-view-projects-btn"
                type="button"
                onClick={onScrollToProjects}
                className={`font-manrope inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                  isDark
                    ? 'bg-[#D8C3A5] hover:bg-[#E5D5BC] text-neutral-950 shadow-[0_4px_20px_rgba(216,195,165,0.25)]'
                    : 'bg-[#9E7D4E] hover:bg-[#85663B] text-white shadow-md'
                }`}
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-download-cv-btn"
                type="button"
                onClick={() => downloadCvAsPdf()}
                className={`font-manrope inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase border transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                  isDark
                    ? 'border-[#C5A880]/70 text-[#C5A880] hover:bg-[#C5A880]/10 hover:border-[#C5A880]'
                    : 'border-[#9E7D4E] text-[#9E7D4E] hover:bg-[#9E7D4E]/10'
                }`}
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Metrics Row matching exact screenshot */}
            <div
              id="hero-stats-row"
              className={`grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t ${
                isDark ? 'border-neutral-800/80' : 'border-neutral-200'
              }`}
            >
              {/* Metric 1: Experience */}
              <div className="flex items-center gap-3 sm:gap-4 pr-2 sm:pr-4">
                {/* Skyscraper Vector Icon */}
                <div className={isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}>
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0"
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 32H32" />
                    <path d="M7 32V16L14 12V32" />
                    <path d="M14 8L22 4V32" />
                    <path d="M22 18L29 22V32" />
                    <line x1="18" y1="10" x2="18" y2="10.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="15" x2="18" y2="15.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="20" x2="18" y2="20.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="25" x2="18" y2="25.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="18" x2="10" y2="18.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="24" x2="10" y2="24.01" strokeWidth="2" strokeLinecap="round" />
                    <line x1="25" y1="25" x2="25" y2="25.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-manrope text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {personalInfo.experienceYears}
                  </div>
                  <div
                    className={`font-manrope text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium leading-tight ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    YEARS
                    <br />
                    EXPERIENCE
                  </div>
                </div>
              </div>

              

              {/* Metric 2: Projects Delivered */}
              <div
                className={`flex items-center gap-3 sm:gap-4 px-2 sm:px-4 border-l ${
                  isDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}
              >
                {/* Drafting Compass Vector Icon */}
                <div className={isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}>
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0"
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="18" cy="7" r="3" />
                    <path d="M16 10L7 31" />
                    <path d="M20 10L29 31" />
                    <path d="M10 24H26" />
                    <circle cx="18" cy="24" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-manrope text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {personalInfo.projectsDelivered}
                  </div>
                  <div
                    className={`font-manrope text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium leading-tight ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    PROJECTS
                    <br />
                    DELIVERED
                  </div>
                </div>
              </div>

              {/* Metric 3: UAE Experience */}
              <div
                className={`flex items-center gap-3 sm:gap-4 pl-2 sm:pl-4 border-l ${
                  isDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}
              >
                {/* Globe / Coordinates Vector Icon */}
                <div className={isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}>
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0"
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="18" cy="18" r="13" />
                    <ellipse cx="18" cy="18" rx="6" ry="13" />
                    <line x1="5" y1="18" x2="31" y2="18" />
                    <line x1="7.5" y1="11" x2="28.5" y2="11" />
                    <line x1="7.5" y1="25" x2="28.5" y2="25" />
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-manrope text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {personalInfo.region}
                  </div>
                  <div
                    className={`font-manrope text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium leading-tight ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    PROFESSIONAL
                    <br />
                    {personalInfo.regionLabel.split(' ')[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center items-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Subtle ambient warm glow behind portrait */}
              <div
                className={`absolute -inset-4 rounded-full filter blur-3xl opacity-20 pointer-events-none ${
                  isDark ? 'bg-[#C5A880]/25' : 'bg-[#9E7D4E]/20'
                }`}
              />

              {/* Seamless Portrait Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={portraitImg}
                  alt="Abdul Rahman Azhar - Architect & Project Delivery Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top filter contrast-[1.03] brightness-95"
                />

                {/* Bottom subtle gradient blend */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-32 pointer-events-none ${
                    isDark
                      ? 'bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent'
                      : 'bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/50 to-transparent'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
