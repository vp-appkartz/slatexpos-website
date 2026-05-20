import React, { useState, useEffect, useRef } from "react";
import {
  Clock, Calendar, Facebook, Twitter, Linkedin, ArrowRight, Tag,
  ArrowLeft, List,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Contact from "../Common/CTA";
import { getBlogBySlug } from "../../services/blogService";
import { BlogPost } from "../../types/blog";
import SEO from "../Common/SEO";
import { staticBlogPosts } from "../../Data/blogData";

/* ── helpers ─────────────────────────────────────────────────────────── */
const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

const estimateReadTime = (content: string) =>
  Math.max(1, Math.ceil(content.split(" ").length / 200));

/** Convert a heading string to a URL-safe anchor id */
const toAnchorId = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ── ToC entry ────────────────────────────────────────────────────────── */
interface TocEntry { level: 2 | 3; text: string; id: string; }

const extractTOC = (content: string): TocEntry[] =>
  content
    .split("\n")
    .filter((line) => /^#{2,3} /.test(line))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text  = line.replace(/^#{2,3} /, "");
      return { level, text, id: toAnchorId(text) } as TocEntry;
    });

/* ── Content renderer ─────────────────────────────────────────────────── */
const parseContent = (content: string): React.ReactNode[] => {
  // Split on blank lines (paragraph / heading boundaries)
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();

    if (trimmed.startsWith("## ")) {
      const text = trimmed.replace(/^## /, "");
      return (
        <h2
          key={i}
          id={toAnchorId(text)}
          className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28"
        >
          {text}
        </h2>
      );
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.replace(/^### /, "");
      return (
        <h3
          key={i}
          id={toAnchorId(text)}
          className="text-lg sm:text-xl font-bold text-gray-800 mt-7 mb-3 scroll-mt-28"
        >
          {text}
        </h3>
      );
    }

    // Render inline **bold** within paragraph text
    const renderInline = (raw: string) => {
      const parts = raw.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((p, j) =>
        p.startsWith("**") && p.endsWith("**")
          ? <strong key={j} className="font-semibold text-gray-900">{p.slice(2, -2)}</strong>
          : <React.Fragment key={j}>{p}</React.Fragment>
      );
    };

    return (
      <p
        key={i}
        className="text-gray-700 text-base sm:text-[17px] leading-[1.85] mb-5"
      >
        {renderInline(trimmed)}
      </p>
    );
  });
};

/* ── static fallback ─────────────────────────────────────────────────── */
const staticBlogDetails: BlogPost = staticBlogPosts[0] ?? {
  id: "1",
  title: "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
  excerpt: "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  content: `## Introduction\n\nIn today's competitive quick service restaurant landscape, maximizing profit margins is crucial.`,
  category: "QSR",
  author: "Admin",
  date: "July 5, 2023",
  imageUrl: "/blog.png",
  featured: true,
  published: true,
  createdAt: new Date("2023-07-05"),
  updatedAt: new Date("2023-07-05"),
  tags: ["POS", "QSR", "Technology"],
  slug: "boosting-profit-margins-pos-systems-qsr",
};

/* ── Component ───────────────────────────────────────────────────────── */
const BlogDetails = () => {
  const { slug }   = useParams<{ slug: string }>();
  const navigate   = useNavigate();

  const [blog, setBlog]               = useState<BlogPost | null>(null);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState<string | null>(null);
  const [email, setEmail]             = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed]   = useState(false);
  const [subError, setSubError]       = useState(false);
  const [activeId, setActiveId]       = useState<string>("");

  const contentRef = useRef<HTMLDivElement>(null);

  /* ── fetch ── */
  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      // First try static data (instant, no round-trip)
      const local = staticBlogPosts.find((b) => b.slug === slug);
      if (local) { setBlog(local); setLoading(false); return; }
      const data = await getBlogBySlug(slug!);
      if (data) { setBlog(data); }
      else      { setError("Blog post not found."); }
    } catch {
      setBlog(staticBlogDetails);
    } finally {
      setLoading(false);
    }
  };

  /* ── Scroll-spy ── */
  useEffect(() => {
    if (!blog) return;
    const toc = extractTOC(blog.content);
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [blog]);

  /* ── Subscribe handler ── */
  const handleSubscribe = async () => {
    if (!email.trim() || subscribing || subscribed) return;
    setSubscribing(true);
    setSubError(false);
    try {
      await fetch("https://devapi.slatexpos.com/web/sendDemoInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: "Newsletter",
          last_name:  "Subscriber",
          email,
          phone:      "N/A",
          company:    "Newsletter",
          message:    "Newsletter subscription request",
        }),
      });
      setSubscribed(true);
    } catch {
      setSubError(true);
    } finally {
      setSubscribing(false);
    }
  };

  /* ── Loading ── */
  if (loading) return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary-300 border-t-transparent" />
        <p className="text-gray-400 text-sm">Loading article…</p>
      </div>
    </div>
  );

  /* ── Not found ── */
  if (error || !blog) return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">📝</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Article not found</h1>
        <p className="text-gray-500 mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </div>
    </div>
  );

  const readTime = estimateReadTime(blog.content);
  const toc      = extractTOC(blog.content);

  /* ── Social share URLs ── */
  const pageUrl   = typeof window !== "undefined" ? window.location.href : "";
  const shareLinks = [
    { Icon: Facebook, label: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${pageUrl}` },
    { Icon: Twitter,  label: "Twitter",  url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${blog.title}` },
    { Icon: Linkedin, label: "LinkedIn", url: `https://linkedin.com/sharing/share-offsite/?url=${pageUrl}` },
  ];

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt || blog.title}
        keywords={blog.tags?.join(", ")}
        canonical={pageUrl}
      />

      {/* ── Hero image ────────────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[560px] overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/blog.png"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Meta overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-[calc((100%-1200px)/2+24px)] pb-8">
          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-3xl">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(blog.date || blog.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min read
            </span>
            <span>
              By <span className="text-white font-medium">{blog.author}</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Main content ── */}
          <div className="w-full lg:w-[65%]" ref={contentRef}>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-primary-300 pl-5 py-1 mb-8 bg-orange-50/50 rounded-r-xl pr-4">
              <p className="text-gray-700 text-lg font-medium leading-relaxed italic">
                {blog.excerpt}
              </p>
            </blockquote>

            {/* Body */}
            <div className="prose-sm sm:prose max-w-none">
              {parseContent(blog.content)}
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-gray-100">
                <Tag className="w-4 h-4 text-gray-400" />
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 hover:bg-orange-50 hover:text-primary-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-150 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share row (footer-style icons) */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <span className="text-sm font-semibold text-gray-600 mr-1">Share:</span>
              {shareLinks.map(({ Icon, label, url }) => (
                <button
                  key={label}
                  onClick={() => window.open(url, "_blank")}
                  className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label={`Share on ${label}`}
                >
                  <Icon className="w-4 h-4 text-gray-500 group-hover:text-primary-300" />
                </button>
              ))}
            </div>

            {/* Back to blog — bottom of article */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-300 text-sm font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </button>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-[35%] flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-5">

              {/* ── Table of Contents ── */}
              {toc.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <List className="w-4 h-4 text-primary-300" />
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                      Table of Contents
                    </h3>
                  </div>
                  <nav>
                    <ul className="space-y-0.5">
                      {toc.map(({ level, text, id }) => (
                        <li key={id}>
                          <button
                            onClick={() => {
                              const el = document.getElementById(id);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                setActiveId(id);
                              }
                            }}
                            className={`w-full text-left text-sm leading-snug py-2 transition-colors duration-150 hover:text-primary-300 ${
                              level === 3 ? "pl-4 text-[13px]" : "pl-0 font-medium"
                            } ${
                              activeId === id
                                ? "text-primary-300 font-semibold"
                                : level === 3 ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {level === 3 && (
                              <span className="inline-block w-2 h-[2px] bg-gray-300 mr-1.5 align-middle rounded-full" />
                            )}
                            {text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Article info */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-4 uppercase tracking-wide">
                  Article Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Published</span>
                    <span className="text-gray-800 font-medium">
                      {formatDate(blog.date || blog.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Category</span>
                    <span className="bg-orange-50 text-primary-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Read time</span>
                    <span className="text-gray-800 font-medium">{readTime} min</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl border border-orange-100 p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-1">Stay in the loop</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  Get the latest POS insights delivered to your inbox monthly.
                </p>

                {subscribed ? (
                  <div className="text-center py-3">
                    <span className="text-2xl mb-2 block">🎉</span>
                    <p className="text-green-600 font-semibold text-sm">You're subscribed!</p>
                    <p className="text-gray-400 text-xs mt-1">Thanks for joining us.</p>
                  </div>
                ) : (
                  <>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                      className="w-full border border-gray-200 bg-white rounded-xl py-2.5 px-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40 mb-3"
                    />
                    {subError && (
                      <p className="text-red-500 text-xs mb-2">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <button
                      onClick={handleSubscribe}
                      disabled={subscribing || !email.trim()}
                      className="w-full bg-primary-300 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                    >
                      {subscribing ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Subscribing…
                        </>
                      ) : (
                        <>
                          Subscribe <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Share (footer-style) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-4">Share this article</h3>
                <div className="flex gap-2">
                  {shareLinks.map(({ Icon, label, url }) => (
                    <button
                      key={label}
                      onClick={() => window.open(url, "_blank")}
                      className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50 flex items-center justify-center transition-all duration-200 shadow-sm"
                      aria-label={`Share on ${label}`}
                    >
                      <Icon className="w-4 h-4 text-gray-500 hover:text-primary-300" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Back to blog */}
              <button
                onClick={() => navigate("/blog")}
                className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-primary-300 text-sm font-medium py-3 rounded-xl border border-gray-200 hover:border-primary-300 bg-white transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" /> All Articles
              </button>
            </div>
          </aside>

        </div>
      </div>

      <Contact />
    </>
  );
};

export default BlogDetails;
