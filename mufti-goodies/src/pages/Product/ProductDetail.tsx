// src/pages/ProductDetail.tsx

import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiPackage,
  FiShield,
  FiTruck,
  // FiShoppingBag,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import ProductGallery from "../../components/product/ProductGallery";
import SizeSelector from "../../components/product/SizeSelector";
import ProductTabs from "../../components/product/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts";
import ProductReviews from "../../components/product/ProductReviews";

import {
  getProductBySlug,
  getRelatedProducts,
  // products,
} from "../../data/products";
import AddToCartButton from "../../components/cart/AddToCartButton";

/* =====================================================
   CONSTANTS
====================================================== */

// Replace with your real WhatsApp number (digits only)
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

const TRUST_POINTS = [
  { icon: <FiShield size={16} />, label: "Quality-conscious" },
  { icon: <FiPackage size={16} />, label: "Thoughtful packaging" },
  { icon: <FiTruck size={16} />, label: "Nationwide delivery" },
];

/* =====================================================
   PAGE
====================================================== */

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const product = useMemo(() => getProductBySlug(`/shop/${slug}`), [slug]);

  // Selected size state
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.variants?.[0]?.size ?? "",
  );

  // Reset size when product changes
  useEffect(() => {
    setSelectedSize(product?.variants?.[0]?.size ?? "");
  }, [product]);

  // Update document title + scroll to top
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Mufti Goodies`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  /* 404 */
  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5 py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
            404 — Product not found
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)]">
            This product doesn't exist.
          </h1>
          <p className="mt-4 text-sm text-[var(--color-muted,#756A66)]">
            It may have been removed or the link is incorrect.
          </p>
          <div className="mt-8">
            <Button to="/shop" variant="primary">
              Back to Shop
            </Button>
          </div>
        </div>
      </main>
    );
  }

  /* Selected variant + price */
  const selectedVariant = product.variants?.find(
    (v) => v.size === selectedSize,
  );
  const displayPrice = selectedVariant?.price ?? product.price;
  const isAvailable = product.status === "available";
  const isComingSoon = product.status === "coming-soon";

  /* WhatsApp order message */
  const orderMessage = encodeURIComponent(
    `Hi Mufti Goodies 👋\n\nI'd like to order:\n\n*Product:* ${product.name}${
      selectedVariant ? `\n*Size:* ${selectedVariant.size}` : ""
    }\n*Price:* ₦${displayPrice.toLocaleString()}\n\nPlease confirm availability and delivery.`,
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${orderMessage}`;

  /* Related */
  const related = getRelatedProducts(product.id, 3);

  /* Placeholder reviews (swap for real backend) */
  const reviews = [
    {
      id: "r1",
      author: "Tolu A.",
      rating: 5 as const,
      body: "The taste took me straight back to Ikire. Packaging is beautiful and the flavour is spot on.",
      createdAt: "2025-02-12",
    },
    {
      id: "r2",
      author: "Chidi O.",
      rating: 4 as const,
      body: "Really enjoyed it. Wish the 200g pack came with more — finished it too fast!",
      createdAt: "2025-02-03",
    },
  ];

  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[var(--color-border,#E8DDD9)]"
      >
        <Container>
          <ol
            role="list"
            className="flex flex-wrap items-center gap-2 py-5 text-xs text-[var(--color-muted,#756A66)]"
          >
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-[var(--color-primary,#74382E)]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight size={12} />
            </li>
            <li>
              <Link
                to="/shop"
                className="transition-colors hover:text-[var(--color-primary,#74382E)]"
              >
                Shop
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight size={12} />
            </li>
            <li
              aria-current="page"
              className="font-semibold text-[var(--color-primary,#74382E)]"
            >
              {product.name}
            </li>
          </ol>
        </Container>
      </nav>

      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}
      <section
        aria-labelledby="product-heading"
        className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div>
            {/* Category + region chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--color-soft,#F5EEEB)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]">
                {product.category}
              </span>
              <span className="rounded-full bg-[var(--color-soft,#F5EEEB)] px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-[var(--color-muted,#756A66)]">
                {product.region}
              </span>
              {isComingSoon && (
                <span className="rounded-full bg-[var(--color-accent,#ED9536)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
                  Coming Soon
                </span>
              )}
            </div>

            <h1
              id="product-heading"
              className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-base leading-8 text-[var(--color-muted,#756A66)]">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-end gap-4">
              {isAvailable ? (
                <>
                  <span className="font-serif text-4xl font-bold text-[var(--color-primary,#74382E)]">
                    ₦{displayPrice.toLocaleString()}
                  </span>
                  {selectedVariant && (
                    <span className="pb-2 text-sm text-[var(--color-muted,#756A66)]">
                      / {selectedVariant.size}
                    </span>
                  )}
                </>
              ) : (
                <span className="font-serif text-2xl font-semibold text-[var(--color-muted,#756A66)]">
                  Price announced at launch
                </span>
              )}
            </div>

            {/* Short description */}
            <p className="mt-6 text-base leading-8 text-[var(--color-text,#2E2522)]">
              {product.shortDescription}
            </p>

            {/* Size selector */}
            {isAvailable && product.variants && product.variants.length > 0 && (
              <div className="mt-7">
                <SizeSelector
                  variants={product.variants}
                  selectedSize={selectedSize}
                  onSelect={setSelectedSize}
                />
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {isAvailable ? (
                <>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full
                      bg-[var(--color-primary,#74382E)] px-7 py-3.5 text-sm font-semibold
                      text-white transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-[var(--color-primary-dark,#54271F)]
                      hover:shadow-lg"
                  >
                    <FaWhatsapp size={16} aria-hidden="true" />
                    Order on WhatsApp
                  </a>

                  {selectedVariant && (
                    <AddToCartButton
                      product={product}
                      variant={selectedVariant}
                    />
                  )}
                </>
              ) : (
                <>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi Mufti Goodies 👋 I'd like to be notified when ${product.name} launches.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full
                      bg-[var(--color-accent,#ED9536)] px-7 py-3.5 text-sm font-semibold
                      text-white transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <FaWhatsapp size={16} aria-hidden="true" />
                    Notify me
                  </a>

                  <Button to="/shop" variant="outline">
                    Back to Shop
                  </Button>
                </>
              )}
            </div>

            {/* Trust strip */}
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-3 border-t border-[var(--color-border,#E8DDD9)] pt-6 sm:grid-cols-3"
            >
              {TRUST_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary,#74382E)]"
                >
                  <span
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  >
                    {point.icon}
                  </span>
                  {point.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          TABS (Description / Ingredients / Storage)
      ====================================================== */}
      <section
        aria-labelledby="details-heading"
        className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24"
      >
        <h2 id="details-heading" className="sr-only">
          Product details
        </h2>
        <ProductTabs product={product} />
      </section>

      {/* =====================================================
          REVIEWS
      ====================================================== */}
      <section
        aria-labelledby="reviews-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2
              id="reviews-heading"
              className="font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl"
            >
              Customer reviews
            </h2>

            <p className="mt-3 text-sm text-[var(--color-muted,#756A66)]">
              What customers are saying about {product.name}.
            </p>

            <div className="mt-8">
              <ProductReviews reviews={reviews} />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                You may also like
              </p>
              <h2
                id="related-heading"
                className="mt-3 font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl"
              >
                More from the shelf
              </h2>
            </div>

            <Button to="/shop" variant="outline" className="group shrink-0">
              All products
              <FiArrowUpRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="mt-12">
            <RelatedProducts products={related} />
          </div>
        </section>
      )}

      {/* =====================================================
          STORY LINK CALLOUT
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[var(--color-primary,#74382E)] text-white">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                The story behind the snack
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Where Dodo Ikire comes from — and why it matters.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-white/70">
                Every snack we make is rooted in a story. Read how Dodo Ikire
                became one of Nigeria's most distinctive foods — and how{" "}
                {product.name} carries it forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button to="/heritage/dodo-ikire" variant="secondary">
                Read the Dodo Ikire Story
                <FiArrowUpRight size={15} className="ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
