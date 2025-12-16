import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white inline-block px-3 py-1 rounded mb-4">
                <img src="https://i.imgur.com/FmnNcSz.png" alt="Novelec" className="h-6 w-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">¿Listo para hacer negocios?</h3>
            <p className="text-slate-400 mb-6">
              Este contenedor está listo para su distribución. Contacte directamente a Novelec para coordinar el pago y la logística.
              Prioridad a compradores serios.
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
          
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Precio Final del Contenedor</p>
            <div className="text-5xl font-bold text-white mb-6">€{CONTACT_DETAILS.price.toLocaleString()}</div>
            <a 
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hola,%20deseo%20comprar%20el%20contenedor%20EcoFlow%20de%20Novelec%20por%20135,000%20Euros.`}
                className="block w-full rounded-lg bg-green-600 px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-500 transition-all transform hover:-translate-y-1"
            >
                Iniciar Compra por WhatsApp
            </a>
            <p className="text-xs text-slate-500 mt-4">
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