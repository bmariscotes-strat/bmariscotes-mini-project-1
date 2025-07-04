"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/types/project";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        {project.type === "system" ? (
          <video
            src={`/media/system/${project.image}`}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            disableRemotePlayback
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
      <CardHeader>
        <h2 className="text-2xl text-primary font-bold">{project.title}</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{project.description}</p>
        <Button asChild>
          <Link href={`/projects/${project.slug}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
