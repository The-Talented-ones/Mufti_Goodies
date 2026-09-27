// src/components/cart/CartSummary.tsx

import { useCart } from "../../context/CartContext";

const DELIVERY_THRESHOLD = 20000; // free delivery above ₦20,000
const DELIVERY_FEE = 1500;

export default function CartSummary() {
  const { subtotal } = useCart();

  const qualifiesForFreeDelivery = subtotal >= DELIVERY_THRESHOLD;
  const deliveryFee = qualifiesForFreeDelivery ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  return (
    <div className="space-y-4 rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6">
      <h2 className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
        Order summary
      </h2>

      <dl className="space-y-3 text-sm">
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

        {!qualifiesForFreeDelivery && subtotal > 0 && (
          <p className="rounded-xl bg-[var(--color-soft,#F5EEEB)] px-3 py-2 text-xs text-[var(--color-muted,#756A66)]">
            Add ₦{(DELIVERY_THRESHOLD - subtotal).toLocaleString()} more for
            free delivery.
          </p>
        )}

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