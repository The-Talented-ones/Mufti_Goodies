// src/components/product/ProductTabs.tsx

import { useState } from "react";
import type { Product } from "../../types/product";

interface ProductTabsProps {
  product: Product;
}

const TABS = ["Description", "Ingredients", "Storage"] as const;
type Tab = (typeof TABS)[number];

export default function ProductTabs({ product }: ProductTabsProps) {
  const [active, setActive] = useState<Tab>("Description");

  return (
    <div className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Product information"
        className="flex overflow-x-auto border-b border-[var(--color-border,#E8DDD9)]"
      >
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.toLowerCase()}`}
              id={`tab-${tab.toLowerCase()}`}
              onClick={() => setActive(tab)}
              className={`relative whitespace-nowrap px-6 py-4 text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-[var(--color-primary,#74382E)]"
                  : "text-[var(--color-muted,#756A66)] hover:text-[var(--color-primary,#74382E)]"
              }`}
            >
              {tab}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-[var(--color-accent,#ED9536)]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <div className="p-6 sm:p-8">
        {active === "Description" && (
          <div
            role="tabpanel"
            id="panel-description"
            aria-labelledby="tab-description"
            className="space-y-4 text-sm leading-8 text-[var(--color-muted,#756A66)]"
          >
            <p>{product.description}</p>

            {product.flavourNotes && product.flavourNotes.length > 0 && (
              <div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                  Flavour notes
                </h3>
                <ul role="list" className="mt-3 space-y-2">
                  {product.flavourNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent,#ED9536)]"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {active === "Ingredients" && (
          <div
            role="tabpanel"
            id="panel-ingredients"
            aria-labelledby="tab-ingredients"
            className="text-sm leading-8 text-[var(--color-muted,#756A66)]"
          >
            {product.ingredients && product.ingredients.length > 0 ? (
              <ul role="list" className="space-y-2">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent,#ED9536)]"
                    />
                    {ing}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ingredient information coming soon.</p>
            )}
          </div>
        )}

        {active === "Storage" && (
          <div
            role="tabpanel"
            id="panel-storage"
            aria-labelledby="tab-storage"
            className="space-y-5 text-sm leading-8 text-[var(--color-muted,#756A66)]"
          >
            {product.storage && (
              <div>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                  Storage
                </h3>
                <p className="mt-2">{product.storage}</p>
              </div>
            )}

            {product.bestBefore && (
              <div>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                  Best before
                </h3>
                <p className="mt-2">{product.bestBefore}</p>
              </div>
            )}

            {product.batchInfo && (
              <div>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-primary,#74382E)]">
                  Batch information
                </h3>
                <p className="mt-2">{product.batchInfo}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}