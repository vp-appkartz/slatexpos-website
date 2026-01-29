import { useState, useEffect } from "react";
import LogoSlider from "../Common/LogoSlider";
import { subscribeToHeroPageData, HeroPageContent } from "../../services/firestoreService";

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroPageContent['hero'] | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToHeroPageData((data) => {
      if (data && data.hero) {
        setHeroData(data.hero);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Default values if data hasn't loaded or fields are missing
  const heading = heroData?.heading || "Run Your Restaurant";
  const highlightedText = heroData?.highlightedText || "More Efficiently";
  const suffixText = heroData?.suffixText || "Smarter";
  const buttonText = heroData?.buttonText || "Let's Connect";
  const bgImage = heroData?.backgroundImage || "/bg.png";

  const centerImage = heroData?.centerImage || "/hero-home-center.png";
  const images = {
    leftTop: heroData?.images?.leftTop || "/left-t1.png",
    leftBadge: heroData?.images?.leftBadge || "/left-badge.png",
    leftBottom: heroData?.images?.leftBottom || "/left-b1.png",
    rightTop: heroData?.images?.rightTop || "/right-t1.png",
    rightBadge: heroData?.images?.rightBadge || "/right-badge.png",
    rightBottom: heroData?.images?.rightBottom || "/right-b1.png",
  };

  return (
    <div
      className="relative overflow-hidden mt-20"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-4 sm:mb-6 px-2">
              {heading} <span className="font-bold text-gray-700">{highlightedText}</span> {suffixText}
            </h1>

            {/* CTA Button */}
            <button
              className="bg-primary-300 text-base sm:text-lg text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {buttonText}
            </button>
          </div>

          {/* Desktop Layout - Hidden on mobile and tablet */}
          <div className="relative mt-16 hidden xl:block">
            <div className="flex justify-center items-center relative">
              {/* Center Image */}
              <div className="relative z-10">
                <div className="overflow-hidden">
                  <img
                    src={centerImage}
                    alt="Restaurant Staff"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Left Top */}
              <div className="absolute top-0 left-[10%] transform -translate-x-32 -translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img
                    src={images.leftTop}
                    alt="Web Ordering"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Left Badge */}
              <div className="absolute bottom-[25%] left-[12%] transform -translate-x-24 translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img
                    src={images.leftBadge}
                    alt="Loyalty Program"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Left Bottom */}
              <div className="absolute bottom-[10%] left-[12%] transform translate-x-8 translate-y-16 z-20">
                <div className="mb-2 overflow-hidden">
                  <img
                    src={images.leftBottom}
                    alt="Restaurant POS"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Top */}
              <div className="absolute top-[5%] right-[22%] transform translate-x-32 -translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img
                    src={images.rightTop}
                    alt="Payment Processing"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Badge */}
              <div className="absolute top-0 right-[10%] transform translate-x-24 translate-y-12 z-20">
                <div className="flex-1 mb-1 overflow-hidden">
                  <img
                    src={images.rightBadge}
                    alt="Gift Card"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Bottom */}
              <div className="absolute bottom-[5%] right-[2%] transform translate-x-20 translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img
                    src={images.rightBottom}
                    alt="Kitchen Display"
                    className="w-[85%] h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="mt-6 sm:mt-10 xl:hidden">
            {/* Mobile: Only girl image centered */}
            <div className="block sm:hidden">
              <div className="flex justify-center px-4">
                {/* Center girl image only */}
                <div className="w-full max-w-sm">
                  <img
                    src={centerImage}
                    alt="Restaurant Staff"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Tablet: Show main image prominently */}
            <div className="hidden sm:block xl:hidden">
              <div className="flex justify-center">
                <div className="w-full max-w-md lg:max-w-lg">
                  <img
                    src={centerImage}
                    alt="Restaurant Staff"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Slider Section */}
      <div className="relative z-10 mt-6 sm:mt-8 pb-8">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Hero;