import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navigate = useNavigate();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll effect to close dropdowns - ONLY for desktop
  useEffect(() => {
    const handleScroll = () => {
      // Only close dropdowns on desktop, not mobile
      if (window.innerWidth >= 1024) {
        setActiveDropdown(null);
      }
      // Don't close mobile dropdowns on scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleMobileDropdown = (dropdownName: string) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  const handleProductItemClick = (slug: string) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    navigate(`/products/${slug}`);
  };

  // New: handle category click for navigation
  const handleCategoryItemClick = (title: string) => {
    // You can customize the slug logic as needed
    // For example, convert title to kebab-case for URL
    const slug = title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[()]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setActiveDropdown(null);
    setIsMenuOpen(false);
    navigate(`/categories/${slug}`);
  };

  const productSections = [
    {
      title: "Restaurant Operations",
      items: [
        {
          image: "/prh1.png",
          title: "Restaurant POS System",
          description: "Manage, Operate orders, payments, and operations with ease, in an all-in-one, intuitive POS system.",
          slug: "restaurant-pos-system"
        },
        {
          image: "/prh2.png",
          title: "Kitchen Display",
          description: "Optimize kitchen efficiency with real-time digital order tracking and management.",
          slug: "kitchen-display"
        },
        {
          image: "/prh3.png",
          title: "Payment Processing",
          description: "Accept all major payment types securely with fast and reliable payment solutions.",
          slug: "payment-processing"
        },
        {
          image: "/prh4.png",
          title: "Reporting App",
          description: "Gain powerful insights into sales and performance with easy-to-understand reports.",
          slug: "reporting-app"
        }
      ]
    },
    {
      title: "Customer Interaction",
      items: [
        {
          image: "/prh5.png",
          title: "Web Ordering",
          description: "Let your customers order online seamlessly from your branded web platform.",
          slug: "web-ordering"
        },
        {
          image: "/prh6.png",
          title: "Branded Mobile App",
          description: "Offer a custom mobile app for convenient ordering, rewards, and direct engagement.",
          slug: "mobile-ordering"
        }
      ]
    },
    {
      title: "Marketing Operations",
      items: [
        {
          image: "/prh7.png",
          title: "Loyalty & Promotion",
          description: "Drive repeat business with tailored loyalty programs and automated promotions.",
          slug: "loyalty-promotion"
        },
        {
          image: "/prh8.png",
          title: "Gift Card",
          description: "Boost revenue and reach with flexible, easy-to-use digital and physical gift cards.",
          slug: "gift-card"
        }
      ]
    }
  ];

  const categoryItems = [
    {
      image: "/ih1.png",
      title: "Quick-Service Restaurants (QSR)",
      description: "Speed up service and manage high-volume orders effortlessly with our lightning-fast POS."
    },
    {
      image: "/ih2.png",
      title: "Casual Dining",
      description: "Deliver smooth table service with tools for order splitting, modifiers, and small fulfillment."
    },
    {
      image: "/ih3.png",
      title: "Full Services Restaurant",
      description: "Elevate guest experiences with full-service features like table management and gratuity control."
    },
    {
      image: "/ih4.png",
      title: "Fast Casual Restaurant",
      description: "Combine speed and flexibility with kiosk support, mobile ordering, and efficient workflows."
    },
    {
      image: "/ih5.png",
      title: "Food Trucks",
      description: "Go mobile with a lightweight, offline-ready POS built for fast-paced, on-the-go operations."
    },
    {
      image: "/ih6.png",
      title: "Pizzeria",
      description: "Handle custom pizzas with ease using half-and-half modifiers, toppings matrix, and combos."
    },
    {
      image: "/ih7.png",
      title: "Café & Bakery",
      description: "Simplify morning rushes with quick item selection, loyalty rewards, and kitchen sync."
    },
    {
      image: "/ih8.png",
      title: "Bars & Pubs",
      description: "Manage tabs, happy hours, and tip distribution effortlessly with bar-optimized POS features."
    }
  ];

  return (
    <>
      {/* Header with responsive spacing */}
       <div className="bg-[url('/nav-bg.png')] bg-fill bg-no-repeat">
        <div className={`transition-all duration-300 ${
-          isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-1 sm:py-2 px-4 sm:px-6 lg:px-8 xl:px-[150px]' : 'py-2 sm:py-4 px-4 sm:px-6 lg:px-8 xl:px-[150px]'
+          isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-1 sm:py-2 px-4 sm:px-6 lg:px-8 xl:px-[150px]' : 'py-2 sm:py-4 px-4 sm:px-6 lg:px-8 xl:px-[150px] mb-0'
        }`}>
          <header className={`bg-black p-2 sm:p-5 shadow-xl transition-all duration-300 ${
-            isScrolled ? 'rounded-xl sm:rounded-2xl bg-white opacity-95' : 'rounded-xl sm:rounded-2xl bg-white opacity-100'
+            isScrolled ? 'rounded-xl sm:rounded-2xl bg-white opacity-95' : 'rounded-t-xl sm:rounded-t-2xl bg-white opacity-100'
          }`}>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex items-center h-12 sm:h-14 lg:h-16">
                {/* Logo - Left side */}
                <div className="flex items-center">
                  <div className="flex items-center justify-center -ml-3 sm:-ml-5">
                    <img
                      src="/slatex-logo.png"
                      alt="SlatexPOS Logo"
                      className="h-20 object-contain sm:h-10 lg:h-20 w-auto cursor-pointer"
                      onClick={() => navigate('/')}
                    />
                  </div>
                </div>

                {/* Space between logo and menu */}
                <div className="w-20 sm:w-5"></div>
                <div className="w-20 sm:w-5"></div>

                {/* Navigation - Desktop only */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1">
                  {/* Products Dropdown */}
                  <div className="relative dropdown-container">
                    <button 
                      onClick={() => handleDropdownClick('products')}
                      className="text-black text-lg  transition-colors duration-200 flex items-center space-x-1 font-medium py-2 "
                    >
                      <span>Products</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === 'products' ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>

                  {/* Categories Dropdown */}
                  <div className="relative dropdown-container">
                    <button 
                      onClick={() => handleDropdownClick('categories')}
                      className="text-black text-lg  transition-colors duration-200 flex items-center space-x-1 font-medium py-2 "
                    >
                      <span>Industries</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === 'categories' ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>

                  <button className="text-black text-lg transition-colors duration-200 font-medium py-2">
                    Hardware
                  </button>

                  {/* Pricing */}
                  <button className="text-black text-lg transition-colors duration-200 font-medium py-2" onClick={() => navigate('/pricing')}>
                    Pricing
                  </button>

                  <button className="text-black text-lg transition-colors duration-200 font-medium py-2">
                    Blogs
                  </button>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
                  {/* Get a Demo Button - Hidden on mobile */}
                  <button className="hidden sm:block relative group bg-white text-primary-300 px-4 lg:px-4 py-3 rounded-lg border border-primary-300 transition-all duration-300 font-semibold overflow-hidden hover:text-white text-sm lg:text-2xl">
                    <div className="absolute inset-0 bg-primary-300 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></div>
                    <span className="relative z-10">Get a Demo</span>
                  </button>

                  {/* Mobile menu button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                      <Menu className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                        isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                      }`} />
                      <X className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${
                        isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                      }`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile Navigation - FIXED: Prevent scroll from closing dropdowns */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="py-4 border-t border-gray-200 max-h-96 overflow-y-auto">
                  <div className="flex flex-col space-y-1">
                    {/* Products Mobile Dropdown */}
                    <div>
                      <button 
                        onClick={() => handleMobileDropdown('products')}
                        className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-between py-3 px-4 rounded-lg text-left w-full"
                      >
                        <span className="font-medium">Products</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdown === 'products' ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Products Submenu - FIXED: Larger icons */}
                      {mobileDropdown === 'products' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {productSections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="border-l-2 border-orange-200 pl-4 py-2">
                              <h4 className="text-primary-300 font-semibold text-xs uppercase tracking-wide mb-2">
                                {section.title}
                              </h4>
                              {section.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start space-x-3 py-2 cursor-pointer"
                                  onClick={() => handleProductItemClick(item.slug)}
                                >
                                  <div className="mt-1 w-8 h-8 flex-shrink-0">
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="w-8 h-8 object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-gray-900 text-sm">
                                      {item.title}
                                    </h5>
                                    <p className="text-xs text-gray-600 mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Categories Mobile Dropdown */}
                    <div>
                      <button 
                        onClick={() => handleMobileDropdown('categories')}
                        className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-between py-3 px-4 rounded-lg text-left w-full"
                      >
                        <span className="font-medium">Categories</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdown === 'categories' ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Categories Submenu - FIXED: Larger icons */}
                      {mobileDropdown === 'categories' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {categoryItems.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 py-2 border-l-2 border-orange-200 pl-4 cursor-pointer"
                              onClick={() => handleCategoryItemClick(item.title)}
                            >
                              <div className="mt-1 w-8 h-8 flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                              <div>
                                <h5 className="font-semibold text-black text-sm">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-black mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Pricing */}
                    <button className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg text-left w-full">
                      <span className="font-medium">Pricing</span>
                    </button>
                    
                    {/* Mobile Get Demo Button */}
                    <div className="px-4 py-3">
                      <button className="relative group bg-white text-primary-300 px-6 py-3 rounded-full border border-primary-300 transition-all duration-300 font-medium w-full overflow-hidden hover:text-white">
                        <div className="absolute inset-0 bg-primary-300 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></div>
                        <span className="relative z-10">Get a Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Desktop Products Mega Menu - FIXED: Larger icons */}
        {activeDropdown === 'products' && (
          <div className={`fixed top-[85px] left-0 right-0 p-10 z-40  min-h-screen ${
            isScrolled ? 'pt-18 sm:pt-20' : 'pt-20 sm:pt-24'
          }`} onClick={() => setActiveDropdown(null)}>
            <div className="px-4 sm:px-6">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Product Sections - 2 columns, Let's Talk in 3rd */}
                    {/* Column 1: Restaurant Operations */}
                    <div>
                      {(() => {
                        const section = productSections.find(s => s.title === 'Restaurant Operations');
                        if (!section) return null;
                        return (
                          <>
                            <h3 className="text-primary-300 font-semibold text-sm uppercase tracking-wide mb-4">
                              {section.title}
                            </h3>
                            <div className="space-y-4">
                              {section.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start space-x-3 group cursor-pointer"
                                  onClick={() => handleProductItemClick(item.slug)}
                                >
                                  <div className="mt-1 group-hover:scale-110 transition-transform duration-200 w-10 h-10 flex-shrink-0">
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="w-8 h-8 object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-sm text-gray-black group-hover:text-primary-300 transition-colors duration-200">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-black mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    {/* Column 2: Customer Interaction, then Marketing Operations */}
                    <div>
                      {(() => {
                        const customerSection = productSections.find(s => s.title === 'Customer Interaction');
                        const marketingSection = productSections.find(s => s.title === 'Marketing Operations');
                        return (
                          <>
                            {customerSection && (
                              <>
                                <h3 className="text-primary-300 font-semibold text-sm uppercase tracking-wide mb-4">
                                  {customerSection.title}
                                </h3>
                                <div className="space-y-4 mb-8">
                                  {customerSection.items.map((item, itemIndex) => (
                                    <div
                                      key={itemIndex}
                                      className="flex items-start space-x-3 group cursor-pointer"
                                      onClick={() => handleProductItemClick(item.slug)}
                                    >
                                      <div className="mt-1 group-hover:scale-110 transition-transform duration-200 w-10 h-10 flex-shrink-0">
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          className="w-8 h-8 object-contain"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-sm text-black group-hover:text-primary-300 transition-colors duration-200">
                                          {item.title}
                                        </h4>
                                        <p className="text-xs text-black mt-1">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                            {marketingSection && (
                              <>
                                <h3 className="text-primary-300 font-semibold text-sm uppercase tracking-wide mb-4">
                                  {marketingSection.title}
                                </h3>
                                <div className="space-y-4">
                                  {marketingSection.items.map((item, itemIndex) => (
                                    <div
                                      key={itemIndex}
                                      className="flex items-start space-x-3 group cursor-pointer"
                                      onClick={() => handleProductItemClick(item.slug)}
                                    >
                                      <div className="mt-1 group-hover:scale-110 transition-transform duration-200 w-10 h-10 flex-shrink-0">
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          className="w-8 h-8 object-contain"
                                        />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-sm text-black group-hover:text-primary-300 transition-colors duration-200">
                                          {item.title}
                                        </h4>
                                        <p className="text-xs text-black mt-1">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </>
                        );
                      })()}
                    </div>
                    {/* Column 3: Let's Talk */}
                    <div className="bg-orange-50 text-sm rounded-lg p-4 sm:p-6 h-fit">
                      <div className="flex items-center space-x-2 mb-4">
                        <Phone className="w-5 h-5 text-primary-300" />
                        <h3 className="font-semibold text-gray-900">Let's Talk</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">
                        Have questions or need assistance? We're just a message away.
                      </p>
                      <button className="bg-primary-300 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 font-medium w-full flex items-center justify-center space-x-2">
                        <span>Get a Free Consultant</span>
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Categories Mega Menu - FIXED: Larger icons */}
        {activeDropdown === 'categories' && (
          <div className={`fixed top-[85px] left-0 right-0 z-40  ${
            isScrolled ? 'pt-16 sm:pt-20' : 'pt-20 sm:pt-24'
          }`} onClick={() => setActiveDropdown(null)}>
            <div className="px-4 sm:px-6">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Categories Grid */}
                    <div className="lg:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categoryItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 group cursor-pointer"
                            onClick={() => handleCategoryItemClick(item.title)}
                          >
                            <div className="mt-1 group-hover:scale-110 transition-transform duration-200 w-10 h-10 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-black group-hover:text-primary-300 transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="text-xs text-black mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Let's Talk Section */}
                    <div className="bg-orange-50 text-sm rounded-lg p-4 sm:p-6 h-fit">
                      <div className="flex items-center space-x-2 mb-4">
                        <Phone className="w-5 h-5 text-primary-300" />
                        <h3 className="font-semibold text-gray-900">Let's Talk</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">
                        Have questions or need assistance? We're just a message away.
                      </p>
                      <button className="bg-primary-300 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 font-medium w-full flex items-center justify-center space-x-2">
                        <span>Get a Free Consultant</span>
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;