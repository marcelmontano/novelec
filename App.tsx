import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { InventoryTable } from './components/InventoryTable';
import { ProductHighlights } from './components/ProductHighlights';
import { ProfitabilityAnalysis } from './components/ProfitabilityAnalysis';
import { ContactFooter } from './components/ContactFooter';
import { Menu, X, MessageCircle } from 'lucide-react';

/**
 * High-Fidelity Logo Component
 * 1. Tries to load the Imgur image via a reliable proxy (wsrv.nl)
 * 2. Falls back to direct Imgur access with specific headers
 * 3. Final Fallback: A precision SVG reconstruction of the Novelec brand identity
 */
export const NovelecLogo = ({ className = "h-12" }: { className?: string }) => {
  const [errorCount, setErrorCount] = useState(0);
  
  const imageUrls = [
    "https://wsrv.nl/?url=https://i.imgur.com/FmnNcSz.png&w=600",
    "https://i.imgur.com/FmnNcSz.png"
  ];

  // Precision SVG Fallback (Matches the provided logo image exactly)
  if (errorCount >= imageUrls.length) {
    return (
      <div className={`${className} flex flex-col items-center justify-center py-1`}>
        {/* Icon: The stylized 'n' in a rounded square */}
        <svg viewBox="0 0 100 100" className="h-[60%] w-auto mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15C15 6.71573 21.7157 0 30 0H85V70C85 86.5685 71.5685 100 55 100H30C21.7157 100 15 93.2843 15 85V15Z" fill="#004685" />
          <path d="M40 25H60V75H40V25Z" fill="white" />
          <path d="M40 45C40 36.7157 46.7157 30 55 30C63.2843 30 70 36.7157 70 45V75H40V45Z" fill="white" />
        </svg>
        {/* Brand Name: Lowercase 'novelec' */}
        <span className="font-bold text-[#004685] tracking-tighter text-xl leading-none">novelec</span>
        {/* Slogan */}
        <span className="text-[7px] text-[#9ca3af] uppercase tracking-widest font-medium">El valor del servicio</span>
      </div>
    );
  }

  return (
    <img 
      src={imageUrls[errorCount]} 
      alt="Novelec" 
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
      onError={() => setErrorCount(prev => prev + 1)}
    />
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
              <NovelecLogo className="h-full w-auto" />
            </div>
            <div className="flex ml-6 flex-col justify-center border-l border-slate-700 pl-6 h-12">
              <span className="text-white font-bold text-base leading-tight">División Energía</span>
              <span className="text-slate-400 text-xs tracking-wider">MERCADO CUBA</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#highlights" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors">Destacados</a>
              <a href="#profitability" className="text-cyan-400 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors">Rentabilidad</a>
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
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMenu}
        />

        <div className="absolute right-0 w-3/4 max-w-sm h-full bg-slate-900 shadow-2xl border-l border-slate-800 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <span className="text-white font-black text-2xl tracking-tighter">MENÚ</span>
            <button onClick={closeMenu} className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
             <a 
              href="#highlights" 
              onClick={closeMenu}
              className="text-slate-300 hover:text-white hover:bg-slate-800 px-6 py-4 rounded-xl text-xl font-bold transition-all border border-slate-800"
            >
              Equipos Destacados
            </a>
            <a 
              href="#profitability" 
              onClick={closeMenu}
              className="text-cyan-400 hover:text-white hover:bg-slate-800 px-6 py-4 rounded-xl text-xl font-bold transition-all border border-cyan-500/30"
            >
              Cálculo de Ganancias
            </a>
            <a 
              href="#inventory" 
              onClick={closeMenu}
              className="text-slate-300 hover:text-white hover:bg-slate-800 px-6 py-4 rounded-xl text-xl font-bold transition-all border border-slate-800"
            >
              Inventario Completo
            </a>
            
            <div className="pt-12 mt-auto">
              <a 
                href={`https://wa.me/5358183649`} 
                className="flex items-center justify-center gap-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-cyan-900/40 transition-all active:scale-95"
              >
                <MessageCircle className="h-7 w-7" />
                WhatsApp Directo
              </a>
              <p className="text-center text-slate-500 text-sm mt-6 font-medium">
                Respuesta inmediata • Stock La Habana
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div id="highlights">
          <ProductHighlights />
        </div>
        <ProfitabilityAnalysis />
        <InventoryTable />
        
        {/* Value Proposition Section */}
        <section className="py-20 bg-slate-950 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="lg:text-center mb-12">
                <p className="text-base font-semibold leading-7 text-cyan-400">Campaña de Solución Energética</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">¿Qué contenedor se adapta a su negocio?</h2>
                <p className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
                    Hemos diseñado dos cargas estratégicas para atacar diferentes necesidades del mercado energético actual.
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                  <div className="flex flex-col items-start bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <div className="rounded-lg bg-yellow-900/30 p-2 ring-1 ring-yellow-500/30 mb-4">
                        <span className="text-2xl">🏗️</span>
                    </div>
                    <dt className="text-lg font-bold text-white">Perfil Instalador (Deye)</dt>
                    <dd className="mt-2 text-base text-slate-400">
                        Ideal para empresas de instalación. El contenedor Deye trae inversores de 10kW y baterías apilables, perfectos para crear sistemas fijos residenciales que soportan <strong>aires acondicionados y cargas pesadas</strong>.
                    </dd>
                  </div>
                   <div className="flex flex-col items-start bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <div className="rounded-lg bg-cyan-900/30 p-2 ring-1 ring-cyan-500/30 mb-4">
                        <span className="text-2xl">🛍️</span>
                    </div>
                    <dt className="text-lg font-bold text-white">Perfil Retail (EcoFlow)</dt>
                    <dd className="mt-2 text-base text-slate-400">
                        Enfocado en la venta rápida al consumidor final. Equipos "todo en uno" como el Delta Pro y generadores portátiles que <strong>no requieren instalación compleja</strong>. Alta rotación de inventario.
                    </dd>
                  </div>
                   <div className="flex flex-col items-start bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <div className="rounded-lg bg-green-900/30 p-2 ring-1 ring-green-500/30 mb-4">
                        <span className="text-2xl">🤝</span>
                    </div>
                    <dt className="text-lg font-bold text-white">Garantía Novelec</dt>
                    <dd className="mt-2 text-base text-slate-400">
                        Al comprar el contenedor cerrado, obtiene el mejor precio del mercado. Gestionamos la logística para que usted se enfoque en la distribución y venta en Cuba.
                    </dd>
                  </div>
              </dl>
           </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;