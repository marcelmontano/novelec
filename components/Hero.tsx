
import React from 'react';
import { CONTACT_DETAILS, CONTAINERS } from '../constants';
import { ArrowRight, Check, MapPin, Bitcoin, ShieldCheck, Landmark, Tags, Award, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    // Increased pt from 28 to 36 to clear the new h-24 Navbar height
    <div className="relative overflow-hidden bg-slate-900 pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="#22d3ee" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-slate-800 px-5 py-2 text-sm font-bold text-green-400 ring-1 ring-inset ring-green-400/20 mb-10 animate-fade-in-up">
          <span className="flex h-3 w-3 rounded-full bg-green-400 mr-3 animate-pulse"></span>
          Stock en La Habana - Almacén Tradex (Régimen In-Bond)
        </div>
        
        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-[1.1]">
          Energiza Cuba: <br className="hidden sm:block" />
          <span className="gradient-text">Proveedores Directos</span>
        </h1>
        
        <p className="max-w-3xl text-xl sm:text-2xl text-slate-300 mb-12 font-medium leading-relaxed">
          Novelec es distribuidor de fábrica. Venta mayorista por contenedor cerrado de <span className="text-white font-bold">EcoFlow</span> y <span className="text-white font-bold">Deye</span>. 
          <span className="text-cyan-400 font-bold"> Libres de Aranceles Aduanales </span> 
          y con garantía directa del fabricante.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 text-xs sm:text-sm font-bold text-slate-300">
          <div className="flex items-center gap-2 bg-slate-800/80 px-5 py-2 rounded-full border border-slate-700 shadow-xl ring-1 ring-cyan-500/20">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Distribución Directa</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-5 py-2 rounded-full border border-slate-700 shadow-xl">
            <Tags className="w-5 h-5 text-purple-400" />
            <span>Exento de Aranceles</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-5 py-2 rounded-full border border-slate-700 shadow-xl">
            <Landmark className="w-5 h-5 text-emerald-500" />
            <span>Transferencia Bancaria</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 px-5 py-2 rounded-full border border-slate-700 shadow-xl">
            <Bitcoin className="w-5 h-5 text-yellow-500" />
            <span>USDT / Cripto</span>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {CONTAINERS.map((offer) => (
            <div 
              key={offer.id} 
              className={`relative flex flex-col rounded-3xl border ${offer.id === 'ecoflow' ? 'border-cyan-500/30 bg-slate-800/40 shadow-cyan-500/5' : 'border-yellow-500/30 bg-slate-800/40 shadow-yellow-500/5'} p-10 shadow-2xl transition-all hover:scale-[1.03] hover:bg-slate-800/60`}
            >
              <div className="absolute top-6 right-6 opacity-30">
                <CheckCircle2 size={40} className={offer.id === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'} />
              </div>

              <div className="mb-6 text-left">
                <h3 className={`text-xs font-black uppercase tracking-[0.2em] mb-2 ${offer.id === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>
                    Partner Oficial {offer.brand}
                </h3>
                <h2 className="text-4xl font-black text-white mt-1 leading-none">{offer.title}</h2>
              </div>
              
              <div className="flex items-baseline justify-center gap-x-2 my-8">
                <span className="text-6xl font-black tracking-tighter text-white">€{offer.price.toLocaleString()}</span>
                <span className="text-sm font-black uppercase text-slate-500 tracking-widest">Contenedor</span>
              </div>
              
              <p className="text-slate-300 mb-8 flex-grow text-lg leading-relaxed font-medium text-left">
                Adquiera equipos originales directamente de la cadena de suministro de Novelec. {offer.description}
              </p>
              
              <ul className="mb-10 space-y-4 text-sm leading-6 text-slate-300 text-left">
                <li className="flex gap-x-3 items-center">
                    <Award className={`h-6 w-6 flex-none rounded-full p-1 ${offer.id === 'ecoflow' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-yellow-500/20 text-yellow-400'}`} />
                    <span className="font-black uppercase tracking-tighter italic">Garantía Directa de Fábrica</span>
                </li>
                {offer.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className={`h-6 w-6 flex-none rounded-full p-1 ${offer.id === 'ecoflow' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-yellow-500/20 text-yellow-400'}`} aria-hidden="true" />
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(offer.title)}%20por%20${offer.price}€.%20Sé%20que%20son%20proveedores%20directos%20y%20quisiera%20más%20información.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block rounded-2xl px-6 py-5 text-center text-lg font-black leading-6 text-white shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 ${
                    offer.id === 'ecoflow' 
                    ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/30' 
                    : 'bg-yellow-600 hover:bg-yellow-500 shadow-yellow-600/30'
                }`}
              >
                Solicitar Cotización <ArrowRight className="inline-block w-5 h-5 ml-2"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
