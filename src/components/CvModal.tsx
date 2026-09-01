import React, { useEffect, useState } from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Award,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCheck,
  Globe2,
  Sparkles,
  Layers,
  GraduationCap,
  Loader2,
} from 'lucide-react';
import { personalInfo, portraitImg } from '../data/portfolioData';
import { downloadCvAsPdf } from '../utils/cvPdfGenerator';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, isDark }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      await downloadCvAsPdf('cv-document-paper');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-container"
        className={`relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-2xl border shadow-2xl transition-all ${
          isDark
            ? 'bg-[#141414] border-neutral-800 text-white'
            : 'bg-[#F9F9F8] border-neutral-300 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header */}
        <div
          className={`flex-shrink-0 flex items-center justify-between px-5 sm:px-7 py-3.5 border-b backdrop-blur-md z-30 ${
            isDark ? 'bg-[#181818]/95 border-neutral-800' : 'bg-white/95 border-neutral-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span
              className={`text-xs font-bold tracking-[0.2em] uppercase ${
                isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
              }`}
            >
              ARCHITECTURAL CV • ABDUL RAHMAN AZHAR
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="cv-print-btn"
              type="button"
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                isDark
                  ? 'border-neutral-700 bg-neutral-800/80 text-neutral-200 hover:bg-neutral-700'
                  : 'border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              title="Print CV or Save via Browser PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Browser PDF</span>
            </button>

            <button
              id="cv-download-pdf-btn"
              type="button"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border shadow-sm transition-all transform hover:-translate-y-0.5 ${
                isDark
                  ? 'border-[#C5A880] bg-[#C5A880] text-black hover:bg-[#E5D5BC]'
                  : 'border-[#9E7D4E] bg-[#9E7D4E] text-white hover:bg-[#85663B]'
              }`}
              title="Directly download Abdul_Rahman_Azhar_Architect_CV.pdf"
            >
              {isGeneratingPdf ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF'}</span>
            </button>

            <button
              id="cv-close-btn"
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-full border transition-colors ${
                isDark
                  ? 'border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  : 'border-neutral-300 text-neutral-600 hover:text-black hover:bg-neutral-100'
              }`}
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area with Paper Presentation */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 bg-neutral-950/40">
          <div
            id="cv-document-paper"
            className="w-full max-w-4xl mx-auto bg-white text-neutral-900 shadow-2xl rounded-sm p-6 sm:p-10 md:p-12 space-y-7 border border-neutral-200 text-left font-manrope"
            style={{ minHeight: '100%' }}
          >
            {/* Top Accent Bar */}
            <div className="w-full h-1.5 bg-[#B89255] rounded-full" />

            {/* Document Header with Portrait & Contact Details */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-neutral-300 pb-6">
              <div className="space-y-1.5 flex-1">
                <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
                  ABDUL RAHMAN AZHAR
                </h1>
                <p className="font-manrope text-xs sm:text-sm font-bold tracking-widest text-[#B89255] uppercase">
                  PROJECT ARCHITECT | UAE AUTHORITY APPROVALS | PROJECT DELIVERY
                </p>
                <p className="font-manrope text-xs font-semibold text-neutral-600 italic">
                  SOE UAE – Registered Member
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-xs font-medium text-neutral-700">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B89255]" />
                    +971-56 171 3688
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B89255]" />
                    Architect.abdulrahman007@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B89255]" />
                    Dubai, UAE
                  </span>
                  <a
                    href="https://linkedin.com/in/AbdulRahmanAzhar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-blue-800 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#B89255]" />
                    linkedin.com/in/AbdulRahmanAzhar
                  </a>
                  <span className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-semibold text-[10px]">
                    Employment Visa
                  </span>
                </div>
              </div>

              {/* Portrait Thumbnail */}
              <div className="flex-shrink-0">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-lg overflow-hidden border-2 border-[#B89255] shadow-md bg-neutral-900">
                  <img
                    src={portraitImg}
                    alt="Abdul Rahman Azhar - Project Architect"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="text-xs sm:text-[13px] leading-relaxed text-neutral-800 italic bg-[#FAF8F5] p-3.5 rounded-lg border-l-4 border-[#B89255]">
              Dubai based Architect | Project Architect with 6 years of professional experience and 40+ projects delivered across residential, commercial, and fit-out sectors. Specialist in UAE authority approvals (Dubai Municipality, DCD, DDA, Trakhees, DEWA, Nakheel, Emaar), BIM coordination, and end-to-end project delivery from concept through handover.
            </div>

            {/* CORE COMPETENCIES */}
            <div>
              <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                CORE COMPETENCIES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-neutral-950">Architectural Design:</span>
                  <p className="text-neutral-700">Concept · Schematic · Design Development · Construction Documentation</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-neutral-950">Authority Approvals:</span>
                  <p className="text-neutral-700">Dubai Municipality · DCD · DDA · Trakhees · DEWA · Nakheel · Emaar</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-neutral-950">Project Delivery:</span>
                  <p className="text-neutral-700">Tender Documentation · BOQ · Material Coordination · Site Coordination · Handover</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-neutral-950">BIM & Visualization:</span>
                  <p className="text-neutral-700">Revit · Navisworks · AutoCAD · SketchUp · V-Ray · Enscape · Lumion · Blender</p>
                </div>
                <div className="sm:col-span-2 space-y-1 pt-1 border-t border-neutral-100">
                  <span className="font-bold text-neutral-950">Project Management:</span>
                  <p className="text-neutral-700">Client Coordination · Consultant Coordination · Contractor Coordination · Project Schedule & Programme Control · Quality Control</p>
                </div>
              </div>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-4">
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-5">
                {/* 1. Aram Building Contracting LLC */}
                <div className="space-y-1.5 text-left">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-950">
                      Project Architect <span className="font-normal text-neutral-600">| Aram Building Contracting LLC · Dubai, UAE</span>
                    </span>
                    <span className="text-xs font-bold text-[#B89255]">Aug 2024 – Present</span>
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-[#B89255]">
                    <li>Led architectural projects end-to-end, from initial brief and concept development through construction completion and handover.</li>
                    <li>Coordinated with Structural, MEP, and other engineering disciplines to ensure integrated, clash-free designs.</li>
                    <li>Produced comprehensive construction documents, detailed drawings, and site execution packages for residential and commercial schemes.</li>
                    <li>Prepared and submitted authority approval packages to Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, and Emaar, ensuring full regulatory compliance.</li>
                    <li>Developed detailed Bills of Quantities (BOQ) and coordinated with vendors, contractors, and specialist consultants.</li>
                    <li>Curated and specified materials, finishes, and design elements in alignment with project budgets and client briefs.</li>
                    <li>Engaged directly with clients to present design solutions, incorporate feedback, and maintain strong professional relationships.</li>
                    <li>Conducted regular site inspections and resolved design and execution issues to maintain compliance with approved drawings, specifications, quality standards, and project schedules.</li>
                  </ul>
                </div>

                {/* 2. Aspirify Interiors Decoration LLC */}
                <div className="space-y-1.5 text-left">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-950">
                      Project Coordinator <span className="font-normal text-neutral-600">| Aspirify Interiors Decoration LLC · Dubai, UAE</span>
                    </span>
                    <span className="text-xs font-bold text-[#B89255]">Aug 2022 – Jul 2024</span>
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-[#B89255]">
                    <li>Designed residential schemes with a focus on functionality, client aspirations, and contemporary aesthetics.</li>
                    <li>Prepared complete construction drawing sets plans, elevations, sections, and details for accurate site execution.</li>
                    <li>Produced photorealistic 3D visualisations using SketchUp, V-Ray, and Blender to support design presentations and client approvals.</li>
                    <li>Collaborated closely with the principal architect throughout schematic and design development phases.</li>
                  </ul>
                </div>

                {/* 3. Arabian Construction and Agencies */}
                <div className="space-y-1.5 text-left">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-950">
                      Architect <span className="font-normal text-neutral-600">| Arabian Construction and Agencies · India</span>
                    </span>
                    <span className="text-xs font-bold text-[#B89255]">Jan 2022 – Jul 2022</span>
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-[#B89255]">
                    <li>Assisted in the design, planning, and coordination of residential construction projects.</li>
                    <li>Prepared CAD drawings, 3D models, and rendered visualisations to support project documentation.</li>
                    <li>Ensured design quality and adherence to client requirements at each project milestone.</li>
                    <li>Gained practical exposure to site workflows, project scheduling, and interdisciplinary team coordination.</li>
                  </ul>
                </div>

                {/* 4. Akbari Hussain Akbari Architect */}
                <div className="space-y-1.5 text-left">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-950">
                      Intern Architect <span className="font-normal text-neutral-600">| Akbari Hussain Akbari Architect · Chennai, India</span>
                    </span>
                    <span className="text-xs font-bold text-[#B89255]">Sep 2021 – Dec 2021</span>
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-[#B89255]">
                    <li>Collaborated with senior architects to develop design solutions from concept through schematic design.</li>
                    <li>Prepared architectural drawings and technical documentation for construction and authority submissions.</li>
                    <li>Generated realistic 3D visualisations and presentation materials to support client approvals and design reviews.</li>
                  </ul>
                </div>

                {/* 5. Nandhis Architect */}
                <div className="space-y-1.5 text-left">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-950">
                      Intern Architect <span className="font-normal text-neutral-600">| Nandhis Architect · Bangalore, India</span>
                    </span>
                    <span className="text-xs font-bold text-[#B89255]">May 2021 – Aug 2021</span>
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-[#B89255]">
                    <li>Assisted senior architects in developing schematic and design development packages in line with client requirements.</li>
                    <li>Produced accurate architectural drawings plans, elevations, sections, and construction details for project execution.</li>
                    <li>Created high quality 3D renderings and visual presentations to communicate design concepts to clients and stakeholders.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                TECHNICAL SKILLS
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 w-44 align-top">Design & BIM</td>
                      <td className="py-1.5 text-neutral-750">AutoCAD, Autodesk Revit, Navisworks, SketchUp, V-Ray, Enscape, Lumion, Blender</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">Project & Documentation</td>
                      <td className="py-1.5 text-neutral-750">Construction Documentation, BOQ Preparation, Tender Documentation, Material Submittals, Authority Submissions, Site Coordination</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">Software</td>
                      <td className="py-1.5 text-neutral-750">MS Office, Oracle Primavera P6</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">Graphic & Presentation</td>
                      <td className="py-1.5 text-neutral-750">Adobe Photoshop, Illustrator, InDesign, Lightroom</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">UAE Authority Portals</td>
                      <td className="py-1.5 text-neutral-750">Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, Emaar — Authority Approval & NOC Coordination</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">Project Skills</td>
                      <td className="py-1.5 text-neutral-750">BOQ Preparation, Material Sourcing, Vendor Coordination</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-4 font-bold text-neutral-950 align-top">Soft Skills</td>
                      <td className="py-1.5 text-neutral-750">Client Communication, Design Presentation, Team Collaboration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* EDUCATION & CREDENTIALS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                  EDUCATION
                </h2>
                <div className="space-y-2.5 text-xs text-left">
                  <div>
                    <div className="font-bold text-neutral-950">Building Information Modelling for Architects</div>
                    <div className="text-neutral-600">CADD International · Dubai, UAE · 2025</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">Bachelor of Architecture (B.Arch)</div>
                    <div className="text-neutral-600">AMS Academy of Architecture · Chennai, India · 2017 – 2022</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">Higher Secondary Certificate (HSC)</div>
                    <div className="text-neutral-600">Tansri Ubaidullah Matriculation Higher Secondary School · India · 2015 – 2017</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                  CERTIFICATIONS & CREDENTIALS
                </h2>
                <ul className="space-y-1 text-xs text-neutral-700 pl-3 list-disc marker:text-[#B89255] text-left">
                  <li>Project Management Professional (PMP) — PMI (Preparing)</li>
                  <li>Agile Project Management — Certification</li>
                  <li>Dubai Municipality – G+1 Qualification (Preparing)</li>
                  <li>Dubai Civil Defence – Delegate License</li>
                  <li>SOE UAE – Registered Member</li>
                  <li>Building Information Modelling for Architects — CADD International</li>
                  <li>Autodesk Revit Architecture — Certification</li>
                  <li>Autodesk Navisworks — Certification</li>
                </ul>
              </div>
            </div>

            {/* UAE AUTHORITY & APPROVAL EXPERIENCE */}
            <div>
              <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                UAE AUTHORITY & APPROVAL EXPERIENCE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-left">
                <div className="p-2.5 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-950 mb-1">Dubai Municipality (DM)</div>
                  <p className="text-neutral-600">• Building permit / architectural submissions</p>
                  <p className="text-neutral-600">• Drawing compliance, authority comments & revisions</p>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-950 mb-1">Dubai Civil Defence (DCD)</div>
                  <p className="text-neutral-600">• Fire & Life Safety coordination</p>
                  <p className="text-neutral-600">• Authority submissions & approval coordination</p>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-950 mb-1">Dubai Development Authority (DDA)</div>
                  <p className="text-neutral-600">• Authority submission and approval coordination</p>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-950 mb-1">Trakhees & Master Developers</div>
                  <p className="text-neutral-600">• Trakhees authority submission and approvals</p>
                  <p className="text-neutral-600">• Nakheel & Emaar developer-side approval coordination</p>
                </div>
              </div>
            </div>

            {/* SELECTED PROJECT EXPERIENCE */}
            <div>
              <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                SELECTED PROJECT EXPERIENCE
              </h2>
              <div className="space-y-3 text-xs text-left">
                <div className="p-3 bg-neutral-50 rounded border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-950">1. Goshi warehouse – Multiple shops</div>
                  <div className="text-neutral-700"><span className="font-semibold">Role:</span> Project Architect — Full Retail Fit-Out</div>
                  <div className="text-neutral-700"><span className="font-semibold">Scope:</span> End-to-end interior fit-out of multiple retail shop units within the development</div>
                  <div className="text-neutral-700"><span className="font-semibold">Authorities:</span> Dubai Municipality, Dubai Civil Defence, Landlord Approvals</div>
                  <div className="text-neutral-700"><span className="font-semibold text-emerald-800">Outcome:</span> Completed all works on schedule; achieved zero snagging defects at handover</div>
                </div>

                <div className="p-3 bg-neutral-50 rounded border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-950">2. SHARIF STAR Real Estate Office – Binary Building Dubai</div>
                  <div className="text-neutral-700"><span className="font-semibold">Role:</span> Project Architect — Commercial Office Fit-Out</div>
                  <div className="text-neutral-700"><span className="font-semibold">Scope:</span> Full interior fit-out of a commercial office environment including MEP coordination and design production</div>
                  <div className="text-neutral-700"><span className="font-semibold">Authorities:</span> Dubai Municipality, Relevant Landlord Authority</div>
                  <div className="text-neutral-700"><span className="font-semibold text-emerald-800">Outcome:</span> Successfully delivered the project in accordance with client requirements, quality standards, and project programme.</div>
                </div>

                <div className="p-3 bg-neutral-50 rounded border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-950">3. Multi-Site Retail & F&B Portfolio – Emaar / Omniyat / TECOM</div>
                  <div className="text-neutral-700"><span className="font-semibold">Role:</span> Project Architect (Concurrent Projects)</div>
                  <div className="text-neutral-700"><span className="font-semibold">Scope:</span> Managed simultaneous authority approvals and fit-out delivery across DM, DCD, Trakhees, DDA, Emaar, TECOM, MERAAS and Omniyat</div>
                  <div className="text-neutral-700"><span className="font-semibold text-emerald-800">Outcome:</span> Zero permit delays across all delivered projects; cumulative project value AED 30 million</div>
                </div>
              </div>
            </div>

            {/* KEY ACHIEVEMENTS & LANGUAGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="md:col-span-2">
                <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                  KEY ACHIEVEMENTS
                </h2>
                <ul className="space-y-1 text-xs text-neutral-700 pl-3 list-disc marker:text-[#B89255] text-left">
                  <li>40+ residential, commercial, and fit-out projects delivered across UAE and India over 6 years.</li>
                  <li>Full project lifecycle ownership: concept design, design development, tender documentation, BOQ, authority approvals, site coordination, and handover.</li>
                  <li>Extensive experience coordinating approvals across DM, Trakhees, DDA, DCD, DEWA, Nakheel, Omniyat and Emaar.</li>
                  <li>Developer side exposure through Nakheel and Emaar approval processes, supporting large-scale and master developer projects.</li>
                  <li>Integrated clash-free multidisciplinary coordination with Structural, MEP, and Interior disciplines.</li>
                  <li>High-quality 3D visualizations and photorealistic renderings using SketchUp, V-Ray, Blender, Enscape, and Lumion.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-cormorant text-base sm:text-lg font-bold tracking-wide text-neutral-950 uppercase border-b-2 border-[#B89255] pb-1 mb-3">
                  LANGUAGES
                </h2>
                <div className="space-y-1.5 text-xs text-left">
                  <div>
                    <span className="font-bold text-neutral-950">English:</span>
                    <span className="text-neutral-600 ml-1">Professional</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Tamil:</span>
                    <span className="text-neutral-600 ml-1">Native</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950">Malayalam:</span>
                    <span className="text-neutral-600 ml-1">Conversational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Footer */}
            <div className="pt-4 border-t border-neutral-300 flex flex-wrap justify-between items-center text-[11px] text-neutral-500">
              <span>Abdul Rahman Azhar • Curriculum Vitae</span>
              <span>Architect.abdulrahman007@gmail.com • +971-56 171 3688</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
