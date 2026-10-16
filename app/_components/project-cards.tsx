import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCards({ items }: { items: readonly Project[] }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card">
          <article>
            <div className="project-art">
              {project.image ? <Image src={project.image} alt="" width={800} height={480} /> : <div className="project-fallback" aria-hidden="true">{project.name.slice(0, 1)}</div>}
              <span className="project-open" aria-hidden="true">↗</span>
            </div>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`Technologies used in ${project.name}`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
