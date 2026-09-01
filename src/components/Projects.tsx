import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.tag.toUpperCase() === activeFilter || p.category.toUpperCase() === activeFilter);

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
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`font-manrope text-xs font-bold tracking-[0.25em] uppercase ${
                  isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                }`}
              >
                FEATURED PORTFOLIO
              </span>
              <div className={`w-12 h-[1px] ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`} />
            </div>
            <h2
              className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              PROJECTS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  id={`project-filter-${filter.toLowerCase()}`}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`font-manrope px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                    isSelected
                      ? isDark
                        ? 'bg-[#C5A880] border-[#C5A880] text-black shadow-md'
                        : 'bg-[#9E7D4E] border-[#9E7D4E] text-white shadow-md'
                      : isDark
                      ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Projects Grid (4 cols on lg screens matching Page 4) */}
        <div id="project-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className={`group flex flex-col rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                  : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 hover:shadow-xl'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />

                {/* Top Category Tag Badge */}
                <div className="absolute top-3.5 left-3.5 pointer-events-none">
                  <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-[0.2em] uppercase rounded bg-black/75 backdrop-blur-md text-[#C5A880] border border-white/10">
                    {project.tag}
                  </span>
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md text-[#C5A880] text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 border border-[#C5A880]/40 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW PROJECT</span>
                  </span>
                </div>
              </div>

              {/* Card Body matching Page 4 typography and details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`font-cormorant text-xl font-bold uppercase tracking-wide mb-1.5 transition-colors leading-snug ${
                      isDark ? 'text-white group-hover:text-[#C5A880]' : 'text-neutral-900 group-hover:text-[#9E7D4E]'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                    <span className={`font-manrope ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {project.location}
                    </span>
                  </div>

                  <p className={`font-manrope text-[11px] font-medium uppercase tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                    {project.area} • {project.year}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-800/40 flex items-center justify-between">
                  <span
                    className={`font-manrope text-[11px] font-bold tracking-widest uppercase transition-colors flex items-center gap-1 ${
                      isDark ? 'text-neutral-400 group-hover:text-[#C5A880]' : 'text-neutral-600 group-hover:text-[#9E7D4E]'
                    }`}
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span
                    className={`font-manrope text-[10px] font-bold px-2 py-0.5 rounded ${
                      isDark ? 'bg-neutral-900 text-[#C5A880]' : 'bg-neutral-100 text-[#9E7D4E]'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

