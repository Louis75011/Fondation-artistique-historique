
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ARTISTS } from '../constants';
import { ChevronLeft, ExternalLink } from 'lucide-react';

export default function ArtistDetail() {
  const { id } = useParams();
  const artist = ARTISTS.find(a => a.id === id);

  if (!artist) return <div className="text-center py-20 font-serif">Artiste non trouvé.</div>;

  const works = [
    { title: "Dessin", img: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=400" },
    { title: "Peinture", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400" },
    { title: "Gravure", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400" },
    { title: "Céramique", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="space-y-16">
      <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
        <ChevronLeft size={16} />
        <span>Retour à l'accueil</span>
      </Link>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
           <h1 className="text-6xl font-serif">{artist.name}</h1>
           <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">{artist.role}</p>
           <div className="prose prose-serif font-light text-muted leading-relaxed">
              <p>{artist.bio}</p>
              <p>
                L'œuvre de {artist.name} est au cœur des recherches de la Fondation. 
                Chaque pièce fait l'objet d'un examen attentif pour intégrer le Catalogue Raisonné.
              </p>
           </div>
           <div className="pt-8">
              <button className="flex items-center gap-2 px-8 py-4 border border-ink text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-all">
                <span>Voir le catalogue</span>
                <ExternalLink size={14} />
              </button>
           </div>
        </div>
        <div className="aspect-[3/4] bg-accent/5 overflow-hidden">
           <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale" />
        </div>
      </section>

      <section className="pt-20 border-t border-accent/10">
        <h2 className="text-3xl font-serif mb-12 italic">Exploration des Médiums</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {works.map((work, idx) => (
            <div key={idx} className="space-y-4 group cursor-pointer">
              <div className="aspect-[3/4] bg-paper overflow-hidden">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs uppercase tracking-widest text-center">{work.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
