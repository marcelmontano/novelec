
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "¿Puedo comprar solo un equipo para probar?",
    a: "No. Novelec opera exclusivamente como canal de distribución mayorista. Solo vendemos contenedores cerrados para asegurar los precios de fábrica."
  },
  {
    q: "¿Aceptan pagos en moneda nacional (CUP)?",
    a: "Debido a la naturaleza de la importación directa, solo aceptamos transferencias internacionales bancarias o liquidación en USDT. No aceptamos efectivo local."
  },
  {
    q: "¿Quién se encarga de la nacionalización?",
    a: "Los equipos están en régimen In-Bond. El comprador asume el proceso de nacionalización, lo cual le permite ahorrar significativamente en costos operativos."
  },
  {
    q: "¿Puedo inspeccionar el stock antes de pagar?",
    a: "Absolutamente. La transparencia es nuestra prioridad. Invitamos a todos los compradores serios a agendar una visita en el Almacén Tradex (La Habana) para verificación física de cada bulto."
  },
  {
    q: "¿Tienen garantía los equipos?",
    a: "Sí. Al ser proveedores directos, gestionamos la garantía directamente con EcoFlow y Deye. El comprador recibe los certificados oficiales de fábrica."
  }
];

export const WholesaleFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Despeje sus dudas
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Preguntas Frecuentes del Inversor</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-900/50 transition-colors"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                <ChevronDown className={`text-slate-500 transition-transform ${open === i ? 'rotate-180 text-cyan-500' : ''}`} />
              </button>
              {open === i && (
                <div className="px-8 pb-8 text-slate-400 text-sm leading-relaxed animate-fade-in-up">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
