
import React from 'react';
import { INVENTORY } from '../constants';
import { CheckCircle, TrendingUp, DollarSign, Star, ShieldCheck, Globe, ShoppingBag, Check, Award } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  const highlightedIds = ['sun10k', 'seg102', 'proultra', 'deltapro3'];
  const highlights = INVENTORY.filter(i => highlightedIds.includes(i.id));

  const marketData: Record<string, { marketInsight: string; qualityFactor: string; demandLevel: string }> = {
    'sun10k': {
      marketInsight: "Equipo crítico para MIPYMES y negocios locales. Demanda masiva ante la inestabilidad energética actual.",
      qualityFactor: "Grado industrial. Soporta integración con generadores y vida útil de +15 años.",
      demandLevel: "Crítica / Alta Rotación"
    },
    'seg102': {
      marketInsight: "La solución de almacenamiento más robusta en Cuba. Complemento indispensable para sistemas de 10kW.",
      qualityFactor: "Química LiFePO4 con 6000 ciclos. BMS inteligente de última generación.",
      demandLevel: "Alta / Complemento Top"
    },
    'proultra': {
      marketInsight: "Producto premium para el segmento de lujo. La solución de respaldo más potente disponible en el país.",
      qualityFactor: "Tecnología modular. Funcionamiento silencioso y diseño plug-and-play.",
      demandLevel: "Nicho Premium / Alto Valor"
    },
    'deltapro3': {
      marketInsight: "Campeón de la rentabilidad. El equipo más deseado por familias por su facilidad de uso y potencia.",
      qualityFactor: "Carga 0-80% en 1 hora. Baterías LFP seguras y conmutación UPS de grado médico.",
      demandLevel: "Masiva / Ventas Rápidas"
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
            Hemos seleccionado los modelos con mayor rotación en el mercado cubano para maximizar su retorno de inversión.
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
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Stock</span>
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
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">{item.modelName}</h3>
                  </div>

                  <div className="mb-8">
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 flex items-center justify-between">
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
