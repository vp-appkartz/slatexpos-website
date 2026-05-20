import React from "react";
import {
  Utensils,
  Coffee,
  Pizza,
  ShoppingBag,
  Truck,
  Wine,
} from "lucide-react";
import { useDemoModal } from "../../contexts/DemoModalContext";

const industries = [
  { icon: Utensils, label: "Full-Service" },
  { icon: Coffee, label: "Café & Bakery" },
  { icon: Pizza, label: "Pizzeria" },
  { icon: ShoppingBag, label: "Fast Casual" },
  { icon: Truck, label: "Food Trucks" },
  { icon: Wine, label: "Bars & Pubs" },
];

const FastCasualSection = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes ind-hsl {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ind-hsr {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ind-slide-left  { animation: ind-hsl 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .ind-slide-right { animation: ind-hsr 0.65s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
      `}</style>

      {/* ── Light gradient background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #fffaf6 0%, #fafafa 45%, #f3f0ff 100%)",
        }}
      />

      {/* ── Glow orbs ── */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,110,77,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Watermark ── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "clamp(72px, 13vw, 200px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(0,0,0,0.04)",
            whiteSpace: "nowrap",
          }}
        >
          Industries
        </span>
      </div>

      {/* ── Bottom blur + fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: "160px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(249,249,251,0.92) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1 ind-slide-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[3px] rounded-full bg-primary-300" />
              <span className="text-primary-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                Who We Serve
              </span>
            </div>

            <h1
              className="font-bold text-gray-900 leading-[1.18] mb-5"
              style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
            >
              Built for Every Restaurant Type
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              From bustling quick-service counters to fine-dining rooms, SlateX
              POS adapts to your workflow — not the other way around. One
              platform, every service style.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={openDemoModal}
                className="bg-primary-300 hover:bg-orange-600 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                style={{ boxShadow: "0 6px 24px rgba(249,110,77,0.30)" }}
              >
                Let's Connect
              </button>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-gray-400 text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Right: industry icon grid */}
          <div className="order-1 lg:order-2 ind-slide-right">
            <div
              className="rounded-3xl p-6 sm:p-8 border"
              style={{
                background: "rgba(255,255,255,0.80)",
                borderColor: "rgba(0,0,0,0.06)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(249,110,77,0.06)",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {industries.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-200 cursor-default"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(249,110,77,0.12) 0%, rgba(249,110,77,0.04) 100%)",
                        border: "1px solid rgba(249,110,77,0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary-300" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "500+", label: "Restaurants" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      {s.value}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastCasualSection;
