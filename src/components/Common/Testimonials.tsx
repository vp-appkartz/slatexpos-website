import React, { useEffect, useRef, useState } from 'react';
import { Star, MapPin } from 'lucide-react';

/* ─── Types ────────────────────────────────────────────────────── */
export interface TestimonialItem {
  id: string | number;
  name: string;
  position: string;
  image: string;
  text: string;
  logo: string;
  logoSubtext: string;
}
export interface TestimonialsData {
  title?: string;
  subtitle?: string;
  items?: TestimonialItem[];
}

/* ─── Scroll reveal ────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Stars ────────────────────────────────────────────────────── */
const Stars: React.FC = () => (
  <div className="flex gap-0.5 mb-5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary-300 text-primary-300" />
    ))}
  </div>
);

/* ─── Single glass card ─────────────────────────────────────────── */
const TestimonialCard: React.FC<{ t: TestimonialItem }> = ({ t }) => (
  <div
    className="relative flex-shrink-0 w-[420px] rounded-3xl p-8 flex flex-col gap-4
      hover:-translate-y-1 transition-all duration-300"
    style={{
      background: 'rgba(255,255,255,0.65)',
      border: '1px solid rgba(255,255,255,0.88)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}
  >
    {/* Decorative quote */}
    <span
      className="absolute top-5 right-7 text-8xl font-serif leading-none select-none pointer-events-none"
      style={{ color: 'rgba(251,146,60,0.13)' }}
    >
      "
    </span>

    <Stars />

    {/* Review text — larger */}
    <p className="text-gray-700 text-lg leading-relaxed font-normal flex-1">
      "{t.text}"
    </p>

    <div className="w-full h-px bg-gray-100" />

    {/* Author */}
    <div className="flex items-center gap-3">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold text-white"
        style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}
      >
        {t.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="text-base font-bold text-gray-900 truncate">{t.name}</p>
        <p className="text-sm font-semibold text-gray-600 truncate">{t.logo}</p>
        <p className="flex items-center gap-1 text-xs text-gray-400 font-medium mt-0.5">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          {t.logoSubtext || t.position}
        </p>
      </div>
    </div>
  </div>
);

/* ─── Main component ────────────────────────────────────────────── */
const Testimonial: React.FC<TestimonialsData> = ({
  title    = 'Real Restaurants. Real Results.',
  subtitle = 'Trusted by restaurants across Canada & the USA — and growing fast.',
  items,
}) => {
  const defaultTestimonials: TestimonialItem[] = [
    {
      id: 1,
      name: 'Harry Singh',
      position: 'Edmonton, AB',
      image: '',
      text: "SlateX gave us the flexibility we couldn't find anywhere else. We already had Android tablets — now they're our full POS system. The setup was fast and the team actually answered the phone when we needed help.",
      logo: 'Ghazal Fine Dine Experience',
      logoSubtext: 'Edmonton, AB · Canada',
    },
    {
      id: 2,
      name: 'Café Owner',
      position: 'Vancouver, BC',
      image: '',
      text: "The offline mode alone was worth the switch. We've never lost an order since. Internet goes down, SlateX keeps going — everything syncs the moment we're back online.",
      logo: 'Vancouver Café',
      logoSubtext: 'Vancouver, BC · Canada',
    },
    {
      id: 3,
      name: 'Gurbir Singh',
      position: 'Royal Sweets & Restaurant',
      image: '',
      text: "Managing dine-in, takeout, and sweets counters together used to be stressful. With SlateX POS, we've streamlined everything under one roof. The weighing scale integration is something no other POS at this price offers.",
      logo: 'Royal Sweets & Restaurant',
      logoSubtext: 'Edmonton, AB · Canada',
    },
    {
      id: 4,
      name: 'Tushar Mistry',
      position: 'Edmonton, AB',
      image: '',
      text: "One monthly fee, no hardware invoice, and every feature included. We switched from Toast and saved thousands in the first year. SlateX is the real deal for Canadian restaurants.",
      logo: 'Bombay Street Tadka',
      logoSubtext: 'Edmonton, AB · Canada',
    },
  ];

  const dataTitle    = title;
  const dataSubtitle = subtitle;
  const dataItems    = items || defaultTestimonials;

  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: trackRef,  visible: trackVisible  } = useReveal(0.1);

  const regions = [
    { label: 'Edmonton, AB',  flag: '🍁' },
    { label: 'Vancouver, BC', flag: '🍁' },
    { label: 'Calgary, AB',   flag: '🍁' },
    { label: 'United States', flag: '🇺🇸' },
  ];

  /* Duplicate cards for seamless infinite loop */
  const looped = [...dataItems, ...dataItems, ...dataItems];

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Keyframe injection */}
      <style>{`
        @keyframes testimonial-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .testimonial-track {
          animation: testimonial-scroll 38s linear infinite;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative orbs */}
      <div className="absolute top-16 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 70%)', filter: 'blur(48px)' }} />
      <div className="absolute bottom-16 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', filter: 'blur(56px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto leading-tight">
            {dataTitle}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto mb-8">
            {dataSubtitle}
          </p>

          {/* Region chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((r) => (
              <span
                key={r.label}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600
                  bg-white/80 border border-gray-200 rounded-full px-4 py-1.5
                  shadow-sm backdrop-blur-sm"
              >
                <span>{r.flag}</span>
                {r.label}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Marquee track — full bleed, no side padding ── */}
      <div
        ref={trackRef}
        className="overflow-hidden"
        style={{
          opacity: trackVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.2s',
          /* Fade edges */
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="testimonial-track flex gap-5 w-max py-4 px-4">
          {looped.map((t, idx) => (
            <TestimonialCard key={`${t.id}-${idx}`} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonial;
