import React from "react";

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

const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  features,
  heading = "Key Features",
  subheading = "Powerful Tools. Seamless Experience.",
  className = "",
  gridClassName = "",
}) => {
  return (
    <section className={`py-20 bg-[#F0F0F9] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">
            {subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-16 ${gridClassName}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Feature Icon */}
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 object-contain mb-5"
                />
              </div>

              {/* Feature Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mx-2">
                  {feature.title}
                </h3>
                <p className="text-gray-800 leading-relaxed mx-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
