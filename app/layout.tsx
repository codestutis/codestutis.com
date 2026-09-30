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
              codestutis.com
            </Link>
            <nav className="flex items-center gap-1" aria-label="Main navigation">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                Blog
              </Link>
            </nav>
          </header>
          <main className="w-full flex-1">{children}</main>
          <footer className="mx-auto grid w-full max-w-5xl gap-10 border-t border-zinc-200 px-6 py-10 sm:grid-cols-[1fr_auto_auto] sm:px-10 dark:border-zinc-800">
            <div>
              <Link
                href="/"
                className="font-mono text-sm font-semibold text-zinc-900 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-100"
              >
                codestutis
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                Software engineer focused on systems, networking, and web
                development.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link
                    href="/"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="mailto:kestutis.biskis@codestutis.com"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/codestutis"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kestutis-biskis"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>

            <p className="font-mono text-xs text-zinc-400 sm:col-span-3">
              © {new Date().getFullYear()} Kestutis Biskis · Built with Next.js
              and MDX.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
