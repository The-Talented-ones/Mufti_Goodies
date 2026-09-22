// Footer.tsx
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiArrowUp,
  // FiSend,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaTiktok, FaWhatsapp  } from "react-icons/fa6";

import Container from "../common/Container";
import Mufti_logo from "../../assets/Mufti-Goodies-Logo.png";

/* =====================================================
   NAV DATA
====================================================== */

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Shop", to: "/shop" },
  { label: "Heritage Vault", to: "/heritage" },
  { label: "Journal", to: "/journal" },
  { label: "Our Impact", to: "/impact" },
];

const customerLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Delivery", to: "/delivery" },
  { label: "FAQs", to: "/faqs" },
  { label: "Returns & Refunds", to: "/returns" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

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
  {
    label: "Email",
    href: "mailto:hello@muftigoodies.com",
    icon: <FiMail size={18} />,
  },
];

/* =====================================================
   FOOTER
====================================================== */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your newsletter provider
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--color-primary,#74382E)] text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80
          rounded-full bg-[var(--color-accent,#ED9536)]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80
          rounded-full bg-white/5 blur-3xl"
      />

      {/* Dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]
          bg-[radial-gradient(white_1px,transparent_1px)]
          [background-size:30px_30px]"
      />

      <Container className="relative">
        

        {/* =====================================================
            MIDDLE — Link columns
        ====================================================== */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Mufti Goodies — Home"
            >
              <img
                src={Mufti_logo}
                alt="Mufti Goodies logo"
                className="h-30 w-auto object-cover"
              />
            </Link>

            <p className="mt-5 max-w-xs font-serif text-lg italic text-white/80">
              Modernizing Indigenous Foods.
            </p>

            <p className="mt-3 max-w-xs text-sm leading-7 text-white/55">
              Indigenous Nigerian snacks, thoughtfully prepared and
              presented for the modern world.
            </p>

            {/* Contact details */}
            <address className="mt-6 space-y-2 text-sm not-italic text-white/60">
              <div className="flex items-center gap-2">
                <FiMapPin
                  size={15}
                  aria-hidden="true"
                  className="text-[var(--color-accent,#ED9536)]"
                />
                <span>Osogbo, Osun State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone
                  size={15}
                  aria-hidden="true"
                  className="text-[var(--color-accent,#ED9536)]"
                />
                <a
                  href="tel:+234XXXXXXXXXX"
                  className="transition-colors hover:text-white"
                >
                  +234 XXX XXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail
                  size={15}
                  aria-hidden="true"
                  className="text-[var(--color-accent,#ED9536)]"
                />
                <a
                  href="mailto:hello@muftigoodies.com"
                  className="transition-colors hover:text-white"
                >
                  hello@muftigoodies.com
                </a>
              </div>
            </address>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore" links={exploreLinks} className="lg:col-span-2" />

          {/* Customer Care */}
          <FooterColumn
            title="Customer Care"
            links={customerLinks}
            className="lg:col-span-3"
          />

          {/* Social */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Follow Us
            </h3>

            <ul role="list" className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full
                      border border-white/10 bg-white/5
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-[var(--color-accent,#ED9536)]/40
                      hover:bg-[var(--color-accent,#ED9536)]
                      hover:text-[var(--color-primary,#74382E)]"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-6 text-white/45">
              Tag us <span className="text-white/70">@mufti.goodies</span> — we
              love seeing how you enjoy our snacks.
            </p>
          </div>
        </div>
      </Container>

      {/* =====================================================
          BOTTOM — Legal bar
      ====================================================== */}
      <div className="relative border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Mufti Goodies. All rights reserved.
            </p>

            <p className="flex items-center gap-2">
              Made in Nigeria
              <span aria-hidden="true">🇳🇬</span>
            </p>

            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="group inline-flex items-center gap-1.5 rounded-full
                border border-white/10 bg-white/5 px-3 py-1.5
                transition-all duration-300
                hover:border-[var(--color-accent,#ED9536)]/40
                hover:bg-white/10"
            >
              <FiArrowUp
                size={13}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Back to top
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* =====================================================
   SUB-COMPONENTS
====================================================== */

interface FooterColumnProps {
  title: string;
  links: { label: string; to: string }[];
  className?: string;
}

function FooterColumn({ title, links, className = "" }: FooterColumnProps) {
  return (
    <nav aria-label={title} className={className}>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
        {title}
      </h3>

      <ul role="list" className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-white/65
                transition-colors duration-300 hover:text-white"
            >
              <span
                aria-hidden="true"
                className="h-px w-0 bg-[var(--color-accent,#ED9536)]
                  transition-all duration-300
                  group-hover:w-4"
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}