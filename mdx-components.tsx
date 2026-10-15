import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function Callout({
  children,
  title = "Note",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <aside className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
        {title}
      </p>
      <div className="text-zinc-700 dark:text-zinc-300">{children}</div>
    </aside>
  );
}

const components = {
  h1: (props) => (
    <h1
      {...props}
      className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-16 border-t border-zinc-200 pt-10 text-2xl font-semibold tracking-tight text-zinc-950 dark:border-zinc-800 dark:text-zinc-50"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-8 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-5 text-base leading-8 text-zinc-700 dark:text-zinc-300"
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-900 dark:hover:text-blue-300"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-5 list-disc space-y-3 pl-6 leading-7 text-zinc-700 marker:text-blue-500 dark:text-zinc-300"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-zinc-700 marker:font-mono marker:text-muted dark:text-zinc-300"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 rounded-r-xl border-l-2 border-blue-500 bg-blue-50 py-1 pr-5 pl-5 text-zinc-700 dark:bg-blue-950/30 dark:text-zinc-300"
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      {...props}
      className={`${className ?? ""} mt-6 overflow-x-auto rounded-xl p-5 font-mono text-sm leading-7 ring-1 ring-black/10 dark:ring-white/10`}
    />
  ),
  code: (props) => <code {...props} className="font-mono text-[0.9em]" />,
  table: (props) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table {...props} className="w-full border-collapse text-left text-sm" />
    </div>
  ),
  th: (props) => (
    <th
      {...props}
      className="border-b border-zinc-200 bg-zinc-100 px-4 py-3 font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="border-b border-zinc-100 px-4 py-3 text-zinc-700 last:border-b-0 dark:border-zinc-900 dark:text-zinc-300"
    />
  ),
  del: (props) => (
    <del {...props} className="text-muted decoration-zinc-400" />
  ),
  hr: (props) => (
    <hr
      {...props}
      className="my-16 border-0 border-t border-zinc-200 dark:border-zinc-800"
    />
  ),
  em: (props) => <em {...props} className="text-sm text-muted" />,
  Callout,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
