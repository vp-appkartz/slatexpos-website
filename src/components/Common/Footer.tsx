import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const defaultProductLinks = [
    { name: "Restaurant POS System", url: "restaurant-pos-system" },
    { name: "Kitchen Display",       url: "kitchen-display" },
    { name: "Payment Processing",    url: "payment-processing" },
    { name: "Reporting App",         url: "reporting-app" },
    { name: "Web Ordering",          url: "web-ordering" },
    { name: "Branded Mobile App",    url: "mobile-ordering" },
    { name: "Loyalty & Promotion",   url: "loyalty-promotion" },
    { name: "Gift Card",             url: "gift-card" },
  ];

  const defaultIndustryLinks = [
    { name: "Quick-Service (QSR)",     url: "quick-service-restaurants-qsr" },
    { name: "Casual Dining",           url: "casual-dining" },
    { name: "Full-Service Restaurant", url: "full-services-restaurant" },
    { name: "Fast Casual",             url: "fast-casual-restaurant" },
    { name: "Food Trucks",             url: "food-trucks" },
    { name: "Pizzeria",                url: "pizzeria" },
    { name: "Café & Bakery",           url: "caf-and-bakery" },
    { name: "Bars & Pubs",            url: "bars-and-pubs" },
  ];

  const defaultCompanyLinks = [
    { name: "About Us",  url: "/about" },
    { name: "Hardware",  url: "/hardware" },
    { name: "Pricing",   url: "/pricing" },
    { name: "Career",    url: "/career" },
    { name: "Licenses",  url: "/licenses" },
  ];

  const socialLinks: Record<string, string> = {
    facebook:  "https://www.facebook.com/slatexpos",
    twitter:   "https://twitter.com/slatexpos",
    instagram: "https://www.instagram.com/slatexpos/",
    linkedin:  "https://www.linkedin.com/company/slatexpos",
  };

  const description = "Serve up seamless service with SlateX POS — your all-in-one companion for menus, orders, and payments, complete with offline sync, cloud backups, and 24/7 support.";

  const getProductUrl  = (url: string) => url.startsWith('/') ? url : `/products/${url}`;
  const getIndustryUrl = (url: string) => url.startsWith('/') ? url : `/categories/${url}`;

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fdf8ff 0%, #f5f3ff 35%, #eef2ff 65%, #f5f3ff 85%, #fdf8ff 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 65%)', filter: 'blur(72px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />

      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/logo/slatex_logo.png"
              alt="SlateX POS"
              className="h-8 sm:h-9 lg:h-10 mb-5 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
              {description}
            </p>

            {/* Social icons */}
            <div className="flex space-x-3 mb-8">
              {[
                { key: 'facebook',  Icon: Facebook  },
                { key: 'twitter',   Icon: Twitter   },
                { key: 'instagram', Icon: Instagram },
                { key: 'linkedin',  Icon: Linkedin  },
              ].map(({ key, Icon }) => (
                <a
                  key={key}
                  href={socialLinks[key]}
                  className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50
                    flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label={key}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4 text-gray-500 hover:text-orange-500" />
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Slatex, Inc. All rights reserved.
            </p>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-widest mb-5">Products</h3>
            <ul className="space-y-2.5">
              {defaultProductLinks.map((p) => (
                <li key={p.url}>
                  <a href={getProductUrl(p.url)}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-base font-medium">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-widest mb-5">Industries</h3>
            <ul className="space-y-2.5">
              {defaultIndustryLinks.map((i) => (
                <li key={i.name}>
                  <a href={getIndustryUrl(i.url)}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-base font-medium">
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5">
              {defaultCompanyLinks.map((c) => (
                <li key={c.name}>
                  <a href={c.url}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-base font-medium">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">Built for Canadian restaurants. Powered by SlateX.</p>
          <div className="flex gap-4">
            <a href="/privacy"  className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">Privacy</a>
            <a href="/terms"    className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">Terms</a>
            <a href="/security" className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
