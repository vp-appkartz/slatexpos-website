import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─── Scroll reveal ────────────────────────────────────────────── */
function useReveal(threshold = 0.08) {
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

/* ─── Data ─────────────────────────────────────────────────────── */
/*
  IMAGE SIZES — add these files to /public/industries/
  ┌─────────────────────┬────────────────────┬──────────────────────────────────────────────┐
  │ File                │ Size               │ Card slot                                    │
  ├─────────────────────┼────────────────────┼──────────────────────────────────────────────┤
  │ fine-dining.jpg     │ 800 × 600 px       │ Fine Dining  (hero, 2-col × 2-row)           │
  │ qsr.jpg             │ 600 × 480 px       │ Quick Service (1-col × 1-row)                │
  │ casual.jpg          │ 600 × 480 px       │ Casual Dining (1-col × 1-row)                │
  │ cafe.jpg            │ 600 × 480 px       │ Café          (1-col × 1-row)                │
  │ bakery.jpg          │ 600 × 480 px       │ Bakery        (1-col × 1-row)                │
  │ pizza.jpg           │ 800 × 380 px       │ Pizza Store   (2-col × 1-row, wide)          │
  │ sweets.jpg          │ 800 × 380 px       │ Sweets Shop   (2-col × 1-row, wide)          │
  └─────────────────────┴────────────────────┴──────────────────────────────────────────────┘
  Tip: shoot/crop landscape, focus subject centre — the card overlays the edges.
*/

interface Card {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;   /* elegant earth-tone fallback */
  tagAccent: string;  /* colour used for tag text (on frosted white badge) */
  col: string;
  row: string;
  minH: string;
}

const cards: Card[] = [
  {
    id: 'fine-dining',
    name: 'Fine Dining',
    tag: 'Full Service',
    description:
      'Floor management, multi-course pacing, and polished guest experiences that match your standard.',
    features: ['Drag & Drop Floor Designer', 'Course-by-Course Pacing', 'Dynamic Invoice Layout'],
    image: '/Fullservices_Header.png',
    gradient: 'linear-gradient(145deg, #b09878, #8c7660)',   /* warm champagne */
    tagAccent: '#5c3c18',
    col: 'lg:col-start-1 lg:col-end-3',
    row: 'lg:row-start-1 lg:row-end-3',
    minH: 'min-h-[320px]',
  },
  {
    id: 'qsr',
    name: 'Quick Service',
    tag: 'QSR',
    description:
      'Speed, volume, and offline reliability built for your busiest rushes.',
    features: ['Offline Mode', 'Cash Management'],
    image: '/qsr-hero.png',
    gradient: 'linear-gradient(145deg, #b87258, #9a5a40)',   /* muted terracotta */
    tagAccent: '#5c2810',
    col: 'lg:col-start-3 lg:col-end-4',
    row: 'lg:row-start-1 lg:row-end-2',
    minH: 'min-h-[220px]',
  },
  {
    id: 'casual',
    name: 'Casual Dining',
    tag: 'Casual Fine Dine',
    description:
      'The right balance of speed and full-service flexibility.',
    features: ['Multi-Device Sync', 'Caller ID'],
    image: '/Casual_Header.png',
    gradient: 'linear-gradient(145deg, #6a9878, #4e7a5c)',   /* eucalyptus sage */
    tagAccent: '#1a4a28',
    col: 'lg:col-start-4 lg:col-end-5',
    row: 'lg:row-start-1 lg:row-end-2',
    minH: 'min-h-[220px]',
  },
  {
    id: 'cafe',
    name: 'Café',
    tag: 'Café & Coffee',
    description:
      'Multi-level modifiers, regulars recognition, and loyalty built right in.',
    features: ['Multi-Level Modifiers', 'Gift Cards'],
    image: '/Bars_header.png',
    gradient: 'linear-gradient(145deg, #8a6858, #6c5040)',   /* rich espresso */
    tagAccent: '#3a1a0a',
    col: 'lg:col-start-3 lg:col-end-4',
    row: 'lg:row-start-2 lg:row-end-3',
    minH: 'min-h-[220px]',
  },
  {
    id: 'bakery',
    name: 'Bakery',
    tag: 'Bakery & Pastry',
    description:
      'Streamlined counter service for high-volume, fast-moving operations.',
    features: ['Quick Item Entry', 'Open Items'],
    image: '/fc-hero.png',
    gradient: 'linear-gradient(145deg, #b89460, #9c7840)',   /* warm honey */
    tagAccent: '#5a3808',
    col: 'lg:col-start-4 lg:col-end-5',
    row: 'lg:row-start-2 lg:row-end-3',
    minH: 'min-h-[220px]',
  },
  {
    id: 'pizza',
    name: 'Pizza Store',
    tag: 'Pizzeria',
    description:
      'Custom modifiers, online ordering, and zero-commission delivery — all in one.',
    features: ['Zero-Commission Online Orders', 'Custom Modifiers', 'Scheduled & Future Orders'],
    image: '/fsr-hero.png',
    gradient: 'linear-gradient(145deg, #a86050, #8a4838)',   /* clay / brick */
    tagAccent: '#5a1c10',
    col: 'lg:col-start-1 lg:col-end-3',
    row: 'lg:row-start-3 lg:row-end-4',
    minH: 'min-h-[190px]',
  },
  {
    id: 'sweets',
    name: 'Sweets Shop',
    tag: 'Sweets & Desserts',
    description:
      'Gift cards, BOGOs, and loyalty programmes to keep your customers coming back.',
    features: ['Gift Cards (Physical & Digital)', 'BOGO & Combo Deals', 'AI Loyalty Program'],
    image: '/ft-hero.png',
    gradient: 'linear-gradient(145deg, #a87890, #886070)',   /* dusty mauve */
    tagAccent: '#4a1830',
    col: 'lg:col-start-3 lg:col-end-5',
    row: 'lg:row-start-3 lg:row-end-4',
    minH: 'min-h-[190px]',
  },
];

/* ─── Single bento card ─────────────────────────────────────────── */
const BentoCard: React.FC<{ card: Card; delay: number }> = ({ card, delay }) => (
  <div
    className={`group relative overflow-hidden rounded-2xl cursor-pointer
      ${card.col} ${card.row} ${card.minH}
      shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.018] hover:z-10`}
    style={{ background: card.gradient, transitionDelay: `${delay}ms` }}
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-full object-cover object-center
          transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ opacity: 0.62 }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    </div>

    {/* Bottom dark fade — keeps white text crisp over the image */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.08) 100%)',
      }}
    />

    {/* Subtle warm top vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 40%)',
      }}
    />

    {/* Hover: soft inner glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)' }}
    />

    {/* ── Content ── */}
    <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">

      {/* Top: frosted tag + arrow */}
      <div className="flex items-start justify-between">
        <span
          className="text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1"
          style={{
            background: 'rgba(255,255,255,0.22)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.35)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {card.tag}
        </span>

        <span
          className="w-8 h-8 rounded-full flex items-center justify-center
            opacity-0 -translate-y-1
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.22)',
            border: '1px solid rgba(255,255,255,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </span>
      </div>

      {/* Bottom: name + description + pills */}
      <div>
        <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight mb-2">
          {card.name}
        </h3>

        {/* Description — semibold, base size, near-white for legibility */}
        <p
          className="text-base font-semibold leading-snug mb-3"
          style={{ color: 'rgba(255,255,255,0.88)' }}
        >
          {card.description}
        </p>

        {/* Feature pills — reveal on hover */}
        <div
          className="flex flex-wrap gap-1.5
            translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500 ease-out"
        >
          {card.features.map((f) => (
            <span
              key={f}
              className="text-[11px] font-semibold rounded-full px-2.5 py-1"
              style={{
                background: 'rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Main section ──────────────────────────────────────────────── */
const IndustriesGrid: React.FC = () => {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Seamless gradient bridge from white ScrollSection into grid wash */}
      <div
        className="py-20 lg:py-28"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f3f4f6 35%, #f3f4f6 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div
            ref={ref}
            className="text-center mb-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-4">
              Industries
            </span>
            <h2
              className="font-bold text-gray-900 leading-tight max-w-3xl mx-auto mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Built for Every Type of{' '}
              <span className="text-primary-300">Restaurant Operation</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Whether you run a fine dining room or a fast-moving QSR counter,
              SlateX adapts to how you work.
            </p>
          </div>

          {/* ── Bento Grid ── */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.9s ease-out 0.15s',
            }}
          >
            {cards.map((card, i) => (
              <BentoCard key={card.id} card={card} delay={i * 55} />
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            className="text-center mt-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s',
            }}
          >
            <button
              onClick={() => navigate('/industries')}
              className="inline-flex items-center gap-2 bg-white border border-gray-300
                hover:border-gray-500 text-gray-600 hover:text-gray-900 font-semibold
                rounded-full px-7 py-3 text-base shadow-sm hover:shadow-md
                hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Find your industry
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
