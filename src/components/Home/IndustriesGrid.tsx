import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Scroll reveal ────────────────────────────────────────────── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0, rootMargin: '500px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Data ─────────────────────────────────────────────────────── */
interface Card {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  image: string;
  colorClass?: string;
}

const cards: Card[] = [
  {
    id: 'fine-dining',
    name: 'Full-Service & Fine Dining POS',
    tag: 'Full-Service Restaurant POS',
    description: 'Multi-course table pacing, custom floor plan management, and sleek mobile payments designed for high-end dining experiences.',
    features: ['Drag & Drop Floor Designer', 'Course-by-Course Pacing'],
    image: '/Industries/fine dining-1.png',
    colorClass: 'text-rose-500',
  },
  {
    id: 'qsr',
    name: 'Quick-Service & Fast Food POS',
    tag: 'QSR POS System',
    description: 'Lightning-fast order entry, dual-screen kitchen display sync, and offline processing mode built for high-volume rushes.',
    features: ['Offline Mode', 'Cash Management'],
    image: '/Industries/QSR.png',
    colorClass: 'text-blue-500',
  },
  {
    id: 'casual',
    name: 'Casual Fine Dining POS',
    tag: 'Casual Dining POS Software',
    description: 'Flexible hybrid workflows that balance tableside ordering, rapid bill splitting, and fast counter checkout in one platform.',
    features: ['Multi-Device Sync', 'Caller ID'],
    image: '/Industries/casualdining.png',
    colorClass: 'text-amber-500',
  },
  {
    id: 'cafe',
    name: 'Café & Coffee Shop POS',
    tag: 'Coffee Shop POS System',
    description: 'Complex modifier mapping, rapid drink customization, line-busting handhelds, and built-in repeat customer loyalty.',
    features: ['Multi-Level Modifiers', 'Gift Cards'],
    image: '/Industries/cafe.png',
    colorClass: 'text-emerald-500',
  },
  {
    id: 'bakery',
    name: 'Bakery & Sweets POS',
    tag: 'Bakery POS Software',
    description: 'Item-by-weight scale integration, custom matrix pricing, fast barcode scanning, and instant batch order tracking.',
    features: ['Quick Item Entry', 'Open Items'],
    image: '/Industries/Sweets shop.png',
    colorClass: 'text-purple-500',
  },
  {
    id: 'pizza',
    name: 'Pizza POS & Online Ordering',
    tag: 'Pizzeria POS System',
    description: 'Deep pizza modifier building (halves/quarters), caller ID phone integration, and zero-commission online delivery dispatch.',
    features: ['Zero-Commission Online Orders', 'Custom Modifiers'],
    image: '/Industries/Pizzashop.png',
    colorClass: 'text-orange-500',
  },
  {
    id: 'food-truck',
    name: 'Food Truck POS & Mobile Ordering',
    tag: 'Food Truck POS System',
    description: 'Portable handheld checkout, cellular and offline payment reliability, line-busting speed, and instant digital receipt texting.',
    features: ['Portable Handhelds', 'Offline Reliability'],
    image: '/Industries/foodtruck.png',
    colorClass: 'text-pink-500',
  },
];

/* ─── Apple-Style Carousel Card ────────────────────────────────── */
const CarouselCard: React.FC<{ card: Card; delay: number }> = ({ card, delay }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200/50 flex-shrink-0 snap-start mr-6
        w-[300px] h-[580px] sm:w-[360px] sm:h-[600px] lg:w-[420px] lg:h-[620px] flex flex-col
        shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
    >
      {/* Text Zone (Top) */}
      <div className="p-6 sm:p-8 pb-4 flex-1 z-10 flex flex-col">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
          {card.tag}
        </span>
        <h3 className={`font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 tracking-tight min-h-[64px] sm:min-h-[76px] lg:min-h-[90px] ${card.colorClass || 'text-slate-900'}`}>
          {card.name}
        </h3>
        <p className="leading-relaxed text-slate-500 text-base sm:text-lg lg:text-xl font-medium">
          {card.description}
        </p>
      </div>
      
      {/* Image Zone (Bottom) */}
      <div className="w-full relative px-6 pb-8 pt-4 h-[220px] sm:h-[240px] lg:h-[260px] flex-shrink-0">
        <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-slate-200/80">
          <img
            src={card.image}
            alt={card.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.3'; }}
          />
        </div>
      </div>
    </div>
  );
};

/* ─── Main section ──────────────────────────────────────────────── */
const IndustriesGrid: React.FC = () => {
  const { ref, visible } = useReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-24 pb-10 lg:pt-32 lg:pb-12">
      
      {/* CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .apple-carousel {
          padding-left: max(1rem, calc((100vw - 1400px) / 2 + 1rem));
          padding-right: max(1rem, calc((100vw - 1400px) / 2 + 1rem));
          scroll-padding-left: max(1rem, calc((100vw - 1400px) / 2 + 1rem));
        }
        @media (min-width: 640px) {
          .apple-carousel {
            padding-left: max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem));
            padding-right: max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem));
            scroll-padding-left: max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem));
          }
        }
        @media (min-width: 1024px) {
          .apple-carousel {
            padding-left: max(2rem, calc((100vw - 1400px) / 2 + 2rem));
            padding-right: max(2rem, calc((100vw - 1400px) / 2 + 2rem));
            scroll-padding-left: max(2rem, calc((100vw - 1400px) / 2 + 2rem));
          }
        }
      `}} />

      {/* ── Header & Controls ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-slate-900">Industries.</span>{' '}
              <span className="text-slate-500">Built for every type of restaurant.</span>
            </h2>
          </div>


        </div>
      </div>

      {/* ── Carousel Track ── */}
      <div className="w-full mt-4 relative group/track">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scroll pb-12 pt-4 apple-carousel relative z-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(150px)',
            transition: 'opacity 0.9s ease-out 0.15s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          }}
        >
          {cards.map((card, i) => (
            <CarouselCard key={card.id} card={card} delay={i * 75} />
          ))}
        </div>

        {/* Floating Right Arrow (Apple Style) */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-[60%] z-20 w-16 h-16 rounded-full bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40 hover:bg-white hover:scale-105 flex items-center justify-center text-slate-700 transition-all duration-300 hidden md:flex opacity-0 group-hover/track:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8 ml-1" />
        </button>
      </div>

    </section>
  );
};

export default IndustriesGrid;
