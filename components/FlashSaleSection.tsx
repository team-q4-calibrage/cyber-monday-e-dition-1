'use client';

import React, {useState, useEffect} from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import {motion} from 'motion/react';

interface FlashSaleSectionProps {
  onClaimOffer?: () => void;
}

export default function FlashSaleSection({
  onClaimOffer,
}: FlashSaleSectionProps) {
  // Visual local ticking countdown starting at 08h 42m 17s
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 17,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return {...prev, seconds: prev.seconds - 1};
        } else if (prev.minutes > 0) {
          return {...prev, minutes: prev.minutes - 1, seconds: 59};
        } else if (prev.hours > 0) {
          return {hours: prev.hours - 1, minutes: 59, seconds: 59};
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (value: number) => value.toString().padStart(2, '0');

  return (
    <section
      id="offre-eclair"
      aria-labelledby="offre-eclair-heading"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#18251D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Soft Background Atmospheric Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(183,255,114,0.08),rgba(24,37,29,0)_75%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        {/* Wide Cinematic Promotional Banner */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#B7FF72]/25 bg-gradient-to-br from-[#1E2E24]/95 via-[#15221B]/95 to-[#0D1611] p-8 sm:p-12 lg:p-16 shadow-[0_32px_90px_rgba(0,0,0,0.65),0_0_50px_rgba(183,255,114,0.07)]">
          {/* Subtle Accent Glow Orbs within Banner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(183,255,114,0.2)_0%,rgba(24,37,29,0)_70%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(183,255,114,0.1)_0%,rgba(24,37,29,0)_70%)] blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side: Editorial Content, Discount & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B7FF72]">
                <span
                  aria-hidden="true"
                  className="inline-block h-[1.5px] w-6 bg-[#B7FF72] shadow-[0_0_8px_#B7FF72]"
                />
                <span>OFFRE ÉCLAIR</span>
              </div>

              {/* Main Heading */}
              <h2
                id="offre-eclair-heading"
                className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] text-[#F2F6F3]"
              >
                Une offre.{' '}
                <span className="text-[#B7FF72] drop-shadow-[0_0_24px_rgba(183,255,114,0.2)]">
                  Quelques heures.
                </span>
              </h2>

              {/* Short Supporting Text */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#94A89B] max-w-lg leading-relaxed">
                Profitez d&apos;une remise exceptionnelle avant la fin de l&apos;offre.
              </p>

              {/* Large Discount Display */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#B7FF72] drop-shadow-[0_0_35px_rgba(183,255,114,0.25)] tabular-nums">
                  -50 %
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#F2F6F3]">
                  Sur une sélection de produits
                </span>
              </div>

              {/* Prominent Primary Button */}
              <div className="mt-9 sm:mt-11">
                <button
                  type="button"
                  onClick={onClaimOffer}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#B7FF72] px-8 py-4 sm:px-9 sm:py-4.5 text-sm sm:text-base font-semibold text-[#18251D] shadow-[0_0_32px_rgba(183,255,114,0.25)] hover:bg-[#c5ff8c] hover:shadow-[0_0_45px_rgba(183,255,114,0.42)] active:scale-[0.99] transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18251D]"
                >
                  <Sparkles className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  <span>Profiter de l&apos;offre</span>
                  <ArrowRight
                    className="h-4 w-4 stroke-[2.2] transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* Right Side: Elegant Compact Countdown & Abstract Visual Element */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-8 w-full">
              {/* Visual Elegant Countdown */}
              <div
                role="timer"
                aria-label="Temps restant pour l'offre éclair"
                className="w-full max-w-sm rounded-2xl border border-white/[0.08] bg-[#121D16]/85 backdrop-blur-xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A89B] border-b border-white/[0.06] pb-3 mb-4">
                  <span>Temps restant</span>
                  <span className="flex items-center gap-1.5 text-[#B7FF72]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF72] animate-pulse" />
                    En direct
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  {/* Hours */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#18261E] border border-white/[0.04] p-3">
                    <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F6F3] tabular-nums">
                      {formatUnit(timeLeft.hours)}
                    </span>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#B7FF72]">
                      Heures
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#18261E] border border-white/[0.04] p-3">
                    <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F6F3] tabular-nums">
                      {formatUnit(timeLeft.minutes)}
                    </span>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#B7FF72]">
                      Minutes
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#18261E] border border-white/[0.04] p-3">
                    <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F6F3] tabular-nums">
                      {formatUnit(timeLeft.seconds)}
                    </span>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#B7FF72]">
                      Secondes
                    </span>
                  </div>
                </div>
              </div>

              {/* Abstract 3D Geometric Sculpture Silhouette */}
              <div className="relative w-full max-w-xs aspect-square flex items-center justify-center select-none">
                {/* Ambient Soft Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(183,255,114,0.3)_0%,rgba(24,37,29,0)_70%)] blur-2xl"
                />

                {/* Floating Geometric Sculpture (SVG with rich physical shaders) */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 340 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.8)]"
                    role="img"
                    aria-label="Sculpture géométrique abstraite de l'offre éclair"
                  >
                    <defs>
                      <linearGradient
                        id="flashMonolith"
                        x1="80"
                        y1="60"
                        x2="260"
                        y2="280"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#2D4535" />
                        <stop offset="50%" stopColor="#18251D" />
                        <stop offset="100%" stopColor="#0B130E" />
                      </linearGradient>

                      <linearGradient
                        id="flashRim"
                        x1="70"
                        y1="50"
                        x2="270"
                        y2="290"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#B7FF72" stopOpacity="0.9" />
                        <stop offset="60%" stopColor="#B7FF72" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#18251D" stopOpacity="0.05" />
                      </linearGradient>

                      <radialGradient
                        id="flashSphere"
                        cx="35%"
                        cy="30%"
                        r="70%"
                      >
                        <stop offset="0%" stopColor="#B7FF72" stopOpacity="0.6" />
                        <stop offset="35%" stopColor="#283E30" />
                        <stop offset="85%" stopColor="#101A14" />
                        <stop offset="100%" stopColor="#070C09" />
                      </radialGradient>

                      <linearGradient
                        id="glassTorus"
                        x1="90"
                        y1="90"
                        x2="250"
                        y2="250"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#F2F6F3" stopOpacity="0.18" />
                        <stop offset="50%" stopColor="#203427" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#B7FF72" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>

                    {/* Back Orbital Dash Ring */}
                    <ellipse
                      cx="170"
                      cy="170"
                      rx="130"
                      ry="54"
                      transform="rotate(-26 170 170)"
                      stroke="url(#flashRim)"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      opacity="0.45"
                    />

                    {/* Central Faceted Monolith / Diamond Prism */}
                    <polygon
                      points="170,48 248,154 170,292 92,154"
                      fill="url(#flashMonolith)"
                      stroke="url(#flashRim)"
                      strokeWidth="1.75"
                    />

                    {/* Inner Chamfered Facets */}
                    <line
                      x1="170"
                      y1="48"
                      x2="170"
                      y2="292"
                      stroke="#B7FF72"
                      strokeOpacity="0.28"
                      strokeWidth="1.25"
                    />
                    <line
                      x1="92"
                      y1="154"
                      x2="248"
                      y2="154"
                      stroke="#B7FF72"
                      strokeOpacity="0.22"
                      strokeWidth="1.25"
                    />

                    {/* Foreground Orbital Ring */}
                    <ellipse
                      cx="170"
                      cy="176"
                      rx="140"
                      ry="58"
                      transform="rotate(-18 170 176)"
                      stroke="url(#flashRim)"
                      strokeWidth="2.2"
                    />

                    {/* Floating Frosted Glass Torus / Circle */}
                    <circle
                      cx="170"
                      cy="154"
                      r="36"
                      fill="url(#glassTorus)"
                      stroke="#B7FF72"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                    />
                    <circle cx="170" cy="154" r="6" fill="#B7FF72" />

                    {/* Floating Acid-Mint-Lit 3D Sphere */}
                    <circle cx="76" cy="234" r="24" fill="url(#flashSphere)" />

                    {/* Floating Matte Node */}
                    <circle
                      cx="262"
                      cy="114"
                      r="14"
                      fill="#1E2F24"
                      stroke="#B7FF72"
                      strokeOpacity="0.4"
                      strokeWidth="1.25"
                    />
                    <circle cx="262" cy="114" r="3" fill="#B7FF72" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
