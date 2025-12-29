
import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, Landmark, Truck, AlertTriangle } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
        alert("Por favor, confirme que entiende que es una venta por lote cerrado.");
        return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border-2 border-emerald-500/20 rounded-[3rem] p-12 text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="text-emerald-500" size={64} />
        </div>
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Solicitud Recibida</h3>
        <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
          Un asesor de cuentas corporativas Novelec le contactará en menos de 2 horas para enviar el Packing List oficial y coordinar la visita a Tradex.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-emerald-400 font-black uppercase text-xs tracking-widest hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <section id="quote-form" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Building2 size={14} /> Solo Canal Corporativo B2B
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Portal de <span className="text-emerald-500">Inversores</span> <br /> Mayoristas
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
              No somos una tienda minorista. Atendemos exclusivamente a empresas (MIPYMES, TCP, Entidades) con capacidad de inversión para lotes completos.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <AlertTriangle className="text-yellow-500" />, text: "Inversión Mínima: €128,600 (Lote Cerrado)" },
                { icon: <Landmark className="text-cyan-400" />, text: "Pagos vía Transferencia Internacional o USDT" },
                { icon: <Truck className="text-cyan-400" />, text: "Equipos en Almacén Tradex (Régimen In-Bond)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 font-bold text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-8 sm:p-12 rounded-[3rem] border border-slate-800 shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Nombre del Inversor / Entidad</label>
                  <input required type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-colors" placeholder="Empresa o Representante" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">WhatsApp de Contacto</label>
                  <input required type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-colors" placeholder="+53 5..." />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Lote a Adquirir</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-colors appearance-none font-bold">
                  <option>Contenedor EcoFlow Full (€135,000)</option>
                  <option>Contenedor Deye Full (€128,600)</option>
                  <option>Liquidación Ambos Lotes (€263,600)</option>
                </select>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center mt-1">
                    <input 
                        type="checkbox" 
                        required 
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-700 bg-slate-950 checked:bg-emerald-500 transition-all" 
                    />
                    <CheckCircle2 className="absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Entiendo que la venta es exclusivamente por el <span className="text-white font-bold underline">contenedor completo</span> y cuento con los fondos en el exterior (Transferencia/USDT) para la operación.
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                Solicitar Cotización B2B <Send size={20} />
              </button>
              <p className="text-[10px] text-slate-500 text-center font-bold uppercase tracking-widest italic">
                * Las visitas a Tradex se coordinan solo con compradores calificados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
