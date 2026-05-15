import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoSlider from "../Common/LogoSlider";
import { subscribeToHeroPageData, HeroPageContent } from "../../services/firestoreService";
import DemoModal from "../Common/DemoModal";

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroPageContent['hero'] | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
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
            background: "linear-gradient(to bottom, transparent 0%, white 100%)",
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
