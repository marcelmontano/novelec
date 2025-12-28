
import React, { useState } from 'react';
import { TrendingUp, Target, Scale, Wallet, Calculator, Landmark, ArrowRight, Check, Share2, Info } from 'lucide-react';

/**
 * DATOS REALES AJUSTADOS (DIC 2025)
 * Cost: Incluye EUR -> USD (+20%) + Pago Exterior (+8%). Multiplicador total: 1.296x sobre base EUR.
 * Points: Datos reales extraídos del JSON de Revolico.
 */
const ROADMAP_DATA = [
  {
    id: 'e980',
    name: "EcoFlow E980-US",
    cost: 499, // Base ~385€
    avgStreet: 672, // Promedio real de puntos Revolico
    range: [595, 750], 
    profit: 173,
    roi: "34.6%",
    points: [680, 700, 750, 610, 630, 650, 720, 690, 730, 700, 650, 670, 640, 610, 595]
  },
  {
    id: 'delta2max',
    name: "Delta 2 Max",
    cost: 968, // Base ~747€
    avgStreet: 1235,
    range: [1100, 1500],
    profit: 267,
    roi: "27.5%",
    points: [1150, 1290, 1140, 1250, 1160, 1280, 1240, 1340, 1230, 1400, 1190, 1150, 1200, 1350, 1100]
  },
  {
    id: 'deltapro',
    name: "Delta Pro",
    cost: 1725, // Base ~1331€
    avgStreet: 2110,
    range: [1850, 2300],
    profit: 385,
    roi: "22.3%",
    points: [2180, 2300, 2220, 1900, 2120, 2200, 2150, 2140, 2000, 1930, 1850, 2100, 2250, 2120]
  },
  {
    id: 'deltapro3',
    name: "Delta Pro 3",
    cost: 1832, // Base ~1414€
    avgStreet: 3125,
    range: [2900, 3700],
    profit: 1293,
    roi: "70.5%",
    isStar: true,
    points: [3100, 3050, 3000, 3300, 2900, 3700, 3050, 2950, 3100, 3300]
  },
  {
    id: 'deltapro3eb',
    name: "Batería Extra Pro 3",
    cost: 1402, // Base ~1082€
    avgStreet: 2795,
    range: [2500, 2900],
    profit: 1393,
    roi: "99.3%",
    isStar: true,
    points: [2800, 2820, 2825, 2775, 2850, 2838, 2500, 2750, 2900, 2760]
  },
  {
    id: 'proultra',
    name: "Delta Pro Ultra",
    cost: 5822, // Base ~4493€
    avgStreet: 6710,
    range: [5200, 7500],
    profit: 888,
    isPremium: true,
    points: [6900, 6890, 7200, 7000, 6950, 6870, 7500, 6550, 6730, 6750, 6700, 5200, 5950, 6000, 6900]
  }
];

const FinancialRoadmapChart = () => {
  const maxPrice = 8500;

  return (
    <div className="w-full bg-slate-900/50 border border-slate-800 rounded-[3rem] p-6 sm:p-12 overflow-hidden shadow-2xl relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-slate-800 pb-8">
        <div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <TrendingUp className="text-emerald-400" /> Rentabilidad Landed
          </h3>
          <p className="text-slate-400 text-sm font-medium mt-2">Costo Total USD (inc. Conversión + Tasas) vs. Mercado Cuba</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-widest bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
           <div className="flex items-center gap-3 text-red-500">
              <div className="w-5 h-1 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div> 
              Costo Landed USD
           </div>
           <div className="flex items-center gap-3 text-cyan-400">
              <div className="w-5 h-5 border-l-2 border-r-2 border-cyan-500/50 bg-cyan-500/10"></div> 
              Rango Mercado
           </div>
           <div className="flex items-center gap-3 text-white">
              <div className="w-5 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div> 
              Promedio Revolico
           </div>
           <div className="flex items-center gap-3 text-white">
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]"></div> 
              Anuncios Reales
           </div>
        </div>
      </div>

      <div className="relative h-[600px] w-full mt-10 flex items-end justify-between gap-1 sm:gap-4 border-b border-slate-700 pb-6 pr-4 pl-12">
        {/* Eje Y */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] font-black text-slate-600 pointer-events-none">
          <span>$8,000</span>
          <span>$6,000</span>
          <span>$4,000</span>
          <span>$2,000</span>
          <span className="text-slate-800">$0</span>
        </div>

        {ROADMAP_DATA.map((item) => {
          const costPos = (item.cost / maxPrice) * 100;
          const avgPos = (item.avgStreet / maxPrice) * 100;
          const rangeMinPos = (item.range[0] / maxPrice) * 100;
          const rangeMaxPos = (item.range[1] / maxPrice) * 100;

          return (
            <div key={item.id} className="relative flex-1 flex flex-col items-center group h-full">
              {/* Puntos de Revolico - VISIBILIDAD MÁXIMA */}
              {item.points.map((price, pIdx) => (
                <div 
                  key={pIdx}
                  className="absolute w-2.5 h-2.5 bg-white border border-slate-900 rounded-full opacity-70 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(255,255,255,1)]"
                  style={{ 
                    bottom: `${(price / maxPrice) * 100}%`,
                    left: `calc(50% + ${(pIdx % 3 === 0 ? 0 : pIdx % 3 === 1 ? 1 : -1) * (Math.random() * 25)}px)`
                  }}
                ></div>
              ))}

              {/* Rango de Venta */}
              <div 
                className="absolute w-4 sm:w-12 bg-cyan-500/5 border-l-2 border-r-2 border-cyan-500/40 z-10"
                style={{ bottom: `${rangeMinPos}%`, height: `${rangeMaxPos - rangeMinPos}%` }}
              ></div>

              {/* Promedio Calle */}
              <div 
                className="absolute w-6 sm:w-20 h-1.5 bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center rounded-full"
                style={{ bottom: `${avgPos}%` }}
              ></div>

              {/* Costo Landed (Red Line) */}
              <div 
                className="absolute w-full h-1 bg-red-600 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                style={{ bottom: `${costPos}%` }}
              >
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-950/95 border border-red-500/40 rounded text-[9px] font-black text-red-400 whitespace-nowrap">
                   COSTO LANDED: ${item.cost}
                </div>
              </div>

              {/* Tag de Ganancia */}
              <div className="absolute z-30 px-3 py-2 bg-emerald-500 rounded-lg text-[11px] font-black text-white shadow-2xl transition-transform group-hover:scale-110"
                style={{ bottom: `${(costPos + avgPos) / 2}%`, left: 'calc(50% + 25px)' }}
              >
                +${item.profit}
              </div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="text-[8px] sm:text-[11px] font-black text-slate-500 uppercase tracking-tighter leading-none block group-hover:text-white transition-colors">
                  {item.name.replace('EcoFlow ', '')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="text-[11px] text-slate-500 font-bold max-w-lg italic leading-relaxed text-center lg:text-left">
            * <strong>Ajuste Financiero:</strong> Los costos mostrados ya absorben el +20% de conversión EUR-USD y el +8% de tasa bancaria exterior. El margen mostrado es utilidad neta operativa antes de comercialización local.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
             <div className="px-8 py-5 bg-emerald-500/10 border border-emerald-500/20 rounded-[1.5rem] text-center shadow-inner">
                <span className="block text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ROI Pro 3 (Landed)</span>
                <span className="text-3xl font-black text-white">99.3%</span>
             </div>
             <div className="px-8 py-5 bg-cyan-500/10 border border-cyan-500/20 rounded-[1.5rem] text-center shadow-inner">
                <span className="block text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-1">Margen Delta Pro 3</span>
                <span className="text-3xl font-black text-white">+$1,293</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { console.error(e); }
  };

  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <Calculator size={14} /> Ingeniería de Costos Novelec
          </div>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter mb-6 uppercase leading-[0.9]">
            Transparencia <br className="hidden sm:block" /> <span className="gradient-text">y Rentabilidad Real</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hemos ajustado el análisis para reflejar la realidad operativa: conversiones de moneda y costos transaccionales. Incluso con estos cargos, los números son inigualables.
          </p>
        </div>

        {/* Sección de "Handicaps" Financieros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2.5rem] flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Scale size={28} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-2">Diferencial de Moneda (EUR-USD)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Los precios base están en EUR. Para la venta en Cuba (USD), el análisis contempla un incremento del <strong>18% al 20%</strong> por tipo de cambio.
                    </p>
                </div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2.5rem] flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Landmark size={28} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-2">Costos Transaccionales</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        El flujo de pagos al exterior conlleva tasas bancarias de entre un <strong>6% y 10%</strong>. Estos costos ya están absorbidos en nuestro cálculo de retorno neto.
                    </p>
                </div>
            </div>
        </div>

        <div className="mb-20 animate-fade-in-up">
          <FinancialRoadmapChart />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="px-10 py-8 bg-slate-950/50 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                   <Target className="text-cyan-400" /> Resumen Landed por Unidad
                </h4>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                    Precios Finales USD
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-900/50">
                            <th className="px-10 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Costo Landed USD</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Venta Promedio</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Rango (Min-Max)</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Ganancia Neta</th>
                            <th className="px-10 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">ROI (%)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {ROADMAP_DATA.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-800/30 transition-colors group">
                                <td className="px-10 py-6">
                                    <span className="text-base font-bold text-white">{item.name}</span>
                                </td>
                                <td className="px-6 py-6 text-sm font-mono text-red-400 font-bold">${item.cost.toLocaleString()}</td>
                                <td className="px-6 py-6 text-sm font-black text-white">${item.avgStreet.toLocaleString()}</td>
                                <td className="px-6 py-6 text-[10px] font-mono text-slate-500">
                                    ${item.range[0].toLocaleString()} - ${item.range[1].toLocaleString()}
                                </td>
                                <td className="px-6 py-6 text-sm font-black text-emerald-400">
                                   <div className="flex items-center gap-1">
                                      <TrendingUp size={14} /> +${item.profit.toLocaleString()}
                                   </div>
                                </td>
                                <td className="px-10 py-6 text-right font-black text-cyan-400">{item.roi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Banner de Negociación */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-emerald-500/30 rounded-[3rem] p-10 sm:p-14 relative overflow-hidden group shadow-3xl text-center">
            <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-6">
                    ¿Es usted un <span className="text-emerald-400">Comprador Serio</span>?
                </h3>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Entendemos la complejidad de los costos operativos. Estamos abiertos a <strong>negociar términos especiales</strong> para facilitar su decisión y maximizar su inversión.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a 
                        href={`https://wa.me/5358183649?text=Hola,%20soy%20un%20comprador%20serio%20interesado%20en%20el%20contenedor.%20Me%20gustaría%20negociar%20los%20términos%20finales%20de%20inversión.`}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                    >
                        Abrir Negociación Directa <ArrowRight size={24} />
                    </a>
                </div>
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-5 pointer-events-none">
                <Calculator size={300} />
            </div>
        </div>
      </div>
    </section>
  );
};
