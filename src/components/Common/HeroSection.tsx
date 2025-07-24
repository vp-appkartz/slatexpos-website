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
          className={` flex items-center py-8 sm:py-12 lg:py-0 ${className}`}
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
                <div className="w-full rounded-2xl overflow-hidden z-30 opacity-100 flex items-center "
                  data-aos="zoom-in-up"
                  data-aos-delay="350"
                >
                  <img
                    src={mainImage}
                    alt={mainImageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Optionally, you can add a floating device image for extra animation */}
                
              
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
