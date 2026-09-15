import React from 'react';
import { Award, Building, CheckCircle, ChevronRight, FileCheck, Shield } from 'lucide-react';
import { experienceData, authoritiesWorked, certifications } from '../data/portfolioData';
import { motion } from 'motion/react';

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

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
              className={`absolute left-1.5 top-3 bottom-3 w-[2px] ${
                isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            />

            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-10 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                variants={timelineItem}
              >
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
