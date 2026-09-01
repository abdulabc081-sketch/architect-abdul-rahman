import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import cvPdfUrl from '../assets/docs/Abdul_Rahman_Azhar_Architect_CV.pdf';

export { cvPdfUrl };

export const downloadCvAsPdf = async (_elementId?: string) => {
  try {
    const link = document.createElement('a');
    link.href = cvPdfUrl;
    link.download = 'Abdul_Rahman_Azhar_Architect_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  } catch (err) {
    console.warn('Direct file download fallback:', err);
    generateDirectCvPdf();
  }
};

export const generateDirectCvPdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const primaryDark = [20, 20, 20];
  const goldAccent = [180, 140, 80];
  const textDark = [40, 40, 40];
  const textMuted = [90, 90, 90];
  const textLight = [120, 120, 120];
  const lineGray = [220, 220, 220];

  let currentY = 16;

  const drawHeader = () => {
    // Top Gold Bar
    doc.setFillColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.rect(margin, currentY, contentWidth, 1.5, 'F');
    currentY += 6;

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text('ABDUL RAHMAN AZHAR', margin, currentY);
    currentY += 5;

    // Subtitle
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.text('PROJECT ARCHITECT  |  UAE AUTHORITY APPROVALS  |  PROJECT DELIVERY', margin, currentY);
    currentY += 4.5;

    // Member badge
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text('SOE UAE - Registered Member', margin, currentY);
    currentY += 4.5;

    // Contact Details Line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text('+971-56 171 3688  |  Architect.abdulrahman007@gmail.com  |  Dubai, UAE  |  linkedin.com/in/AbdulRahmanAzhar  |  Employment Visa', margin, currentY);
    currentY += 3.5;

    // Divider
    doc.setDrawColor(lineGray[0], lineGray[1], lineGray[2]);
    doc.setLineWidth(0.4);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 4.5;
  };

  const drawSectionTitle = (title: string) => {
    if (currentY > pageHeight - 30) {
      doc.addPage();
      currentY = 16;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(title.toUpperCase(), margin, currentY);
    currentY += 2;
    doc.setDrawColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, currentY, margin + 40, currentY);
    doc.setDrawColor(lineGray[0], lineGray[1], lineGray[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 40, currentY, pageWidth - margin, currentY);
    currentY += 4;
  };

  // --- PAGE 1 ---
  drawHeader();

  // Summary
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const summaryText = "Dubai based Architect | Project Architect with 6 years of professional experience and 40+ projects delivered across residential, commercial, and fit-out sectors. Specialist in UAE authority approvals (Dubai Municipality, DCD, DDA, Trakhees, DEWA, Nakheel, Emaar), BIM coordination, and end-to-end project delivery from concept through handover.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, currentY);
  currentY += splitSummary.length * 3.8 + 3;

  // CORE COMPETENCIES
  drawSectionTitle('Core Competencies');

  const competencies = [
    { title: 'Architectural Design', desc: 'Concept · Schematic · Design Development · Construction Documentation' },
    { title: 'Authority Approvals', desc: 'Dubai Municipality · DCD · DDA · Trakhees · DEWA · Nakheel · Emaar' },
    { title: 'Project Delivery', desc: 'Tender Documentation · BOQ · Material Coordination · Site Coordination · Handover' },
    { title: 'BIM & Visualization', desc: 'Revit · Navisworks · AutoCAD · SketchUp · V-Ray · Enscape · Lumion · Blender' },
    { title: 'Project Management', desc: 'Client Coordination · Consultant Coordination · Contractor Coordination · Project Schedule & Programme Control · Quality Control' },
  ];

  competencies.forEach((c) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(c.title, margin, currentY);
    currentY += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    const splitDesc = doc.splitTextToSize(c.desc, contentWidth - 4);
    doc.text(splitDesc, margin + 3, currentY);
    currentY += splitDesc.length * 3.4 + 2;
  });

  currentY += 2;

  // PROFESSIONAL EXPERIENCE
  drawSectionTitle('Professional Experience');

  const experiences = [
    {
      role: 'Project Architect',
      company: 'Aram Building Contracting LLC · Dubai, UAE',
      period: 'Aug 2024 – Present',
      bullets: [
        'Led architectural projects end-to-end, from initial brief and concept development through construction completion and handover.',
        'Coordinated with Structural, MEP, and other engineering disciplines to ensure integrated, clash-free designs.',
        'Produced comprehensive construction documents, detailed drawings, and site execution packages for residential and commercial schemes.',
        'Prepared and submitted authority approval packages to Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, and Emaar, ensuring full regulatory compliance.',
        'Developed detailed Bills of Quantities (BOQ) and coordinated with vendors, contractors, and specialist consultants.',
        'Curated and specified materials, finishes, and design elements in alignment with project budgets and client briefs.',
        'Engaged directly with clients to present design solutions, incorporate feedback, and maintain strong professional relationships.',
        'Conducted regular site inspections and resolved design and execution issues to maintain compliance with approved drawings, specifications, quality standards, and project schedules.',
      ],
    },
    {
      role: 'Project Coordinator',
      company: 'Aspirify Interiors Decoration LLC · Dubai, UAE',
      period: 'Aug 2022 – Jul 2024',
      bullets: [
        'Designed residential schemes with a focus on functionality, client aspirations, and contemporary aesthetics.',
        'Prepared complete construction drawing sets plans, elevations, sections, and details for accurate site execution.',
        'Produced photorealistic 3D visualisations using SketchUp, V-Ray, and Blender to support design presentations and client approvals.',
        'Collaborated closely with the principal architect throughout schematic and design development phases.',
      ],
    },
  ];

  experiences.forEach((exp) => {
    if (currentY > pageHeight - 35) {
      doc.addPage();
      currentY = 16;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(exp.role + ' | ', margin, currentY);

    const roleWidth = doc.getTextWidth(exp.role + ' | ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(exp.company, margin + roleWidth, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.text(exp.period, pageWidth - margin, currentY, { align: 'right' });
    currentY += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);

    exp.bullets.forEach((bullet) => {
      if (currentY > pageHeight - 15) {
        doc.addPage();
        currentY = 16;
      }
      doc.text('›', margin + 2, currentY);
      const splitBullet = doc.splitTextToSize(bullet, contentWidth - 6);
      doc.text(splitBullet, margin + 5, currentY);
      currentY += splitBullet.length * 3.3 + 1;
    });

    currentY += 2;
  });

  // --- PAGE 2 ---
  doc.addPage();
  currentY = 16;

  const moreExperiences = [
    {
      role: 'Architect',
      company: 'Arabian Construction and Agencies · India',
      period: 'Jan 2022 – Jul 2022',
      bullets: [
        'Assisted in the design, planning, and coordination of residential construction projects.',
        'Prepared CAD drawings, 3D models, and rendered visualisations to support project documentation.',
        'Ensured design quality and adherence to client requirements at each project milestone.',
        'Gained practical exposure to site workflows, project scheduling, and interdisciplinary team coordination.',
      ],
    },
    {
      role: 'Intern Architect',
      company: 'Akbari Hussain Akbari Architect · Chennai, India',
      period: 'Sep 2021 – Dec 2021',
      bullets: [
        'Collaborated with senior architects to develop design solutions from concept through schematic design.',
        'Prepared architectural drawings and technical documentation for construction and authority submissions.',
        'Generated realistic 3D visualisations and presentation materials to support client approvals and design reviews.',
      ],
    },
    {
      role: 'Intern Architect',
      company: 'Nandhis Architect · Bangalore, India',
      period: 'May 2021 – Aug 2021',
      bullets: [
        'Assisted senior architects in developing schematic and design development packages in line with client requirements.',
        'Produced accurate architectural drawings plans, elevations, sections, and construction details for project execution.',
        'Created high quality 3D renderings and visual presentations to communicate design concepts to clients and stakeholders.',
      ],
    },
  ];

  moreExperiences.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(exp.role + ' | ', margin, currentY);

    const roleWidth = doc.getTextWidth(exp.role + ' | ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(exp.company, margin + roleWidth, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.text(exp.period, pageWidth - margin, currentY, { align: 'right' });
    currentY += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);

    exp.bullets.forEach((bullet) => {
      doc.text('›', margin + 2, currentY);
      const splitBullet = doc.splitTextToSize(bullet, contentWidth - 6);
      doc.text(splitBullet, margin + 5, currentY);
      currentY += splitBullet.length * 3.3 + 1;
    });

    currentY += 2.5;
  });

  // TECHNICAL SKILLS
  drawSectionTitle('Technical Skills');

  const skillsList = [
    { label: 'Design & BIM', val: 'AutoCAD, Autodesk Revit, Navisworks, SketchUp, V-Ray, Enscape, Lumion, Blender' },
    { label: 'Project & Documentation', val: 'Construction Documentation, BOQ Preparation, Tender Documentation, Material Submittals, Authority Submissions, Site Coordination' },
    { label: 'Software', val: 'MS Office, Oracle Primavera P6' },
    { label: 'Graphic & Presentation', val: 'Adobe Photoshop, Illustrator, InDesign, Lightroom' },
    { label: 'UAE Authority Portals', val: 'Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, Emaar — Authority Approval & NOC Coordination' },
    { label: 'Project Skills', val: 'BOQ Preparation, Material Sourcing, Vendor Coordination' },
    { label: 'Soft Skills', val: 'Client Communication, Design Presentation, Team Collaboration' },
  ];

  skillsList.forEach((sk) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(sk.label + ':', margin, currentY);

    const labelW = 45;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    const splitVal = doc.splitTextToSize(sk.val, contentWidth - labelW);
    doc.text(splitVal, margin + labelW, currentY);
    currentY += splitVal.length * 3.4 + 1.5;
  });

  currentY += 2;

  // EDUCATION
  drawSectionTitle('Education');

  const education = [
    { degree: 'Building Information Modelling for Architects', school: 'CADD International · Dubai, UAE', year: '2025' },
    { degree: 'Bachelor of Architecture (B.Arch)', school: 'AMS Academy of Architecture · Chennai, India', year: '2017 – 2022' },
    { degree: 'Higher Secondary Certificate (HSC)', school: 'Tansri Ubaidullah Matriculation Higher Secondary School · India', year: '2015 – 2017' },
  ];

  education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(edu.degree, margin, currentY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(goldAccent[0], goldAccent[1], goldAccent[2]);
    doc.text(edu.year, pageWidth - margin, currentY, { align: 'right' });
    currentY += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(edu.school, margin, currentY);
    currentY += 4.5;
  });

  // CERTIFICATIONS & PROFESSIONAL CREDENTIALS
  drawSectionTitle('Certifications & Professional Credentials');

  const certs = [
    'Project Management Professional (PMP) — PMI ( Preparing)',
    'Agile Project Management — Certification',
    'Dubai Municipality – G+1 Qualification ( Preparing)',
    'Dubai Civil Defence – Delegate License',
    'SOE UAE – Registered Member',
    'Building Information Modelling for Architects — CADD International',
    'Autodesk Revit Architecture — Certification',
    'Autodesk Navisworks — Certification',
  ];

  certs.forEach((cert) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text('› ' + cert, margin + 2, currentY);
    currentY += 3.4;
  });

  // --- PAGE 3 ---
  doc.addPage();
  currentY = 16;

  // UAE AUTHORITY & APPROVAL EXPERIENCE
  drawSectionTitle('UAE Authority & Approval Experience');

  const authExp = [
    { auth: 'Dubai Municipality (DM)', items: ['Building permit / architectural submissions', 'Drawing compliance, authority comments and revisions'] },
    { auth: 'Dubai Civil Defence (DCD)', items: ['Fire & Life Safety coordination', 'Authority submissions and approval coordination'] },
    { auth: 'Dubai Development Authority (DDA)', items: ['Authority submission and approval coordination'] },
    { auth: 'Trakhees', items: ['Authority submission and approval coordination'] },
    { auth: 'Master Developers — Nakheel & Emaar', items: ['Developer side approval coordination on large-scale and master developer projects'] },
  ];

  authExp.forEach((ae) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(ae.auth, margin, currentY);
    currentY += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    ae.items.forEach((item) => {
      doc.text('› ' + item, margin + 4, currentY);
      currentY += 3.2;
    });
    currentY += 1.5;
  });

  // SELECTED PROJECT EXPERIENCE
  drawSectionTitle('Selected Project Experience');

  const projExp = [
    {
      title: '1. Goshi warehouse – Multiple shops',
      role: 'Project Architect — Full Retail Fit-Out',
      scope: 'End-to-end interior fit-out of multiple retail shop units within the development',
      authorities: 'Dubai Municipality, Dubai Civil Defence, Landlord Approvals',
      outcome: 'Completed all works on schedule; achieved zero snagging defects at handover',
    },
    {
      title: '2. SHARIF STAR Real Estate Office – Binary Building Dubai',
      role: 'Project Architect — Commercial Office Fit-Out',
      scope: 'Full interior fit-out of a commercial office environment including MEP coordination and design production',
      authorities: 'Dubai Municipality, Relevant Landlord Authority',
      outcome: 'Successfully delivered the project in accordance with client requirements, quality standards, and project programme.',
    },
    {
      title: '3. Multi-Site Retail & F&B Portfolio – Emaar / Omniyat / TECOM',
      role: 'Project Architect (Concurrent Projects)',
      scope: 'Managed simultaneous authority approvals and fit-out delivery across DM, DCD, Trakhees, DDA, Emaar, TECOM, MERAAS and Omniyat',
      authorities: 'DM, DCD, Trakhees, DDA, Emaar, TECOM, MERAAS, Omniyat',
      outcome: 'Zero permit delays across all delivered projects; cumulative project value AED30 million',
    },
  ];

  projExp.forEach((pe) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(primaryDark[0], primaryDark[1], primaryDark[2]);
    doc.text(pe.title, margin, currentY);
    currentY += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);

    doc.text('› Role: ' + pe.role, margin + 3, currentY);
    currentY += 3.2;
    const splitScope = doc.splitTextToSize('› Scope: ' + pe.scope, contentWidth - 4);
    doc.text(splitScope, margin + 3, currentY);
    currentY += splitScope.length * 3.2;
    doc.text('› Authorities: ' + pe.authorities, margin + 3, currentY);
    currentY += 3.2;
    const splitOut = doc.splitTextToSize('› Outcome: ' + pe.outcome, contentWidth - 4);
    doc.text(splitOut, margin + 3, currentY);
    currentY += splitOut.length * 3.2 + 2;
  });

  // KEY ACHIEVEMENTS
  drawSectionTitle('Key Achievements');

  const achievements = [
    '40+ residential, commercial, and fit-out projects delivered across the UAE and India over 6 years, managed from concept through completion.',
    'Full project lifecycle ownership concept design, design development, tender documentation, BOQ preparation, authority approvals, site coordination, and handover.',
    'Extensive experience coordinating approvals across Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, Omniyat and Emaar.',
    'Developer side exposure through Nakheel and Emaar approval processes, supporting large-scale and master developer projects.',
    'Coordinated closely with Structural, MEP, Interior Design, and other engineering disciplines to deliver integrated, clash free designs.',
    'Produced high-quality 3D visualizations and photorealistic renderings using SketchUp, V-Ray, Blender, Enscape, and Lumion for client presentations.',
  ];

  achievements.forEach((ach) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text('›', margin + 2, currentY);
    const splitAch = doc.splitTextToSize(ach, contentWidth - 6);
    doc.text(splitAch, margin + 5, currentY);
    currentY += splitAch.length * 3.2 + 1;
  });

  currentY += 2;

  // LANGUAGES
  drawSectionTitle('Languages');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text('English — Professional     |     Tamil — Native     |     Malayalam — Conversational', margin + 2, currentY);
  currentY += 7;

  // Footer on page 3
  doc.setDrawColor(lineGray[0], lineGray[1], lineGray[2]);
  doc.setLineWidth(0.3);
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(textLight[0], textLight[1], textLight[2]);
  doc.text('Portfolio & Inquiries: Architect.abdulrahman007@gmail.com  |  +971-56 171 3688  |  linkedin.com/in/AbdulRahmanAzhar', pageWidth / 2, currentY, { align: 'center' });

  doc.save('Abdul_Rahman_Azhar_Architect_CV.pdf');
};
