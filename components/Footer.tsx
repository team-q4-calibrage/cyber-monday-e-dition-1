'use client';

import React from 'react';
import type {NavSectionKey} from './Navbar';

interface FooterProps {
  onSelectSection: (section: NavSectionKey) => void;
  onResetHome: () => void;
}

export default function Footer({
  onSelectSection,
  onResetHome,
}: FooterProps) {
  const scrollToAnchor = (id: string, sectionKey?: NavSectionKey) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    } else if (sectionKey) {
      onSelectSection(sectionKey);
    }
  };

  return (
    <footer className="w-full bg-[#121D16] border-t border-white/[0.08] text-[#94A89B]">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start justify-between">
          {/* Left Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <button
              type="button"
              onClick={onResetHome}
              className="font-display text-base sm:text-lg font-bold tracking-[0.14em] text-[#F2F6F3] hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer text-left"
            >
              CYBER MONDAY
            </button>
            <p className="mt-3 text-sm text-[#94A89B] leading-relaxed max-w-sm">
              Les meilleures offres, réunies au même endroit.
            </p>
          </div>

          {/* Right Navigation & Secondary Links Column */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row sm:items-start sm:justify-end gap-10 sm:gap-14 lg:gap-18">
            {/* Primary Navigation */}
            <div className="flex flex-col space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F2F6F3]">
                Navigation
              </span>
              <ul className="flex flex-col space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToAnchor('offres', 'offres')}
                    className="hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer"
                  >
                    Offres
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToAnchor('categories', 'categories')}
                    className="hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer"
                  >
                    Catégories
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectSection('apropos')}
                    className="hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer"
                  >
                    À propos
                  </button>
                </li>
              </ul>
            </div>

            {/* Small Secondary Links */}
            <div className="flex flex-col space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F2F6F3]">
                Informations
              </span>
              <ul className="flex flex-col space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectSection('conditions')}
                    className="hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer"
                  >
                    Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectSection('confidentialite')}
                    className="hover:text-[#B7FF72] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] rounded-sm cursor-pointer"
                  >
                    Confidentialité
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A89B]/80">
          <p>© 2026 Cyber Monday. Tous droits réservés.</p>
          <div className="flex items-center gap-2 text-[11px] tracking-wider text-[#94A89B]/60 uppercase">
            <span>Édition Limitée 2026</span>
            <span aria-hidden="true">·</span>
            <span>Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
