import Link from "next/link";

const skills = {
  Languages: ["Go", "C", "Bash", "Python", "TypeScript", "SQL"],
  Systems: ["Linux", "IPv6", "ICMPv6", "OSPFv3", "POSIX sockets"],
  Tools: ["Docker", "Wireshark", "Prometheus", "Grafana", "GitHub Actions"],
};

const projects = [
  {
    name: "Chess Mistakes Trainer",
    description:
      "An asynchronous Go service that analyzes chess games with Stockfish and turns mistakes into interactive puzzles.",
    details:
      "Built with PostgreSQL, Docker, React, and TypeScript, with observability through Prometheus, Grafana, and OpenTelemetry.",
    tags: ["Go", "PostgreSQL", "React", "Observability"],
  },
  {
    name: "LAN Chat App",
    description:
      "A multithreaded C application for peer discovery and messaging between devices on a local network.",
    details:
      "Uses a custom application-layer protocol, POSIX sockets, and thread-safe memory and synchronization primitives.",
    tags: ["C", "Networking", "POSIX", "Concurrency"],
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <section className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-end">
        <div>
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
            Software engineer · Durham, New Hampshire
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-7xl dark:text-zinc-50">
            Kestutis Biskis builds reliable systems and the tools around them.
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
        </div>
        <div className="space-y-10">
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
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600 marker:text-blue-500 dark:text-zinc-400">
              <li>
                Performed conformance and interoperability testing for IPv6
                Ready Logo and USGv6 certification programs on 20+ hosts,
                routers, and firewalls.
              </li>
              <li>
                Executed testing in accordance with ISO/IEC 17025 accredited
                laboratory procedures, ensuring repeatability, traceability,
                and documentation quality.
              </li>
              <li>
                Analyzed IPv6 protocol behavior in Wireshark, identified
                non-conformant implementations, and documented results in
                detailed technical reports.
              </li>
              <li>
                Collaborated with vendors to reproduce defects, validate fixes,
                and confirm compliance with IPv6 standards.
              </li>
              <li>
                Created and maintained testbeds and automation scripts to reduce
                testing time from several weeks to 3-4 days.
              </li>
              <li>
                Streamlined debugging workflows through comprehensive
                documentation, reducing unnecessary debugging time by 70%.
              </li>
              <li>
                Prototyped an agentic Retrieval-Augmented Generation (RAG)
                workflow capable of ingesting technical standards and outputting
                test specifications.
              </li>
            </ul>
          </article>

          <article>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Cybersecurity Team
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  University of New Hampshire
                </p>
              </div>
              <p className="font-mono text-xs text-zinc-500">
                October 2024 — Present
              </p>
            </div>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600 marker:text-blue-500 dark:text-zinc-400">
              <li>
                Hardened Linux systems during attack-and-defense cybersecurity
                competitions, helping maintain service availability and improve
                team scoring.
              </li>
              <li>
                Competed in the NECCDC, managing Linux infrastructure, Keycloak
                authentication services, and Gitea repositories while completing
                incident response tasks and operational injects under time
                constraints.
              </li>
              <li>
                Explained technical issues, security risks, and remediation steps
                to mock C-suite executives and other non-technical stakeholders
                during live competition scenarios.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-24 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Projects built from the protocol up.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
          >
            Read the blog →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {project.details}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[12rem_1fr] dark:border-zinc-800">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
          Toolkit
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h2 className="text-sm font-semibold">{group}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-2xl bg-blue-50 p-8 sm:p-10 dark:bg-blue-950/30">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          Education
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          B.S. in Computer Science
        </h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          University of New Hampshire · Expected May 2028
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          GPA 3.5 · Dean&apos;s List · Coursework in algorithms, systems,
          computer organization, software engineering, networking, and
          operating systems.
        </p>
      </section>
    </div>
  );
}
