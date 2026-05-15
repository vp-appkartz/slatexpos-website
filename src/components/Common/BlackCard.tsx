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
  // Determine grid columns based on item count for large screens
  let desktopGridCols = "lg:grid-cols-1";
  if (items.length === 3) {
    desktopGridCols = "lg:grid-cols-3";
  } else if (items.length >= 4) {
    desktopGridCols = "lg:grid-cols-4";
  } else if (items.length === 2) {
    desktopGridCols = "lg:grid-cols-2";
  }

  return (
    <section className={`py-24 md:py-32 relative ${className}`}
      style={{ background: 'linear-gradient(to bottom, transparent 0%, #060612 9%, #0f0f1e 50%, #090916 91%, transparent 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl">
            {subheading}
          </p>
        </div>

        {/* Results Grid */}
        <div
          className={`
            grid gap-6 
            grid-cols-1 
            md:grid-cols-2 
            ${desktopGridCols}
            ${gridClassName}
          `}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-800 rounded-xl p-6 hover:bg-gray-700 border-2 border-gray-700 
                transition-colors duration-300 flex flex-col items-start text-left
                w-full mx-auto h-full
                "
            >
              {/* Result Icon */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain mb-5"
                />
              </div>

              {/* Result Content */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
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
