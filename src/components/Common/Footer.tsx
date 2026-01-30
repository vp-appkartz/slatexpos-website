import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { subscribeToFooterData, FooterData } from '../../services/firestoreService';

const Footer = () => {
  const navigate = useNavigate();
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToFooterData((data) => {
      setFooterData(data);
    });
    return () => unsubscribe();
  }, []);

  // Default data (fallback)
  const defaultProductLinks = [
    { name: "Restaurant POS System", url: "restaurant-pos-system" },
    { name: "Kitchen Display", url: "kitchen-display" },
    { name: "Payment Processing", url: "payment-processing" },
    { name: "Reporting App", url: "reporting-app" },
    { name: "Web Ordering", url: "web-ordering" },
    { name: "Branded Mobile App", url: "mobile-ordering" },
    { name: "Loyalty & Promotion", url: "loyalty-promotion" },
    { name: "Gift Card", url: "gift-card" },
  ];

  const defaultIndustryLinks = [
    { name: "Quick-Service Restaurants (QSR)", url: "quick-service-restaurants-qsr" },
    { name: "Casual Dining", url: "casual-dining" },
    { name: "Full Services Restaurant", url: "full-services-restaurant" },
    { name: "Fast Casual Restaurant", url: "fast-casual-restaurant" },
    { name: "Food Trucks", url: "food-trucks" },
    { name: "Pizzeria", url: "pizzeria" },
    { name: "Café & Bakery", url: "cafe-bakery" },
    { name: "Bars & Pubs", url: "bars-pubs" },
  ];

  const defaultCompanyLinks = [
    { name: "About us", url: "/about" },
    { name: "Hardware", url: "/hardware" },
    { name: "Pricing", url: "/pricing" },
    { name: "Career", url: "/career" },
    { name: "Licenses", url: "/licenses" },
  ];

  const socialLinksMap = [
    { key: 'facebook', icon: <Facebook className="w-5 h-5 text-white" />, label: "Facebook" },
    { key: 'twitter', icon: <Twitter className="w-5 h-5 text-white" />, label: "Twitter" },
    { key: 'instagram', icon: <Instagram className="w-5 h-5 text-white" />, label: "Instagram" },
    { key: 'linkedin', icon: <Linkedin className="w-5 h-5 text-white" />, label: "LinkedIn" },
  ];

  const productLinks = footerData?.productLinks?.length ? footerData.productLinks : defaultProductLinks;
  const industryLinks = footerData?.industryLinks?.length ? footerData.industryLinks : defaultIndustryLinks;
  const companyLinks = footerData?.companyLinks?.length ? footerData.companyLinks : defaultCompanyLinks;
  const description = footerData?.description || "Serve up seamless service with SlateX POS—your all‑in‑one companion for menus, orders, and payments, complete with offline sync, cloud backups, and 24/7 support. Ready to wow your guests and grow your business? Let’s get started today";

  const getIndustryUrl = (url: string) => {
    if (url.startsWith('/')) return url;
    if (url.includes('categories/')) return url;
    // If it looks like a slug
    return "/categories/" + url;
  };

  const getProductUrl = (url: string) => {
    if (url.startsWith('/')) return url;
    if (url.includes('products/')) return url;
    // If it looks like a slug
    return "/products/" + url;
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
              {description}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {socialLinksMap.map((item) => {
                const href = footerData?.socialLinks?.[item.key as keyof typeof footerData.socialLinks];
                // If we have data but no link for this social, skip it? Or just #?
                // Let's use the provided one if available, otherwise default hardcoded ones might be confusing if they cant change them.
                // Actually, let's just render if it exists.
                if (!href) return null;

                return (
                  <a
                    key={item.label}
                    href={href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                );
              })}
              {/* Fallback if no footerData is loaded yet, show defaults? 
                  The above logic will show nothing if footerData is null.
                  Let's handle the initial state better.
              */}
              {!footerData && socialLinksMap.map((item) => {
                // Hardcoded defaults for pre-load state or empty DB
                const defaults: any = {
                  facebook: "https://www.facebook.com/slatexpos",
                  twitter: "https://twitter.com/slatexpos",
                  instagram: "https://www.instagram.com/slatexpos/",
                  linkedin: "https://www.linkedin.com/company/slatexpos"
                };
                return (
                  <a
                    key={item.label}
                    href={defaults[item.key]}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                );
              })}
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
                <li key={product.url}>
                  <a
                    href={getProductUrl(product.url)}
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
                    href={getIndustryUrl(industry.url)}
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
                    href={company.url}
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