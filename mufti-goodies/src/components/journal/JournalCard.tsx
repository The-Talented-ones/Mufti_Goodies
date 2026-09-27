// src/components/journal/JournalCard.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

import type { JournalPost } from "../../types/journal";
import { formatPostDate } from "../../data/journal";

interface JournalCardProps {
  post: JournalPost;
}

export default function JournalCard({ post }: JournalCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-[var(--color-border,#E8DDD9)] bg-white
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[var(--color-primary,#74382E)]/20
        hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]"
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t
            from-black/50 via-black/0 to-black/10"
        />

        {/* Category chip */}
        <span
          className="absolute left-5 top-5 rounded-full
            border border-white/30 bg-white/90 px-3 py-1
            text-[0.65rem] font-bold uppercase tracking-[0.14em]
            text-[var(--color-primary,#74382E)] backdrop-blur-md"
        >
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[var(--color-muted,#756A66)]">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <FiClock size={12} aria-hidden="true" />
            {post.readTime} min
          </span>
        </div>

        <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-[var(--color-primary,#74382E)]">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted,#756A66)]">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-1.5"
            aria-label="Post tags"
          >
            {post.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--color-soft,#F5EEEB)] px-2.5 py-1
                  text-[0.65rem] font-medium text-[var(--color-primary,#74382E)]"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border,#E8DDD9)] pt-5">
          <span className="text-xs font-medium text-[var(--color-muted,#756A66)]">
            {post.author.name}
          </span>

          <Link
            to={post.slug}
            aria-label={`Read the full post: ${post.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold
              text-[var(--color-primary,#74382E)]
              transition-colors duration-300
              hover:text-[var(--color-accent,#ED9536)]"
          >
            Read post
            <FiArrowUpRight
              aria-hidden="true"
              size={14}
              className="transition-transform duration-300
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent reveal */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0
          bg-gradient-to-r
          from-[var(--color-accent,#ED9536)]
          to-[var(--color-primary,#74382E)]
          transition-transform duration-500
          group-hover:scale-x-100"
      />
    </article>
  );
}