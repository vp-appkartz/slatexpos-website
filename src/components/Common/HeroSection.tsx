import React from "react";

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
  return (
    <section
      className={`relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 ${className}`}
    >
      {/* ── Deep gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0f0c1e 0%, #12102b 30%, #0d1928 65%, #1a0e1f 100%)",
        }}
      />

      {/* ── Orange glow — top right ── */}
      <div
        className="absolute top-[-120px] right-[-80px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,110,77,0.22) 0%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── Purple glow — bottom left ── */}
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.045,
        }}
      />

      {/* ── Large decorative background text ── */}
      {backgroundText && (
        <div
          className="absolute right-[-24px] top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(72px, 11vw, 180px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
              whiteSpace: "nowrap",
            }}
          >
            {backgroundText}
          </span>
        </div>
      )}

      {/* ── Main content grid ── */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            {/* Accent line + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-8 rounded-full bg-primary-300" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
                SlateX POS
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-bold text-white leading-[1.18] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              {title}
            </h1>

            {/* Description */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={buttonAction}
                className="bg-primary-300 hover:bg-orange-600 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  boxShadow: "0 8px 32px rgba(249,110,77,0.38)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 12px 40px rgba(249,110,77,0.55)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 8px 32px rgba(249,110,77,0.38)")
                }
              >
                {buttonText}
              </button>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
                <span className="text-white/45 text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Right: image card */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-[540px]">
              {/* Outer glow halo */}
              <div
                className="absolute inset-[-24px] rounded-[36px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,110,77,0.28) 0%, rgba(139,92,246,0.18) 100%)",
                  filter: "blur(28px)",
                  opacity: 0.7,
                }}
              />

              {/* Glass card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <img
                  src={mainImage}
                  alt={mainImageAlt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade to page canvas ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #fff8f3 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
