
import React from 'react';
import { CONTACT_DETAILS, CONTAINERS } from '../constants';
import { Phone, MessageCircle, ArrowRight, Award, MapPin } from 'lucide-react';
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
              <span className="text-cyan-400 font-black uppercase text-xs tracking-widest">Importador Directo Novelec</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Oficinas y Operaciones</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Firma española establecida en Cuba con infraestructura propia. Gestionamos su inversión desde nuestras oficinas en el Náutico hasta la entrega en Almacenes Tradex.
            </p>
            <div className="flex flex-col space-y-4">
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <MapPin className="h-5 w-5 text-red-500 mr-4" />
                    <span className="text-xs font-bold uppercase tracking-tight">Oficina: <span className="text-white">Calle 158, #108 altos, Náutico, La Habana</span></span>
               </div>
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <Phone className="h-5 w-5 text-cyan-400 mr-4" />
                    <span className="text-xs font-bold uppercase tracking-tight">Llamar: <a href={`tel:+53${CONTACT_DETAILS.phone}`} className="text-white hover:text-cyan-400 transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <MessageCircle className="h-5 w-5 text-green-500 mr-4" />
                    <span className="text-xs font-bold uppercase tracking-tight">WhatsApp B2B: <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} className="text-white hover:text-green-500 transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Unidades Disponibles (In-Bond)</h3>
            {CONTAINERS.map(offer => (
                <div key={offer.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors">
                    <div className="text-center sm:text-left">
                        <div className="font-bold text-white text-lg">Contenedor {offer.brand}</div>
                        <div className="text-cyan-400 font-mono text-[10px] mb-1">CÓDIGO DE LOTE: {offer.brand.toUpperCase()}-2025</div>
                        <div className="text-white font-black text-xl">€{offer.price.toLocaleString()}</div>
                    </div>
                    <a 
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola%20Luis,%20deseo%20agendar%20visita%20al%20Náutico%20para%20el%20contenedor%20${offer.brand}.`}
                        className={`inline-flex items-center justify-center rounded-xl px-8 py-3 text-[10px] font-black text-white shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest ${
                             offer.id === 'ecoflow' ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20' : 'bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/20'
                        }`}
                    >
                        Negociar {offer.brand} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            ))}
             <div className="bg-slate-800/30 p-6 rounded-2xl mt-8 border border-slate-700">
               <p className="text-[11px] text-slate-300 text-center sm:text-left italic leading-relaxed">
                  * Novelec es una marca registrada bajo legislación española. Operamos en Cuba bajo regímenes de depósito aduanero (In-Bond), facilitando la comercialización mayorista sin los aranceles de nacionalización previa. 
                  Todos los pagos se procesan vía transferencia internacional (España) o activos digitales seguros.
              </p>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center">
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} NOVELEC CUBA • FIRMA ESPAÑOLA DE INGENIERÍA Y SUMINISTRO
            </p>
        </div>
      </div>
    </footer>
  );
};
