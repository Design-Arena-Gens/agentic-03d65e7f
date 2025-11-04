'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80',
    alt: 'Pleurotes frais'
  },
  {
    src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=1400&q=80',
    alt: 'Champignon crinière de lion'
  },
  {
    src: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1400&q=80',
    alt: 'Pleurotes royaux'
  }
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  return (
    <section className="hero relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <Image
          src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1600&q=80"
          alt="Cultures de champignons"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <span className="rounded-full bg-primary/20 px-4 py-2 text-sm uppercase tracking-[0.4em]">
          Ferme urbaine à Forbach
        </span>
        <h1 className="text-shadow font-heading text-4xl leading-tight md:text-6xl">
          Champisphère, la maison des champignons d&apos;exception
        </h1>
        <p className="max-w-2xl text-lg text-cream/90 md:text-xl">
          Pleurotes, crinière de lion, pleurotes royaux et jaunes, cultivés avec soin dans un écosystème circulaire et durable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/mushrooms"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-forest shadow-xl transition hover:bg-white hover:text-forest"
          >
            Découvrez Nos Champignons
          </Link>
          <Link
            href="/ferme"
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Notre philosophie
          </Link>
        </div>
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {heroImages.map((image) => (
            <div key={image.src} className="card-glass group relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={460}
                height={300}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-lg">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
