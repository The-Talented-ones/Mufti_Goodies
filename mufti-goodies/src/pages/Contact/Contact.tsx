// src/pages/Contact.tsx

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";

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
      "@type": "ContactPage",
      "@id": "https://muftigoodies.com/contact/#webpage",
      url: "https://muftigoodies.com/contact/",
      name: "Contact — Mufti Goodies",
      description:
        "Get in touch with Mufti Goodies — WhatsApp, phone, email and social channels. Based in Ikire, Osun State, Nigeria.",
      isPartOf: { "@id": "https://muftigoodies.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://muftigoodies.com/#organization",
      name: "Mufti Goodies",
      url: "https://muftigoodies.com/",
      logo: "https://muftigoodies.com/images/logo.png",
      email: "hello@muftigoodies.com",
      telephone: "+234-XXX-XXX-XXXX",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ikire",
        addressRegion: "Osun State",
        addressCountry: "NG",
      },
      sameAs: [
        "https://instagram.com/mufti.goodies",
        "https://tiktok.com/@mufti.goodies",
        "https://facebook.com/mufti.goodies",
      ],
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
          name: "Contact",
          item: "https://muftigoodies.com/contact/",
        },
      ],
    },
  ],
};

/* =====================================================
   CONTACT CHANNELS
====================================================== */

const channels = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "hello@muftigoodies.com",
    href: "mailto:hello@muftigoodies.com",
    note: "Best for partnerships & general enquiries",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    href: "tel:+234XXXXXXXXXX",
    note: "Mon–Fri, 9am–6pm WAT",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/234XXXXXXXXXX",
    note: "Fastest way to reach us",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Osogbo, Osun State",
    href: undefined,
    note: "Nigeria — pickup available on request",
  },
];

/* =====================================================
   SOCIALS
====================================================== */

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/mufti.goodies",
    icon: <FiInstagram size={18} />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@mufti.goodies",
    icon: <FaTiktok size={16} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/mufti.goodies",
    icon: <FiFacebook size={18} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/234XXXXXXXXXX",
    icon: <FaWhatsapp size={18} />,
  },
];

/* =====================================================
   INQUIRY TYPES
====================================================== */

const inquiryTypes = [
  "General enquiry",
  "Order & delivery",
  "Bulk / wholesale",
  "Partnership",
  "Feedback",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

/* =====================================================
   PAGE
====================================================== */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: inquiryTypes[0] as InquiryType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  /* Inject JSON-LD once */
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  /* Update document title */
  useEffect(() => {
    document.title = "Contact — Mufti Goodies";
  }, []);

  const handleChange =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  // Your WhatsApp number in international format WITHOUT "+" or spaces.
  // Example: for +234 801 234 5678 → "2348012345678"
  const WHATSAPP_NUMBER = "234XXXXXXXXXX";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Name and message are the essentials for a WhatsApp chat
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }

    // Build a nicely formatted WhatsApp message
    const lines = [`Hello Mufti Goodies 👋`, ``, `*Name:* ${form.name}`];

    if (form.email.trim()) {
      lines.push(`*Email:* ${form.email}`);
    }

    if (form.phone.trim()) {
      lines.push(`*Phone:* ${form.phone}`);
    }

    lines.push(`*Inquiry:* ${form.inquiry}`);
    lines.push(``);
    lines.push(`*Message:*`);
    lines.push(form.message);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Open in a new tab (or the WhatsApp app on mobile)
    window.open(url, "_blank", "noopener,noreferrer");

    // Reset form + show confirmation
    setForm({
      name: "",
      email: "",
      phone: "",
      inquiry: inquiryTypes[0],
      message: "",
    });
    setSubmitted(true);
  };

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
                Get in Touch
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-[var(--color-accent,#ED9536)]"
              />
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-[var(--color-primary,#74382E)] sm:text-5xl lg:text-6xl">
              Let's talk
              <span className="block italic text-[var(--color-accent,#ED9536)]">
                snacks &amp; stories.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted,#756A66)]">
              Whether you want to place a bulk order, partner with us, or just
              share feedback — we'd love to hear from you. Reach out on any
              channel below.
            </p>
          </div>
        </Container>
      </header>

      {/* =====================================================
          CHANNELS GRID
      ====================================================== */}
      <section
        aria-labelledby="channels-heading"
        className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <h2 id="channels-heading" className="sr-only">
          Ways to reach us
        </h2>

        <ul role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((ch) => {
            const Wrapper = ch.href ? "a" : "div";
            const wrapperProps = ch.href
              ? {
                  href: ch.href,
                  target: ch.href.startsWith("http") ? "_blank" : undefined,
                  rel: ch.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {};

            return (
              <li key={ch.label}>
                <Wrapper
                  {...wrapperProps}
                  className="group flex h-full flex-col rounded-2xl
                    border border-[var(--color-border,#E8DDD9)] bg-white p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--color-primary,#74382E)]/20
                    hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.12))]"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-full
                      bg-[var(--color-soft,#F5EEEB)]
                      text-[var(--color-accent,#ED9536)]"
                  >
                    {ch.icon}
                  </span>

                  <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted,#756A66)]">
                    {ch.label}
                  </p>

                  <p className="mt-2 font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                    {ch.value}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[var(--color-muted,#756A66)]">
                    {ch.note}
                  </p>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </section>

      {/* =====================================================
          FORM + INFO
      ====================================================== */}
      <section
        aria-labelledby="form-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* ============================================
                LEFT — Form
            ============================================ */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                Send a Message
              </p>

              <h2
                id="form-heading"
                className="mt-3 font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl"
              >
                Tell us what you need.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted,#756A66)]">
                Fill in the form below and we'll get back to you as soon as we
                can. For urgent orders, WhatsApp is fastest.
              </p>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-8 rounded-2xl border border-[var(--color-accent,#ED9536)]/30
                    bg-white p-8 text-center"
                >
                  <span
                    aria-hidden="true"
                    className="mx-auto grid h-14 w-14 place-items-center rounded-full
                      bg-[var(--color-accent,#ED9536)]/15
                      text-[var(--color-accent,#ED9536)]"
                  >
                    <FiCheckCircle size={26} />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[var(--color-primary,#74382E)]">
                    Message sent.
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted,#756A66)]">
                    Thanks for reaching out. We'll be in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-[var(--color-primary,#74382E)]
                      underline decoration-[var(--color-accent,#ED9536)]
                      decoration-2 underline-offset-4
                      hover:opacity-80"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                  className="mt-8 space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="contact-name"
                      label="Full name"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Ada Okafor"
                    />
                    <Field
                      id="contact-email"
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone + Inquiry */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="contact-phone"
                      label="Phone (optional)"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      placeholder="+234..."
                    />

                    <div>
                      <label
                        htmlFor="contact-inquiry"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
                      >
                        Inquiry type
                      </label>
                      <select
                        id="contact-inquiry"
                        value={form.inquiry}
                        onChange={handleChange("inquiry")}
                        className="mt-2 w-full rounded-xl border border-[var(--color-border,#E8DDD9)]
                          bg-white px-4 py-3 text-sm
                          text-[var(--color-text,#2E2522)]
                          focus:border-[var(--color-accent,#ED9536)]
                          focus:outline-none focus:ring-2
                          focus:ring-[var(--color-accent,#ED9536)]/30
                          transition-all duration-300"
                      >
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
                    >
                      Message{" "}
                      <span className="text-[var(--color-accent,#ED9536)]">
                        *
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="How can we help?"
                      className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border,#E8DDD9)]
                        bg-white px-4 py-3 text-sm leading-7
                        text-[var(--color-text,#2E2522)]
                        placeholder:text-[var(--color-muted,#756A66)]/60
                        focus:border-[var(--color-accent,#ED9536)]
                        focus:outline-none focus:ring-2
                        focus:ring-[var(--color-accent,#ED9536)]/30
                        transition-all duration-300"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs text-red-600">
                      {error}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2
                        rounded-full bg-[var(--color-primary,#74382E)]
                        px-7 py-3.5 text-sm font-semibold text-white
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-[var(--color-primary-dark,#54271F)]
                        hover:shadow-lg
                        focus:outline-none focus-visible:ring-2
                        focus-visible:ring-[var(--color-accent,#ED9536)]/60"
                    >
                      Send message
                      <FiSend size={15} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ============================================
                RIGHT — Info sidebar
            ============================================ */}
            <aside className="space-y-6">
              {/* Hours */}
              <div className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-7">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full
                      bg-[var(--color-soft,#F5EEEB)]
                      text-[var(--color-accent,#ED9536)]"
                  >
                    <FiClock size={18} />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                    Response times
                  </h3>
                </div>

                <ul role="list" className="mt-5 space-y-3 text-sm">
                  <li className="flex justify-between border-b border-[var(--color-border,#E8DDD9)] pb-3">
                    <span className="text-[var(--color-muted,#756A66)]">
                      WhatsApp
                    </span>
                    <span className="font-semibold text-[var(--color-primary,#74382E)]">
                      Under 1 hour
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--color-border,#E8DDD9)] pb-3">
                    <span className="text-[var(--color-muted,#756A66)]">
                      Email
                    </span>
                    <span className="font-semibold text-[var(--color-primary,#74382E)]">
                      Within 24 hours
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-muted,#756A66)]">
                      Bulk orders
                    </span>
                    <span className="font-semibold text-[var(--color-primary,#74382E)]">
                      Within 48 hours
                    </span>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-7">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full
                      bg-[var(--color-soft,#F5EEEB)]
                      text-[var(--color-accent,#ED9536)]"
                  >
                    <FiMessageCircle size={18} />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                    Follow along
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                  We share behind-the-scenes moments, product drops and stories
                  from the Mufti Goodies kitchen.
                </p>

                <ul role="list" className="mt-5 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full
                          border border-[var(--color-border,#E8DDD9)] bg-white
                          text-[var(--color-primary,#74382E)]
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:border-[var(--color-accent,#ED9536)]/40
                          hover:bg-[var(--color-accent,#ED9536)]
                          hover:text-white"
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bulk callout */}
              <div className="rounded-3xl bg-[var(--color-primary,#74382E)] p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                  Bulk & Corporate
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">
                  Ordering for an event or office?
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  We handle bulk orders, event packs and corporate gifting. Tell
                  us what you need and we'll prepare a custom quote.
                </p>

                <div className="mt-6">
                  <Button to="/partners" variant="secondary" className="w-full">
                    Partner With Us
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* =====================================================
          MAP / LOCATION
      ====================================================== */}
      <section
        aria-labelledby="location-heading"
        className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
  eyebrow="Find Us"
  title="Rooted in Osogbo, Osun State."
  description="We're based in Osogbo, the capital of Osun State — close to Ikire, the town that gave Dodo Ikire its name. Pickup is available on request for local orders."
/>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Osogbo, Osun State",
              body: "Our home base. Pickup available on request.",
            },
            {
              title: "Nationwide delivery",
              body: "We deliver across Nigeria via trusted courier partners.",
            },
            {
              title: "Local pickup",
              body: "Pre-arrange a pickup slot via WhatsApp to skip delivery.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="contact-cta-heading"
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
                id="contact-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl"
              >
                Skip the form. Shop in seconds.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
                Browse our full range and order Dodocious Dodo directly. We'll
                handle the rest.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/shop" variant="primary">
                  Shop Snacks
                </Button>
                <Button to="/delivery" variant="outline">
                  Delivery Info
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
   FIELD COMPONENT
====================================================== */

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  placeholder?: string;
}

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-accent,#ED9536)]">*</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[var(--color-border,#E8DDD9)]
          bg-white px-4 py-3 text-sm
          text-[var(--color-text,#2E2522)]
          placeholder:text-[var(--color-muted,#756A66)]/60
          focus:border-[var(--color-accent,#ED9536)]
          focus:outline-none focus:ring-2
          focus:ring-[var(--color-accent,#ED9536)]/30
          transition-all duration-300"
      />
    </div>
  );
}
