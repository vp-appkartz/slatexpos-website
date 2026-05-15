import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { subscribeToHeroPageData } from '../../services/firestoreService';

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
    imageSrc: '/home-about-1.png',
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
      'Works Anywhere in Canada',
    ],
    imageSrc: '/home-about-2.png',
    imageAlt: 'SlateX offline mode indicator',
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
    imageSrc: '/home-about-3.png',
    imageAlt: 'SlateX drag and drop table layout',
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
    imageSrc: '/home-about-4.png',
    imageAlt: 'SlateX AI promoter dashboard',
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
      'Catering & Express Catering',
      'Branded Ordering Page',
    ],
    imageSrc: '/home-about-3.png',
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
    imageSrc: '/home-about-5.png',
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
const FeatureStrip: React.FC<{ feature: Feature; reverse: boolean; onCTA: () => void }> = ({
  feature,
  reverse,
  onCTA,
}) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        flex flex-col gap-10
        ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}
        items-center py-16 lg:py-24
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      {/* ── Image ── */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div
          className={`
            relative rounded-2xl overflow-hidden
            shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]
            transition-transform duration-500 hover:scale-[1.02]
            ${reverse ? 'lg:ml-auto' : ''}
          `}
        >
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '4/3', objectPosition: 'center' }}
          />
          {/* Subtle orange corner accent */}
          <div className="absolute top-4 left-4 bg-primary-300 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            {feature.tag}
          </div>
        </div>
      </div>

      {/* ── Text ── */}
      <div className={`w-full lg:w-1/2 ${reverse ? 'lg:pr-8 xl:pr-16' : 'lg:pl-8 xl:pl-16'}`}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
          {feature.bullets.map((b) => (
            <div key={b} className="flex items-center gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-300" strokeWidth={3} />
              </span>
              <span className="text-sm text-gray-600 font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onCTA}
          className="group inline-flex items-center gap-2 text-primary-300 font-semibold text-sm hover:gap-3 transition-all duration-200"
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
}> = ({ onButtonClick }) => {
  const [title, setTitle] = useState('Everything You Need to Run Your Restaurant');
  const [subtitle, setSubtitle] = useState(
    'No add-on fees. No feature tiers. Every feature below is included in your SlateX plan.'
  );
  const [features, setFeatures] = useState<Feature[]>(defaultFeatures);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  /* Firestore subscription */
  useEffect(() => {
    const unsub = subscribeToHeroPageData((data) => {
      if (data?.scroll) {
        if (data.scroll.heroTitle) setTitle(data.scroll.heroTitle);
        if (data.scroll.heroSubtitle) setSubtitle(data.scroll.heroSubtitle);
        // If Firestore has features data, map it; otherwise keep defaults
        if (data.scroll.sections?.length) {
          setFeatures(
            data.scroll.sections.map((s: any, i: number) => ({
              id: s.id || String(i + 1),
              number: String(i + 1).padStart(2, '0'),
              tag: s.tag || s.subtitle || '',
              title: s.title || s.subtitle || '',
              description: s.description || '',
              bullets: (s.bulletPoints || []).map((b: any) =>
                typeof b === 'string' ? b : b.text
              ),
              imageSrc: s.imageSrc || `/home-about-${(i % 5) + 1}.png`,
              imageAlt: s.imageAlt || s.title || '',
            }))
          );
        }
      }
    });
    return () => unsub();
  }, []);

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
    // Scroll to contact section as fallback
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className={`text-center pt-16 pb-4 transition-all duration-700 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                onCTA={() => handleCTA(feature.id)}
              />
              {/* Subtle divider between strips (not after last) */}
              {i < features.length - 1 && (
                <div className="border-t border-gray-100 mx-auto w-full" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScrollSection;
