'use client';

import React from 'react';
import {ArrowRight, Layers} from 'lucide-react';
import {motion} from 'motion/react';
import HeroVisual, {type SilhouetteMode} from './HeroVisual';
import type {NavSectionKey} from './Navbar';

interface HeroSectionProps {
  onOpenSection: (section: NavSectionKey) => void;
  selectedSilhouette: SilhouetteMode;
  onSelectSilhouette: (mode: SilhouetteMode) => void;
}

export default function HeroSection({
  onOpenSection,
  selectedSilhouette,
  onSelectSilhouette,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] w-full flex items-center overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle Background Dark Forest Radial Vignette & Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_45%,rgba(183,255,114,0.07),rgba(24,37,29,0)_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B7FF72]/15 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow (Unboxed clean editorial metadata per Zero-Pill rule) */}
            <motion.div
              initial={{opacity: 0, y: 14}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B7FF72]"
            >
              <span
                aria-hidden="true"
                className="inline-block h-[1.5px] w-7 bg-[#B7FF72] shadow-[0_0_10px_#B7FF72]"
              />
              <span>CYBER MONDAY 2026</span>
            </motion.div>

            {/* Main French Headline */}
            <motion.h1
              id="hero-heading"
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 sm:mt-8 font-display text-4xl sm:text-6xl xl:text-[4.25rem] font-bold tracking-[-0.02em] leading-[1.06] text-[#F2F6F3] text-balance"
            >
              Le Cyber Monday,
              <br />
              <span className="text-[#B7FF72] drop-shadow-[0_0_28px_rgba(183,255,114,0.18)]">
                réinventé.
              </span>
            </motion.h1>

            {/* Supporting French Description */}
            <motion.p
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.6,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 sm:mt-8 max-w-xl text-base sm:text-lg lg:text-xl font-normal leading-[1.65] text-[#94A89B] tracking-[0.01em]"
            >
              Des offres exceptionnelles sur les produits qui comptent vraiment.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.6,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => onOpenSection('offres')}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#B7FF72] px-7 py-4 text-sm sm:text-base font-semibold text-[#18251D] shadow-[0_0_32px_rgba(183,255,114,0.22)] hover:bg-[#c5ff8c] hover:shadow-[0_0_44px_rgba(183,255,114,0.38)] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18251D]"
              >
                <span>Découvrir les offres</span>
                <ArrowRight
                  className="h-4 w-4 stroke-[2.2] transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => onOpenSection('categories')}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#B7FF72]/25 bg-[#1E2E24]/50 px-7 py-4 text-sm sm:text-base font-medium text-[#F2F6F3] backdrop-blur-md hover:border-[#B7FF72]/60 hover:bg-[#1E2E24]/90 hover:text-[#B7FF72] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18251D]"
              >
                <Layers
                  className="h-4 w-4 text-[#B7FF72]"
                  aria-hidden="true"
                />
                <span>Voir les catégories</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Abstract Premium Cyber Monday Visual */}
          <motion.div
            initial={{opacity: 0, scale: 0.96, y: 16}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroVisual
              activeMode={selectedSilhouette}
              onModeChange={onSelectSilhouette}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
