// src/components/cart/CartDrawer.tsx

import { Link } from "react-router-dom";
import { FiX, FiShoppingBag, FiArrowRight } from "react-icons/fi";

import CartItemRow from "./CartItemRow";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    clear,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col
          bg-white shadow-2xl transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[var(--color-border,#E8DDD9)] px-6 py-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-primary,#74382E)]"
            >
              <FiShoppingBag size={16} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                Your cart
              </h2>
              <p className="text-xs text-[var(--color-muted,#756A66)]">
                {itemCount} item{itemCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 text-[var(--color-muted,#756A66)]
              transition-colors hover:bg-[var(--color-soft,#F5EEEB)] hover:text-[var(--color-primary,#74382E)]"
          >
            <FiX size={18} />
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-20 text-center">
              <span
                aria-hidden="true"
                className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-accent,#ED9536)]"
              >
                <FiShoppingBag size={26} />
              </span>
              <p className="mt-5 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                Your cart is empty.
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted,#756A66)]">
                Add something delicious to get started.
              </p>
              <div className="mt-6">
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary,#74382E)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Browse the Shop
                  <FiArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : (
            <ul role="list" className="divide-y divide-[var(--color-border,#E8DDD9)]">
              {items.map((item) => (
                <li key={item.id}>
                  <CartItemRow
                    item={item}
                    onIncrement={increment}
                    onDecrement={decrement}
                    onRemove={removeItem}
                    onNavigate={closeCart}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t border-[var(--color-border,#E8DDD9)] px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-muted,#756A66)]">Subtotal</span>
              <span className="font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>

            <p className="mt-2 text-xs text-[var(--color-muted,#756A66)]">
              Delivery calculated at checkout.
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <Link
                to="/checkout"
                onClick={closeCart}
                className="inline-flex items-center justify-center gap-2 rounded-full
                  bg-[var(--color-primary,#74382E)] px-6 py-3.5 text-sm font-semibold
                  text-white transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark,#54271F)]
                  hover:shadow-lg"
              >
                Checkout
                <FiArrowRight size={15} aria-hidden="true" />
              </Link>

              <Link
                to="/cart"
                onClick={closeCart}
                className="inline-flex items-center justify-center rounded-full
                  border border-[var(--color-border,#E8DDD9)] px-6 py-3 text-sm font-semibold
                  text-[var(--color-primary,#74382E)]
                  transition-all duration-300
                  hover:border-[var(--color-primary,#74382E)]/40"
              >
                View full cart
              </Link>

              <button
                type="button"
                onClick={clear}
                className="mt-1 text-xs text-[var(--color-muted,#756A66)] underline-offset-4 hover:underline"
              >
                Clear cart
              </button>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
}