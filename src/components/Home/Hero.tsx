import React from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { useDemoModal } from "../../contexts/DemoModalContext";

/* ── Scattered floating chips ─────────────────────────────────────────
   top = px from section top  |  left/right = % of section width
   Mix of products (left) and industries (right), varied depth offsets
────────────────────────────────────────────────────────────────────── */
const CHIPS = [
  /* ── Products — left side, staggered inward ── */
  { src: "/icons/Restuarant POS System.svg",          label: "Restaurant POS",   top: 148, side: "left",  offset: "1.5%",  delay: "0.0s", dur: "4.7s" },
  { src: "/icons/Kitchen Display System.svg",         label: "Kitchen Display",  top: 230, side: "left",  offset: "9%",    delay: "1.2s", dur: "5.1s" },
  { src: "/icons/Web Ordering.svg",                   label: "Web Ordering",     top: 316, side: "left",  offset: "2.5%",  delay: "0.5s", dur: "4.9s" },
  { src: "/icons/Loyalty & Promotions.svg",           label: "Loyalty",          top: 390, side: "left",  offset: "11%",   delay: "1.8s", dur: "5.3s" },
  /* ── Industries — right side, staggered inward ── */
  { src: "/icons/Quick Serve Resturants (QSR).svg",   label: "Quick Service",    top: 142, side: "right", offset: "2%",    delay: "0.7s", dur: "5.0s" },
  { src: "/icons/Casual Dining.svg",                  label: "Casual Dining",    top: 225, side: "right", offset: "10%",   delay: "0.2s", dur: "4.6s" },
  { src: "/icons/Pizzeria.svg",                       label: "Pizzeria",         top: 310, side: "right", offset: "3%",    delay: "1.4s", dur: "5.2s" },
  { src: "/icons/Branded Mobile App.svg",             label: "Mobile App",       top: 385, side: "right", offset: "12%",   delay: "0.9s", dur: "4.8s" },
];

/* ── Hero ──────────────────────────────────────────────────────────── */
const Hero = () => {
  const { openDemoModal } = useDemoModal();
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Keyframes */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-10px); }
        }
        @keyframes hero-chip-in {
          from { opacity: 0; transform: translateY(16px) scale(0.88); }
          to   { opacity: 1; transform: translateY(0px)  scale(1);    }
        }
      `}</style>

      {/* Glow orbs */}
      <div className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,246,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* ── Text section — chips are absolutely positioned inside ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 text-center px-4">

        {/* Scattered chips — desktop only */}
        <div className="hidden xl:block pointer-events-none">
          {CHIPS.map((c, i) => {
            const isLeft = c.side === "left";
            return (
              <div
                key={i}
                className="absolute flex items-center gap-2"
                style={{
                  top: c.top,
                  ...(isLeft ? { left: c.offset } : { right: c.offset }),
                  animation: `hero-chip-in 0.65s cubic-bezier(0.22,1,0.36,1) ${c.delay} both,
                              hero-float   ${c.dur}  ease-in-out            ${c.delay} infinite`,
                }}
              >
                {/* Right chips: label first, then icon */}
                {!isLeft && (
                  <span className="text-[13px] font-semibold text-gray-700 whitespace-nowrap">
                    {c.label}
                  </span>
                )}
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.95)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)",
                  }}
                >
                  <img src={c.src} alt={c.label} className="w-6 h-6 object-contain" />
                </div>
                {/* Left chips: icon first, then label */}
                {isLeft && (
                  <span className="text-[13px] font-semibold text-gray-700 whitespace-nowrap">
                    {c.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Text content with subtle glass backdrop ── */}
        <div className="relative z-10 inline-block w-full max-w-3xl mx-auto">
          {/* Glass background behind text */}
          <div
            className="absolute inset-x-0 inset-y-0 -mx-8 sm:-mx-12 rounded-3xl pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.52)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.70)",
              boxShadow: "0 8px 40px rgba(249,110,77,0.06), 0 2px 12px rgba(0,0,0,0.04)",
            }}
          />

          {/* Eyebrow */}
          <p className="relative text-sm font-bold tracking-widest uppercase text-orange-500 mb-5 pt-6">
            Restaurant POS · Canada
          </p>

          {/* Headline */}
          <h1
            className="relative font-extrabold text-gray-900 leading-tight tracking-tight mb-5 mx-auto"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", wordBreak: "break-word" }}
          >
            The POS That{" "}
            <span className="text-primary-300">Just Works.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="relative font-medium text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 whitespace-pre-line"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
          >
            {"Cloud-based. Android-powered. Works offline.\nOne flat monthly fee — on hardware you may already own."}
          </p>

          {/* CTAs */}
          <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-6">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-bold rounded-full px-7 py-3 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Book a Free Demo
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 font-bold rounded-full px-7 py-3 text-base hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              See Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="relative w-full">
        <img
          src="/hero-home.webp"
          alt="Restaurant staff using SlateX POS"
          className="w-full object-cover object-top"
          style={{ maxHeight: "620px" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #fff8f3 100%)" }}
        />
      </div>

      {/* ── Logo slider ── */}
      <div className="pb-8">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Hero;
