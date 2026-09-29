import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kestutis Biskis — Software Engineer",
  description:
    "Software engineer working across systems programming, networking, cybersecurity, and full-stack software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex min-h-screen flex-col">
          <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-tight focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              codestutis
            </Link>
            <nav aria-label="Main navigation">
              <Link
                href="/blog"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                Blog
              </Link>
            </nav>
          </header>
          <main className="w-full flex-1">{children}</main>
          <footer className="mx-auto w-full max-w-5xl border-t border-zinc-200 px-6 py-6 font-mono text-xs text-zinc-500 sm:px-10 dark:border-zinc-800">
            Built with Next.js and MDX.
          </footer>
        </div>
      </body>
    </html>
  );
}
