import { Project } from "@/types/project";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Add cache revalidation for development
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project> {
  try {
    const projects = await fetchProjects();

    // Find project by slug
    const project = projects.find((p: Project) => p.slug === slug);

    if (!project) {
      throw new Error("Project not found");
    }

    return project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    throw error;
  }
}
