
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Museum() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Le Musée</h1>
        <p className="text-xl font-serif text-muted italic">Musée de la Jacannette</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-square bg-accent/5 overflow-hidden group border border-accent/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=600" 
              alt="Intérieur du musée" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale"
            />
          </motion.div>
          <div className="prose prose-serif font-light text-muted leading-relaxed">
            <p>
              La création et l'entretien du musée de la Jacannette au sein de la Fondation est une priorité absolue. 
              C'est un lieu vivant, destiné non seulement à l'exposition des œuvres permanentes mais aussi 
              à l'accueil d'ateliers d'Art graphiques et plastiques.
            </p>
            <p>
              Le fonds de dotation, placé sous l'égide de l'Institut de France, finance la restauration continue 
              des œuvres et assure le bon fonctionnement de ce lieu de mémoire.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="p-8 border border-accent/20 bg-white space-y-8">
            <h3 className="text-2xl font-serif border-b border-accent/10 pb-4">Informations Pratiques</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted font-light">Musée de la Jacannette, France</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Calendar className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-medium">Ouverture</p>
                  <p className="text-muted font-light">Sur rendez-vous pour les chercheurs et donateurs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-medium">Horaires d'étude</p>
                  <p className="text-muted font-light">Lundi - Vendredi : 10h - 17h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ink text-paper p-8 space-y-6">
            <h4 className="text-xl font-serif">Mécénat & Soutien</h4>
            <p className="text-sm text-paper/70 font-light leading-relaxed">
              La construction et la pérennité du musée reposent sur le soutien généreux de nos mécènes. 
              Chaque don contribue directement à la préservation d'une œuvre spécifique ou à l'aménagement des ateliers.
            </p>
            <button className="w-full py-3 border border-paper/30 hover:bg-paper hover:text-ink transition-all uppercase tracking-widest text-xs font-bold">
              Faire un don
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
