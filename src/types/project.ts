export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  type: "ui" | "system";
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface ProjectCardProps {
  project: Project;
}
