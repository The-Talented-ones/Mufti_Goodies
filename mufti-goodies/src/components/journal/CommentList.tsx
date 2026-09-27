// src/components/journal/CommentList.tsx

import { FiTrash2 } from "react-icons/fi";
import type { Comment } from "../../types/journal";

interface CommentListProps {
  comments: Comment[];
  onDelete?: (id: string) => void;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function CommentList({ comments, onDelete }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--color-border,#E8DDD9)] bg-white/60 px-6 py-12 text-center">
        <p className="font-serif text-xl text-[var(--color-primary,#74382E)]">
          No comments yet.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted,#756A66)]">
          Be the first to share your thoughts.
        </p>
      </div>
    );
  }

  return (
    <ul role="list" className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id}>
          <article
            className="rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-5 sm:p-6"
          >
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full
                    bg-[var(--color-accent,#ED9536)]/15
                    font-serif text-sm font-bold text-[var(--color-accent,#ED9536)]"
                >
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
                    {comment.author}
                  </p>
                  <time
                    dateTime={comment.createdAt}
                    className="text-xs text-[var(--color-muted,#756A66)]"
                  >
                    {formatDate(comment.createdAt)}
                  </time>
                </div>
              </div>

              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(comment.id)}
                  aria-label="Delete comment"
                  className="rounded-full p-2 text-[var(--color-muted,#756A66)]
                    transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <FiTrash2 size={14} />
                </button>
              )}
            </header>

            <p className="mt-4 text-sm leading-7 text-[var(--color-text,#2E2522)]">
              {comment.body}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}