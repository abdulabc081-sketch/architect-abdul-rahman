import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { motion } from 'motion/react';

interface ProjectsProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

// How many project tiles show per slide. Sized for 3 rows on the widest
// layout (xl:grid-cols-4 -> 4 x 3 = 12). Once a filter/category has more
// projects than this, extra ones go on the next slide instead of adding
// a 4th row — navigate between slides with the dots below the grid.
const ITEMS_PER_PAGE = 12;

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

// Staggered card entrance
const cardStagger = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: (i % ITEMS_PER_PAGE) * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const Projects: React.FC<ProjectsProps> = ({ isDark, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.tag.toUpperCase() === activeFilter || p.category.toUpperCase() === activeFilter);

  // Split the filtered projects into fixed-size pages/slides.
  const pages: Project[][] = [];
  for (let i = 0; i < filteredProjects.length; i += ITEMS_PER_PAGE) {
    pages.push(filteredProjects.slice(i, i + ITEMS_PER_PAGE));
  }
  if (pages.length === 0) pages.push([]);

  // Reset to the first slide whenever the filter changes.
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  // Clamp currentPage if the number of pages shrinks (e.g. filter change).
  useEffect(() => {
    if (currentPage > pages.length - 1) {
      setCurrentPage(Math.max(0, pages.length - 1));
    }
  }, [pages.length, currentPage]);

  return (
    <section
      id="projects"
      className={`py-20 sm:py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-neutral-900 text-white' : 'bg-[#f7f5f0] border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
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
                FEATURED PORTFOLIO
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
              className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={fadeUp}
            >
              PROJECTS
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            variants={fadeUp}
          >
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  id={`project-filter-${filter.toLowerCase()}`}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative font-manrope px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase rounded-lg border overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                    isSelected
                      ? isDark
                        ? 'border-[#C5A880] text-black shadow-md'
                        : 'border-[#9E7D4E] text-white shadow-md'
                      : isDark
                      ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`}
                >
                  {isSelected && (
                     <motion.span
                        layoutId="project-filter-pill"
                        className={`absolute inset-0 ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`}
                       transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                 <span className="relative z-10">{filter}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Slider — each slide is capped at ITEMS_PER_PAGE tiles;
            extra projects live on the next slide instead of adding rows */}
        <div id="project-slider" className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((pageProjects, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div id="project-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {pageProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      id={`project-card-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="group relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-transform duration-500"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={idx}
                      variants={cardStagger}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient overlay so the title stays readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                      {/* Project Name only */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                        <h3 className="font-cormorant text-xl sm:text-2xl font-bold uppercase tracking-wide text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation — only shown when there's more than one slide */}
        {pages.length > 1 && (
          <div id="project-slider-dots" className="flex items-center justify-center gap-3 mt-10">
            {pages.map((_, pageIndex) => {
              const isActive = pageIndex === currentPage;
              return (
                <button
                  key={pageIndex}
                  type="button"
                  aria-label={`Go to projects slide ${pageIndex + 1}`}
                  onClick={() => setCurrentPage(pageIndex)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                    isActive
                      ? 'w-8 h-2.5 ' + (isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]')
                      : 'w-2.5 h-2.5 ' + (isDark ? 'bg-neutral-700 hover:bg-neutral-500' : 'bg-neutral-300 hover:bg-neutral-400')
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
