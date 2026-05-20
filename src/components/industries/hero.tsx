import React from "react";
import {
  Utensils,
  Coffee,
  Pizza,
  ShoppingBag,
  Truck,
  Wine,
} from "lucide-react";

const industries = [
  { icon: Utensils, label: "Full-Service" },
  { icon: Coffee, label: "Café & Bakery" },
  { icon: Pizza, label: "Pizzeria" },
  { icon: ShoppingBag, label: "Fast Casual" },
  { icon: Truck, label: "Food Trucks" },
  { icon: Wine, label: "Bars & Pubs" },
];

const FastCasualSection = () => {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28">
      {/* ── Deep gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0f0c1e 0%, #12102b 30%, #0d1928 65%, #1a0e1f 100%)",
        }}
      />

      {/* ── Glow orbs ── */}
      <div
        className="absolute top-[-120px] right-[-80px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,110,77,0.22) 0%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.045,
        }}
      />

      {/* ── Background watermark ── */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "clamp(80px, 13vw, 200px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.05)",
            whiteSpace: "nowrap",
          }}
        >
          Industries
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-8 rounded-full bg-primary-300" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
                Who We Serve
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.18] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              Built for Every Restaurant Type
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              From bustling quick-service counters to fine-dining rooms, SlateX POS adapts to your workflow — not the other way around. One platform, every service style.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="bg-primary-300 hover:bg-orange-600 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                style={{ boxShadow: "0 8px 32px rgba(249,110,77,0.38)" }}
              >
                Let's Connect
              </a>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
                <span className="text-white/45 text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Right: industry icon grid */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-[-24px] rounded-[36px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,110,77,0.28) 0%, rgba(139,92,246,0.18) 100%)",
                  filter: "blur(28px)",
                  opacity: 0.65,
                }}
              />

              {/* Glass grid card */}
              <div
                className="relative rounded-3xl p-6 sm:p-8"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {industries.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(249,110,77,0.25) 0%, rgba(249,110,77,0.08) 100%)",
                          border: "1px solid rgba(249,110,77,0.3)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-primary-300" />
                      </div>
                      <span className="text-white/75 text-sm font-medium text-center leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats strip */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "500+", label: "Restaurants" },
                    { value: "99.9%", label: "Uptime" },
                    { value: "24/7", label: "Support" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {s.value}
                      </div>
                      <div className="text-white/45 text-xs sm:text-sm font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #fff8f3 100%)",
        }}
      />
    </section>
  );
};

export default FastCasualSection;
