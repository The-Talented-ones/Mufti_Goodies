// src/pages/Checkout.tsx

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiShoppingBag,
  FiArrowUpRight,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import type { CheckoutFormData } from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import { useCart } from "../../context/CartContext";

/* =====================================================
   CONSTANTS
====================================================== */

// Replace with your real WhatsApp number (digits only)
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

const FREE_DELIVERY_THRESHOLD = 20000;
const DELIVERY_FEE = 1500;

/* =====================================================
   PAGE
====================================================== */

export default function Checkout() {
  const { items, subtotal, clear } = useCart();

  const [form, setForm] = useState<CheckoutFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    notes: "",
    deliveryMethod: "delivery",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  /* Update document title + scroll to top on mount */
  useEffect(() => {
    document.title = "Checkout — Mufti Goodies";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* Change handler */
  const handleChange =
    (field: keyof CheckoutFormData) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  /* Totals */
  const qualifiesForFree = subtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee =
    form.deliveryMethod === "pickup"
      ? 0
      : qualifiesForFree
        ? 0
        : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  /* ==========================
     Submit → WhatsApp
  =========================== */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);

    /* Validation */
    const errs: string[] = [];
    if (!form.name.trim()) errs.push("Please enter your full name.");
    if (!form.phone.trim()) errs.push("Please enter your phone number.");

    if (form.deliveryMethod === "delivery") {
      if (!form.address.trim()) errs.push("Please enter your street address.");
      if (!form.city.trim()) errs.push("Please enter your city or town.");
      if (!form.state.trim()) errs.push("Please select your state.");
    }

    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    /* Build WhatsApp message */
    const lines: string[] = [
      `Hello Mufti Goodies 👋`,
      ``,
      `I'd like to place an order:`,
      ``,
      `*── ORDER ──*`,
    ];

    items.forEach((item) => {
      lines.push(
        `• ${item.name} (${item.size}) × ${item.quantity} — ₦${(
          item.price * item.quantity
        ).toLocaleString()}`,
      );
    });

    lines.push(``);
    lines.push(`*Subtotal:* ₦${subtotal.toLocaleString()}`);
    lines.push(
      `*Delivery:* ${
        deliveryFee === 0 ? "Free / Pickup" : `₦${deliveryFee.toLocaleString()}`
      }`,
    );
    lines.push(`*Total:* ₦${total.toLocaleString()}`);
    lines.push(``);
    lines.push(`*── DELIVERY DETAILS ──*`);
    lines.push(`*Method:* ${form.deliveryMethod === "pickup" ? "Pickup (Osogbo)" : "Home delivery"}`);
    lines.push(`*Name:* ${form.name}`);
    lines.push(`*Phone:* ${form.phone}`);

    if (form.email.trim()) lines.push(`*Email:* ${form.email}`);

    if (form.deliveryMethod === "delivery") {
      lines.push(`*Address:* ${form.address}`);
      lines.push(`*City:* ${form.city}`);
      lines.push(`*State:* ${form.state}`);
    }

    if (form.notes.trim()) {
      lines.push(``);
      lines.push(`*Notes:*`);
      lines.push(form.notes);
    }

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    /* Open WhatsApp */
    window.open(url, "_blank", "noopener,noreferrer");

    /* Clear the cart + show success */
    clear();
    setSubmitted(true);
  };

  /* =====================================================
     EMPTY CART STATE
  ====================================================== */
  if (items.length === 0 && !submitted) {
    return (
      <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-md text-center">
            <span
              aria-hidden="true"
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-accent,#ED9536)]"
            >
              <FiShoppingBag size={26} />
            </span>
            <h1 className="mt-6 font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl">
              Your cart is empty.
            </h1>
            <p className="mt-4 text-sm text-[var(--color-muted,#756A66)]">
              Add something delicious before checking out.
            </p>
            <div className="mt-8">
              <Button to="/shop" variant="primary">
                Browse the Shop
              </Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  /* =====================================================
     SUCCESS STATE
  ====================================================== */
  if (submitted) {
    return (
      <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent,#ED9536)]/15 text-[var(--color-accent,#ED9536)]"
            >
              <FiCheckCircle size={30} />
            </span>

            <h1 className="mt-6 font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl">
              WhatsApp opened — finish sending.
            </h1>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted,#756A66)]">
              We've pre-filled your order message and opened WhatsApp. Tap{" "}
              <strong className="font-semibold text-[var(--color-primary,#74382E)]">
                Send
              </strong>{" "}
              in WhatsApp and we'll confirm your order right away.
            </p>

            <p className="mt-3 text-xs text-[var(--color-muted,#756A66)]">
              Didn't see WhatsApp?{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-primary,#74382E)] underline decoration-[var(--color-accent,#ED9536)] decoration-2 underline-offset-4"
              >
                Open it manually
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to="/shop" variant="primary">
                Continue shopping
              </Button>
              <Button to="/" variant="outline">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  /* =====================================================
     MAIN CHECKOUT
  ====================================================== */
  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      {/* Breadcrumb */}
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
                to="/cart"
                className="transition-colors hover:text-[var(--color-primary,#74382E)]"
              >
                Cart
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight size={12} />
            </li>
            <li
              aria-current="page"
              className="font-semibold text-[var(--color-primary,#74382E)]"
            >
              Checkout
            </li>
          </ol>
        </Container>
      </nav>

      {/* Header */}
      <header className="border-b border-[var(--color-border,#E8DDD9)]">
        <Container className="py-10 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
            Checkout
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl">
            Almost there.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted,#756A66)]">
            Confirm your details below. When you tap{" "}
            <strong className="font-semibold text-[var(--color-primary,#74382E)]">
              Place order
            </strong>
            , we'll open WhatsApp with your order pre-filled — you just hit
            send and we'll confirm right away.
          </p>
        </Container>
      </header>

      {/* Body */}
      <Container className="py-12 lg:py-16">
        <form
          onSubmit={handleSubmit}
          aria-label="Checkout form"
          noValidate
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14"
        >
          {/* Left — form */}
          <div>
            <CheckoutForm form={form} onChange={handleChange} />

            {/* Errors */}
            {errors.length > 0 && (
              <div
                role="alert"
                className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5"
              >
                <p className="text-sm font-semibold text-red-700">
                  Please fix the following:
                </p>
                <ul role="list" className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-600">
                  {errors.map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full
                  bg-[#25D366] px-7 py-4 text-sm font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:brightness-95 hover:shadow-lg
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#25D366]/60"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                Place order via WhatsApp
              </button>

              <p className="mt-3 text-center text-xs text-[var(--color-muted,#756A66)]">
                By placing your order you agree to be contacted on WhatsApp
                to confirm delivery details.
              </p>
            </div>
          </div>

          {/* Right — summary */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <OrderSummary />

            <Link
              to="/cart"
              className="inline-flex items-center gap-2 text-sm font-semibold
                text-[var(--color-primary,#74382E)]
                hover:text-[var(--color-accent,#ED9536)]"
            >
              Edit cart
              <FiArrowUpRight size={14} aria-hidden="true" />
            </Link>

            <div className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-5 text-xs leading-6 text-[var(--color-muted,#756A66)]">
              <p className="font-semibold text-[var(--color-primary,#74382E)]">
                How ordering works
              </p>
              <ol className="mt-2 list-decimal space-y-1 pl-4">
                <li>Fill in your delivery details</li>
                <li>We open WhatsApp with your order pre-filled</li>
                <li>You hit send — we confirm and dispatch</li>
              </ol>
            </div>
          </aside>
        </form>
      </Container>
    </main>
  );
}