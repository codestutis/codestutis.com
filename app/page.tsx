import Link from "next/link";
import { ProjectCards } from "@/app/_components/project-cards";
import { pinnedProjects } from "@/content/projects";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <section className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-end">
        <div>
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
            Software engineer · Greater Boston
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-7xl dark:text-zinc-50">
            Kestutis Biskis
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Computer science student and network testing technician working
            across systems programming, IPv6 interoperability, cybersecurity,
            and full-stack software.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 border-l-2 border-blue-500 pl-5 text-sm">
          <a
            href="mailto:kestutis.biskis@codestutis.com"
            className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-blue-400"
          >
            Email me
          </a>
          <a
            href="https://github.com/codestutis"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-blue-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/kestutis-biskis"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-blue-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <section className="mt-20 grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[12rem_1fr] dark:border-zinc-800">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Experience
          </p>
          <a
            href="https://www.iol.unh.edu/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 block w-fit rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-200 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:ring-zinc-700"
            aria-label="Visit the UNH InterOperability Laboratory website"
          >
            <span
              aria-hidden="true"
              className="block h-[4.5rem] w-28 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_of_University_of_New_Hampshire_InterOperability_Laboratory.svg)",
              }}
            />
          </a>
        </div>
        <div>
          <article>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Network Testing Technician
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  UNH Interoperability Labs
                </p>
              </div>
              <p className="font-mono text-xs text-zinc-500">May 2025 — Present</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              I test hosts, routers, and firewalls for IPv6 Ready Logo and
              USGv6 certification, analyzing protocol behavior and working with
              vendors to resolve standards-compliance issues. I also build
              testbeds, automation, and documentation that have shortened
              testing from several weeks to 3–4 days and reduced unnecessary
              debugging time by 70%.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-24 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Selected projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-10">
          <ProjectCards items={pinnedProjects} />
        </div>
      </section>

      <section className="mt-24 grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[12rem_1fr] dark:border-zinc-800">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Education
          </p>
          <a
            href="https://www.unh.edu/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 block w-fit rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-200 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:ring-zinc-700"
            aria-label="Visit the University of New Hampshire website"
          >
            <span
              aria-hidden="true"
              className="block h-10 w-36 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/6/65/University_of_New_Hampshire_logo.svg)",
              }}
            />
          </a>
        </div>
        <div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                B.S. in Computer Science
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                University of New Hampshire
              </p>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              Expected May 2028
            </p>
          </div>
          <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            GPA 3.5 · Dean&apos;s List · Coursework in algorithms, systems,
            computer organization, software engineering, networking, and
            operating systems.
          </p>
        </div>
      </section>
    </div>
  );
}
