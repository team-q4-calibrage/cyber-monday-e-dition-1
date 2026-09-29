'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';

export type SilhouetteMode = 'monolithe' | 'acoustique' | 'optique';

interface HeroVisualProps {
  activeMode?: SilhouetteMode;
  onModeChange?: (mode: SilhouetteMode) => void;
}

const MODES: {id: SilhouetteMode; index: string; label: string}[] = [
  {id: 'monolithe', index: '01', label: 'Architecture Monolithe'},
  {id: 'acoustique', index: '02', label: 'Audio Spatial'},
  {id: 'optique', index: '03', label: 'Optique de Précision'},
];

const PARTICLES = [
  {id: 1, top: '16%', left: '22%', size: 3, duration: 9, delay: 0},
  {id: 2, top: '24%', left: '78%', size: 4, duration: 11, delay: 1.5},
  {id: 3, top: '68%', left: '16%', size: 2.5, duration: 10, delay: 0.8},
  {id: 4, top: '76%', left: '74%', size: 3.5, duration: 12, delay: 2.2},
  {id: 5, top: '42%', left: '86%', size: 2, duration: 8.5, delay: 1.1},
  {id: 6, top: '14%', left: '54%', size: 2.5, duration: 10.5, delay: 2.7},
];

export default function HeroVisual({
  activeMode: controlledMode,
  onModeChange,
}: HeroVisualProps) {
  const [internalMode, setInternalMode] = useState<SilhouetteMode>('monolithe');
  const [pointerOffset, setPointerOffset] = useState({x: 0, y: 0});

  const currentMode = controlledMode ?? internalMode;

  const handleSelectMode = (mode: SilhouetteMode) => {
    setInternalMode(mode);
    onModeChange?.(mode);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setPointerOffset({x: normX, y: normY});
  };

  const handlePointerLeave = () => {
    setPointerOffset({x: 0, y: 0});
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[580px] mx-auto aspect-square flex flex-col items-center justify-center select-none"
    >
      {/* Ambient Atmospheric Glow Layers */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute inset-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(183,255,114,0.22),rgba(24,37,29,0)_70%)] blur-3xl"
      />

      <motion.div
        animate={{
          x: [-10, 12, -10],
          y: [8, -10, 8],
          opacity: [0.14, 0.24, 0.14],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(183,255,114,0.28)_0%,rgba(24,37,29,0)_72%)] blur-2xl"
      />

      {/* Main Architectural Stage Frame */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Fine Concentric Architectural Grid Rings */}
        <div className="pointer-events-none absolute inset-6 sm:inset-10 rounded-full border border-white/[0.04]" />
        <div className="pointer-events-none absolute inset-16 sm:inset-22 rounded-full border border-[#B7FF72]/[0.07]" />

        {/* Subtle Drifting Micro-Particles */}
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute rounded-full bg-[#B7FF72] shadow-[0_0_10px_#B7FF72]"
          />
        ))}

        {/* Background Floating Dark Graphite Architectural Slab */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [-6, -4, -6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate3d(${pointerOffset.x * -0.35}px, ${pointerOffset.y * -0.35}px, 0)`,
          }}
          className="pointer-events-none absolute w-[54%] h-[64%] rounded-[28px] bg-gradient-to-br from-[#233529]/90 via-[#16221B]/95 to-[#0E1712] border border-white/[0.06] shadow-[0_32px_80px_rgba(0,0,0,0.65)]"
        >
          {/* Subtle top-left Acid Mint rim highlight */}
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B7FF72]/40 to-transparent" />
        </motion.div>

        {/* Central Interactive 3D Hardware Sculpture (SVG with physical shaders) */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate3d(${pointerOffset.x * 0.5}px, ${pointerOffset.y * 0.5}px, 0)`,
          }}
          className="relative z-10 w-[82%] h-[82%] flex items-center justify-center"
        >
          <svg
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_28px_60px_rgba(6,12,9,0.85)]"
            role="img"
            aria-label="Sculpture technologique abstraite Cyber Monday 2026"
          >
            <defs>
              {/* Deep Forest Graphite 3D Body Gradient */}
              <linearGradient
                id="monolithBody"
                x1="120"
                y1="70"
                x2="360"
                y2="410"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#2A3F32" />
                <stop offset="45%" stopColor="#18251D" />
                <stop offset="100%" stopColor="#0B130E" />
              </linearGradient>

              {/* Acid Mint Specular Rim Gradient */}
              <linearGradient
                id="mintRim"
                x1="100"
                y1="80"
                x2="380"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#B7FF72" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#B7FF72" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#18251D" stopOpacity="0.05" />
              </linearGradient>

              {/* Soft 3D Sphere Shading */}
              <radialGradient
                id="sphere3D"
                cx="35%"
                cy="30%"
                r="70%"
                fx="30%"
                fy="25%"
              >
                <stop offset="0%" stopColor="#B7FF72" stopOpacity="0.55" />
                <stop offset="28%" stopColor="#2B4234" />
                <stop offset="75%" stopColor="#142018" />
                <stop offset="100%" stopColor="#0A110D" />
              </radialGradient>

              {/* Secondary Dark Sphere */}
              <radialGradient
                id="obsidianOrb"
                cx="32%"
                cy="28%"
                r="68%"
              >
                <stop offset="0%" stopColor="#3B5645" />
                <stop offset="55%" stopColor="#18251D" />
                <stop offset="100%" stopColor="#09100C" />
              </radialGradient>

              {/* Acid Mint Core Glow */}
              <radialGradient id="mintCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#B7FF72" stopOpacity="0.42" />
                <stop offset="60%" stopColor="#B7FF72" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#B7FF72" stopOpacity="0" />
              </radialGradient>

              {/* Frosted Glass Surface */}
              <linearGradient
                id="frostedGlass"
                x1="140"
                y1="140"
                x2="340"
                y2="340"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#F2F6F3" stopOpacity="0.14" />
                <stop offset="50%" stopColor="#23372B" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#B7FF72" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            {/* Ambient Core Halo */}
            <circle cx="240" cy="240" r="155" fill="url(#mintCoreGlow)" />

            {/* Back Orbital Ring */}
            <ellipse
              cx="240"
              cy="246"
              rx="178"
              ry="68"
              transform="rotate(-24 240 246)"
              stroke="url(#mintRim)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.55"
            />

            {/* MODE 1: ARCHITECTURE MONOLITHE (Precision Hardware Silhouette) */}
            {currentMode === 'monolithe' && (
              <g>
                {/* Main Sculpted Hardware Monolith */}
                <rect
                  x="148"
                  y="86"
                  width="184"
                  height="308"
                  rx="34"
                  fill="url(#monolithBody)"
                  stroke="url(#mintRim)"
                  strokeWidth="1.75"
                />

                {/* Inner Chamfered Bezel */}
                <rect
                  x="164"
                  y="102"
                  width="152"
                  height="276"
                  rx="24"
                  fill="#111B15"
                  stroke="#B7FF72"
                  strokeOpacity="0.16"
                  strokeWidth="1"
                />

                {/* Precision Acoustic / Optical Array Lines */}
                <line
                  x1="240"
                  y1="126"
                  x2="240"
                  y2="354"
                  stroke="#B7FF72"
                  strokeOpacity="0.18"
                  strokeWidth="1"
                />
                <circle
                  cx="240"
                  cy="205"
                  r="48"
                  fill="url(#frostedGlass)"
                  stroke="#B7FF72"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />
                <circle
                  cx="240"
                  cy="205"
                  r="22"
                  fill="#0D1611"
                  stroke="#B7FF72"
                  strokeOpacity="0.75"
                  strokeWidth="1.5"
                />
                <circle cx="240" cy="205" r="5" fill="#B7FF72" />

                {/* Subtle Status Bar Accent on Hardware */}
                <rect
                  x="212"
                  y="318"
                  width="56"
                  height="4"
                  rx="2"
                  fill="#B7FF72"
                  fillOpacity="0.7"
                />
              </g>
            )}

            {/* MODE 2: AUDIO SPATIAL (Sculpted Acoustic Silhouette) */}
            {currentMode === 'acoustique' && (
              <g>
                {/* Acoustic Arch Band */}
                <path
                  d="M144 236C144 166.412 186.981 110 240 110C293.019 110 336 166.412 336 236"
                  stroke="url(#mintRim)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Left Anodized Acoustic Shell */}
                <rect
                  x="122"
                  y="206"
                  width="76"
                  height="132"
                  rx="38"
                  fill="url(#monolithBody)"
                  stroke="url(#mintRim)"
                  strokeWidth="1.75"
                />
                {/* Right Anodized Acoustic Shell */}
                <rect
                  x="282"
                  y="206"
                  width="76"
                  height="132"
                  rx="38"
                  fill="url(#monolithBody)"
                  stroke="url(#mintRim)"
                  strokeWidth="1.75"
                />
                {/* Center Soundwave Resonance Rings */}
                <circle
                  cx="240"
                  cy="268"
                  r="44"
                  stroke="#B7FF72"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />
                <circle
                  cx="240"
                  cy="268"
                  r="24"
                  fill="url(#frostedGlass)"
                  stroke="#B7FF72"
                  strokeOpacity="0.7"
                  strokeWidth="1.5"
                />
                <circle cx="240" cy="268" r="5" fill="#B7FF72" />
              </g>
            )}

            {/* MODE 3: OPTIQUE DE PRÉCISION (Concentric Camera / Lens Silhouette) */}
            {currentMode === 'optique' && (
              <g>
                {/* Outer Anodized Chassis */}
                <rect
                  x="126"
                  y="126"
                  width="228"
                  height="228"
                  rx="52"
                  fill="url(#monolithBody)"
                  stroke="url(#mintRim)"
                  strokeWidth="1.75"
                />
                {/* Multi-element Optical Barrel */}
                <circle
                  cx="240"
                  cy="240"
                  r="86"
                  fill="#0E1712"
                  stroke="url(#mintRim)"
                  strokeWidth="2"
                />
                <circle
                  cx="240"
                  cy="240"
                  r="64"
                  fill="url(#frostedGlass)"
                  stroke="#B7FF72"
                  strokeOpacity="0.35"
                  strokeWidth="1.25"
                />
                <circle
                  cx="240"
                  cy="240"
                  r="36"
                  fill="#09100C"
                  stroke="#B7FF72"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />
                <circle cx="228" cy="228" r="7" fill="#B7FF72" fillOpacity="0.85" />
                <circle cx="254" cy="252" r="3.5" fill="#B7FF72" fillOpacity="0.45" />
              </g>
            )}

            {/* Foreground Floating 3D Torus / Orbital Accent */}
            <ellipse
              cx="240"
              cy="252"
              rx="192"
              ry="74"
              transform="rotate(-18 240 252)"
              stroke="url(#mintRim)"
              strokeWidth="2.25"
            />

            {/* Floating Translucent Glass Prism (Top Right) */}
            <polygon
              points="356,96 404,124 382,174 334,148"
              fill="url(#frostedGlass)"
              stroke="#B7FF72"
              strokeOpacity="0.45"
              strokeWidth="1.25"
            />

            {/* Floating 3D Acid-Mint-Lit Sphere (Bottom Left) */}
            <circle cx="116" cy="336" r="34" fill="url(#sphere3D)" />

            {/* Floating Matte Graphite Orb (Top Left) */}
            <circle
              cx="118"
              cy="142"
              r="20"
              fill="url(#obsidianOrb)"
              stroke="#B7FF72"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            {/* Luminous Node Accent on Orbital Path */}
            <circle cx="418" cy="194" r="5" fill="#B7FF72" />
            <circle
              cx="418"
              cy="194"
              r="12"
              stroke="#B7FF72"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Floating Frosted Glass Specular Plate (Bottom Right Depth Layer) */}
        <motion.div
          animate={{
            y: [6, -8, 6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate3d(${pointerOffset.x * 0.8}px, ${pointerOffset.y * 0.8}px, 0)`,
          }}
          className="pointer-events-none absolute bottom-12 right-6 sm:right-10 z-20 rounded-2xl border border-[#B7FF72]/20 bg-[#18251D]/70 backdrop-blur-xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#B7FF72] shadow-[0_0_10px_#B7FF72]" />
            <span className="text-xs font-medium tracking-wide text-[#F2F6F3]">
              Édition Limitée · Série 2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Silhouette Switcher Controls (Clean Segmented Control in French) */}
      <div
        role="group"
        aria-label="Sélecteur de silhouette technologique"
        className="relative z-20 mt-2 flex items-center gap-1 rounded-xl border border-white/[0.08] bg-[#131E17]/85 p-1 backdrop-blur-md"
      >
        {MODES.map((m) => {
          const active = currentMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => handleSelectMode(m.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF72] ${
                active
                  ? 'bg-[#B7FF72] text-[#18251D] font-semibold shadow-[0_0_16px_rgba(183,255,114,0.25)]'
                  : 'text-[#94A89B] hover:text-[#F2F6F3]'
              }`}
            >
              <span className="tabular-nums opacity-75 mr-1.5">{m.index}</span>
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
