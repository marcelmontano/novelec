
import React from 'react';
import { CONTACT_DETAILS, CONTAINERS } from '../constants';
import { Phone, MessageCircle, ArrowRight, Award } from 'lucide-react';
import { NovelecLogo } from '../App';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="bg-white inline-block px-6 py-4 rounded-xl mb-8 shadow-md">
                <NovelecLogo className="h-16 w-auto" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-cyan-400 w-5 h-5" />
              <span className="text-cyan-400 font-black uppercase text-xs tracking-widest">Proveedor Directo EcoFlow & Deye</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Contacto Directo con Distribución</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Al ser proveedores directos de las marcas **EcoFlow** y **Deye**, Novelec garantiza el mejor precio por contenedor en Cuba, eliminando intermediarios y ofreciendo soporte técnico de primer nivel.
            </p>
            <div className="flex flex-col space-y-5">
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                    <span className="font-semibold">Llamar: <a href={`tel:+53${CONTACT_DETAILS.phone}`} className="text-white hover:text-cyan-400 transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <MessageCircle className="h-6 w-6 text-green-500 mr-4" />
                    <span className="font-semibold">WhatsApp: <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} className="text-white hover:text-green-500 transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Canal Mayorista Oficial</h3>
            {CONTAINERS.map(offer => (
                <div key={offer.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors">
                    <div className="text-center sm:text-left">
                        <div className="font-bold text-white text-lg">Contenedor {offer.brand}</div>
                        <div className="text-cyan-400 font-mono text-xs mb-1">TRATO DIRECTO DE FÁBRICA</div>
                        <div className="text-white font-black text-xl">€{offer.price.toLocaleString()}</div>
                    </div>
                    <a 
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20deseo%20comprar%20el%20contenedor%20${offer.brand}%20por%20${offer.price.toLocaleString()}%20Euros.%20Me%20interesa%20la%20garantía%20directa.`}
                        className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-black text-white shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 ${
                             offer.id === 'ecoflow' ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20' : 'bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/20'
                        }`}
                    >
                        Comprar {offer.brand} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            ))}
             <div className="bg-slate-800/30 p-4 rounded-lg mt-8 border border-slate-700">
               <p className="text-xs text-slate-300 text-center sm:text-left italic leading-relaxed">
                  * Nota importante: Novelec Cuba es **proveedor directo**, lo que asegura que todos los números de serie son rastreables y cuentan con el respaldo de las marcas originales. Los equipos se encuentran en régimen In-Bond; el comprador solo asume la nacionalización.
              </p>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center">
            <p className="text-sm text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} Novelec Cuba • Canal de Distribución Directo EcoFlow & Deye
            </p>
        </div>
      </div>
    </footer>
  );
};
