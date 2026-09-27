// src/hooks/usePostEngagement.ts

import { useCallback, useEffect, useState } from "react";
import type { Comment } from "../types/journal";

const LIKES_KEY = "mg:liked-posts";
const COMMENTS_KEY = "mg:comments";

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota errors */
  }
}

export function usePostEngagement(postId: string) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);

  /* Load state on mount / when postId changes */
  useEffect(() => {
    const likedPosts = readJSON<string[]>(LIKES_KEY, []);
    setLiked(likedPosts.includes(postId));

    const all: Comment[] = readJSON<Comment[]>(COMMENTS_KEY, []);
    const forPost = all.filter((c) => c.postId === postId);
    setComments(forPost);
    setLikes(forPost.length > 0 ? 1 : 0); // baseline "seed" — replace with API
  }, [postId]);

  const toggleLike = useCallback(() => {
    const likedPosts = readJSON<string[]>(LIKES_KEY, []);
    const isLiked = likedPosts.includes(postId);

    const next = isLiked
      ? likedPosts.filter((id) => id !== postId)
      : [...likedPosts, postId];

    writeJSON(LIKES_KEY, next);
    setLiked(!isLiked);
    setLikes((n) => (isLiked ? Math.max(0, n - 1) : n + 1));
  }, [postId]);

  const addComment = useCallback(
    (author: string, body: string) => {
      const all: Comment[] = readJSON<Comment[]>(COMMENTS_KEY, []);

      const newComment: Comment = {
        id: `c_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        postId,
        author: author.trim() || "Anonymous",
        body: body.trim(),
        createdAt: new Date().toISOString(),
        likes: 0,
      };

      const updated = [...all, newComment];
      writeJSON(COMMENTS_KEY, updated);
      setComments((prev) => [...prev, newComment]);

      return newComment;
    },
    [postId],
  );

  const deleteComment = useCallback(
    (commentId: string) => {
      const all: Comment[] = readJSON<Comment[]>(COMMENTS_KEY, []);
      const updated = all.filter((c) => c.id !== commentId);
      writeJSON(COMMENTS_KEY, updated);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    },
    [],
  );

  return {
    liked,
    likes,
    comments,
    toggleLike,
    addComment,
    deleteComment,
  };
}