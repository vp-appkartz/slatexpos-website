import React, { useRef, useEffect, useState } from 'react';
import { subscribeToHeroPageData } from '../../services/firestoreService';

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [logos, setLogos] = useState<Array<{ id?: string; src: string; alt: string }>>([]);

  useEffect(() => {
    const unsubscribe = subscribeToHeroPageData((data) => {
      if (data && data.hero && data.hero.logos) {
        setLogos(data.hero.logos);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || logos.length === 0) return;

    let animationFrame: number;
    let scrollAmount = 0;

    // Calculate total width of one set of logos
    // We need to wait for render to get accurate scrollWidth, but for now we can rely on content
    // Better approach for smooth loop:
    // We duplicate content. When scrollLeft reaches half of scrollWidth, reset to 0.

    const scrollStep = () => {
      if (!slider) return;
      scrollAmount += 1; // Adjusted speed for smoother look

      // If we've scrolled past the first set of logos (half the total width)
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }

      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [logos]);

  if (logos.length === 0) return null;

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
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.id || idx} -${idx} `} // Ensure unique key for duplicated items
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

export default LogoSlider