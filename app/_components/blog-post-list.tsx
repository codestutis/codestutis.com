"use client";

import { useState } from "react";
import Link from "next/link";
import { TagFilter } from "@/app/_components/tag-filter";

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  displayDate: string;
  readTime: string;
  tags: readonly string[];
};

type BlogPostListProps = {
  posts: readonly BlogPostSummary[];
};

export function BlogPostList({ posts }: BlogPostListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = posts.flatMap((post) => post.tags);
  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <>
      <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
      <p className="sr-only" aria-live="polite">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
      </p>
      <ol>
        {filteredPosts.map((post) => (
          <li
            key={post.slug}
            className="border-b border-zinc-200 py-8 dark:border-zinc-800"
          >
            <article>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
                <time dateTime={post.publishedAt}>{post.displayDate}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="rounded-sm decoration-blue-300 underline-offset-4 hover:text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:decoration-blue-800 dark:hover:text-blue-400"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {post.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
