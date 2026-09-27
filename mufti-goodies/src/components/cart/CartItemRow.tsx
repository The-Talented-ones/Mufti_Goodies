// src/components/cart/CartItemRow.tsx

import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

import type { CartItem } from "../../types/cart";

interface CartItemRowProps {
  item: CartItem;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onNavigate?: () => void;
}

export default function CartItemRow({
  item,
  onIncrement,
  onDecrement,
  onRemove,
  onNavigate,
}: CartItemRowProps) {
  const lineTotal = item.price * item.quantity;

  return (
    <article className="flex gap-4 py-5">
      {/* Image */}
      <Link
        to={item.slug}
        onClick={onNavigate}
        className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-[var(--color-soft,#F5EEEB)]"
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          width={160}
          height={160}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Link>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent,#ED9536)]">
              {item.category}
            </p>

            <Link
              to={item.slug}
              onClick={onNavigate}
              className="mt-1 block truncate font-serif text-base font-semibold text-[var(--color-primary,#74382E)] hover:text-[var(--color-accent,#ED9536)]"
            >
              {item.name}
            </Link>

            <p className="mt-0.5 text-xs text-[var(--color-muted,#756A66)]">
              {item.size}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="shrink-0 rounded-full p-2 text-[var(--color-muted,#756A66)]
              transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <FiTrash2 size={14} />
          </button>
        </div>

        {/* Quantity + price */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="inline-flex items-center rounded-full border border-[var(--color-border,#E8DDD9)]">
            <button
              type="button"
              onClick={() => onDecrement(item.id)}
              aria-label={`Decrease quantity of ${item.name}`}
              className="grid h-8 w-8 place-items-center rounded-full text-[var(--color-primary,#74382E)] transition-colors hover:bg-[var(--color-soft,#F5EEEB)]"
            >
              <FiMinus size={13} />
            </button>

            <span
              className="min-w-[2rem] text-center text-sm font-semibold text-[var(--color-primary,#74382E)]"
              aria-live="polite"
            >
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrement(item.id)}
              aria-label={`Increase quantity of ${item.name}`}
              className="grid h-8 w-8 place-items-center rounded-full text-[var(--color-primary,#74382E)] transition-colors hover:bg-[var(--color-soft,#F5EEEB)]"
            >
              <FiPlus size={13} />
            </button>
          </div>

          <p className="font-serif text-base font-semibold text-[var(--color-primary,#74382E)]">
            ₦{lineTotal.toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  );
}