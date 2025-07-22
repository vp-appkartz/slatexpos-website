import React from 'react';
import LogoSlider from './LogoSlider';

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
  className = ""
}) => {
  return (
    <>
    <section   style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
    <section
      className={`min-h-screen flex items-center py-8 sm:py-12 lg:py-0 ${className}`}
    
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative z-10">
          {/* Left Content */}
          <div className="col-span-1 flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-semibold text-gray-800 leading-tight lg:leading-[100%] tracking-[0.02em]">
              {title}
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl xl:text-[20px] text-gray-600 leading-relaxed lg:leading-8 tracking-[0.04em] max-w-lg mt-4 sm:mt-6">
              {description}
            </p>
            <button 
              onClick={buttonAction}
              className="bg-orange-500 hover:bg-orange-600 w-fit mt-4 sm:mt-5 text-white font-bold text-sm leading-[100%] tracking-[0.04em] px-6 sm:px-8 lg:px-[40px] py-3 sm:py-4 lg:py-[20px] rounded-[10px] transition-all duration-300"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Visual Section */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* Main image */}
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[635px] h-[240px] sm:h-[320px] lg:h-[400px] xl:h-[496px] rounded-2xl overflow-hidden z-30 opacity-100 flex items-center">
              <img
                src={mainImage}
                alt={mainImageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Device/Card overlay */}
            {/* <div className="absolute z-30 top-[60px] sm:top-[100px] lg:top-[120px] xl:top-[160px] right-[10px] sm:right-[20px] lg:right-[30px] xl:right-[50px] rounded-[12px] bg-white opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-[140px] sm:w-[180px] lg:w-[200px] xl:w-[250px] h-[220px] sm:h-[230px] lg:h-[260px] xl:h-[350px] flex flex-col border-2 border-[#e0e7ef]">
              <div className="mt-1 lg:mt-2 p-1 sm:p-2">
                <img
                  src={deviceImage}
                  alt={deviceImageAlt}
                  className="w-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col mx-1 sm:mx-2 sm:p-2">
                <h3 className="font-bold text-xs sm:text-sm leading-[100%] tracking-[0.02em] text-left">
                  {deviceTitle}
                </h3>
                <p className="font-medium text-[10px] sm:text-xs leading-[100%] tracking-[0.04em] p-1">
                  {deviceDescription}
                </p>
              </div>
            </div> */}

            {/* Background text */}
            {/* <span
              className="absolute left-[-20px] sm:left-[-40px] lg:left-[-60px] bottom-[-20px] sm:bottom-[-40px] lg:bottom-[-60px] z-40 select-none pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="font-extrabold text-[60px] sm:text-[80px] lg:text-[120px] xl:text-[150px] text-white/40 drop-shadow-lg z-40 tracking-tight leading-none mx-3"
                style={{
                  WebkitTextStroke: "2px #fff",
                  color: "transparent",
                  textShadow: "0 4px 32px rgba(0,0,0,0.08)",
                  letterSpacing: "-0.04em",
                  lineHeight: "1",
                }}
              >
                {backgroundText}
              </span>
            </span> */}
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