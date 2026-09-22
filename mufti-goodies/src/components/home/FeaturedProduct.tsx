import {
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import DodoStory from "../../assets/How To Make Dodo Ikire.jpg"
import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

const productDetails = [
  {
    label: "Inspired by",
    value: "Dodo Ikire",
  },
  {
    label: "Ingredient",
    value: "Plantain",
  },
  {
    label: "Category",
    value: "Indigenous Snack",
  },
];

export default function FeaturedProduct() {
  return (
    <section className="py-24 lg:py-32">
      <Container>

        <SectionHeading
          eyebrow="Our Flagship"
          title={
            <>
              Meet <span className="text-[var(--color-accent)] italic">Dodocious Dodo</span>
            </>
          }
          description="A modern expression of Dodo Ikire — a beloved Yoruba plantain delicacy associated with Ikire, Osun State."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Product visual */}
         
<div className="relative group">

  {/* Main image card */}
  <div
    className="
      relative aspect-square overflow-hidden rounded-[2rem]
      shadow-[var(--shadow-soft)]
      transition-all duration-500
      group-hover:shadow-2xl
    "
  >
    {/* Background Image */}
    <img
      src={DodoStory}
      alt="Dodocious Dodo"
      className="
        absolute inset-0 h-full w-full object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
    />

    {/* Soft overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t
        from-[var(--color-primary)]/90
        via-[var(--color-primary)]/30
        to-transparent
      "
    />

    {/* Content positioned over image */}
    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

      {/* Small label */}
      <div className="mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 backdrop-blur-md border border-white/20">
        <span className="mr-2 text-sm">🍌</span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Featured
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          font-serif text-3xl font-semibold
          text-white sm:text-4xl
        "
      >
        Dodocious Dodo
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
        Indigenous goodness, reimagined.
      </p>

      {/* CTA */}
      <div className="mt-5">
        <a
          href="/shop"
          className="
            inline-flex items-center gap-2
            rounded-full
            bg-white px-5 py-3
            text-sm font-semibold
            text-[var(--color-primary)]
            transition-all duration-300
            hover:bg-[var(--color-accent)]
            hover:text-white
            hover:-translate-y-0.5
          "
        >
          Discover Dodo
          <span className="text-lg leading-none">→</span>
        </a>
      </div>

    </div>
  </div>

  {/* Floating brand card */}
  <div
    className="
      absolute -bottom-5 -right-5
      hidden sm:block
      rounded-2xl
      border border-[var(--color-border)]
      bg-white/95
      px-5 py-4
      shadow-xl
      backdrop-blur-md
      transition-transform duration-300
      group-hover:-translate-y-1
    "
  >
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
      From Nigerian heritage
    </p>

    <p className="mt-1 font-serif text-xl font-semibold text-[var(--color-primary)]">
      Mufti Goodies
    </p>
  </div>

</div>



          {/* Product information */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The flagship
            </p>

            <h3 className="mt-3 text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Dodo, with a story.
            </h3>

            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Dodocious Dodo takes inspiration from the traditional
              Dodo Ikire food heritage and presents it through a
              contemporary Mufti Goodies experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {productDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-xl border border-[var(--color-border)] p-4"
                >
                  <p className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                    {detail.label}
                  </p>

                  <p className="mt-1 font-semibold text-[var(--color-primary)]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">

              {[
                "Inspired by Nigerian food heritage",
                "Thoughtful modern presentation",
                "Designed for convenient enjoyment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <FiCheck size={14} />
                  </span>

                  <span className="text-sm text-[var(--color-muted)]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-9 flex flex-wrap gap-4">

              <Button to="/shop">
                Shop Dodocious Dodo
                <FiArrowUpRight
                  className="ml-2"
                  size={17}
                />
              </Button>

              <Button
                to="/heritage/dodo-ikire"
                variant="outline"
              >
                Discover Its Story
              </Button>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}