// src/types/product.ts

import type { ReactNode } from "react";

export type ProductCategory =
  | "Plantain"
  | "Groundnut"
  | "Maize"
  | "Coming Soon";

export type ProductStatus = "available" | "coming-soon";

export interface ProductVariant {
  /** e.g. "100g" */
  size: string;
  /** price in Naira */
  price: number;
  /** optional stock indicator */
  inStock?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  region: string;
  status: ProductStatus;

  /** Primary image */
  image: string;
  imageAlt: string;

  /** Optional gallery images */
  gallery?: { src: string; alt: string }[];

  /** Fallback icon for coming-soon items */
  fallbackIcon?: ReactNode;

  /** Gradient accent used as image background */
  accent: string;

  /** Base price (used when `variants` is empty) */
  price: number;

  /** Available sizes + prices */
  variants?: ProductVariant[];

  /** Short marketing paragraph (cards) */
  shortDescription: string;

  /** Long description (product page) */
  description: string;

  /** Bullet list of "what's inside" */
  ingredients?: string[];

  /** Texture / flavour notes */
  flavourNotes?: string[];

  /** Storage instructions */
  storage?: string;

  /** Best-before info */
  bestBefore?: string;

  /** Batch info */
  batchInfo?: string;

  /** Tags used for filtering + related items */
  tags: string[];
}