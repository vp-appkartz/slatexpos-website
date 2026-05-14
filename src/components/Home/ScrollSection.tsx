import React, { useEffect, useRef, useState } from 'react';
import { Utensils, Clock, Zap, Coffee, ChefHat, CheckCircle, Circle, Check } from 'lucide-react';
import { subscribeToHeroPageData } from '../../services/firestoreService';

interface Section {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
  statDescription?: string;
  bgColor: string;
  bgGradient: string;
  buttonText: string;
  bulletPoints?: { text: string; highlight?: boolean }[];
  imageSrc?: string;
  imageAlt?: string;
}

interface ScrollSectionProps {
  heroTitle?: string;
  heroSubtitle?: string;
  sections?: Section[];
  onButtonClick?: (sectionId: string) => void;
}

const defaultSections: Section[] = [
  {
    id: '1',
    icon: <Utensils className="w-4 h-4" />,
    title: 'Works on Any Android Device',
    subtitle: 'Works on Any Android Device',
    description: 'No proprietary hardware required. Use your existing tablets or Android devices. Save thousands upfront and never feel locked in. Cloud-based, multi-device, and ready to go on the hardware you already own.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-gray-500',
    bgGradient: 'from-gray-400 to-gray-600',
    buttonText: "Book a Free Demo",
    imageSrc: '/home-about-1.png',
    imageAlt: 'SlateX POS on Android Device',
    bulletPoints: [
      { text: 'No Hardware Purchase Required', highlight: true },
      { text: 'Multi-Device Setup', highlight: false },
      { text: 'Cloud-Based & Always Synced', highlight: true },
      { text: 'Roles & Permissions', highlight: false },
      { text: 'Easy Ticket Management', highlight: true },
      { text: 'Multi-Level Modifiers', highlight: false },
      { text: 'Drag & Drop Floor Management', highlight: true },
      { text: 'Dynamic Invoice & KOT Layout', highlight: false },
      { text: 'Timecard & Payroll', highlight: true },
      { text: 'Cash Management', highlight: false },
    ]
  },
  {
    id: '2',
    icon: <Clock className="w-4 h-4" />,
    title: 'Offline Mode — Never Lose a Sale',
    subtitle: 'Offline Mode — Never Lose a Sale',
    description: 'Internet cuts out? SlateX keeps running. Orders, payments, and kitchen tickets continue without interruption. Everything syncs automatically when you\'re back online. Your restaurant never stops.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-green-500',
    bgGradient: 'from-green-400 to-green-600',
    buttonText: 'Book a Free Demo',
    imageSrc: '/home-about-2.png',
    imageAlt: 'SlateX Offline Mode',
    bulletPoints: [
      { text: 'Full POS Functionality Offline', highlight: true },
      { text: 'Payments Processed Offline', highlight: true },
      { text: 'Kitchen Tickets Continue Printing', highlight: true },
      { text: 'Auto-Sync When Back Online', highlight: true },
      { text: 'No Data Lost', highlight: true },
      { text: 'Works Anywhere in Canada', highlight: true },
    ]
  },
  {
    id: '3',
    icon: <Zap className="w-4 h-4" />,
    title: 'Online Ordering — Built In',
    subtitle: 'Online Ordering — Built In',
    description: "Orders placed online arrive directly on your POS. No extra tablet. No third-party middleware fees. Fully integrated with your kitchen workflow from day one. Zero commission — you keep 100% of your revenue.",
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-red-500',
    buttonText: "Book a Free Demo",
    imageSrc: '/home-about-3.png',
    imageAlt: 'SlateX Online Ordering',
    bulletPoints: [
      { text: 'Zero Commission', highlight: true },
      { text: 'No Extra Tablet Needed', highlight: true },
      { text: 'Direct POS Integration', highlight: false },
      { text: 'Scheduled & Future Orders', highlight: true },
      { text: 'Catering & Express Catering', highlight: false },
      { text: 'Guest Alerts via Email/SMS', highlight: true },
      { text: 'Branded Ordering Page', highlight: false },
    ]
  },
  {
    id: '4',
    icon: <Check className="w-4 h-4" />,
    title: 'AI Online Promoter',
    subtitle: 'AI Online Promoter',
    description: 'SlateX automatically generates and publishes digital promotions for your restaurant. No marketing team required. Your deals reach customers — while you focus on service. AI Loyalty Program coming soon.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-orange-600',
    buttonText: "Book a Free Demo",
    imageSrc: '/home-about-4.png',
    imageAlt: 'SlateX AI Promoter',
    bulletPoints: [
      { text: 'Auto-Generated Promotions', highlight: true },
      { text: 'BOGOs & Combo Deals', highlight: false },
      { text: 'Scheduled Happy Hour Discounts', highlight: true },
      { text: 'Gift Cards (Physical & Digital)', highlight: false },
      { text: 'Caller ID Integration', highlight: true },
      { text: 'AI Loyalty Program (Coming Soon)', highlight: false },
      { text: 'AI Ordering System (Coming Soon)', highlight: true },
    ]
  },
  {
    id: '5',
    icon: <Check className="w-4 h-4" />,
    title: '30+ Reports at Your Fingertips',
    subtitle: '30+ Reports at Your Fingertips',
    description: 'Sales by item, by server, by period. Tip summaries, void tracking, cash reconciliation. The numbers you need — available any time, from anywhere. Make decisions based on real data, not guesswork.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-orange-600',
    buttonText: "Book a Free Demo",
    imageSrc: '/home-about-5.png',
    imageAlt: 'SlateX Reports Dashboard',
    bulletPoints: [
      { text: 'Sales by Item & Server', highlight: true },
      { text: 'Cash Reconciliation', highlight: true },
      { text: 'Tip Summaries', highlight: true },
      { text: 'Void Tracking & Audit Trail', highlight: true },
      { text: 'Access from Any Device', highlight: true },
      { text: 'Owner Reporting App', highlight: true },
    ]
  }
];

const BulletList: React.FC<{ points: { text: string; highlight?: boolean }[] }> = ({ points }) => {
  const groupedPoints = [];
  for (let i = 0; i < points.length; i += 2) {
    groupedPoints.push(points.slice(i, i + 2));
  }

  return (
    <div className="mb-6 md:mb-6 w-full">
      <div className="flex flex-col gap-y-4 md:gap-y-4">
        {groupedPoints.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 gap-y-3 sm:gap-y-0">
            {row.map((point, pointIdx) => (
              <div
                key={pointIdx}
                className="flex items-center flex-shrink-0"
              >
                <span className="flex-shrink-0 rounded-full bg-primary-300 w-6 h-6 md:w-5 md:h-5 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 md:w-3 md:h-3 text-white" strokeWidth={2.5} />
                </span>
                <span className="text-gray-700 font-semibold text-sm sm:text-base md:text-sm lg:text-base leading-snug">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const getIcon = (iconName: string): React.ReactNode => {
  const icons: { [key: string]: React.ReactNode } = {
    Utensils: <Utensils className="w-4 h-4" />,
    Clock: <Clock className="w-4 h-4" />,
    Zap: <Zap className="w-4 h-4" />,
    Coffee: <Coffee className="w-4 h-4" />,
    ChefHat: <ChefHat className="w-4 h-4" />,
    CheckCircle: <CheckCircle className="w-4 h-4" />,
    Circle: <Circle className="w-4 h-4" />,
    Check: <Check className="w-4 h-4" />,
  };
  return icons[iconName] || <Check className="w-4 h-4" />;
};

const ScrollSection: React.FC<ScrollSectionProps> = ({
  heroTitle = "Everything You Need to Run Your Restaurant",
  heroSubtitle = "No add-on fees. No feature tiers. Every feature below is included in your SlateX plan.",
  sections = defaultSections,
  onButtonClick
}) => {
  const [dataSections, setDataSections] = useState<Section[]>(sections);
  const [dataTitle, setDataTitle] = useState(heroTitle);
  const [dataSubtitle, setDataSubtitle] = useState(heroSubtitle);

  useEffect(() => {
    setDataSections(sections);
    setDataTitle(heroTitle || "Everything You Need to Run Your Restaurant");
    setDataSubtitle(heroSubtitle || "No add-on fees. No feature tiers. Every feature below is included in your SlateX plan.");
  }, [sections, heroTitle, heroSubtitle]);

  useEffect(() => {
    // Only subscribe to global data if we are using the default sections (meaning no custom sections provided)
    if (sections !== defaultSections) return;

    const unsubscribe = subscribeToHeroPageData((data) => {
      if (data && data.scroll) {
        setDataTitle(data.scroll.heroTitle);
        setDataSubtitle(data.scroll.heroSubtitle);
        setDataSections(data.scroll.sections.map((s: any) => ({
          ...s,
          icon: getIcon(s.icon),
        })));
      }
    });

    return () => unsubscribe();
  }, [sections]);

  const [activeSection, setActiveSection] = useState(sections[0]?.id || '1');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter(entry => entry.intersectionRatio >= 0.5)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry && visibleEntry.target.id !== activeSection) {
          setIsTransitioning(true);

          setTimeout(() => {
            setActiveSection(visibleEntry.target.id);
            setTimeout(() => {
              setIsTransitioning(false);
            }, 200);
          }, 100);
        }
      },
      {
        threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeSection, dataSections]);

  // Sync activeSection if needed when data changes
  useEffect(() => {
    if (dataSections.length > 0 && !dataSections.some(s => s.id === activeSection)) {
      setActiveSection(dataSections[0].id);
    }
  }, [dataSections]);

  const POSImage = ({ sectionId }: { sectionId: string }) => {
    const [currentImage, setCurrentImage] = useState(sectionId);
    const [nextImage, setNextImage] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isImageTransitioning, setIsImageTransitioning] = useState(false);

    const getImageData = (id: string) => {
      const section = dataSections.find(s => s.id === id);
      if (section && section.imageSrc) {
        return {
          src: section.imageSrc,
          alt: section.imageAlt || section.title,
        };
      }

      // Fallback image
      return {
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        alt: 'Default Image',
      };
    };

    // Preload next image when sectionId changes
    useEffect(() => {
      if (sectionId !== currentImage) {
        setNextImage(sectionId);
        setImageLoaded(false);

        const img = new Image();
        const nextImageData = getImageData(sectionId);
        img.src = nextImageData.src;

        img.onload = () => {
          setImageLoaded(true);
          setIsImageTransitioning(true);

          // Start transition after image is preloaded
          setTimeout(() => {
            setCurrentImage(sectionId);
            setTimeout(() => {
              setIsImageTransitioning(false);
              setNextImage('');
            }, 300);
          }, 100);
        };

        img.onerror = () => {
          setImageLoaded(true);
          setCurrentImage(sectionId);
          setIsImageTransitioning(false);
          setNextImage('');
        };
      }
    }, [sectionId, currentImage]);

    const currentImageData = getImageData(currentImage);
    const nextImageData = nextImage ? getImageData(nextImage) : null;

    return (
      <div className="w-full h-full">
        <div className="relative overflow-hidden w-full h-full">
          {/* Current Image */}
          <img
            src={currentImageData.src}
            alt={currentImageData.alt}
            className={`w-full h-full object-contain transition-all duration-500 ease-in-out ${isImageTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
              }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.className += ' flex items-center justify-center';
                parent.innerHTML = '<div class="text-white text-center"><div class="text-2xl mb-2">📱</div><div class="font-medium">Default Image</div></div>';
              }
            }}
          />

          {/* Next Image (for smooth transition) */}
          {nextImageData && imageLoaded && (
            <img
              src={nextImageData.src}
              alt={nextImageData.alt}
              className={`w-full h-full object-contain transition-all duration-500 ease-in-out absolute inset-0 ${isImageTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            />
          )}
        </div>
      </div>
    );
  };

  const handleButtonClick = (sectionId: string) => {
    if (onButtonClick) {
      onButtonClick(sectionId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Hero Section - Reduced spacing */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-2 md:pb-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto mt-4">
            {dataTitle}
          </h1>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium mt-3 md:mt-4">
            {dataSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content - Different layouts for mobile vs desktop */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-0">
        {/* Mobile Layout - Modern App-Style Design */}
        <div className="lg:hidden bg-white">
          {dataSections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="min-h-screen relative flex flex-col overflow-hidden"
            >
              {/* Top Gradient Section with Floating Elements */}
              {/* <div className={`absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br ${section.bgGradient} rounded-b-[40px] shadow-lg z-0`}> */}
              {/* Decorative Pattern Overlay */}
              {/* <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div> */}

              {/* Section Index Badge */}
              {/* <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-inner z-20">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div> */}

              {/* Floating Icon Bubble */}
              {/* <div className="absolute top-6 left-6 w-12 h-12 bg-white text-primary-500 rounded-2xl flex items-center justify-center shadow-lg z-20 transform -rotate-6">
                  {React.cloneElement(section.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div> */}
              {/* </div> */}

              {/* Main Visual - Floating Image */}
              <div className="relative z-10 w-full h-[35vh] mt-20 px-8 flex items-center justify-center">
                <div className="relative w-full h-full filter  transition-transform duration-500 hover:scale-105">
                  <img
                    src={section.imageSrc || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'}
                    alt={section.imageAlt || section.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className += ' flex items-center justify-center bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20';
                        parent.innerHTML = '<div class="text-white text-center"><div class="text-4xl mb-2">📱</div><div class="font-medium opacity-90">Preview Image</div></div>';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Content Card - Bottom Sheet Style */}
              <div className="flex-1 z-10 -mt-6 mx-0 bg-white rounded-t-[32px] px-6 pt-8 pb-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center">
                {/* Drag Handle Indicator */}
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-8"></div>

                <div className="w-full max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 leading-tight text-center">
                    {section.subtitle}
                  </h2>

                  <p className="text-gray-600 mb-8 text-center leading-relaxed font-medium text-sm sm:text-base">
                    {section.description}
                  </p>

                  {/* Bullet Points Container */}
                  <div className="w-full bg-gray-50 rounded-2xl p-2 mb-8 border border-gray-100">
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <BulletList points={section.bulletPoints} />
                    )}
                  </div>

                  <button
                    onClick={() => handleButtonClick(section.id)}
                    className="w-full group relative overflow-hidden bg-gray-900 text-white px-6 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {section.buttonText}
                      <Zap className="w-4 h-4 text-primary-400 group-hover:text-yellow-400 transition-colors" fill="currentColor" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Grid with sticky image */}
        <div className="hidden lg:block">
          <div
            ref={containerRef}
            className="overflow-y-auto order-2 lg:order-1"
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="space-y-0">
              {dataSections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className="min-h-screen text-left flex items-center justify-start px-2 md:px-4 lg:px-6"
                >
                  <div className="max-w-sm md:max-w-md lg:max-w-lg w-full">
                    <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-700 mb-2 md:mb-3 lg:mb-4 tracking-wide" style={{ lineHeight: '1.2' }}>
                      {section.subtitle}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-normal text-black mb-3 md:mb-4 lg:mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <BulletList points={section.bulletPoints} />
                    )}

                    <button
                      onClick={() => handleButtonClick(section.id)}
                      className="bg-primary-300 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-md lg:rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 text-xs md:text-sm lg:text-base shadow-md"
                    >
                      {section.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Section - Only for desktop */}
        <div className="hidden lg:block h-screen sticky top-0 order-1 lg:order-2">
          <POSImage sectionId={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;