import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif">Politique de Confidentialité</h1>
        <p className="text-muted font-light">Conformité RGPD - Dernière mise à jour : 28/04/2026</p>
      </section>

      <section className="space-y-6 text-muted font-light leading-relaxed">
        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Collecte des données</h2>
          <p>
            La Fondation Vuillard Roussel s'engage à ce que la collecte et le traitement de vos données, 
            effectués à partir du site, soient conformes au règlement général sur la protection des données (RGPD).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Utilisation des formulaires</h2>
          <p>
            Les données collectées via le formulaire de contact (Nom, Email, Message) ne sont utilisées 
            qu'à des fins de réponse à vos sollicitations. Elles sont conservées pour une durée maximale 
            de 3 ans après le dernier échange.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie de traçage publicitaire ou de services tiers intrusifs. 
            Seuls des cookies techniques essentiels au fonctionnement de l'application peuvent être déposés.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-serif text-ink mb-2">Vos droits</h2>
          <p>
            Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès 
            aux données vous concernant et les faire rectifier ou supprimer en nous contactant à : 
            contact@fondation-vuillard-roussel.fr
          </p>
        </div>
      </section>
    </div>
  );
}
