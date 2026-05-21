import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';
import { useDemoModal } from '../../contexts/DemoModalContext';

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

interface HardwareProps {
  title?: string;
  subtitle?: string;
  items?: { id: number; title: string; description: string; image: string }[];
}

const Hardware: React.FC<HardwareProps> = (props) => {
  const { openDemoModal } = useDemoModal();
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: cardsRef,  visible: cardsVisible  } = useReveal(0.1);
  const { ref: csRef,     visible: csVisible     } = useReveal(0.1);

  /* ── Hardware data ── */
  const defaultHardwareItems = [
    {
      id: 1,
      title: 'SlateX Station',
      description:
        'Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.',
      image: '/SlateX Station.webp',
    },
    {
      id: 2,
      title: 'SlateX Tab',
      description:
        'Lightweight 10.1″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.',
      image: '/SlateX Tab.webp',
    },
    {
      id: 3,
      title: 'SlateX Go',
      description:
        'A fully powered handheld terminal that lets you take orders and process payments from anywhere — tableside, curbside, or on delivery. Secure, encrypted transactions and an all‑day battery design.',
      image: '/SlateX Go.webp',
    },
  ];

  const hardwareItems    = props.items    || defaultHardwareItems;
  const hardwareTitle    = props.title    || 'Hardware';
  const hardwareSubtitle = props.subtitle || 'Powerful Tools. Seamless Experience.';

  /* ── Coming Soon data ── */
  const comingSoonFeatures = [
    {
      id: 'loyalty',
      icon: Sparkles,
      label: 'Coming Soon',
      title: 'AI-Based Loyalty Program',
      description:
        "Personalised rewards built on your customers' real ordering habits. No punch cards. No generic points. Loyalty that actually brings people back.",
    },
    {
      id: 'ordering',
      icon: Bot,
      label: 'Coming Soon',
      title: 'AI Ordering System',
      description:
        'Let AI take counter and kiosk orders, reducing labour costs and speeding up service during rush hours.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ══════════════════════════════════════════
            HARDWARE CARDS
        ══════════════════════════════════════════ */}
        <div>
          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-20"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
              Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {hardwareTitle}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg lg:text-xl font-medium max-w-xl mx-auto">
              {hardwareSubtitle}
            </p>
            <div className="w-12 h-0.5 bg-primary-300 rounded-full mx-auto mt-6" />
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hardwareItems.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl border border-gray-100
                  shadow-sm hover:shadow-2xl transition-all duration-500
                  pt-4 pb-8 px-8 text-left overflow-visible mt-16"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(48px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                  transitionDelay: cardsVisible ? `${idx * 120}ms` : '0ms',
                }}
              >
                {/* Orange top accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating device image */}
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-10 w-56 h-44 flex items-end justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full drop-shadow-2xl
                      transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                <div className="h-28" />

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-primary-300 rounded-full mb-4" />
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            COMING SOON
        ══════════════════════════════════════════ */}
        <div
          ref={csRef}
          style={{
            opacity: csVisible ? 1 : 0,
            transform: csVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
              What's Next
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Coming Next
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              SlateX is continuously evolving. Two powerful AI tools are on the way.
            </p>
            <div className="w-12 h-0.5 bg-primary-300 rounded-full mx-auto mt-6" />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {comingSoonFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-10
                    hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                  style={{
                    opacity: csVisible ? 1 : 0,
                    transform: csVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                    transitionDelay: csVisible ? `${idx * 120}ms` : '0ms',
                  }}
                >
                  {/* Icon + badge row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-300" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary-300
                      bg-orange-50 border border-orange-100 rounded-full px-3 py-1">
                      Coming Soon
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-500 text-base mb-6">
              Sign up to get early access.
            </p>
            <button
              onClick={openDemoModal}
            className="inline-flex items-center gap-2 bg-primary-300 hover:bg-orange-600
                text-white font-semibold rounded-full px-8 py-3.5 text-base
                shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200"
            >
              Join the Early Access List
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hardware;
