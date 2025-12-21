
import React from 'react';
import { INVENTORY } from '../constants';
import { Zap, Battery, Cpu, CheckCircle } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  // Highlights: Deye 10kW, Deye Battery 10.2, Delta Pro Ultra, Delta Pro 3
  const highlightedIds = ['sun10k', 'seg102', 'proultra', 'deltapro3'];
  const highlights = INVENTORY.filter(i => highlightedIds.includes(i.id));

  return (
    <section className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">Potencia Premium</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Equipos Estrella del Contenedor
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Este envío incluye lo último en tecnología híbrida de Deye y la portabilidad extrema de EcoFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col overflow-hidden rounded-3xl bg-slate-800 shadow-xl border border-slate-700 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-slate-500/50"
            >
              <div className="flex-shrink-0 h-72 w-full bg-white relative p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none"></div>
                
                {item.imagePlaceholder.includes('drive') ? (
                     <img 
                      className="h-full w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-110" 
                      src={item.imagePlaceholder} 
                      alt={item.modelName} 
                     />
                ) : (
                     <img 
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110" 
                      src={item.imagePlaceholder} 
                      alt={item.modelName} 
                     />
                )}
                
                <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur text-white text-[10px] font-black px-4 py-1.5 rounded-full border border-slate-700 shadow-xl z-10 uppercase tracking-widest">
                  x{item.quantity} Unidades
                </div>
              </div>

              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                     <p className="text-[10px] font-black text-cyan-400 flex items-center gap-2 uppercase tracking-[0.2em]">
                        {item.category === 'Inverter' && <Cpu className="w-4 h-4" />}
                        {item.category === 'Battery' && <Battery className="w-4 h-4" />}
                        {item.category === 'Generator' && <Zap className="w-4 h-4" />}
                        {item.category}
                     </p>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">{item.modelName}</h3>
                  <p className="text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed font-medium">{item.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                        <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Capacidad</span>
                        <span className="text-white font-bold">{item.specs.capacity}</span>
                    </div>
                    {item.specs.output && (
                        <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Salida</span>
                            <span className="text-white font-bold">{item.specs.output}</span>
                        </div>
                    )}
                    <div className="pt-4">
                        <ul className="grid grid-cols-2 gap-3">
                            {item.specs.extras?.slice(0, 4).map((extra, idx) => (
                                <li key={idx} className="flex items-start text-[11px] text-slate-300 font-medium">
                                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="leading-tight">{extra}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
