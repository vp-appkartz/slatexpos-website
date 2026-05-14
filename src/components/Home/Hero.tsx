import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { subscribeToHeroPageData, HeroPageContent } from "../../services/firestoreService";

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroPageContent['hero'] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeToHeroPageData((data) => {
      if (data && data.hero) {
        setHeroData(data.hero);
      }
    });
    return () => unsubscribe();
  }, []);

  const heading         = heroData?.heading         || "The POS That";
  const highlightedText = heroData?.highlightedText || "Just Works.";
  const suffixText      = heroData?.suffixText      || "";
  const subheadline     = (heroData as any)?.subheadline
    || "Cloud-based. Android-powered. Works offline.\nOne flat monthly fee — on hardware you may already own.";
  const buttonText      = heroData?.buttonText      || "Book a Free Demo";
  const heroImage       = heroData?.centerImage     || "/hero-home.png";

  return (
    <div className="relative bg-white overflow-hidden mt-20">

      {/* ── Text block ── */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-10 text-center px-4">

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
          {suffixText ? <><br /><span className="text-gray-900">{suffixText}</span></> : null}
        </h1>

        {/* Subheadline */}
        <p
          className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 whitespace-pre-line"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
        >
          {subheadline}
        </p>

        {/* Apple-style CTAs — plain text links, no filled button */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-1 text-base sm:text-lg font-medium text-primary-300 hover:underline underline-offset-4 transition-all"
          >
            {buttonText}
            <span className="transition-transform group-hover:translate-x-1">›</span>
          </button>
          <span className="text-gray-300 text-xl select-none">|</span>
          <button
            onClick={() => navigate('/pricing')}
            className="group flex items-center gap-1 text-base sm:text-lg font-medium text-gray-500 hover:text-gray-900 transition-all"
          >
            See pricing
            <span className="transition-transform group-hover:translate-x-1">›</span>
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
            background: "linear-gradient(to bottom, transparent 0%, white 100%)",
          }}
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
