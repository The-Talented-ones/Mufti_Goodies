// Shop.tsx
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  FiArrowUpRight,
  FiSearch,
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiPackage,
  FiBookOpen,
  FiFeather,
} from "react-icons/fi";
import { GiPlantRoots, GiWheat, GiPeanut } from "react-icons/gi";

import Container from "../../components//common/Container";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";

/* =====================================================
   PRODUCT DATA
   Phase 1: Dodocious Dodo only.
====================================================== */

interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Plantain" | "Groundnut" | "Maize" | "Coming Soon";
  region: string;
  price: number;
  sizes: string[];
  status: "available" | "coming-soon";
  image: string;                 // path to product image
  imageAlt: string;              // descriptive alt text for SEO + a11y
  /** Fallback icon used if image is missing / coming-soon */
  fallbackIcon?: ReactNode;
  accent: string;                // gradient behind the image (fallback + hover wash)
}

const products: Product[] = [
  {
    id: "dodocious-dodo",
    slug: "/shop/dodocious-dodo",
    name: "Dodocious Dodo",
    tagline: "A modern expression of Dodo Ikire.",
    category: "Plantain",
    region: "Ikire, Osun State",
    price: 3500,
    sizes: ["100g", "200g", "500g"],
    status: "available",
    image: "/images/products/Dodo_Story2.webp",
    imageAlt:
      "Dodocious Dodo — a modern Dodo Ikire plantain snack from Ikire, Osun State, Nigeria",
    accent:
      "from-[#f5b45c] via-[var(--color-accent,#ED9536)] to-[var(--color-primary,#74382E)]",
  },
  {
    id: "kulicious-kuli",
    slug: "/shop/kulicious-kuli",
    name: "Kulicious Kuli",
    tagline: "Crunchy, spiced groundnut goodness.",
    category: "Groundnut",
    region: "Northern Nigeria",
    price: 0,
    sizes: [],
    status: "coming-soon",
    image: "/images/products/kuliciousKuli.jpg",
    imageAlt:
      "Kulicious Kuli — a crunchy Nigerian groundnut snack inspired by Kuli-Kuli",
    fallbackIcon: <GiPeanut size={96} />,
    accent: "from-[#e9c46a] via-[#d4a24a] to-[#8a5a2b]",
  },
  {
    id: "kokoro",
    slug: "/shop/kokoro",
    name: "Kokoro",
    tagline: "The classic Nigerian maize snack.",
    category: "Maize",
    region: "Pan-Nigerian",
    price: 0,
    sizes: [],
    status: "coming-soon",
    image: "/images/products/kokoro.jpg",
    imageAlt:
      "Kokoro — a classic Nigerian maize snack with deep cultural roots",
    fallbackIcon: <GiWheat size={96} />,
    accent: "from-[#f4d06f] via-[#e0a83f] to-[#9c6b1c]",
  },
];

/* =====================================================
   FILTERS
====================================================== */

const categories = [
  "All",
  "Plantain",
  "Groundnut",
  "Maize",
  "Coming Soon",
] as const;
type Category = (typeof categories)[number];

/* =====================================================
   SHOP PAGE
====================================================== */

export default function Shop() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.region.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        active === "All" ||
        (active === "Coming Soon" && p.status === "coming-soon") ||
        p.category === active;

      return matchesQuery && matchesCategory;
    });
  }, [query, active]);

  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="relative overflow-hidden border-b border-[var(--color-border,#E8DDD9)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96
            rounded-full bg-[var(--color-secondary,#D8C5BF)]/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80
            rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
        />

        <Container className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
                The Shop
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl lg:text-6xl">
              Indigenous goodness,
              <span className="block italic text-[var(--color-accent,#ED9536)]">
                ready to enjoy.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted,#756A66)]">
              Thoughtfully prepared Nigerian snacks, rooted in tradition
              and presented for the modern table. Start with{" "}
              <strong className="font-semibold text-[var(--color-primary,#74382E)]">
                Dodocious Dodo
              </strong>
              , our flagship Dodo Ikire snack.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <TrustPill icon={<FiShield size={16} />} label="Quality-conscious" />
            <TrustPill
              icon={<FiPackage size={16} />}
              label="Thoughtful packaging"
            />
            <TrustPill icon={<FiTruck size={16} />} label="Reliable delivery" />
          </ul>
        </Container>
      </header>

      {/* =====================================================
          FILTER + SEARCH
      ====================================================== */}
      <section
        aria-label="Filter and search products"
        className="mx-auto max-w-[1180px] px-5 pt-12 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary,#74382E)] text-white shadow-[0_8px_25px_rgba(116,56,46,0.08)]"
                      : "border border-[var(--color-border,#E8DDD9)] bg-white text-[var(--color-primary,#74382E)] hover:border-[var(--color-primary,#74382E)]/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <label className="relative flex w-full max-w-sm items-center">
            <span className="sr-only">Search products</span>
            <FiSearch
              aria-hidden="true"
              className="pointer-events-none absolute left-4 text-[var(--color-muted,#756A66)]"
              size={16}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Dodo, Kuli, ingredients…"
              className="w-full rounded-full border border-[var(--color-border,#E8DDD9)]
                bg-white py-3 pl-11 pr-4 text-sm text-[var(--color-text,#2E2522)]
                placeholder:text-[var(--color-muted,#756A66)]/70
                focus:border-[var(--color-accent,#ED9536)]
                focus:outline-none focus:ring-2
                focus:ring-[var(--color-accent,#ED9536)]/30
                transition-all duration-300"
            />
          </label>
        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}
      <section
        aria-label="Products"
        className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
      >
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[var(--color-border,#E8DDD9)] bg-white/60 px-6 py-20 text-center">
            <p className="font-serif text-2xl text-[var(--color-primary,#74382E)]">
              No products match your search.
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted,#756A66)]">
              Try a different keyword or browse all categories.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setActive("All");
                }}
              >
                Reset filters
              </Button>
            </div>
          </div>
        ) : (
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* =====================================================
          COMING SOON / ROADMAP
      ====================================================== */}
      <section
        aria-labelledby="roadmap-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
              Growing Collection
            </p>

            <h2
              id="roadmap-heading"
              className="mt-4 font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
            >
              What&apos;s coming next.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[var(--color-muted,#756A66)]">
              We add products when they&apos;re truly ready — not just because
              we have space. Each new snack will be rooted in Nigerian
              food heritage and prepared with the same care as Dodocious
              Dodo.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {[
              { icon: <GiPeanut size={22} />, name: "Kulicious Kuli" },
              { icon: <GiWheat size={22} />, name: "Kokoro" },
              { icon: <GiPlantRoots size={22} />, name: "Plantain Chips" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white px-5 py-4"
              >
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-primary,#74382E)]"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted,#756A66)]">
                    In development
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* =====================================================
          WHY BUY FROM US
      ====================================================== */}
      <section
        aria-labelledby="why-buy-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Why Mufti Goodies"
            title="Familiar foods, thoughtfully made."
            description="We combine indigenous Nigerian food traditions with modern preparation, packaging and customer experience."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <GiPlantRoots size={28} />,
              title: "Indigenous",
              text: "Inspired by Nigerian food traditions.",
            },
            {
              icon: <FiFeather size={28} />,
              title: "Modern",
              text: "Contemporary packaging and experience.",
            },
            {
              icon: <FiShield size={28} />,
              title: "Quality-conscious",
              text: "Structured production and hygiene.",
            },
            {
              icon: <FiBookOpen size={28} />,
              title: "Story-driven",
              text: "Every food has a story worth sharing.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--color-primary,#74382E)]/20
                hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.12))]"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-accent,#ED9536)]"
              >
                {item.icon}
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          DELIVERY STRIP
      ====================================================== */}
      <section
        aria-labelledby="delivery-heading"
        className="mx-auto max-w-[1180px] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28"
      >
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-primary,#74382E)] text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                How it works
              </p>

              <h2
                id="delivery-heading"
                className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
              >
                From our kitchen to your door.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
                Order online, we prepare and package your snack with care,
                then dispatch it to your address. Pickup and bulk orders
                available on request.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/delivery" variant="secondary" className="group">
                  Delivery Details
                  <FiArrowUpRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={16}
                  />
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-[var(--color-primary,#74382E)]"
                >
                  Bulk Orders
                </Button>
              </div>
            </div>

            <ol className="space-y-3 text-sm">
              {[
                "Choose your snack",
                "Place your order",
                "We prepare & package",
                "We dispatch",
                "You enjoy",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-accent,#ED9536)] text-xs font-bold text-[var(--color-primary,#74382E)]">
                    {i + 1}
                  </span>
                  <span className="text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="shop-cta-heading"
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
                Taste the story
              </p>

              <h2
                id="shop-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
              >
                Ready to try Dodocious Dodo?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
                A modern expression of Dodo Ikire — a beloved Yoruba
                plantain delicacy from Ikire, Osun State.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/shop/dodocious-dodo" variant="primary">
                  Shop Dodocious Dodo
                </Button>
                <Button to="/heritage/dodo-ikire" variant="outline">
                  Read the Dodo Ikire Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   SUB-COMPONENTS
====================================================== */

interface TrustPillProps {
  icon: ReactNode;
  label: string;
}

function TrustPill({ icon, label }: TrustPillProps) {
  return (
    <li className="flex items-center justify-center gap-2 rounded-full border border-[var(--color-border,#E8DDD9)] bg-white px-4 py-2.5 text-xs font-semibold text-[var(--color-primary,#74382E)]">
      <span className="text-[var(--color-accent,#ED9536)]">{icon}</span>
      {label}
    </li>
  );
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status === "coming-soon";

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-[var(--color-border,#E8DDD9)] bg-white
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[var(--color-primary,#74382E)]/20
        hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]"
    >
      {/* =====================================================
          Cover — image with gradient fallback
      ====================================================== */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Gradient base (also acts as fallback if image fails) */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${product.accent}`}
        />

        {/* Fallback icon (visible behind image; used if image missing) */}
        {product.fallbackIcon && (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center text-white/40"
          >
            {product.fallbackIcon}
          </div>
        )}

        {/* Product image */}
        <img
          src={product.image}
          alt={product.imageAlt}
          width={600}
          height={450}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105"
        />

        {/* Dark wash for chip legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t
            from-black/45 via-black/0 to-black/15
            pointer-events-none"
        />

        {/* Status chip */}
        <span
          className={`absolute left-5 top-5 rounded-full border px-3 py-1
            text-[0.65rem] font-bold uppercase tracking-[0.14em] backdrop-blur-md
            ${
              isComingSoon
                ? "border-white/40 bg-white/90 text-[var(--color-primary,#74382E)]"
                : "border-white/30 bg-[var(--color-primary,#74382E)]/90 text-white"
            }`}
        >
          {isComingSoon ? "Coming Soon" : "Available"}
        </span>

        {/* Region chip */}
        <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-[var(--color-primary,#74382E)] backdrop-blur-md">
          {product.region}
        </span>
      </div>

      {/* =====================================================
          Body
      ====================================================== */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent,#ED9536)]">
          {product.category}
        </p>

        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[var(--color-primary,#74382E)]">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-7 text-[var(--color-muted,#756A66)]">
          {product.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border,#E8DDD9)] pt-5">
          {isComingSoon ? (
            <span className="text-sm font-semibold text-[var(--color-muted,#756A66)]">
              In development
            </span>
          ) : (
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
                From
              </p>
              <p className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          )}

          {!isComingSoon && (
            <span className="text-xs text-[var(--color-muted,#756A66)]">
              {product.sizes.join(" · ")}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {isComingSoon ? (
            <Button variant="outline" to="/contact" className="flex-1">
              Notify Me
            </Button>
          ) : (
            <>
              <Button to={product.slug} variant="primary" className="flex-1">
                <FiShoppingBag aria-hidden="true" className="mr-2" size={15} />
                View Product
              </Button>
              <Button
                variant="outline"
                to={`${product.slug}#story`}
                aria-label={`Read the story behind ${product.name}`}
                className="group/btn"
              >
                Story
                <FiArrowUpRight
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  size={14}
                />
              </Button>
            </>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0
          bg-gradient-to-r
          from-[var(--color-accent,#ED9536)]
          to-[var(--color-primary,#74382E)]
          transition-transform duration-500
          group-hover:scale-x-100"
      />
    </article>
  );
}