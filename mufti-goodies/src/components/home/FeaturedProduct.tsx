// src/components/home/FeaturedProduct.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";

import DodoStory from "/images/products/Dodo_Story2.webp";
import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

/* =====================================================
   DATA
====================================================== */

const productDetails = [
  { label: "Inspired by", value: "Dodo Ikire" },
  { label: "Ingredient", value: "Plantain" },
  { label: "Category", value: "Indigenous Snack" },
];

const highlights = [
  "Inspired by Nigerian food heritage",
  "Thoughtful modern presentation",
  "Designed for convenient enjoyment",
];

/* =====================================================
   COMPONENT
====================================================== */

export default function FeaturedProduct() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Flagship"
          title={
            <>
              Meet{" "}
              <span className="italic text-[var(--color-accent)]">
                Dodocious Dodo
              </span>
            </>
          }
          description="A modern expression of Dodo Ikire — a beloved Yoruba plantain delicacy associated with Ikire, Osun State."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              PRODUCT VISUAL
          ====================================================== */}
          <div className="group relative">
            {/* Main image card */}
            <div
              className="relative aspect-square overflow-hidden rounded-[2rem]
                shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]
                transition-all duration-500
                group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
            >
              {/* Background image */}
              <img
                src={DodoStory}
                alt="Dodocious Dodo — a modern Dodo Ikire plantain snack"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105"
              />

              {/* 
                Overlay — stronger at the bottom so the text block 
                always has solid contrast, fades to transparent at top 
                so the photo is visible.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/45
                  via-40%
                  to-black/10"
              />

              {/* Subtle warm wash from the brand palette */}
              <div
                aria-hidden="true"
                className="absolute inset-0
                  bg-gradient-to-br
                  from-[var(--color-primary,#74382E)]/25
                  to-transparent
                  mix-blend-multiply"
              />

              {/* Content over image */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                {/* Featured chip */}
                <div
                  className="mb-4 inline-flex items-center gap-2
                    rounded-full border border-white/25 bg-white/15
                    px-4 py-2 backdrop-blur-md"
                >
                  <GiPlantRoots
                    size={14}
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
                    Featured
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
                  style={{
                    textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                  }}
                >
                  Dodocious Dodo
                </h3>

                {/* Description */}
                <p
                  className="mt-2 max-w-sm text-sm leading-relaxed text-white/90"
                  style={{
                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  Indigenous goodness, reimagined.
                </p>

                {/* CTA */}
                <div className="mt-5">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2
                      rounded-full bg-white px-5 py-3
                      text-sm font-semibold
                      text-[var(--color-primary,#74382E)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-[var(--color-accent,#ED9536)]
                      hover:text-white
                      hover:shadow-lg
                      focus:outline-none focus-visible:ring-2
                      focus-visible:ring-white/60"
                  >
                    Discover Dodo
                    <FiArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating brand card */}
            <div
              className="absolute -bottom-5 -right-5 hidden rounded-2xl
                border border-[var(--color-border,#E8DDD9)]
                bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md
                transition-transform duration-300
                group-hover:-translate-y-1 sm:block"
            >
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted,#756A66)]">
                From Nigerian heritage
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                Mufti Goodies
              </p>
            </div>
          </div>

          {/* =====================================================
              PRODUCT INFO
          ====================================================== */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
              The flagship
            </p>

            <h3 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl">
              Dodo, with a story.
            </h3>

            <p className="mt-6 text-base leading-8 text-[var(--color-muted,#756A66)]">
              Dodocious Dodo takes inspiration from the traditional Dodo
              Ikire food heritage and presents it through a contemporary
              Mufti Goodies experience.
            </p>

            {/* Detail cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {productDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-xl border border-[var(--color-border,#E8DDD9)] p-4
                    transition-colors duration-300
                    hover:border-[var(--color-primary,#74382E)]/30"
                >
                  <p className="text-xs uppercase tracking-wider text-[var(--color-muted,#756A66)]">
                    {detail.label}
                  </p>
                  <p className="mt-1 font-semibold text-[var(--color-primary,#74382E)]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul role="list" className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full
                      bg-[var(--color-secondary,#D8C5BF)] text-[var(--color-primary,#74382E)]"
                  >
                    <FiCheck size={13} />
                  </span>
                  <span className="text-sm text-[var(--color-muted,#756A66)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/shop" variant="primary" className="group">
                Shop Dodocious Dodo
                <FiArrowUpRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={17}
                  aria-hidden="true"
                />
              </Button>

              <Button to="/heritage/dodo-ikire" variant="outline">
                Discover Its Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}