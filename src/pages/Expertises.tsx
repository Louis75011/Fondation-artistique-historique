
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Search, FileText, FlaskConical } from 'lucide-react';

export default function Expertises() {
  const steps = [
    {
      id: "01",
      icon: <Search className="text-accent" />,
      title: "Analyse historique",
      desc: "Recherche de l'historique de l'œuvre : provenance, expositions, catalogues de vente, publications, etc."
    },
    {
      id: "02",
      icon: <FileText className="text-accent" />,
      title: "Analyse iconographique",
      desc: "Le thème de l'œuvre (analyse par comparaison à l'esprit de l'artiste), le style et le sujet."
    },
    {
      id: "03",
      icon: <Shield className="text-accent" />,
      title: "Analyse par observation",
      desc: "La technique (crayon, pastel, aquarelle, tempera, huile...), la touche et la signature."
    },
    {
      id: "04",
      icon: <FlaskConical className="text-accent" />,
      title: "Analyse en laboratoire",
      desc: "Analyse chimique des matériaux (matière, pigments, support) et analyse spectrale et moléculaire."
    }
  ];

  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Certificats & Expertises</h1>
        <p className="text-xl font-serif text-muted max-w-2xl">
          La Fondation propose une expertise rigoureuse pour l'authentification des œuvres de Vuillard et des Roussel.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="p-8 border border-accent/10 bg-white shadow-sm hover:border-accent/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-paper rounded-full">
                {step.icon}
              </div>
              <span className="text-4xl font-serif text-accent/20 italic">{step.id}</span>
            </div>
            <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
            <p className="text-muted leading-relaxed font-light">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <section className="bg-ink text-paper -mx-6 px-6 py-20 md:-mx-20 md:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif">Soumettre une œuvre</h2>
          <p className="text-paper/70 font-light leading-relaxed">
            Merci de vous connecter pour nous envoyer votre demande accompagnée des photos de l'oeuvre, 
            du dos de l'oeuvre avec les éventuelles étiquettes et annotations, et d'un gros plan sur la signature.
          </p>
          <button className="px-12 py-4 bg-accent text-white font-serif tracking-widest uppercase text-sm hover:bg-accent/80 transition-colors">
            Cliquer ici pour vous connecter
          </button>
        </div>
      </section>
    </div>
  );
}
