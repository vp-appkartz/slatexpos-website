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
  let desktopGridCols = "lg:grid-cols-1";
  if (items.length === 3)      desktopGridCols = "lg:grid-cols-3";
  else if (items.length >= 4)  desktopGridCols = "lg:grid-cols-4";
  else if (items.length === 2) desktopGridCols = "lg:grid-cols-2";

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #eef2ff 0%, #ede9fe 35%, #faf5ff 65%, #f0f4ff 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)', filter: 'blur(64px)' }} />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)', filter: 'blur(56px)' }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)', filter: 'blur(48px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-indigo-500 mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            {subheading}
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${desktopGridCols} ${gridClassName}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md border border-indigo-50
                hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackCardSection;
