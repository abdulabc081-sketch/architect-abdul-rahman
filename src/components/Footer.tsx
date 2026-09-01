import React from 'react';
import { ArrowUp, Mail, MapPin, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`font-manrope border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-neutral-900 text-neutral-400' : 'bg-[#f0ece3] border-neutral-300 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-neutral-800/40">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo isDark={isDark} />
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Architectural Design & Project Delivery across the UAE. Specializing in luxury residential villas, commercial high-rises, and turnkey statutory authority approvals.
            </p>
                        <div className="flex items-center gap-4 text-xs font-semibold text-[#C5A880] pt-2">
              <span>DUBAI, UAE</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4
              className={`text-xs font-bold tracking-[0.2em] uppercase ${
                isDark ? 'text-neutral-200' : 'text-neutral-900'
              }`}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-[#C5A880] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C5A880] transition-colors">
                  UAE Experience
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#C5A880] transition-colors">
                  Authority Approvals & BIM
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C5A880] transition-colors">
                  Delivered Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A880] transition-colors">
                  Project Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Statutory Jurisdictions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className={`text-xs font-bold tracking-[0.2em] uppercase ${
                isDark ? 'text-neutral-200' : 'text-neutral-900'
              }`}
            >
              UAE STATUTORY JURISDICTIONS
            </h4>
            <p className="text-xs leading-relaxed">
              Dubai Municipality (DM) • Trakhees (PCFC) • Dubai Development Authority (DDA) • Dubai Civil Defence (DCD) • DEWA • Nakheel • Emaar Properties
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C5A880] hover:underline uppercase"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Abdul Rahman Azhar. All Rights Reserved. Architectural Portfolio.
          </div>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all duration-200 ${
              isDark
                ? 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-[#C5A880] hover:text-[#C5A880]'
                : 'border-neutral-300 bg-white text-neutral-700 hover:border-[#9E7D4E] hover:text-[#9E7D4E]'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
