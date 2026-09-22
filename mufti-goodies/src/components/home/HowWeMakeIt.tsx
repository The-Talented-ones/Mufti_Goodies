// HowWeMakeIt.tsx
import {
  FiBox,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Raw Materials",
    description: "Start with the ingredients needed for the product.",
  },
  {
    number: "02",
    title: "Selection",
    description: "Select materials carefully before preparation.",
  },
  {
    number: "03",
    title: "Preparation",
    description: "Prepare ingredients through the appropriate process.",
  },
  {
    number: "04",
    title: "Processing",
    description:
      "Transform the ingredients into the finished food experience.",
  },
  {
    number: "05",
    title: "Quality Checks",
    description: "Review the product before it moves to packaging.",
  },
  {
    number: "06",
    title: "Packaging",
    description: "Present the product thoughtfully for customers.",
  },
  {
    number: "07",
    title: "Delivery",
    description: "Prepare orders for dispatch to their destination.",
  },
];

const highlights = [
  { icon: FiCheckCircle, label: "Structured process" },
  { icon: FiBox, label: "Thoughtful packaging" },
  { icon: FiTruck, label: "Convenient delivery" },
];

export default function HowWeMakeIt() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-24 text-white lg:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />

      {/* Faint dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]
          bg-[radial-gradient(white_1px,transparent_1px)]
          [background-size:32px_32px]"
      />

      <Container className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we make it."
            description="We want customers to see the structure, care and professionalism behind the products they enjoy."
          />
        </div>

        {/* Steps grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl
                border border-white/10 bg-white/[0.04] p-6
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1 hover:border-[var(--color-accent)]/40
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Top accent line */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r
                  from-transparent via-[var(--color-accent)] to-transparent
                  transition-transform duration-500
                  group-hover:scale-x-100"
              />

              {/* Step number */}
              <div className="flex items-center justify-between">
                <span
                  className="font-[var(--heading-font,serif)] text-3xl font-bold
                    text-[var(--color-accent)]/90
                    transition-transform duration-300
                    group-hover:scale-110"
                >
                  {step.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-8 w-8 rounded-full border border-white/10
                    bg-white/5
                    transition-colors duration-300
                    group-hover:border-[var(--color-accent)]/40
                    group-hover:bg-[var(--color-accent)]/10"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-white/60">
                {step.description}
              </p>

              {/* Index watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 right-4
                  font-[var(--heading-font,serif)] text-7xl font-black
                  text-white/[0.03] select-none"
              >
                {index + 1}
              </span>
            </article>
          ))}

          {/* Highlight / CTA card to fill grid on lg */}
          <aside
            className="relative mx-auto flex flex-col justify-between overflow-hidden
              rounded-2xl bg-[var(--color-accent)] p-6 text-[var(--color-primary)]
              // sm:col-span-2 lg:col-span-4
              lg:flex-row lg:items-center lg:gap-8"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">
                Every step, intentional
              </p>
              <h3 className="mt-2 font-[var(--heading-font,serif)] text-2xl font-bold leading-tight lg:text-3xl">
                From raw ingredients to your door — with care at every stage.
              </h3>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-0">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Icon size={18} />
                  {label}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}