import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { useDemoModal } from "../../contexts/DemoModalContext";
import { CheckCircle2, Star } from "lucide-react";

// Use transparent hardware mockup PNGs here.
// They will automatically inherit the 3D perspective and depth-of-field blur.
const MOCKUPS = [
  "/slatex-terminal-1-hero.png", 
  "/slatex-terminal--2-hero.png"
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
        
        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-12px) rotate(3deg); }
        }
        .animate-float-card { 
          animation: float-card 6s ease-in-out infinite; 
        }
        
        @keyframes float-card-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(15px) rotate(-2deg); }
        }
        .animate-float-card-reverse { 
          animation: float-card-reverse 7s ease-in-out infinite; 
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

          {/* ── Right Column: Abstract 3D & Floating Cards Layout ── */}
          <div className="relative z-10 w-full max-w-2xl mx-auto lg:col-span-7 mt-12 lg:mt-0 lg:pl-10 h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
            
            {/* Background 3D Abstract Shapes */}
            <div className="absolute top-[5%] right-[0%] w-32 h-32 md:w-48 md:h-48 opacity-90 animate-float-card" style={{ zIndex: 0 }}>
              <img src="/3d-shapes/purple_torus.png" alt="3D Torus" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            
            <div className="absolute bottom-[5%] left-[0%] w-40 h-40 md:w-56 md:h-56 opacity-80 animate-float-card-reverse" style={{ zIndex: 0 }}>
              <img src="/3d-shapes/orange_helix.png" alt="3D Helix" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            
            {/* Vector Accent / Squiggles */}
            <svg className="absolute top-[25%] left-[-5%] w-24 h-12 text-primary-400 opacity-80" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20 Q 20 5, 35 20 T 65 20 T 95 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>

            <svg className="absolute bottom-[15%] right-[5%] w-12 h-12 text-purple-400 opacity-60 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor" />
            </svg>

            {/* The Main Media Container */}
            <div 
              className="relative w-full max-w-[110%] sm:max-w-[115%] scale-105 sm:scale-110 aspect-[16/10] transition-all duration-700 ease-out z-20 cursor-pointer"
              onClick={openDemoModal}
            >
              {MOCKUPS.map((mockup, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <div 
                    key={`${mockup}-${index}`}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[1500ms] ease-in-out ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  >
                    <img
                      src={mockup}
                      alt="SlateX Hardware"
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Floating Foreground UI Cards */}
            <div className="absolute top-[20%] left-[-15%] sm:left-[-10%] z-30 animate-float-card">
              <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="bg-green-100 text-green-600 rounded-full p-2 shadow-inner">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Payment Success</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900">$42.50</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-[-10%] sm:right-[-5%] z-30 animate-float-card-reverse">
              <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md ring-4 ring-white/50">
                  T4
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">New Order Ready</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900">Table 4</p>
                </div>
              </div>
            </div>

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
