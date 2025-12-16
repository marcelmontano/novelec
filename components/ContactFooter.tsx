import React from 'react';
import { CONTACT_DETAILS, CONTAINERS } from '../constants';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white inline-block px-3 py-1 rounded mb-4">
                <img src="https://i.imgur.com/FmnNcSz.png" alt="Novelec" className="h-6 w-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Contacto Directo</h3>
            <p className="text-slate-400 mb-6">
              Novelec facilita la adquisición de estos contenedores para el mercado cubano.
              Contáctenos para detalles de logística, pago y documentación.
            </p>
            <div className="flex flex-col space-y-4">
               <div className="flex items-center text-slate-300">
                    <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                    <span>Llamar: <a href={`tel:+53${CONTACT_DETAILS.phone}`} className="hover:text-white transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
               <div className="flex items-center text-slate-300">
                    <MessageCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>WhatsApp: <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} className="hover:text-white transition-colors">+53 {CONTACT_DETAILS.phone}</a></span>
               </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Iniciar Compra</h3>
            {CONTAINERS.map(offer => (
                <div key={offer.id} className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <div className="font-semibold text-white">Contenedor {offer.brand}</div>
                        <div className="text-slate-400 text-sm">€{offer.price.toLocaleString()}</div>
                    </div>
                    <a 
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20deseo%20comprar%20el%20contenedor%20${offer.brand}%20por%20${offer.price.toLocaleString()}%20Euros.`}
                        className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${
                             offer.id === 'ecoflow' ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-yellow-600 hover:bg-yellow-500'
                        }`}
                    >
                        Comprar {offer.brand} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            ))}
             <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
                * Pago requerido desde el exterior. Entrega en Cuba.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Novelec. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};