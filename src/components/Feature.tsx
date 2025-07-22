import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItem {
  text: string;
  icon?: React.ReactNode;
}

interface FeaturesProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  buttonText?: string;
  buttonAction?: () => void;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({
  sectionTitle = "Features",
  sectionSubtitle = "Rorem ipsum dolor sit amet, consectetur",
  title,
  description,
  features,
  buttonText = "Let's Connect",
  buttonAction,
  image,
  imageAlt = "Feature Image",
  imageCaption,
  className = ""
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
                {title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {feature.icon || (
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={buttonAction}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <span>{buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {imageCaption && (
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                  <span className="text-gray-700 font-medium text-sm">
                    {imageCaption}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;