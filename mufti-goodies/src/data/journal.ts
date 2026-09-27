// src/data/journal.ts

import type { JournalFilter, JournalPost } from "../types/journal";

/* =====================================================
   IMAGES
   Option A (recommended): put files in src/assets/journal/
   and import them here.

   Option B: put files in public/images/journal/ and replace
   each import with a plain string like "/images/journal/x.jpg"
====================================================== */

import indigenousFoods from "/public/images/journal/kuliciousKuli.jpg";
import forgottenSnacks from "/public/images/journal/aadun.jpg";
import smartSnacking from "/public/images/journal/Dodo_Story2.webp";
import studySessions from "/public/images/journal/groundnut.jpg";
import buildingBrand from "/public/images/journal/kokoro.jpg";
import behindBrand from "/public/images/journal/plantain.jpg";

/* =====================================================
   DEFAULT AUTHOR
====================================================== */

const TEAM_AUTHOR = {
  name: "Mufti Goodies Team",
  role: "Modernizing Indigenous Foods",
};

/* =====================================================
   POSTS
====================================================== */

export const journalPosts: JournalPost[] = [
  {
    id: "why-indigenous-foods-matter",
    slug: "/journal/why-indigenous-foods-matter",
    title: "Why Indigenous Foods Matter",
    excerpt:
      "Indigenous foods carry more than flavour. They carry memory, place and identity. Here's why preserving them matters — and what we're doing about it.",
    image: indigenousFoods,
    imageAlt:
      "A spread of indigenous Nigerian foods that reflect the country's food heritage",
    category: "Food & Culture",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 6,
    tags: ["heritage", "culture", "indigenous foods"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Indigenous foods are more than what we eat. They are memory, place and identity — carried forward through generations of hands and kitchens.",
      },
      { type: "heading", level: 2, text: "Why this matters now" },
      {
        type: "paragraph",
        text: "In a world where food is increasingly globalised, the snacks and meals that once defined Nigerian childhoods are quietly disappearing from our tables. Preserving them is not nostalgia — it's stewardship.",
      },
      {
        type: "quote",
        text: "Every food has a story. When we lose the food, we lose the story with it.",
        cite: "Mufti Goodies",
      },
      { type: "heading", level: 2, text: "What we're doing about it" },
      {
        type: "list",
        ordered: false,
        items: [
          "Sourcing ingredients in a way that respects their traditions",
          "Documenting the foods and stories behind them in our Heritage library",
          "Presenting familiar snacks in ways that feel modern without losing their roots",
        ],
      },
      {
        type: "paragraph",
        text: "This is the work. It is slow, careful, and worth doing.",
      },
    ],
  },
  {
    id: "forgotten-snacks-of-nigeria",
    slug: "/journal/forgotten-snacks-of-nigeria",
    title: "The Forgotten Snacks of Nigeria",
    excerpt:
      "Some Nigerian snacks are disappearing from our tables. We look at a few familiar treats that deserve to be remembered — and brought back.",
    image: forgottenSnacks,
    imageAlt:
      "Traditional Nigerian snacks at risk of being forgotten in modern food culture",
    category: "Food & Culture",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 5,
    tags: ["snacks", "heritage", "culture"],
    body: [
      {
        type: "paragraph",
        text: "Every generation loses a few snacks along the way. Some fade because the ingredients get harder to find. Others fade because the people who made them stopped.",
      },
      { type: "heading", level: 2, text: "A few we miss" },
      {
        type: "list",
        ordered: false,
        items: [
          "Aadun — a peppery roasted-maize snack from the South-West",
          "Kokoro — fried maize dough enjoyed across Nigeria",
          "Kuli-Kuli — groundnut cakes with deep northern roots",
        ],
      },
      {
        type: "paragraph",
        text: "Bringing them back isn't just about taste. It's about keeping the stories attached to them alive.",
      },
    ],
  },
  {
    id: "smart-snacking-for-students",
    slug: "/journal/smart-snacking-for-students",
    title: "Smart Snacking for Students",
    excerpt:
      "Between lectures, assignments and late-night study sessions — here's how to snack well without losing focus or breaking your budget.",
    image: smartSnacking,
    imageAlt:
      "A student-friendly Nigerian snack setup for productive study sessions",
    category: "Food & Lifestyle",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 4,
    tags: ["students", "lifestyle", "snacking"],
    body: [
      {
        type: "paragraph",
        text: "Snacking well as a student isn't about eating less. It's about eating with intention — choosing snacks that give you energy without crashing you an hour later.",
      },
      { type: "heading", level: 2, text: "Three rules that help" },
      {
        type: "list",
        ordered: true,
        items: [
          "Keep something savoury on your desk — not just sugar",
          "Buy in small packs so you don't finish everything at once",
          "Pair snacks with water, not just soda",
        ],
      },
      {
        type: "paragraph",
        text: "Small habits compound. Snacking well is one of them.",
      },
    ],
  },
  {
    id: "snacks-for-study-sessions",
    slug: "/journal/snacks-for-study-sessions",
    title: "Snacks for Study Sessions",
    excerpt:
      "The right snack can keep you sharp. Here are a few Nigerian snacks that pair well with deep work, revision and long reading sessions.",
    image: studySessions,
    imageAlt:
      "Nigerian snacks arranged on a desk for a productive study session",
    category: "Food & Lifestyle",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 4,
    tags: ["students", "focus", "snacks"],
    body: [
      {
        type: "paragraph",
        text: "Long study sessions need snacks that don't make you sleepy. That rules out heavy fried things and anything loaded with refined sugar.",
      },
      { type: "heading", level: 2, text: "What works" },
      {
        type: "list",
        ordered: false,
        items: [
          "Kuli-Kuli — slow-release energy from groundnut",
          "Kokoro — crunchy, familiar, easy to portion",
          "Dodocious Dodo — savoury, plantain-based, satisfying",
        ],
      },
      {
        type: "paragraph",
        text: "Keep water nearby. Take real breaks. The snack is a tool, not a substitute for rest.",
      },
    ],
  },
  {
    id: "building-an-indigenous-food-brand",
    slug: "/journal/building-an-indigenous-food-brand",
    title: "Building an Indigenous Food Brand",
    excerpt:
      "Lessons from building Mufti Goodies: what it takes to turn a familiar food into a modern brand without losing its roots.",
    image: buildingBrand,
    imageAlt:
      "Behind the scenes of building a modern indigenous Nigerian food brand",
    category: "Entrepreneurship",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 7,
    tags: ["business", "branding", "entrepreneurship"],
    body: [
      {
        type: "paragraph",
        text: "Building a food brand in Nigeria is not just about the product. It's about packaging, positioning, storytelling, and — most of all — trust.",
      },
      { type: "heading", level: 2, text: "What we've learned so far" },
      {
        type: "list",
        ordered: true,
        items: [
          "Start with one product you can make well",
          "Document everything — the process becomes your story",
          "Packaging is not decoration; it's communication",
          "Consistency beats novelty every time",
        ],
      },
      {
        type: "quote",
        text: "The market doesn't reward the biggest idea. It rewards the most consistent execution.",
      },
      {
        type: "paragraph",
        text: "We're still early. But the direction feels right.",
      },
    ],
  },
  {
    id: "behind-mufti-goodies",
    slug: "/journal/behind-mufti-goodies",
    title: "Behind Mufti Goodies",
    excerpt:
      "The story behind the brand — how a small idea around Dodo Ikire grew into a bigger vision for Nigerian food heritage.",
    image: behindBrand,
    imageAlt:
      "The Mufti Goodies journey — building a modern Nigerian food brand",
    category: "Behind the Brand",
    author: TEAM_AUTHOR,
    publishedAt: "2026-09-27",
    readTime: 6,
    tags: ["story", "brand", "behind the scenes"],
    body: [
      {
        type: "paragraph",
        text: "Mufti Goodies started with something small: buying Dodo Ikire from a relative and reselling it. Nothing fancy. Just a familiar snack, in a familiar way.",
      },
      { type: "heading", level: 2, text: "What changed" },
      {
        type: "paragraph",
        text: "We realised the snack wasn't the whole story. What people responded to wasn't just the taste — it was the memory, the origin, the cultural weight behind it.",
      },
      {
        type: "paragraph",
        text: "So we built a brand around that. Not just selling snacks. Preserving stories. Presenting them thoughtfully for a new generation.",
      },
    ],
  },
];

/* =====================================================
   CATEGORY FILTERS
====================================================== */

export const journalFilters: JournalFilter[] = [
  { label: "All", value: "All" },
  { label: "Food & Culture", value: "Food & Culture" },
  { label: "Food & Lifestyle", value: "Food & Lifestyle" },
  { label: "Behind the Brand", value: "Behind the Brand" },
  { label: "Entrepreneurship", value: "Entrepreneurship" },
];

/* =====================================================
   HELPERS
====================================================== */

/** Sorts posts newest-first */
export const sortByDate = (posts: JournalPost[]) =>
  [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

/** Returns the featured post (or newest if none flagged) */
export const getFeaturedPost = (): JournalPost | undefined => {
  const featured = journalPosts.find((p) => p.featured);
  if (featured) return featured;
  return sortByDate(journalPosts)[0];
};

/** Returns posts by category, newest first */
export const getPostsByCategory = (category: JournalFilter["value"]) => {
  const filtered =
    category === "All"
      ? journalPosts
      : journalPosts.filter((p) => p.category === category);
  return sortByDate(filtered);
};

/** Returns related posts (excluding current, newest first) */
export const getRelatedPosts = (currentId: string, limit = 3) =>
  sortByDate(journalPosts.filter((p) => p.id !== currentId)).slice(0, limit);

/** Formats an ISO date as "18 Feb 2025" */
export const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });