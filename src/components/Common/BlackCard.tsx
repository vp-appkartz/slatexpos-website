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
  // Determine grid columns based on item count
  let gridCols = "grid-cols-1";
  if (items.length === 3) {
    gridCols = "md:grid-cols-3";
  } else if (items.length === 4) {
    gridCols = "md:grid-cols-4";
  } else if (items.length === 2) {
    gridCols = "md:grid-cols-2";
  } else if (items.length > 4) {
    gridCols = "md:grid-cols-4";
  }

  // Center the cards if less than 4
  const justifyClass =
    items.length < 4
      ? "justify-center"
      : "";

  return (
    <section className={`py-20 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-lg text-white">
            {subheading}
          </p>
        </div>

        {/* Results Grid */}
        <div
          className={`
            grid gap-6 ${gridCols} ${justifyClass} ${gridClassName}
            sm:justify-center
          `}
          style={
            items.length < 4
              ? {
                  justifyItems: "center",
                }
              : undefined
          }
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-800 rounded-xl p-6 hover:bg-gray-700 border-2 border-gray-700 
                transition-colors duration-300 flex flex-col items-start text-left
                mx-auto
                w-full
                sm:w-[90%]
                md:w-auto
                "
              style={{ maxWidth: "320px", width: "100%" }}
            >
              {/* Result Icon */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain mb-5"
                />
              </div>

              {/* Result Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
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
