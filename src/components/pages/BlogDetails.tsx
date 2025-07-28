import React, { useState } from "react";
import { Search, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import Contact from "../Common/CTA";
import { blogContent, tableOfContents } from "../../Data/blogContent";

const BlogDetails = () => {
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  return (
    
      <div className="w-full min-h-screen bg-white">
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
               
                <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 leading-tight">
                  {blogContent.title}
                </h1>
                <div className="mt-5">
                  <span className="text-sm text-gray-500 font-medium">{blogContent.date}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500 font-medium">{blogContent.category}</span>
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
                  src={blogContent.heroImage}
                  alt="Pizza Delivery App on Tablet"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/blog.png";
                  }}
                />
              </div>

              {/* Blog Content Sections */}
              {blogContent.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                    {section.heading}
                  </h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
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
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      

  );
};

export default BlogDetails; 