import React from 'react';
import { Hero } from './components/Hero';
import { InventoryTable } from './components/InventoryTable';
import { ProductHighlights } from './components/ProductHighlights';
import { ContactFooter } from './components/ContactFooter';

// A simple sticky header for navigation
const Navbar = () => (
  <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center">
          {/* Logo container with white background for visibility of the dark logo */}
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex-shrink-0">
            <img 
              src="https://i.imgur.com/FmnNcSz.png" 
              alt="Novelec Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          {/* Removed 'hidden sm:flex' so the text is visible on all screen sizes */}
          <div className="flex ml-4 flex-col justify-center border-l border-slate-700 pl-4 h-10">
            <span className="text-white font-semibold text-sm leading-tight">División Energía</span>
            <span className="text-slate-400 text-xs">Mercado Cuba</span>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#inventory" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Inventario</a>
            <a href="#highlights" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Destacados</a>
            <a href={`https://wa.me/5358183649`} className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div id="highlights">
          <ProductHighlights />
        </div>
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