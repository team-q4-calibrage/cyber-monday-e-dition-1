'use client';

import React from 'react';
import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';

export interface FeaturedDeal {
  id: string;
  category: string;
  name: string;
  price: string;
  previousPrice: string;
  discount: string;
  imageUrl: string;
  imageAlt: string;
}

const FEATURED_DEALS: FeaturedDeal[] = [
  {
    id: 'casque-audio',
    category: 'TECHNOLOGIE',
    name: 'Casque audio sans fil',
    price: '149 €',
    previousPrice: '219 €',
    discount: '-32 %',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Casque audio sans fil haute fidélité posé sur fond sombre de studio',
  },
  {
    id: 'lampe-connectee',
    category: 'MAISON',
    name: 'Lampe connectée',
    price: '59 €',
    previousPrice: '89 €',
    discount: '-34 %',
    imageUrl:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Lampe connectée design diffusant une lumière douce dans une atmosphère feutrée',
  },
  {
    id: 'montre-connectee',
    category: 'ACCESSOIRES',
    name: 'Montre connectée',
    price: '129 €',
    previousPrice: '189 €',
    discount: '-32 %',
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Montre connectée minimaliste en métal brossé sur fond sombre',
  },
  {
    id: 'enceinte-portable',
    category: 'TECHNOLOGIE',
    name: 'Enceinte portable',
    price: '79 €',
    previousPrice: '119 €',
    discount: '-34 %',
    imageUrl:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Enceinte portable acoustique au design épuré sous éclairage de studio',
  },
];

interface FeaturedDealsSectionProps {
  onSelectDeal?: (deal: FeaturedDeal) => void;
}

export default function FeaturedDealsSection({
  onSelectDeal,
}: FeaturedDealsSectionProps) {
  return (
    <section
      id="offres"
      aria-labelledby="offres-heading"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#18251D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Soft Ambient Background Radiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(183,255,114,0.06),rgba(24,37,29,0)_75%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B7FF72]">
            <span
              aria-hidden="true"
              className="inline-block h-[1.5px] w-6 bg-[#B7FF72] shadow-[0_0_8px_#B7FF72]"
            />
            <span>OFFRES EXCLUSIVES</span>
          </div>

          {/* Heading */}
          <h2
            id="offres-heading"
            className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.12] text-[#F2F6F3]"
          >
            Les offres à ne pas manquer.
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-[#94A89B]">
            Une sélection de produits soigneusement choisis pour le Cyber Monday.
          </p>
        </div>

        {/* 4 Featured Deal Cards Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {FEATURED_DEALS.map((deal, index) => (
            <motion.article
              key={deal.id}
              initial={{opacity: 0, y: 22}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectDeal?.(deal)}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#142019]/90 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#B7FF72]/40 hover:bg-[#18261E] hover:shadow-[0_22px_50px_rgba(0,0,0,0.65),0_0_35px_rgba(183,255,114,0.12)] cursor-pointer"
            >
              {/* Upper Portion: Product Image & Discount Badge */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0E1712] border border-white/[0.04]">
                  {/* Subtle Studio Vignette */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0E1712]/70 via-transparent to-black/20"
                  />

                  {/* Product Image */}
                  <Image
                    src={deal.imageUrl}
                    alt={deal.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Discount Badge in Acid Mint */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="inline-flex items-center rounded-md border border-[#B7FF72]/30 bg-[#142019]/85 px-2.5 py-1 text-xs font-bold tracking-wide text-[#B7FF72] backdrop-blur-md shadow-[0_0_12px_rgba(183,255,114,0.18)]">
                      {deal.discount}
                    </span>
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="mt-5">
                  <span className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A89B]">
                    {deal.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-[#F2F6F3] group-hover:text-[#F2F6F3] transition-colors duration-150">
                    {deal.name}
                  </h3>
                </div>
              </div>

              {/* Lower Portion: Pricing & Découvrir Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-end justify-between">
                <div>
                  <div className="text-xs text-[#94A89B]/75 line-through tabular-nums">
                    {deal.previousPrice}
                  </div>
                  <div className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-[#F2F6F3] tabular-nums">
                    {deal.price}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#94A89B] group-hover:text-[#B7FF72] transition-colors duration-150">
                  <span>Découvrir</span>
                  <ArrowUpRight
                    className="h-4 w-4 stroke-[2.2] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
