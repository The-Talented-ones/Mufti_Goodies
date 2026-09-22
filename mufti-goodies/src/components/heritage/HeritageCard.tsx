// src/components/heritage/HeritageCard.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

import type { HeritageStory } from "../../types/heritage";

interface HeritageCardProps {
  story: HeritageStory;
  /** Optional variant for the featured (larger) card */
  variant?: "default" | "featured";
}

export default function HeritageCard({
  story,
  variant = "default",
}: HeritageCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-[var(--color-border,#E8DDD9)] bg-white
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[var(--color-primary,#74382E)]/20
        hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]
        ${isFeatured ? "lg:flex-row" : ""}`}
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? "aspect-[4/3] lg:aspect-auto lg:w-1/2" : "aspect-[4/3]"
        }`}
      >
        <img
          src={story.image}
          alt={story.imageAlt}
          width={800}
          height={600}
          loading={isFeatured ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105"
        />

        {/* Wash for chip legibility */}
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
          {story.category}
        </span>

        {/* Region chip */}
        <span
          className="absolute bottom-5 left-5 rounded-full
            bg-[var(--color-primary,#74382E)]/90 px-3 py-1
            text-[0.65rem] font-semibold tracking-wide
            text-white backdrop-blur-md"
        >
          {story.region}
        </span>
      </div>

      {/* Body */}
      <div
        className={`flex flex-1 flex-col p-6 ${
          isFeatured ? "lg:w-1/2 lg:p-10 lg:justify-center" : ""
        }`}
      >
        <h3
          className={`font-serif font-semibold leading-tight
            text-[var(--color-primary,#74382E)]
            ${isFeatured ? "text-3xl lg:text-4xl" : "text-2xl"}`}
        >
          {story.title}
        </h3>

        <p
          className={`mt-2 font-medium text-[var(--color-accent,#ED9536)]
            ${isFeatured ? "text-sm" : "text-xs"}`}
        >
          {story.subtitle}
        </p>

        <p
          className={`mt-3 leading-7 text-[var(--color-muted,#756A66)]
            ${isFeatured ? "text-base" : "text-sm"}`}
        >
          {story.excerpt}
        </p>

        {/* Footer row */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border,#E8DDD9)] pt-5">
          <div className="flex items-center gap-4 text-xs text-[var(--color-muted,#756A66)]">
            {story.readTime && (
              <span className="flex items-center gap-1.5">
                <FiClock size={13} aria-hidden="true" />
                {story.readTime} min read
              </span>
            )}
          </div>

          <Link
            to={story.slug}
            aria-label={`Read the story of ${story.title}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold
              text-[var(--color-primary,#74382E)]
              transition-colors duration-300
              hover:text-[var(--color-accent,#ED9536)]"
          >
            Read story
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