
import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export default function UNScandal() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-red-100">
          <AlertCircle size={14} />
          <span>Controverse Patrimoniale</span>
        </div>
        <h1 className="text-5xl font-serif">O.N.U. Genève</h1>
        <h2 className="text-2xl font-serif text-muted italic">
          Scandaleuse rénovation de la Grande Salle des Assemblées
        </h2>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 prose prose-serif prose-lg text-muted font-light leading-relaxed"
        >
          <p>
            En 1937, la France faisait don à l'humanité de "Symboles de PAIX", une œuvre monumentale 
            destinée au Palais des Nations à Genève.
          </p>
          <p>
            Cette œuvre, témoignage historique et artistique majeur, a fait l'objet d'une rénovation 
            qui, selon la Fondation, a altéré l'esprit et l'intégrité du don originel.
          </p>
          <p className="font-medium text-ink italic">
            "Une famille d'artistes spoliée, une œuvre déformée, un symbole de paix trahi."
          </p>
          <div className="pt-8">
            <button className="text-accent border-b border-accent pb-1 uppercase tracking-widest text-xs font-semibold hover:border-accent/40 transition-colors">
              Lire le dossier complet (PDF)
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square flex items-center justify-center bg-accent/5 rounded-full border border-accent/10 p-12"
        >
          <div className="text-center space-y-4">
             <div className="text-6xl mb-6">🕊️</div>
             <div className="w-48 h-1 bg-red-500/20 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-red-500"
                />
             </div>
             <p className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold mt-4">Alerte Patrimoine</p>
             <p className="text-4xl font-serif mt-2">1937 - 2022</p>
          </div>
          {/* Circular text element could go here */}
        </motion.div>
      </div>

      <section className="p-8 border-l-4 border-accent bg-accent/5">
        <blockquote className="text-2xl font-serif italic text-ink">
          "Donner la parole à l'histoire, c'est aussi savoir dénoncer l'oubli et le mépris des œuvres."
        </blockquote>
      </section>
    </div>
  );
}
