// src/components/checkout/OrderSummary.tsx

import { useCart } from "../../context/CartContext";

const FREE_DELIVERY_THRESHOLD = 20000;
const DELIVERY_FEE = 1500;

export default function OrderSummary() {
  const { items, subtotal } = useCart();

  const qualifiesForFree = subtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = qualifiesForFree ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  return (
    <div className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-7">
      <h2 className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
        Order summary
      </h2>

      {/* Line items */}
      <ul
        role="list"
        className="mt-5 space-y-4 border-b border-[var(--color-border,#E8DDD9)] pb-5"
      >
        {items.map((item) => (
          <li key={item.id} className="flex gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-[var(--color-soft,#F5EEEB)]">
              <img
                src={item.image}
                alt={item.imageAlt}
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--color-primary,#74382E)]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted,#756A66)]">
                    {item.size} · Qty {item.quantity}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-[var(--color-primary,#74382E)]">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-[var(--color-muted,#756A66)]">Subtotal</dt>
          <dd className="font-semibold text-[var(--color-primary,#74382E)]">
            ₦{subtotal.toLocaleString()}
          </dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-[var(--color-muted,#756A66)]">Delivery</dt>
          <dd className="font-semibold text-[var(--color-primary,#74382E)]">
            {deliveryFee === 0 ? "Free" : `₦${deliveryFee.toLocaleString()}`}
          </dd>
        </div>

        <div className="border-t border-[var(--color-border,#E8DDD9)] pt-3">
          <div className="flex justify-between">
            <dt className="font-serif text-base font-semibold text-[var(--color-primary,#74382E)]">
              Total
            </dt>
            <dd className="font-serif text-xl font-bold text-[var(--color-primary,#74382E)]">
              ₦{total.toLocaleString()}
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}