import React from "react";

export interface BlackCardItem {
  image: string;
  title: string;
  description: string;
}

export interface BlackCardSectionProps {
  items: BlackCardItem[];
  heading?: string;
  subheading?: string;
  className?: string;
  gridClassName?: string;
}

const BlackCardSection: React.FC<BlackCardSectionProps> = ({
  items,
  heading = "Results You Can Expect",
  subheading = "Powerful Tools. Seamless Experience.",
  className = "",
  gridClassName = "",
}) => {
  return (
    <section className={`py-20 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-300">
            {subheading}
          </p>
        </div>

        {/* Results Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${gridClassName}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 border-2 border-gray-700 transition-colors duration-300"
            >
              {/* Result Icon */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain mb-5"
                />
              </div>

              {/* Result Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackCardSection;
