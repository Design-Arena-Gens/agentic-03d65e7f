import Image from 'next/image';

const pillars = [
  {
    title: 'Bio-ingénierie douce',
    description: 'Contrôle climatique précis grâce à des capteurs open source pour recréer la fraîcheur des forêts lorraines.',
    icon: '🛰️'
  },
  {
    title: 'Économie circulaire',
    description: 'Marc de café et sciure collectés auprès d’artisans locaux, valorisés en substrats nutritifs.',
    icon: '♻️'
  },
  {
    title: 'Transformation locale',
    description: 'Séchoir basse température, laboratoire de découpes et emballages compostables sur place.',
    icon: '🏭'
  }
];

const ateliers = [
  {
    title: 'Atelier initiation myciculture',
    description: '2h pour comprendre les cycles de culture et repartir avec un kit prêt à fructifier.',
    slots: 'Tous les samedis à 10h, groupes de 12 personnes',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Visite immersive des serres',
    description: 'Parcours sensoriel guidé dans nos chambres de fructification, focus sur le contrôle hygrométrique.',
    slots: 'Sur rendez-vous pour écoles, entreprises et restaurateurs',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80'
  }
];

export const metadata = {
  title: 'La Ferme | Champisphère',
  description:
    'Découvrez la ferme Champisphère à Forbach : production de champignons circulaire, ateliers pédagogiques et technologies de culture avancées.'
};

export default function FermePage() {
  return (
    <div className="bg-cream pb-24 pt-28">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h1 className="font-heading text-4xl text-forest">La ferme urbaine Champisphère</h1>
            <p className="mt-4 text-forest/80">
              Implantée au cœur de Forbach, notre ferme réinvente la culture des champignons en milieu urbain. Nous utilisons des chambres de fructification modulaires, alimentées par une énergie 100% verte, et pilotées par un système intelligent qui ajuste lumière, humidité et flux d’air en continu.
            </p>
            <p className="mt-4 text-forest/80">
              Nous travaillons en cycle court : substrats compostés après récolte, irrigation par récupération des eaux de pluie, et partenariats avec les cafés et brasseries voisins pour valoriser leurs résidus.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1400&q=80"
                alt="Ferme Champisphère"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title font-heading text-3xl text-forest md:text-4xl">Notre méthode</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-glass border border-forest/10 p-8 text-left shadow-lg">
                <span className="text-4xl">{pillar.icon}</span>
                <h3 className="mt-4 font-heading text-2xl text-forest">{pillar.title}</h3>
                <p className="mt-3 text-forest/80">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="ateliers" className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title font-heading text-3xl text-forest md:text-4xl">Ateliers & visites</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {ateliers.map((atelier) => (
              <article key={atelier.title} className="overflow-hidden rounded-3xl border border-forest/10 bg-cream/60 shadow-xl">
                <div className="relative h-64">
                  <Image src={atelier.image} alt={atelier.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="font-heading text-2xl text-forest">{atelier.title}</h3>
                  <p className="text-forest/80">{atelier.description}</p>
                  <p className="text-sm text-forest/70">{atelier.slots}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-forest text-cream">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">Innovation respectueuse</h2>
          <p className="mt-4 text-cream/80">
            Nous collaborons avec des laboratoires universitaires pour analyser les profils nutritifs de nos champignons et optimiser nos substrats. Nos données sont ouvertes aux partenaires souhaitant développer des produits fonctionnels à base de champignons.
          </p>
        </div>
      </section>
    </div>
  );
}
