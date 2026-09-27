// src/pages/Journal.tsx

import { useEffect } from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";
import FeaturedPost from "../../components/journal/FeaturedPost";
import JournalGrid from "../../components/journal/JournalGrid";
import { getFeaturedPost } from "../../data/journal";

/* =====================================================
   STRUCTURED DATA
====================================================== */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://muftigoodies.com/journal/#blog",
      url: "https://muftigoodies.com/journal/",
      name: "The Journal — Mufti Goodies",
      description:
        "Stories, ideas and updates from Mufti Goodies. Reflections on Nigerian food culture, lifestyle and building an indigenous food brand.",
      publisher: {
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
          name: "Journal",
          item: "https://muftigoodies.com/journal/",
        },
      ],
    },
  ],
};

/* =====================================================
   PAGE
====================================================== */

export default function Journal() {
  const featured = getFeaturedPost();

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
          HEADER
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
                The Journal
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl lg:text-6xl">
              Stories, ideas
              <span className="block italic text-[var(--color-accent,#ED9536)]">
                &amp; updates.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted,#756A66)]">
              Reflections on Nigerian food culture, everyday snacking,
              and what it takes to build an indigenous food brand —
              written from inside Mufti Goodies.
            </p>
          </div>
        </Container>
      </header>

      {/* =====================================================
          FEATURED POST
      ====================================================== */}
      {featured && (
        <section
          aria-labelledby="featured-post-heading"
          className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
            Featured
          </p>

          <h2 id="featured-post-heading" className="sr-only">
            Featured journal post
          </h2>

          <FeaturedPost post={featured} />
        </section>
      )}

      {/* =====================================================
          ALL POSTS
      ====================================================== */}
      <section
        aria-labelledby="all-posts-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Latest Posts"
              title="From the Journal"
              description="Browse by category or search for a specific topic. New posts published regularly."
            />
          </div>

          <div className="mt-14">
            <JournalGrid showFilters />
          </div>
        </Container>
      </section>

      {/* =====================================================
          NEWSLETTER CTA
      ====================================================== */}
      <section
        aria-labelledby="journal-newsletter-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-primary,#74382E)] text-white">
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64
                rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                Stay in the loop
              </p>

              <h2
                id="journal-newsletter-heading"
                className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Get new posts in your inbox.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                No spam — just occasional journal posts, product drops
                and heritage stories worth reading.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to Journal updates"
              className="relative w-full"
            >
              <label htmlFor="journal-email" className="sr-only">
                Email address
              </label>

              <div
                className="flex flex-col gap-3 rounded-2xl border border-white/15
                  bg-white/5 p-2 backdrop-blur-sm sm:flex-row sm:items-center"
              >
                <input
                  id="journal-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm
                    text-white placeholder:text-white/40
                    focus:outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl
                    bg-[var(--color-accent,#ED9536)] px-5 py-3 text-sm font-semibold
                    text-[var(--color-primary,#74382E)]
                    transition-all duration-300
                    hover:brightness-95
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-white/60"
                >
                  Subscribe
                  <FiMail size={15} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="journal-cta-heading"
        className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28"
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
                Explore more
              </p>

              <h2
                id="journal-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
              >
                Stories about food? Explore the Heritage library.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
                The Journal covers ideas and updates. The Heritage
                library preserves the foods, ingredients and
                traditions behind them.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/heritage" variant="primary">
                  Explore Heritage
                  <FiArrowUpRight size={15} className="ml-2" aria-hidden="true" />
                </Button>
                <Button to="/shop" variant="outline">
                  Shop Snacks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}