export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  type: "ui" | "system";
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface ProjectCardProps {
  project: Project;
}
