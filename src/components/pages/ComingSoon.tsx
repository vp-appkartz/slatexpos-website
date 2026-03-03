import React, { useState, useEffect } from 'react';
import SEO from '../Common/SEO';

// ── Countdown logic ───────────────────────────────────────────────────────────
const LAUNCH_DATE = new Date('2025-06-01T00:00:00');

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function getTimeLeft(): TimeLeft {
    const diff = LAUNCH_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

// ── Countdown flip card ───────────────────────────────────────────────────────
const FlipUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const display = String(value).padStart(2, '0');
    return (
        <div className="flex flex-col items-center gap-2">
            {/* Card */}
            <div
                className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
            >
                {/* Centre divider line */}
                <div
                    className="absolute inset-x-0 top-1/2 -translate-y-px h-px"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                />
                <span className="text-4xl sm:text-5xl font-bold text-white tabular-nums select-none">
                    {display}
                </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/50">
                {label}
            </span>
        </div>
    );
};

// ── Floating particle ─────────────────────────────────────────────────────────
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <span
        className="absolute rounded-full pointer-events-none animate-pulse"
        style={{ background: 'rgba(255,255,255,0.06)', ...style }}
    />
);

// ── Main component ────────────────────────────────────────────────────────────
const ComingSoon: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    const particles = React.useMemo(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            style: {
                width: `${Math.random() * 90 + 20}px`,
                height: `${Math.random() * 90 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 4}s`,
                opacity: Math.random() * 0.12 + 0.03,
            },
        })), []
    );

    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-16">
            <SEO
                title="Coming Soon | SlateX POS"
                description="SlateX POS is launching soon. Sign up to be notified when we go live!"
                keywords="SlateX POS, coming soon, restaurant POS, retail POS"
            />

            {/* ── Background — rich dark with warm orange tones ── */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'linear-gradient(145deg, #0a0a0f 0%, #130d1a 25%, #1a0f0a 50%, #0f0a15 75%, #080810 100%)',
                }}
            />

            {/* ── Warm orange orb — top left ── */}
            <div
                className="absolute -z-10"
                style={{
                    top: '-12%',
                    left: '-8%',
                    width: '550px',
                    height: '550px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(249,110,77,0.28) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            {/* ── Deep purple orb — bottom right ── */}
            <div
                className="absolute -z-10"
                style={{
                    bottom: '-12%',
                    right: '-8%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
            />
            {/* ── Subtle centre glow ── */}
            <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(249,110,77,0.06) 0%, transparent 65%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* ── Grid texture ── */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
            />

            {/* ── Floating particles ── */}
            {particles.map(p => (
                <Particle key={p.id} style={p.style} />
            ))}

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-10">

                {/* ── LOGO on white pill ── */}
                <div className="animate-fadeInUp">
                    <div
                        className="px-8 py-4 rounded-2xl"
                        style={{
                            background: 'rgba(255,255,255,0.96)',
                            boxShadow:
                                '0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px rgba(249,110,77,0.25), 0 4px 20px rgba(0,0,0,0.4)',
                        }}
                    >
                        <img
                            src="/logo/slatex_logo.png"
                            alt="SlateX POS"
                            className=" w-auto object-contain"
                        />
                    </div>
                </div>

                {/* ── Badge ── */}
                <div
                    className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full animate-fadeInUp animation-delay-200"
                    style={{
                        background: 'rgba(249,110,77,0.12)',
                        border: '1px solid rgba(249,110,77,0.35)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: '#F96E4D', boxShadow: '0 0 8px rgba(249,110,77,0.8)' }}
                    />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#F96E4D' }}>
                        Something big is coming
                    </span>
                </div>

                {/* ── Headline ── */}
                <div className="flex flex-col items-center gap-5 animate-fadeInUp animation-delay-400">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                        <span className="text-white">We're </span>
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #F96E4D 0%, #ffb49a 45%, #F96E4D 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 30px rgba(249,110,77,0.4))',
                            }}
                        >
                            Coming
                        </span>
                        <br />
                        <span className="text-white">Soon</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        We're putting the finishing touches on something incredible. SlateX POS — the all-in-one
                        restaurant &amp; retail solution — is about to go live.
                    </p>
                </div>
                {/* ── Divider ── */}
                <div
                    className="w-full max-w-sm h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(249,110,77,0.4), transparent)' }}
                />

                {/* ── Footer note ── */}
                <p className="text-xs animate-fadeInUp animation-delay-800" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    © {new Date().getFullYear()} SlateX POS. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
