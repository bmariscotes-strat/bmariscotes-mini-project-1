import { fetchProjectBySlug, fetchProjects } from "@/lib/api";
import { Project } from "@/types/project";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ReactElement } from "react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const projects = await fetchProjects();
    console.log(
      "Generated slugs:",
      projects.map((p) => p.slug)
    );

    return projects.map((project: Project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const project = await fetchProjectBySlug(params.slug);

    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: [project.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({
  params,
}: ProjectPageProps): Promise<ReactElement> {
  const { slug } = params;

  try {
    const project: Project = await fetchProjectBySlug(slug);

    return (
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="text-blue-500 hover:text-blue-700 mb-6 inline-flex items-center"
        >
          ← Back to Projects
        </Link>

        {/* Project Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gray-200">
            {project.type === "system" ? (
              <video
                src={`/media/system/${project.image}`}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={`/media/ui/${project.image}`}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Additional Info Section */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">
                Project Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-700">Project ID:</strong>
                  <span className="ml-2 text-gray-600">{project.slug}</span>
                </div>
                <div>
                  <strong className="text-gray-700">Status:</strong>
                  <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t pt-6 mt-6">
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Live Demo
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
                >
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    notFound();
  }
}
