export type PortfolioProject = {
  title: string;
  slug: string;
  description: string;
  category: string;
  status?: string;
  bgImage: string;
  link?: string;
  technologies?: string[];
  features?: string[];
  achievements?: string[];
  content?: string;
};

export type LearningMaterial = {
  title: string;
  slug: string;
  description: string;
  category: string;
  status?: string;
  bgImage: string;
  duration?: string;
  level?: string;
  technologies?: string[];
  features?: string[];
  topics?: string[];
  content?: string;
};

export type ServiceCapability = {
  icon: unknown;
  title: string;
  description: string;
  professionalDetails: {
    businessValue: string;
    collaboration: string;
    keyAchievements: string[];
    toolsTechnologies: string[];
  };
};
