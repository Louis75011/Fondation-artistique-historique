
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">Contact</h1>
        <p className="text-xl font-serif text-muted">Pour toute demande d'information, d'expertise ou de mécénat.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-accent font-bold">Nom</label>
                <input type="text" className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors font-light" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-accent font-bold">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors font-light" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-accent font-bold">Sujet</label>
              <select className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors font-light appearance-none">
                <option>Demande d'expertise</option>
                <option>Mécénat / Don</option>
                <option>Recherche documentaire</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-accent font-bold">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors font-light resize-none" placeholder="Votre message..."></textarea>
            </div>
            <button className="flex items-center gap-3 px-10 py-4 bg-ink text-paper font-serif uppercase tracking-widest text-sm hover:bg-accent transition-colors group">
              <span>Envoyer</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="space-y-12 py-4">
           <div className="flex gap-6 items-start">
              <div className="p-4 bg-accent/5 rounded-2xl text-accent"><Mail size={24} strokeWidth={1} /></div>
              <div>
                 <h4 className="font-serif text-xl mb-1">Email</h4>
                 <p className="text-sm text-muted font-light">contact@fondation-vuillard-roussel.fr</p>
              </div>
           </div>
           <div className="flex gap-6 items-start">
              <div className="p-4 bg-accent/5 rounded-2xl text-accent"><Phone size={24} strokeWidth={1} /></div>
              <div>
                 <h4 className="font-serif text-xl mb-1">Téléphone</h4>
                 <p className="text-sm text-muted font-light">+33 (0)1 00 00 00 00</p>
              </div>
           </div>
           <div className="flex gap-6 items-start">
              <div className="p-4 bg-accent/5 rounded-2xl text-accent"><MapPin size={24} strokeWidth={1} /></div>
              <div>
                 <h4 className="font-serif text-xl mb-1">Siège</h4>
                 <p className="text-sm text-muted font-light">Palais de l'Institut de France, Paris</p>
              </div>
           </div>

           <div className="pt-12 p-8 bg-paper border border-accent/10 italic text-muted font-light leading-relaxed">
              "En nous contactant, vous participez à la veille documentaire nécessaire à l'établissement des catalogues raisonnés."
           </div>
        </div>
      </div>
    </div>
  );
}
