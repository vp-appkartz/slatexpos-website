import React, { useState } from "react";
import { ChevronDown, Calendar, User, Search, Check } from "lucide-react";
import Contact from "../Common/CTA";
import { useNavigate } from "react-router-dom";

// Pixel-perfect, responsive blog section as per the provided image
const blogCategories = [
  { name: "QSR" },
  { name: "Pizzeria" },
  { name: "Cafe n Bakery" },
  { name: "Web Ordering" },
  { name: "Casual Dining" },
  { name: "Online Ordering" },
];

const blogPosts = [
  {
    id: 1,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
  {
    id: 2,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
  {
    id: 3,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
  {
    id: 4,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
  {
    id: 5,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
  {
    id: 6,
    image: "/api/placeholder/300/200",
    category: "QSR",
    date: "July 5, 2023",
    author: "Admin",
    title:
      "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
    excerpt:
      "Discover how modern POS systems can streamline operations, reduce costs, and increase profits for QSRs.",
  },
];

const BlogSection = () => {
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("QSR");
  const navigate = useNavigate();

  // Filter posts by category and search
  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="w-full relative mt-[170px]"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 pt-12 pb-10 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Blog</h1>
          <p className="max-w-xl text-gray-700 text-md font-medium sm:text-lg mb-2">
            Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge.
          </p>
        </div>
        {/* Bottom border to match the image */}
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
          </div>
          {/* Results count */}
          <div className="text-right text-[15px] text-gray-700">
            Showing 12 of 327
          </div>
        </div>

        {/* Main Content: Grid + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200"
                >
                  {/* Image */}
                  <div className="relative rounded-t-2xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/blog.png";
                      }}
                    />
                   
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-4 text-xs text-gray-500 mb-2">
                    <span className=" bg-gray-900 text-white text-xs px-3 py-1 rounded-lg font-semibold">
                      {post.category}
                    </span>
                    <span className="text-black font-medium">{post.date}</span>
                     
                     
                    </div>
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-gray-800 mb-2  mt-3">
                      {post.title}
                    </h3>
                    
                    {/* Button */}
                    <button className="mt-3 bg-primary-300 px-4 py-2 hover:bg-primary-500 text-white text-md font-semibold  rounded-lg transition-all duration-150" onClick={() => navigate(`/blog/${post.id}`)}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
           
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
                  {/* No icon in the input as per image */}
                </div>
              </div>
              {/* Categories */}
              <div>
                <ul className="space-y-6">
                  {blogCategories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setSelectedCategory(cat.name)}
                        className="flex items-center gap-4 w-full text-left text-[18px] font-medium text-[#333] hover:text-[#333] focus:outline-none"
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
                            background: "#FF7A51",
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
                        <span className="text-md font-medium text-[#333]">
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