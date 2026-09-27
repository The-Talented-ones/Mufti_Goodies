// src/types/journal.ts

/**
 * A single Journal (blog) post.
 * Used by JournalCard, FeaturedPost, JournalGrid and the Journal page.
 */
export interface JournalPost {
  /** Unique slug — used for routing & React keys */
  id: string;

  /** URL path for the full post */
  slug: string;

  /** Post title */
  title: string;

  /** 1–2 sentence summary shown on cards */
  excerpt: string;

  /** Path to the cover image (imported asset or /public URL) */
  image: string;

  /** Descriptive alt text for accessibility + SEO */
  imageAlt: string;

  /** Category shown on the card + used for filtering */
  category: JournalCategory;

  /** Author info */
  author: JournalAuthor;

  /** ISO date string — used for sorting & display */
  publishedAt: string;

  /** Optional — if the post has been edited since publishing */
  updatedAt?: string;

  /** Estimated read time in minutes */
  readTime: number;

  /** Tags for search & related content */
  tags: string[];

  /** Whether this post is the featured (larger) card */
  featured?: boolean;

   body: PostBlock[];
}

/** Author of a Journal post */
export interface JournalAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

/**
 * Categories used to group Journal posts.
 */
export type JournalCategory =
  | "Food & Culture"
  | "Food & Lifestyle"
  | "Behind the Brand"
  | "Entrepreneurship";

/**
 * A category filter option for the grid UI.
 */
export interface JournalFilter {
  label: string;
  value: JournalCategory | "All";
}
// src/types/journal.ts  (additions)

/**
 * A content block inside a post body.
 * Supports headings, paragraphs, quotes, lists and images.
 */
export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

/**
 * A comment on a journal post.
 * (Persisted to localStorage for now — swap for a real backend later.)
 */
export interface Comment {
  id: string;
  postId: string;
  author: string;
  body: string;
  createdAt: string; // ISO
  likes?: number;
}