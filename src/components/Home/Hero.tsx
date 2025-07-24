import LogoSlider from "../Common/LogoSlider";

const Hero = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
              Run Your Restaurant <span className="font-bold text-gray-700">More Efficiently</span> Smarter
            </h1>

            {/* CTA Button */}
            <button
              className="bg-primary-300 text-lg text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
            </button>
          </div>

          <div className="relative mt-16">
            <div className="flex justify-center items-center relative">
              {/* Center Image */}
              <div className="relative z-10">
                <div className="overflow-hidden">
                  <img 
                    src="/hero-home-center.png" 
                    alt="Restaurant Staff" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Left Top */}
              <div className="absolute top-0 left-[10%] transform -translate-x-32 -translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img 
                    src="/left-t1.png" 
                    alt="Web Ordering" 
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Left Badge */}
              <div className="absolute bottom-[25%] left-[12%] transform -translate-x-24 translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img 
                    src="/left-badge.png" 
                    alt="Loyalty Program" 
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Left Bottom */}
              <div className="absolute bottom-[10%] left-[12%] transform translate-x-8 translate-y-16 z-20">
                <div className="mb-2 overflow-hidden">
                  <img 
                    src="/left-b1.png" 
                    alt="Restaurant POS" 
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Top */}
              <div className="absolute top-[5%] right-[22%] transform translate-x-32 -translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img 
                    src="/right-t1.png" 
                    alt="Payment Processing" 
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Badge */}
              <div className="absolute top-0 right-[10%] transform translate-x-24 translate-y-12 z-20">
                <div className="flex-1 mb-1 overflow-hidden">
                  <img 
                    src="/right-badge.png" 
                    alt="Gift Card" 
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Bottom */}
              <div className="absolute bottom-[5%] right-[2%] transform translate-x-20 translate-y-8 z-20">
                <div className="flex-1 mb-2 overflow-hidden">
                  <img 
                    src="/right-b1.png" 
                    alt="Kitchen Display" 
                    className="w-[85%] h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Slider Section */}
      <LogoSlider />
    </div>
  );
};

export default Hero;
