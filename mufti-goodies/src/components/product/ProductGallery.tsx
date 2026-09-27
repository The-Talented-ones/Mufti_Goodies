// src/components/product/ProductGallery.tsx

import { useState } from "react";
import type { Product } from "../../types/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [{ src: product.image, alt: product.imageAlt }];

  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-[var(--color-soft,#F5EEEB)]">
        <img
          src={current.src}
          alt={current.alt}
          width={800}
          height={800}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Status chip */}
        {product.status === "coming-soon" && (
          <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)] backdrop-blur-md">
            Coming Soon
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <ul
          role="list"
          className="grid grid-cols-3 gap-3"
          aria-label="Product images"
        >
          {images.map((img, i) => {
            const isActive = i === active;
            return (
              <li key={img.src + i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}: ${img.alt}`}
                  aria-pressed={isActive}
                  className={`relative aspect-square w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-[var(--color-primary,#74382E)] ring-2 ring-[var(--color-primary,#74382E)]/20"
                      : "border-[var(--color-border,#E8DDD9)] hover:border-[var(--color-primary,#74382E)]/40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    width={300}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}