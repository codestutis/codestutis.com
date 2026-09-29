export const posts = [
  {
    slug: "mdx-features-and-latex",
    title: "MDX features, from Markdown to math",
    description:
      "A practical tour of Markdown, GitHub-Flavored Markdown, React components, code, and LaTeX-style equations in one post.",
    publishedAt: "2026-09-25",
    displayDate: "September 25, 2026",
    readTime: "8 min read",
    tags: ["MDX", "LaTeX", "KaTeX"],
    load: () => import("./mdx-features-and-latex.mdx"),
  },
  {
    slug: "starting-with-mdx",
    title: "Starting with MDX",
    description:
      "Why this site keeps writing close to the code while leaving room for interactive examples.",
    publishedAt: "2026-09-24",
    displayDate: "September 24, 2026",
    readTime: "4 min read",
    tags: ["MDX", "Next.js", "Writing"],
    load: () => import("./starting-with-mdx.mdx"),
  },
] as const;

export type BlogPost = (typeof posts)[number];
export type BlogPostSlug = BlogPost["slug"];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
