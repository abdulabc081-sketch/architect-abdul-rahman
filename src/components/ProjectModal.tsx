import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Close Button */}
      <button
        id="project-modal-close-btn"
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-10 p-2.5 rounded-full border bg-black/60 border-neutral-700 text-white hover:bg-neutral-800 transition-colors"
        aria-label="Close Project Gallery"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Vertical scrollable/slidable image gallery, no text */}
      <div
        id="project-modal-scroll"
        className="h-full w-full overflow-y-auto snap-y snap-mandatory"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="h-screen w-full snap-start flex items-center justify-center"
          >
            <img
              src={img}
              alt=""
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
