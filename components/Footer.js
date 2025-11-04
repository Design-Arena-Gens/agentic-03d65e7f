import Link from 'next/link';

const footerLinks = [
  {
    title: 'Explorer',
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Nos Champignons', href: '/mushrooms' },
      { label: 'La Ferme', href: '/ferme' }
    ]
  },
  {
    title: 'Ressources',
    items: [
      { label: 'Ateliers & Visites', href: '/ferme#ateliers' },
      { label: 'Recettes', href: '/mushrooms#recettes' },
      { label: 'FAQ', href: '/contact#faq' }
    ]
  },
  {
    title: 'Contact',
    items: [
      { label: 'contact@champisphere.fr', href: 'mailto:contact@champisphere.fr' },
      { label: '+33 3 87 00 00 00', href: 'tel:+33387000000' },
      { label: '21 Rue du Houblon, 57600 Forbach', href: 'https://maps.app.goo.gl/randonnee' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary/80 p-3 text-2xl">🍄</span>
            <p className="font-heading text-2xl">Champisphère</p>
          </div>
          <p className="text-sm text-cream/80">
            Ferme urbaine consciente, Champisphère cultive des champignons gourmets sur substrats recyclés pour offrir des produits locaux et durables aux gourmands de la région Grand Est.
          </p>
        </div>
        {footerLinks.map((block) => (
          <div key={block.title} className="md:col-span-2">
            <h3 className="font-heading text-lg">{block.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              {block.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Champisphère. Tous droits réservés.
      </div>
    </footer>
  );
}
