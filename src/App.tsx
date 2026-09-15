import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('ara_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to the exact cinematic luxury dark mode shown in reference
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('ara_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#f5f5f5';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.style.backgroundColor = '#faf8f5';
      document.body.style.color = '#1a1a1a';
    }
  }, [isDark]);

  // Scroll-spy to highlight current active section
  useEffect(() => {
    const sections = ['home', 'experience', 'expertise', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollToProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'dark bg-[#000000] text-white' : 'light bg-[#faf8f5] text-neutral-900'
      }`}
    >
      {/* Top Navbar with Logo, Navigation, Dark Mode Toggle & Download CV */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Exact Hero Section */}
        <Hero
          isDark={isDark}
          onOpenCv={() => setIsCvOpen(true)}
          onScrollToProjects={handleScrollToProjects}
        />

        {/* Professional Experience Section */}
        <Experience isDark={isDark} />

        {/* Expertise, UAE Statutory Approvals & Software Stack */}
        <Expertise isDark={isDark} />

        {/* Projects Showcase & Blueprint Gallery */}
        <Projects
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Architectural Project Inquiry & Contact Section */}
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />

      {/* Interactive Architectural CV / Resume Viewer Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
