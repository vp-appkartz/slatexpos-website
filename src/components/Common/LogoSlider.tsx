import React, { useRef, useEffect } from 'react';

const clientLogos = [
  { src: '/flavours_of_gujarat.png', alt: 'Flavours of Gujarat' },
  { src: '/bombay_st.png', alt: 'Bombay Street' },
  { src: '/desi_loco.png', alt: 'Desi Loco' },
  { src: '/virsa.png', alt: 'Virsa' },
  { src: '/split_mil.png', alt: 'Split Mil' },
  { src: '/trademark.png', alt: 'Trademark' },
  // Add more logos as needed
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let scrollAmount = 0;

    // Duplicate the logos for seamless infinite scroll
    const totalWidth = slider.scrollWidth / 2;

    const scrollStep = () => {
      scrollAmount += 1; // px per frame
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative py-4 overflow-hidden">
      <div className=" pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sliderRef}
          className="flex items-center space-x-12 overflow-x-hidden whitespace-nowrap"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Duplicate logos for seamless infinite scroll */}
          {[...clientLogos, ...clientLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 160, height: 80 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain"
                style={{ maxWidth: 140, maxHeight: 64 }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;