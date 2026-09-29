'use client';

import React, {useState} from 'react';
import Navbar, {type NavSectionKey} from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedDealsSection, {type FeaturedDeal} from '@/components/FeaturedDealsSection';
import CategoriesSection, {type CategoryItem} from '@/components/CategoriesSection';
import FlashSaleSection from '@/components/FlashSaleSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import PreviewDrawer from '@/components/PreviewDrawer';
import type {SilhouetteMode} from '@/components/HeroVisual';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<NavSectionKey | null>(
    null
  );
  const [selectedSilhouette, setSelectedSilhouette] =
    useState<SilhouetteMode>('monolithe');

  const handleSelectDeal = (_deal: FeaturedDeal) => {
    setActiveSection('offres');
  };

  const handleSelectCategory = (_category: CategoryItem) => {
    setActiveSection('categories');
  };

  const handleClaimFlashOffer = () => {
    setActiveSection('offres');
  };

  const handleOpenDeals = () => {
    setActiveSection('offres');
  };

  return (
    <div className="min-h-screen bg-[#18251D] text-[#F2F6F3] flex flex-col">
      <Navbar
        activeSection={activeSection}
        onSelectSection={(section) => setActiveSection(section)}
        onResetHome={() => setActiveSection(null)}
      />

      <main className="flex-1 flex flex-col">
        <HeroSection
          onOpenSection={(section) => setActiveSection(section)}
          selectedSilhouette={selectedSilhouette}
          onSelectSilhouette={(mode) => setSelectedSilhouette(mode)}
        />
        <FeaturedDealsSection onSelectDeal={handleSelectDeal} />
        <CategoriesSection onSelectCategory={handleSelectCategory} />
        <FlashSaleSection onClaimOffer={handleClaimFlashOffer} />
        <FinalCtaSection onOpenDeals={handleOpenDeals} />
      </main>

      <Footer
        onSelectSection={(section) => setActiveSection(section)}
        onResetHome={() => setActiveSection(null)}
      />

      <PreviewDrawer
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
        onSelectSection={(section) => setActiveSection(section)}
        selectedSilhouette={selectedSilhouette}
        onSelectSilhouette={(mode) => setSelectedSilhouette(mode)}
      />
    </div>
  );
}
