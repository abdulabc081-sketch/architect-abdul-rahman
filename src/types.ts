export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Fit-Out' | 'Villa';
  tag: string;
  year: string;
  location: string;
  role: string;
  area: string;
  status: string;
  image: string;
  gallery?: string[];
  summary: string;
  challenge?: string;
  solution?: string;
  scope?: string[];
  authorities: string[];
  software: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SoftwareItem {
  name: string;
  category: string;
  subtext?: string;
  iconType: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type?: string;
  description: string;
  responsibilities?: string[];
  keyProjects?: string[];
  authoritiesHandled?: string[];
}

export interface AuthorityBadge {
  code: string;
  name: string;
  fullName: string;
  arabicName?: string;
  scope: string;
  iconType: 'municipality' | 'safety' | 'utility' | 'developer' | 'freezone';
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    level: number; // percentage
    category: string;
  }[];
}

