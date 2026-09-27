// src/pages/Cart.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import CartItemRow from "../../components/cart/CartItemRow";
import CartSummary from "../../components/cart/CartSummary";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const {
    items,
    itemCount,
    increment,
    decrement,
    removeItem,
    clear,
  } = useCart();

  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      <Container className="py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-[var(--color-border,#E8DDD9)] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
            Your Cart
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)] sm:text-5xl">
            {itemCount > 0
              ? `${itemCount} item${itemCount === 1 ? "" : "s"} ready to go.`
              : "Your cart is empty."}
          </h1>
        </header>

        {items.length === 0 ? (
          <div className="mx-auto mt-16 max-w-md text-center">
            <span
              aria-hidden="true"
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--color-soft,#F5EEEB)] text-[var(--color-accent,#ED9536)]"
            >
              <FiShoppingBag size={26} />
            </span>
            <p className="mt-5 text-sm text-[var(--color-muted,#756A66)]">
              Once you add snacks to your cart, they'll show up here.
            </p>
            <div className="mt-8">
              <Button to="/shop" variant="primary">
                Browse the Shop
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            {/* Items */}
            <section aria-label="Cart items">
              <ul
                role="list"
                className="divide-y divide-[var(--color-border,#E8DDD9)]"
              >
                {items.map((item) => (
                  <li key={item.id}>
                    <CartItemRow
                      item={item}
                      onIncrement={increment}
                      onDecrement={decrement}
                      onRemove={removeItem}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary,#74382E)] hover:text-[var(--color-accent,#ED9536)]"
                >
                  Continue shopping
                  <FiArrowUpRight size={14} aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={clear}
                  className="text-sm text-[var(--color-muted,#756A66)] underline-offset-4 hover:underline"
                >
                  Clear cart
                </button>
              </div>
            </section>

            {/* Summary */}
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <CartSummary />

              <Link
                to="/checkout"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full
                  bg-[var(--color-primary,#74382E)] px-6 py-3.5 text-sm font-semibold
                  text-white transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark,#54271F)]
                  hover:shadow-lg"
              >
                Proceed to checkout
                <FiArrowUpRight size={15} aria-hidden="true" />
              </Link>

              <p className="text-center text-xs text-[var(--color-muted,#756A66)]">
                Safe, secure checkout. Delivery confirmed before dispatch.
              </p>
            </aside>
          </div>
        )}
      </Container>
    </main>
  );
}