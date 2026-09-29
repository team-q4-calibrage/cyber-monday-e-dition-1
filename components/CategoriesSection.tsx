'use client';

import React from 'react';
import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {motion} from 'motion/react';

export interface CategoryItem {
  id: string;
  name: string;
  countLabel?: string;
  imageUrl: string;
  imageAlt: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'technologie',
    name: 'Technologie',
    imageUrl:
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Équipements et composants technologiques de pointe sous éclairage feutré',
  },
  {
    id: 'maison',
    name: 'Maison',
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Intérieur minimaliste contemporain avec objets connectés et éclairage d’ambiance',
  },
  {
    id: 'mode',
    name: 'Mode',
    imageUrl:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vêtements et accessoires contemporains haut de gamme dans une mise en scène soignée',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Objets de vie quotidienne, voyage et café de spécialité aux textures brutes',
  },
];

interface CategoriesSectionProps {
  onSelectCategory?: (category: CategoryItem) => void;
}

export default function CategoriesSection({
  onSelectCategory,
}: CategoriesSectionProps) {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#18251D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_15%,rgba(183,255,114,0.05),rgba(24,37,29,0)_75%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        {/* Section Header (very short introduction per requirement) */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B7FF72]">
            <span
              aria-hidden="true"
              className="inline-block h-[1.5px] w-6 bg-[#B7FF72] shadow-[0_0_8px_#B7FF72]"
            />
            <span>EXPLOREZ</span>
          </div>

          {/* Heading */}
          <h2
            id="categories-heading"
            className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.12] text-[#F2F6F3]"
          >
            Trouvez ce qui vous correspond.
          </h2>
        </div>

        {/* 4 Large Visual Category Cards Grid */}
        {/* Desktop: 4 in single row (lg:grid-cols-4), Tablet: 2x2 (md:grid-cols-2), Mobile: 1 per row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {CATEGORIES.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectCategory?.(category)}
              className="group relative flex flex-col justify-end aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] min-h-[380px] sm:min-h-[430px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#142019] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#B7FF72]/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.65),0_0_30px_rgba(183,255,114,0.1)] cursor-pointer"
            >
              {/* Background Product / Atmosphere Image */}
              <Image
                src={category.imageUrl}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlays: Subtle at rest, slightly deeper on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1712]/95 via-[#142019]/45 to-transparent transition-opacity duration-300 group-hover:from-[#0B130E] group-hover:via-[#142019]/60"
              />

              {/* Content overlay */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F6F3] group-hover:text-white transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>

                {/* Small "Explorer" action with arrow */}
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#94A89B] group-hover:text-[#B7FF72] transition-colors duration-200 whitespace-nowrap shrink-0">
                  <span>Explorer</span>
                  <ArrowRight
                    className="h-4 w-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1.5"
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
