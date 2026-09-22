import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  // centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl  mx-auto text-center`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-[var(--color-primary)] sm:text-4xl lg:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--color-white)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}