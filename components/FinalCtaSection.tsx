'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {motion} from 'motion/react';

interface FinalCtaSectionProps {
  onOpenDeals?: () => void;
}

export default function FinalCtaSection({onOpenDeals}: FinalCtaSectionProps) {
  return (
    <section
      id="derniere-chance"
      aria-labelledby="derniere-chance-heading"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#18251D] border-t border-white/[0.06] overflow-hidden flex items-center justify-center text-center"
    >
      {/* Large Immersive Acid Mint Radial Glow behind the Headline */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[480px] w-[640px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(183,255,114,0.3)_0%,rgba(24,37,29,0)_70%)] blur-3xl" />
      </motion.div>

      {/* Minimal Abstract Geometric Concentric Orbital Lines & Subtle Nodes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <svg
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-5xl h-full opacity-40"
        >
          {/* Subtle Outer Concentric Arc */}
          <ellipse
            cx="500"
            cy="300"
            rx="460"
            ry="240"
            stroke="#B7FF72"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          {/* Subtle Mid Concentric Arc */}
          <ellipse
            cx="500"
            cy="300"
            rx="360"
            ry="180"
            stroke="#B7FF72"
            strokeOpacity="0.12"
            strokeWidth="1.25"
          />
          {/* Subtle Inner Focus Arc */}
          <ellipse
            cx="500"
            cy="300"
            rx="260"
            ry="120"
            stroke="#B7FF72"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          {/* Minimal Floating Decorative Nodes */}
          <circle cx="140" cy="220" r="3" fill="#B7FF72" fillOpacity="0.5" />
          <circle cx="860" cy="380" r="3.5" fill="#B7FF72" fillOpacity="0.6" />
          <circle cx="720" cy="160" r="2.5" fill="#B7FF72" fillOpacity="0.4" />
          <circle cx="280" cy="420" r="2.5" fill="#B7FF72" fillOpacity="0.35" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-40px'}}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
          className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B7FF72]"
        >
          <span
            aria-hidden="true"
            className="inline-block h-[1.5px] w-6 bg-[#B7FF72] shadow-[0_0_8px_#B7FF72]"
          />
          <span>CYBER MONDAY</span>
          <span
            aria-hidden="true"
            className="inline-block h-[1.5px] w-6 bg-[#B7FF72] shadow-[0_0_8px_#B7FF72]"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          id="derniere-chance-heading"
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-40px'}}
          transition={{duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
          className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.12] text-[#F2F6F3] text-balance max-w-3xl"
        >
          Ne laissez pas passer les bonnes affaires.
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-40px'}}
          transition={{duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
          className="mt-5 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#94A89B] max-w-xl text-balance"
        >
          Les meilleures offres ne restent pas disponibles éternellement.
        </motion.p>

        {/* Prominent Primary CTA Button */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-40px'}}
          transition={{duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1]}}
          className="mt-10 sm:mt-12"
        >
          <button
            type="button"
            onClick={onOpenDeals}
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#B7FF72] px-8 py-4 sm:px-10 sm:py-4.5 text-sm sm:text-base font-semibold text-[#18251D] shadow-[0_0_32px_rgba(183,255,114,0.24)] hover:bg-[#c5ff8c] hover:shadow-[0_0_48px_rgba(183,255,114,0.42)] active:scale-[0.99] transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18251D]"
          >
            <span>Découvrir les offres</span>
            <ArrowRight
              className="h-4 w-4 stroke-[2.2] transition-transform duration-150 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
