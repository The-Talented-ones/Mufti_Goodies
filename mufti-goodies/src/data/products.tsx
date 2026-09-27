// src/data/products.ts

import {  GiWheat, GiPeanut } from "react-icons/gi";

import type { Product } from "../types/product";

/* =====================================================
   PRODUCTS
====================================================== */

export const products: Product[] = [
  {
    id: "dodocious-dodo",
    slug: "/shop/dodocious-dodo",
    name: "Dodocious Dodo",
    tagline: "A modern expression of Dodo Ikire.",
    category: "Plantain",
    region: "Osogbo, Osun State",
    status: "available",

    image: "/images/products/Dodo_Story2.webp",
    imageAlt:
      "Dodocious Dodo — a modern Dodo Ikire plantain snack from Osogbo, Osun State, Nigeria",
    gallery: [
      { src: "/images/products/Dodo_Story2.webp", alt: "Dodocious Dodo pack — front view" },
      { src: "/images/products/Dodo_Story2.webp", alt: "Dodocious Dodo — close-up of the snack" },
      { src: "/images/products/Dodo_Story2.webp", alt: "Dodocious Dodo — packaging detail" },
    ],
    accent:
      "from-[#f5b45c] via-[var(--color-accent,#ED9536)] to-[var(--color-primary,#74382E)]",

    price: 3500,
    variants: [
      { size: "100g", price: 1500, inStock: true },
      { size: "200g", price: 2500, inStock: true },
      { size: "500g", price: 5000, inStock: true },
    ],

    shortDescription:
      "A modern expression of Dodo Ikire — the beloved Yoruba plantain delicacy from Ikire, Osun State.",

    description:
      "Dodocious Dodo is our flagship snack: a respectful, modern take on Dodo Ikire — the smoky, spicy plantain delicacy traditionally made in Ikire, Osun State. We prepare it carefully, package it thoughtfully, and bring it to your table without losing the character that made it loved in the first place.",

    ingredients: [
      "Ripe plantain",
      "Palm oil",
      "Ground pepper",
      "Onion",
      "Salt",
      "Traditional spices",
    ],

    flavourNotes: [
      "Smoky, savoury-sweet finish",
      "Gently spiced, not overpowering",
      "Soft interior, lightly crisp edges",
    ],

    storage:
      "Store in a cool, dry place away from direct sunlight. Once opened, keep in an airtight container and consume within 3 days.",

    bestBefore: "Best enjoyed within 4 weeks of the production date.",

    batchInfo:
      "Each pack carries a batch code and production date. Scan the QR code on the pack to read the Dodo Ikire story.",

    tags: ["plantain", "dodo ikire", "yoruba", "ikire", "osun", "snack"],
  },
  {
    id: "kulicious-kuli",
    slug: "/shop/kulicious-kuli",
    name: "Kulicious Kuli",
    tagline: "Crunchy, spiced groundnut goodness.",
    category: "Groundnut",
    region: "Northern Nigeria",
    status: "coming-soon",

    image: "/images/products/kuliciousKuli.jpg",
    imageAlt:
      "Kulicious Kuli — a crunchy Nigerian groundnut snack inspired by Kuli-Kuli",
    fallbackIcon: <GiPeanut size={96} />,
    accent: "from-[#e9c46a] via-[#d4a24a] to-[#8a5a2b]",

    price: 0,
    variants: [],

    shortDescription:
      "A modern take on the classic Nigerian groundnut snack.",

    description:
      "Kulicious Kuli is our forthcoming expression of Kuli-Kuli — the crunchy, spiced groundnut snack loved across Nigeria. Details coming soon.",

    tags: ["groundnut", "kuli-kuli", "northern nigeria", "snack"],
  },
  {
    id: "kokoro",
    slug: "/shop/kokoro",
    name: "Kokoro",
    tagline: "The classic Nigerian maize snack.",
    category: "Maize",
    region: "Pan-Nigerian",
    status: "coming-soon",

    image: "/images/products/kokoro.jpg",
    imageAlt:
      "Kokoro — a classic Nigerian maize snack with deep cultural roots",
    fallbackIcon: <GiWheat size={96} />,
    accent: "from-[#f4d06f] via-[#e0a83f] to-[#9c6b1c]",

    price: 0,
    variants: [],

    shortDescription: "The familiar maize snack, reimagined for today.",

    description:
      "Kokoro is our upcoming modern take on the classic Nigerian maize snack. Details coming soon.",

    tags: ["maize", "kokoro", "snack"],
  },
];

/* =====================================================
   HELPERS
====================================================== */

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentId: string, limit = 3) =>
  products
    .filter((p) => p.id !== currentId && p.status === "available")
    .slice(0, limit);

/** Category filter labels for the shop grid */
export const productCategories = [
  "All",
  "Plantain",
  "Groundnut",
  "Maize",
  "Coming Soon",
] as const;

export type ProductCategoryFilter = (typeof productCategories)[number];