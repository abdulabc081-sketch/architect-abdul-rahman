import React from 'react';
import {
  PenTool,
  FileText,
  ShieldCheck,
  Users,
  HardHat,
  Eye,
  Calculator,
  Clock,
  Search,
  Lightbulb,
  Layout,
  FileCode,
  CheckCircle2,
  Building2,
  Key,
  Quote,
} from 'lucide-react';
import { servicesWhatIDo, workflowSteps, personalInfo } from '../data/portfolioData';

interface ExpertiseProps {
  isDark: boolean;
}

const softwareList = [
  { name: 'AutoCAD', tag: '2D & 3D Drafting', badge: 'DWG' },
  { name: 'Autodesk Revit', tag: 'BIM Modeling', badge: 'BIM' },
  { name: 'Navisworks', tag: 'Clash Detection', badge: 'NWD' },
  { name: 'SketchUp', tag: '3D Concept Massing', badge: 'SKP' },
  { name: 'V-Ray', tag: 'Photorealistic Render', badge: 'VR' },
  { name: 'Enscape', tag: 'Real-Time Visualization', badge: 'RT' },
  { name: 'Lumion', tag: 'Architectural Animation', badge: 'LUM' },
  { name: 'Blender', tag: '3D Geometry & Nodes', badge: 'BLD' },
  { name: 'MS Office', tag: 'Specs, BOQ & Docs', badge: 'O365' },
  { name: 'Oracle Primavera P6', tag: 'Project Planning & Scheduling', badge: 'P6' },
  { name: 'Adobe Photoshop', tag: 'Post-Production & Renders', badge: 'PS' },
  { name: 'Adobe Illustrator', tag: 'Vector Diagramming & Graphics', badge: 'AI' },
  { name: 'Adobe InDesign', tag: 'Tender Booklets & Portfolios', badge: 'ID' },
  { name: 'Adobe Lightroom', tag: 'Site Photo Enhancement', badge: 'LR' },
];

export const Expertise: React.FC<ExpertiseProps> = ({ isDark }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      default:
        return <PenTool className="w-5 h-5" />;
    }
  };

  const getWorkflowIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-4 h-4" />;
      case 'Lightbulb':
        return <Lightbulb className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'FileCode':
        return <FileCode className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'Building2':
        return <Building2 className="w-4 h-4" />;
      case 'Key':
        return <Key className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="expertise"
      className={`py-20 sm:py-28 relative border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-neutral-900 text-white' : 'bg-[#faf8f5] border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`font-manrope text-xs font-bold tracking-[0.25em] uppercase ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            >
              CORE CAPABILITIES
            </span>
            <div className={`w-12 h-[1px] ${isDark ? 'bg-[#C5A880]' : 'bg-[#9E7D4E]'}`} />
          </div>
          <h2
            className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] mb-4 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            EXPERTISE
          </h2>

          {/* Quote Bar */}
          <div
            className={`flex items-start gap-3 p-4 sm:p-5 rounded-xl border max-w-4xl ${
              isDark
                ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                : 'bg-white border-neutral-200 text-neutral-700 shadow-sm'
            }`}
          >
            <Quote
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            />
            <p className="font-manrope text-xs sm:text-sm italic font-medium leading-relaxed">
              "{personalInfo.quote}" —{' '}
              <span className={`font-manrope not-italic font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                {personalInfo.quoteAuthor}
              </span>
            </p>
          </div>
        </div>

        {/* 1. WHAT I DO (8 Grid Cards) */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <h3
              className={`font-cormorant text-2xl sm:text-3xl font-bold tracking-wide uppercase ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              WHAT I DO
            </h3>
            <div className={`h-[1px] flex-1 max-w-xs ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {servicesWhatIDo.map((service, idx) => (
              <div
                key={idx}
                id={`service-card-${idx}`}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-neutral-950/80 border-neutral-800/90 hover:border-[#C5A880]/60 hover:bg-neutral-900/90 shadow-md'
                    : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/60 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-manrope text-lg font-extrabold ${
                        isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isDark
                          ? 'bg-neutral-900 border-neutral-800 text-[#C5A880]'
                          : 'bg-neutral-50 border-neutral-200 text-[#9E7D4E]'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h4
                    className={`font-manrope text-sm font-bold tracking-wider uppercase mb-2 leading-snug transition-colors ${
                      isDark ? 'text-white group-hover:text-[#C5A880]' : 'text-neutral-900 group-hover:text-[#9E7D4E]'
                    }`}
                  >
                    {service.title}
                  </h4>
                </div>

                <p className={`font-manrope text-xs leading-relaxed mt-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. TOOLS & SOFTWARE */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <h3
              className={`font-cormorant text-2xl sm:text-3xl font-bold tracking-wide uppercase ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              TOOLS & SOFTWARE
            </h3>
            <div className={`h-[1px] flex-1 max-w-xs ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {softwareList.map((tool, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/50'
                    : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/50 shadow-sm'
                }`}
              >
                <span
                  className={`font-manrope text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded mb-2 ${
                    isDark ? 'bg-neutral-900 text-[#C5A880]' : 'bg-neutral-100 text-[#9E7D4E]'
                  }`}
                >
                  {tool.badge}
                </span>
                <span
                  className={`font-manrope text-xs font-bold leading-tight uppercase ${
                    isDark ? 'text-neutral-200' : 'text-neutral-900'
                  }`}
                >
                  {tool.name}
                </span>
                <span className="font-manrope text-[10px] text-neutral-500 mt-1 leading-tight">{tool.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MY APPROACH & WORKFLOW (7 Steps) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h3
              className={`font-cormorant text-2xl sm:text-3xl font-bold tracking-wide uppercase ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              MY APPROACH & WORKFLOW
            </h3>
            <div className={`h-[1px] flex-1 max-w-xs ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 hover:border-[#C5A880]/50'
                    : 'bg-white border-neutral-200 hover:border-[#9E7D4E]/50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-manrope text-base font-extrabold ${
                        isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className={isDark ? 'text-neutral-500' : 'text-neutral-400'}>
                      {getWorkflowIcon(step.iconName)}
                    </div>
                  </div>
                  <h4
                    className={`font-manrope text-xs font-bold tracking-wider uppercase mb-1.5 leading-snug ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>

                <p className="font-manrope text-[11px] text-neutral-400 leading-relaxed mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

