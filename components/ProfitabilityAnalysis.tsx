
import React from 'react';
import { TrendingUp, Target, Scale, Calculator, Landmark, ArrowRight, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

/**
 * DATOS DE LA PRUEBA DE ESTRÉS
 * Cost: Incluye +20% (Cambio Moneda) y +10% (Transferencia).
 */
const ROADMAP_DATA = [
  {
    id: 'e980',
    name: "EcoFlow E980",
    cost: 622,
    avgStreet: 672,
    range: [600, 750], 
    profit: 50,
    roi: "8.0%",
    points: [680, 700, 750, 610, 630, 650, 720, 690, 730, 700, 650, 670, 640, 610, 600]
  },
  {
    id: 'delta2max',
    name: "Delta 2 Max",
    cost: 932,
    avgStreet: 1250,
    range: [1100, 1500],
    profit: 318,
    roi: "34.1%",
    points: [1150, 1290, 1140, 1250, 1160, 1280, 1240, 1340, 1230, 1400, 1190, 1150, 1200, 1350, 1100]
  },
  {
    id: 'deltapro',
    name: "Delta Pro",
    cost: 1658,
    avgStreet: 2000,
    range: [1850, 2300],
    profit: 342,
    roi: "20.6%",
    points: [2180, 2300, 2220, 1900, 2120, 2200, 2150, 2140, 2000, 1930, 1850, 2100, 2250, 2120]
  },
  {
    id: 'deltapro3',
    name: "Delta Pro 3",
    cost: 1761,
    avgStreet: 3000,
    range: [2900, 3700],
    profit: 1239,
    roi: "70.4%",
    points: [3100, 3050, 3000, 3300, 2900, 3700, 3050, 2950, 3100, 3300]
  },
  {
    id: 'deltapro3eb',
    name: "Extra Pro 3",
    cost: 1347,
    avgStreet: 2500,
    range: [2500, 2900],
    profit: 1153,
    roi: "85.6%",
    points: [2800, 2820, 2825, 2775, 2850, 2838, 2500, 2750, 2900, 2760]
  },
  {
    id: 'proultra',
    name: "Pro Ultra",
    cost: 5595,
    avgStreet: 6710,
    range: [5200, 7500],
    profit: 1115,
    roi: "19.9%",
    points: [6900, 6890, 7200, 7000, 6950, 6870, 7500, 6550, 6730, 6750, 6700, 5200, 5950, 6000, 6900]
  }
];

const FinancialRoadmapChart = () => {
  const maxPrice = 8500;

  return (
    <div className="w-full bg-slate-900/50 border border-slate-800 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-12 overflow-hidden shadow-2xl relative">
      {/* Aviso de Stress Test */}
      <div className="absolute top-28 sm:top-40 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none w-full px-4">
          <div className="bg-red-600/10 border border-red-500/30 backdrop-blur-md p-3 sm:p-4 rounded-2xl max-w-[280px] sm:max-w-sm mx-auto shadow-xl">
              <p className="text-red-500 text-[8px] sm:text-[10px] font-black uppercase tracking-tighter leading-tight italic">
                ANÁLISIS DE ESTRÉS: Incluye +20% divisa y +10% transferencia.
              </p>
          </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 gap-6 border-b border-slate-800 pb-8">
        <div>
          <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <TrendingUp className="text-emerald-400" /> Rentabilidad Landed
          </h3>
          <p className="text-slate-400 text-[10px] sm:text-sm font-medium mt-2 italic uppercase tracking-widest">Costo en Cuba vs. Precio de Mercado</p>
        </div>
        
        {/* Leyenda */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[7px] sm:text-[9px] font-black uppercase tracking-widest bg-slate-950/50 p-4 sm:p-6 rounded-2xl border border-slate-800">
           <div className="flex items-center gap-2 text-red-500">
              <div className="w-3 sm:w-5 h-1 bg-red-500 rounded-full"></div> 
              Costo Real
           </div>
           <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-3 sm:w-5 h-3 border-l-2 border-r-2 border-cyan-500/30"></div> 
              Rango Venta
           </div>
           <div className="flex items-center gap-2 text-white">
              <div className="w-3 sm:w-5 h-0.5 bg-white"></div> 
              Avg. Mercado
           </div>
           <div className="flex items-center gap-2 text-slate-500">
              <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-white/20 rounded-full"></div> 
              Muestras
           </div>
        </div>
      </div>

      {/* Gráfica Principal */}
      <div className="relative h-[450px] sm:h-[600px] w-full mt-10 flex items-end justify-between gap-1 sm:gap-4 border-b border-slate-700 pb-12 pr-2 pl-10 sm:pl-16">
        {/* Eje Y */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] sm:text-[10px] font-black text-slate-700 pointer-events-none">
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
              {/* Puntos de dispersión (Muestras de Revolico/FB) */}
              <div className="absolute inset-x-0 h-full pointer-events-none">
                {item.points.map((price, pIdx) => (
                  <div 
                    key={pIdx}
                    className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-white/10 rounded-full z-0"
                    style={{ 
                      bottom: `${(price / maxPrice) * 100}%`,
                      left: `calc(50% + ${(pIdx % 3 - 1) * (Math.random() * 10)}px)`
                    }}
                  ></div>
                ))}
              </div>

              {/* Rango de Venta (Área Cyan) */}
              <div 
                className="absolute w-2 sm:w-16 bg-cyan-500/5 border-l border-r border-cyan-500/20 z-10"
                style={{ bottom: `${rangeMinPos}%`, height: `${rangeMaxPos - rangeMinPos}%` }}
              ></div>

              {/* Promedio de Mercado (Línea Blanca) */}
              <div 
                className="absolute w-full sm:w-24 h-0.5 sm:h-1 bg-white z-30 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                style={{ bottom: `${avgPos}%` }}
              ></div>

              {/* Costo Real Novelec (Línea Roja) */}
              <div 
                className="absolute w-full sm:w-24 h-0.5 sm:h-1.5 bg-red-600 z-20"
                style={{ bottom: `${costPos}%` }}
              >
                 <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-red-950 border border-red-500/50 rounded text-[6px] sm:text-[9px] font-black text-red-400 whitespace-nowrap uppercase tracking-tighter shadow-lg">
                   COSTO: ${item.cost}
                </div>
              </div>

              {/* Burbuja de Ganancia Neta */}
              {item.profit > 100 && (
                <div className="absolute z-40 px-1 sm:px-3 py-0.5 sm:py-1.5 bg-emerald-600 rounded sm:rounded-xl text-[7px] sm:text-[11px] font-black text-white shadow-2xl border border-emerald-400/30 transform -translate-x-1/2 left-1/2 group-hover:scale-110 transition-transform"
                    style={{ bottom: `${(costPos + avgPos) / 2}%` }}
                >
                    +${item.profit}
                </div>
              )}

              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="text-[6px] sm:text-[11px] font-black text-slate-500 uppercase tracking-tighter leading-none block truncate px-1">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Guía de Interpretación */}
      <div className="mt-20 sm:mt-24 pt-10 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-slate-950/50 p-6 rounded-3xl border border-slate-800">
           <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <Info size={16} className="text-cyan-400" /> ¿Qué significa este gráfico?
           </h4>
           <p className="text-[11px] text-slate-400 leading-relaxed font-medium italic">
             Este gráfico compara el <strong>Costo Real Landed</strong> (lo que le cuesta a usted tener el equipo en Cuba listo para vender) contra el <strong>Precio de Mercado actual</strong> en canales como Revolico y Facebook.
           </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="flex gap-4 items-start p-4 bg-red-500/5 rounded-2xl border border-red-500/10">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                 <AlertTriangle size={18} />
              </div>
              <div>
                 <span className="block text-[10px] font-black text-white uppercase mb-1">Costo Real (Línea Roja)</span>
                 <p className="text-[9px] text-slate-500 font-bold leading-tight">Incluye el precio de fábrica + 20% por cambio de divisa + 10% por costos de transferencia internacional.</p>
              </div>
           </div>
           <div className="flex gap-4 items-start p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                 <Target size={18} />
              </div>
              <div>
                 <span className="block text-[10px] font-black text-white uppercase mb-1">Margen Neto (Burbuja Verde)</span>
                 <p className="text-[9px] text-slate-500 font-bold leading-tight">Es la ganancia limpia por unidad vendida al precio promedio del mercado cubano hoy.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6">
            <AlertTriangle size={14} /> Análisis de Estrés Financiero Landed
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.9]">
            Rentabilidad en <br className="hidden sm:block" /> <span className="text-red-500">Escenarios Críticos</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Calculamos su ROI asumiendo los costos operativos más altos del mercado (divisa y transferencias) para garantizar su seguridad financiera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-[2rem] flex gap-4 sm:gap-6 items-start shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Scale size={24} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-[10px] sm:text-sm tracking-widest mb-2">Ajuste Divisa (+20%)</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-tight">Consideramos la peor tasa de cambio EUR/USD para que su inversión esté protegida ante fluctuaciones.</p>
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-[2rem] flex gap-4 sm:gap-6 items-start shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Landmark size={24} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-[10px] sm:text-sm tracking-widest mb-2">Comisión Exterior (+10%)</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-tight">Incluimos el costo máximo de transferencia bancaria internacional. El ROI que ve es neto de estos gastos.</p>
                </div>
            </div>
        </div>

        <FinancialRoadmapChart />

        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="px-6 sm:px-10 py-6 sm:py-10 bg-slate-950/50 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Calculator size={24} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">Resumen de Margen por Unidad</h4>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Oportunidades de Alta Rotación</span>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                    <thead>
                        <tr className="bg-slate-900/50">
                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo de Equipo</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Costo Landed (Stress)</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. Revolico</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Ganancia Neta</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">ROI (%)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {ROADMAP_DATA.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-800/30 transition-colors group">
                                <td className="px-8 py-6">
                                    <span className="text-sm font-black text-white uppercase tracking-tight">{item.name}</span>
                                </td>
                                <td className="px-6 py-6 text-sm font-mono text-red-400 font-bold">${item.cost.toLocaleString()}</td>
                                <td className="px-6 py-6 text-sm font-black text-white">${item.avgStreet.toLocaleString()}</td>
                                <td className="px-6 py-6">
                                   <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-black text-xs border border-emerald-500/20">
                                      +${item.profit.toLocaleString()}
                                   </span>
                                </td>
                                <td className="px-8 py-6 text-right font-black text-cyan-400 text-lg">{item.roi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border-2 border-emerald-500/30 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-20 text-center relative overflow-hidden shadow-3xl">
            {/* Decoración */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-10">
                   <CheckCircle2 size={16} /> Verificación de Fondos Exitosa
                </div>
                <h3 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                    ¿Listo para cerrar <br className="hidden sm:block" /> su <span className="text-emerald-400">Contenedor</span>?
                </h3>
                <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    Incluso bajo un análisis de estrés financiero, los márgenes son los más competitivos del sector energético en Cuba. Asegure su lote hoy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                      href="https://wa.me/5358183649?text=Hola%20Novelec,%20he%20visto%20el%20análisis%20de%20rentabilidad%20landed%20y%20quiero%20proceder%20con%20la%20negociación%20de%20un%20contenedor."
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                  >
                      Cerrar Negociación <ArrowRight size={24} />
                  </a>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pago Exterior Bancario / USDT</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
