import React from 'react';

interface StatItem {
  value: string;
  description: string;
  bgColor?: string;
}

interface NumberSpeaksProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  className?: string;
}

// Array of background image URLs (public path assumed)
const boxBgImages = [
  '/box-bg-1.png',
  '/box-bg-2.png',
  '/box-bg-3.png',
  '/box-bg-4.png',
];

const NumberSpeaks: React.FC<NumberSpeaksProps> = ({
  title = "Number Speaks",
  subtitle = "Rorem ipsum dolor sit amet, consectetur",
  stats,
  className = ""
}) => {
  // Pick backgrounds based on number of stats (up to 4)
  const bgImages = boxBgImages.slice(0, Math.min(stats.length, 4));

  return (
    <section className={`py-12 md:py-20 bg-[#F5F6FA] ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#232323] mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg font-normal">
            {subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`
            flex flex-col 
            sm:flex-row 
            gap-6 
            justify-center 
            items-stretch
            w-full
          `}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden
                rounded-[16px]
                px-6 py-8
                flex-1
                min-w-[220px]
                min-h-[160px]
                flex flex-col justify-between
                shadow-[0_2px_8px_0_rgba(44,62,80,0.04)]
                bg-cover bg-center
              `}
              style={{
                backgroundImage: `url('${bgImages[index % bgImages.length]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: "0 2px 8px 0 rgba(44,62,80,0.04)",
              }}
            >
              <div className="mb-2">
                <span className="block text-[32px] md:text-[36px] font-semibold text-[#232323] mb-1">
                  {stat.value}
                </span>
                <span className="block text-[13px] md:text-[15px] text-[#6B6B6B] font-medium leading-snug">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberSpeaks;