import React from 'react';
import { INVENTORY } from '../constants';

export const ProductHighlights: React.FC = () => {
  // Highlight the heavy hitters: Delta Pro, Delta Pro 3, Ultra
  const highlights = INVENTORY.filter(i => ['deltapro', 'deltapro3', 'proultra'].includes(i.id));

  return (
    <section className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Equipos de Alto Rendimiento</h2>
          <p className="mt-4 text-lg text-slate-400">Soluciones robustas para apagones prolongados y necesidades industriales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div key={item.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="aspect-h-3 aspect-w-4 bg-white sm:aspect-none sm:h-56 relative overflow-hidden">
                 <img 
                    src={item.imagePlaceholder} 
                    alt={item.modelName}
                    className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-110 p-4"
                 />
                 {/* Visual decoration */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                    {item.modelName}
                </h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">{item.description}</p>
                
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-500 text-sm">Cantidad en Lote</span>
                        <span className="text-white font-bold">{item.quantity} Unidades</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-500 text-sm">Capacidad</span>
                        <span className="text-cyan-400 font-semibold">{item.specs.capacity}</span>
                    </div>
                     <div className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-500 text-sm">Salida AC</span>
                        <span className="text-slate-200">{item.specs.output || 'N/A'}</span>
                    </div>
                </div>
                
                <ul className="space-y-2">
                    {item.specs.extras?.map((extra, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-2"></span>
                            {extra}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};