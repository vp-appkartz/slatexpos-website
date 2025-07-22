import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Stat {
  value: string;
  description: string;
}

interface BulletPoint {
  text: string;
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

const aosFeatureAnimations = [
  "fade-right",
  "fade-up",
  "fade-left",
  "zoom-in-up",
  "flip-left",
  "flip-right",
];

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
      once: false, // Animation will trigger every time on scroll into view
      offset: 60,
      easing: "ease-in-out",
      mirror: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={`relative py-20 overflow-hidden ${bgClassName}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-sm text-gray-800 font-medium">
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-aos={aosFeatureAnimations[idx % aosFeatureAnimations.length]}
                data-aos-delay={150 + idx * 120}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                  {feature.heading}
                </h3>
                <p className="font-medium text-base sm:text-lg lg:text-xl xl:text-[20px] text-gray-600 leading-relaxed lg:leading-8 tracking-[0.04em] max-w-lg mt-4 sm:mt-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-8 mb-8">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-base text-gray-800 font-medium"
                  data-aos="fade-right"
                  data-aos-delay={400 + idx * 60}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="#FF6B2C" />
                      <path d="M5.5 8.5l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {point.text}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
              onClick={onCtaClick}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              {ctaText} <span className="ml-2">{'>'}</span>
            </button>
          </div>

          {/* Right: Main POS UI image over the soft background */}
          <div
            className="relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]"
            data-aos="fade-left"
            data-aos-delay="350"
          >
            {/* Main Foreground Image */}
            <div className="relative z-20 flex items-center justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className=""
                data-aos="zoom-in-up"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;