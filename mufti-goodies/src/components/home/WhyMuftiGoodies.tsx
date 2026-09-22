import {
  FiBookOpen,
  FiBookmark,
  FiHeart,
  FiPackage,
  FiStar,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const values = [
  {
    icon: FiStar,
    title: "Indigenous",
    description:
      "Inspired by Nigerian food traditions and the cultures that shaped them.",
  },
  {
    icon: FiBookmark,
    title: "Modern",
    description:
      "Traditional food experiences presented with contemporary design and convenience.",
  },
  {
    icon: FiHeart,
    title: "Quality-conscious",
    description:
      "We care about structured production, hygiene and thoughtful presentation.",
  },
  {
    icon: FiBookOpen,
    title: "Story-driven",
    description:
      "Every food has a story worth discovering, remembering and sharing.",
  },
  {
    icon: FiPackage,
    title: "Convenient",
    description:
      "Enjoy familiar Nigerian snacks through a simple modern ordering experience.",
  },
];

export default function WhyMuftiGoodies() {
  return (
    <section className="bg-[var(--color-secondary)]/40 py-24 lg:py-32">
      <Container>

        <SectionHeading
          eyebrow="Why Mufti Goodies"
          title={
            <>
              More than just <span className="text-[var(--color-accent)] italic">a Snack</span>
            </>
          }
          description="We are building a modern experience around the foods, stories and traditions that deserve to be remembered."
          centered
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-secondary)] text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--color-primary)]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {value.description}
                </p>
              </article>
            );
          })}

        </div>

      </Container>
    </section>
  );
}