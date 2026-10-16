import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectContent, getProjects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProjects()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const ProjectContent = await getProjectContent(slug);

  if (!ProjectContent) notFound();

  return (
    <article>
      <Link
        href="/projects"
        className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
      >
        ← All projects
      </Link>

      <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50">
        {project.name}
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
        {project.sourceUrl ? (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-sm text-sm font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
          >
            View source ↗
          </a>
        ) : null}
      </div>

      <ProjectContent />

      <div className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <Link
          href="/projects"
          className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
        >
          ← All projects
        </Link>
      </div>
    </article>
  );
}
