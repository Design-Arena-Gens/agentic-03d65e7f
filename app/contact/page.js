import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

const faqs = [
  {
    question: 'Livrez-vous en dehors de Forbach ? ',
    answer: 'Oui, nous desservons toute la Moselle-Est et réalisons des tournées hebdomadaires sur Metz et Sarrebruck.'
  },
  {
    question: 'Proposez-vous des kits de culture ? ',
    answer: 'Nous proposons des kits saisonniers livrés avec un guide et une assistance vidéo pour assurer la fructification à domicile.'
  },
  {
    question: 'Peut-on visiter la ferme ? ',
    answer: 'Les visites sont ouvertes sur réservation pour les groupes à partir de 6 personnes, et tous les mercredis après-midi pour les familles.'
  }
];

export const metadata = {
  title: 'Contact | Champisphère',
  description: 'Contactez la ferme Champisphère à Forbach pour vos commandes professionnelles, ateliers et demandes de partenariats.'
};

export default function ContactPage() {
  return (
    <div className="bg-cream pb-24 pt-28">
      <section className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <h1 className="font-heading text-4xl text-forest">Parlons champignons</h1>
          <p className="mx-auto mt-4 max-w-2xl text-forest/80">
            Besoin d’un devis pour votre restaurant, de réserver un atelier ou d’en savoir plus sur nos variétés ? Écrivez-nous, l’équipe Champisphère vous répond sous 24h ouvrées.
          </p>
        </header>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <ContactForm />
          <div className="space-y-8">
            <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-xl">
              <h2 className="font-heading text-2xl text-forest">Nous trouver</h2>
              <p className="mt-3 text-forest/80">
                21 Rue du Houblon
                <br />
                57600 Forbach, France
              </p>
              <p className="mt-3 text-forest/80">
                <span className="font-semibold">Téléphone :</span> +33 3 87 00 00 00
                <br />
                <span className="font-semibold">Email :</span> contact@champisphere.fr
              </p>
              <p className="mt-3 text-forest/80">
                Retrait sur place du mardi au samedi, 9h - 13h & 15h - 19h.
              </p>
            </div>
            <div id="faq" className="rounded-3xl border border-forest/10 bg-white p-6 shadow-xl">
              <h2 className="font-heading text-2xl text-forest">Questions fréquentes</h2>
              <div className="mt-4 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-forest/10 bg-cream/40 p-4">
                    <summary className="cursor-pointer font-semibold text-forest">{faq.question}</summary>
                    <p className="mt-2 text-sm text-forest/80">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-forest/10 shadow-xl">
          <iframe
            title="Champisphère sur Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10383.73671329157!2d6.9098577!3d49.1860467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47957e8e6be82411%3A0x408ab2ae4baeee0!2s57600%20Forbach!5e0!3m2!1sfr!2sfr!4v1708334200000!5m2!1sfr!2sfr"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
