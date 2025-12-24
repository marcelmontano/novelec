
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { InventoryTable } from './components/InventoryTable';
import { ProductHighlights } from './components/ProductHighlights';
import { ProfitabilityAnalysis } from './components/ProfitabilityAnalysis';
import { ContactFooter } from './components/ContactFooter';
import { AIAdvisor } from './components/AIAdvisor';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

/**
 * NovelecLogo: Reconstrucción vectorial de alta precisión de la identidad de marca Novelec.
 */
export const NovelecLogo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 280 100" 
      className={`${className} w-auto`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Novelec Logo"
    >
      <title>Novelec - El Valor del Servicio</title>
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H65C70.5228 10 75 14.4772 75 20V80C75 85.5228 70.5228 90 65 90H20C14.4772 90 10 93.2843 10 85V15Z" 
        fill="#004685" 
      />
      <rect x="28" y="32" width="10" height="38" fill="white" />
      <path 
        d="M28 42C28 36.4772 32.4772 32 38 32H50C55.5228 32 60 36.4772 60 42V70H50V42C50 40.8954 49.1046 40 48 40H40C38.8954 40 38 40.8954 38 42V70H28V42Z" 
        fill="white" 
      />
      <text 
        x="85" 
        y="65" 
        fill="#004685" 
        style={{ font: 'bold 44px "Inter", sans-serif', letterSpacing: '-2.5px' }}
      >
        novelec
      </text>
      <text 
        x="88" 
        y="85" 
        fill="#9ca3af" 
        style={{ font: '600 9px "Inter", sans-serif', letterSpacing: '3px', textTransform: 'uppercase' }}
      >
        EL VALOR DEL SERVICIO
      </text>
    </svg>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="bg-white px-5 py-3 rounded-xl shadow-md flex-shrink-0 flex items-center justify-center min-w-[180px] h-20 transition-transform hover:scale-105">
              <NovelecLogo className="h-full" />
            </div>
            <div className="flex ml-6 flex-col justify-center border-l border-slate-700 pl-6 h-12">
              <span className="text-white font-bold text-base leading-tight">División Energía</span>
              <span className="text-slate-400 text-xs tracking-wider">MERCADO CUBA</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#highlights" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors">Destacados</a>
              <a href="#profitability" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors">Rentabilidad</a>
              <a href="#ai-advisor" className="flex items-center gap-1.5 text-cyan-400 hover:text-white px-3 py-2 rounded-md text-sm font-bold transition-colors">
                <Sparkles size={14} /> Asesor IA
              </a>
              <a href="#inventory" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors">Inventario</a>
              <a href={`https://wa.me/5358183649`} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-full text-sm font-extrabold shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-0.5">
                Contactar Ahora
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all"
            >
              {isMenuOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />
        <div className="absolute right-0 w-3/4 max-w-sm h-full bg-slate-900 shadow-2xl border-l border-slate-800 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <span className="text-white font-black text-2xl tracking-tighter uppercase">Menú</span>
            <button onClick={closeMenu} className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <a href="#highlights" onClick={closeMenu} className="text-slate-300 hover:text-white px-6 py-4 rounded-xl text-xl font-bold transition-all border border-slate-800">Equipos</a>
            <a href="#profitability" onClick={closeMenu} className="text-slate-300 hover:text-white px-6 py-4 rounded-xl text-xl font-bold transition-all border border-slate-800">Rentabilidad</a>
            <a href="#ai-advisor" onClick={closeMenu} className="text-cyan-400 hover:text-white bg-cyan-500/10 px-6 py-4 rounded-xl text-xl font-bold transition-all border border-cyan-500/30">Asesor IA</a>
            <a href="#inventory" onClick={closeMenu} className="text-slate-300 hover:text-white px-6 py-4 rounded-xl text-xl font-bold transition-all border border-slate-800">Inventario</a>
            <div className="pt-12 mt-auto">
              <a href={`https://wa.me/5358183649`} className="flex items-center justify-center gap-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-cyan-900/20">
                <MessageCircle size={24} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <div id="highlights">
          <ProductHighlights />
        </div>
        <ProfitabilityAnalysis />
        <AIAdvisor />
        <InventoryTable />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
