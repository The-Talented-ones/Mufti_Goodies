// src/pages/Heritage.tsx

import { useEffect } from "react";
import { FiArrowUpRight, FiBookOpen, FiFeather, FiMap } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";
import HeritageCard from "../../components/heritage/HeritageCard";
import HeritageGrid from "../../components/heritage/HeritageGrid";
import { getFeaturedStory } from "../../data/heritage";

/* =====================================================
   STRUCTURED DATA
====================================================== */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://muftigoodies.com/heritage/#webpage",
      url: "https://muftigoodies.com/heritage/",
      name: "Indigenous Food Stories — Mufti Goodies",
      description:
        "Explore the foods, ingredients and traditions that shaped Nigerian tables. A growing digital library of Nigerian food heritage.",
      isPartOf: {
        "@id": "https://muftigoodies.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://muftigoodies.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Indigenous Food Stories",
          item: "https://muftigoodies.com/heritage/",
        },
      ],
    },
  ],
};

/* =====================================================
   PAGE
====================================================== */

export default function Heritage() {
  const featured = getFeaturedStory();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <header className="relative overflow-hidden border-b border-[var(--color-border,#E8DDD9)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96
            rounded-full bg-[var(--color-secondary,#D8C5BF)]/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80
            rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]
            bg-[radial-gradient(var(--color-primary,#74382E)_1px,transparent_1px)]
            [background-size:32px_32px]"
        />

        <Container className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
                Indigenous Food Stories
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl lg:text-6xl">
              Before they became snacks,
              <span className="block italic text-[var(--color-accent,#ED9536)]">
                they were stories.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted,#756A66)]">
              A growing digital library of the foods, ingredients and
              traditions that shaped Nigerian tables. Discover where
              familiar snacks come from — and the culture behind every
              bite.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/heritage/dodo-ikire" variant="primary">
                Start with Dodo Ikire
              </Button>
              <Button to="/shop" variant="outline">
                Shop Nigerian Snacks
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          FEATURED STORY
      ====================================================== */}
      {featured && (
        <section
          aria-labelledby="featured-heading"
          className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
            Featured Story
          </p>

          <h2 id="featured-heading" className="sr-only">
            Featured heritage story
          </h2>

          <HeritageCard story={featured} variant="featured" />
        </section>
      )}

      {/* =====================================================
          ALL STORIES
      ====================================================== */}
      <section
        aria-labelledby="all-stories-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="The Library"
              title="Explore Indigenous Food Stories"
              description="Browse by category or search for a specific food, ingredient or region. Every story connects to the snacks we make."
            />
          </div>

          <div className="mt-14">
            <HeritageGrid showFilters />
          </div>
        </Container>
      </section>

      {/* =====================================================
          EXPLORE BY REGION
      ====================================================== */}
      <section
        aria-labelledby="regions-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Growing Collection"
            title="Explore by region"
            description="We're starting with Yoruba foods — and expanding across Nigeria's rich food regions."
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <GiPlantRoots size={26} />,
              name: "Yoruba Foods",
              status: "Available now",
            },
            {
              icon: <FiFeather size={26} />,
              name: "Hausa Foods",
              status: "Coming soon",
            },
            {
              icon: <FiBookOpen size={26} />,
              name: "Igbo Foods",
              status: "Coming soon",
            },
            {
              icon: <FiMap size={26} />,
              name: "Niger Delta Foods",
              status: "Coming soon",
            },
          ].map((region) => (
            <article
              key={region.name}
              className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--color-primary,#74382E)]/20
                hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.12))]"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-full
                  bg-[var(--color-soft,#F5EEEB)]
                  text-[var(--color-accent,#ED9536)]"
              >
                {region.icon}
              </span>

              <h3 className="mt-5 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                {region.name}
              </h3>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
                {region.status}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          QUOTE / PHILOSOPHY STRIP
      ====================================================== */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-[var(--color-primary,#74382E)] text-white"
      >
        <Container className="relative py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64
              rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
          />

          <blockquote className="relative mx-auto max-w-3xl text-center">
            <p
              id="philosophy-heading"
              className="font-serif text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-5xl"
            >
              Every food has a story.
              <span className="mt-2 block italic text-[var(--color-accent,#ED9536)]">
                We&apos;re here to help you hear it.
              </span>
            </p>

            <footer className="mt-8">
              <cite className="not-italic text-sm uppercase tracking-[0.2em] text-white/60">
                — Mufti Goodies
              </cite>
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="heritage-cta-heading"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[var(--color-soft,#F5EEEB)]">
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-secondary,#D8C5BF)]/50"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-[var(--color-accent,#ED9536)]/10"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                From story to snack
              </p>

              <h2
                id="heritage-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
              >
                Taste what you&apos;ve just discovered.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
                Our flagship snack, Dodocious Dodo, is a modern
                expression of the Dodo Ikire story you just read.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/shop/dodocious-dodo" variant="primary">
                  Shop Dodocious Dodo
                  <FiArrowUpRight size={15} className="ml-2" aria-hidden="true" />
                </Button>
                <Button to="/our-story" variant="outline">
                  Read Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}