import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    // Set once: false so animation triggers every time the element enters the viewport
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-in-out",
    });
    // Optionally, refresh AOS on update
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={`py-8 sm:py-14 md:py-15 bg-gray-100  ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-xl font-medium">
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
          {stats.map((stat, index) => {
            // Animate each card with a staggered delay and cool effect
            // Use different AOS animations for variety
            const aosAnimations = [
              "zoom-in-up",
              "fade-up",
              "flip-left",
              "flip-right"
            ];
            const aosType = aosAnimations[index % aosAnimations.length];
            const aosDelay = 200 + index * 120;

            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden
                  rounded-[16px]
                  px-5 sm:px-6 py-7 sm:py-8
                  flex-1
                  min-w-[180px] sm:min-w-[200px] md:min-w-[220px]
                  min-h-[140px] sm:min-h-[150px] md:min-h-[160px]
                  flex flex-col justify-between
                  shadow-[0_2px_12px_0_rgba(44,62,80,0.07)]
                  bg-cover bg-center
                  transition-transform duration-300
                  hover:scale-[1.045] hover:shadow-xl
                  group
                `}
                style={{
                  backgroundImage: `url('${bgImages[index % bgImages.length]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: "0 2px 12px 0 rgba(44,62,80,0.07)",
                }}
                data-aos={aosType}
                data-aos-delay={aosDelay}
              >
                <div className="mb-2 flex-1 flex flex-col justify-center items-start">
                  <span className="block text-3xl sm:text-4xl md:text-5xl text-left font-bold text-gray-900 mb-1 drop-shadow  transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="block text-sm sm:text-base md:text-lg text-gray-800 max-w-[170px] mt-4 font-medium">
                    {stat.description}
                  </span>
                </div>
                {/* Optional: Add a subtle animated overlay for extra coolness */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="w-full h-full bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumberSpeaks;