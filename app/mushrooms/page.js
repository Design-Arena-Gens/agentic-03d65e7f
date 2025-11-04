import Image from 'next/image';
import Link from 'next/link';

const mushrooms = [
  {
    id: 'pleurote-gris',
    name: 'Pleurote Gris',
    latin: 'Pleurotus ostreatus',
    profile: 'Texture satinée, parfum bois de hêtre, cuisson rapide.',
    pairings: ['Tagliatelles fraîches', 'Poêlées de légumes racines', 'Ramen fumés'],
    nutrition: 'Riches en vitamines B, protéines végétales et antioxydants.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'criniere-lion',
    name: 'Crinière de Lion',
    latin: 'Hericium erinaceus',
    profile: 'Chair filandreuse rappelant le homard, parfums iodés.',
    pairings: ['Beurre noisette', 'Citron confit', 'Sauce miso blanc'],
    nutrition: 'Bêta-glucanes, hericenones et erinacines favorisant la vitalité neuronale.',
    image: 'https://images.unsplash.com/photo-1608038509085-7bb3af6ef993?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pleurote-royal',
    name: 'Pleurote Royal',
    latin: 'Pleurotus eryngii',
    profile: 'Tige charnue, saveur umami intense, caramélisation parfaite.',
    pairings: ['Grillades yakitori', 'Purée panais', 'Sauces réduites'],
    nutrition: 'Fibres insolubles et minéraux essentiels (potassium, phosphore).',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pleurote-jaune',
    name: 'Pleurote Jaune',
    latin: 'Pleurotus citrinopileatus',
    profile: 'Notes florales, texture délicate, idéal en cuisson douce.',
    pairings: ['Pizza blanche', 'Risotto citron', 'Tartes salées'],
    nutrition: 'Faible en calories, riche en cuivre et sélénium.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
  }
];

const recipes = [
  {
    title: 'Pleurotes rôtis au beurre fumé',
    mushroom: 'Pleurote Royal',
    time: '25 minutes',
    difficulty: 'Intermédiaire',
    steps: ['Saisir les pleurotes 2 min par face', 'Déglacer au vin jaune', 'Napper d\'un beurre fumé et persil plat'],
    image: 'https://images.unsplash.com/photo-1528838062815-00e5e6ac6c41?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Bouillon immunité à la crinière de lion',
    mushroom: 'Crinière de Lion',
    time: '40 minutes',
    difficulty: 'Facile',
    steps: ['Infuser les champignons dans un dashi maison', 'Ajouter gingembre et citronnelle', 'Filtrer et servir avec soba'],
    image: 'https://images.unsplash.com/photo-1485921325833-2718e7f5d1c1?auto=format&fit=crop&w=1000&q=80'
  }
];

export const metadata = {
  title: 'Nos Champignons | Champisphère',
  description:
    'Découvrir les champignons cultivés par Champisphère : pleurotes gris, royaux, crinière de lion et variétés jaunes, leurs profils aromatiques et inspirations culinaires.'
};

export default function MushroomsPage() {
  return (
    <div className="bg-cream pb-24 pt-28">
      <section className="mx-auto max-w-6xl px-6">
        <header className="text-center">
          <h1 className="font-heading text-4xl text-forest">Nos champignons gourmets</h1>
          <p className="mx-auto mt-4 max-w-3xl text-forest/80">
            Chaque variété est cultivée lentement dans nos serres climatiques à Forbach afin de révéler son potentiel aromatique. Tracker lot par lot disponible sur demande pour les chefs et transformateurs.
          </p>
        </header>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {mushrooms.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-64">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <span className="text-sm uppercase tracking-[0.4em] text-primary">{item.latin}</span>
                  <h2 className="font-heading text-2xl text-forest">{item.name}</h2>
                </div>
                <p className="text-forest/80">{item.profile}</p>
                <div>
                  <h3 className="font-heading text-lg text-forest">Accords</h3>
                  <ul className="mt-2 flex flex-wrap gap-2 text-sm text-forest/80">
                    {item.pairings.map((pairing) => (
                      <li key={pairing} className="rounded-full bg-primary/20 px-3 py-1 text-forest">
                        {pairing}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-forest/70">{item.nutrition}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="recettes" className="mt-24 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-heading text-3xl text-forest">Recettes signatures</h2>
              <p className="mt-3 max-w-xl text-forest/80">
                Conçues avec nos chefs partenaires, ces recettes mettent en lumière la texture unique et la richesse nutritionnelle de nos champignons.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
            >
              Demander la fiche technique
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {recipes.map((recipe) => (
              <article key={recipe.title} className="rounded-3xl border border-forest/10 bg-cream/60 p-6 shadow-lg">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-xl text-forest">{recipe.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary">{recipe.mushroom}</p>
                  <ul className="mt-4 flex flex-wrap gap-4 text-sm text-forest/80">
                    <li><span className="font-semibold text-forest">Temps :</span> {recipe.time}</li>
                    <li><span className="font-semibold text-forest">Niveau :</span> {recipe.difficulty}</li>
                  </ul>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-forest/80">
                    {recipe.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
