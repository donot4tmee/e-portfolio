export type PersonalityMode = 'professional' | 'creative' | 'casual' | 'geek';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Full-Stack' | 'AI & Systems' | 'Mobile & Design' | 'Open Source';
  featured: boolean;
  year: string;
  role: string;
  client?: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  bannerImage: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    architectureHighlights: string[];
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
    codeSnippet?: {
      language: string;
      code: string;
      filename: string;
    };
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Part-Time' | 'Internship' | 'Projects' | 'Student Organization' | 'Contract' | 'Advisory';
  summary: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  relation: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    years: string;
    tag?: string;
    hot?: boolean;
  }[];
}

export interface DeskItem {
  category: string;
  name: string;
  specs: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  title: string;
  avatar?: string;
  tagline: string;
  location: string;
  timezone: string;
  status: string;
  availableForWork: boolean;
  phone?: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl?: string;
  bioModes: {
    professional: string;
    creative: string;
    casual: string;
    geek: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
