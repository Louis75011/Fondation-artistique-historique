
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-paper">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-accent/20 bg-paper/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-serif font-bold tracking-tight">Fondation Vuillard Roussel</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-accent"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isSidebarOpen || true) && (
          <motion.nav
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`
              fixed inset-y-0 left-0 z-40 w-72 bg-paper border-r border-accent/20 p-8 flex flex-col
              md:relative md:translate-x-0
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}
          >
            <div className="mb-12">
              <h1 className="text-2xl font-serif font-semibold leading-none mb-2">Fondation</h1>
              <p className="text-lg font-serif font-light text-accent tracking-widest uppercase">Vuillard Roussel</p>
            </div>

            <div className="space-y-4 flex-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) => `
                    group flex items-center justify-between text-lg font-serif transition-colors
                    ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div layoutId="nav-active">
                          <ChevronRight size={16} className="text-accent" />
                        </motion.div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-accent/10">
              <button className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted hover:text-ink transition-colors">
                <LogIn size={16} />
                <span>Se connecter</span>
              </button>
              <div className="mt-6 text-[10px] text-muted flex flex-col gap-1">
                <p>© ADAGP</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:underline">Mentions légales</a>
                  <a href="#" className="hover:underline">Contact</a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 lg:px-20">
          {children}
        </div>
      </main>
    </div>
  );
}
