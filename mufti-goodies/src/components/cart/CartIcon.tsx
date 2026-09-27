// src/components/cart/CartIcon.tsx

import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className = "" }: CartIconProps) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart (${itemCount} item${itemCount === 1 ? "" : "s"})`}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full
        border border-[var(--color-border,#E8DDD9)] bg-white
        text-[var(--color-primary,#74382E)]
        transition-all duration-300
        hover:border-[var(--color-primary,#74382E)]/40
        hover:bg-[var(--color-soft,#F5EEEB)] ${className}`}
    >
      <FiShoppingBag size={17} />

      {itemCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center
            rounded-full bg-[var(--color-accent,#ED9536)] px-1
            text-[0.65rem] font-bold text-white shadow-sm"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}