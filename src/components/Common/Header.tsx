import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DemoModal from './DemoModal';
import { subscribeToHeaderData, HeaderData } from '../../services/firestoreService';

/* ─── SVG icon container — always crisp, never blurry ──────────── */
const ItemIcon: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 p-2">
    <img src={image} alt={title} className="w-full h-full object-contain" />
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen,       setIsMenuOpen]       = useState(false);
  const [activeDropdown,   setActiveDropdown]   = useState<string | null>(null);
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [mobileDropdown,   setMobileDropdown]   = useState<string | null>(null);
  const [isDemoModalOpen,  setIsDemoModalOpen]  = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 1024) setActiveDropdown(null); };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.dropdown-container')) setActiveDropdown(null);
    };
    document.addEventListener('click', h);
    return () => document.removeEventListener('click', h);
  }, []);

  const handleDropdownClick    = (n: string) => setActiveDropdown(activeDropdown === n ? null : n);
  const handleMobileDropdown   = (n: string) => setMobileDropdown(mobileDropdown === n ? null : n);
  const handleProductItemClick = (slug: string) => { setActiveDropdown(null); setIsMenuOpen(false); navigate(`/products/${slug}`); };
  const handleCategoryItemClick = (title: string) => {
    const slug = title.toLowerCase().replace(/&/g,'and').replace(/[()]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
    setActiveDropdown(null); setIsMenuOpen(false); navigate(`/categories/${slug}`);
  };

  /* ── Default Products data ── */
  const defaultProductSections = [
    {
      title: 'Restaurant Operations',
      items: [
        { image: '/icons/Restuarant POS System.svg',    title: 'Restaurant POS System',  description: 'All-in-one POS for orders, payments & operations.',         slug: 'restaurant-pos-system' },
        { image: '/icons/Kitchen Display System.svg',   title: 'Kitchen Display',         description: 'Real-time digital order tracking for your kitchen.',         slug: 'kitchen-display' },
        { image: '/icons/Payment Processing.svg',       title: 'Payment Processing',      description: 'Accept all major payment types, fast & secure.',             slug: 'payment-processing' },
        { image: '/icons/Reporting App.svg',            title: 'Reporting App',           description: 'Powerful insights into sales & performance.',                slug: 'reporting-app' },
      ],
    },
    {
      title: 'Customer Interaction',
      items: [
        { image: '/icons/Web Ordering.svg',             title: 'Web Ordering',            description: 'Zero-commission orders from your branded website.',          slug: 'web-ordering' },
        { image: '/icons/Branded Mobile App.svg',       title: 'Branded Mobile App',      description: 'Custom app for ordering, rewards & direct engagement.',      slug: 'mobile-ordering' },
      ],
    },
    {
      title: 'Marketing Operations',
      items: [
        { image: '/icons/Loyalty & Promotions.svg',     title: 'Loyalty & Promotion',     description: 'Tailored loyalty programs & automated promotions.',          slug: 'loyalty-promotion' },
        { image: '/icons/Giftcard.svg',                 title: 'Gift Card',               description: 'Digital & physical gift cards to boost revenue.',            slug: 'gift-card' },
      ],
    },
  ];

  /* ── Default Industries data ── */
  const defaultCategoryItems = [
    { image: '/icons/Quick Serve Resturants (QSR).svg', title: 'Quick-Service (QSR)',     description: 'Speed & accuracy for high-volume counters.' },
    { image: '/icons/Casual Dining.svg',                title: 'Casual Dining',           description: 'Order splitting, modifiers & smooth table service.' },
    { image: '/icons/Full Serve Restaurant.svg',        title: 'Full-Service Restaurant', description: 'Table management, floor layout & gratuity tools.' },
    { image: '/icons/Fast Casual Restaurant.svg',       title: 'Fast Casual',             description: 'Kiosk support, mobile ordering & fast workflows.' },
    { image: '/icons/Food Trucks.svg',                  title: 'Food Trucks',             description: 'Lightweight, offline-ready POS for on-the-go.' },
    { image: '/icons/Pizzeria.svg',                     title: 'Pizzeria',                description: 'Half-and-half toppings, modifiers & combos.' },
    { image: '/icons/Cafe & Bakery.svg',                title: 'Café & Bakery',           description: 'Quick item selection, loyalty & kitchen sync.' },
    { image: '/icons/Bars & Pubs.svg',                  title: 'Bars & Pubs',             description: 'Tabs, happy hours & tip distribution made easy.' },
  ];

  const [headerData, setHeaderData] = useState<HeaderData>({
    productSections: defaultProductSections,
    categoryItems:   defaultCategoryItems,
  });

  useEffect(() => {
    const unsub = subscribeToHeaderData((data) => { if (data) setHeaderData(data); });
    return () => unsub();
  }, []);

  const { productSections, categoryItems } = headerData;

  /* ── "Book a Demo" CTA panel (reused in both dropdowns) ── */
  const DemoCTA = () => (
    <div className="bg-orange-50 rounded-2xl p-5 h-fit border border-orange-100">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
          <Phone className="w-4 h-4 text-primary-300" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">Let's Talk</h3>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        Have questions or need assistance? We're just a message away.
      </p>
      <button
        onClick={() => { setActiveDropdown(null); setIsDemoModalOpen(true); }}
        className="bg-primary-300 hover:bg-orange-600 text-white px-5 py-3 rounded-xl
          transition-all duration-200 font-semibold w-full text-sm
          hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
      >
        Book a Free Demo
      </button>
    </div>
  );

  return (
    <>
      <div className="bg-[url('/nav-bg.png')] bg-fill bg-no-repeat overflow-x-hidden">
        <div className={`transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 py-1 sm:py-2 px-2 sm:px-6 lg:px-8 xl:px-[150px]'
            : 'py-2 sm:py-4 px-2 sm:px-6 lg:px-8 xl:px-[150px]'
        }`}>
          <header className={`bg-white shadow-xl transition-all duration-300 w-full p-2 sm:p-5 ${
            isScrolled ? 'rounded-xl sm:rounded-2xl opacity-95' : 'rounded-xl sm:rounded-2xl opacity-100'
          }`}>
            <div className="w-full">
              <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">

                {/* Logo */}
                <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                  <img src="/logo/slatex_logo.png" alt="SlateX POS" className="h-5 sm:h-6 lg:h-8 object-contain w-auto mb-1" />
                </div>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
                  <div className="relative dropdown-container">
                    <button onClick={() => handleDropdownClick('products')}
                      className="text-black text-lg font-medium flex items-center gap-1 py-2">
                      Products
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className="relative dropdown-container">
                    <button onClick={() => handleDropdownClick('categories')}
                      className="text-black text-lg font-medium flex items-center gap-1 py-2">
                      Industries
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <button className="text-black text-lg font-medium py-2" onClick={() => navigate('/hardware')}>Hardware</button>
                  <button className="text-black text-lg font-medium py-2" onClick={() => navigate('/pricing')}>Pricing</button>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                  <button
                    className="hidden sm:block relative group bg-white text-primary-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary-300 transition-all duration-300 font-semibold overflow-hidden hover:text-white text-sm lg:text-base"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    <div className="absolute inset-0 bg-primary-300 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
                    <span className="relative z-10">Get a Demo</span>
                  </button>
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-1.5 sm:p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                      <Menu className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'opacity-100'}`} />
                      <X    className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100' : '-rotate-180 opacity-0'}`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile nav */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-4 border-t border-gray-200 max-h-96 overflow-y-auto">
                  <div className="flex flex-col gap-1">

                    {/* Products mobile */}
                    <div>
                      <button onClick={() => handleMobileDropdown('products')}
                        className="text-gray-700 hover:bg-gray-50 flex items-center justify-between py-3 px-4 rounded-lg w-full font-medium">
                        Products
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === 'products' ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdown === 'products' && (
                        <div className="ml-4 mt-1 space-y-2">
                          {productSections.map((section, si) => (
                            <div key={si} className="border-l-2 border-orange-200 pl-4 py-2">
                              <h4 className="text-primary-300 font-semibold text-xs uppercase tracking-wide mb-2">{section.title}</h4>
                              {section.items.map((item, ii) => (
                                <div key={ii} className="flex items-start gap-3 py-2 cursor-pointer"
                                  onClick={() => handleProductItemClick((item as any).slug || '')}>
                                  <ItemIcon image={item.image} title={item.title} />
                                  <div>
                                    <h5 className="font-semibold text-gray-900 text-sm">{item.title}</h5>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Industries mobile */}
                    <div>
                      <button onClick={() => handleMobileDropdown('categories')}
                        className="text-gray-700 hover:bg-gray-50 flex items-center justify-between py-3 px-4 rounded-lg w-full font-medium">
                        Industries
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === 'categories' ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdown === 'categories' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {categoryItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 py-2 border-l-2 border-orange-200 pl-4 cursor-pointer"
                              onClick={() => handleCategoryItemClick(item.title)}>
                              <ItemIcon image={item.image} title={item.title} />
                              <div>
                                <h5 className="font-semibold text-gray-900 text-sm">{item.title}</h5>
                                <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button onClick={() => { setIsMenuOpen(false); navigate('/hardware'); }}
                      className="text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg text-left font-medium">Hardware</button>
                    <button onClick={() => { setIsMenuOpen(false); navigate('/pricing'); }}
                      className="text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg text-left font-medium">Pricing</button>

                    <div className="px-4 py-3">
                      <button onClick={() => setIsDemoModalOpen(true)}
                        className="relative group bg-white text-primary-300 px-6 py-3 rounded-full border border-primary-300 transition-all duration-300 font-semibold w-full overflow-hidden hover:text-white">
                        <div className="absolute inset-0 bg-primary-300 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                        <span className="relative z-10">Get a Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* ── Products mega-menu ── */}
        {activeDropdown === 'products' && (
          <div className="fixed left-0 right-0 z-40 top-[108px]" onClick={() => setActiveDropdown(null)}>
            <div className="px-4 sm:px-6 lg:px-8 xl:px-[150px] pt-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-7xl mx-auto"
                onClick={(e) => e.stopPropagation()}>
                <div className="px-6 lg:px-10 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Col 1: Restaurant Operations */}
                    <div>
                      {(() => {
                        const s = productSections[0]; if (!s) return null;
                        return <>
                          <h3 className="text-primary-300 font-bold text-xs uppercase tracking-widest mb-5">{s.title}</h3>
                          <div className="space-y-4">
                            {s.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-3 group cursor-pointer"
                                onClick={() => handleProductItemClick((item as any).slug || '')}>
                                <ItemIcon image={item.image} title={item.title} />
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary-300 transition-colors">{item.title}</h4>
                                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>;
                      })()}
                    </div>

                    {/* Col 2: Customer Interaction + Marketing */}
                    <div>
                      {(() => {
                        const s2 = productSections[1]; const s3 = productSections[2];
                        return <>
                          {s2 && <>
                            <h3 className="text-primary-300 font-bold text-xs uppercase tracking-widest mb-5">{s2.title}</h3>
                            <div className="space-y-4 mb-7">
                              {s2.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 group cursor-pointer"
                                  onClick={() => handleProductItemClick((item as any).slug || '')}>
                                  <ItemIcon image={item.image} title={item.title} />
                                  <div>
                                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary-300 transition-colors">{item.title}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>}
                          {s3 && <>
                            <h3 className="text-primary-300 font-bold text-xs uppercase tracking-widest mb-5">{s3.title}</h3>
                            <div className="space-y-4">
                              {s3.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 group cursor-pointer"
                                  onClick={() => handleProductItemClick((item as any).slug || '')}>
                                  <ItemIcon image={item.image} title={item.title} />
                                  <div>
                                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary-300 transition-colors">{item.title}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>}
                        </>;
                      })()}
                    </div>

                    {/* Col 3: CTA */}
                    <DemoCTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Industries mega-menu ── */}
        {activeDropdown === 'categories' && (
          <div className="fixed left-0 right-0 z-40 top-[108px]" onClick={() => setActiveDropdown(null)}>
            <div className="px-4 sm:px-6 lg:px-8 xl:px-[150px] pt-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-7xl mx-auto"
                onClick={(e) => e.stopPropagation()}>
                <div className="px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Industries grid */}
                    <div className="lg:col-span-3">
                      <h3 className="text-primary-300 font-bold text-xs uppercase tracking-widest mb-5">Industries We Serve</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {categoryItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group cursor-pointer"
                            onClick={() => handleCategoryItemClick(item.title)}>
                            <ItemIcon image={item.image} title={item.title} />
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary-300 transition-colors">{item.title}</h4>
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <DemoCTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default Header;
