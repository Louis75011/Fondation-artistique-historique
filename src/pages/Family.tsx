
import React from 'react';
import { motion } from 'motion/react';

export default function Family() {
  const members = [
    { name: "Olivier Roussel", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Marie Roussel", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
    { name: "Herbert du Plessis", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
    { name: "Lina Castellanza", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Une famille d'artistes</h1>
        <p className="text-xl font-serif text-muted italic">300 ans d'histoire médicale, militaire et artistique.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="aspect-video overflow-hidden bg-accent/5">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
              alt="Maison de famille" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-serif prose-lg max-w-none text-muted font-light leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-accent">
              "Je tenais de mon oncle (Xavier Roussel, nous dit Olivier Roussel) que l'oncle Alexandre 
              (le frère d'Edouard Vuillard) avait établi un arbre généalogique : un bourgmestre vers 1650, 
              un général d'Empire, une famille de médecin."
            </p>
            <p>
              Ce document ayant disparu, j'ai cherché à le reconstituer et à l'élargir. En ce qui concerne 
              la lignée Roussel, le foyer familial n'est pas Lorry les Metz, mais Gelvécourt et Adompt dans les Vosges.
            </p>
            <p>
              Les Roussel couvrent 150 ans d'histoire de l'art en ligne directe et avec les lignées latérales, 
              300 ans d'histoire de la médecine, et ponctuellement, de l'histoire militaire.
            </p>
          </div>
        </div>

        <aside className="space-y-8">
          <h3 className="text-sm uppercase tracking-[0.2em] text-accent border-b border-accent/20 pb-4 font-bold">Membres de la lignée</h3>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            {members.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-paper border border-accent/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <p className="text-sm font-serif font-medium group-hover:text-accent transition-colors">{member.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </aside>
      </div>

      <section className="border-t border-accent/10 pt-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif">Arbre Généalogique</h2>
          <p className="text-muted font-light">
            Une structure interactive de la famille Roussel-Vuillard est en cours de numérisation 
            pour permettre de retracer les liens étroits entre ces dynasties d'artistes.
          </p>
          <div className="py-12 flex justify-center">
             <div className="w-px h-24 bg-accent/20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
