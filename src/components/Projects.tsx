import React, { useState } from 'react';
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

        {/* Projects Grid — image tiles with just a title, no other text */}
        <div id="project-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
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
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold uppercase tracking-wide text-white leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
