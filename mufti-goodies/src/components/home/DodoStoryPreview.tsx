import { FiArrowRight } from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";

export default function DodoStoryPreview() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Story visual */}
          <div className="relative order-2 lg:order-1">

            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-[var(--color-primary)]">

              <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Heritage
                </p>

                <h3 className="mt-4 text-4xl font-semibold sm:text-5xl">
                  Dodo Ikire
                </h3>

                <p className="mt-4 text-white/70">
                  Ikire, Osun State
                </p>

              </div>

            </div>

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-[var(--color-accent)] sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />

          </div>

          {/* Story */}
          <div className="order-1 lg:order-2">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Before the snack
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Every food has a story.
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Dodo Ikire is associated with Ikire in Osun State
              and forms part of the rich food heritage that inspires
              Mufti Goodies.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              Explore where the tradition comes from, what makes
              Dodo Ikire different and how a familiar Nigerian food
              can be thoughtfully presented for today's consumers.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-secondary)]/40 p-5">
              <p className="text-sm leading-7 text-[var(--color-primary)]">
                Traditional accounts and documented information
                should be distinguished as we tell the story of
                Dodo Ikire.
              </p>
            </div>

            <div className="mt-8">
              <Button
                to="/heritage/dodo-ikire"
                variant="outline"
              >
                Explore the Dodo Ikire Story
                <FiArrowRight
                  className="ml-2"
                  size={17}
                />
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}