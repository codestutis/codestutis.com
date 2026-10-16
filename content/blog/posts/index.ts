import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { ComponentType } from "react";

export type BlogPostMeta = { title: string; description: string; publishedAt: string; displayDate: string; readTime: string; tags: string[] };
export type BlogPost = BlogPostMeta & { slug: string };
const postsDirectory = join(process.cwd(), "content/blog/posts");
const isPublishedFile = (filename: string) => filename.endsWith(".mdx") && !filename.startsWith("_");
const filenames = () => readdirSync(postsDirectory).filter(isPublishedFile);

function toPost(filename: string, meta: BlogPostMeta): BlogPost {
  return { ...meta, slug: filename.slice(0, -4) };
}

async function loadModule(filename: string) {
  return import(`./${filename}`) as Promise<{ default: ComponentType; meta: BlogPostMeta }>;
}

export async function getPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(filenames().map(async (filename) => toPost(filename, (await loadModule(filename)).meta)));
  return posts.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const filename = `${slug}.mdx`;
  if (!/^[a-z0-9-]+\.mdx$/.test(filename) || !existsSync(join(postsDirectory, filename))) return undefined;
  return toPost(filename, (await loadModule(filename)).meta);
}

export async function getPostContent(slug: string) {
  const filename = `${slug}.mdx`;
  if (!/^[a-z0-9-]+\.mdx$/.test(filename) || !existsSync(join(postsDirectory, filename))) return undefined;
  return (await loadModule(filename)).default;
}
