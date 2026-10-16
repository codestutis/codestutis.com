import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { ComponentType } from "react";

export type ProjectMeta = { name: string; description: string; details: string; tags: string[]; pinned: boolean; image?: string; sourceUrl?: string };
export type Project = ProjectMeta & { slug: string };
const projectsDirectory = join(process.cwd(), "content/projects");
const isPublishedFile = (filename: string) => filename.endsWith(".mdx") && !filename.startsWith("_");
const filenames = () => readdirSync(projectsDirectory).filter(isPublishedFile);

function toProject(filename: string, meta: ProjectMeta): Project {
  return { ...meta, slug: filename.slice(0, -4) };
}

async function loadModule(filename: string) {
  return import(`./${filename}`) as Promise<{ default: ComponentType; meta: ProjectMeta }>;
}

export async function getProjects(): Promise<Project[]> {
  return Promise.all(filenames().map(async (filename) => toProject(filename, (await loadModule(filename)).meta)));
}

export async function getPinnedProjects() {
  return (await getProjects()).filter((project) => project.pinned);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const filename = `${slug}.mdx`;
  if (!/^[a-z0-9-]+\.mdx$/.test(filename) || !existsSync(join(projectsDirectory, filename))) return undefined;
  return toProject(filename, (await loadModule(filename)).meta);
}

export async function getProjectContent(slug: string) {
  const filename = `${slug}.mdx`;
  if (!/^[a-z0-9-]+\.mdx$/.test(filename) || !existsSync(join(projectsDirectory, filename))) return undefined;
  return (await loadModule(filename)).default;
}
