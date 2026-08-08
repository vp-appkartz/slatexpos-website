import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { useDemoModal } from "../../contexts/DemoModalContext";
import { CheckCircle2, Star } from "lucide-react";

const MOCKUPS = [
  "/Homescreen-Restraurantpos.webp",
  "/kitchen-1.webp",
  "/reporting.webp"
];

const Hero = () => {
  const { openDemoModal } = useDemoModal();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % MOCKUPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 to-white min-h-[90vh] flex flex-col justify-center">
      {/* Keyframes */}
      <style>{`
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(-15deg); }
          50%      { transform: translateY(-20px) rotateX(12deg) rotateY(-18deg); }
        }
        .animate-float-subtle {
          animation: float-subtle 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(99,102,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          
          {/* ── Left Column: Text & CTAs ── */}
          <div className="relative z-20 lg:col-span-5 text-center lg:text-left mx-auto lg:mx-0 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-primary-300 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300"></span>
              </span>
              Next-Gen Restaurant POS
            </div>

            <h1 className="font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              The POS That <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-orange-500">
                Just Works.
              </span>
            </h1>

            <p className="font-medium text-gray-500 leading-relaxed mb-8 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0">
              Cloud-based. Android-powered. Works offline.
              One flat monthly fee — on hardware you may already own.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={openDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-bold rounded-xl px-8 py-4 text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-bold rounded-xl px-8 py-4 text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                See Pricing
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                No hardware lock-in
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Zero monthly fees
              </div>
              <div className="flex items-center gap-1.5 mt-1 sm:mt-0">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 Reviews</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Apple-Style Isometric 3D Stack ── */}
          <div className="relative z-10 w-full max-w-2xl mx-auto lg:col-span-7 mt-12 lg:mt-0 lg:pl-10 h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
            
            <div 
              className="relative w-full max-w-[90%] sm:max-w-[85%] aspect-[16/10] animate-float-subtle"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-24deg) rotateX(12deg) rotateZ(6deg)' }}
            >
              {MOCKUPS.map((mockup, index) => {
                const offset = (index - activeIndex + MOCKUPS.length) % MOCKUPS.length;
                
                // Calculate dynamic positioning for the isometric stack
                let transform = '';
                let opacity = '0';
                let zIndex = 0;
                let blur = '0px';
                
                if (offset === 0) {
                  // Front (Active)
                  transform = 'translateZ(120px) translateX(-30px) translateY(-15px)';
                  opacity = '1';
                  zIndex = 30;
                  blur = '0px';
                } else if (offset === 1) {
                  // Middle (Next in line)
                  transform = 'translateZ(0px) translateX(20px) translateY(0px)';
                  opacity = '0.65';
                  zIndex = 20;
                  blur = '3px';
                } else if (offset === 2) {
                  // Back (Waiting)
                  transform = 'translateZ(-120px) translateX(70px) translateY(15px)';
                  opacity = '0.25';
                  zIndex = 10;
                  blur = '6px';
                }

                return (
                  <div 
                    key={mockup}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) cursor-pointer rounded-2xl overflow-hidden"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      filter: `blur(${blur})`,
                      boxShadow: offset === 0 ? '-25px 35px 60px -15px rgba(249,115,22,0.25), -10px 15px 30px -10px rgba(0,0,0,0.2)' : '-10px 15px 30px -10px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.7)',
                      background: 'rgba(255,255,255,0.1)'
                    }}
                    onClick={openDemoModal}
                  >
                    <img
                      src={mockup}
                      alt="SlateX UI Mockup"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Glass/Glare overlay to enhance 3D feel */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/30 pointer-events-none" />
                  </div>
                );
              })}
            </div>

            {/* Glowing background behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-primary-300/40 via-orange-400/20 to-purple-500/30 blur-[80px] -z-10 rounded-full mix-blend-multiply"></div>
          </div>

        </div>
      </section>

      {/* ── Logo slider ── */}
      <div className="pt-4 pb-8 relative z-20">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Hero;
