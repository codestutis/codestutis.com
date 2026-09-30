import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — codestutis",
  description: "Selected systems, networking, and full-stack software projects.",
};

export default function ProjectsLayout({
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
