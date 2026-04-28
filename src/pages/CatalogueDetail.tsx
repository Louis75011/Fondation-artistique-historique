import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ARTISTS } from '../constants';
import { ChevronLeft } from 'lucide-react';

export default function CatalogueDetail() {
  const { id } = useParams();
  const artist = ARTISTS.find(a => a.id === id);

  if (!artist) return <div className="text-center py-20 font-serif">Catalogue non trouvé.</div>;

  const categories = [
    { title: "Dessin", img: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=600", desc: "Le trait, la spontanéité, l'ébauche du génie." },
    { title: "Peinture", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600", desc: "La couleur et la matière au service de l'émotion." },
    { title: "Gravure", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600", desc: "La multiplicité de l'œuvre originale." },
    { title: artist.id === 'pierre-roussel' ? "Sculpture" : "Céramique", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600", desc: "Le volume et la forme tangible." }
  ];

  const subLinks = [
    "Du Mythe à la Mythologie",
    "Biographie",
    "Bibliographie",
    "Expositions",
    "Toutes les œuvres",
    "Vidéos",
    "Mieux comprendre " + artist.name.split(' ').pop(),
    "Recherche œuvres"
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Main Content Area */}
      <div className="flex-1 space-y-12">
        <header className="flex justify-between items-start">
          <Link to="/catalogues" className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
            <ChevronLeft size={14} />
            <span>Retour aux catalogues</span>
          </Link>
        </header>

        <h1 className="text-6xl font-serif">{artist.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4 group"
            >
              <div className="aspect-[3/4] bg-accent/5 overflow-hidden border border-accent/10">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif">{cat.title}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar for "Old Style" feel */}
      <aside className="w-full lg:w-72 space-y-12 pt-16">
        <div className="p-8 border border-accent/20 bg-white/50 backdrop-blur-sm space-y-8">
           <div className="text-center space-y-2 border-b border-accent/10 pb-6">
              <div className="w-12 h-12 mx-auto grayscale opacity-50 mb-4">
                 <img src={artist.image} alt={artist.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-accent">Les Catalogues Raisonnés</h4>
           </div>

           <nav className="flex flex-col gap-4 text-center">
              {subLinks.map((link) => (
                <button 
                  key={link}
                  className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors font-medium border-b border-transparent hover:border-accent/30 pb-1"
                >
                  {link}
                </button>
              ))}
           </nav>
        </div>

        <div className="p-8 bg-ink text-paper text-center space-y-4">
           <p className="text-[10px] uppercase tracking-widest opacity-60">Consultation Archivistique</p>
           <button className="w-full py-3 border border-paper/20 text-xs uppercase tracking-widest hover:bg-paper hover:text-ink transition-all">
              Accès Privilégié
           </button>
        </div>
      </aside>
    </div>
  );
}
