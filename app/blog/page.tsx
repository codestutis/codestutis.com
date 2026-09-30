import { BlogPostList } from "@/app/_components/blog-post-list";
import { posts } from "@/content/blog/posts";

export default function BlogIndex() {
  const postCount: number = posts.length;
  const postSummaries = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    displayDate: post.displayDate,
    readTime: post.readTime,
    tags: post.tags,
  }));

  return (
    <>
      <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50">
        Blog
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Articles about systems, networking, developer tools, and software
        engineering.
      </p>

      <section className="mt-16" aria-labelledby="all-posts-heading">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2
            id="all-posts-heading"
            className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500"
          >
            All posts
          </h2>
          <p className="font-mono text-xs text-zinc-500">
            {postCount} {postCount === 1 ? "post" : "posts"}
          </p>
        </div>

        <BlogPostList posts={postSummaries} />
      </section>
    </>
  );
}
