import React from 'react';
import { CONTACT_DETAILS, CONTAINERS } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    // Increased pt from 16 to 28 (112px) to clear the Navbar height (80px) comfortably
    <div className="relative overflow-hidden bg-slate-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="#22d3ee" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-semibold text-cyan-400 ring-1 ring-inset ring-cyan-400/20 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          Oferta Mayorista - Novelec
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
          Dos Oportunidades en <span className="gradient-text">Energía</span>
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-slate-300 mb-12">
          Seleccione su inversión. Disponemos de dos contenedores completos listos para envío a Cuba. 
          Venta exclusiva por contenedor cerrado.
        </p>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {CONTAINERS.map((offer) => (
            <div 
              key={offer.id} 
              className={`relative flex flex-col rounded-2xl border ${offer.id === 'ecoflow' ? 'border-cyan-500/30 bg-slate-800/50' : 'border-yellow-500/30 bg-slate-800/50'} p-8 shadow-2xl transition-transform hover:scale-[1.02]`}
            >
              <div className="mb-4">
                <h3 className={`text-lg font-semibold uppercase tracking-wider ${offer.id === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>
                    {offer.brand}
                </h3>
                <h2 className="text-3xl font-bold text-white mt-2">{offer.title}</h2>
              </div>
              
              <div className="flex items-baseline justify-center gap-x-2 my-6">
                <span className="text-5xl font-bold tracking-tight text-white">€{offer.price.toLocaleString()}</span>
                <span className="text-sm font-semibold leading-6 text-slate-400">Total</span>
              </div>
              
              <p className="text-slate-300 mb-6 flex-grow">{offer.description}</p>
              
              <ul className="mb-8 space-y-3 text-sm leading-6 text-slate-300 text-left mx-auto max-w-xs">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${offer.id === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(offer.title)}%20por%20${offer.price}€.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block rounded-md px-3 py-3 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                    offer.id === 'ecoflow' 
                    ? 'bg-cyan-600 hover:bg-cyan-500 focus-visible:outline-cyan-600' 
                    : 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600'
                }`}
              >
                Comprar {offer.brand} <ArrowRight className="inline-block w-4 h-4 ml-1"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};