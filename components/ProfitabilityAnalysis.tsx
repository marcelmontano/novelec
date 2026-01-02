
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
    id: 'd2max',
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
    id: 'dp-ultra-inv',
    name: "Pro Ultra Inv",
    cost: 5595,
    avgStreet: 6710,
    range: [5200, 7500],
    profit: 1115,
    roi: "19.9%",
    points: [6900, 6890, 7200, 7000, 6950, 6870, 7500, 6550, 6730, 6750, 6700, 5200, 5950, 6000, 6900]
  },
  {
    id: 'sun10k',
    name: "Deye SUN-10K",
    cost: 1350,
    avgStreet: 2200,
    range: [1900, 2600],
    profit: 850,
    roi: "62.9%",
    points: [2100, 2300, 2000, 2500, 2200, 2450, 2150]
  },
  {
    id: 'seg102',
    name: "Deye 10.2kWh",
    cost: 1850,
    avgStreet: 3200,
    range: [3000, 4000],
    profit: 1350,
    roi: "72.9%",
    points: [3100, 3400, 3200, 3800, 3500, 3100]
  }
];

const FinancialRoadmapChart = () => {
  const maxPrice = 8500;

  return (
    <div className="w-full bg-slate-900/50 border border-slate-800 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-12 overflow-hidden shadow-2xl relative">
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
          <p className="text-slate-400 text-[10px] sm:text-sm font-medium mt-2 italic uppercase tracking-widest">EcoFlow & Deye: Costo en Cuba vs. Mercado</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[7px] sm:text-[9px] font-black uppercase tracking-widest bg-slate-950/50 p-4 sm:p-6 rounded-2xl border border-slate-800">
           <div className="flex items-center gap-2 text-red-500">
              <div className="w-3 sm:w-5 h-1 bg-red-500 rounded-full"></div> Costo Real
           </div>
           <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-3 sm:w-5 h-3 border-l-2 border-r-2 border-cyan-500/30"></div> Rango Venta
           </div>
           <div className="flex items-center gap-2 text-white">
              <div className="w-3 sm:w-5 h-0.5 bg-white"></div> Avg. Mercado
           </div>
           <div className="flex items-center gap-2 text-slate-500">
              <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-white/20 rounded-full"></div> Muestras
           </div>
        </div>
      </div>

      <div className="relative h-[450px] sm:h-[600px] w-full mt-10 flex items-end justify-between gap-1 sm:gap-4 border-b border-slate-700 pb-12 pr-2 pl-10 sm:pl-16">
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
              <div className="absolute inset-x-0 h-full pointer-events-none">
                {item.points.map((price, pIdx) => (
                  <div key={pIdx} className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-white/10 rounded-full z-0" style={{ bottom: `${(price / maxPrice) * 100}%`, left: `calc(50% + ${(pIdx % 3 - 1) * (Math.random() * 10)}px)` }}></div>
                ))}
              </div>
              <div className="absolute w-2 sm:w-16 bg-cyan-500/5 border-l border-r border-cyan-500/20 z-10" style={{ bottom: `${rangeMinPos}%`, height: `${rangeMaxPos - rangeMinPos}%` }}></div>
              <div className="absolute w-full sm:w-24 h-0.5 sm:h-1 bg-white z-30 shadow-[0_0_15px_rgba(255,255,255,0.4)]" style={{ bottom: `${avgPos}%` }}></div>
              <div className="absolute w-full sm:w-24 h-0.5 sm:h-1.5 bg-red-600 z-20" style={{ bottom: `${costPos}%` }}>
                 <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-red-950 border border-red-500/50 rounded text-[6px] sm:text-[9px] font-black text-red-400 whitespace-nowrap uppercase tracking-tighter shadow-lg">COSTO: ${item.cost}</div>
              </div>
              {item.profit > 40 && (
                <div className="absolute z-40 px-1 sm:px-3 py-0.5 sm:py-1.5 bg-emerald-600 rounded sm:rounded-xl text-[7px] sm:text-[11px] font-black text-white shadow-2xl border border-emerald-400/30 transform -translate-x-1/2 left-1/2 group-hover:scale-110 transition-transform" style={{ bottom: `${(costPos + avgPos) / 2}%` }}>
                    +${item.profit}
                </div>
              )}
              <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="text-[6px] sm:text-[11px] font-black text-slate-500 uppercase tracking-tighter leading-none block truncate px-1">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-20 sm:mt-24 pt-10 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-slate-950/50 p-6 rounded-3xl border border-slate-800">
           <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2"><Info size={16} className="text-cyan-400" /> ¿Qué significa este gráfico?</h4>
           <p className="text-[11px] text-slate-400 leading-relaxed font-medium italic">Compara el <strong>Costo Real Landed</strong> (incluyendo logística crítica) contra el <strong>Precio de Mercado</strong> en Cuba. Ideal para cálculo de retorno de inversión por contenedor.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="flex gap-4 items-start p-4 bg-red-500/5 rounded-2xl border border-red-500/10">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 shrink-0"><AlertTriangle size={18} /></div>
              <div>
                 <span className="block text-[10px] font-black text-white uppercase mb-1">Costo Real (Línea Roja)</span>
                 <p className="text-[9px] text-slate-500 font-bold leading-tight">Incluye fábrica + 20% divisa + 10% transferencia bancaria.</p>
              </div>
           </div>
           <div className="flex gap-4 items-start p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0"><Target size={18} /></div>
              <div>
                 <span className="block text-[10px] font-black text-white uppercase mb-1">Margen Neto (Burbuja Verde)</span>
                 <p className="text-[9px] text-slate-500 font-bold leading-tight">Ganancia limpia por unidad tras todos los gastos de importación.</p>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6"><AlertTriangle size={14} /> Análisis de Estrés Financiero Landed</div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.9]">Rentabilidad en <br className="hidden sm:block" /> <span className="text-red-500">Escenarios Críticos</span></h2>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">Análisis de rentabilidad neto para los equipos de ambos contenedores (EcoFlow & Deye).</p>
        </div>
        <FinancialRoadmapChart />
      </div>
    </section>
  );
};
