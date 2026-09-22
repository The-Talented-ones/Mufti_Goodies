import { FiArrowRight } from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";
import DodoVisual from "../../assets/DodoVisual.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-r from-[var(--color-background)]  to-[var(--color-secondary)]">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] bg-[length:35px_35px]"></div>
      <Container>
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Content */}
          <div className="relative  max-w-xl">
            <div className="flex items-center gap-[10px] mb-6 text-[var(--color-primary)] text-[0.78rem] font-bold uppercase tracking-[0.14em]">
              <span className="w-[30px] h-[2px] bg-[var(--color-accent)]"></span>
              Modern Indigenous Foods
            </div>

            <h1 className="font-[var(--font-heading)]  text-[var(--color-primary)] text-[clamp(3.5rem,7vw,6.3rem)] leading-[0.98] tracking-[-0.04em] mt-0 mx-0 mb-[28px]">
              Indigenous Goodness,
              <em className="block text-[var(--color-accent)]  italic">
                Reimagined.
              </em>
            </h1>

            <p className="mt-12 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Discover Nigerian snacks rooted in tradition, thoughtfully
              prepared and presented for the modern world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/shop">
                Shop Dodocious Dodo
                <FiArrowRight className="ml-2" size={18} />
              </Button>

              <Button to="/our-story" variant="outline">
                Explore Our Story
              </Button>
            </div>

            {/* Small brand statement */}
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--color-primary)]/30" />

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Traditional roots. Modern experience.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative ">
            <div className="absolute left-[75px] w-[430px] h-[430px] rounded-full bg-[var(--color-secondary)] opacity-80"></div>

            <div className="relative mx-auto z-10 w-[min(370px,80%)] overflow-hidden rounded-[28px] bg-[var(--color-white)] shadow-[var(--shadow-md)] rotate-3 transition-transform duration-500 ease-[ease] hover:rotate-0 hover:-translate-y-1">
              <div className="h-[360px] overflow-hidden bg-[radial-gradient(circle_at_center,#f5b45c_0,var(--color-accent)_50%,var(--color-primary)_100%)]">
                <img
                  src={DodoVisual}
                  alt="Dodocious Dodo"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-[24px]">
                <small className="block mb-[6px] text-[var(--color-accent)] text-[0.65rem] font-extrabold tracking-[0.14em]">
                  FEATURED
                </small>
                <strong className="block text-[var(--color-primary)] font-[family-name:var(--heading-font)] text-[1.7rem]">
                  Dodocious Dodo
                </strong>
                <span className="text-[var(--color-muted)] text-[0.8rem] font-medium">
                  Dodo Ikire, reimagined.
                </span>
              </div>
              <div className="absolute z-30 flex items-center gap-2 p-[13px_17px] border border-white/70 rounded-xl bg-white/92 shadow-[var(--shadow-soft)] backdrop-blur-[8px] top-[70px]  right-0">
                <span className="text-[var(--color-accent)] text-[0.8rem]">
                  ★★★★★
                </span>
                <strong className="text-[var(--color-primary)] text-[0.72rem]">
                  Made with care
                </strong>
              </div>
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-5 shadow-xl sm:block z-10">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Inspired by
              </p>

              <p className="mt-1 font-serif text-lg text-[var(--color-primary)]">
                Dodo Ikire
              </p>

              <p className="text-xs text-[var(--color-muted)]">
                Ikire, Osun State
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
