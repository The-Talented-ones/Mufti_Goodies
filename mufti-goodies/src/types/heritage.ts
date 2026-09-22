// src/types/heritage.ts

/**
 * A single heritage story / entry.
 * Used by HeritageCard, HeritageGrid and the Heritage page.
 */
export interface HeritageStory {
  /** Unique slug — used for routing & React keys */
  id: string;

  /** URL path for the full story page */
  slug: string;

  /** Short category label shown on the card */
  category: HeritageCategory;

  /** Region / origin of the food or tradition */
  region: string;

  /** Primary title — e.g. "Dodo Ikire" */
  title: string;

  /** Short one-line subtitle under the title */
  subtitle: string;

  /** 1–2 sentence summary shown on cards */
  excerpt: string;

  /** Path to the cover image (imported asset or /public URL) */
  image: string;

  /** Descriptive alt text for accessibility + SEO */
  imageAlt: string;

  /** Emoji or short symbol shown as a fallback / accent */
  symbol?: string;

  /** ISO date string — for sorting & display */
  publishedAt?: string;

  /** Estimated read time in minutes */
  readTime?: number;

  /** Tags for search & related content */
  tags?: string[];

  /** Whether this story is featured (larger card, top of page) */
  featured?: boolean;
}

/**
 * Categories used to group heritage stories.
 * Extendable as you add Hausa, Igbo, Niger Delta foods.
 */
export type HeritageCategory =
  | "Yoruba Foods"
  | "Hausa Foods"
  | "Igbo Foods"
  | "Niger Delta Foods"
  | "Pan-Nigerian Foods"
  | "Food Facts"
  | "Ingredients";

/**
 * A category filter option for the grid UI.
 */
export interface HeritageFilter {
  label: string;
  value: HeritageCategory | "All";
}