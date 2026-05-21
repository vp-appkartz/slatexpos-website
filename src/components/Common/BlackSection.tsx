import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface BlackSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  trustIndicators?: string[];
  className?: string;
}

const defaultProps: Required<Omit<BlackSectionProps, 'onButtonClick' | 'className'>> = {
  title: "Your POS Should Work for You. Not the Other Way Around.",
  description:
    "Restaurants across Canada are stuck paying for bloated systems that require $3,000 hardware purchases, lock them into iPads, and charge extra for every feature you actually need. SlateX is different — one flat monthly fee, runs on hardware you already own, and never goes down when your internet does.",
  buttonText: "Book a Free Demo",
  imageSrc: "/pos-lady.png",
  imageAlt: "Woman working with laptop in restaurant",
  trustIndicators: [
    "Works on Any Android Device",
    "Full Offline Mode",
    "One Monthly Fee",
    "Dedicated Local Support"
  ]
};

const aosAnimations = ["zoom-in-up", "fade-up", "flip-left", "flip-right"];

const BlackSection: React.FC<BlackSectionProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  onButtonClick,
  imageSrc = defaultProps.imageSrc,
  imageAlt = defaultProps.imageAlt,
  trustIndicators = defaultProps.trustIndicators,
  className = ""
}) => {
  const [data] = useState({ title, description, buttonText, imageSrc, imageAlt, trustIndicators });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60, easing: "ease-in-out" });
    return () => { AOS.refresh(); };
  }, []);

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 px-4 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 28%, #fef9ef 58%, #fff4e6 80%, #fff7ed 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 65%)', filter: 'blur(64px)' }} />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)', filter: 'blur(52px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(251,146,60,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — text */}
          <div data-aos="fade-right" data-aos-delay="120">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
              Why SlateX
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              data-aos="fade-down" data-aos-delay="180"
            >
              {data.title}
            </h2>
            <p
              className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-md"
              data-aos="fade-up" data-aos-delay="260"
            >
              {data.description}
            </p>
            {data.buttonText && (
              <button
                className="inline-flex items-center gap-2 bg-primary-300 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                onClick={onButtonClick}
                data-aos="zoom-in" data-aos-delay="340"
              >
                {data.buttonText}
              </button>
            )}
          </div>

          {/* Right — image */}
          <div className="flex justify-center lg:justify-end" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-orange-100">
              <img src={data.imageSrc} alt={data.imageAlt} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        {data.trustIndicators && data.trustIndicators.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.trustIndicators.map((indicator, index) => {
              const aosType = aosAnimations[index % aosAnimations.length];
              const aosDelay = 200 + index * 120;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-orange-100"
                  data-aos={aosType} data-aos-delay={aosDelay}
                >
                  <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-300" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">{indicator}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlackSection;
