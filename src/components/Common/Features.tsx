import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

interface Stat {
  value: string;
  description: string;
}

interface BulletPoint {
  text: string;
  highlight?: boolean;
}

export interface IndustrySectionProps {
  title: string;
  subtitle: string;
  features: {
    heading: string;
    description: string;
  }[];
  stats: Stat[];
  ctaText: string;
  onCtaClick?: () => void;
  imageSrc: string;
  imageAlt?: string;
  bgClassName?: string;
  bulletPoints?: BulletPoint[];
}

const defaultBulletPoints: BulletPoint[] = [
  { text: "Your Logo & Styling" },
  { text: "Highlight Best Sellers" },
  { text: "Display Promo Banners" },
  { text: "Effortless Customizations" },
  { text: "Integrated Loyalty" },
  { text: "Future Orders" },
  { text: "Real-time Order Tracking" },
  { text: "Push Notifications" },
  { text: "Apple Pay & Google Pay Support" },
];

const BulletList: React.FC<{ points: BulletPoint[] }> = ({ points }) => {
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
                data-aos="fade-right"
                data-aos-delay={400 + (rowIdx * 2 + pointIdx) * 60}
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

const IndustrySection: React.FC<IndustrySectionProps> = ({
  title,
  subtitle,
  features,
  stats,
  ctaText,
  onCtaClick,
  imageSrc = "/table-pos.png",
  imageAlt = "POS System Interface",
  bgClassName = "bg-white",
  bulletPoints,
}) => {
  const points = bulletPoints && bulletPoints.length > 0 ? bulletPoints : defaultBulletPoints;

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 60,
      easing: "ease-in-out",
      mirror: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={`relative overflow-hidden ${bgClassName}`}>
      <div className="mx-[70px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <section className= " pb-10">
          <div className="text-center">
            <h1 
              className="text-2lg md:text-3xl mt-10 lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {title}
            </h1>
            <p 
              className="text-gray-800 text-lg font-medium md:text-lg lg:text-lg mt-1 md:mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          </div>
        </section>

        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="text-left flex items-center justify-start px-2 md:px-4 lg:px-6">
              <div className="max-w-sm md:max-w-md lg:max-w-lg w-full">
                {/* Features Content */}
                {features.map((feature, idx) => (
                  <div key={idx} className="mb-6">
                    <h2 
                      className="text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-700 mb-2 md:mb-3 lg:mb-4 tracking-wide" 
                      style={{lineHeight: '1.3'}}
                      data-aos="fade-right"
                      data-aos-delay={150 + idx * 120}
                    >
                      {feature.heading}
                    </h2>
                    <p 
                      className="text-lg font-normal text-black mb-3 md:mb-4 lg:mb-6"
                      data-aos="fade-up"
                      data-aos-delay={200 + idx * 120}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}

                {/* Statistics */}
                {stats?.length > 0 && (
                  <div className="mb-8">
                    {stats.map((stat, idx) => (
                      <div
                        className="flex items-baseline gap-2 mb-2"
                        key={idx}
                        data-aos="zoom-in-up"
                        data-aos-delay={300 + idx * 100}
                      >
                        <span className="text-5xl font-bold text-orange-500">{stat.value}</span>
                        <span className="text-lg font-medium">{stat.description}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <BulletList points={points} />

                {/* CTA Button */}
                <button
                  className="bg-primary-300 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-md lg:rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 text-xs md:text-sm lg:text-base shadow-md"
                  onClick={onCtaClick}
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  {ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="h-[50vh] md:h-[50vh] lg:h-screen lg:sticky lg:top-0 order-1 lg:order-2">
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden w-full h-full">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-contain transition-all duration-500 ease-in-out opacity-100 scale-110"
                  data-aos="fade-left"
                  data-aos-delay="350"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;