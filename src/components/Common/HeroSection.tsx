import React from "react";
import { useDemoModal } from "../../contexts/DemoModalContext";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  mainImage: string;
  mainImageAlt?: string;
  deviceImage?: string;
  deviceImageAlt?: string;
  deviceTitle?: string;
  deviceDescription?: string;
  backgroundText?: string;
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
  backgroundText,
  className = "",
}) => {
  const { openDemoModal } = useDemoModal();
  const handleCTA = buttonAction ?? openDemoModal;

  return (
    <section
      className={`relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 ${className}`}
    >
      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes hsl {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes hsr {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes hsfloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        .hero-slide-left  { animation: hsl 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-slide-right { animation: hsr 0.65s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
        .hero-float       { animation: hsfloat 6s ease-in-out infinite; }
      `}</style>

      {/* ── Subtle light gradient background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #fffaf6 0%, #fafafa 45%, #f3f0ff 100%)",
        }}
      />

      {/* ── Orange glow — top right ── */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,110,77,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Purple glow — bottom left ── */}
      <div
        className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Watermark text ── */}
      {backgroundText && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(72px, 12vw, 190px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,0,0,0.045)",
              whiteSpace: "nowrap",
            }}
          >
            {backgroundText}
          </span>
        </div>
      )}

      {/* ── Bottom blur + fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: "160px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(249,249,251,0.92) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left — text (animates in from left) */}
          <div className="order-2 lg:order-1 hero-slide-left">
            {/* Accent label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[3px] rounded-full bg-primary-300" />
              <span className="text-primary-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                SlateX POS
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-bold text-gray-900 leading-[1.18] mb-5"
              style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
            >
              {title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={handleCTA}
                className="bg-primary-300 hover:bg-orange-600 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  boxShadow: "0 6px 24px rgba(249,110,77,0.30)",
                }}
              >
                {buttonText}
              </button>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-gray-400 text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Right — image (animates in from right, then floats) */}
          <div className="order-1 lg:order-2 flex items-center justify-center hero-slide-right">
            <div className="relative w-full max-w-[540px]">
              {/* Soft shadow halo behind image */}
              <div
                className="absolute inset-x-8 bottom-0 h-16 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(249,110,77,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "translateY(8px)",
                }}
              />
              <img
                src={mainImage}
                alt={mainImageAlt}
                className="relative w-full h-auto object-contain hero-float"
                style={{
                  filter:
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.10)) drop-shadow(0 6px 16px rgba(249,110,77,0.08))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
