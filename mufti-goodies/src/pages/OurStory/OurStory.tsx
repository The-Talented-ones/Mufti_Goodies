// OurStory.tsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

/* =====================================================
   CONTENT
====================================================== */

const values = [
  {
    icon: "🌿",
    title: "Heritage",
    description:
      "We respect where our foods come from and the traditions that give them meaning.",
  },
  {
    icon: "✨",
    title: "Quality",
    description:
      "We don't compromise on the quality and care that go into what we make.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "We are honest about what we make, how we present it, and what we promise.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We continuously improve traditional food experiences for today's consumers.",
  },
  {
    icon: "🫶",
    title: "Community",
    description:
      "We believe food can create value beyond the product itself.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    description:
      "We aim to make familiar foods exceptionally well.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    description:
      "We explore indigenous Nigerian foods, ingredients, traditions and the stories behind them.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "We approach our products with care, thoughtful preparation and attention to quality.",
  },
  {
    number: "03",
    title: "Present",
    description:
      "We give familiar foods a contemporary identity without losing their cultural roots.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We make it easier for people to discover, order and enjoy indigenous goodness.",
  },
];

const philosophy = [
  {
    icon: "🌿",
    title: "Rooted",
    description:
      "We start with foods and traditions that already have meaning in Nigerian communities.",
  },
  {
    icon: "✨",
    title: "Reimagined",
    description:
      "We explore how familiar foods can be presented for contemporary consumers.",
  },
  {
    icon: "📖",
    title: "Remembered",
    description:
      "We believe every food has a story worth discovering and sharing.",
  },
];

/* =====================================================
   JSON-LD (Organization + AboutPage + Breadcrumbs)
====================================================== */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://muftigoodies.com/#organization",
      name: "Mufti Goodies",
      url: "https://muftigoodies.com/",
      logo: "https://muftigoodies.com/images/logo.png",
      description:
        "Mufti Goodies is a modern Nigerian food brand bringing indigenous snacks like Dodocious Dodo (Dodo Ikire) to today's consumers through thoughtful preparation and storytelling.",
      foundingLocation: {
        "@type": "Place",
        name: "Ikire, Osun State, Nigeria",
      },
      areaServed: "NG",
      knowsAbout: [
        "Nigerian snacks",
        "Dodo Ikire",
        "Kuli-Kuli",
        "Yoruba food heritage",
        "Indigenous Nigerian foods",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://muftigoodies.com/our-story/#webpage",
      url: "https://muftigoodies.com/our-story/",
      name: "Our Story — Mufti Goodies",
      description:
        "The story behind Mufti Goodies: how a small Dodo Ikire resale idea became a modern brand for indigenous Nigerian foods.",
      isPartOf: { "@id": "https://muftigoodies.com/#organization" },
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
          name: "Our Story",
          item: "https://muftigoodies.com/our-story/",
        },
      ],
    },
  ],
};

/* =====================================================
   COMPONENT
====================================================== */

export default function OurStory() {
  // Inject JSON-LD once
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
    <main
      className="bg-[var(--color-background)] text-[var(--color-text)]"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* =====================================================
          HERO
      ====================================================== */}
      <header
        className="relative overflow-hidden"
        role="banner"
        aria-label="Mufti Goodies — Our Story hero"
      >
        {/* Background image (decorative, content is text) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/heritage/Dodo_Story1.webp')",
          }}
        />

        {/* Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--color-primary)]/80"
        />

        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10"
        />

        <div className="relative mx-auto flex min-h-[600px] max-w-[1180px] items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-[var(--color-accent)]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Our Story
              </span>
            </p>

            <h1
              className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              itemProp="headline"
            >
              More Than a Snack.
              <span className="mt-2 block italic text-[var(--color-accent)]">
                A Story Worth Sharing.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
              itemProp="description"
            >
              Mufti Goodies exists to bring{" "}
              <strong className="font-semibold text-white">
                indigenous Nigerian foods
              </strong>{" "}
              closer to today's consumer — thoughtfully prepared,
              beautifully presented and connected to the stories that
              made them special.
            </p>

            <nav
              aria-label="Our story quick actions"
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                aria-label="Discover Dodocious Dodo, our modern Dodo Ikire snack"
              >
                Discover Dodocious Dodo
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#why-we-started"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
              >
                Our Journey
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* =====================================================
          WHY WE STARTED
      ====================================================== */}
      <section
        id="why-we-started"
        aria-labelledby="why-we-started-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <figure className="relative m-0">
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <img
                src="/images/heritage/Dodo_Story1.webp"
                alt="Dodocious Dodo — a modern take on Dodo Ikire, a traditional Yoruba snack from Ikire, Osun State, Nigeria"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating card */}
            <figcaption className="absolute -bottom-6 -right-4 hidden max-w-[230px] rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                The beginning
              </p>
              <p className="mt-2 font-serif text-xl font-semibold text-[var(--color-primary)]">
                From Dodo to a bigger dream.
              </p>
            </figcaption>
          </figure>

          {/* Text */}
          <div>
            <p className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent)]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Why We Started
              </span>
            </p>

            <h2
              id="why-we-started-heading"
              className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl"
            >
              It started with something familiar.
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--color-muted)]">
              <p>
                Mufti Goodies began with something simple: buying{" "}
                <strong className="font-semibold text-[var(--color-text)]">
                  Dodo Ikire
                </strong>{" "}
                from a relative and reselling it.
              </p>

              <p>
                What began as a small opportunity gradually revealed
                something bigger — familiar indigenous foods could be
                presented in ways that feel modern, intentional and
                exciting to today's consumers.
              </p>

              <p>
                That idea became the foundation for Mufti Goodies: not
                simply selling{" "}
                <Link
                  to="/shop"
                  className="font-semibold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:opacity-80"
                >
                  Nigerian snacks
                </Link>
                , but building a brand around the foods, stories and
                traditions behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FROM TRADITION TO TODAY
      ====================================================== */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-[var(--color-soft)]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Our Philosophy
            </p>

            <h2
              id="philosophy-heading"
              className="mt-4 font-serif text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl"
            >
              From tradition to the modern table.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              Indigenous foods carry more than flavour. They carry
              memories, places, creativity and cultural identity. We
              want to help bring those experiences into a modern food
              journey without losing sight of where they came from.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {philosophy.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-soft)]"
              >
                <span aria-hidden="true" className="text-3xl">
                  {item.icon}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-semibold text-[var(--color-primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION + MISSION
      ====================================================== */}
      <section
        aria-labelledby="vision-mission-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <h2 id="vision-mission-heading" className="sr-only">
          Our vision and mission
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Vision */}
          <article className="rounded-[2rem] bg-[var(--color-primary)] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Our Vision
            </p>

            <h3 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
              A trusted modern home for indigenous Nigerian foods.
            </h3>

            <p className="mt-5 text-sm leading-8 text-white/75">
              To become a trusted modern brand for indigenous Nigerian
              foods, preserving their heritage while making them
              accessible, desirable and relevant to contemporary
              consumers.
            </p>
          </article>

          {/* Mission */}
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Our Mission
            </p>

            <h3 className="mt-5 font-serif text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              Turning indigenous goodness into modern experiences.
            </h3>

            <p className="mt-5 text-sm leading-8 text-[var(--color-muted)]">
              To discover, develop, package and deliver quality
              indigenous foods through modern production, thoughtful
              branding, storytelling and customer experience.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section
        aria-labelledby="values-heading"
        className="bg-[var(--color-primary)]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              What Guides Us
            </p>

            <h2
              id="values-heading"
              className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl"
            >
              Our values
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              The principles behind how we think about our products,
              our stories and the people we serve.
            </p>
          </div>

          <ul
            role="list"
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => (
              <li key={value.title}>
                <article className="group h-full rounded-[1.5rem] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl"
                  >
                    {value.icon}
                  </span>

                  <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {value.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section
        aria-labelledby="approach-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Our Approach
            </p>

            <h2
              id="approach-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl"
            >
              Respect the roots.
              <span className="block italic text-[var(--color-accent)]">
                Improve the experience.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[var(--color-muted)]">
              We want the journey from discovering an indigenous food
              to enjoying it to feel thoughtful at every stage.
            </p>
          </div>

          <ol className="space-y-4">
            {approach.map((item) => (
              <li key={item.number}>
                <article className="group flex gap-5 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] sm:p-7">
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl font-semibold text-[var(--color-accent)]"
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--color-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="cta-heading"
        className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28"
      >
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[var(--color-soft)]">
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-secondary)]/50"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-[var(--color-accent)]/10"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Continue the journey
              </p>

              <h2
                id="cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl"
              >
                Ready to taste the story?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                Discover Dodocious Dodo — our modern expression of an
                indigenous Nigerian food tradition.
              </p>

              <div className="mt-8">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
                  aria-label="Shop Dodocious Dodo, a modern Dodo Ikire snack by Mufti Goodies"
                >
                  Shop Dodocious Dodo
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}