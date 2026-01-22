import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();


  const productLinks = [
    { name: "Restaurant POS System", slug: "restaurant-pos-system" },
    { name: "Kitchen Display", slug: "kitchen-display" },
    { name: "Payment Processing", slug: "payment-processing" },
    { name: "Reporting App", slug: "reporting-app" },
    { name: "Web Ordering", slug: "web-ordering" },
    { name: "Branded Mobile App", slug: "mobile-ordering" },
    { name: "Loyalty & Promotion", slug: "loyalty-promotion" },
    { name: "Gift Card", slug: "gift-card" },
  ];

  const industryLinks = [
    { name: "Quick-Service Restaurants (QSR)", slug: "quick-service-restaurants-qsr" },
    { name: "Casual Dining", slug: "casual-dining" },
    { name: "Full Services Restaurant", slug: "full-services-restaurant" },
    { name: "Fast Casual Restaurant", slug: "fast-casual-restaurant" },
    { name: "Food Trucks", slug: "food-trucks" },
    { name: "Pizzeria", slug: "pizzeria" },
    { name: "Café & Bakery", slug: "cafe-bakery" },
    { name: "Bars & Pubs", slug: "bars-pubs" },
  ];


  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Hardware", path: "/hardware" },
    { name: "Pricing", path: "/pricing" },
    { name: "Career", path: "/career" },
    { name: "Licenses", path: "/licenses" },
  ];


  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5 text-white" />,
      href: "https://www.facebook.com/slatexpos",
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-5 h-5 text-white" />,
      href: "https://twitter.com/slatexpos",
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-5 h-5 text-white" />,
      href: "https://www.instagram.com/slatexpos/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-white" />,
      href: "https://www.linkedin.com/company/slatexpos",
      label: "LinkedIn",
    },
  ];


  const getIndustryUrl = (title: string) => {
    return (
      "/categories/" +
      title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[()]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* SlateX Column */}
          <div className="lg:col-span-2">
            <img
              src="/logo/footer_logo.png"
              alt="SlatexPOS Logo"
              className="h-8 sm:h-10 lg:h-12 mb-5 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Serve up seamless service with SlateX POS—your all‑in‑one companion for menus, orders, and payments, complete with offline sync, cloud backups, and 24/7 support. Ready to wow your guests and grow your business? Let’s get started today
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            {/* Copyright */}

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Slatex, Inc. All rights reserved.
            </p>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product.slug}>
                  <a
                    href={`/products/${product.slug}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((industry) => (
                <li key={industry.name}>
                  <a
                    href={getIndustryUrl(industry.name)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;