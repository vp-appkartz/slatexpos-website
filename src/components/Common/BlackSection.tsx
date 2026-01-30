import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { subscribeToHeroPageData } from '../../services/firestoreService';

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
  title: "Free for 90 Days",
  description:
    "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut",
  buttonText: "Signup Now",
  imageSrc: "/pos-lady.png",
  imageAlt: "Woman working with laptop in restaurant",
  trustIndicators: [
    "200+ Loyal Partner",
    "Reliable Hardware",
    "No Hidden Charges",
    "24/7 Customer"
  ]
};

const aosAnimations = [
  "zoom-in-up",
  "fade-up",
  "flip-left",
  "flip-right"
];

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
  const [data, setData] = useState({
    title,
    description,
    buttonText,
    imageSrc,
    imageAlt,
    trustIndicators
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // Animation will trigger every time on scroll into view
      offset: 60,
      easing: "ease-in-out",
    });

    const unsubscribe = subscribeToHeroPageData((heroData) => {
      if (heroData && heroData.blackSection) {
        setData({
          title: heroData.blackSection.title || defaultProps.title,
          description: heroData.blackSection.description || defaultProps.description,
          buttonText: heroData.blackSection.buttonText || defaultProps.buttonText,
          imageSrc: heroData.blackSection.imageSrc || defaultProps.imageSrc,
          imageAlt: heroData.blackSection.imageAlt || defaultProps.imageAlt,
          trustIndicators: heroData.blackSection.trustIndicators && heroData.blackSection.trustIndicators.length > 0
            ? heroData.blackSection.trustIndicators
            : defaultProps.trustIndicators
        });
      }
    });

    return () => {
      AOS.refresh();
      unsubscribe();
    };
  }, []);

  return (
    <section className={`bg-black py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div
            className="text-white"
            data-aos="fade-right"
            data-aos-delay="120"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6" data-aos="fade-down" data-aos-delay="180">
              {data.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-md" data-aos="fade-up" data-aos-delay="260">
              {data.description}
            </p>
            {data.buttonText && (
              <button
                className="bg-primary-300 text-base sm:text-lg hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={onButtonClick}
                data-aos="zoom-in"
                data-aos-delay="340"
              >
                {data.buttonText}
              </button>
            )}
          </div>

          {/* Right Content - Image */}
          <div
            className="flex justify-center lg:justify-end"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.imageSrc}
                alt={data.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        {data.trustIndicators && data.trustIndicators.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.trustIndicators.map((indicator, index) => {
              const aosType = aosAnimations[index % aosAnimations.length];
              const aosDelay = 200 + index * 120;
              return (
                <div
                  key={index}
                  className="flex items-center text-white"
                  data-aos={aosType}
                  data-aos-delay={aosDelay}
                >
                  <Check className="w-5 h-5 text-primary-300 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-medium">{indicator}</span>
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