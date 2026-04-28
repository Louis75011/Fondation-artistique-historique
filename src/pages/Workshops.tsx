
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Workshops() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Les Ateliers</h1>
        <p className="text-xl font-serif text-muted italic">"La Bête à Cornes" - Lieux de création</p>
      </section>

      <div className="relative aspect-video bg-ink overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200" 
          alt="Atelier de gravure" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="p-6 bg-paper/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:scale-110 transition-transform">
                <Play size={40} fill="currentColor" />
            </button>
        </div>
        <div className="absolute bottom-6 left-6 text-white">
           <p className="text-xs uppercase tracking-[0.3em] font-bold">Vidéo : Atelier de Gravure</p>
           <p className="text-sm font-light text-paper/70">Bois - Cuivre - Lithographie (1:01)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <h2 className="text-3xl font-serif">Historique des Ateliers</h2>
          <div className="prose prose-serif prose-lg text-muted font-light leading-relaxed space-y-6">
             <p>
                Au début de leur carrière, Ker Xavier Roussel et Edouard Vuillard ont partagé des ateliers 
                avec d'autres artistes (Maillard et autres retrouver lesquels).
             </p>
             <p>
                Edouard Vuillard habitait Paris avec sa mère. Son atelier était une pièce dans son appartement. 
                La Fondation conserve un buffet classeur de feuilles et deux chaises de la salle à manger.
             </p>
             <p>
                En 1898, Ker Xavier Roussel s'installe à l'Etang la Ville. Je me souviens avoir visité cette maison 
                avec mon père, c'était dans les années 67 ou 72, j'ai gardé le souvenir d'une maison avec double 
                mezzanine qui m'a toujours fait penser à la maison natale de Léonard de Vinci en Italie.
             </p>
          </div>
        </div>

        <div className="space-y-8 p-10 bg-accent/5 border border-accent/10">
           <h3 className="text-xl font-serif border-b border-accent/20 pb-4">Chronologie des lieux</h3>
           <div className="space-y-8">
              <div className="relative pl-8 border-l border-accent/30">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
                 <p className="text-xs uppercase tracking-widest text-accent mb-1">1907 - L'Etang la Ville</p>
                 <p className="text-sm font-light text-muted">Construction de la maison-atelier sur le coteau d'en face, les sablons.</p>
              </div>
              <div className="relative pl-8 border-l border-accent/30">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
                 <p className="text-xs uppercase tracking-widest text-accent mb-1">1949 - Paris, Rue Vignon</p>
                 <p className="text-sm font-light text-muted">Pierre Roussel installe son atelier dans un grand appartement au 4ème étage.</p>
              </div>
              <div className="relative pl-8 border-l border-accent/30">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
                 <p className="text-xs uppercase tracking-widest text-accent mb-1">1987 - Péniche des Arts</p>
                 <p className="text-sm font-light text-muted">Olivier Roussel installe l'Atelier les Presses à Bras sur une péniche amarrée Pont de Grenelle.</p>
              </div>
              <div className="relative pl-8 border-l border-accent/30">
                 <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
                 <p className="text-xs uppercase tracking-widest text-accent mb-1">1996 - Musée Vivant</p>
                 <p className="text-sm font-light text-muted">Transformation de la maison familiale en ateliers et musée vivant.</p>
              </div>
           </div>
        </div>
      </div>

      <div className="text-center pt-12">
         <p className="text-2xl font-serif italic text-accent">
            "Les ateliers contribuent à faire du musée non pas un mausolée mais un musée vivant."
         </p>
      </div>
    </div>
  );
}
