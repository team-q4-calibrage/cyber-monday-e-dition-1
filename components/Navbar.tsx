'use client';

import React, {useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';

export type NavSectionKey =
  | 'offres'
  | 'categories'
  | 'apropos'
  | 'conditions'
  | 'confidentialite';

interface NavbarProps {
  activeSection: NavSectionKey | null;
  onSelectSection: (section: NavSectionKey) => void;
  onResetHome: () => void;
}

const NAV_ITEMS: {key: NavSectionKey; label: string; anchor?: string}[] = [
  {key: 'offres', label: 'Offres', anchor: 'offres'},
  {key: 'categories', label: 'Catégories', anchor: 'categories'},
  {key: 'apropos', label: 'À propos'},
];

export default function Navbar({
  activeSection,
  onSelectSection,
  onResetHome,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target: NavSectionKey | {key: NavSectionKey; anchor?: string}) => {
    const key = typeof target === 'string' ? target : target.key;
    const anchor = typeof target === 'string' ? (target === 'offres' || target === 'categories' ? target : undefined) : target.anchor;

    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
        setMobileMenuOpen(false);
        return;
      }
    }
    onSelectSection(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#18251D]/75 backdrop-blur-xl border-b border-white/[0.07] transition-colors duration-200">
      <div className="mx-auto flex h-16 md:h-20 max-w-[1360px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Zone 1: Brand Wordmark (single text element per Top Bar Contract) */}
        <button
          type="button"
          onClick={() => {
            onResetHome();
            setMobileMenuOpen(false);
          }}
          className="font-display text-base sm:text-lg font-bold tracking-[0.14em] text-[#F2F6F3] hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
        >
          CYBER MONDAY
        </button>

        {/* Zone 2: Center Navigation Links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-10 lg:gap-12"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavClick(item.key)}
                className={`relative py-1.5 text-sm font-medium tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm ${
                  isActive
                    ? 'text-[#B7FF72]'
                    : 'text-[#94A89B] hover:text-[#F2F6F3]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#B7FF72] transition-transform duration-200 origin-left ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('offres')}
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#B7FF72] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#18251D] shadow-[0_0_24px_rgba(183,255,114,0.18)] hover:bg-[#c5ff8c] hover:shadow-[0_0_32px_rgba(183,255,114,0.32)] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18251D]"
          >
            <span>Voir les offres</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen
                ? 'Fermer le menu de navigation'
                : 'Ouvrir le menu de navigation'
            }
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#1E2E24]/80 text-[#F2F6F3] hover:border-[#B7FF72]/40 hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
            className="md:hidden border-b border-[#B7FF72]/15 bg-[#142019]/95 backdrop-blur-2xl px-6 pt-4 pb-6"
          >
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col space-y-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavClick(item.key)}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#B7FF72]/10 text-[#B7FF72]'
                        : 'text-[#F2F6F3] hover:bg-white/[0.04] hover:text-[#B7FF72]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[#B7FF72]"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleNavClick('offres')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#B7FF72] px-5 py-3.5 text-sm font-semibold text-[#18251D] shadow-[0_0_24px_rgba(183,255,114,0.2)] hover:bg-[#c5ff8c] transition-all duration-150 whitespace-nowrap"
                >
                  <span>Voir les offres</span>
                  <ArrowUpRight
                    className="h-4 w-4 stroke-[2.2]"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
