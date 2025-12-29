
import React from 'react';
import { MessageCircle, Eye, Handshake, CreditCard, FileText, PackageCheck } from 'lucide-react';

const STEPS = [
  {
    icon: <MessageCircle className="text-cyan-400" size={32} />,
    title: "Primer Contacto",
    desc: "Solicite el packing list actualizado y el análisis de ROI vía WhatsApp."
  },
  {
    icon: <Eye className="text-cyan-400" size={32} />,
    title: "Inspección Tradex",
    desc: "Agende una visita física al Almacén Tradex para verificar el stock personalmente."
  },
  {
    icon: <Handshake className="text-cyan-400" size={32} />,
    title: "Negociación B2B",
    desc: "Definimos términos especiales para compradores de contenedores completos."
  },
  {
    icon: <CreditCard className="text-cyan-400" size={32} />,
    title: "Pago Seguro",
    desc: "Liquidación vía transferencia internacional o USDT para su seguridad jurídica."
  },
  {
    icon: <FileText className="text-cyan-400" size={32} />,
    title: "Documentación",
    desc: "Entrega de facturas comerciales y documentos para la nacionalización inmediata."
  },
  {
    icon: <PackageCheck className="text-cyan-400" size={32} />,
    title: "Retiro de Carga",
    desc: "Entrega de los equipos en almacén. Operativa de carga lista en Tradex."
  }
];

export const PurchaseProcess: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">Protocolo de Inversión</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tighter sm:text-6xl">Su Ruta de Compra Segura</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea decorativa */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
          
          {STEPS.map((step, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 transition-all hover:border-cyan-500/50 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-cyan-500/10 transition-colors">
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-black text-slate-800">{i + 1}</span>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter">{step.title}</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
