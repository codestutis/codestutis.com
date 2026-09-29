import Link from "next/link";
import { posts } from "@/content/blog/posts";

export default function BlogIndex() {
  const postCount: number = posts.length;

  return (
    <>
      <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
        {"// field notes"}
      </p>
      <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50">
        Writing from the workbench.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Notes on systems, networking, developer tools, and the lessons that are
        easier to remember after writing them down.
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
            {postCount} {postCount === 1 ? "note" : "notes"}
          </p>
        </div>

        <ol>
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-zinc-200 py-8 dark:border-zinc-800"
            >
              <article>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-zinc-500">
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
      </section>
    </>
  );
}
