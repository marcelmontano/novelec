
import React from 'react';
import { CONTACT_DETAILS, CONTAINERS, LOGISTICS, METRICS } from '../constants';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import { NovelecLogo } from '../App';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative bg-white inline-block px-6 py-4 rounded-xl mb-8 shadow-md">
                <NovelecLogo className="h-16 w-auto" />
                <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white text-[7px] font-black px-2 py-1 rounded border border-emerald-400 shadow-xl uppercase tracking-widest">
                  Novelec Official
                </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ubicación y Logística Oficial</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Equipos ubicados físicamente en <span className="text-white font-bold">{LOGISTICS.warehouse}</span>. 
              Importación gestionada a través de <span className="text-cyan-400 font-bold">{LOGISTICS.importer}</span>. 
              Transparencia total y seguridad en cada paso de su inversión.
            </p>
            <div className="flex flex-col space-y-4">
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <MapPin className="h-5 w-5 text-purple-400 mr-4" />
                    <span className="text-sm">Tradex: Reparto Eléctrico, La Habana</span>
               </div>
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <Award className="h-5 w-5 text-yellow-500 mr-4" />
                    <span className="text-sm">Canal Importador: {LOGISTICS.importer}</span>
               </div>
               <div className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800 mt-4">
                    <MessageCircle className="h-6 w-6 text-green-500 mr-4" />
                    <span className="font-semibold">WhatsApp: <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} className="text-white hover:text-green-500 transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Inspeccione su Contenedor</h3>
            {CONTAINERS.map(offer => (
                <div key={offer.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors">
                    <div className="text-center sm:text-left">
                        <div className="font-bold text-white text-lg">{offer.brand} en Tradex</div>
                        {/* Fix: use the imported METRICS constant */}
                        <div className="text-emerald-500 text-sm font-black uppercase mt-1">Beneficio Neto: €{(METRICS[offer.id].minProfit/1000).toFixed(0)}k - €{(METRICS[offer.id].maxProfit/1000).toFixed(0)}k</div>
                    </div>
                    <a 
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20deseo%20inspeccionar%20el%20contenedor%20${offer.brand}%20en%20Tradex.`}
                        className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-black text-white shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 ${
                             offer.id === 'ecoflow' ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20' : 'bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/20'
                        }`}
                    >
                        Ver Inventario <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            ))}
             <div className="bg-slate-800/30 p-4 rounded-lg mt-8 border border-slate-700">
               <p className="text-xs text-slate-300 text-center sm:text-left italic leading-relaxed">
                  * Novelec es Distribuidor Autorizado. Mercancía disponible para inspección física en <strong>Reparto Eléctrico (Almacenes Tradex)</strong>. Importación oficial vía <strong>Cubaelectrónica</strong>. Equipos exentos de aranceles bajo régimen In-Bond.
              </p>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center">
            <p className="text-sm text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} Novelec Cuba • Alianza Logística Cubaelectrónica & Tradex
            </p>
        </div>
      </div>
    </footer>
  );
};
