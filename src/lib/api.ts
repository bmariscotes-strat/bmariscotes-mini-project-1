import { Project } from "@/types/project";
import { Experience } from "@/types/experience";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache revalidation
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  return fetchData<Project[]>("/projects");
}

export async function fetchProjectBySlug(slug: string): Promise<Project> {
  const projects = await fetchProjects();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
}

export async function fetchExperiences(): Promise<Experience[]> {
  return fetchData<Experience[]>("/experiences");
}
