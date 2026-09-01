import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { downloadCvAsPdf } from '../utils/cvPdfGenerator';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  activeSection,
  onOpenCv,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#000000]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#faf8f5]/90 backdrop-blur-md border-b border-black/10 shadow-lg py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a
          href="#home"
          id="nav-logo-link"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded"
        >
          <Logo isDark={isDark} />
        </a>

        {/* Center Desktop Navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'text-white'
                      : 'text-neutral-900'
                    : isDark
                    ? 'text-neutral-400 hover:text-neutral-200'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                      isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Dark Mode Toggle + Download CV + Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark / Light Mode Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className={`p-2.5 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
              isDark
                ? 'border-neutral-800 bg-neutral-900/80 text-[#C5A880] hover:bg-neutral-800 hover:text-white'
                : 'border-neutral-300 bg-neutral-100/90 text-[#9E7D4E] hover:bg-neutral-200 hover:text-neutral-900'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Download CV Button */}
          <button
            id="download-cv-header-btn"
            type="button"
            onClick={() => downloadCvAsPdf()}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-none border text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
              isDark
                ? 'border-[#C5A880]/60 text-[#C5A880] hover:bg-[#C5A880] hover:text-black shadow-[0_0_15px_rgba(197,168,128,0.15)]'
                : 'border-[#9E7D4E] text-[#9E7D4E] hover:bg-[#9E7D4E] hover:text-white shadow-sm'
            }`}
          >
            <span>DOWNLOAD CV</span>
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button with Architectural 2-line styling */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className={`md:hidden p-2.5 rounded border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
              isDark
                ? 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white'
                : 'border-neutral-300 bg-neutral-100 text-neutral-700 hover:text-neutral-900'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <div className="flex flex-col gap-1.5 w-5 justify-center items-end">
                <span className="w-5 h-[2px] bg-current rounded-full"></span>
                <span className="w-3.5 h-[2px] bg-current rounded-full"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden border-b px-6 py-6 transition-all duration-300 ${
            isDark
              ? 'bg-[#000000] border-neutral-800 text-white'
              : 'bg-[#faf8f5] border-neutral-200 text-neutral-900'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2 text-sm tracking-[0.2em] uppercase font-medium ${
                    isActive
                      ? isDark
                        ? 'text-[#C5A880] font-bold'
                        : 'text-[#9E7D4E] font-bold'
                      : isDark
                      ? 'text-neutral-400'
                      : 'text-neutral-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'
                      }`}
                    />
                  )}
                </a>
              );
            })}

            <div className="pt-4 border-t border-neutral-800/40 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadCvAsPdf();
                }}
                className={`flex items-center justify-center gap-2 py-3 border text-xs tracking-[0.2em] uppercase font-semibold ${
                  isDark
                    ? 'border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-black'
                    : 'border-[#9E7D4E] text-[#9E7D4E] hover:bg-[#9E7D4E] hover:text-white'
                }`}
              >
                <Download className="w-4 h-4 text-[#C5A880]" />
                <span>DOWNLOAD CV (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
