// HeritagePreview.tsx
import { FiArrowUpRight } from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

const stories = [
  {
    category: "Yoruba Foods",
    title: "Dodo Ikire",
    description:
      "Discover the food heritage associated with Ikire, Osun State.",
  },
  {
    category: "Yoruba Foods",
    title: "Kuli-Kuli",
    description:
      "Explore the story and cultural place of this familiar Nigerian snack.",
  },
  {
    category: "Food Facts",
    title: "Indigenous Ingredients",
    description:
      "Learn about ingredients and how they have traditionally been used in Nigerian foods.",
  },
];

export default function HeritagePreview() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96
          rounded-full bg-[var(--color-secondary,#D8C5BF)]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80
          rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
      />

      <Container className="relative">
        {/* Heading + CTA */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Indigenous Food Stories"
              title="Before they became snacks, they were stories."
              description="Explore the foods, ingredients and traditions that shaped Nigerian tables."
            />
          </div>

          <Button to="/heritage" variant="outline" className="group shrink-0">
            Explore Heritage
            <FiArrowUpRight
              className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={17}
            />
          </Button>
        </div>

        {/* Stories grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl
                border border-[var(--color-border,#E8DDD9)] bg-white
                transition-all duration-500
                hover:-translate-y-1.5
                hover:border-[var(--color-primary,#74382E)]/20
                hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]"
            >
              {/* Visual / cover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-secondary,#D8C5BF)]">
                {/* Gradient wash */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br
                    from-[var(--color-secondary,#D8C5BF)]
                    via-[var(--color-secondary,#D8C5BF)]/80
                    to-[var(--color-primary,#74382E)]/20
                    transition-transform duration-700
                    group-hover:scale-105"
                />

                {/* Dot pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.12]
                    bg-[radial-gradient(var(--color-primary,#74382E)_1px,transparent_1px)]
                    [background-size:24px_24px]"
                />

                {/* Centered title */}
                <div className="relative flex h-full items-center justify-center px-6">
                  <span
                    className="text-center font-serif text-3xl font-semibold
                      leading-tight text-[var(--color-primary,#74382E)]
                      transition-transform duration-500
                      group-hover:scale-[1.03]"
                  >
                    {story.title}
                  </span>
                </div>

                {/* Category chip */}
                <span
                  className="absolute left-5 top-5 rounded-full
                    border border-white/40 bg-white/70 px-3 py-1
                    text-[0.65rem] font-bold uppercase tracking-[0.14em]
                    text-[var(--color-primary,#74382E)] backdrop-blur-md"
                >
                  {story.category}
                </span>

                {/* Index badge */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 font-serif text-sm
                    font-bold text-[var(--color-primary,#74382E)]/50"
                >
                  0{index + 1}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[var(--color-primary,#74382E)]">
                  {story.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                  {story.description}
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center text-sm font-semibold
                    text-[var(--color-primary,#74382E)]
                    transition-colors duration-300
                    hover:text-[var(--color-accent,#ED9536)]"
                >
                  Read story
                  <span
                    className="ml-2 grid h-7 w-7 place-items-center rounded-full
                      border border-[var(--color-primary,#74382E)]/20
                      transition-all duration-300
                      group-hover:border-[var(--color-accent,#ED9536)]
                      group-hover:bg-[var(--color-accent,#ED9536)]
                      group-hover:text-white"
                  >
                    <FiArrowUpRight size={14} />
                  </span>
                </button>
              </div>

              {/* Bottom accent line */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left
                  scale-x-0 bg-gradient-to-r
                  from-[var(--color-accent,#ED9536)]
                  to-[var(--color-primary,#74382E)]
                  transition-transform duration-500
                  group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}