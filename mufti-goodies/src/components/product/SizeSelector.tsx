// src/components/product/SizeSelector.tsx

import type { ProductVariant } from "../../types/product";

interface SizeSelectorProps {
  variants: ProductVariant[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

export default function SizeSelector({
  variants,
  selectedSize,
  onSelect,
}: SizeSelectorProps) {
  if (variants.length === 0) return null;

  return (
    <div>
      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]">
        Choose size
      </label>

      <div
        role="radiogroup"
        aria-label="Product size"
        className="flex flex-wrap gap-2"
      >
        {variants.map((v) => {
          const isActive = v.size === selectedSize;
          const disabled = v.inStock === false;

          return (
            <button
              key={v.size}
              type="button"
              role="radio"
              aria-checked={isActive}
              disabled={disabled}
              onClick={() => !disabled && onSelect(v.size)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[var(--color-primary,#74382E)] text-white shadow-[0_8px_25px_rgba(116,56,46,0.15)]"
                  : "border border-[var(--color-border,#E8DDD9)] bg-white text-[var(--color-primary,#74382E)] hover:border-[var(--color-primary,#74382E)]/40"
              } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
            >
              {v.size}
            </button>
          );
        })}
      </div>
    </div>
  );
}