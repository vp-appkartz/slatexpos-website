import React, { useState, useEffect } from "react";
import {
  Search, Clock, ArrowRight, TrendingUp,
  LayoutGrid, Zap, Pizza, Wine, Globe, Utensils, ShoppingCart, Cpu, Heart,
} from "lucide-react";
import Contact from "../Common/CTA";
import SEO from "../Common/SEO";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../../types/blog";
import { staticBlogPosts } from "../../Data/blogData";

/* ── Category config ─────────────────────────────────────────────────── */
const blogCategories = [
  { name: "All",                slug: "all",                Icon: LayoutGrid  },
  { name: "QSR",                slug: "qsr",                Icon: Zap         },
  { name: "Pizzeria",           slug: "pizzeria",           Icon: Pizza       },
  { name: "Fine Dining",        slug: "fine-dining",        Icon: Wine        },
  { name: "Web Ordering",       slug: "web-ordering",       Icon: Globe       },
  { name: "Casual Dining",      slug: "casual-dining",      Icon: Utensils    },
  { name: "Online Ordering",    slug: "online-ordering",    Icon: ShoppingCart},
  { name: "Technology",         slug: "technology",         Icon: Cpu         },
  { name: "Customer Experience",slug: "customer-experience",Icon: Heart       },
];

/* ── Helpers ─────────────────────────────────────────────────────────── */
const estimateReadTime = (content: string) =>
  Math.max(1, Math.ceil(content.split(" ").length / 200));

const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });

/* ── Blog card ───────────────────────────────────────────────────────── */
const BlogCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({ post, onClick }) => (
  <article
    onClick={onClick}
    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/blog.png"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      {post.featured && (
        <span className="absolute top-3 left-3 flex items-center gap-1 bg-primary-300 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" /> Featured
        </span>
      )}
      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
        {post.category}
      </span>
    </div>

    {/* Body */}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <span>{formatDate(post.date || post.createdAt)}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {estimateReadTime(post.content)} min read
        </span>
      </div>
      <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors duration-200">
        {post.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400 font-medium">By {post.author}</span>
        <span className="flex items-center gap-1 text-primary-300 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
          Read More <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </article>
);

/* ── Featured card ───────────────────────────────────────────────────── */
const FeaturedCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({ post, onClick }) => (
  <article
    onClick={onClick}
    className="group relative rounded-3xl overflow-hidden cursor-pointer mb-10 bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/blog.png"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:from-transparent lg:to-white" />
      </div>
      {/* Text */}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1 bg-primary-300/10 text-primary-300 text-xs font-bold px-3 py-1.5 rounded-full border border-primary-300/20">
            <TrendingUp className="w-3 h-3" /> Featured
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
            {post.category}
          </span>
        </div>
        <h2 className="font-bold text-gray-900 text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-primary-300 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{formatDate(post.date || post.createdAt)}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {estimateReadTime(post.content)} min
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-primary-300 font-bold group-hover:gap-3 transition-all duration-200">
            Read article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  </article>
);

/* ── Main component ──────────────────────────────────────────────────── */
const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch]                     = useState("");
  const [blogs, setBlogs]                       = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs]       = useState<BlogPost[]>([]);
  const [loading, setLoading]                   = useState(true);
  const navigate = useNavigate();

  useEffect(() => { fetchBlogs(); }, [selectedCategory]);
  useEffect(() => { filterBlogs(); }, [blogs, search]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { getAllBlogs } = await import("../../services/blogService");
      const all = await getAllBlogs();
      // Merge: static posts always show; add any Firebase-only posts on top
      const staticSlugs = new Set(staticBlogPosts.map((b) => b.slug));
      const firebaseOnly = all.filter((b) => b.published && !staticSlugs.has(b.slug));
      const merged = [...staticBlogPosts, ...firebaseOnly];
      const filtered =
        selectedCategory === "All"
          ? merged
          : merged.filter((b) => b.category === selectedCategory);
      setBlogs(filtered);
    } catch {
      setBlogs(fallback());
    } finally {
      setLoading(false);
    }
  };

  const fallback = () =>
    selectedCategory === "All"
      ? staticBlogPosts
      : staticBlogPosts.filter((b) => b.category === selectedCategory);

  const filterBlogs = () => {
    if (!search.trim()) { setFilteredBlogs(blogs); return; }
    const q = search.toLowerCase();
    setFilteredBlogs(
      blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q)
      )
    );
  };

  const featuredPost = filteredBlogs.find((b) => b.featured);
  const regularPosts = filteredBlogs.filter((b) => !b.featured || search);

  return (
    <>
      <SEO
        title="POS Insights & Blog | SlateX"
        description="Stay updated with the latest trends, tips, and insights in the restaurant and retail POS industry."
        keywords="POS blog, restaurant technology, retail trends, SlateX blog"
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, #fffaf6 0%, #fafafa 45%, #f3f0ff 100%)" }}
        />
        <div
          className="absolute -top-24 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,110,77,0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 68%)", filter: "blur(60px)" }}
        />
        {/* Watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span style={{ fontSize: "clamp(72px,14vw,200px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "transparent", WebkitTextStroke: "1.5px rgba(0,0,0,0.04)", whiteSpace: "nowrap" }}>
            Blog
          </span>
        </div>
        {/* Bottom blur */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
          style={{ height: "160px", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)", background: "linear-gradient(to bottom, transparent 0%, rgba(249,249,251,0.92) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-8 rounded-full bg-primary-300" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
              Insights & Tips
            </span>
            <div className="h-[3px] w-8 rounded-full bg-primary-300" />
          </div>
          <h1
            className="font-bold text-gray-900 mb-4"
            style={{ fontSize: "clamp(28px,5vw,52px)", lineHeight: 1.18 }}
          >
            POS Insights & Resources
          </h1>
          <p className="max-w-xl text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
            Industry trends, expert advice, and practical solutions to help your restaurant thrive.
          </p>

          {/* ── Centered search bar ── */}
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300/40 focus:border-primary-300 shadow-sm transition-all duration-200 text-sm"
            />
          </div>
        </div>
      </div>

      {/* ── Glass Category Tabs ───────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-2.5">
          {blogCategories.map(({ name, Icon }) => {
            const active = selectedCategory === name;
            return (
              <button
                key={name}
                onClick={() => setSelectedCategory(name)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 whitespace-nowrap border backdrop-blur-md ${
                  active
                    ? "bg-primary-300/90 text-white border-primary-300/60 shadow-lg shadow-primary-300/25"
                    : "bg-white/60 text-gray-600 border-white/70 hover:bg-white/80 hover:text-primary-300 shadow-sm"
                }`}
                style={
                  active
                    ? { boxShadow: "0 4px 20px rgba(249,110,77,0.25), inset 0 1px 0 rgba(255,255,255,0.2)" }
                    : { boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }
                }
              >
                <Icon className={`w-4 h-4 ${active ? "text-white" : "text-gray-400"}`} />
                {name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Blog content ─────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pb-16">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-primary-300" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500 text-sm">
              {search ? "Try a different search term." : "No posts in this category yet."}
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featuredPost && !search && (
              <FeaturedCard
                post={featuredPost}
                onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              />
            )}

            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-700">{filteredBlogs.length}</span>{" "}
                article{filteredBlogs.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {(search ? filteredBlogs : regularPosts).map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Contact />
    </>
  );
};

export default BlogSection;
