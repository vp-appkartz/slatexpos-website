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
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // Check if device is mobile to prevent AOS animations on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only initialize AOS on larger screens to prevent mobile horizontal scrollbar issues
    if (!isMobile) {
      AOS.init({
        duration: 900,
        once: true,
        offset: 60,
        easing: "ease-in-out",
      });
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <>
      <section
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",         /* prevent child mt-[140px] margin collapse */
        }}
      >
        <section
          className={`flex items-center pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-16 ${className}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 xl:gap-24 relative z-10">
              {/* Left Content */}
              <div
                className="col-span-1 flex flex-col justify-center order-2 lg:order-1"
                {...(!isMobile && { "data-aos": "fade-right", "data-aos-delay": "100" })}
              >
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-bold text-gray-800 max-w-xs lg:max-w-none"
                  style={{ lineHeight: "1.3" }}
                >
                  {title}
                </h1>
                <p
                  className="font-semibold text-sm sm:text-base lg:text-lg xl:text-[20px] text-gray-600 leading-relaxed lg:leading-8 tracking-[0.04em] max-w-lg mt-2 sm:mt-3 lg:mt-4"
                  {...(!isMobile && { "data-aos": "fade-up", "data-aos-delay": "250" })}
                >
                  {description}
                </p>
                <button
                  onClick={buttonAction}
                  className="bg-primary-300 hover:bg-orange-600 w-fit mt-3 sm:mt-4 lg:mt-5 text-white font-bold text-lg leading-[100%] tracking-[0.04em] px-6 sm:px-8 lg:px-[40px] py-2.5 sm:py-3 lg:py-[20px] rounded-[10px] transition-all duration-300 shadow-lg"
                  {...(!isMobile && { "data-aos": "zoom-in", "data-aos-delay": "400" })}
                >
                  {buttonText}
                </button>
              </div>

              {/* Right Visual Section */}
              <div
                className="relative flex items-center justify-center order-1 lg:order-2 min-h-[200px] sm:min-h-[250px] lg:min-h-[400px] xl:min-h-[500px]"
                {...(!isMobile && { "data-aos": "fade-left", "data-aos-delay": "200" })}
              >
                {/* Main image */}
                <div
                  className="w-full rounded-2xl overflow-hidden z-30 opacity-100 flex items-center"
                  {...(!isMobile && { "data-aos": "zoom-in-up", "data-aos-delay": "350" })}
                >
                  <img
                    src={mainImage}
                    alt={mainImageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-4 sm:mt-6 lg:mt-8">
          <LogoSlider />
        </div>
      </section>
    </>
  );
};

export default HeroSection;