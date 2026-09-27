// src/components/journal/PostActions.tsx

import { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiLink,
  FiCheck,
} from "react-icons/fi";
import { FaXTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa6";

interface PostActionsProps {
  postId: string;
  postTitle: string;
  postUrl: string;
  liked: boolean;
  likes: number;
  commentCount: number;
  onToggleLike: () => void;
  onJumpToComments: () => void;
}

export default function PostActions({
  postTitle,
  postUrl,
  liked,
  likes,
  commentCount,
  onToggleLike,
  onJumpToComments,
}: PostActionsProps) {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const shareLinks = [
    {
      label: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        postTitle,
      )}&url=${encodeURIComponent(postUrl)}`,
      icon: <FaXTwitter size={15} />,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(
        `${postTitle} — ${postUrl}`,
      )}`,
      icon: <FaWhatsapp size={16} />,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        postUrl,
      )}`,
      icon: <FaFacebookF size={14} />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-3">
      {/* Like */}
      <button
        type="button"
        onClick={onToggleLike}
        aria-pressed={liked}
        aria-label={liked ? "Unlike this post" : "Like this post"}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5
          text-sm font-semibold transition-all duration-300
          ${
            liked
              ? "bg-[var(--color-accent,#ED9536)] text-white"
              : "border border-[var(--color-border,#E8DDD9)] text-[var(--color-primary,#74382E)] hover:border-[var(--color-accent,#ED9536)]/40"
          }`}
      >
        <FiHeart size={16} className={liked ? "fill-current" : ""} />
        {likes > 0 ? likes : "Like"}
      </button>

      {/* Comment */}
      <button
        type="button"
        onClick={onJumpToComments}
        aria-label="Jump to comments"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2.5
          border border-[var(--color-border,#E8DDD9)]
          text-sm font-semibold text-[var(--color-primary,#74382E)]
          transition-all duration-300
          hover:border-[var(--color-accent,#ED9536)]/40"
      >
        <FiMessageCircle size={16} />
        {commentCount > 0 ? commentCount : "Comment"}
      </button>

      {/* Share */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShareOpen((o) => !o)}
          aria-expanded={shareOpen}
          aria-label="Share this post"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5
            border border-[var(--color-border,#E8DDD9)]
            text-sm font-semibold text-[var(--color-primary,#74382E)]
            transition-all duration-300
            hover:border-[var(--color-accent,#ED9536)]/40"
        >
          <FiShare2 size={16} />
          Share
        </button>

        {shareOpen && (
          <div
            className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden
              rounded-2xl border border-[var(--color-border,#E8DDD9)]
              bg-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            {shareLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm
                  text-[var(--color-primary,#74382E)]
                  transition-colors hover:bg-[var(--color-soft,#F5EEEB)]"
              >
                {s.icon}
                Share on {s.label}
              </a>
            ))}

            <button
              type="button"
              onClick={handleCopy}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm
                text-[var(--color-primary,#74382E)]
                transition-colors hover:bg-[var(--color-soft,#F5EEEB)]"
            >
              {copied ? <FiCheck size={15} /> : <FiLink size={15} />}
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}