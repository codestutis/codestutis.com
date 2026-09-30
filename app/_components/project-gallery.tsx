"use client";

import { useState } from "react";
import { ProjectCards } from "@/app/_components/project-cards";
import { TagFilter } from "@/app/_components/tag-filter";
import type { Project } from "@/content/projects";

type ProjectGalleryProps = {
  projects: readonly Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = projects.flatMap((project) => project.tags);
  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  return (
    <>
      <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>
      <div className="mt-8">
        <ProjectCards items={filteredProjects} />
      </div>
    </>
  );
}
