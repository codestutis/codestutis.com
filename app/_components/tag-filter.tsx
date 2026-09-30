"use client";

import { useId, useState } from "react";

type TagFilterProps = {
  tags: readonly string[];
  activeTag: string | null;
  onChange: (tag: string | null) => void;
};

export function TagFilter({ tags, activeTag, onChange }: TagFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const tagListId = useId();
  const tagCounts = new Map<string, number>();

  for (const tag of tags) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }

  const sortedTags = Array.from(tagCounts)
    .sort(
      ([tagA, countA], [tagB, countB]) =>
        countB - countA ||
        tagA.localeCompare(tagB, undefined, { sensitivity: "base" }),
    )
    .map(([tag]) => tag);
  const visibleTags = sortedTags.slice(0, 4);

  function selectTag(tag: string | null) {
    setSearchQuery("");
    onChange(tag);
  }

  function searchTags(query: string) {
    setSearchQuery(query);
    const matchingTag = sortedTags.find(
      (tag) => tag.toLowerCase() === query.trim().toLowerCase(),
    );
    onChange(matchingTag ?? null);
  }

  return (
    <div className="mt-6">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
        Filter by tag
      </p>
      <div
        className="mt-3 flex items-center gap-2"
        role="group"
        aria-label="Filter by tag"
      >
        <button
          type="button"
          aria-pressed={activeTag === null}
          onClick={() => selectTag(null)}
          className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
            activeTag === null
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
              : "border-zinc-200 text-zinc-600 hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-800 dark:hover:text-blue-400"
          }`}
        >
          All
        </button>
        {visibleTags.map((tag, index) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTag === tag}
            onClick={() => selectTag(tag)}
            className={`${index > 0 ? "hidden sm:inline-flex" : "inline-flex"} rounded-full border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              activeTag === tag
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-800 dark:hover:text-blue-400"
            }`}
          >
            {tag}
          </button>
        ))}
        <div className="ml-auto min-w-0 flex-1 sm:max-w-44">
          <label htmlFor={tagListId} className="sr-only">
            Search tags
          </label>
          <input
            id={tagListId}
            type="search"
            list={`${tagListId}-options`}
            value={searchQuery}
            onChange={(event) => searchTags(event.target.value)}
            placeholder="Search tags"
            className="w-full rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          />
          <datalist id={`${tagListId}-options`}>
            {sortedTags.map((tag) => (
              <option key={tag} value={tag} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
}
