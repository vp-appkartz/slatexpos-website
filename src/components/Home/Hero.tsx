import React from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { useDemoModal } from "../../contexts/DemoModalContext";
import { CheckCircle2, Star } from "lucide-react";

/* ── Scattered floating chips ───────────────────────────────────────── */
const CHIPS = [
  { src: "/icons/Restuarant POS System.svg",          label: "Restaurant POS",   pos: "top-[-5%] left-[-10%]",  delay: "0.0s", dur: "4.7s" },
  { src: "/icons/Kitchen Display System.svg",         label: "Kitchen Display",  pos: "top-[30%] left-[-15%]",  delay: "1.2s", dur: "5.1s" },
  { src: "/icons/Web Ordering.svg",                   label: "Web Ordering",     pos: "bottom-[15%] left-[-8%]", delay: "0.5s", dur: "4.9s" },
  { src: "/icons/Quick Serve Resturants (QSR).svg",   label: "Quick Service",    pos: "top-[5%] right-[-10%]", delay: "0.7s", dur: "5.0s" },
  { src: "/icons/Loyalty & Promotions.svg",           label: "Loyalty",          pos: "top-[40%] right-[-15%]", delay: "1.8s", dur: "5.3s" },
  { src: "/icons/Pizzeria.svg",                       label: "Pizzeria",         pos: "bottom-[10%] right-[-5%]", delay: "1.4s", dur: "5.2s" },
];

const Hero = () => {
  const { openDemoModal } = useDemoModal();
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 to-white min-h-[90vh] flex flex-col justify-center">
      {/* Keyframes */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-15px); }
        }
        @keyframes hero-chip-in {
          from { opacity: 0; transform: translateY(16px) scale(0.88); }
          to   { opacity: 1; transform: translateY(0px)  scale(1);    }
        }
        .animate-hero-float {
          animation: hero-float 6s ease-in-out infinite;
        }
        .tablet-mockup {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 12px #1f2937, 0 0 0 14px #374151;
        }
      `}</style>

      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(99,102,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ── Left Column: Text & CTAs ── */}
          <div className="relative z-10 lg:col-span-5 text-center lg:text-left mx-auto lg:mx-0 w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-primary-300 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300"></span>
              </span>
              Next-Gen Restaurant POS
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              The POS That <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-orange-500">
                Just Works.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-medium text-gray-500 leading-relaxed mb-8 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0">
              Cloud-based. Android-powered. Works offline.
              One flat monthly fee — on hardware you may already own.
            </p>

            {/* CTAs */}
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

            {/* Trust Badges */}
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

          {/* ── Right Column: Interactive Mockup ── */}
          <div className="relative z-10 w-full max-w-2xl mx-auto lg:col-span-7 mt-12 lg:mt-0 xl:pl-10">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] animate-hero-float">
              
              {/* Tablet Frame */}
              <div className="absolute inset-0 bg-white rounded-[2rem] tablet-mockup overflow-hidden z-20 flex flex-col transition-transform duration-500 hover:scale-[1.02]">
                {/* Camera dot */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-800 z-30"></div>
                
                {/* Screen Content */}
                <div className="flex-1 mt-7 mx-2.5 mb-2.5 bg-gray-100 rounded-[1.2rem] overflow-hidden border border-gray-200 relative group cursor-pointer" onClick={openDemoModal}>
                  <img
                    src="/Homescreen-Restraurantpos.webp"
                    alt="SlateX POS Dashboard Interface"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle glare effect over screen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none" />
                  
                  {/* Play/Interact Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 font-bold px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Explore the POS
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative floating chips around the tablet (hidden on very small screens) */}
              <div className="hidden sm:block absolute inset-0 z-30 pointer-events-none">
                {CHIPS.map((c, i) => (
                  <div
                    key={i}
                    className={`absolute flex items-center justify-center group pointer-events-auto cursor-pointer ${c.pos}`}
                    style={{
                      animation: `hero-chip-in 0.6s cubic-bezier(0.22,1,0.36,1) ${c.delay} both,
                                  hero-float ${c.dur} ease-in-out ${c.delay} infinite`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 bg-white/80 backdrop-blur-md border-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.25)] hover:border-orange-200 hover:bg-white"
                    >
                      <img src={c.src} alt={c.label} className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {/* Tooltip-style label on hover */}
                    <span className="absolute opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-xs font-bold bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl -top-10 left-1/2 -translate-x-1/2 pointer-events-none">
                      {c.label}
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </span>
                  </div>
                ))}
              </div>

              {/* Abstract decorative elements behind tablet */}
              <div className="absolute -inset-16 bg-gradient-to-tr from-primary-300/30 via-orange-400/10 to-purple-500/20 blur-3xl -z-10 rounded-[3rem]"></div>
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
