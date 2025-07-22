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
    bgColor: 'bg-orange-500',
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
    bgColor: 'bg-orange-500',
    bgGradient: 'from-orange-400 to-orange-600',
    buttonText: "Let's Connect",
    bulletPoints: [
      { text: 'Easy & Quick implementation', highlight: true },
      { text: 'Detailed customer analytics report', highlight: false },
      { text: 'Point or Reward based', highlight: false },
      { text: 'Menu item reward options', highlight: true },
      { text: 'Instore/Online/Kiosk integration', highlight: false },
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
    bgColor: 'bg-orange-500',
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
  // Group points into pairs
  const groupedPoints = [];
  for (let i = 0; i < points.length; i += 2) {
    groupedPoints.push(points.slice(i, i + 2));
  }

  return (
    <div className="mb-5 md:mb-7 w-full">
      <div className="flex flex-col gap-y-5">
        {groupedPoints.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-row items-center gap-x-5">
            {row.map((point, pointIdx) => (
              <div
                key={pointIdx}
                className="flex items-center flex-shrink-0"
              >
                <span className="flex-shrink-0 rounded-full bg-orange-500 w-5 h-5 flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.2} />
                </span>
                <span className="text-gray-700 font-semibold text-[15px] leading-tight whitespace-nowrap">
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
        // Find the entry with the highest intersection ratio that meets our threshold
        const visibleEntry = entries
          .filter(entry => entry.intersectionRatio >= 0.6) // Only consider sections that are more than 60% visible
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry && visibleEntry.target.id !== activeSection) {
          setIsTransitioning(true);
          
          // Faster transition
          setTimeout(() => {
            setActiveSection(visibleEntry.target.id);
            setTimeout(() => {
              setIsTransitioning(false);
            }, 150); // Reduced from 300ms
          }, 50); // Reduced from 100ms
        }
      },
      {
        threshold: [0.6, 0.7, 0.8, 0.9, 1.0], // Only trigger when section is mostly visible
        rootMargin: '-10% 0px -10% 0px' // Reduced margin for better centering
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const currentSection = sections.find(section => section.id === activeSection) || sections[0];

  const POSImage = ({ sectionId }: { sectionId: string }) => {
    const getImageData = () => {
      switch (sectionId) {
        case '1':
          return {
            src: '/home-about-1.png',
            alt: 'Casual Dining POS System',
           
          };
        case '2':
          return {
            src:  '/home-about-2.png',
            alt: 'Quick Service POS Terminal',
          
          };
        case '3':
          return {
            src: '/home-about-3.png',
            alt: 'Fast Casual POS Interface',
          
          };
        case '4':
          return {
            src:  '/home-about-4.png',
            alt: 'Cafe POS System',
           
          };
        case '5':
          return {
            src:  '/home-about-5.png',
            alt: 'Fine Dining POS Suite',
          
          };
        default:
          return {
            src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            alt: 'Restaurant POS System',
            rotation: 'rotate-0'
          };
      }
    };

    const { src, alt } = getImageData();

    return (
      <div className="relative w-full flex justify-center items-center">
        <div className={`transform transition-all duration-500 ease-out ${
          !isTransitioning ? 'scale-100 opacity-100 translate-y-0' : 'scale-98 opacity-80 translate-y-1'
        }`}>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={src}
              alt={alt}
              className="w-[1000px] h-[500px] object-cover shadow-2xl transition-all duration-500 ease-out"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.className += ' bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-2xl';
                  parent.innerHTML = '<div class="text-white text-center"><div class="text-2xl mb-2">📱</div><div class="font-medium">POS System</div></div>';
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const getBackgroundShape = (sectionId: string) => {
    switch (sectionId) {
      case '1':
        return 'bg-gray-500';
      case '2':
        return 'bg-green-500';
      case '3':
        return 'bg-orange-500';
      case '4':
        return 'bg-amber-600';
      case '5':
        return 'bg-purple-600';
      default:
        return 'bg-gray-500';
    }
  };

  const currentBgColor = getBackgroundShape(activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-6 pb-2 md:pt-10 md:pb-2 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
           What We Do
          </h1>
          <p className="text-black text-medium text-sm mb-2">Tailored for Every Table, Terminal, and Territory in Canada</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Scrollable Content */}
        <div 
          ref={containerRef}
          className="w-full lg:w-25/100 overflow-y-auto bg-gray-50 order-2 lg:order-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
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
                className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12"
              >
                <div className="max-w-md w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 md:mb-4 leading-relaxed" style={{lineHeight: '1.5'}}>
                    {section.subtitle}
                  </h2>
                  
                  <p className="text-sm md:text-base text-black mb-4 md:mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Pixel-perfect bullet points */}
                  {section.bulletPoints && (
                    <BulletList points={section.bulletPoints} />
                  )}

                  <button className="bg-orange-500 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base shadow-md mt-2">
                    {section.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Fixed Content - Mobile: Top, Desktop: Right */}
        <div className="w-full lg:w-75/100 h-[50vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center relative overflow-hidden bg-gray-50 order-1 lg:order-2">
          {/* Content */}
          <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 flex items-center justify-center">
            <div className={`transform transition-all duration-500 ease-out w-full max-w-lg ${
              !isTransitioning ? 'scale-100 opacity-100' : 'scale-99 opacity-90'
            }`}>
              <POSImage sectionId={activeSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;