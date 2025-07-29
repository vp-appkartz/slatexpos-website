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
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // Animation will trigger every time on scroll into view
      offset: 60,
      easing: "ease-in-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={`py-10 bg-[#F0F0F9] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-2lg md:text-3xl mt-10 lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
            {heading}
          </h2>
          <p className="text-gray-800 text-lg font-medium md:text-lg lg:text-2xl mt-1 md:mt-2">
            {subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-16 ${gridClassName}`}>
          {features?.map((feature, index) => {
            const aosType = aosAnimations[index % aosAnimations.length];
            const aosDelay = 200 + index * 120;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos={aosType}
                data-aos-delay={aosDelay}
              >
                {/* Feature Icon */}
                <div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-14 h-14 object-contain mb-5"
                  />
                </div>

                {/* Feature Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 mx-2 max-w-[180px]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed mx-2">
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
