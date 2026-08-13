import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { useDemoModal } from "../../contexts/DemoModalContext";
import { CheckCircle2, Star } from "lucide-react";

// Use transparent hardware mockup PNGs here.
// They will automatically inherit the 3D perspective and depth-of-field blur.
const MOCKUPS = [
  "/Slate-Hero-1.png", 
  "/Slate-Hero-2.png"
];

const Hero = () => {
  const { openDemoModal } = useDemoModal();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % MOCKUPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Sync notification popups with the 6s animation (tap happens around 2.4s)
  useEffect(() => {
    setShowNotification(false);
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-orange-50/30 to-transparent pb-4 lg:pb-8 flex flex-col justify-center">
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

        /* Video Choreography Keyframes */
        @keyframes touch-tap {
          0%, 15%   { opacity: 0; transform: scale(1.5) translateZ(0); }
          25%, 35%  { opacity: 1; transform: scale(1) translateZ(0); } /* Hovering over button */
          40%       { opacity: 1; transform: scale(0.7) translateZ(0); box-shadow: 0 0 30px rgba(249,115,22,0.8); } /* The Tap */
          45%, 100% { opacity: 0; transform: scale(1) translateZ(0); }
        }
        .animate-touch-tap { animation: touch-tap 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

        @keyframes card-slide {
          0%, 15%   { opacity: 0; transform: translate(70px, -70px) rotate(-15deg); }
          25%, 35%  { opacity: 1; transform: translate(25px, -25px) rotate(-5deg); } /* Approach */
          40%       { opacity: 1; transform: translate(15px, -15px) rotate(0deg); } /* Tap screen */
          45%, 100% { opacity: 0; transform: translate(5px, -5px) rotate(5deg); } /* Pull away */
        }
        .animate-card-slide { animation: card-slide 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

        @keyframes ripple {
          0%, 39%   { opacity: 0; transform: scale(0.5); border-width: 4px; }
          40%       { opacity: 1; transform: scale(1); border-width: 4px; }
          60%       { opacity: 0; transform: scale(3.5); border-width: 0px; }
          100%      { opacity: 0; transform: scale(4); border-width: 0px; }
        }
        .animate-ripple { animation: ripple 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease-in-out infinite;
          background-size: 200% auto;
        }

        @keyframes text-shine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-text-shine {
          background: linear-gradient(
            110deg,
            #242157 35%,
            #8b7bb1 50%,
            #242157 65%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shine 5s ease-in-out infinite;
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

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(99,102,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <section className="relative pt-28 lg:pt-32 pb-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          {/* ── Left Column: Text & CTAs ── */}
          <div className="relative z-20 lg:col-span-6 text-center lg:text-left mx-auto lg:mx-0 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-primary-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300"></span>
              </span>
              LIGHTNING-FAST, FULLY FEATURED, AFFORDABLE POS
            </div>

            <h1 className="font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              The POS Built for{' '}
              <span className="inline-block mt-2 lg:mt-0 animate-text-shine">
                Speed, Performance, and Savings.
              </span>
            </h1>

            <p className="leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-slate-500 text-lg lg:text-xl font-medium">
              SlateX POS delivers cloud-powered reliability to help run your business smoothly. Choose our custom hardware packages or bring your own with zero proprietary lock-ins, wholesale processing rates, and 24/7 dedicated support.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-[#3782fd] hover:bg-blue-600 text-white font-semibold rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base border border-[#3782fd] hover:border-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => navigate('/pricing')}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                See Pricing
              </button>
            </div>

            {/* Trust Signals - Premium Pill Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-bold text-gray-700">
              <div className="flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>No Hardware Lock-In</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Wholesale Processing</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Abstract Floating Cards Layout ── */}
          <div className="relative z-10 w-full max-w-2xl mx-auto lg:col-span-6 mt-6 lg:mt-0 lg:pl-10 h-[320px] sm:h-[450px] lg:h-[650px] flex items-center justify-center">

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
                      loading="eager"
                      fetchpriority="high"
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Interaction Overlay for Slide 0 (Order Placed) */}
                    {index === 0 && isActive && (
                      <div className="absolute top-[66%] left-[65%] sm:top-[66%] sm:left-[65%] z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2">
                        {/* Premium glowing touch indicator */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-touch-tap flex items-center justify-center relative">
                          {/* Glass ring */}
                          <div className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/70 rounded-full shadow-lg"></div>
                          {/* Glowing orange core */}
                          <div className="relative w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-tr from-orange-500 to-primary-400 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.9)] flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-inner"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interaction Overlay for Slide 1 (Payment Received) */}
                    {index === 1 && isActive && (
                      <div className="absolute top-[80%] left-[55%] sm:top-[78%] sm:left-[55%] z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2">
                        {/* The animated realistic credit card */}
                        <div className="animate-card-slide w-24 h-16 sm:w-32 sm:h-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl sm:rounded-2xl border border-slate-700 shadow-2xl flex flex-col justify-between p-2 sm:p-3 transform origin-bottom-right overflow-hidden relative">
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                          
                          <div className="flex justify-between items-start w-full relative z-10">
                            {/* Chip */}
                            <div className="w-5 h-4 sm:w-7 sm:h-5 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded sm:rounded-md flex flex-col justify-evenly overflow-hidden border border-yellow-600/50">
                              <div className="h-[1px] w-full bg-black/20"></div>
                              <div className="h-[1px] w-full bg-black/20"></div>
                            </div>
                            {/* Contactless */}
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14c-.3-.8-.5-1.7-.5-2.6 0-.8.2-1.7.5-2.5M12 15.5c-.6-1.2-1-2.6-1-4.1s.4-2.9 1-4.1M15.5 17c-.9-1.7-1.4-3.6-1.4-5.6s.5-3.9 1.4-5.6"/></svg>
                          </div>
                          
                          <div className="flex justify-between items-end w-full relative z-10">
                            {/* Fake Card Number */}
                            <div className="text-[6px] sm:text-[8px] text-white/40 tracking-widest font-mono font-medium">**** **** **** 4242</div>
                            {/* Card Network Logo */}
                            <div className="flex justify-end items-center -space-x-1 sm:-space-x-2">
                              <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-red-500/80 mix-blend-screen"></div>
                              <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-yellow-500/80 mix-blend-screen"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Foreground UI Notifications (Light Glassmorphism) */}
            <div className={`absolute top-2 right-2 sm:top-[10%] sm:right-[5%] z-30 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${activeIndex === 0 && showNotification ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'}`}>
              <div className="bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-2xl p-3 pr-8 flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                  T4
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-700 font-bold uppercase tracking-wider">SlateX POS</p>
                  <p className="text-sm sm:text-base font-extrabold text-gray-900">Table 4: Order Placed</p>
                </div>
              </div>
            </div>

            <div className={`absolute top-2 right-2 sm:top-[10%] sm:right-[5%] z-30 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${activeIndex === 1 && showNotification ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'}`}>
              <div className="bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-2xl p-3 pr-8 flex items-center gap-4">
                <div className="bg-green-500 text-white rounded-full p-2 shadow-md flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-700 font-bold uppercase tracking-wider">Payment Received</p>
                  <p className="text-sm sm:text-base font-extrabold text-gray-900">$15.00 via Tap</p>
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
