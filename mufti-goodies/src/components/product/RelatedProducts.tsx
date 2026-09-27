// src/components/product/RelatedProducts.tsx

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import type { Product } from "../../types/product";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <Link
            to={product.slug}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl
              border border-[var(--color-border,#E8DDD9)] bg-white
              transition-all duration-500
              hover:-translate-y-1.5
              hover:border-[var(--color-primary,#74382E)]/20
              hover:shadow-[var(--shadow-soft,0_20px_50px_-20px_rgba(0,0,0,0.15))]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${product.accent}`}
              />
              <img
                src={product.image}
                alt={product.imageAlt}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent,#ED9536)]">
                {product.category}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--color-primary,#74382E)]">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[var(--color-muted,#756A66)]">
                {product.tagline}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary,#74382E)] group-hover:text-[var(--color-accent,#ED9536)]">
                View product
                <FiArrowUpRight
                  aria-hidden="true"
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}