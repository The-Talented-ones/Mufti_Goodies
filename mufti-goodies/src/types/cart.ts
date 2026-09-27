// src/types/cart.ts

import type { ProductVariant } from "./product";

export interface CartItem {
  /** Unique line-item id: `${productId}:${size}` */
  id: string;

  /** Product reference */
  productId: string;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  category: string;

  /** Selected variant */
  size: string;
  price: number;

  /** Quantity */
  quantity: number;
}

/** Helper type for adding to cart from a product page */
export interface AddToCartPayload {
  productId: string;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  category: string;
  variant: ProductVariant;
}