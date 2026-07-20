import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import DemoModal from '../Common/DemoModal';

/* ─── Types ────────────────────────────────────────────────────── */
interface Feature {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

/* ─── Default content (from content.md) ────────────────────────── */
const defaultFeatures: Feature[] = [
  {
    id: '1',
    number: '01',
    tag: 'Hardware Freedom',
    title: 'Works on Any Android Device',
    description:
      'No proprietary hardware required. Use your existing tablets or Android devices. Save thousands upfront and never feel locked in. Cloud-based, multi-device, and ready to go on the hardware you already own.',
    bullets: [
      'No Hardware Purchase Required',
      'Multi-Device Setup',
      'Cloud-Based & Always Synced',
      'Roles & Permissions',
      'Drag & Drop Floor Management',
      'Dynamic Invoice & KOT Layout',
    ],
    imageSrc: '/homescreen2.png',
    imageAlt: 'SlateX POS running on Android tablet',
  },
  {
    id: '2',
    number: '02',
    tag: 'Reliability',
    title: 'Offline Mode — Never Lose a Sale',
    description:
      "Internet cuts out? SlateX keeps running. Orders, payments, and kitchen tickets continue without interruption. Everything syncs automatically when you're back online. Your restaurant never stops.",
    bullets: [
      'Full POS Functionality Offline',
      'Payments Processed Offline',
      'Kitchen Tickets Continue Printing',
      'Auto-Sync When Back Online',
      'Zero Data Loss',
    ],
    imageSrc: '/kitchen-1.webp',
    imageAlt: 'Kitchen staff working with SlateX offline mode',
  },
  {
    id: '3',
    number: '03',
    tag: 'Floor Management',
    title: 'Drag & Drop Table Management',
    description:
      'Design your dining room exactly as it looks. Merge tables for large parties, split them after. Visual, fast, and intuitive for every server on your team — no training required.',
    bullets: [
      'Visual Floor Designer',
      'Merge & Split Tables',
      'Course-by-Course Pacing',
      'Auto Gratuity',
      'House Accounts',
      'Server Assignment',
    ],
    imageSrc: '/Dine-In.webp',
    imageAlt: 'SlateX dine-in table management',
  },
  {
    id: '4',
    number: '04',
    tag: 'Built-In Marketing',
    title: 'AI Online Promoter',
    description:
      'SlateX automatically generates and publishes digital promotions for your restaurant. No marketing team required. Your deals reach customers — while you focus on service.',
    bullets: [
      'Auto-Generated Promotions',
      'BOGOs & Combo Deals',
      'Scheduled Happy Hour Discounts',
      'Gift Cards (Physical & Digital)',
      'Caller ID Integration',
      'AI Loyalty Program (Coming Soon)',
    ],
    imageSrc: '/AI-Online_Promotor.webp',
    imageAlt: 'SlateX AI Online Promoter dashboard',
  },
  {
    id: '5',
    number: '05',
    tag: 'Zero Commission',
    title: 'Online Ordering — Built In',
    description:
      'Orders land directly on your POS. No extra tablet. No third-party integration fees. Zero commission — you keep 100% of your revenue. Fully integrated with your kitchen workflow from day one.',
    bullets: [
      'Zero Commission',
      'No Extra Tablet Needed',
      'Direct POS Integration',
      'Scheduled & Future Orders',
      'Branded Ordering Page',
    ],
    imageSrc: '/Online ordering.webp',
    imageAlt: 'SlateX online ordering interface',
  },
  {
    id: '6',
    number: '06',
    tag: 'Business Intelligence',
    title: '30+ Reports at Your Fingertips',
    description:
      'Sales by item, by server, by period. Tip summaries, void tracking, cash reconciliation. The numbers you need — available any time, from anywhere. Make decisions based on real data.',
    bullets: [
      'Sales by Item & Server',
      'Cash Reconciliation',
      'Tip Summaries',
      'Void Tracking & Audit Trail',
      'Access from Any Device',
      'Owner Reporting App',
    ],
    imageSrc: '/reporting.webp',
    imageAlt: 'SlateX reports dashboard',
  },
];

/* ─── Scroll-reveal hook ────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Single feature strip ──────────────────────────────────────── */
const FeatureStrip: React.FC<{ feature: Feature; reverse: boolean; onCTA: () => void; index: number }> = ({
  feature,
  reverse,
  onCTA,
  index,
}) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-10 items-center py-8 lg:py-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {/* ── Image ── */}
      <div className="w-full lg:w-1/2 flex-shrink-0"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px) translateX(0px) scale(1)' : `translateY(60px) translateX(${reverse ? '40px' : '-40px'}) scale(0.96)`,
          transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          transitionDelay: visible ? '100ms' : '0ms',
        }}
      >
        <div className={`relative flex items-center justify-center ${reverse ? 'lg:ml-auto' : ''}`}>
          {index === 0 && (
            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-14px); }
              }
              .img-float-0 { animation: float 5.0s ease-in-out infinite 0.0s; }
              .img-float-1 { animation: float 5.4s ease-in-out infinite 0.8s; }
              .img-float-2 { animation: float 4.8s ease-in-out infinite 1.6s; }
              .img-float-3 { animation: float 5.2s ease-in-out infinite 0.4s; }
              .img-float-4 { animation: float 4.6s ease-in-out infinite 1.2s; }
              .img-float-5 { animation: float 5.6s ease-in-out infinite 2.0s; }
            `}</style>
          )}

          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className={`relative w-full h-auto object-contain img-float-${index}`}
            style={{
              ...(index === 4 || index === 5 ? {
                border: '3px solid white',
                borderRadius: '20px',
              } : {}),
            }}
          />
        </div>
      </div>

      {/* ── Text ── */}
      <div
        className={`w-full lg:w-1/2 ${reverse ? 'lg:pr-8 xl:pr-16' : 'lg:pl-8 xl:pl-16'}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px) translateX(0px)' : `translateY(60px) translateX(${reverse ? '-40px' : '40px'})`,
          transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          transitionDelay: visible ? '200ms' : '0ms',
        }}
      >
        {/* Feature number — decorative */}
        <p className="text-7xl font-black text-gray-100 leading-none select-none mb-2 -ml-1">
          {feature.number}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 -mt-4">
          {feature.title}
        </h2>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
          {feature.description}
        </p>

        {/* Bullet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5 mb-8">
          {feature.bullets.map((b) => (
            <div key={b} className="flex items-center gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-300" strokeWidth={3} />
              </span>
              <span className="text-base text-gray-600 font-normal tracking-wider">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onCTA}
          className="group inline-flex items-center gap-2.5 bg-primary-300 hover:bg-orange-600 text-white font-semibold rounded-full px-7 py-3 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Book a Free Demo
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

/* ─── Main component ────────────────────────────────────────────── */
const ScrollSection: React.FC<{
  onButtonClick?: (id: string) => void;
  heroTitle?: string;
  heroSubtitle?: string;
  sections?: any[];
}> = ({ onButtonClick, heroTitle, heroSubtitle, sections }) => {
  const title    = heroTitle   || 'Everything You Need to Run Your Restaurant';
  const subtitle = heroSubtitle || 'No add-on fees. No feature tiers. Every feature below is included in your SlateX plan.';
  const features = sections
    ? sections.map((s: any, i: number) => ({
        id:          s.id || String(i + 1),
        number:      String(i + 1).padStart(2, '0'),
        tag:         s.subtitle || s.tag || '',
        title:       s.title    || '',
        description: s.description || '',
        bullets:     (s.bulletPoints || []).map((b: any) => typeof b === 'string' ? b : b.text),
        imageSrc:    s.imageSrc || `/home-about-${(i % 5) + 1}.png`,
        imageAlt:    s.imageAlt || s.title || '',
      }))
    : defaultFeatures;
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  /* Header reveal */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleCTA = (id: string) => {
    onButtonClick?.(id);
    setIsDemoOpen(true);
  };

  return (
    <>
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* bg orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className="text-center pt-16 pb-4"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0px)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-3">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="w-16 h-1 bg-primary-300 rounded-full mx-auto mt-6 mb-4" />

        {/* ── Feature strips ── */}
        <div>
          {features.map((feature, i) => (
            <React.Fragment key={feature.id}>
              <FeatureStrip
                feature={feature}
                reverse={i % 2 !== 0}
                index={i}
                onCTA={() => handleCTA(feature.id)}
              />
              {i < features.length - 1 && (
                <div className="border-t border-gray-100 mx-auto w-full" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>

    {/* Demo modal — shared with header */}
    <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
  </>
  );
};

export default ScrollSection;
