import { ProjectGallery } from "@/app/_components/project-gallery";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const projectCount: number = projects.length;

  return (
    <>
      <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50">
        Projects
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Systems, networking, command-line, and full-stack software projects.
      </p>

      <section className="mt-16" aria-labelledby="all-projects-heading">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2
            id="all-projects-heading"
            className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500"
          >
            All projects
          </h2>
          <p className="font-mono text-xs text-zinc-500">
            {projectCount} {projectCount === 1 ? "project" : "projects"}
          </p>
        </div>

        <ProjectGallery projects={projects} />
      </section>
    </>
  );
}
