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
            <div key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-slate-800 shadow-xl border border-slate-700 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex-shrink-0 h-64 w-full bg-white relative p-4 flex items-center justify-center">
                {item.imagePlaceholder.includes('drive') ? (
                     // Drive thumbnails can be weirdly sized, object-contain is safer
                     <img className="h-full w-auto max-w-full object-contain" src={item.imagePlaceholder} alt={item.modelName} />
                ) : (
                     <img className="h-full w-full object-contain" src={item.imagePlaceholder} alt={item.modelName} />
                )}
                
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                  x{item.quantity} Unidades
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                     <p className="text-sm font-medium text-cyan-400 flex items-center gap-2">
                        {item.category === 'Inverter' && <Cpu className="w-4 h-4" />}
                        {item.category === 'Battery' && <Battery className="w-4 h-4" />}
                        {item.category === 'Generator' && <Zap className="w-4 h-4" />}
                        {item.category}
                     </p>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.modelName}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">{item.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300 text-sm">Capacidad</span>
                        <span className="text-white font-medium">{item.specs.capacity}</span>
                    </div>
                    {item.specs.output && (
                        <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                            <span className="text-slate-300 text-sm">Salida</span>
                            <span className="text-white font-medium">{item.specs.output}</span>
                        </div>
                    )}
                    <div className="pt-2">
                        <ul className="grid grid-cols-2 gap-2">
                            {item.specs.extras?.slice(0, 4).map((extra, idx) => (
                                <li key={idx} className="flex items-start text-xs text-slate-400">
                                    <CheckCircle className="h-3 w-3 text-cyan-500 mr-1.5 mt-0.5 flex-shrink-0" />
                                    {extra}
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