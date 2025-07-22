import React, { useEffect } from "react";
import LogoSlider from "./LogoSlider";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  mainImage: string;
  mainImageAlt?: string;
  deviceImage: string;
  deviceImageAlt?: string;
  deviceTitle: string;
  deviceDescription: string;
  backgroundText: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText = "Let's Connect",
  buttonAction,
  mainImage,
  mainImageAlt = "Hero Image",
  deviceImage,
  deviceImageAlt = "Device Image",
  deviceTitle,
  deviceDescription,
  backgroundText,
  backgroundImage = "/bg.png",
  className = "",
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section
          className={`min-h-screen flex items-center py-8 sm:py-12 lg:py-0 ${className}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative z-10">
              {/* Left Content */}
              <div
                className="col-span-1 flex flex-col justify-center order-2 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-semibold text-gray-800 leading-tight lg:leading-[100%] tracking-[0.02em]">
                  {title}
                </h1>
                <p className="font-medium text-base sm:text-lg lg:text-xl xl:text-[20px] text-gray-600 leading-relaxed lg:leading-8 tracking-[0.04em] max-w-lg mt-4 sm:mt-6"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  {description}
                </p>
                <button
                  onClick={buttonAction}
                  className="bg-orange-500 hover:bg-orange-600 w-fit mt-4 sm:mt-5 text-white font-bold text-sm leading-[100%] tracking-[0.04em] px-6 sm:px-8 lg:px-[40px] py-3 sm:py-4 lg:py-[20px] rounded-[10px] transition-all duration-300 shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  {buttonText}
                </button>
              </div>

              {/* Right Visual Section */}
              <div
                className="relative flex items-center justify-center order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {/* Main image */}
                <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[635px] h-[240px] sm:h-[320px] lg:h-[400px] xl:h-[496px] rounded-2xl overflow-hidden z-30 opacity-100 flex items-center shadow-2xl"
                  data-aos="zoom-in-up"
                  data-aos-delay="350"
                >
                  <img
                    src={mainImage}
                    alt={mainImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Optionally, you can add a floating device image for extra animation */}
                {deviceImage && (
                  <div
                    className="absolute bottom-[-30px] right-[-20px] sm:bottom-[-40px] sm:right-[-30px] lg:bottom-[-60px] lg:right-[-40px] xl:bottom-[-80px] xl:right-[-60px] w-[80px] sm:w-[120px] lg:w-[160px] xl:w-[200px] drop-shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img
                      src={deviceImage}
                      alt={deviceImageAlt}
                      className="w-full h-auto rounded-xl border-4 border-white"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] w-max text-center">
                      <div className="bg-white/80 px-2 py-1 rounded-lg shadow text-xs font-semibold text-gray-700">
                        {deviceTitle}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">{deviceDescription}</div>
                    </div>
                  </div>
                )}
              
              </div>
            </div>
          </div>
        </section>
        <LogoSlider />
      </section>
    </>
  );
};

export default HeroSection;
