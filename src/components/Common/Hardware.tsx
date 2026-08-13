import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';
import { useDemoModal } from '../../contexts/DemoModalContext';

/* ─── Scroll reveal removed for stability ────────────────────────────────────────────── */

interface HardwareProps {
  title?: string;
  subtitle?: string;
  items?: { id: number; title: string; description: string; image: string }[];
}

const Hardware: React.FC<HardwareProps> = (props) => {
  const { openDemoModal } = useDemoModal();
  // useReveal removed

  /* ── Hardware data ── */
  const defaultHardwareItems = [
    {
      id: 1,
      title: 'SlateX Station',
      description:
        'Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.',
      image: '/SlateX Station.webp',
      colorClass: 'text-sky-600',
    },
    {
      id: 2,
      title: 'SlateX Tab',
      description:
        'Lightweight 10.1″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.',
      image: '/SlateX Tab.webp',
      colorClass: 'text-violet-600',
    },
    {
      id: 3,
      title: 'SlateX Pulse',
      description:
        'A fully powered handheld terminal that lets you take orders and process payments from anywhere — tableside, curbside, or on delivery. Secure, encrypted transactions and an all‑day battery design.',
      image: '/SlateX Pulse.png',
      colorClass: 'text-orange-600',
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
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ══════════════════════════════════════════
            HARDWARE CARDS
        ══════════════════════════════════════════ */}
        <div>
          {/* Header */}
          <div
            className="text-center mb-20"
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
              Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {hardwareTitle}
            </h2>
            <p className="max-w-xl mx-auto text-slate-500 text-lg lg:text-xl font-medium">
              {hardwareSubtitle}
            </p>
            <div className="w-12 h-0.5 bg-primary-300 rounded-full mx-auto mt-6" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hardwareItems.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl border border-gray-100
                  shadow-sm hover:shadow-2xl transition-all duration-500
                  pt-4 pb-8 px-8 text-left overflow-visible mt-16"
              >
                {/* Orange top accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating device image */}
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-10 w-56 h-44 flex items-end justify-center">
                  <img loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full drop-shadow-2xl
                      transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                <div className="h-28" />

                <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${item.colorClass || 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-primary-300 rounded-full mb-4" />
                <p className="leading-relaxed text-slate-500 text-lg lg:text-xl font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            COMING SOON
        ══════════════════════════════════════════ */}
        <div>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
              What's Next
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Coming Next
            </h2>
            <p className="max-w-xl mx-auto text-slate-500 text-lg lg:text-xl font-medium">
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
                  <p className="leading-relaxed text-slate-500 text-lg lg:text-xl font-medium">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="mb-6 text-slate-500 text-lg lg:text-xl font-medium">
              Sign up to get early access.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center justify-center gap-2 bg-[#3782fd] hover:bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 text-sm sm:text-base border border-[#3782fd] hover:border-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
