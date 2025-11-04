import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

const mushroomHighlights = [
  {
    name: 'Pleurote Gris',
    description: 'Texture fondante, notes boisées. Idéal pour les poêlées et les ramen.',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Crinière de Lion',
    description: 'Champignon fonctionnel et culinaire, goût délicat de homard.',
    image: 'https://images.unsplash.com/photo-1608038509085-7bb3af6ef993?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Pleurote Royal',
    description: 'Tige charnue, parfait en rôti ou grillé, alternative aux protéines animales.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Pleurote Jaune',
    description: 'Arôme floral, excellente garniture pour pizzas et tartes salées.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'
  }
];

const timeline = [
  {
    year: '2018',
    title: 'Naissance du projet',
    description:
      'Inspirés par les forêts mosellanes, nous transformons un ancien entrepôt en ferme urbaine circulaire.'
  },
  {
    year: '2020',
    title: 'Certification bio locale',
    description:
      'Nos substrats sont réalisés à partir de marc de café local et de sciures certifiées PEFC.'
  },
  {
    year: '2022',
    title: 'Ateliers & visites',
    description:
      'Ouverture de notre espace d’apprentissage pour initier familles et chefs à la myciculture.'
  },
  {
    year: '2024',
    title: 'Champisphère Lab',
    description:
      'Lancement d’une gamme d’extraits fonctionnels enrichis en bêta-glucanes.'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="section-title font-heading text-3xl text-forest md:text-4xl">Nos engagements</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-forest/80 md:text-lg">
            Champisphère associe savoir-faire artisanal et innovation agritech pour offrir des champignons ultra-frais, cultivés sans pesticides et livrés en moins de 24h dans la région de Forbach.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[{
              title: 'Agriculture circulaire',
              description: 'Réemploi du marc de café et des co-produits agricoles locaux pour des substrats riches en nutriments.'
            },
            {
              title: 'Qualité gastronomique',
              description: 'Sélection de souches premium pour des saveurs franches plébiscitées par les chefs étoilés.'
            },
            {
              title: 'Impact positif',
              description: 'Monitoring énergétique et humidité assistés par IA pour minimiser notre empreinte carbone.'
            }].map((item) => (
              <div key={item.title} className="card-glass border border-forest/10 p-8 text-left shadow-xl">
                <h3 className="font-heading text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-forest/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="section-title font-heading text-3xl text-forest md:text-4xl">Cultures vivantes</h2>
              <p className="mt-4 text-forest/80">
                Notre ferme verticale à Forbach optimise lumière, humidité et circulation de l’air pour reproduire l’écosystème forestier. Chaque lot est récolté à maturité optimale et directement conditionné dans des emballages compostables.
              </p>
              <Link
                href="/ferme"
                className="mt-6 inline-flex items-center rounded-full border border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest hover:text-cream"
              >
                Plongez dans nos serres
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {mushroomHighlights.map((item) => (
                  <figure key={item.name} className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={520}
                      height={340}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent p-4 text-cream">
                      <h3 className="font-heading text-lg">{item.name}</h3>
                      <p className="text-sm text-cream/80">{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-texture-leaves bg-fixed bg-cover bg-center">
        <div className="gradient-overlay"></div>
        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="section-title font-heading text-3xl md:text-4xl">Chefs & artisans partenaires</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Des tables bistronomiques de Metz aux coffee-shops engagés de Sarrebruck, Champisphère co-crée des cartes innovantes avec des chefs passionnés de naturalité.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[{
              quote: '“Les pleurotes royaux de Champisphère se caramélisent à la perfection, une texture digne d’une Saint-Jacques.”',
              author: 'Chef Élodie R., Restaurant Lisière'
            }, {
              quote: '“Une traçabilité exemplaire et une fraîcheur inégalable pour notre menu végétal.”',
              author: 'Chef Pascal D., Maison des Saveurs'
            }, {
              quote: '“Leur crinière de lion booste nos boissons fonctionnelles, nos clients adorent.”',
              author: 'Atelier Kombucha Forbach'
            }].map((testimony) => (
              <blockquote key={testimony.author} className="card-glass h-full bg-white/10 p-6 text-left">
                <p className="text-sm text-white/90">{testimony.quote}</p>
                <footer className="mt-4 font-heading text-white">{testimony.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="section-title font-heading text-3xl text-forest md:text-4xl">Notre chronologie</h2>
          <div className="mt-12 space-y-6">
            {timeline.map((event) => (
              <div key={event.year} className="flex flex-col gap-4 rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-lg backdrop-blur-lg md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-primary px-4 py-2 font-heading text-lg text-forest">{event.year}</span>
                  <h3 className="font-heading text-xl text-forest">{event.title}</h3>
                </div>
                <p className="max-w-2xl text-forest/80">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-forest text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Prêt à cuisiner des champignons d&apos;élite ?</h2>
            <p className="mt-3 max-w-xl text-cream/80">
              Passez commande avant midi pour une livraison le lendemain dans le bassin houiller. Solutions sur mesure pour restaurateurs, artisans, et particuliers.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-8 py-3 text-center font-semibold text-forest transition hover:bg-white"
            >
              Contacter la ferme
            </Link>
            <a
              href="tel:+33387000000"
              className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              +33 3 87 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
