// src/components/journal/CommentForm.tsx

import { useState } from "react";
import type { FormEvent } from "react";
import { FiSend } from "react-icons/fi";

interface CommentFormProps {
  onSubmit: (author: string, body: string) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!body.trim()) {
      setError("Please write a comment before posting.");
      return;
    }
    onSubmit(author, body);
    setAuthor("");
    setBody("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Leave a comment"
      className="rounded-3xl border border-[var(--color-border,#E8DDD9)] bg-white p-6 sm:p-8"
    >
      <h3 className="font-serif text-2xl font-semibold text-[var(--color-primary,#74382E)]">
        Leave a comment
      </h3>

      <p className="mt-2 text-sm text-[var(--color-muted,#756A66)]">
        Your email is never published. Be kind.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="comment-name"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
          >
            Name (optional)
          </label>
          <input
            id="comment-name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Anonymous"
            className="mt-2 w-full rounded-xl border border-[var(--color-border,#E8DDD9)]
              bg-white px-4 py-3 text-sm
              text-[var(--color-text,#2E2522)]
              placeholder:text-[var(--color-muted,#756A66)]/60
              focus:border-[var(--color-accent,#ED9536)]
              focus:outline-none focus:ring-2
              focus:ring-[var(--color-accent,#ED9536)]/30
              transition-all duration-300"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="comment-body"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted,#756A66)]"
        >
          Comment
        </label>
        <textarea
          id="comment-body"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your thoughts…"
          className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border,#E8DDD9)]
            bg-white px-4 py-3 text-sm leading-7
            text-[var(--color-text,#2E2522)]
            placeholder:text-[var(--color-muted,#756A66)]/60
            focus:border-[var(--color-accent,#ED9536)]
            focus:outline-none focus:ring-2
            focus:ring-[var(--color-accent,#ED9536)]/30
            transition-all duration-300"
        />
      </div>

      {error && (
        <p role="alert" className="mt-3 text-xs text-red-600">
          {error}
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full
            bg-[var(--color-primary,#74382E)] px-6 py-3 text-sm font-semibold
            text-white transition-all duration-300
            hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark,#54271F)]
            hover:shadow-lg"
        >
          Post comment
          <FiSend size={15} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}