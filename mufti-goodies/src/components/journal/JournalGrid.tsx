// src/components/journal/JournalGrid.tsx

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

import JournalCard from "./JournalCard";
import { getPostsByCategory, journalFilters } from "../../data/journal";
import type { JournalFilter } from "../../types/journal";

interface JournalGridProps {
  /** Optional — hide filters when used as a simple preview grid */
  showFilters?: boolean;
  /** Optional — limit number of posts shown */
  limit?: number;
}

export default function JournalGrid({
  showFilters = true,
  limit,
}: JournalGridProps) {
  const [active, setActive] = useState<JournalFilter["value"]>("All");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const byCategory = getPostsByCategory(active);

    const byQuery = query
      ? byCategory.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            p.tags.some((t) =>
              t.toLowerCase().includes(query.toLowerCase()),
            ),
        )
      : byCategory;

    return limit ? byQuery.slice(0, limit) : byQuery;
  }, [active, query, limit]);

  return (
    <div>
      {/* Filter + search */}
      {showFilters && (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Journal categories"
            className="flex flex-wrap gap-2"
          >
            {journalFilters.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.value)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary,#74382E)] text-white shadow-[0_8px_25px_rgba(116,56,46,0.08)]"
                      : "border border-[var(--color-border,#E8DDD9)] bg-white text-[var(--color-primary,#74382E)] hover:border-[var(--color-primary,#74382E)]/30"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <label className="relative flex w-full max-w-sm items-center">
            <span className="sr-only">Search journal posts</span>
            <FiSearch
              aria-hidden="true"
              className="pointer-events-none absolute left-4 text-[var(--color-muted,#756A66)]"
              size={16}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts, topics, tags…"
              className="w-full rounded-full border border-[var(--color-border,#E8DDD9)]
                bg-white py-3 pl-11 pr-4 text-sm text-[var(--color-text,#2E2522)]
                placeholder:text-[var(--color-muted,#756A66)]/70
                focus:border-[var(--color-accent,#ED9536)]
                focus:outline-none focus:ring-2
                focus:ring-[var(--color-accent,#ED9536)]/30
                transition-all duration-300"
            />
          </label>
        </div>
      )}

      {/* Grid */}
      <div className={showFilters ? "mt-12" : "mt-0"}>
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[var(--color-border,#E8DDD9)] bg-white/60 px-6 py-20 text-center">
            <p className="font-serif text-2xl text-[var(--color-primary,#74382E)]">
              No posts match your search.
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted,#756A66)]">
              Try a different keyword or browse all categories.
            </p>
            {showFilters && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActive("All");
                }}
                className="mt-6 rounded-full border border-[var(--color-primary,#74382E)]
                  px-6 py-3 text-sm font-semibold
                  text-[var(--color-primary,#74382E)]
                  transition-all duration-300
                  hover:bg-[var(--color-primary,#74382E)] hover:text-white"
              >
                Reset filters
              </button>
            )}
          </div>
        ) : (
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.id}>
                <JournalCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}