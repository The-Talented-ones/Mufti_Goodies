// src/pages/JournalPost.tsx

import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowUpRight, FiClock, FiChevronLeft } from "react-icons/fi";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import PostBody from "../../components/journal/PostBody";
import PostActions from "../../components/journal/PostActions";
import CommentList from "../../components/journal/CommentList";
import CommentForm from "../../components/journal/CommentForm";
import JournalCard from "../../components/journal/JournalCard";

import {
  formatPostDate,
  getRelatedPosts,
  journalPosts,
} from "../../data/journal";
import { usePostEngagement } from "../../hooks/usePostEngagement";

export default function JournalPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(
    () => journalPosts.find((p) => p.slug === `/journal/${slug}`),
    [slug],
  );

  const postId = post?.id ?? "__missing__";
  const {
    liked,
    likes,
    comments,
    toggleLike,
    addComment,
    deleteComment,
  } = usePostEngagement(postId);

  /* Scroll to top on post change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  /* SEO: update title + meta description */
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Journal | Mufti Goodies`;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", post.excerpt);
  }, [post]);

  /* 404 */
  if (!post) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5 py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent,#ED9536)]">
            404 — Post not found
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--color-primary,#74382E)]">
            This post doesn't exist.
          </h1>
          <p className="mt-4 text-sm text-[var(--color-muted,#756A66)]">
            It may have been moved or the link is incorrect.
          </p>
          <div className="mt-8">
            <Button to="/journal" variant="primary">
              Back to Journal
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const related = getRelatedPosts(post.id, 3);
  const postUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${post.slug}`
      : `https://muftigoodies.com${post.slug}`;

  const commentsSectionId = "post-comments";

  return (
    <main className="bg-[var(--color-background,#FCFCFC)] text-[var(--color-text,#2E2522)]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <header className="relative overflow-hidden">
        <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t
              from-black/75 via-black/40 to-black/20"
          />

          <Container className="relative flex h-full flex-col justify-end pb-12 lg:pb-16">
            {/* Back link */}
            <Link
              to="/journal"
              className="mb-6 inline-flex w-fit items-center gap-2
                rounded-full border border-white/25 bg-white/10 px-4 py-2
                text-xs font-semibold uppercase tracking-[0.14em]
                text-white backdrop-blur-sm
                transition hover:bg-white/20"
            >
              <FiChevronLeft size={14} aria-hidden="true" />
              Back to Journal
            </Link>

            <span className="w-fit rounded-full bg-[var(--color-accent,#ED9536)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary,#74382E)]">
              {post.category}
            </span>

            <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/80">
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt)}
              </time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <FiClock size={13} aria-hidden="true" />
                {post.readTime} min read
              </span>
              <span aria-hidden="true">·</span>
              <span>{post.author.name}</span>
            </div>
          </Container>
        </div>
      </header>

      {/* =====================================================
          BODY
      ====================================================== */}
      <article
        className="mx-auto max-w-[760px] px-5 py-14 sm:px-8 lg:py-20"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* Intro excerpt */}
        <p
          className="mb-10 text-lg font-medium leading-9 text-[var(--color-primary,#74382E)]"
          itemProp="description"
        >
          {post.excerpt}
        </p>

        {/* Article body */}
        <div itemProp="articleBody">
          <PostBody blocks={post.body} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <ul
            role="list"
            className="mt-12 flex flex-wrap gap-2"
            aria-label="Post tags"
          >
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--color-soft,#F5EEEB)] px-3 py-1.5
                  text-xs font-medium text-[var(--color-primary,#74382E)]"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}

        {/* Actions bar */}
        <div className="mt-10">
          <PostActions
            postId={post.id}
            postTitle={post.title}
            postUrl={postUrl}
            liked={liked}
            likes={likes}
            commentCount={comments.length}
            onToggleLike={toggleLike}
            onJumpToComments={() => {
              const el = document.getElementById(commentsSectionId);
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        </div>

        {/* Author card */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[var(--color-border,#E8DDD9)] bg-white p-5">
          <div
            aria-hidden="true"
            className="grid h-12 w-12 place-items-center rounded-full
              bg-[var(--color-accent,#ED9536)]/15
              font-serif text-base font-bold text-[var(--color-accent,#ED9536)]"
          >
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-primary,#74382E)]">
              {post.author.name}
            </p>
            {post.author.role && (
              <p className="text-xs text-[var(--color-muted,#756A66)]">
                {post.author.role}
              </p>
            )}
          </div>
        </div>
      </article>

      {/* =====================================================
          COMMENTS
      ====================================================== */}
      <section
        id={commentsSectionId}
        aria-labelledby="comments-heading"
        className="bg-[var(--color-soft,#F5EEEB)]"
      >
        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-[760px]">
            <h2
              id="comments-heading"
              className="font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)]"
            >
              Comments ({comments.length})
            </h2>

            <div className="mt-8 space-y-8">
              <CommentForm onSubmit={addComment} />
              <CommentList comments={comments} onDelete={deleteComment} />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          RELATED POSTS
      ====================================================== */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent,#ED9536)]">
                Keep Reading
              </p>
              <h2
                id="related-heading"
                className="mt-3 font-serif text-3xl font-semibold text-[var(--color-primary,#74382E)] sm:text-4xl"
              >
                Related posts
              </h2>
            </div>

            <Button to="/journal" variant="outline" className="group shrink-0">
              All posts
              <FiArrowUpRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>

          <ul
            role="list"
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {related.map((r) => (
              <li key={r.id}>
                <JournalCard post={r} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}