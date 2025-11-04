import './globals.css';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'Champisphère | Ferme de Champignons à Forbach',
  description:
    'Champisphère cultive des champignons gourmets et médicinaux à Forbach. Découvrez nos pleurotes, hérisson, pleurotes royaux et jaunes, cultivés de manière durable.',
  metadataBase: new URL('https://agentic-03d65e7f.vercel.app'),
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-cream text-forest antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
