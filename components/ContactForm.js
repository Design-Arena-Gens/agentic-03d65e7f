'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Merci ! Nous revenons vers vous très vite.');
    setFormState({ nom: '', email: '', sujet: '', message: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-forest/10 bg-white p-8 shadow-xl">
      <div>
        <label className="text-sm font-semibold text-forest" htmlFor="nom">
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          required
          value={formState.nom}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 text-forest outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-forest" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 text-forest outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-forest" htmlFor="sujet">
          Sujet
        </label>
        <input
          id="sujet"
          name="sujet"
          type="text"
          value={formState.sujet}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 text-forest outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-forest" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formState.message}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 text-forest outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <button type="submit" className="w-full rounded-full bg-primary py-3 font-semibold text-forest transition hover:bg-forest hover:text-cream">
        Envoyer le message
      </button>
      {status && <p className="text-center text-sm text-primary">{status}</p>}
    </form>
  );
}
