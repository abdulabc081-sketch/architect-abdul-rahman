import React, { useEffect, useState } from 'react';
import { X, MapPin, Calendar, Layers, ShieldCheck, CheckCircle2, Maximize2, Compass, FileCode } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'specs'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          isDark
            ? 'bg-[#0f0f0f] border-neutral-800 text-white'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          type="button"
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2.5 rounded-full border transition-colors ${
            isDark
              ? 'bg-black/60 border-neutral-700 text-white hover:bg-neutral-800'
              : 'bg-white/80 border-neutral-300 text-neutral-900 hover:bg-neutral-100'
          }`}
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/30'
                : 'bg-gradient-to-t from-white via-transparent to-black/30'
            }`}
          />

          <div className="absolute bottom-6 left-6 right-6">
            <span
              className={`font-manrope inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded mb-2 border ${
                isDark
                  ? 'bg-[#C5A880]/20 border-[#C5A880]/40 text-[#C5A880]'
                  : 'bg-[#9E7D4E]/20 border-[#9E7D4E]/40 text-[#9E7D4E]'
              }`}
            >
              {project.category} • {project.status}
            </span>
            <h2
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white drop-shadow-md"
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-neutral-800/40 px-6 pt-4 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`font-manrope pb-3 text-xs font-bold tracking-[0.18em] uppercase border-b-2 transition-colors ${
              activeTab === 'overview'
                ? isDark
                  ? 'border-[#C5A880] text-[#C5A880]'
                  : 'border-[#9E7D4E] text-[#9E7D4E]'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            Project Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blueprint')}
            className={`font-manrope pb-3 text-xs font-bold tracking-[0.18em] uppercase border-b-2 transition-colors ${
              activeTab === 'blueprint'
                ? isDark
                  ? 'border-[#C5A880] text-[#C5A880]'
                  : 'border-[#9E7D4E] text-[#9E7D4E]'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            Technical Blueprint & Renders
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`font-manrope pb-3 text-xs font-bold tracking-[0.18em] uppercase border-b-2 transition-colors ${
              activeTab === 'specs'
                ? isDark
                  ? 'border-[#C5A880] text-[#C5A880]'
                  : 'border-[#9E7D4E] text-[#9E7D4E]'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            Authority Approvals & BIM Stack
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Meta Grid */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border ${
                  isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Location</div>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">{project.location}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Built-up Area</div>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">{project.area}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Role</div>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Year</div>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">{project.year}</div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-2">
                  ARCHITECTURAL CONCEPT
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {project.summary}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`p-5 rounded-xl border ${
                    isDark ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-2">
                    SITE & REGULATORY CHALLENGE
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                    {project.challenge}
                  </p>
                </div>

                <div
                  className={`p-5 rounded-xl border ${
                    isDark ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <h4
                    className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${
                      isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                    }`}
                  >
                    ENGINEERED ARCHITECTURAL SOLUTION
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Scope Checklist */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-3">
                  DELIVERY & COORDINATION SCOPE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                        }`}
                      />
                      <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              {/* Simulated Interactive Blueprint Canvas */}
              <div className="relative rounded-xl border overflow-hidden bg-[#00172e] p-6 text-cyan-200 font-mono text-xs">
                {/* Blueprint grid */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#00d2ff 1px, transparent 1px), linear-gradient(90deg, #00d2ff 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold tracking-widest uppercase">GFC SUBMISSION BLUEPRINT • DWG REF: {project.id.toUpperCase()}-001</span>
                    </div>
                    <span className="text-[10px] text-cyan-400/80">SCALE: 1:100 @ A1</span>
                  </div>

                  {/* Blueprint SVG Schematic View */}
                  <div className="h-64 flex items-center justify-center border border-cyan-500/20 rounded bg-[#000f1f]/80 p-4">
                    <svg viewBox="0 0 400 200" className="w-full h-full stroke-cyan-400 fill-none" strokeWidth="1.2">
                      {/* Grid Lines */}
                      <line x1="20" y1="20" x2="380" y2="20" strokeDasharray="4 4" strokeOpacity="0.4" />
                      <line x1="20" y1="180" x2="380" y2="180" strokeDasharray="4 4" strokeOpacity="0.4" />
                      <line x1="50" y1="10" x2="50" y2="190" strokeDasharray="4 4" strokeOpacity="0.4" />
                      <line x1="350" y1="10" x2="350" y2="190" strokeDasharray="4 4" strokeOpacity="0.4" />
                      
                      {/* Floor Layout Outline */}
                      <rect x="60" y="40" width="280" height="120" strokeWidth="2" />
                      <rect x="60" y="40" width="100" height="60" />
                      <rect x="160" y="40" width="90" height="60" />
                      <rect x="250" y="40" width="90" height="60" />
                      
                      {/* Core & Elevators / Staircase */}
                      <rect x="170" y="50" width="70" height="40" strokeDasharray="2 2" />
                      <line x1="170" y1="50" x2="240" y2="90" strokeWidth="0.8" />
                      <line x1="240" y1="50" x2="170" y2="90" strokeWidth="0.8" />
                      
                      {/* Cantilever terrace */}
                      <path d="M60 100 L340 100" strokeWidth="1.5" />
                      <path d="M120 160 L280 160 L310 180 L90 180 Z" strokeWidth="1" strokeOpacity="0.7" />
                      
                      {/* Architectural text annotations */}
                      <text x="75" y="75" fill="#38bdf8" fontSize="8" fontFamily="monospace" stroke="none">LIVING ZONE</text>
                      <text x="265" y="75" fill="#38bdf8" fontSize="8" fontFamily="monospace" stroke="none">PRIMARY SUITE</text>
                      <text x="180" y="140" fill="#38bdf8" fontSize="8" fontFamily="monospace" stroke="none">INFINITY POOL DECK</text>
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-cyan-300/70 pt-2">
                    <span>STATUS: APPROVED BY DUBAI MUNICIPALITY & TRAKHEES</span>
                    <span>COORDINATES: 25.1189° N, 55.1382° E</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Authorities Approved */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-3">
                  STATUTORY NOCs & APPROVALS OBTAINED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.authorities.map((auth, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase border ${
                        isDark
                          ? 'bg-[#C5A880]/15 border-[#C5A880]/30 text-[#C5A880]'
                          : 'bg-[#9E7D4E]/10 border-[#9E7D4E]/30 text-[#9E7D4E]'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{auth}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Software stack */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-3">
                  BIM & DESIGN SOFTWARE UTILIZED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((sw, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded text-xs font-medium ${
                        isDark ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
