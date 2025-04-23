// Type pour les projets
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  download?: string;
};

export type Page = 'home' | 'projects' | 'contact';