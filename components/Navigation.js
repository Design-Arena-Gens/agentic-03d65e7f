'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/mushrooms', label: 'Nos Champignons' },
  { href: '/ferme', label: 'La Ferme' },
  { href: '/contact', label: 'Contact' }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 200], [0.15, 0.95]);
  const blur = useTransform(scrollY, [0, 200], ['0px', '12px']);
  const backgroundColor = useMotionTemplate`rgba(26, 43, 31, ${backgroundOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blur})`;

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed inset-x-0 top-0 z-50 border-b border-forest/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-primary/80 p-2 shadow-lg">
            <span className="text-xl font-semibold text-earth">🌱</span>
          </div>
          <span className="text-lg font-bold uppercase tracking-[0.3em] text-cream">Champisphère</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          className="ml-auto inline-flex rounded-full border border-white/30 p-2 text-cream transition hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        <nav className="hidden gap-6 text-sm font-semibold text-cream/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 hover:text-white ${pathname === link.href ? 'text-white' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/mushrooms"
          className="hidden rounded-full bg-primary px-6 py-2 text-sm font-semibold text-forest shadow-lg transition hover:bg-forest hover:text-cream md:block"
        >
          Découvrir
        </Link>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-forest/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-cream">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2 transition hover:bg-white/10 ${pathname === link.href ? 'bg-white/15 text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
