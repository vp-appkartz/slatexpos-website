import React, { useEffect, useRef, useState } from 'react';
import { Utensils, Clock, Zap, Coffee, ChefHat, CheckCircle, Circle, Check } from 'lucide-react';

interface Section {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statDescription: string;
  bgColor: string;
  bgGradient: string;
  buttonText: string;
  bulletPoints?: { text: string; highlight?: boolean }[];
}

const sections: Section[] = [
  {
    id: '1',
    icon: <Utensils className="w-4 h-4" />,
    title: 'Comprehensive All-In-One POS System',
    subtitle: 'Comprehensive All-In-One POS System',
    description: 'An easy to use and reliable cloud-based Android POS solution designed to empower restaurants in their growth journey.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-gray-500',
    bgGradient: 'from-gray-400 to-gray-600',
    buttonText: "Let's Connect",
    bulletPoints: [
      { text: 'Easy Ticket Management', highlight: true },
      { text: 'Pizza Matrix (½ & ¼)', highlight: false },
      { text: 'Control Complex Modifiers', highlight: true },
      { text: 'Binnacle Security', highlight: false },
      { text: 'Accurate & easy insights', highlight: true },
      { text: 'Employee Management', highlight: false },
      { text: 'Tip Reconciliation', highlight: true },
      { text: 'Third Party Order Integration', highlight: false },
      { text: 'Timecard and Payroll', highlight: true },
      { text: 'CRM & Loyalty', highlight: false },
      { text: 'Versatile item and menu management', highlight: true },
      { text: 'Comprehensive Management', highlight: false },
    ]
  },
  {
    id: '2',
    icon: <Clock className="w-4 h-4" />,
    title: 'Streamline kitchen operations with precision',
    subtitle: 'Streamline kitchen operations with precision',
    description: 'A comprehensive Kitchen Display System streamlining restaurant operations from order management to food preparation. Ensure seamless communication and enhanced efficiency in your kitchen allowing your staff to focus on preparing and serving delicious food.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-green-500',
    bgGradient: 'from-green-400 to-green-600',
    buttonText: 'Let\'s Connect',
    bulletPoints: [
      { text: 'Aggregate all orders', highlight: true },
      { text: 'Multiple views', highlight: true },
      { text: 'Color Coded Orders', highlight: true },
      { text: 'Kitchen productivity reports', highlight: true },
      { text: 'Bump & Recall Items', highlight: true },
      { text: 'Prep time countdown timer', highlight: true },
      { text: 'Ticket Status Digital Signage Integration', highlight: true }
    ]
  },
  {
    id: '3',
    icon: <Zap className="w-4 h-4" />,
    title: 'Boost your profit with zero-commission online ordering!',
    subtitle: 'Boost your profit with zero-commission online ordering!',
    description: "Increase your sales and expand your reach with the commission-free online ordering solution of SlateX POS. From easy menu customization to timely order fulfillment, we empower restaurants to serve customers anytime, anywhere.",
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-red-500',
    buttonText: "Let's Connect",
    bulletPoints: [
      { text: 'Commission Free', highlight: true },
      { text: 'Future ordering options', highlight: true },
      { text: 'Multiple color branding option', highlight: false },
      { text: 'Multi store listing', highlight: true },
      { text: 'Loyalty Program Integration', highlight: false },
      { text: 'Offers/Coupons Management', highlight: false },
      { text: 'Integration with POS/Kitchen', highlight: false },
      { text: 'Guest Alerts Email/SMS', highlight: true },
      { text: 'Third party analytics integration', highlight: false },
      { text: 'Catering/Express Catering options', highlight: false },
    ]
  },
  {
    id: '4',
    icon: <Check className="w-4 h-4" />,
    title: 'Tailored loyalty program all restaurants desire and customers crave',
    subtitle: 'Tailored loyalty program all restaurants desire and customers crave',
    description: 'Enhance customer retention and encourage repeat visits with personalized incentives and rewards using SlateX POS. Help customers unlock exclusive perks, fostering loyalty and satisfaction with every transaction.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-orange-600',
    buttonText: "Let's Connect",
    bulletPoints: [
      { text: 'Easy & Quick implementation', highlight: true },
      { text: 'Detailed customer analytics report', highlight: false },
      { text: 'Point or Reward based', highlight: false },
      { text: 'Menu item reward options', highlight: true },
      { text: 'Inststore/Online/Kiosk integration', highlight: false },
      { text: 'Customer portal', highlight: true },
      { text: 'Integrated marketing campaigns', highlight: false },
      { text: 'Personalized communication', highlight: true },
    ]
  },
  {
    id: '5',
    icon: <Check className="w-4 h-4" />,
    title: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
    subtitle: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
    description: 'SlateX POS offers fast, secure, and flexible payment options making it easy for both the customers and the restaurants to manage payments and transactions accurately without any errors.',
    stat: '',
    statDescription: '',
    bgColor: 'bg-primary-300',
    bgGradient: 'from-orange-400 to-orange-600',
    buttonText: "Let's Connect",
    bulletPoints: [
      { text: 'Customized and transparent rates', highlight: true },
      { text: 'Compliant Surcharge Program', highlight: true },
      { text: 'Fast and Secure Transactions', highlight: true },
      { text: 'Comprehensive Payment Reports', highlight: true },
      { text: 'Diverse Payment Options', highlight: true },
      { text: 'Tip Management', highlight: true },
    ]
  }
];

const BulletList: React.FC<{ points: { text: string; highlight?: boolean }[] }> = ({ points }) => {
  const groupedPoints = [];
  for (let i = 0; i < points.length; i += 2) {
    groupedPoints.push(points.slice(i, i + 2));
  }

  return (
    <div className="mb-4 md:mb-6 w-full">
      <div className="flex flex-col gap-y-3 md:gap-y-4">
        {groupedPoints.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 gap-y-2 sm:gap-y-0">
            {row.map((point, pointIdx) => (
              <div
                key={pointIdx}
                className="flex items-center flex-shrink-0"
              >
                <span className="flex-shrink-0 rounded-full bg-primary-300 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.2} />
                </span>
                <span className="text-gray-700 font-semibold text-xs md:text-sm lg:text-base leading-tight">
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

const ScrollSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState('1');
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
  }, [activeSection]);

  const POSImage = ({ sectionId }: { sectionId: string }) => {
    const [currentImage, setCurrentImage] = useState(sectionId);
    const [nextImage, setNextImage] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isImageTransitioning, setIsImageTransitioning] = useState(false);

    const getImageData = (id: string) => {
      switch (id) {
        case '1':
          return {
            src: '/home-about-1.png',
            alt: 'Casual Dining POS System',
          };
        case '2':
          return {
            src: '/home-about-2.png',
            alt: 'Quick Service POS Terminal',
          };
        case '3':
          return {
            src: '/home-about-3.png',
            alt: 'Fast Casual POS Interface',
          };
        case '4':
          return {
            src: '/home-about-4.png',
            alt: 'Cafe POS System',
          };
        case '5':
          return {
            src: '/home-about-5.png',
            alt: 'Fine Dining POS Suite',
          };
        default:
          return {
            src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            alt: 'Restaurant POS System',
          };
      }
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
      <div className=" flex items-center justify-center mt-[110px] ">
        <div className="relative overflow-hidden w-full h-full ">
          {/* Current Image */}
          <img
            src={currentImageData.src}
            alt={currentImageData.alt}
            className={`w-full h-full object-contain transition-all duration-500 ease-in-out ${
              isImageTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-110'
            }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.className += ' flex items-center justify-center';
                parent.innerHTML = '<div class="text-white text-center"><div class="text-2xl mb-2">📱</div><div class="font-medium">POS System</div></div>';
              }
            }}
          />
          
          {/* Next Image (for smooth transition) */}
          {nextImageData && imageLoaded && (
            <img
              src={nextImageData.src}
              alt={nextImageData.alt}
              className={`w-full h-full object-contain transition-all duration-500 ease-in-out absolute inset-0 ${
                isImageTransitioning ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
              }`}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-[70px] mx-auto px-4 md:px-6 lg:px-8 ">
      {/* Hero Section - Reduced spacing */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-2 md:pb-4">
        <div className="text-center">
          <h1 className="text-2lg md:text-3xl mt-10 lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
            What We Do
          </h1>
          <p className="text-gray-800 text-lg font-medium  md:text-lg lg:text-lg mt-1 md:mt-2">
            Tailored for Every Table, Terminal, and Territory in Canada
          </p>
        </div>
      </section>

      {/* Main Content - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left Content */}
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
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="min-h-screen text-left flex items-center justify-start px-2 md:px-4 lg:px-6"
              >
                <div className="max-w-sm md:max-w-md lg:max-w-lg w-full">
                  <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-700 mb-2 md:mb-3 lg:mb-4 tracking-wide" style={{lineHeight: '1.3'}}>
                    {section.subtitle}
                  </h2>
                  <p className="text-lg font-normal text-black mb-3 md:mb-4 lg:mb-6 ">
                    {section.description}
                  </p>

                  {section.bulletPoints && (
                    <BulletList points={section.bulletPoints} />
                  )}

                  <button className="bg-primary-300 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-md lg:rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 text-xs md:text-sm lg:text-base shadow-md">
                    {section.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section - Now takes full width of its column */}
        <div className="h-[50vh] md:h-[50vh] lg:h-screen lg:sticky lg:top-0 order-1 lg:order-2">
          <POSImage sectionId={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;