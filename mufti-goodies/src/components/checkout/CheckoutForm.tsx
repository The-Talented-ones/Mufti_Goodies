// src/components/checkout/CheckoutForm.tsx

import type { ChangeEvent } from "react";

export interface CheckoutFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  notes: string;
  deliveryMethod: "delivery" | "pickup";
}

interface CheckoutFormProps {
  form: CheckoutFormData;
  onChange: (
    field: keyof CheckoutFormData,
  ) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
}

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
  "Enugu", "FCT — Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara",
];

export default function CheckoutForm({ form, onChange }: CheckoutFormProps) {
  const isPickup = form.deliveryMethod === "pickup";

  return (
    <div className="space-y-8">
      {/* ============================
          Contact details
      ============================= */}
      <section
        aria-labelledby="contact-section-heading"
        className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-7"
      >
        <h2
          id="contact-section-heading"
          className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]"
        >
          1. Contact details
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field
            id="checkout-name"
            label="Full name"
            required
            value={form.name}
            onChange={onChange("name")}
            placeholder="Ada Okafor"
            autoComplete="name"
          />

          <Field
            id="checkout-phone"
            label="Phone number"
            type="tel"
            required
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="+234..."
            autoComplete="tel"
          />

          <div className="sm:col-span-2">
            <Field
              id="checkout-email"
              label="Email (optional)"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>
      </section>

      {/* ============================
          Delivery method
      ============================= */}
      <section
        aria-labelledby="delivery-section-heading"
        className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-7"
      >
        <h2
          id="delivery-section-heading"
          className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]"
        >
          2. Delivery method
        </h2>

        <div
          role="radiogroup"
          aria-label="Delivery method"
          className="mt-5 grid gap-3 sm:grid-cols-2"
        >
          {[
            {
              value: "delivery" as const,
              title: "Deliver to me",
              note: "Standard delivery nationwide",
            },
            {
              value: "pickup" as const,
              title: "Pickup in Osogbo",
              note: "Pre-arranged, no delivery fee",
            },
          ].map((option) => {
            const isActive = form.deliveryMethod === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() =>
                  onChange("deliveryMethod")({
                    target: { value: option.value },
                  } as ChangeEvent<HTMLInputElement>)
                }
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-primary,#74382E)] bg-[var(--color-soft,#F5EEEB)]"
                    : "border-[var(--color-border,#E8DDD9)] bg-white hover:border-[var(--color-primary,#74382E)]/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                    isActive
                      ? "border-[var(--color-primary,#74382E)]"
                      : "border-[var(--color-border,#E8DDD9)]"
                  }`}
                >
                  {isActive && (
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary,#74382E)]" />
                  )}
                </span>

                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
                    {option.title}
                  </p>
                  <p className="text-xs text-[var(--color-muted,#756A66)]">
                    {option.note}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================
          Address (only if delivery)
      ============================= */}
      {!isPickup && (
        <section
          aria-labelledby="address-section-heading"
          className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-7"
        >
          <h2
            id="address-section-heading"
            className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]"
          >
            3. Delivery address
          </h2>

          <div className="mt-5 space-y-4">
            <Field
              id="checkout-address"
              label="Street address"
              required
              value={form.address}
              onChange={onChange("address")}
              placeholder="12 Freedom Street, off Ring Road"
              autoComplete="street-address"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="checkout-city"
                label="City / Town"
                required
                value={form.city}
                onChange={onChange("city")}
                placeholder="Osogbo"
                autoComplete="address-level2"
              />

              <div>
                <label
                  htmlFor="checkout-state"
                  className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
                >
                  State <span className="text-[var(--color-accent,#ED9536)]">*</span>
                </label>
                <select
                  id="checkout-state"
                  required
                  value={form.state}
                  onChange={onChange("state")}
                  className="mt-2 w-full rounded-xl border border-[var(--color-border,#E8DDD9)]
                    bg-white px-4 py-3 text-sm text-[var(--color-text,#2E2522)]
                    focus:border-[var(--color-accent,#ED9536)]
                    focus:outline-none focus:ring-2
                    focus:ring-[var(--color-accent,#ED9536)]/30
                    transition-all duration-300"
                >
                  <option value="">Select state</option>
                  {NIGERIAN_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================
          Notes
      ============================= */}
      <section
        aria-labelledby="notes-section-heading"
        className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-7"
      >
        <h2
          id="notes-section-heading"
          className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]"
        >
          {isPickup ? "3. Notes for pickup" : "4. Order notes (optional)"}
        </h2>

        <div className="mt-5">
          <label
            htmlFor="checkout-notes"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
          >
            Anything we should know?
          </label>
          <textarea
            id="checkout-notes"
            rows={4}
            value={form.notes}
            onChange={onChange("notes")}
            placeholder={
              isPickup
                ? "Preferred pickup time…"
                : "Landmarks, gate codes, delivery instructions…"
            }
            className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border,#E8DDD9)]
              bg-white px-4 py-3 text-sm leading-7 text-[var(--color-text,#2E2522)]
              placeholder:text-[var(--color-muted,#756A66)]/60
              focus:border-[var(--color-accent,#ED9536)]
              focus:outline-none focus:ring-2
              focus:ring-[var(--color-accent,#ED9536)]/30
              transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
}

/* =====================================================
   FIELD
====================================================== */

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
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
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-[var(--color-border,#E8DDD9)]
          bg-white px-4 py-3 text-sm text-[var(--color-text,#2E2522)]
          placeholder:text-[var(--color-muted,#756A66)]/60
          focus:border-[var(--color-accent,#ED9536)]
          focus:outline-none focus:ring-2
          focus:ring-[var(--color-accent,#ED9536)]/30
          transition-all duration-300"
      />
    </div>
  );
}