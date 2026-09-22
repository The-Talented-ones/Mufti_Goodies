// src/data/heritage.ts

import type { HeritageFilter, HeritageStory } from "../types/heritage";

/* =====================================================
   IMAGES (imported from src/assets)
====================================================== */

import dodoIkire from "/images/heritage/Dodo_Story2.webp";
import kuliKuli from "/images/heritage/kuliciousKuli.jpg";
import kokoro from "/images/heritage/kokoro.jpg";
import aadun from "/images/heritage/aadun.jpg";
import plantain from "/images/heritage/plantain.jpg";
import groundnut from "/images/heritage/groundnut.jpg";

/* =====================================================
   STORIES
====================================================== */

export const heritageStories: HeritageStory[] = [
  {
    id: "dodo-ikire",
    slug: "/heritage/dodo-ikire",
    category: "Yoruba Foods",
    region: "Ikire, Osun State",
    title: "Dodo Ikire",
    subtitle: "The beloved plantain delicacy from Ikire.",
    excerpt:
      "Discover how overripe plantains became one of Yoruba cuisine's most distinctive snacks — and the town that gave it its name.",
    image: dodoIkire,
    imageAlt:
      "Dodo Ikire — a traditional Yoruba plantain snack from Ikire, Osun State, Nigeria",
    symbol: "🍌",
    publishedAt: "2025-01-15",
    readTime: 6,
    tags: ["plantain", "yoruba", "ikire", "osun"],
    featured: true,
  },
  {
    id: "kuli-kuli",
    slug: "/heritage/kuli-kuli",
    category: "Yoruba Foods",
    region: "Northern Nigeria",
    title: "Kuli-Kuli",
    subtitle: "The groundnut snack with deep Hausa roots.",
    excerpt:
      "A crunchy snack born from resourcefulness — how roasted groundnut paste became a Nigerian staple enjoyed across regions.",
    image: kuliKuli,
    imageAlt:
      "Kuli-Kuli — a crunchy Nigerian groundnut snack with Hausa origins",
    symbol: "🥜",
    publishedAt: "2025-01-22",
    readTime: 5,
    tags: ["groundnut", "hausa", "snack"],
  },
  {
    id: "kokoro",
    slug: "/heritage/kokoro",
    category: "Yoruba Foods",
    region: "Pan-Nigerian",
    title: "Kokoro",
    subtitle: "The maize snack that travelled across Nigeria.",
    excerpt:
      "From street corners to school bags — the story of Kokoro, a fried maize snack loved by generations.",
    image: kokoro,
    imageAlt:
      "Kokoro — a classic Nigerian maize snack with deep cultural roots",
    symbol: "🌽",
    publishedAt: "2025-02-01",
    readTime: 4,
    tags: ["maize", "snack"],
  },
  {
    id: "aadun",
    slug: "/heritage/aadun",
    category: "Yoruba Foods",
    region: "South-West Nigeria",
    title: "Aadun",
    subtitle: "A peppery maize and palm oil delicacy.",
    excerpt:
      "A traditional Yoruba snack made from roasted maize, palm oil and spices — with a flavour that lingers.",
    image: aadun,
    imageAlt:
      "Aadun — a traditional Yoruba maize and palm oil snack from South-West Nigeria",
    symbol: "🌾",
    publishedAt: "2025-02-08",
    readTime: 4,
    tags: ["maize", "yoruba", "palm oil"],
  },
  {
    id: "indigenous-ingredients",
    slug: "/heritage/indigenous-ingredients",
    category: "Ingredients",
    region: "Nigeria",
    title: "Indigenous Ingredients",
    subtitle: "The staples behind Nigerian food heritage.",
    excerpt:
      "Plantain, groundnut, maize, cassava, coconut — explore how these ingredients shaped generations of Nigerian cooking.",
    image: groundnut,
    imageAlt:
      "A collection of indigenous Nigerian ingredients including groundnut, maize and plantain",
    symbol: "🌿",
    publishedAt: "2025-02-15",
    readTime: 7,
    tags: ["ingredients", "education"],
  },
  {
    id: "plantain-story",
    slug: "/heritage/plantain-story",
    category: "Food Facts",
    region: "West Africa",
    title: "The Story of Plantain",
    subtitle: "How one fruit became a hundred dishes.",
    excerpt:
      "From boiled to fried to roasted to pounded — plantain is more than a food. It's a language across West Africa.",
    image: plantain,
    imageAlt:
      "Plantain — a staple fruit in West African cuisine used in dozens of dishes",
    symbol: "🍌",
    publishedAt: "2025-02-20",
    readTime: 5,
    tags: ["plantain", "west africa"],
  },
];

/* =====================================================
   CATEGORY FILTERS
====================================================== */

export const heritageFilters: HeritageFilter[] = [
  { label: "All", value: "All" },
  { label: "Yoruba Foods", value: "Yoruba Foods" },
  { label: "Ingredients", value: "Ingredients" },
  { label: "Food Facts", value: "Food Facts" },
];

/* =====================================================
   HELPERS
====================================================== */

export const getFeaturedStory = () =>
  heritageStories.find((s) => s.featured);

export const getStoriesByCategory = (
  category: HeritageFilter["value"],
) =>
  category === "All"
    ? heritageStories
    : heritageStories.filter((s) => s.category === category);

export const getRelatedStories = (currentId: string, limit = 3) =>
  heritageStories
    .filter((s) => s.id !== currentId)
    .slice(0, limit);