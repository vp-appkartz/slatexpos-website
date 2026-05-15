import React, { useState, useEffect } from "react";
import { ChevronDown, Calendar, User, Search, Check } from "lucide-react";
import Contact from "../Common/CTA";
import SEO from "../Common/SEO";
import { useNavigate } from "react-router-dom";
import { getPublishedBlogs, getBlogsByCategory } from "../../services/blogService";
import { BlogPost } from "../../types/blog";

// Blog categories matching the Firebase data structure
const blogCategories = [
  { name: "All", slug: "all" },
  { name: "QSR", slug: "qsr" },
  { name: "Pizzeria", slug: "pizzeria" },
  { name: "Cafe n Bakery", slug: "cafe-n-bakery" },
  { name: "Web Ordering", slug: "web-ordering" },
  { name: "Casual Dining", slug: "casual-dining" },
  { name: "Online Ordering", slug: "online-ordering" },
  { name: "Technology", slug: "technology" },
  { name: "Customer Experience", slug: "customer-experience" },
];

// Fallback static blog posts (your original design)
const staticBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt: "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
    content: "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs through advanced analytics and automation.",
    category: "QSR",
    author: "Admin",
    date: "July 5, 2023",
    imageUrl: "/blog.png",
    featured: true,
    published: true,
    createdAt: new Date("2023-07-05"),
    updatedAt: new Date("2023-07-05"),
    tags: ["POS", "QSR", "Technology"],
    slug: "boosting-profit-margins-pos-systems-qsr"
  },
  {
    id: "2",
    title: "The Future of Restaurant Technology: AI-Powered POS Systems",
    excerpt: "Explore how artificial intelligence is revolutionizing restaurant operations through intelligent POS systems.",
    content: "Artificial Intelligence is transforming the restaurant industry, and POS systems are at the forefront of this technological revolution.",
    category: "Technology",
    author: "Admin",
    date: "July 4, 2023",
    imageUrl: "/blog.png",
    featured: false,
    published: true,
    createdAt: new Date("2023-07-04"),
    updatedAt: new Date("2023-07-04"),
    tags: ["AI", "Technology", "POS"],
    slug: "future-restaurant-technology-ai-pos"
  },
  {
    id: "3",
    title: "Maximizing Customer Satisfaction Through Digital Ordering",
    excerpt: "Learn how digital ordering platforms enhance customer experience while increasing operational efficiency.",
    content: "Digital ordering has become a cornerstone of modern restaurant operations, fundamentally changing how customers interact with food service businesses.",
    category: "Customer Experience",
    author: "Admin",
    date: "July 3, 2023",
    imageUrl: "/blog.png",
    featured: false,
    published: true,
    createdAt: new Date("2023-07-03"),
    updatedAt: new Date("2023-07-03"),
    tags: ["Digital Ordering", "Customer Experience"],
    slug: "maximizing-customer-satisfaction-digital-ordering"
  },
  {
    id: "4",
    title: "Pizza Restaurant POS: Streamlining Operations for Better Service",
    excerpt: "Optimize your pizzeria operations with specialized POS features designed for pizza restaurants.",
    content: "Pizza restaurants have unique operational needs that require specialized POS system features to maximize efficiency and customer satisfaction.",
    category: "Pizzeria",
    author: "Admin",
    date: "July 2, 2023",
    imageUrl: "/blog.png",
    featured: false,
    published: true,
    createdAt: new Date("2023-07-02"),
    updatedAt: new Date("2023-07-02"),
    tags: ["Pizza", "POS", "Operations"],
    slug: "pizza-restaurant-pos-streamlining-operations"
  },
  {
    id: "5",
    title: "Cafe & Bakery Management: Essential POS Features",
    excerpt: "Discover the key POS features that help cafes and bakeries manage inventory, orders, and customer relationships.",
    content: "Cafes and bakeries require specialized point-of-sale solutions that can handle their unique inventory management and customer service needs.",
    category: "Cafe n Bakery",
    author: "Admin",
    date: "July 1, 2023",
    imageUrl: "/blog.png",
    featured: false,
    published: true,
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2023-07-01"),
    tags: ["Cafe", "Bakery", "Management"],
    slug: "cafe-bakery-management-pos-features"
  },
  {
    id: "6",
    title: "Web Ordering Integration: Seamless Online-to-Kitchen Workflow",
    excerpt: "Learn how to integrate web ordering systems with your POS for a seamless operation from order to delivery.",
    content: "Web ordering integration has become essential for restaurants looking to expand their reach and provide customers with convenient ordering options.",
    category: "Web Ordering",
    author: "Admin",
    date: "June 30, 2023",
    imageUrl: "/blog.png",
    featured: false,
    published: true,
    createdAt: new Date("2023-06-30"),
    updatedAt: new Date("2023-06-30"),
    tags: ["Web Ordering", "Integration", "Workflow"],
    slug: "web-ordering-integration-seamless-workflow"
  }
];

const BlogSection = () => {
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  useEffect(() => {
    filterAndSortBlogs();
  }, [blogs, search, selectedSort]);

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      // Try to fetch from Firebase first
      let blogData: BlogPost[] = [];

      // Import the getAllBlogs function to get both published and draft blogs for debugging
      const { getAllBlogs } = await import('../../services/blogService');

      if (selectedCategory === "All") {
        // Get all blogs (including drafts) for debugging
        const allBlogs = await getAllBlogs();
        console.log('All blogs (including drafts):', allBlogs);

        // Filter to only published blogs
        blogData = allBlogs.filter(blog => blog.published);
        console.log('Published blogs only:', blogData);
      } else {
        blogData = await getBlogsByCategory(selectedCategory);
      }

      console.log('Firebase blogs fetched:', blogData.length, blogData);

      setBlogs(blogData);
    } catch (firebaseError) {
      console.error('Firebase fetch failed:', firebaseError);

      // Fallback to static data on error
      console.log('Firebase error, using static fallback blog data');
      const fallbackData = selectedCategory === "All"
        ? staticBlogPosts
        : staticBlogPosts.filter(blog => blog.category === selectedCategory);

      setBlogs(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortBlogs = () => {
    let filtered = blogs;

    // Filter by search term
    if (search) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        blog.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort blogs
    filtered = [...filtered].sort((a, b) => {
      switch (selectedSort) {
        case "Newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "Oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "Popular":
          // For now, sort by featured status, then by date
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredBlogs(filtered);
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEO
        title="POS Insights & Blog | SlateX"
        description="Stay updated with the latest trends, tips, and insights in the restaurant and retail POS industry."
        keywords="POS blog, restaurant technology, retail trends, SlateX blog"
      />
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <div
          className="w-full relative"
          style={{
            backgroundImage: "url(/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-2 sm:px-4 pt-32 sm:pt-36 pb-10 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Blog</h1>
            <p className="max-w-xl text-gray-700 text-md font-medium sm:text-lg mb-2">
              Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge.
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-8">
          {/* Top Bar: Sort and Results */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Sort by:</span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-transparent border-none text-[15px] font-semibold pr-6 pl-1 py-1 focus:outline-none cursor-pointer"
                  style={{ minWidth: 80 }}
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Popular">Popular</option>
                </select>
                <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
              </div>

              {/* Refresh Button */}
              <button
                onClick={() => fetchBlogs()}
                className="ml-4 px-3 py-1 bg-primary-300 hover:bg-primary-400 text-white text-sm font-medium rounded-md transition-colors duration-200"
              >
                Refresh
              </button>
            </div>
            {/* Results count */}
            <div className="text-right text-[15px] text-gray-700">
              Showing {filteredBlogs.length} of {blogs.length} posts
            </div>
          </div>

          {/* Main Content: Grid + Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Grid */}
            <div className="w-full lg:w-3/4">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-300"></div>
                </div>
              ) : filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
                  {filteredBlogs.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      {/* Image */}
                      <div className="relative rounded-t-2xl overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/blog.png";
                          }}
                        />
                        {post.featured && (
                          <div className="absolute top-3 left-3 bg-primary-300 text-white text-xs px-2 py-1 rounded-md font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      {/* Content */}
                      <div className="p-5">
                        {/* Meta */}
                        <div className="flex items-center justify-between gap-4 text-xs text-gray-500 mb-2">
                          <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg font-semibold">
                            {post.category}
                          </span>
                          <span className="text-black font-medium">{formatDate(post.date || post.createdAt)}</span>
                        </div>
                        {/* Title */}
                        <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-3 line-clamp-2">
                          {post.title}
                        </h3>
                        {/* Excerpt */}
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        {/* Button */}
                        <button
                          className="mt-3 bg-primary-300 px-4 py-2 hover:bg-primary-500 text-white text-md font-semibold rounded-lg transition-all duration-150"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/blog/${post.slug}`);
                          }}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
                  <p className="text-gray-600">
                    {search
                      ? 'Try adjusting your search criteria'
                      : 'No blog posts available in this category'
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 flex-shrink-0">
              <div
                className="bg-white border border-gray-200 rounded-2xl px-4 py-5 sm:px-5 sm:py-6 mb-6"
                style={{
                  minWidth: 0,
                  maxWidth: 340,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {/* Search */}
                <div className="mb-7">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg py-[13px] pl-4 pr-3 text-[15px] text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300"
                      style={{
                        fontWeight: 400,
                        fontFamily: "inherit",
                        boxShadow: "none",
                        height: 44,
                      }}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <ul className="space-y-6">
                    {blogCategories.map((cat) => (
                      <li key={cat.name}>
                        <button
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`flex items-center gap-4 w-full text-left text-[18px] font-medium hover:text-[#333] focus:outline-none transition-colors duration-200 ${selectedCategory === cat.name ? 'text-primary-300' : 'text-[#333]'
                            }`}
                          style={{
                            fontFamily: "inherit",
                            fontWeight: 500,
                            letterSpacing: 0,
                            padding: 0,
                          }}
                        >
                          <span
                            className="flex items-center justify-center w-8 h-8 rounded-full"
                            style={{
                              background: selectedCategory === cat.name ? "#F96E4D" : "#FF7A51",
                              minWidth: 32,
                              minHeight: 32,
                            }}
                          >
                            <Check
                              className="w-5 h-5"
                              color="#fff"
                              strokeWidth={2.5}
                            />
                          </span>
                          <span className="text-md font-medium">
                            {cat.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default BlogSection;
