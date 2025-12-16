import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ShoppingBag, ArrowRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-16 pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="#22d3ee" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-cyan-900/30 px-4 py-1.5 text-sm font-semibold text-cyan-400 ring-1 ring-inset ring-cyan-400/20 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          Oferta Exclusiva - Contenedor Completo
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
          Energía para <span className="gradient-text">Cuba</span>
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-slate-300 mb-10">
          Oportunidad de inversión única. Adquiera un lote completo de generadores EcoFlow de última generación. Solución ideal para reventa, negocios o comunidades.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
          <div className="flex flex-col items-center sm:items-end">
            <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Precio Total</span>
            <span className="text-5xl font-bold text-white tracking-tight">
              €{CONTACT_DETAILS.price.toLocaleString()}
            </span>
            <span className="text-cyan-400 text-xs mt-1">Pago desde el exterior</span>
          </div>
          
          <div className="hidden sm:block h-12 w-px bg-slate-700"></div>
          
          <a 
            href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20estoy%20interesado%20en%20el%20contenedor%20EcoFlow.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-cyan-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-cyan-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span className="mr-2">Contactar para Comprar</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center w-full max-w-4xl border-t border-slate-800 pt-8">
            <div>
                <div className="text-3xl font-bold text-white">120</div>
                <div className="text-sm text-slate-400">Equipos Totales</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-white">4kW+</div>
                <div className="text-sm text-slate-400">Potencia Máxima</div>
            </div>
             <div>
                <div className="text-3xl font-bold text-white">LFP</div>
                <div className="text-sm text-slate-400">Tecnología Duradera</div>
            </div>
             <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Listo para Enviar</div>
            </div>
        </div>
      </div>
    </div>
  );
};