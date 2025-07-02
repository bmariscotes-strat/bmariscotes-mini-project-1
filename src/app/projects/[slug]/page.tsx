import { fetchProjectBySlug, fetchProjects } from "@/lib/api";
import { Project } from "@/types/project";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PageProps } from "@/types/page";

// Static paths generation
export async function generateStaticParams() {
  try {
    const projects = await fetchProjects();
    return projects.map((project: Project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);
    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: [project.image],
        url: project.link,
      },
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}

// Actual page
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/projects" className="text-blue-500 hover:text-blue-700 mb-6 inline-flex items-center">
        ← Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-gray-200">
          {project.type === "system" ? (
            <video src={`/media/system/${project.image}`} controls className="w-full h-full object-cover" />
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

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-3">Project Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-700">Project ID:</strong>
                <span className="ml-2 text-gray-600">{project.slug}</span>
              </div>
              <div>
                <strong className="text-gray-700">Status:</strong>
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mt-6">
            <div className="flex gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  {project.type === "ui" ? "View Figma" : "View Source Code"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
