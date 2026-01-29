import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Contact from "../Common/CTA";
import { getBlogBySlug } from "../../services/blogService";
import { BlogPost } from "../../types/blog";
import SEO from "../Common/SEO";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // Static fallback blog data
  const staticBlogDetails = {
    id: "1",
    title: "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt: "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
    content: `In today's competitive quick service restaurant (QSR) landscape, maximizing profit margins is crucial for sustained success. Point of Sale (POS) systems have evolved far beyond simple transaction processing to become powerful business intelligence tools that can significantly impact your bottom line.

Modern POS systems offer comprehensive analytics that help restaurant owners understand their business better. From tracking peak hours to identifying best-selling items, these insights enable data-driven decisions that directly impact profitability.

Labor costs typically represent 25-35% of a QSR's total expenses. Smart POS systems help optimize labor scheduling by analyzing historical sales data and predicting busy periods. This ensures you have the right number of staff at the right times, reducing both labor costs and customer wait times.

Inventory management is another critical area where POS systems excel. Real-time inventory tracking helps prevent overstocking and reduces waste, while automated reordering ensures you never run out of popular items. This level of control can reduce food costs by 3-5%.

Customer data collection through POS systems enables targeted marketing campaigns and loyalty programs. By understanding customer preferences and ordering patterns, restaurants can create personalized offers that drive repeat business and increase average order values.

Integration capabilities of modern POS systems allow seamless connection with other business tools like accounting software, online ordering platforms, and delivery services. This reduces manual work and potential errors while providing a unified view of your business operations.

The return on investment for a quality POS system typically pays for itself within 12-18 months through improved efficiency, reduced waste, and increased sales. For QSRs looking to stay competitive and profitable, investing in the right POS technology is no longer optional—it's essential.`,
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
  };

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try Firebase first
      try {
        const blogData = await getBlogBySlug(slug!);
        console.log('Firebase blog fetched:', blogData?.title || 'not found');

        if (blogData) {
          setBlog(blogData);
        } else {
          // If not found in DB, do not use static fallback, let it show "Not Found"
          setBlog(null);
          setError("Blog post not found.");
        }
      } catch (firebaseError) {
        console.warn('Firebase fetch failed:', firebaseError);
        // Fallback to static data ONLY on error
        setBlog(staticBlogDetails);
      }

    } catch (error) {
      console.error('Error fetching blog:', error);
      setBlog(staticBlogDetails);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Split content into paragraphs and format
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
        {paragraph}
      </p>
    ));
  };

  const generateTableOfContents = (content: string) => {
    // Extract headings from content (assuming they start with # or are in <h> tags)
    const headings = content.split('\n').filter(line =>
      line.startsWith('#') || line.toLowerCase().includes('<h')
    );

    if (headings.length === 0) {
      return [
        "Introduction",
        "Key Points",
        "Benefits",
        "Implementation",
        "Conclusion"
      ];
    }

    return headings.map(heading =>
      heading.replace(/^#+\s*/, '').replace(/<\/?h[1-6][^>]*>/gi, '')
    ).slice(0, 5);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-300"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-primary-300 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const tableOfContents = generateTableOfContents(blog.content);

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title={blog.title}
        description={blog.excerpt || blog.title}
        keywords={blog.tags.join(', ')}
        canonical={window.location.href}
      />
      {/* Hero Section with gradient background */}
      <div className="w-full relative mt-[250px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 -mt-32 relative z-10">
          {/* Blog Header */}
          <div
            className="bg-white p-6 sm:p-8 mb-8 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-80 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg font-semibold">
                  {blog.category}
                </span>
                {blog.featured && (
                  <span className="bg-primary-300 text-white text-sm px-3 py-1 rounded-lg font-semibold">
                    Featured
                  </span>
                )}
                {blog.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 leading-tight">
                {blog.title}
              </h1>
              <div className="mt-5">
                <span className="text-sm text-gray-500 font-medium">
                  {formatDate(blog.date || blog.createdAt)}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500 font-medium">by {blog.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/blog.png";
                }}
              />
            </div>

            {/* Blog Content */}
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                  {blog.excerpt}
                </h2>
                {formatContent(blog.content)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-primary-300 px-5 py-4">
                  <h3 className="text-white font-bold text-lg">Table of Content</h3>
                </div>
                <div className="bg-gray-50 p-5">
                  <ol className="space-y-3">
                    {tableOfContents.map((item, index) => (
                      <li key={index} className="text-gray-800 font-medium">
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-pink-100 px-5 py-4">
                  <h3 className="text-gray-800 font-medium text-lg">Sign up for our monthly newsletter</h3>
                </div>
                <div className="p-5">
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 mb-3"
                  />
                  <button className="w-full bg-primary-300 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    Subscribe Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-800 font-bold text-lg mb-4">Share blog on</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                    className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`, '_blank')}
                    className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                    className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default BlogDetails;
