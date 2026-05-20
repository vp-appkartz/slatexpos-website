import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight, HelpCircle, Monitor, Zap, HeadphonesIcon } from 'lucide-react';
import DemoModal from './DemoModal';

/* ─── Category → icon mapping ───────────────────────────────────── */
const categoryIcons: Record<string, React.ReactNode> = {
  General:  <HelpCircle className="w-4 h-4" />,
  Hardware: <Monitor    className="w-4 h-4" />,
  Features: <Zap        className="w-4 h-4" />,
  Support:  <HeadphonesIcon className="w-4 h-4" />,
};

/* ─── Types ─────────────────────────────────────────────────────── */
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

/* ─── Default FAQ data (categorised) ────────────────────────────── */
const defaultFaqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is a restaurant POS system?',
    answer:
      'A restaurant POS system is a digital tool that combines hardware and software to streamline operations and enhance customer experiences. It handles tasks ranging from taking orders and processing payments to managing inventory, tracking sales, and generating analytics reports. By automating these processes, POS systems boost efficiency, reduce errors, and provide valuable insights for informed decision-making.',
  },
  {
    category: 'General',
    question: 'How to choose the best restaurant POS system?',
    answer:
      'Choosing the best restaurant POS system depends on your specific needs, budget, and business size. Consider factors like ease of use, scalability, integration capabilities, customer support, and pricing structure. SlateX is designed to cover all these bases with a flat monthly fee and no hidden add-ons.',
  },
  {
    category: 'General',
    question: 'What makes SlateX POS different?',
    answer:
      'SlateX POS stands out with its intuitive interface, comprehensive feature set, reliable offline capabilities, excellent customer support, and competitive pricing designed specifically for restaurant operations — all on hardware you may already own.',
  },
  {
    category: 'General',
    question: 'For which countries is SlateX POS available?',
    answer:
      'SlateX POS is built for Canadian restaurants and is expanding across North America. Contact us to confirm availability in your specific location.',
  },
  {
    category: 'General',
    question: 'What are your pricing plans?',
    answer:
      'We offer flexible pricing starting from simple plans for small restaurants to full-featured plans for multi-location operations. Every plan includes all core features — no feature tiers. Visit our Pricing page or book a demo for a tailored quote.',
  },
  {
    category: 'Hardware',
    question: 'What hardware is required to use SlateX POS?',
    answer:
      'SlateX runs on any Android tablet or device — no proprietary hardware required. You can use hardware you already own. We also offer optional hardware bundles including receipt printers, cash drawers, and payment terminals if you need them.',
  },
  {
    category: 'Features',
    question: 'Does SlateX Restaurant POS help manage multiple locations?',
    answer:
      'Yes. SlateX is built for multi-location management from a single centralised dashboard. You get unified reporting, consistent menus, and role-based access across all your locations.',
  },
  {
    category: 'Features',
    question: 'Does SlateX restaurant POS work offline if the internet goes down?',
    answer:
      'Yes. SlateX has robust offline functionality — orders, payments, and kitchen tickets continue without interruption. Everything syncs automatically the moment your connection is restored. Zero data loss.',
  },
  {
    category: 'Features',
    question: 'How fast can I implement SlateX POS in my restaurant?',
    answer:
      'Most restaurants are up and running within 1–2 weeks, including hardware setup, staff training, and data migration. Our onboarding team works alongside you to ensure a smooth transition with minimal disruption.',
  },
  {
    category: 'Features',
    question: 'Does SlateX POS offer 3rd-party online order integration?',
    answer:
      'Yes. SlateX integrates with major third-party delivery platforms and online ordering systems. All orders land directly in your POS — no extra tablet, no manual re-entry.',
  },
  {
    category: 'Support',
    question: 'What support do you offer?',
    answer:
      'We offer 24/7 customer support via phone, email, and live chat. Every account also comes with onboarding assistance, training resources, and detailed documentation. Enterprise clients receive a dedicated account manager.',
  },
];

/* ─── Smooth accordion item ──────────────────────────────────────── */
const AccordionItem: React.FC<{
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, index, isOpen, onToggle }) => (
  <div
    className={`rounded-2xl border-l-4 border border-gray-100 bg-white transition-all duration-300 overflow-hidden
      ${isOpen
        ? 'border-l-primary-300 bg-orange-50/40 border-orange-100 shadow-sm'
        : 'border-l-transparent hover:border-l-orange-200 hover:border-gray-200 hover:shadow-sm'
      }`}
  >
    <button
      onClick={onToggle}
      className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4"
      aria-expanded={isOpen}
    >
      {/* Number badge */}
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
          ${isOpen ? 'bg-primary-300 text-white' : 'bg-gray-100 text-gray-400'}`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Question */}
      <span
        className={`flex-1 font-semibold text-base sm:text-lg leading-snug transition-colors duration-200
          ${isOpen ? 'text-primary-300' : 'text-gray-900'}`}
      >
        {faq.question}
      </span>

      {/* Toggle icon */}
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
          ${isOpen ? 'bg-primary-300 text-white' : 'bg-gray-100 text-gray-500'}`}
      >
        {isOpen
          ? <Minus className="w-4 h-4" />
          : <Plus  className="w-4 h-4" />
        }
      </span>
    </button>

    {/* Answer — CSS grid row trick for smooth height animation */}
    <div
      className={`grid transition-all duration-300 ease-in-out
        ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
    >
      <div className="overflow-hidden">
        <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[72px] text-gray-600 text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  </div>
);

/* ─── Main section ───────────────────────────────────────────────── */
const FAQSection: React.FC<FAQSectionProps> = ({
  title    = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about SlateX POS. Can\'t find the answer? Talk to our team.',
  faqs     = defaultFaqs,
}) => {
  const firstCategory = Array.from(new Set((faqs).map(f => f.category).filter(Boolean)))[0] as string || 'General';
  const [activeCategory, setActiveCategory] = useState(firstCategory);
  const [expandedIndex,  setExpandedIndex]  = useState<number | null>(0);
  const [isDemoOpen,     setIsDemoOpen]     = useState(false);

  /* Build tab list from data — no "All" tab */
  const categories = Array.from(
    new Set(faqs.map(f => f.category).filter(Boolean))
  ) as string[];

  // If no categories exist, show all items; otherwise filter by active tab
  const filtered = categories.length === 0
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const handleTabChange = (cat: string) => {
    setActiveCategory(cat);
    setExpandedIndex(null);
  };

  const handleToggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header — full width centered ── */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-300 mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="w-16 h-1 bg-primary-300 rounded-full mx-auto mb-10" />

          {/* ── Two-column: accordion left (65%) + CTA right (35%) ── */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left — tabs + accordion */}
            <div className="w-full lg:w-[65%]">
              {/* Category tabs — glass morphism, left-aligned */}
              {categories.length > 1 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleTabChange(cat)}
                      className={`group flex items-center gap-2.5 px-6 py-3 rounded-2xl text-[15px] font-semibold
                        transition-all duration-300 border
                        ${activeCategory === cat
                          ? 'bg-primary-300 text-white border-primary-300 shadow-lg shadow-orange-200/60 scale-[1.04]'
                          : 'bg-white/60 backdrop-blur-md text-gray-600 border-white/70 shadow-md shadow-gray-100/80 hover:bg-white/80 hover:text-primary-300 hover:border-orange-200 hover:scale-[1.02]'
                        }`}
                      style={activeCategory !== cat ? { backdropFilter: 'blur(12px)' } : {}}
                    >
                      <span className={`transition-colors duration-200 ${activeCategory === cat ? 'text-white' : 'text-gray-400 group-hover:text-primary-300'}`}>
                        {categoryIcons[cat] ?? <HelpCircle className="w-4 h-4" />}
                      </span>
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* Accordion items */}
              <div className="space-y-3">
                {filtered.map((faq, i) => (
                  <AccordionItem
                    key={`${activeCategory}-${i}`}
                    faq={faq}
                    index={i}
                    isOpen={expandedIndex === i}
                    onToggle={() => handleToggle(i)}
                  />
                ))}
              </div>
            </div>

            {/* Right — sticky CTA card */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
              <div className="rounded-3xl p-8 border border-orange-100 text-center"
                style={{ background: 'linear-gradient(145deg, #fff7ed 0%, #f5f3ff 50%, #eef2ff 100%)' }}>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-300 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-200/50">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Our team is happy to walk you through everything — no pressure, no commitment.
                </p>

                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-primary-300 hover:bg-orange-600 text-white
                    font-semibold rounded-full px-7 py-3.5 text-base shadow-md
                    hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Divider */}
                <div className="my-6 border-t border-orange-100" />

                {/* Trust extras */}
                <div className="space-y-3 text-left">
                  {[
                    '15-min personalised walkthrough',
                    'No hardware purchase needed',
                    '24/7 support included',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-300" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      </span>
                      <span className="text-base text-gray-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default FAQSection;
