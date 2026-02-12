
export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}
