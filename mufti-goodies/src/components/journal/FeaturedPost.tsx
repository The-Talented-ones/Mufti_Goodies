// src/components/journal/FeaturedPost.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

import type { JournalPost } from "../../types/journal";
import { formatPostDate } from "../../data/journal";

interface FeaturedPostProps {
  post: JournalPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article
      className="group relative grid overflow-hidden rounded-3xl
        border border-[var(--color-border,#E8DDD9)] bg-white
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[var(--color-primary,#74382E)]/20
        hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]
        lg:grid-cols-2"
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={1000}
          height={750}
          loading="eager"
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

        {/* Latest chip */}
        <span
          className="absolute left-5 top-5 rounded-full
            border border-white/30 bg-white/90 px-3 py-1
            text-[0.65rem] font-bold uppercase tracking-[0.14em]
            text-[var(--color-primary,#74382E)] backdrop-blur-md"
        >
          Latest Post
        </span>

        {/* Category chip */}
        <span
          className="absolute bottom-5 left-5 rounded-full
            bg-[var(--color-primary,#74382E)]/90 px-3 py-1
            text-[0.65rem] font-semibold tracking-wide
            text-white backdrop-blur-md"
        >
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted,#756A66)]">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <FiClock size={12} aria-hidden="true" />
            {post.readTime} min read
          </span>
        </div>

        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-4xl">
          {post.title}
        </h2>

        <p className="mt-4 text-base leading-8 text-[var(--color-muted,#756A66)]">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <div
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-full
              bg-[var(--color-accent,#ED9536)]/15
              font-serif text-sm font-bold text-[var(--color-accent,#ED9536)]"
          >
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
              {post.author.name}
            </p>
            {post.author.role && (
              <p className="text-xs text-[var(--color-muted,#756A66)]">
                {post.author.role}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Link
            to={post.slug}
            aria-label={`Read the full post: ${post.title}`}
            className="inline-flex items-center gap-2 text-sm font-semibold
              text-[var(--color-primary,#74382E)]
              transition-colors duration-300
              hover:text-[var(--color-accent,#ED9536)]"
          >
            Read the full post
            <FiArrowUpRight
              aria-hidden="true"
              size={15}
              className="transition-transform duration-300
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}