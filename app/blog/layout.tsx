import type { Metadata } from "next";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: {
    default: "Blog — codestutis",
    template: "%s — codestutis",
  },
  description: "Articles about systems, networking, and software engineering.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      {children}
    </div>
  );
}
