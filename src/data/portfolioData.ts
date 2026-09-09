import { Project, ExperienceItem, AuthorityBadge, SkillCategory, ServiceItem, WorkflowStep } from '../types';
import portraitImg from '../assets/images/abdul_rahman_portrait_hero.jpg';
import modernArabicVillaImg from '../assets/images/modern_arabic_villa_1788238793681.jpg';
import officeBuildingImg from '../assets/images/dubai_office_building_1788238807552.jpg';
import luxuryApartmentImg from '../assets/images/luxury_apartment_interior_1788238818464.jpg';
import corporateFitoutImg from '../assets/images/corporate_office_fitout_1788238829293.jpg';
import contemporaryVillaImg from '../assets/images/contemporary_villa_barari_1788238848616.jpg';
import privateResidenceImg from '../assets/images/private_residence_abudhabi_1788238859758.jpg';
import binaryCoverImg from '../assets/images/binarybuildingCover.jpg';
import binaryPhoto1Img from '../assets/images/binarybuilding_photo1.jpg';
import binaryPhoto2Img from '../assets/images/binarybuilding_photo2.jpg';
import binaryPhoto3Img from '../assets/images/binarybuilding_photo3.jpg';
import binaryPhoto4Img from '../assets/images/binarybuilding_photo4.jpg';
import binaryPhoto5Img from '../assets/images/binarybuilding_photo5.jpg';
import binaryPhoto6Img from '../assets/images/binarybuilding_photo6.jpg';
import binaryPhoto7Img from '../assets/images/binarybuilding_photo7.jpg';
import binaryPhoto8Img from '../assets/images/binarybuilding_photo8.jpg';
import binaryPhoto9Img from '../assets/images/binarybuilding_photo9.jpg';
import binaryPhoto10Img from '../assets/images/binarybuilding_photo10.jpg';
import binaryPhoto11Img from '../assets/images/binarybuilding_photo11.jpg';
import binaryPhoto12Img from '../assets/images/binarybuilding_photo12.jpg';
import retailComplexImg from '../assets/images/retail_complex_aurun_1788238872897.jpg';
import restaurantInteriorImg from '../assets/images/restaurant_interior_jumeirah_1788238885620.jpg';
import downtownView4906CoverImg from '../assets/images/downtownviewappartment4906Cover.jpg';
import downtownView4906Photo1Img from '../assets/images/downtownviewappartment4906_photo1.jpg';
import downtownView4906Photo2Img from '../assets/images/downtownviewappartment4906_photo2.jpg';
import downtownView4906Photo3Img from '../assets/images/downtownviewappartment4906_photo3.jpg';
import downtownView4906Photo4Img from '../assets/images/downtownviewappartment4906_photo4.jpg';
import downtownView4906Photo5Img from '../assets/images/downtownviewappartment4906_photo5.jpg';
import downtownView4906Photo6Img from '../assets/images/downtownviewappartment4906_photo6.jpg';
import downtownView4906Photo7Img from '../assets/images/downtownviewappartment4906_photo7.jpg';
import downtownView4906Photo8Img from '../assets/images/downtownviewappartment4906_photo8.jpg';
import downtownView4906Photo9Img from '../assets/images/downtownviewappartment4906_photo9.jpg';
import downtownView4906Photo10Img from '../assets/images/downtownviewappartment4906_photo10.jpg';
import downtownView4906Photo11Img from '../assets/images/downtownviewappartment4906_photo11.jpg';
import downtownView4906Photo12Img from '../assets/images/downtownviewappartment4906_photo12.jpg';
import downtownView4906Photo13Img from '../assets/images/downtownviewappartment4906_photo13.jpg';
import downtownView4906Photo14Img from '../assets/images/downtownviewappartment4906_photo14.jpg';
import downtownView4906Photo15Img from '../assets/images/downtownviewappartment4906_photo15.jpg';
import downtownView4906Photo16Img from '../assets/images/downtownviewappartment4906_photo16.jpg';
import downtownView4906Photo17Img from '../assets/images/downtownviewappartment4906_photo17.jpg';
import downtownView4906Photo18Img from '../assets/images/downtownviewappartment4906_photo18.jpg';
import downtownView4906Photo19Img from '../assets/images/downtownviewappartment4906_photo19.jpg';
import downtownView4906Photo20Img from '../assets/images/downtownviewappartment4906_photo20.jpg';
import arabianRanchesVilla69CoverImg from '../assets/images/arabianranchesvilla69Cover.jpg';
import arabianRanchesVilla69Photo1Img from '../assets/images/arabianranchesvilla69_photo1.jpg';
import arabianRanchesVilla69Photo2Img from '../assets/images/arabianranchesvilla69_photo2.jpg';
import arabianRanchesVilla69Photo3Img from '../assets/images/arabianranchesvilla69_photo3.jpg';
import arabianRanchesVilla69Photo4Img from '../assets/images/arabianranchesvilla69_photo4.jpg';
import arabianRanchesVilla69Photo5Img from '../assets/images/arabianranchesvilla69_photo5.jpg';
import arabianRanchesVilla69Photo6Img from '../assets/images/arabianranchesvilla69_photo6.jpg';
import arabianRanchesVilla69Photo7Img from '../assets/images/arabianranchesvilla69_photo7.jpg';
import arabianRanchesVilla69Photo8Img from '../assets/images/arabianranchesvilla69_photo8.jpg';
import arabianRanchesVilla69Photo9Img from '../assets/images/arabianranchesvilla69_photo9.jpg';
import arabianRanchesVilla69Photo10Img from '../assets/images/arabianranchesvilla69_photo10.jpg';
import arabianRanchesVilla69Photo11Img from '../assets/images/arabianranchesvilla69_photo11.jpg';
import arabianRanchesVilla69Photo12Img from '../assets/images/arabianranchesvilla69_photo12.jpg';
import arabianRanchesVilla69Photo13Img from '../assets/images/arabianranchesvilla69_photo13.jpg';
import arabianRanchesVilla69Photo14Img from '../assets/images/arabianranchesvilla69_photo14.jpg';
import fashionAvenueCoverImg from '../assets/images/fashionavenuedubaimallresidenceCover.jpg';
import fashionAvenuePhoto1Img from '../assets/images/fashionavenuedubaimallresidence_photo1.jpg';
import fashionAvenuePhoto2Img from '../assets/images/fashionavenuedubaimallresidence_photo2.jpg';
import fashionAvenuePhoto3Img from '../assets/images/fashionavenuedubaimallresidence_photo3.jpg';
import fashionAvenuePhoto4Img from '../assets/images/fashionavenuedubaimallresidence_photo4.jpg';
import fashionAvenuePhoto5Img from '../assets/images/fashionavenuedubaimallresidence_photo5.jpg';
import fashionAvenuePhoto6Img from '../assets/images/fashionavenuedubaimallresidence_photo6.jpg';
import fashionAvenuePhoto7Img from '../assets/images/fashionavenuedubaimallresidence_photo7.jpg';
import fashionAvenuePhoto8Img from '../assets/images/fashionavenuedubaimallresidence_photo8.jpg';
import fashionAvenuePhoto9Img from '../assets/images/fashionavenuedubaimallresidence_photo9.jpg';
import jumeirahHeightsWestCCoverImg from '../assets/images/jumeirahheightswestcCover.jpg';
import jumeirahHeightsWestCPhoto1Img from '../assets/images/jumeirahheightswestc_photo1.jpg';
import jumeirahHeightsWestCPhoto2Img from '../assets/images/jumeirahheightswestc_photo2.jpg';
import jumeirahHeightsWestCPhoto3Img from '../assets/images/jumeirahheightswestc_photo3.jpg';
import jumeirahHeightsWestCPhoto4Img from '../assets/images/jumeirahheightswestc_photo4.jpg';
import jumeirahHeightsWestCPhoto5Img from '../assets/images/jumeirahheightswestc_photo5.jpg';
import jumeirahHeightsWestCPhoto6Img from '../assets/images/jumeirahheightswestc_photo6.jpg';
import jumeirahHeightsWestCPhoto7Img from '../assets/images/jumeirahheightswestc_photo7.jpg';
import jumeirahHeightsWestCPhoto8Img from '../assets/images/jumeirahheightswestc_photo8.jpg';
import jumeirahHeightsWestCPhoto9Img from '../assets/images/jumeirahheightswestc_photo9.jpg';
import jumeirahHeightsWestCPhoto10Img from '../assets/images/jumeirahheightswestc_photo10.jpg';
import urbanoasisbuildingCoverImg from '../assets/images/urbanoasisbuildingCover.jpg';
import urbanoasisbuildingPhoto1Img from '../assets/images/urbanoasisbuilding_photo1.jpg';
import urbanoasisbuildingPhoto2Img from '../assets/images/urbanoasisbuilding_photo2.jpg';
import urbanoasisbuildingPhoto3Img from '../assets/images/urbanoasisbuilding_photo3.jpg';
import urbanoasisbuildingPhoto4Img from '../assets/images/urbanoasisbuilding_photo4.jpg';
import urbanoasisbuildingPhoto5Img from '../assets/images/urbanoasisbuilding_photo5.jpg';
import urbanoasisbuildingPhoto6Img from '../assets/images/urbanoasisbuilding_photo6.jpg';
import urbanoasisbuildingPhoto7Img from '../assets/images/urbanoasisbuilding_photo7.jpg';
import urbanoasisbuildingPhoto8Img from '../assets/images/urbanoasisbuilding_photo8.jpg';
import urbanoasisbuildingPhoto9Img from '../assets/images/urbanoasisbuilding_photo9.jpg';
import urbanoasisbuildingPhoto10Img from '../assets/images/urbanoasisbuilding_photo10.jpg';
import urbanoasisbuildingPhoto11Img from '../assets/images/urbanoasisbuilding_photo11.jpg';
import urbanoasisbuildingPhoto12Img from '../assets/images/urbanoasisbuilding_photo12.jpg';
import district1residence7CoverImg from '../assets/images/district1residence7Cover.jpg';
import district1residence7Photo1Img from '../assets/images/district1residence7_photo1.jpg';
import district1residence7Photo2Img from '../assets/images/district1residence7_photo2.jpg';
import district1residence7Photo3Img from '../assets/images/district1residence7_photo3.jpg';
import district1residence7Photo4Img from '../assets/images/district1residence7_photo4.jpg';
import district1residence7Photo5Img from '../assets/images/district1residence7_photo5.jpg';
import district1residence7Photo6Img from '../assets/images/district1residence7_photo6.jpg';
import district1residence7Photo7Img from '../assets/images/district1residence7_photo7.jpg';
import district1residence7Photo8Img from '../assets/images/district1residence7_photo8.jpg';
import district1residence7Photo9Img from '../assets/images/district1residence7_photo9.jpg';
import rosaArtCoverImg from '../assets/images/rosaartCover.jpg';
import rosaArtPhoto1Img from '../assets/images/rosaart_photo1.jpg';
import rosaArtPhoto2Img from '../assets/images/rosaart_photo2.jpg';
import rosaArtPhoto3Img from '../assets/images/rosaart_photo3.jpg';
import rosaArtPhoto4Img from '../assets/images/rosaart_photo4.jpg';
import rosaArtPhoto5Img from '../assets/images/rosaart_photo5.jpg';
import rosaArtPhoto6Img from '../assets/images/rosaart_photo6.jpg';
import rosaArtPhoto7Img from '../assets/images/rosaart_photo7.jpg';
import rosaArtPhoto8Img from '../assets/images/rosaart_photo8.jpg';
import rosaArtPhoto9Img from '../assets/images/rosaart_photo9.jpg';
import rosaArtPhoto10Img from '../assets/images/rosaart_photo10.jpg';
import rosaArtPhoto11Img from '../assets/images/rosaart_photo11.jpg';
import rosaArtPhoto12Img from '../assets/images/rosaart_photo12.jpg';
import rosaArtPhoto13Img from '../assets/images/rosaart_photo13.jpg';
import angelHomesCoverImg from '../assets/images/angelhomesCover.jpg';
import angelHomesPhoto1Img from '../assets/images/angelhomes_photo1.jpg';
import angelHomesPhoto2Img from '../assets/images/angelhomes_photo2.jpg';
import angelHomesPhoto3Img from '../assets/images/angelhomes_photo3.jpg';
import angelHomesPhoto4Img from '../assets/images/angelhomes_photo4.jpg';
import angelHomesPhoto5Img from '../assets/images/angelhomes_photo5.jpg';
import angelHomesPhoto6Img from '../assets/images/angelhomes_photo6.jpg';
import angelHomesPhoto7Img from '../assets/images/angelhomes_photo7.jpg';
import angelHomesPhoto8Img from '../assets/images/angelhomes_photo8.jpg';
import g1lineshippingCoverImg from '../assets/images/g1lineshippingCover.jpg';
import g1lineshippingPhoto1Img from '../assets/images/g1lineshipping_photo1.jpg';
import g1lineshippingPhoto2Img from '../assets/images/g1lineshipping_photo2.jpg';
import g1lineshippingPhoto3Img from '../assets/images/g1lineshipping_photo3.jpg';
import g1lineshippingPhoto4Img from '../assets/images/g1lineshipping_photo4.jpg';
import g1lineshippingPhoto5Img from '../assets/images/g1lineshipping_photo5.jpg';
import g1lineshippingPhoto6Img from '../assets/images/g1lineshipping_photo6.jpg';
import pearlshireCoverImg from '../assets/images/pearlshireofficeoasiscenterCover.jpg';
import pearlshirePhoto1Img from '../assets/images/pearlshireofficeoasiscenter_photo1.jpg';
import pearlshirePhoto2Img from '../assets/images/pearlshireofficeoasiscenter_photo2.jpg';
import pearlshirePhoto3Img from '../assets/images/pearlshireofficeoasiscenter_photo3.jpg';
import pearlshirePhoto4Img from '../assets/images/pearlshireofficeoasiscenter_photo4.jpg';
import pearlshirePhoto5Img from '../assets/images/pearlshireofficeoasiscenter_photo5.jpg';
import pearlshirePhoto6Img from '../assets/images/pearlshireofficeoasiscenter_photo6.jpg';
import pearlshirePhoto7Img from '../assets/images/pearlshireofficeoasiscenter_photo7.jpg';
import pearlshirePhoto8Img from '../assets/images/pearlshireofficeoasiscenter_photo8.jpg';
import pearlshirePhoto9Img from '../assets/images/pearlshireofficeoasiscenter_photo9.jpg';
import degrootCoverImg from '../assets/images/degrootconcordtowerCover.jpg';
import degrootPhoto1Img from '../assets/images/degrootconcordtower_photo1.jpg';
import degrootPhoto2Img from '../assets/images/degrootconcordtower_photo2.jpg';
import degrootPhoto3Img from '../assets/images/degrootconcordtower_photo3.jpg';
import degrootPhoto4Img from '../assets/images/degrootconcordtower_photo4.jpg';
import degrootPhoto5Img from '../assets/images/degrootconcordtower_photo5.jpg';
import degrootPhoto6Img from '../assets/images/degrootconcordtower_photo6.jpg';
import degrootPhoto7Img from '../assets/images/degrootconcordtower_photo7.jpg';
import degrootPhoto8Img from '../assets/images/degrootconcordtower_photo8.jpg';
import degrootPhoto9Img from '../assets/images/degrootconcordtower_photo9.jpg';
import samaCoverImg from '../assets/images/samatowerCover.jpg';
import samaPhoto1Img from '../assets/images/samatower_photo1.jpg';
import samaPhoto2Img from '../assets/images/samatower_photo2.jpg';
import samaPhoto3Img from '../assets/images/samatower_photo3.jpg';
import samaPhoto4Img from '../assets/images/samatower_photo4.jpg';
import samaPhoto5Img from '../assets/images/samatower_photo5.jpg';
import samaPhoto6Img from '../assets/images/samatower_photo6.jpg';
import samaPhoto7Img from '../assets/images/samatower_photo7.jpg';
import samaPhoto8Img from '../assets/images/samatower_photo8.jpg';
import samaPhoto9Img from '../assets/images/samatower_photo9.jpg';
import samaPhoto10Img from '../assets/images/samatower_photo10.jpg';
import samaPhoto11Img from '../assets/images/samatower_photo11.jpg';
import burjSalamCoverImg from '../assets/images/burjalsalamCover.jpg';
import burjSalamPhoto1Img from '../assets/images/burjalsalam_photo1.jpg';
import burjSalamPhoto2Img from '../assets/images/burjalsalam_photo2.jpg';
import burjSalamPhoto3Img from '../assets/images/burjalsalam_photo3.jpg';
import burjSalamPhoto4Img from '../assets/images/burjalsalam_photo4.jpg';
import burjSalamPhoto5Img from '../assets/images/burjalsalam_photo5.jpg';
import burjSalamPhoto6Img from '../assets/images/burjalsalam_photo6.jpg';
import burjSalamPhoto7Img from '../assets/images/burjalsalam_photo7.jpg';
import burjSalamPhoto8Img from '../assets/images/burjalsalam_photo8.jpg';
import burjSalamPhoto9Img from '../assets/images/burjalsalam_photo9.jpg';
import burjSalamPhoto10Img from '../assets/images/burjalsalam_photo10.jpg';
import burjSalamPhoto11Img from '../assets/images/burjalsalam_photo11.jpg';
import burjSalamPhoto12Img from '../assets/images/burjalsalam_photo12.jpg';
export {
  portraitImg,
  modernArabicVillaImg,
  officeBuildingImg,
  luxuryApartmentImg,
  corporateFitoutImg,
  contemporaryVillaImg,
  privateResidenceImg,
  retailComplexImg,
  restaurantInteriorImg,
};

export const personalInfo = {
  name: 'ABDUL RAHMAN AZHAR',
  firstName: 'ABDUL RAHMAN',
  lastName: 'AZHAR',
  brand: 'ARCHITECTURAL',
  roles: ['ARCHITECT', 'PROJECT ARCHITECT', 'PROJECT DELIVERY'],
  experienceYears: '06+',
  projectsDelivered: '40+',
  region: 'UAE',
  regionLabel: 'PROFESSIONAL EXPERIANCE',
  email: 'architect.abdulrahman007@gmail.com',
  location: 'Dubai, UAE',
  phone: '+9710561713688',
  linkedin: 'https://www.linkedin.com/in/abdul-rahman-azhar-00a92018b/',
  whatsapp: 'https://wa.me/971561713688',
  bio: `A dedicated and results driven Architect with over 6 years of professional experience in the UAE, having successfully delivered 40+ projects across residential, commercial, and fit-out sectors. Experienced in managing the full project lifecycle from concept and schematic design through design development, construction documentation, authority approvals, tender documentation, material selection, BOQ preparation, and site coordination. Strong knowledge of UAE building regulations and approval processes, with proven experience securing approvals and NOCs from Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel, and Emaar. Adept at producing high quality 3D visualisations and detailed technical drawings that clearly communicate design intent to clients, consultants, and contractors. Skilled in collaborating with multidisciplinary teams to deliver projects on time, within budget, and to the highest quality standards with a strong commitment to innovative, sustainable, and functional design solutions.`,
  quote: `Architecture is not just about buildings, but about creating better spaces for better living.`,
  quoteAuthor: `Abdul Rahman Azhar`,
};

export const experienceData: ExperienceItem[] = [
  {
    period: '2024 - PRESENT',
    role: 'PROJECT ARCHITECT',
    company: 'Aram Building Contracting LLC',
    location: 'Dubai, UAE',
    description: 'Leading architectural projects from initial brief and concept development through authority approvals, technical documentation, construction, and final handover. Working across residential and commercial projects while coordinating clients, consultants, contractors, vendors, and multidisciplinary teams to deliver compliant and buildable solutions.',
    responsibilities: [
      'Led projects end-to-end, from concept design through construction completion and handover.',
      'Managed authority submissions and approvals with Dubai Municipality, Trakhees, DDA, DCD, DEWA, Nakheel and Emaar.',
      'Coordinated Architectural, Structural, MEP, and specialist disciplines to achieve integrated project delivery.',
      'Developed construction drawings, technical details, BOQs, specifications, and site execution packages.',
      'Conducted site inspections and resolved design, coordination, and execution issues on-site maintaining quality, compliance, and project schedules.',
    ],
    keyProjects: ['Residential Villas', 'Commercial Developments'],
    authoritiesHandled: ['DM', 'Trakhees', 'DDA', 'DCD', 'DEWA', 'Nakheel', 'Emaar'],
  },
  {
    period: 'AUG2022 - JUL2024',
    role: 'PROJECT COORDINATOR',
    company: 'Aspirify Interiors Decoration LLC',
    location: 'Dubai, UAE',
    description: 'Coordinated residential interior projects from design development through technical documentation, visualization, and execution. Worked closely with the Principal Architect and clients to transform design concepts into practical and visually refined interior environments.',
    responsibilities: [
      'Developed residential interiors focused on functionality, contemporary aesthetics, and client requirements.',
      'Prepared complete construction drawing packages including plans, elevations, sections, and detailed drawings.',
      'Produced high-quality 3D models and photorealistic visualisations using SketchUp, V-Ray, and Blender.',
      'Coordinated design development, revisions, and technical requirements with the Principal Architect and project team.',
      'Supported client presentations, material selections, design approvals, and site execution.',
    ],
    keyProjects: ['Luxury Residential Interiors', 'Executive Fit-Outs'],
    authoritiesHandled: ['Dubai Municipality', 'Trakhees', 'DCD'],
  },
  {
    period: 'JAN2022 - JUL2022',
    role: 'ARCHITECT',
    company: 'Arabian Construction and Agencies.',
    location: 'Dubai, UAE',
    description: 'Supported residential construction projects across architectural design, planning, documentation, visualization, and site coordination. The role strengthened my understanding of the relationship between design intent, technical documentation, and real-world construction.',
    responsibilities: [
      'Assisted in architectural design, planning, and project coordination.',
      'Prepared accurate CAD drawings, 3D models, and rendered visualizations.',
      'Developed design documentation according to client requirements and project milestones.',
      'Supported coordination between design teams and site activities.',
      'Gained practical experience in construction workflows, scheduling, and multidisciplinary coordination.',
    ],
    keyProjects: ['Residential Construction', 'Planning & CAD Packages'],
    authoritiesHandled: ['Dubai Municipality', 'DEWA'],
  },
  {
    period: 'SEP2021 - DEC2021',
    role: 'INTERN ARCHITECT',
    company: 'Akbari Hussain Akbari Architect',
    location: 'India',
    description: 'Worked alongside senior architects during concept and schematic design development, gaining practical experience in architectural documentation, visualization, and project presentation.',
    responsibilities: [
      'Concept and schematic design support.',
      'Architectural documentation and drafting in AutoCAD.',
      '3D modeling and visual rendering for presentation.',
    ],
    keyProjects: ['Schematic Design Proposals'],
    authoritiesHandled: ['Dubai Municipality'],
  },
  {
    period: 'MAY2021 - AUG2021',
    role: 'INTERN ARCHITECT',
    company: 'Nandhis Architect',
    location: 'India',
    description: 'Built a strong foundation in architectural design and documentation by supporting senior architects across schematic design, technical drawings, visualization, and presentation development.',
    responsibilities: [
      'Supported senior architects across schematic design and technical drawings.',
      'Visualization and presentation development for client reviews.',
    ],
    keyProjects: ['Design & Documentation'],
    authoritiesHandled: ['Local Authorities'],
  },
];

export const authoritiesWorked = [
  {
    code: 'DM',
    arabicName: 'بلدية دبي',
    englishName: 'DUBAI MUNICIPALITY',
  },
  {
    code: 'DCD',
    arabicName: 'الدفاع المدني دبي',
    englishName: 'DUBAI CIVIL DEFENCE',
  },
  {
    code: 'DDA',
    arabicName: 'سلطة دبي للتطوير',
    englishName: 'DUBAI DEVELOPMENT AUTHORITY',
  },
  {
    code: 'TRAKHEES',
    arabicName: 'تراخيص',
    englishName: 'TRAKHEES',
  },
  {
    code: 'NAKHEEL',
    arabicName: 'نخيل',
    englishName: 'NAKHEEL',
  },
  {
    code: 'EMAAR',
    arabicName: 'إعمار',
    englishName: 'EMAAR',
  },
];

export const certifications = [
  'Project Management Professional (PMP) — PMI | TRAINING COMPLETED',
  'Agile Project Management — Certification',
  'Dubai Municipality — G+1 Qualification (Preparing)',
  'Dubai Civil Defence — Delegate License',
  'SOE UAE — Registered Member',
  'Building Information Modelling for Architects — CADD International',
  'Autodesk Revit Architecture — Certification',
  'Autodesk Navisworks — Certification',
];

export const servicesWhatIDo: ServiceItem[] = [
  {
    number: '01',
    title: 'ARCHITECTURAL DESIGN',
    description: 'Concept development, schematic design and detailed architecture solutions.',
    iconName: 'PenTool',
  },
  {
    number: '02',
    title: 'DRAWINGS & TECHNICAL DOCUMENTATION',
    description: 'Detailed drawings, specifications and documentation for approvals and construction.',
    iconName: 'FileText',
  },
  {
    number: '03',
    title: 'AUTHORITY APPROVALS & COORDINATION',
    description: 'Handling submissions and approvals with DM, DCD, DDA, Trakhees, DEWA and other authorities.',
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'MULTIDISCIPLINARY COORDINATION',
    description: 'Coordinating with structural, MEP and other consultants for seamless integration.',
    iconName: 'Users',
  },
  {
    number: '05',
    title: 'SITE SUPERVISION & SUPPORT',
    description: 'Site visits, technical support and quality control during construction.',
    iconName: 'HardHat',
  },
  {
    number: '06',
    title: '3D VISUALIZATION & PRESENTATION',
    description: 'Photorealistic 3D renders, walkthroughs and presentations for clients and stakeholders.',
    iconName: 'Eye',
  },
  {
    number: '07',
    title: 'BOQ & COST ESTIMATION',
    description: 'Accurate BOQ, quantity take-off and cost estimation for better budget control.',
    iconName: 'Calculator',
  },
  {
    number: '08',
    title: 'PROJECT MANAGEMENT SUPPORT',
    description: 'Planning, tracking and coordination to ensure projects are delivered on time and within budget.',
    iconName: 'Clock',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'RESEARCH & ANALYSIS',
    description: 'Understanding client needs, site context and project goals.',
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'CONCEPT & IDEATION',
    description: 'Developing design concepts and spatial strategies.',
    iconName: 'Lightbulb',
  },
  {
    number: '03',
    title: 'SCHEMATIC & DEVELOPMENT',
    description: 'Refining layouts, massing and design development.',
    iconName: 'Layout',
  },
  {
    number: '04',
    title: 'DOCUMENTATION',
    description: 'Preparing drawings, specifications and documents.',
    iconName: 'FileCode',
  },
  {
    number: '05',
    title: 'APPROVALS & PERMITS',
    description: 'Submitting to authorities and obtaining all necessary approvals.',
    iconName: 'CheckCircle2',
  },
  {
    number: '06',
    title: 'CONSTRUCTION SUPPORT',
    description: 'Site coordination, clarifications and technical support.',
    iconName: 'Building2',
  },
  {
    number: '07',
    title: 'HANDOVER & CLOSEOUT',
    description: 'Final handover, documentation and project closeout.',
    iconName: 'Key',
  },
  ];

export const projectsData: Project[] = [
  {
    id: 'sharif-group-office',
    title: 'SHARIF GROUP OFFICE',
    subtitle: 'Corporate Office Fit-Out at Binary Tower',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Business Bay, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: binaryCoverImg,
    gallery: [
      binaryPhoto1Img,
      binaryPhoto2Img,
      binaryPhoto3Img,
      binaryPhoto4Img,
      binaryPhoto5Img,
      binaryPhoto6Img,
      binaryPhoto7Img,
      binaryPhoto8Img,
      binaryPhoto9Img,
      binaryPhoto10Img,
      binaryPhoto11Img,
      binaryPhoto12Img,
    ],
    summary: 'A corporate office fit-out for Sharif Group, balancing warm natural materials with a refined, modern identity across reception, executive offices, and lounge areas.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence', 'Omniyat'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
     {
    id: 'district1-residence7',
    title: 'DISTRICT 01 RESIDENCE 07',
    subtitle: 'Contemporary Residential Interior Design',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'District 01, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: district1residence7CoverImg,
    gallery: [
      district1residence7Photo1Img,
      district1residence7Photo2Img,
      district1residence7Photo3Img,
      district1residence7Photo4Img,
      district1residence7Photo5Img,
      district1residence7Photo6Img,
      district1residence7Photo7Img,
      district1residence7Photo8Img,
      district1residence7Photo9Img,
    ],
    summary: 'A thoughtfully planned residential interior designed to achieve a balance between comfort, functionality, privacy, and contemporary living, organizing the home into clearly defined living, dining, kitchen, bedroom, and service zones while maintaining a smooth connection between shared and private spaces.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
      {
    id: 'downtown-view-ii-apartment-4906',
    title: 'DOWNTOWN VIEW II APARTMENT',
    subtitle: 'Luxury Residential · 3-Bedroom Apartment',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'Downtown View II, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: downtownView4906CoverImg,
    gallery: [
      downtownView4906Photo1Img,
      downtownView4906Photo2Img,
      downtownView4906Photo3Img,
      downtownView4906Photo4Img,
      downtownView4906Photo5Img,
      downtownView4906Photo6Img,
      downtownView4906Photo7Img,
      downtownView4906Photo8Img,
      downtownView4906Photo9Img,
      downtownView4906Photo10Img,
      downtownView4906Photo11Img,
      downtownView4906Photo12Img,
      downtownView4906Photo13Img,
      downtownView4906Photo14Img,
      downtownView4906Photo15Img,
      downtownView4906Photo16Img,
      downtownView4906Photo17Img,
      downtownView4906Photo18Img,
      downtownView4906Photo19Img,
      downtownView4906Photo20Img,
    ],
    summary: 'A contemporary 3-bedroom residence in Downtown Dubai combining sophisticated aesthetics with comfortable, functional family living, organized around a generous open-plan living, dining, and kitchen zone with privately positioned bedrooms and dedicated bathrooms.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'arabian-ranches-villa-69',
    title: 'ARABIAN RANCHES VILLA 69',
    subtitle: 'Luxury Residential Villa',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'Arabian Ranches, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: arabianRanchesVilla69CoverImg,
    gallery: [
      arabianRanchesVilla69Photo1Img,
      arabianRanchesVilla69Photo2Img,
      arabianRanchesVilla69Photo3Img,
      arabianRanchesVilla69Photo4Img,
      arabianRanchesVilla69Photo5Img,
      arabianRanchesVilla69Photo6Img,
      arabianRanchesVilla69Photo7Img,
      arabianRanchesVilla69Photo8Img,
      arabianRanchesVilla69Photo9Img,
      arabianRanchesVilla69Photo10Img,
      arabianRanchesVilla69Photo11Img,
      arabianRanchesVilla69Photo12Img,
      arabianRanchesVilla69Photo13Img,
      arabianRanchesVilla69Photo14Img,
    ],
    summary: 'A refined residential villa designed around family living, privacy, comfort, and functional spatial planning, with formal and family areas on the ground floor and private accommodation including a master suite, additional bedroom, dressing areas, and balconies on the upper floor.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'burj-al-salam-office-806',
    title: 'BURJ AL SALAM OFFICE -806',
    subtitle: 'VIVENT Luxury Retail Store at Burj Al Salam',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Sheikh Zayed Road, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: burjSalamCoverImg,
    gallery: [
      burjSalamPhoto1Img,
      burjSalamPhoto2Img,
      burjSalamPhoto3Img,
      burjSalamPhoto4Img,
      burjSalamPhoto5Img,
      burjSalamPhoto6Img,
      burjSalamPhoto7Img,
      burjSalamPhoto8Img,
      burjSalamPhoto9Img,
      burjSalamPhoto10Img,
      burjSalamPhoto11Img,
      burjSalamPhoto12Img,
    ],
    summary: 'VIVENT is a premium retail destination for luxury bags and watches, designed with warm tones, rich materials, and sophisticated lighting to reflect the brand\'s commitment to quality and timeless luxury.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence', 'SRG Holdings'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
    {
    id: 'urban-oasis',
    title: 'URBAN OASIS',
    subtitle: 'Residential Apartment Building Interior Design',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'Urban Oasis Building, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: urbanoasisbuildingCoverImg,
    gallery: [
      urbanoasisbuildingPhoto1Img,
      urbanoasisbuildingPhoto2Img,
      urbanoasisbuildingPhoto3Img,
      urbanoasisbuildingPhoto4Img,
      urbanoasisbuildingPhoto5Img,
      urbanoasisbuildingPhoto6Img,
      urbanoasisbuildingPhoto7Img,
      urbanoasisbuildingPhoto8Img,
      urbanoasisbuildingPhoto9Img,
      urbanoasisbuildingPhoto10Img,
      urbanoasisbuildingPhoto11Img,
      urbanoasisbuildingPhoto12Img,
    ],
    summary: 'A contemporary residential apartment development designed to create a calm and comfortable living environment within an urban setting, focusing on efficient space utilization, functional circulation, natural light, and privacy across living, dining, kitchen, and bedroom spaces.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
    {
    id: 'fashion-avenue-dubai-mall-residence',
    title: 'FASHION AVENUE',
    subtitle: 'Dubai Mall Residence Interior Design',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'Fashion Avenue Dubai Mall Residence, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: fashionAvenueCoverImg,
    gallery: [
      fashionAvenuePhoto1Img,
      fashionAvenuePhoto2Img,
      fashionAvenuePhoto3Img,
      fashionAvenuePhoto4Img,
      fashionAvenuePhoto5Img,
      fashionAvenuePhoto6Img,
      fashionAvenuePhoto7Img,
      fashionAvenuePhoto8Img,
      fashionAvenuePhoto9Img,
    ],
    summary: 'A refined luxury residence within the prestigious Fashion Avenue at Dubai Mall, combining contemporary elegance with a warm, sophisticated atmosphere across an open-plan living, dining, and kitchen environment and a private, comfort-focused bedroom.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'sama-tower-office-301',
    title: 'SAMA TOWER OFFICE -301',
    subtitle: 'Corporate Office Fit-Out at Sama Tower',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Sheikh Zayed Road, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: samaCoverImg,
    gallery: [
      samaPhoto1Img,
      samaPhoto2Img,
      samaPhoto3Img,
      samaPhoto4Img,
      samaPhoto5Img,
      samaPhoto6Img,
      samaPhoto7Img,
      samaPhoto8Img,
      samaPhoto9Img,
      samaPhoto10Img,
      samaPhoto11Img,
    ],
    summary: 'A refined corporate office fit-out at Sama Tower, balancing functionality with understated elegance across reception, boardroom, and private office spaces.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence', 'Omniyat'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'degroot-office-1103',
    title: 'DEGROOT OFFICE -1103',
    subtitle: 'Corporate Office Fit-Out at Concord Tower',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Concord Tower, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: degrootCoverImg,
    gallery: [
      degrootPhoto1Img,
      degrootPhoto2Img,
      degrootPhoto3Img,
      degrootPhoto4Img,
      degrootPhoto5Img,
      degrootPhoto6Img,
      degrootPhoto7Img,
      degrootPhoto8Img,
      degrootPhoto9Img,
    ],
    summary: 'A contemporary workplace for Degroot designed around clarity, collaboration, and focused productivity, combining refined materiality with flexible spatial planning across private offices, workstations, and meeting areas.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'pearlshire-office-09',
    title: 'PEARLSHIRE OFFICE -09',
    subtitle: 'Corporate Office Fit-Out at Oasis Center',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Oasis Center, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: pearlshireCoverImg,
    gallery: [
      pearlshirePhoto1Img,
      pearlshirePhoto2Img,
      pearlshirePhoto3Img,
      pearlshirePhoto4Img,
      pearlshirePhoto5Img,
      pearlshirePhoto6Img,
      pearlshirePhoto7Img,
      pearlshirePhoto8Img,
      pearlshirePhoto9Img,
    ],
    summary: 'A thoughtfully planned corporate office space designed to balance collaboration, focus, and functionality, integrating reception, meeting space, workstations, and executive cabins within an efficient spatial arrangement.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
   {
    id: 'rosa-art-showroom',
    title: 'ROSA ART',
    subtitle: 'Flower Shop & Corporate Office',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Al Quoz, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: rosaArtCoverImg,
    gallery: [
      rosaArtPhoto1Img,
      rosaArtPhoto2Img,
      rosaArtPhoto3Img,
      rosaArtPhoto4Img,
      rosaArtPhoto5Img,
      rosaArtPhoto6Img,
      rosaArtPhoto7Img,
      rosaArtPhoto8Img,
      rosaArtPhoto9Img,
      rosaArtPhoto10Img,
      rosaArtPhoto11Img,
      rosaArtPhoto12Img,
      rosaArtPhoto13Img,
    ],
    summary: 'A contemporary flower boutique and corporate office designed to create an immersive connection between nature, creativity, and refined retail, with a ground floor retail environment for curated flower displays and a first floor professional workspace for the team.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence', 'Goshi Warehouse'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'angel-homes-showroom',
    title: 'ANGEL HOMES',
    subtitle: 'Furniture Showroom & Office',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Al Quoz, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: angelHomesCoverImg,
    gallery: [
      angelHomesPhoto1Img,
      angelHomesPhoto2Img,
      angelHomesPhoto3Img,
      angelHomesPhoto4Img,
      angelHomesPhoto5Img,
      angelHomesPhoto6Img,
      angelHomesPhoto7Img,
      angelHomesPhoto8Img,
    ],
    summary: 'A contemporary furniture showroom and corporate office designed to create a refined, welcoming environment reflecting the brand\'s focus on quality, comfort, and modern living, combining natural wood, elegant stone, and carefully integrated lighting.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence', 'Goshi Warehouse'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
    {
    id: 'jumeirah-heights-west-c',
    title: 'JUMEIRAH HEIGHTS WEST',
    subtitle: 'Contemporary Residential Interior Design',
    category: 'Residential',
    tag: 'RESIDENTIAL',
    year: '',
    location: 'Jumeirah Heights, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: jumeirahHeightsWestCCoverImg,
    gallery: [
      jumeirahHeightsWestCPhoto1Img,
      jumeirahHeightsWestCPhoto2Img,
      jumeirahHeightsWestCPhoto3Img,
      jumeirahHeightsWestCPhoto4Img,
      jumeirahHeightsWestCPhoto5Img,
      jumeirahHeightsWestCPhoto6Img,
      jumeirahHeightsWestCPhoto7Img,
      jumeirahHeightsWestCPhoto8Img,
      jumeirahHeightsWestCPhoto9Img,
      jumeirahHeightsWestCPhoto10Img,
    ],
    summary: 'A refined residential interior fit-out featuring a dramatic double-height staircase wall, matte-black joinery, and warm marble accents that carry through the entryway, kitchen, and spa-inspired bathrooms.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
  {
    id: 'g1lineshipping-office',
    title: 'G1LINE SHIPPING OFFICE',
    subtitle: 'Corporate Office Fit-Out at Oasis Center',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    year: '',
    location: 'Oasis Center, Dubai, UAE',
    role: 'Project Architect',
    area: '',
    status: 'Completed',
    image: g1lineshippingCoverImg,
    gallery: [
      g1lineshippingPhoto1Img,
      g1lineshippingPhoto2Img,
      g1lineshippingPhoto3Img,
      g1lineshippingPhoto4Img,
      g1lineshippingPhoto5Img,
      g1lineshippingPhoto6Img,
    ],
    summary: 'A thoughtfully planned corporate office space designed to balance collaboration, focus, and functionality, integrating reception, meeting space, workstations, and executive cabins within an efficient spatial arrangement.',
    authorities: ['Dubai Municipality', 'Dubai Civil Defence'],
    software: ['AutoCAD', 'Autodesk Revit', 'Enscape', 'Adobe Photoshop'],
  },
];
export const authorityBadges: AuthorityBadge[] = [
  {
    code: 'DM',
    name: 'Dubai Municipality',
    fullName: 'Dubai Municipality (Building Control & Permits)',
    arabicName: 'بلدية دبي',
    scope: 'Building Permits, NOCs, Structural & Architectural Approvals, Final Completion Certificates',
    iconType: 'municipality',
  },
  {
    code: 'DCD',
    name: 'Dubai Civil Defence',
    fullName: 'Dubai Civil Defence (Life Safety & Fire Protection)',
    arabicName: 'الدفاع المدني دبي',
    scope: 'Fire Safety Code 2018/2023, Life Safety Drawings, Egress Strategy & Material Approvals',
    iconType: 'safety',
  },
  {
    code: 'DDA',
    name: 'Dubai Development Authority',
    fullName: 'Dubai Development Authority (Tecom / Media City / D3)',
    arabicName: 'سلطة دبي للتطوير',
    scope: 'Master Developer Approvals, Zoning Compliance, Fit-Out & Structural Modifications',
    iconType: 'freezone',
  },
  {
    code: 'TRAKHEES',
    name: 'Trakhees (PCFC)',
    fullName: 'Department of Planning & Development - Trakhees',
    arabicName: 'تراخيص',
    scope: 'EHS Regulations, JAFZA & Free Zone Building Permits, Fit-Out Concept & Detailed Approvals',
    iconType: 'freezone',
  },
  {
    code: 'NAKHEEL',
    name: 'Nakheel Developers',
    fullName: 'Nakheel Community & Planning Approvals',
    arabicName: 'نخيل',
    scope: 'Palm Jumeirah, Jumeirah Islands, JVC/JVT Design Review, Modification & Villa Expansion NOCs',
    iconType: 'developer',
  },
  {
    code: 'EMAAR',
    name: 'Emaar Properties',
    fullName: 'Emaar Design & Technical Services',
    arabicName: 'إعمار',
    scope: 'Downtown Dubai, Dubai Hills Estate, Arabian Ranches Architectural & Fit-Out Guidelines',
    iconType: 'developer',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Architectural Design & Delivery',
    description: 'End-to-end command over the architectural lifecycle from vision to keys.',
    items: [
      { name: 'Concept & Schematic Design', level: 98, category: 'Design' },
      { name: 'Construction Documentation & IFC', level: 96, category: 'Technical' },
      { name: 'UAE Authority Approvals & NOCs', level: 95, category: 'Statutory' },
      { name: 'Project Delivery & Site Coordination', level: 92, category: 'Management' },
      { name: 'BOQ, Tender & Material Specs', level: 90, category: 'Commercial' },
      { name: 'Detail Joinery & Custom Cladding', level: 94, category: 'Technical' },
    ],
  },
  {
    title: 'Software & Digital Tools',
    description: 'Proficiency across industry-standard BIM, CAD, and rendering engines.',
    items: [
      { name: 'Autodesk Revit (BIM)', level: 94, category: 'BIM' },
      { name: 'AutoCAD (2D/3D Drafting)', level: 98, category: 'CAD' },
      { name: '3ds Max + V-Ray / Corona', level: 92, category: '3D Render' },
      { name: 'Lumion & Enscape Real-Time', level: 95, category: 'Visualization' },
      { name: 'Rhino & Grasshopper', level: 85, category: 'Computational' },
      { name: 'Adobe Photoshop / InDesign', level: 90, category: 'Post-Production' },
    ],
  },
  {
    title: 'UAE Codes & Statutory Knowledge',
    description: 'Deep familiarity with regional building codes and developer regulations.',
    items: [
      { name: 'Dubai Building Code (DBC 2021)', level: 98, category: 'Codes' },
      { name: 'UAE Fire & Life Safety Code (DCD)', level: 94, category: 'Safety' },
      { name: 'Al Sa\'fat Dubai Green Building System', level: 90, category: 'Sustainability' },
      { name: 'Trakhees EHS & Free Zone Rules', level: 95, category: 'Freezone' },
      { name: 'Master Developer Design Guidelines', level: 96, category: 'Developers' },
      { name: 'DEWA Electrical & Water Standards', level: 88, category: 'Utilities' },
    ],
  },
];

