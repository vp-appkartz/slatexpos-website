import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

export interface KeyFeaturesProps {
  features: FeatureItem[];
  heading?: string;
  subheading?: string;
  className?: string;
  gridClassName?: string;
  maxW?: string;
}

const aosAnimations = [
  "zoom-in-up",
  "fade-up",
  "flip-left",
  "flip-right",
  "fade-right",
  "fade-left",
];

const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  features,
  heading = "Key Features",
  subheading = "Powerful Tools. Seamless Experience.",
  className = "",
  gridClassName = "",
  maxW = "180px",
}) => {
  // Only enable AOS on md and up, disable on mobile for better responsiveness
  useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 900,
        once: false,
        offset: 60,
        easing: "ease-in-out",
      });
    }
    return () => {
      if (window.innerWidth >= 768) {
        AOS.refresh();
      }
    };
  }, []);

  return (
    <section className={`py-10 bg-[#F0F0F9] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          data-aos={window.innerWidth >= 768 ? "fade-down" : undefined}
          data-aos-delay={window.innerWidth >= 768 ? "100" : undefined}
        >
          <h2 className="text-3xl sm:text-3xl mt-6 sm:mt-8 md:mt-10 lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
            {heading}
          </h2>
          <p className="text-gray-800 text-lg sm:text-lg font-medium md:text-lg lg:text-2xl mt-1 md:mt-2">
            {subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 lg:gap-16 ${gridClassName}`}
        >
          {features?.map((feature, index) => {
            // Only add AOS attributes on md and up
            const aosType = aosAnimations[index % aosAnimations.length];
            const aosDelay = 200 + index * 120;
            const aosProps =
              typeof window !== "undefined" && window.innerWidth >= 768
                ? {
                  "data-aos": aosType,
                  "data-aos-delay": aosDelay,
                }
                : {};
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center h-full"
                {...aosProps}
              >
                {/* Feature Icon */}
                <div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-14 h-14 object-contain mb-4 sm:mb-5"
                  />
                </div>

                {/* Feature Content */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 max-w-[${maxW}]`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
