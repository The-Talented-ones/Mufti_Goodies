// src/components/journal/PostBody.tsx

import type { PostBlock } from "../../types/journal";

interface PostBodyProps {
  blocks: PostBlock[];
}

export default function PostBody({ blocks }: PostBodyProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-base leading-8 text-[var(--color-text,#2E2522)]"
              >
                {block.text}
              </p>
            );

          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="mt-10 font-serif text-2xl font-semibold text-[var(--color-primary,#74382E)] sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={i}
                className="mt-8 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]"
              >
                {block.text}
              </h3>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="rounded-2xl border-l-4 border-[var(--color-accent,#ED9536)]
                  bg-[var(--color-soft,#F5EEEB)] px-6 py-5
                  font-serif text-lg italic leading-8
                  text-[var(--color-primary,#74382E)]"
              >
                {block.text}
                {block.cite && (
                  <footer className="mt-3 not-italic">
                    <cite className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
                      — {block.cite}
                    </cite>
                  </footer>
                )}
              </blockquote>
            );

          case "list":
            if (block.ordered) {
              return (
                <ol
                  key={i}
                  role="list"
                  className="ml-5 list-decimal space-y-2 text-base leading-8 text-[var(--color-text,#2E2522)]"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul
                key={i}
                role="list"
                className="ml-5 list-disc space-y-2 text-base leading-8 text-[var(--color-text,#2E2522)]"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={i} className="my-8">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={block.src}
                    alt={block.alt}
                    width={1000}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-xs text-[var(--color-muted,#756A66)]">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}