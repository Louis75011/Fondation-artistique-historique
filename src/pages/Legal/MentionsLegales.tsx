import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif">Mentions Légales</h1>
        <p className="text-muted font-light">En vigueur au 28 avril 2026</p>
      </section>

      <section className="space-y-6 text-muted font-light leading-relaxed">
        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Éditeur du site</h2>
          <p>
            Le site Fondation Vuillard Roussel est édité par la Fondation Vuillard Roussel, 
            sous l'égide de l'Institut de France.<br />
            Siège social : Palais de l'Institut de France, 23 Quai de Conti, 75006 Paris.<br />
            Email : contact@fondation-vuillard-roussel.fr
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Directeur de la publication</h2>
          <p>Louis Rouanet (Arx Systema)</p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Hébergement</h2>
          <p>
            Le site est hébergé par Google Cloud Run.<br />
            Localisation : Europe-West1 (Belgique).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
            les documents téléchargeables et les représentations iconographiques (ADAGP).
          </p>
        </div>
      </section>
    </div>
  );
}
