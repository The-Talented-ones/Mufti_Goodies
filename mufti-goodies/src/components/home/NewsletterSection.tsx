import { FiArrowRight } from "react-icons/fi";

import Container from "../common/Container";

export default function NewsletterSection() {
  return (
    <section className="pb-24 lg:pb-32">
      <Container>

        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-secondary)] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Stay Connected
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Stories, snacks & culture.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
              Discover the stories behind the snacks you love,
              along with new products and updates from Mufti Goodies.
            </p>

            <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">

              <input
                type="email"
                placeholder="Your email address"
                className="h-12 flex-1 rounded-full border border-[var(--color-border)] bg-white px-5 text-sm outline-none placeholder:text-[var(--color-light-text)] focus:border-[var(--color-primary)]"
              />

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[#5f2d25]"
              >
                Subscribe
                <FiArrowRight
                  className="ml-2"
                  size={17}
                />
              </button>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}