
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ARTISTS } from '../constants';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4">La Fondation</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">
            Honorer, défendre et <br />
            <span className="italic">propager l'œuvre</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-xl font-serif text-muted leading-relaxed"
        >
          La Fondation Vuillard Roussel a pour objet d'honorer, de défendre et de propager l'œuvre, 
          l'image et l'esprit des peintres Edouard Vuillard, Ker-Xavier Roussel et Pierre Roussel.
        </motion.p>
      </section>

      {/* Artists grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {ARTISTS.map((artist, idx) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
          >
            <Link to={`/artist/${artist.id}`} className="group block">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-accent/5">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
              </div>
              <h3 className="text-2xl font-serif mb-1">{artist.name}</h3>
              <p className="text-xs uppercase tracking-widest text-accent mb-3">{artist.role}</p>
              <p className="text-sm text-muted leading-relaxed line-clamp-3 font-light">
                {artist.bio}
              </p>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Philosophy Section */}
      <section className="bg-accent/5 -mx-6 px-6 py-20 md:-mx-20 md:px-20 border-y border-accent/10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-serif">Une mission de pérennité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-accent">Conservation</h4>
              <p className="text-sm text-muted leading-relaxed">
                Appel au mécénat privé, particulier ou d'entreprises, pour constituer un fond de dotation placé 
                sous l'égide de l'Institut de France, servant à restaurer et conserver les œuvres.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-accent">Rayonnement</h4>
              <p className="text-sm text-muted leading-relaxed">
                Faire vivre les œuvres à la faveur d'expositions officielles, publications internet, reproductions 
                en fac-similé et d'une manière générale sur tous supports.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-accent">Authentification</h4>
              <p className="text-sm text-muted leading-relaxed">
                Rechercher les toiles, les dessins dont on a perdu la trace, expertiser et authentifier les œuvres retrouvées.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-accent">Archives</h4>
              <p className="text-sm text-muted leading-relaxed">
                Réunir en un même lieu les archives afin de les conserver et de les rendre accessibles aux chercheurs 
                du monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
