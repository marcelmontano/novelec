
import React from 'react';
import { INVENTORY } from '../constants';
import { CheckCircle, TrendingUp, DollarSign, Star, ShieldCheck, Globe, ShoppingBag, Check } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  // Highlights: Deye 10kW, Deye Battery 10.2, Delta Pro Ultra, Delta Pro 3
  const highlightedIds = ['sun10k', 'seg102', 'proultra', 'deltapro3'];
  const highlights = INVENTORY.filter(i => highlightedIds.includes(i.id));

  /**
   * Datos sincronizados con la PRUEBA DE ESTRÉS (Landed USD inc. 20% + 10%)
   */
  const marketData: Record<string, { unitCost: string; pvp: string; profit: string; marketInsight: string; qualityFactor: string }> = {
    'sun10k': {
      unitCost: "$2,210 USD", // Ajustado por estrés
      pvp: "$2,800 - $3,500 USD",
      profit: "$590 - $1,290 USD",
      marketInsight: "Equipo crítico para negocios. La demanda es masiva ante la inestabilidad de la red.",
      qualityFactor: "Grado industrial. Soporta integración con generadores diésel y tiene vida útil superior a 15 años."
    },
    'seg102': {
      unitCost: "$2,450 USD", // Ajustado por estrés
      pvp: "$3,000 - $3,800 USD",
      profit: "$550 - $1,350 USD",
      marketInsight: "La solución de almacenamiento más robusta. Complemento indispensable para el inversor de 10kW.",
      qualityFactor: "Química LiFePO4 con 6000 ciclos. BMS inteligente que protege contra calor extremo."
    },
    'proultra': {
      unitCost: "$5,595 USD", // De la gráfica de estrés
      pvp: "$6,710 USD (Avg)",
      profit: "$1,115 USD",
      marketInsight: "Producto premium. La solución de respaldo más potente disponible actualmente.",
      qualityFactor: "Tecnología modular. Funcionamiento ultra-silencioso y diseño plug-and-play."
    },
    'deltapro3': {
      unitCost: "$1,761 USD", // De la gráfica de estrés
      pvp: "$3,000 USD (Avg)",
      profit: "$1,239 USD",
      marketInsight: "El campeón de la rentabilidad. El equipo favorito de las familias con alto presupuesto.",
      qualityFactor: "Carga 0-80% en 1 hora. Baterías LFP seguras y conmutación UPS < 10ms."
    }
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
            <Star size={14} fill="currentColor" /> Selección Elite Novelec
          </div>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter uppercase mb-6 leading-tight">
            Equipos <span className="gradient-text">Estrella</span> <br className="sm:hidden" /> del Contenedor
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-slate-400 mx-auto leading-relaxed italic">
            Márgenes de ganancia calculados bajo <strong>Prueba de Estrés</strong> (+20% Moneda, +10% Tasas).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {highlights.map((item) => {
            const market = marketData[item.id] || { unitCost: "Consultar", pvp: "Consultar", profit: "Alto", marketInsight: "Alta demanda", qualityFactor: "Alta calidad" };
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
                        <ShieldCheck size={10} /> Calidad Certificada
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">{item.modelName}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/50 shadow-inner group/pvp relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                      <div>
                        <div className="flex items-center gap-2 text-red-400 text-[10px] font-black uppercase tracking-widest mb-3">
                           Costo Real (Landed)
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest block">Máximo Proyectado</span>
                            <span className="text-xl font-black text-white">{market.unitCost}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-cyan-500 font-black uppercase tracking-widest block flex items-center gap-1">
                              <ShoppingBag size={10} /> Reventa Avg
                            </span>
                            <span className="text-xl font-black text-cyan-400">{market.pvp}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/20 shadow-inner group/profit flex flex-col justify-center min-h-[140px]">
                      <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">
                        <DollarSign size={14} /> Utilidad Neta Real
                      </div>
                      <div className="text-3xl font-black text-emerald-400">+{market.profit}</div>
                      <div className="text-[9px] text-emerald-500/60 font-bold uppercase tracking-tight mt-2 flex items-center gap-1">
                        <Check size={10} /> Ganancia neta operativa
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-700/30">
                      <h4 className={`text-[10px] font-black text-${accentColor}-400 uppercase tracking-widest mb-3 flex items-center gap-2`}>
                        <Globe size={14} /> Visión del Mercado
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {market.marketInsight}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Especificaciones Clave</h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {item.specs.extras?.slice(0, 4).map((extra, idx) => (
                                <li key={idx} className="flex items-start text-[11px] text-slate-400 leading-tight">
                                    <CheckCircle className={`h-3 w-3 text-${accentColor}-500 mr-2 mt-0.5 flex-shrink-0`} />
                                    {extra}
                                </li>
                            ))}
                        </ul>
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
