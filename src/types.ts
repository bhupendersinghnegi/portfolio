export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise SPA' | 'React Applications' | 'Vanilla JS & APIs' | 'Performance & Architecture';
  featured: boolean;
  companyOrContext: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  demoType?: 'pizza' | 'travel' | 'quiz' | 'router' | 'vitals';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  highlights: string[];
  techStack: string[];
  modulesOwned?: string[];
  keyMetrics: { label: string; value: string }[];
  awardReceived?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    years: string;
    isTopSkill: boolean;
    tag: string;
  }[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  gradeOrScore?: string;
  period: string;
  description: string;
  skillsAcquired: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  quarter: string;
  description: string;
  iconName: string;
}

export interface CoreWebVitalMetric {
  name: string;
  acronym: string;
  target: string;
  optimizedValue: string;
  unoptimizedValue: string;
  description: string;
  technique: string;
  status: 'Good' | 'Needs Improvement' | 'Poor';
}
