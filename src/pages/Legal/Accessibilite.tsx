import React from 'react';

export default function Accessibilite() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif">Déclaration d'accessibilité</h1>
        <p className="text-muted font-light">Conformité RGAA</p>
      </section>

      <section className="space-y-6 text-muted font-light leading-relaxed">
        <div>
          <h2 className="text-xl font-serif text-ink mb-2">État de conformité</h2>
          <p>
            La Fondation Vuillard Roussel s'engage à rendre ses sites internet accessibles conformément 
            à l'article 47 de la loi n° 2005-102 du 11 février 2005.
          </p>
          <p className="mt-2 text-accent font-medium italic">
            Le site est actuellement en cours d'audit de conformité RGAA 4.1.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Technologies utilisées</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>HTML5 / CSS3 (Tailwind)</li>
            <li>React JS</li>
            <li>WAI-ARIA</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Retour d'information</h2>
          <p>
            Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter 
            le responsable de l'accessibilité pour être orienté vers une alternative durable ou 
            obtenir le contenu sous une autre forme : contact@fondation-vuillard-roussel.fr
          </p>
        </div>
      </section>
    </div>
  );
}
