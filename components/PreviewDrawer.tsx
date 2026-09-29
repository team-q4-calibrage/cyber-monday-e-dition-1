'use client';

import React from 'react';
import {X, ArrowRight, Check} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';
import type {NavSectionKey} from './Navbar';
import type {SilhouetteMode} from './HeroVisual';

interface PreviewDrawerProps {
  activeSection: NavSectionKey | null;
  onClose: () => void;
  onSelectSection: (section: NavSectionKey) => void;
  selectedSilhouette: SilhouetteMode;
  onSelectSilhouette: (mode: SilhouetteMode) => void;
}

const OFFRES_PREVIEW = [
  {
    code: '01',
    title: 'Monolithe Studio M4',
    category: 'Architecture Monolithe',
    mode: 'monolithe' as SilhouetteMode,
    privilege: 'Remise privilège -30 %',
    detail: 'Châssis en aluminium anodisé noir forêt, silence acoustique absolu.',
  },
  {
    code: '02',
    title: 'Casque Référence Aether',
    category: 'Audio Spatial',
    mode: 'acoustique' as SilhouetteMode,
    privilege: 'Remise privilège -25 %',
    detail: 'Transducteurs planaires haute résolution et isolation active adaptative.',
  },
  {
    code: '03',
    title: 'Optique Télémétrique L-26',
    category: 'Optique de Précision',
    mode: 'optique' as SilhouetteMode,
    privilege: 'Remise privilège -20 %',
    detail: 'Verre asphérique traité multicouche et bague de mise au point fluide.',
  },
];

const CATEGORIES_PREVIEW = [
  {
    id: 'monolithe' as SilhouetteMode,
    number: '01',
    name: 'Stations & Monolithes',
    count: '12 pièces sélectionnées',
    summary:
      'Unités de calcul haute densité et écrans de référence étalonnés en usine.',
  },
  {
    id: 'acoustique' as SilhouetteMode,
    number: '02',
    name: 'Acoustique & Audio Spatial',
    count: '9 pièces sélectionnées',
    summary:
      'Systèmes d’écoute de studio, enceintes sculpturales et casques audiophiles.',
  },
  {
    id: 'optique' as SilhouetteMode,
    number: '03',
    name: 'Optique & Image Numérique',
    count: '7 pièces sélectionnées',
    summary:
      'Capteurs plein format, objectifs lumineux et instruments de prise de vue.',
  },
];

export default function PreviewDrawer({
  activeSection,
  onClose,
  onSelectSection,
  selectedSilhouette,
  onSelectSilhouette,
}: PreviewDrawerProps) {
  return (
    <AnimatePresence>
      {activeSection && (
        <>
          {/* Backdrop Scrim */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.18}}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-over Panel */}
          <motion.aside
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
            role="dialog"
            aria-modal="true"
            aria-label="Aperçu Cyber Monday 2026"
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg border-l border-[#B7FF72]/20 bg-[#142019]/95 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,0.85)]"
          >
            <div>
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-[#B7FF72]">
                  <span>CYBER MONDAY 2026</span>
                  <span aria-hidden="true" className="text-[#94A89B]">
                    ·
                  </span>
                  <span className="text-[#94A89B]">ÉDITION PRIVILÈGE</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer le panneau"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#94A89B] hover:border-[#B7FF72]/40 hover:text-[#F2F6F3] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Section Switcher Tabs */}
              <div className="mt-5 flex items-center gap-1 rounded-xl bg-[#18251D] p-1 border border-white/[0.06]">
                {(
                  [
                    {key: 'offres', label: 'Offres'},
                    {key: 'categories', label: 'Catégories'},
                    {key: 'apropos', label: 'À propos'},
                  ] as {key: NavSectionKey; label: string}[]
                ).map((tab) => {
                  const active = activeSection === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => onSelectSection(tab.key)}
                      className={`flex-1 rounded-lg py-2 px-3 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                        active
                          ? 'bg-[#B7FF72] text-[#18251D] font-semibold'
                          : 'text-[#94A89B] hover:text-[#F2F6F3]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic View Content */}
              {activeSection === 'offres' && (
                <div className="mt-7 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F2F6F3] tracking-tight">
                      Sélection d’offres inaugurales
                    </h2>
                    <p className="mt-2 text-sm text-[#94A89B] leading-relaxed">
                      Chaque pièce est proposée en quantité strictement limitée
                      avec synchronisation directe sur l’aperçu sculptural.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {OFFRES_PREVIEW.map((item) => {
                      const isSelected = selectedSilhouette === item.mode;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => onSelectSilhouette(item.mode)}
                          className={`w-full text-left rounded-xl p-4 border transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'border-[#B7FF72]/60 bg-[#1E2F24]/90 shadow-[0_0_25px_rgba(183,255,114,0.08)]'
                              : 'border-white/[0.07] bg-[#18251D]/70 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs text-[#94A89B]">
                            <span className="tabular-nums font-medium">
                              {item.code} · {item.category}
                            </span>
                            <span className="text-[#B7FF72] font-medium">
                              {item.privilege}
                            </span>
                          </div>
                          <div className="mt-1.5 flex items-center justify-between">
                            <h3 className="font-display text-base font-semibold text-[#F2F6F3]">
                              {item.title}
                            </h3>
                            {isSelected && (
                              <Check
                                className="h-4 w-4 text-[#B7FF72]"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          <p className="mt-1.5 text-xs text-[#94A89B] leading-relaxed">
                            {item.detail}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeSection === 'categories' && (
                <div className="mt-7 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F2F6F3] tracking-tight">
                      Univers technologiques
                    </h2>
                    <p className="mt-2 text-sm text-[#94A89B] leading-relaxed">
                      Explorez nos trois disciplines matérielles conçues pour la
                      performance durable et la pureté formelle.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {CATEGORIES_PREVIEW.map((cat) => {
                      const isSelected = selectedSilhouette === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => onSelectSilhouette(cat.id)}
                          className={`w-full text-left rounded-xl p-4 border transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'border-[#B7FF72]/60 bg-[#1E2F24]/90'
                              : 'border-white/[0.07] bg-[#18251D]/70 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs text-[#94A89B]">
                            <span className="tabular-nums">
                              {cat.number} · Discipline
                            </span>
                            <span className="text-[#B7FF72]">{cat.count}</span>
                          </div>
                          <h3 className="mt-1.5 font-display text-base font-semibold text-[#F2F6F3]">
                            {cat.name}
                          </h3>
                          <p className="mt-1.5 text-xs text-[#94A89B] leading-relaxed">
                            {cat.summary}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeSection === 'apropos' && (
                <div className="mt-7 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F2F6F3] tracking-tight">
                      Une vision épurée du Cyber Monday
                    </h2>
                    <p className="mt-3 text-sm text-[#94A89B] leading-relaxed">
                      Loin de la saturation promotionnelle habituelle, notre
                      édition 2026 met en lumière une sélection rigoureuse
                      d’instruments technologiques façonnés pour durer.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-white/[0.08] pt-5">
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        01. Exigence matérielle
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Chaque référence retenue associe ingénierie de pointe,
                        matériaux nobles et réparabilité intégrale.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        02. Transparence tarifaire
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Des conditions privilégiées authentiques, appliquées
                        directement sur nos séries phares de l’année 2026.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'conditions' && (
                <div className="mt-7 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F2F6F3] tracking-tight">
                      Conditions de l&apos;Édition 2026
                    </h2>
                    <p className="mt-3 text-sm text-[#94A89B] leading-relaxed">
                      Les offres présentées dans le cadre du Cyber Monday 2026 sont valables
                      dans la limite des stocks disponibles et pour une durée strictement limitée.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-white/[0.08] pt-5">
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        Garantie constructeur
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Chaque produit bénéficie d&apos;une garantie internationale de 3 ans avec
                        assistance dédiée prioritaire.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        Expédition sécurisée
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Emballage neutre renforcé, suivi en temps réel et remise contre signature.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'confidentialite' && (
                <div className="mt-7 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F2F6F3] tracking-tight">
                      Protection & Confidentialité
                    </h2>
                    <p className="mt-3 text-sm text-[#94A89B] leading-relaxed">
                      Votre navigation sur cette plateforme respecte les plus hauts standards
                      d&apos;anonymat et de sécurité numérique.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-white/[0.08] pt-5">
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        Respect de la vie privée
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Aucun traqueur tiers publicitaire ni collecte de données comportementales
                        intrusives.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F2F6F3]">
                        Conformité européenne
                      </h3>
                      <p className="mt-1 text-xs text-[#94A89B] leading-relaxed">
                        Conformité totale avec la réglementation européenne RGPD sur la protection
                        des données personnelles.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action inside Drawer */}
            <div className="mt-8 border-t border-white/[0.08] pt-5 flex items-center justify-between gap-4">
              <span className="text-xs text-[#94A89B]">
                Aperçu interactif synchronisé
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-lg bg-[#B7FF72] px-4 py-2.5 text-xs font-semibold text-[#18251D] hover:bg-[#c5ff8c] transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                <span>Revenir à la scène</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
