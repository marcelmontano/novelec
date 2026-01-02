
import React from 'react';
import { INVENTORY } from '../constants';
import { TrendingUp, Star, Award, Globe } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  // Destacamos los equipos de mayor valor del nuevo inventario
  const highlightedIds = ['dp-ultra-inv', 'sun10k', 'deltapro3', 'seg102'];
  const highlights = INVENTORY.filter(i => highlightedIds.includes(i.id));

  const marketData: Record<string, { marketInsight: string; qualityFactor: string; demandLevel: string }> = {
    'sun10k': {
      marketInsight: "Equipo crítico para el sector comercial. Es el inversor más buscado para independizar negocios de la red eléctrica.",
      qualityFactor: "Grado industrial. 5 años de garantía directa Novelec.",
      demandLevel: "Crítica / Alta Rotación"
    },
    'dp-ultra-inv': {
      marketInsight: "La joya de la corona. Respaldo de hogar completo con capacidad de arrancar aires acondicionados centrales.",
      qualityFactor: "Tecnología X-Fusion exclusiva. Integración total con panel inteligente.",
      demandLevel: "Premium / Segmento Alto"
    },
    'deltapro3': {
      marketInsight: "El lanzamiento más esperado de 2025. Supera al Delta Pro original en eficiencia y nivel de ruido.",
      qualityFactor: "X-Quiet (30dB). Carga ultra rápida 0-80% en 1 hora.",
      demandLevel: "Muy Alta / Lanzamiento"
    },
    'seg102': {
      marketInsight: "Base energética para sistemas Deye. Imprescindible para instalaciones de 10kW.",
      qualityFactor: "Celdas de grado automotriz. BMS integrado de monitoreo remoto.",
      demandLevel: "Alta / Complemento"
    }
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
            <Star size={14} fill="currentColor" /> Análisis de Mercado B2B
          </div>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter uppercase mb-6 leading-tight">
            Equipos con Mayor <br className="hidden sm:block" /> <span className="gradient-text">Potencial de Reventa</span>
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-slate-400 mx-auto leading-relaxed">
            Estos modelos lideran la demanda en el mercado cubano actual por su confiabilidad y potencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {highlights.map((item) => {
            const market = marketData[item.id] || { marketInsight: "Alta demanda", qualityFactor: "Alta calidad", demandLevel: "Alta" };
            const isEcoFlow = item.containerId === 'ecoflow';
            const accentColor = isEcoFlow ? 'cyan' : 'yellow';

            return (
              <div key={item.id} className="flex flex-col overflow-hidden rounded-[2.5rem] bg-slate-800/50 shadow-2xl border border-slate-700/50 transition-all duration-500 hover:border-slate-500 hover:-translate-y-2 group">
                <div className="flex-shrink-0 h-72 w-full bg-white relative p-6 flex items-center justify-center overflow-hidden">
                  <img 
                    className="h-full w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    src={item.imagePlaceholder} 
                    alt={item.modelName} 
                  />
                  <div className={`absolute top-6 left-6 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-2xl border border-${accentColor}-500/30 flex flex-col items-center`}>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Lote</span>
                    <span className={`text-2xl font-black text-${accentColor}-400 leading-none mt-1`}>x{item.quantity}</span>
                  </div>
                </div>

                <div className="flex-1 p-8 sm:p-10 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`bg-${accentColor}-500/10 text-${accentColor}-400 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest border border-${accentColor}-500/20`}>
                        {item.category}
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest border border-emerald-500/20 flex items-center gap-1">
                        <Award size={10} /> Canal Mayorista
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 leading-tight uppercase">{item.modelName}</h3>
                  </div>

                  <div className="mb-8">
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/50 flex items-center justify-between">
                        <div>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Nivel de Demanda</p>
                           <p className="text-lg font-black text-white">{market.demandLevel}</p>
                        </div>
                        <TrendingUp className="text-emerald-400" size={32} />
                     </div>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-700/30">
                      <h4 className={`text-[10px] font-black text-${accentColor}-400 uppercase tracking-widest mb-3 flex items-center gap-2`}>
                        <Globe size={14} /> Análisis del Mercado
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {market.marketInsight}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Ventaja Técnica</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed italic">
                           {market.qualityFactor}
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
