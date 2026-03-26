export interface Course {
  slug: string;
  title: string;
  subDescription: string;
  pageTitle: string;
  tagline: string;
  icon: string;
  description: string;
  overview: string;
  duration?: string;
  level: string;
  price?: string;
  ageRange?: string;
  modules: Module[];
  outcomes: string[];
  tools: string[];
  skills: string[];
  careers: { icon: string; label: string }[];
}

export interface Module {
  title: string;
  summary: string;
  topics: string[];
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface NavLink {
  href: string;
  label: string;
}
