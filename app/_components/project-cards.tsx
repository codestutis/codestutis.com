import Link from "next/link";
import { ProjectIcon } from "@/app/_components/project-icon";
import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";

type ProjectCardsProps = {
  items?: readonly Project[];
};

export function ProjectCards({ items = projects }: ProjectCardsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((project) => (
        <Link
          key={project.name}
          href={`/projects/${project.slug}`}
          className="group/card rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <article className="relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 transition-[border-color,transform] group-hover/card:-translate-y-0.5 group-hover/card:border-blue-300 motion-reduce:transform-none dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover/card:border-blue-800">
            <ProjectIcon slug={project.slug} />
            <div className="relative z-10 flex h-full flex-col">
              <h3 className="text-xl font-semibold tracking-tight group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
                {project.name}
              </h3>
              <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {project.details}
              </p>
              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label={`Technologies used in ${project.name}`}
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
                View project →
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
