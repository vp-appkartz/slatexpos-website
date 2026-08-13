import React, { useState, useEffect, useRef } from 'react';
import { useDemoModal } from "../../contexts/DemoModalContext";
import { 
  LayoutDashboard, Smartphone, Scale, Menu, 
  Globe, Car, PhoneCall, 
  PackageSearch, ChefHat, Clock, 
  Sparkles, Gift, Tag, 
  CreditCard, WifiOff, BarChart3,
  ChevronRight, Zap
} from 'lucide-react';

const PILLARS = [
  { id: 'front-of-house', label: 'Front of House' },
  { id: 'online-delivery', label: 'Online & Delivery' },
  { id: 'kitchen-inventory', label: 'Kitchen & Inventory' },
  { id: 'growth-loyalty', label: 'Growth & Loyalty' },
  { id: 'payments-admin', label: 'Payments & Admin' },
];

const cycleBg = ['bg-orange-50', 'bg-sky-50', 'bg-emerald-50', 'bg-violet-50', 'bg-pink-50'];
const cycleText = ['text-orange-600', 'text-sky-600', 'text-emerald-600', 'text-violet-600', 'text-pink-600'];
const cycleShadow = [
  'shadow-[inset_0_0_0_1px_rgba(249,114,21,0.25)]', 
  'shadow-[inset_0_0_0_1px_rgba(14,165,233,0.25)]', 
  'shadow-[inset_0_0_0_1px_rgba(16,185,129,0.25)]', 
  'shadow-[inset_0_0_0_1px_rgba(139,92,246,0.25)]', 
  'shadow-[inset_0_0_0_1px_rgba(236,72,153,0.25)]'
];

const FEATURES = {
  'front-of-house': [
    { title: 'Drag & Drop Table Layout', description: 'Design custom floor plans in seconds. Track open checks, monitor table status in real time, and speed up table turnover with intuitive touch controls.', icon: <LayoutDashboard className="w-5 h-5" /> },
    { title: 'Handheld Mobile POS', description: 'Bust long lines and take orders right at the table. Process payments instantly to boost table turnover and maximize staff efficiency.', icon: <Smartphone className="w-5 h-5" /> },
    { title: 'Weighing Scale Integration', description: 'Sell item-by-weight with absolute accuracy. Hardware scales connect directly to your terminal for instant price calculation at checkout.', icon: <Scale className="w-5 h-5" /> },
    { title: 'Multi-Menu & Flexible Pricing', description: 'Manage happy hour pricing, channel-specific menus, or tiered sizes effortlessly with one-item, multi-price configuration.', icon: <Menu className="w-5 h-5" /> }
  ],
  'online-delivery': [
    { title: 'Commission-Free Web Ordering', description: 'Keep 100% of your profits with a built-in web ordering portal that syncs inventory, pricing, and kitchen tickets in real time.', icon: <Globe className="w-5 h-5" /> },
    { title: 'Uber Direct Delivery', description: 'Dispatch local delivery orders directly from your POS screen without paying high third-party app marketplace commissions.', icon: <Car className="w-5 h-5" /> },
    { title: 'Caller ID Phone Integration', description: 'Recognize returning phone order clients the moment the phone rings. Instantly pull up saved order history and delivery addresses.', icon: <PhoneCall className="w-5 h-5" /> }
  ],
  'kitchen-inventory': [
    { title: 'Real-Time Inventory', description: 'Track stock levels, monitor ingredient burn rates, and receive low-stock alerts before you run out of key best-sellers.', icon: <PackageSearch className="w-5 h-5" /> },
    { title: 'Recipe Costing', description: 'Deduct raw ingredients automatically with every order. Maintain exact profit margins, track food wastage, and keep costs under control.', icon: <ChefHat className="w-5 h-5" /> },
    { title: 'Employee Time Tracking', description: 'Simplify payroll management with built-in clock-in/clock-out tracking, staff shift logs, and role-based manager approvals.', icon: <Clock className="w-5 h-5" /> }
  ],
  'growth-loyalty': [
    { title: 'AI-Powered Loyalty Engine', description: 'Automatically incentivize repeat visits based on spending habits and visit frequency using smart, automated rewards.', icon: <Sparkles className="w-5 h-5" /> },
    { title: 'Omnichannel Gift Cards', description: 'Drive immediate upfront cash flow with unified gift card management that works seamlessly both in-store and on your website.', icon: <Gift className="w-5 h-5" /> },
    { title: 'Dynamic Automated Promotions', description: 'Set automated discount triggers, BOGO offers, and daily specials that apply instantly at checkout without manual entry.', icon: <Tag className="w-5 h-5" /> }
  ],
  'payments-admin': [
    { title: 'Integrated Payment Processing', description: 'Eliminate double entry and costly manual mistakes. Accept chip, tap, contactless, and mobile wallets at wholesale processing rates.', icon: <CreditCard className="w-5 h-5" /> },
    { title: 'Offline Processing Mode', description: 'Never stop taking payments during internet outages. Orders process offline seamlessly and sync automatically once connectivity restores.', icon: <WifiOff className="w-5 h-5" /> },
    { title: 'Live Analytics & Reporting', description: 'Access real-time sales trends, labor metrics, and product performance from any mobile device or browser, anywhere in the world.', icon: <BarChart3 className="w-5 h-5" /> }
  ]
};

const TypewriterTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span>
      {text}
    </span>
  );
};

const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PILLARS[0].id);
  const { openDemoModal } = useDemoModal();
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-transparent z-20">
      
      {/* Global CSS for Slate animations */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slate-card {
          animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 text-sm font-bold tracking-wide mb-8">
            <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
            14+ Built-In Features included
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Everything You Need to Run, Scale, and Automate Your Business.
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-slate-500 text-lg lg:text-xl font-medium">
            A complete cloud POS ecosystem engineered for lightning-fast checkout, commission-free online growth, and total operational control.
          </p>
        </div>

        {/* ── THE DIGITAL SLATE (LIGHT MODE) ── */}
        <div className="bg-slate-50/40 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Subtle Ambient Background Glow inside the slate */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 mix-blend-multiply" />
          
          {/* Left Column: Navigation Sidebar */}
          <div className="lg:w-1/3 xl:w-1/4 bg-white/70 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-slate-200/50 p-6 sm:p-8 relative z-10 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible hide-scrollbar snap-x shadow-[inset_-2px_0_4px_rgba(0,0,0,0.02)]">
            
            <div className="hidden lg:flex items-center gap-3 mb-10 pl-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <h3 className="hidden lg:block text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 pl-2">
              System Modules
            </h3>
            
            <div className="flex flex-row lg:flex-col gap-2 min-w-max lg:min-w-0">
              {PILLARS.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`group relative text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between snap-start ${
                    activeTab === pillar.id
                      ? `${cycleBg[idx % 5]} ${cycleText[idx % 5]} ${cycleShadow[idx % 5]}`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="relative z-10">{pillar.label}</span>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 relative z-10 hidden lg:block ${activeTab === pillar.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                  
                  {/* Active Background Glow */}
                  {activeTab === pillar.id && (
                    <div className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: The Canvas */}
          <div className="lg:w-2/3 xl:w-3/4 p-6 sm:p-10 lg:p-12 relative z-10 flex flex-col min-h-[500px]">
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
              {FEATURES[activeTab as keyof typeof FEATURES].map((feature, idx) => (
                <div 
                  key={`${activeTab}-${idx}`}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] hover:border-primary-300 hover:shadow-[0_15px_50px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary-500 border border-slate-200 group-hover:scale-110 group-hover:bg-primary-50 group-hover:border-primary-200 transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      <TypewriterTitle text={feature.title} />
                    </h3>
                  </div>
                  <p className="leading-relaxed text-slate-500 text-lg lg:text-xl font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Command Prompt CTA */}
          <div className="absolute bottom-0 left-0 right-0 lg:left-1/3 xl:left-1/4 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-4 sm:p-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 z-30">
            <div className="text-slate-800 font-bold text-lg sm:text-xl flex-1">
              Need a specific integration?
            </div>
            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3782fd] hover:bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 text-sm sm:text-base border border-[#3782fd] hover:border-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Book a Free Custom Demo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
