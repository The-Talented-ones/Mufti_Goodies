// src/components/common/SectionHeading.tsx

import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** "dark" = for light backgrounds (default). "light" = for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  /* Colors */
  const titleColor = isLight
    ? "text-white"
    : "text-[var(--color-primary,#74382E)]";

  const descriptionColor = isLight
    ? "text-white/75"
    : "text-[var(--color-text,#2E2522)]/75";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)] ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {isCenter && (
            <span
              aria-hidden="true"
              className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
            />
          )}
          {eyebrow}
          {isCenter && (
            <span
              aria-hidden="true"
              className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
            />
          )}
        </p>
      )}

      <h2
        className={`mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-shadow-lg  ${
          isCenter ? "text-center" : "text-left"
        } ${titleColor}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-[1.05rem] ${
            isCenter ? "mx-auto text-center" : "text-left"
          } ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}