import type {Metadata} from 'next';
import {Syne, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cyber Monday 2026 — L'Édition Réinventée",
  description:
    'Expérience promotionnelle Cyber Monday 2026. Des offres exceptionnelles sur les produits technologiques qui comptent vraiment.',
  openGraph: {
    title: "Cyber Monday 2026 — L'Édition Réinventée",
    description:
      'Expérience promotionnelle Cyber Monday 2026. Des offres exceptionnelles sur les produits technologiques qui comptent vraiment.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cyber Monday 2026 — L'Édition Réinventée",
    description:
      'Expérience promotionnelle Cyber Monday 2026. Des offres exceptionnelles sur les produits technologiques qui comptent vraiment.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${syne.variable} ${plusJakarta.variable} dark`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#18251D] text-[#F2F6F3] font-sans antialiased selection:bg-[#B7FF72] selection:text-[#18251D] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
