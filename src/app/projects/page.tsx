import { fetchProjects } from "@/lib/api";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ReactElement } from "react";
import { createPageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/shared/BreadCrumbsNav";

export const metadata = createPageMetadata("Projects", "All of my projects.");

export default async function ProjectsPage(): Promise<ReactElement> {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await fetchProjects();
  } catch (err) {
    error = err instanceof Error ? err.message : "An unknown error occurred";
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading projects: {error}
        </div>
      </div>
    );
  }

  const uiProjects = projects.filter((project) => project.type === "ui");
  const systemProjects = projects.filter((project) => project.type === "system");

  return (
    <div className="container mx-auto px-6 py-8 space-y-12">
      <section>
        <div className="pl-1 pb-5">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
            ]}
          />
        </div>

        {/* UI Projects Section */}
        <section>
          <h2 className="text-3xl text-gray-900 font-bold mb-4 pl-1">UI Projects</h2>
          {uiProjects.length === 0 ? (
            <p className="text-gray-600">No UI projects found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {uiProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </section>
      </section>

      {/* System Projects Section */}
      <section>
        <h2 className="text-3xl text-gray-900 font-bold mb-4">System Projects</h2>
        {systemProjects.length === 0 ? (
          <p className="text-gray-600">No system projects found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
