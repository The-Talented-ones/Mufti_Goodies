// src/components/product/ProductReviews.tsx

import { FiStar } from "react-icons/fi";

interface Review {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
  createdAt: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--color-border,#E8DDD9)] bg-white/60 px-6 py-12 text-center">
        <p className="font-serif text-xl text-[var(--color-primary,#74382E)]">
          No reviews yet.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted,#756A66)]">
          Be the first to share your experience.
        </p>
      </div>
    );
  }

  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-5">
        <span className="font-serif text-4xl font-bold text-[var(--color-primary,#74382E)]">
          {average.toFixed(1)}
        </span>
        <div>
          <div
            className="flex items-center gap-1 text-[var(--color-accent,#ED9536)]"
            aria-label={`${average.toFixed(1)} out of 5 stars`}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <FiStar
                key={n}
                size={16}
                className={
                  n <= Math.round(average) ? "fill-current" : "opacity-40"
                }
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-xs text-[var(--color-muted,#756A66)]">
            Based on {reviews.length} review
            {reviews.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      <ul role="list" className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id}>
            <article className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-5">
              <header className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full
                      bg-[var(--color-accent,#ED9536)]/15
                      font-serif text-sm font-bold text-[var(--color-accent,#ED9536)]"
                  >
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
                      {review.author}
                    </p>
                    <time
                      dateTime={review.createdAt}
                      className="text-xs text-[var(--color-muted,#756A66)]"
                    >
                      {formatDate(review.createdAt)}
                    </time>
                  </div>
                </div>

                <div
                  className="flex items-center gap-1 text-[var(--color-accent,#ED9536)]"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FiStar
                      key={n}
                      size={14}
                      className={n <= review.rating ? "fill-current" : "opacity-30"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </header>

              <p className="mt-4 text-sm leading-7 text-[var(--color-text,#2E2522)]">
                {review.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}