
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Layers } from 'lucide-react';
import { ARTISTS } from '../constants';

export default function Catalogues() {
  const artists = [
    { name: "Ker-Xavier Roussel", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=200", status: "En cours" },
    { name: "Edouard Vuillard", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=200", status: "Publié" },
    { name: "Pierre Roussel", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=200", status: "À paraître" }
  ];

  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Les Catalogues Raisonnés</h1>
        <p className="text-xl font-serif text-muted max-w-2xl leading-relaxed">
          Une base de données participative et multimédia regroupant l'intégralité des œuvres 
          cataloguées de la lignée Vuillard-Roussel.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artists.map((artist, idx) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[400px] overflow-hidden bg-ink"
          >
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 font-bold">{artist.status}</span>
              <h3 className="text-3xl font-serif mb-4 leading-tight">{artist.name}</h3>
              <Link 
                to={`/catalogue/${ARTISTS.find(a => a.name === artist.name)?.id}`}
                className="text-xs uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-ink transition-all inline-block text-center"
              >
                Consulter
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12 border-t border-accent/10">
        <div className="space-y-6 prose prose-serif text-muted font-light leading-relaxed">
          <p>
            Ker Xavier Roussel et son épouse, Marie Vuillard, soeur d'Edouard Vuillard, ont hérité 
            de leur frère et beau-frère Edouard Vuillard. Ils ont fait don à l'Etat Français de 55 tableaux 
            qui se trouvent aujourd'hui dispersés dans les Musées Nationaux.
          </p>
          <p>
            Les carnets de Vuillard ont été donnés à l'Institut de France. Ces carnets, longtemps gardés secret, 
            sont désormais publics.
          </p>
          <p>
            Certaines photos ont été vendues ou données à des collectionneurs ou à des Musées. Antoine Salomon, 
            fils de Jacques, puis Nicolas Langlois, neveu d'Antoine, sont actuellement dépositaires de ce fond d'archives.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex gap-6 items-start">
             <div className="p-4 bg-accent/5 rounded-2xl text-accent"><BookOpen size={32} strokeWidth={1} /></div>
             <div>
                <h4 className="font-serif text-xl mb-2">Base interactive</h4>
                <p className="text-sm text-muted font-light">Accès aux collectionneurs, galeries d'art et musées dans un environnement sécurisé.</p>
             </div>
          </div>
          <div className="flex gap-6 items-start">
             <div className="p-4 bg-accent/5 rounded-2xl text-accent"><Search size={32} strokeWidth={1} /></div>
             <div>
                <h4 className="font-serif text-xl mb-2">Recherche Multicritères</h4>
                <p className="text-sm text-muted font-light">Outils avancés pour identifier et documenter les œuvres retrouvées.</p>
             </div>
          </div>
          <div className="flex gap-6 items-start">
             <div className="p-4 bg-accent/5 rounded-2xl text-accent"><Layers size={32} strokeWidth={1} /></div>
             <div>
                <h4 className="font-serif text-xl mb-2">Fonds documentaire</h4>
                <p className="text-sm text-muted font-light">Regroupement des archives Salomon et Langlois.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
