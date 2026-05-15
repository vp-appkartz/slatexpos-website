import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import DemoModal from "../Common/DemoModal";

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const navigate = useNavigate();

  const heading         = "The POS That";
  const highlightedText = "Just Works.";
  const subheadline     = "Cloud-based. Android-powered. Works offline.\nOne flat monthly fee — on hardware you may already own.";
  const buttonText      = "Book a Free Demo";
  const heroImage       = "/hero-home.webp";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 65%)', filter: 'blur(48px)' }} />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* ── Text block — top padding clears the fixed header ── */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 text-center px-4">

        {/* Eyebrow */}
        <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-4">
          Restaurant POS · Canada
        </p>

        {/* Headline — Apple-scale */}
        <h1
          className="font-semibold text-gray-900 leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {heading}{" "}
          <span className="text-primary-300">{highlightedText}</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 whitespace-pre-line"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Primary — filled pill */}
          <button
            onClick={() => setIsDemoOpen(true)}
            className="inline-flex items-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-semibold rounded-full px-7 py-3 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            {buttonText}
          </button>
          {/* Secondary — outlined pill */}
          <button
            onClick={() => navigate('/pricing')}
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 font-semibold rounded-full px-7 py-3 text-base hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            See Pricing
          </button>
        </div>
      </section>

      {/* ── Hero image — edge-to-edge, fades into white at bottom ── */}
      <div className="relative w-full">
        <img
          src={heroImage}
          alt="Restaurant staff using SlateX POS"
          className="w-full object-cover object-top"
          style={{ maxHeight: "620px" }}
        />
        {/* White fade at bottom — the Apple signature move */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #f8f8f8 100%)",
          }}
        />
      </div>

      {/* ── Logo slider ── */}
      <div className="pb-8">
        <LogoSlider />
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default Hero;
