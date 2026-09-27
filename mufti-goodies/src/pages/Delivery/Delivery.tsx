// src/pages/Delivery.tsx

import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiTruck,
  FiMapPin,
  FiClock,
  FiPackage,
  FiCheckCircle,
  FiArrowUpRight,
  FiPhone,
  FiShoppingBag,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";

/* =====================================================
   STRUCTURED DATA
====================================================== */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://muftigoodies.com/delivery/#webpage",
      url: "https://muftigoodies.com/delivery/",
      name: "Delivery — Mufti Goodies",
      description:
        "How Mufti Goodies delivers Nigerian snacks across Osun State and Nigeria. Delivery areas, fees, timelines, pickup and bulk order options.",
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
          name: "Delivery",
          item: "https://muftigoodies.com/delivery/",
        },
      ],
    },
  ],
};

/* =====================================================
   DATA
====================================================== */

const steps = [
  {
    number: "01",
    icon: <FiShoppingBag size={22} />,
    title: "Choose your snack",
    description:
      "Browse our shop and pick what you'd like — Dodocious Dodo is available now.",
  },
  {
    number: "02",
    icon: <FiPackage size={22} />,
    title: "Place your order",
    description:
      "Complete checkout on the site or send us a WhatsApp message to confirm your order.",
  },
  {
    number: "03",
    icon: <FiCheckCircle size={22} />,
    title: "We prepare & package",
    description:
      "We prepare your order with care and package it for freshness and safe transport.",
  },
  {
    number: "04",
    icon: <FiTruck size={22} />,
    title: "We dispatch",
    description:
      "Your order is handed to our delivery partner and sent to your address or pickup point.",
  },
  {
    number: "05",
    icon: <FiMapPin size={22} />,
    title: "You enjoy",
    description:
      "Receive your order, share the moment — and tag us if you'd like. We love seeing it.",
  },
];

const deliveryZones = [
  {
    zone: "Osogbo & Environs",
    time: "Same day – 24 hours",
    fee: "From ₦1,000",
    note: "Same-day delivery for orders placed before 12pm.",
  },
  {
    zone: "Osun State (other towns)",
    time: "1 – 2 business days",
    fee: "From ₦2,000",
    note: "Covers Ikire, Ile-Ife, Ilesa, Ede and surrounding towns.",
  },
  {
    zone: "Lagos & Abuja",
    time: "2 – 4 business days",
    fee: "From ₦3,500",
    note: "Via trusted courier partners with tracking.",
  },
  {
    zone: "Other Nigerian States",
    time: "3 – 6 business days",
    fee: "From ₦4,000",
    note: "Nationwide delivery via courier. Quote confirmed at checkout.",
  },
];

const options = [
  {
    icon: <FiTruck size={24} />,
    title: "Standard delivery",
    description:
      "Doorstep delivery to your address via our courier partners. Tracking provided where available.",
  },
  {
    icon: <FiMapPin size={24} />,
    title: "Local pickup",
    description:
      "Pre-arrange a pickup slot in Osogbo to skip delivery fees entirely. Best for local orders.",
  },
  {
    icon: <FiPackage size={24} />,
    title: "Bulk & corporate",
    description:
      "Event packs, office orders and gifting boxes. Custom quotes available on request.",
  },
];

/* =====================================================
   PAGE
====================================================== */

export default function Delivery() {
  useEffect(() => {
    document.title = "Delivery — Mufti Goodies";

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
                Delivery
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl lg:text-6xl">
              From our kitchen
              <span className="block italic text-[var(--color-accent,#ED9536)]">
                to your door.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted,#756A66)]">
              We deliver across Osun State and Nigeria through trusted
              courier partners — with pickup available in Osogbo for
              local orders.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/shop" variant="primary">
                Shop Snacks
              </Button>
              <a
                href="https://wa.me/234XXXXXXXXXX?text=Hi%20Mufti%20Goodies%2C%20I%27d%20like%20to%20ask%20about%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full
                  border border-[var(--color-primary,#74382E)]
                  px-6 py-3 text-sm font-semibold
                  text-[var(--color-primary,#74382E)]
                  transition-all duration-300
                  hover:bg-[var(--color-primary,#74382E)] hover:text-white"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section
        aria-labelledby="how-it-works-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="How It Works"
            title="Five simple steps."
            description="From the moment you place your order to the moment it reaches your door, everything is designed to be simple, tracked and reliable."
          />
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.number}>
              <article
                className="group relative flex h-full flex-col rounded-2xl
                  border border-[var(--color-border,#E8DDD9)] bg-white p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-primary,#74382E)]/20
                  hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.12))]"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-serif text-3xl font-bold
                    text-[var(--color-accent,#ED9536)]/30"
                >
                  {step.number}
                </span>

                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-full
                    bg-[var(--color-soft,#F5EEEB)]
                    text-[var(--color-accent,#ED9536)]"
                >
                  {step.icon}
                </span>

                <h3 className="mt-5 font-serif text-lg font-semibold leading-tight text-[var(--color-primary,#74382E)]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* =====================================================
          DELIVERY ZONES
      ====================================================== */}
      <section
        aria-labelledby="zones-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Delivery Areas"
              title="Where we deliver."
              description="Rates below are indicative. Final delivery fees are confirmed at checkout or via WhatsApp for bulk orders."
            />
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white">
            {/* Desktop table */}
            <table className="hidden w-full text-left lg:table">
              <thead>
                <tr className="border-b border-[var(--color-border,#E8DDD9)] bg-[var(--color-soft,#F5EEEB)]">
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]"
                  >
                    Zone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]"
                  >
                    Delivery time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]"
                  >
                    Fee
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryZones.map((zone) => (
                  <tr
                    key={zone.zone}
                    className="border-b border-[var(--color-border,#E8DDD9)] last:border-b-0"
                  >
                    <td className="px-6 py-5 text-sm font-semibold text-[var(--color-primary,#74382E)]">
                      {zone.zone}
                    </td>
                    <td className="px-6 py-5 text-sm text-[var(--color-muted,#756A66)]">
                      {zone.time}
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-[var(--color-primary,#74382E)]">
                      {zone.fee}
                    </td>
                    <td className="px-6 py-5 text-sm text-[var(--color-muted,#756A66)]">
                      {zone.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <ul role="list" className="divide-y divide-[var(--color-border,#E8DDD9)] lg:hidden">
              {deliveryZones.map((zone) => (
                <li key={zone.zone} className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                    {zone.zone}
                  </h3>

                  <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
                        Time
                      </dt>
                      <dd className="mt-1 text-[var(--color-primary,#74382E)]">
                        {zone.time}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
                        Fee
                      </dt>
                      <dd className="mt-1 font-semibold text-[var(--color-primary,#74382E)]">
                        {zone.fee}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                    {zone.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-xs text-[var(--color-muted,#756A66)]">
            Delivery fees may vary based on exact location and order size.
            Confirmed before dispatch.
          </p>
        </Container>
      </section>

      {/* =====================================================
          DELIVERY OPTIONS
      ====================================================== */}
      <section
        aria-labelledby="options-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Delivery Options"
            title="Choose what works for you."
            description="Whether you want doorstep delivery, a local pickup, or a custom bulk shipment — there's an option for every order."
          />
        </div>

        <ul role="list" className="mt-14 grid gap-5 lg:grid-cols-3">
          {options.map((opt) => (
            <li key={opt.title}>
              <article
                className="group flex h-full flex-col rounded-2xl
                  border border-[var(--color-border,#E8DDD9)] bg-white p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-primary,#74382E)]/20
                  hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.12))]"
              >
                <span
                  aria-hidden="true"
                  className="grid h-14 w-14 place-items-center rounded-full
                    bg-[var(--color-soft,#F5EEEB)]
                    text-[var(--color-accent,#ED9536)]"
                >
                  {opt.icon}
                </span>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-[var(--color-primary,#74382E)]">
                  {opt.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                  {opt.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section
        aria-labelledby="faq-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="FAQs"
              title="Delivery questions, answered."
              description="A few things customers ask us most often. Can't find what you need? Reach out on WhatsApp."
            />
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {[
              {
                q: "How long does delivery take?",
                a: "Same-day to 24 hours within Osogbo. 1–2 business days within Osun State. 2–4 business days for Lagos and Abuja. 3–6 business days for other Nigerian states.",
              },
              {
                q: "Do you offer local pickup?",
                a: "Yes. Pickup is available in Osogbo, Osun State. Pre-arrange a slot via WhatsApp and we'll confirm the time and location.",
              },
              {
                q: "Can I order in bulk for an event?",
                a: "Absolutely. We handle events, offices, gifting and wholesale orders. Message us on WhatsApp with your quantity and date, and we'll prepare a custom quote.",
              },
              {
                q: "How is my order packaged?",
                a: "Orders are sealed for freshness and packed to protect them during transport. Packaging is designed to keep the product intact and presentable on arrival.",
              },
              {
                q: "What if I'm not home at delivery?",
                a: "Our courier will attempt to contact you. If a re-delivery is needed, additional fees may apply. We recommend choosing a delivery window when someone can receive the order.",
              },
              {
                q: "Do you deliver outside Nigeria?",
                a: "Not yet. We currently deliver within Nigeria only. International shipping is something we're exploring — follow us for updates.",
              },
            ].map((item, i) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white px-6 py-5 transition-all duration-300 open:border-[var(--color-primary,#74382E)]/20 open:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.08))]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="font-serif text-base font-semibold text-[var(--color-primary,#74382E)] sm:text-lg">
                    {item.q}
                  </h3>
                  <FiChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-[var(--color-accent,#ED9536)]
                      transition-transform duration-300
                      group-open:rotate-90"
                    size={18}
                  />
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          BULK / WHATSAPP CALLOUT
      ====================================================== */}
      <section
        aria-labelledby="bulk-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-primary,#74382E)] text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                Bulk & Corporate
              </p>

              <h2
                id="bulk-heading"
                className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Ordering for an event, office or store?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
                We handle bulk shipments, event packs, corporate gifting
                and retail partnerships. Share your quantity and
                delivery date and we'll prepare a custom quote.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/234XXXXXXXXXX?text=Hi%20Mufti%20Goodies%2C%20I%27d%20like%20to%20make%20a%20bulk%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full
                    bg-[var(--color-accent,#ED9536)] px-6 py-3 text-sm font-semibold
                    text-[var(--color-primary,#74382E)]
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FaWhatsapp size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>

                <Button
                  to="/contact"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-[var(--color-primary,#74382E)]"
                >
                  Other enquiries
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent,#ED9536)]">
                Contact
              </h3>

              <ul role="list" className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <FiPhone
                    size={16}
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  />
                  <a
                    href="tel:+234XXXXXXXXXX"
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    +234 XXX XXX XXXX
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaWhatsapp
                    size={16}
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  />
                  <a
                    href="https://wa.me/234XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    WhatsApp us
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FiMapPin
                    size={16}
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  />
                  <span className="text-white/85">Osogbo, Osun State</span>
                </li>

                <li className="flex items-center gap-3">
                  <FiClock
                    size={16}
                    aria-hidden="true"
                    className="text-[var(--color-accent,#ED9536)]"
                  />
                  <span className="text-white/85">Mon–Fri, 9am–6pm WAT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="delivery-cta-heading"
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
                Ready to order?
              </p>

              <h2
                id="delivery-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
              >
                Pick a snack. We'll do the rest.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
                Browse the full range and order Dodocious Dodo — we'll
                handle packaging, dispatch and delivery to your door.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/shop" variant="primary">
                  Shop Snacks
                  <FiArrowUpRight size={15} className="ml-2" aria-hidden="true" />
                </Button>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-[var(--color-primary,#74382E)]
                    px-6 py-3 text-sm font-semibold
                    text-[var(--color-primary,#74382E)]
                    transition-all duration-300
                    hover:bg-[var(--color-primary,#74382E)] hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}