
import React from 'react';
import { TrendingUp, Target, Scale, Calculator, Landmark, ArrowRight, AlertTriangle } from 'lucide-react';

/**
 * DATOS DE LA PRUEBA DE ESTRÉS (SEGÚN IMAGEN)
 * Cost: Incluye +20% (Cambio Moneda) y +10% (Transferencia).
 */
const ROADMAP_DATA = [
  {
    id: 'e980',
    name: "EcoFlow E980",
    cost: 622,
    avgStreet: 672,
    profit: 50,
    roi: "8.0%",
  },
  {
    id: 'delta2max',
    name: "Delta 2 Max",
    cost: 932,
    avgStreet: 1250,
    profit: 318,
    roi: "34.1%",
  },
  {
    id: 'deltapro',
    name: "Delta Pro",
    cost: 1658,
    avgStreet: 2000,
    profit: 342,
    roi: "20.6%",
  },
  {
    id: 'deltapro3',
    name: "Delta Pro 3",
    cost: 1761,
    avgStreet: 3000,
    profit: 1239,
    roi: "70.4%",
  },
  {
    id: 'deltapro3eb',
    name: "Extra Pro 3",
    cost: 1347,
    avgStreet: 2500,
    profit: 1153,
    roi: "85.6%",
  },
  {
    id: 'proultra',
    name: "Pro Ultra",
    cost: 5595,
    avgStreet: 6710,
    profit: 1115,
    roi: "19.9%",
  }
];

const FinancialRoadmapChart = () => {
  const maxPrice = 8000;

  return (
    <div className="w-full bg-slate-900/50 border border-slate-800 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-12 overflow-hidden shadow-2xl relative">
      <div className="absolute top-24 sm:top-40 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none w-full px-4">
          <div className="bg-red-600/10 border border-red-500/30 backdrop-blur-md p-3 sm:p-4 rounded-2xl max-w-[280px] sm:max-w-sm mx-auto">
              <p className="text-red-500 text-[8px] sm:text-[10px] font-black uppercase tracking-tighter leading-tight italic">
                NOTA: Costo Real incluye +20% divisa y +10% transferencia.
              </p>
          </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-16 gap-6 border-b border-slate-800 pb-8">
        <div>
          <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <TrendingUp className="text-emerald-400" /> Rentabilidad Landed
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm font-medium mt-2 italic">Basado en Stress Test B2B</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[8px] sm:text-[9px] font-black uppercase tracking-widest bg-slate-950/50 p-3 sm:p-6 rounded-2xl border border-slate-800">
           <div className="flex items-center gap-2 text-red-500">
              <div className="w-3 sm:w-5 h-1 bg-red-500 rounded-full"></div> 
              Costo
           </div>
           <div className="flex items-center gap-2 text-white">
              <div className="w-3 sm:w-5 h-0.5 bg-white"></div> 
              Promedio
           </div>
        </div>
      </div>

      <div className="relative h-[400px] sm:h-[600px] w-full mt-10 flex items-end justify-between gap-2 sm:gap-4 border-b border-slate-700 pb-10 pr-2 pl-10 sm:pl-16">
        {/* Eje Y */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] sm:text-[10px] font-black text-slate-600 pointer-events-none">
          <span>$8,000</span>
          <span>$6,000</span>
          <span>$4,000</span>
          <span>$2,000</span>
          <span className="text-slate-800">$0</span>
        </div>

        {ROADMAP_DATA.map((item) => {
          const costPos = (item.cost / maxPrice) * 100;
          const avgPos = (item.avgStreet / maxPrice) * 100;

          return (
            <div key={item.id} className="relative flex-1 flex flex-col items-center group h-full">
              {/* Promedio (Línea Blanca) */}
              <div 
                className="absolute w-full sm:w-20 h-0.5 sm:h-1 bg-white z-20 shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                style={{ bottom: `${avgPos}%` }}
              ></div>

              {/* Costo Real (Línea Roja) */}
              <div 
                className="absolute w-full sm:w-20 h-0.5 sm:h-1 bg-red-600 z-10"
                style={{ bottom: `${costPos}%` }}
              >
                 <div className="absolute -bottom-5 sm:-bottom-8 left-1/2 -translate-x-1/2 px-1 sm:px-2 py-0.5 bg-red-950 border border-red-500/50 rounded text-[6px] sm:text-[9px] font-black text-red-400 whitespace-nowrap uppercase">
                   ${item.cost}
                </div>
              </div>

              {/* Burbuja de Ganancia */}
              {item.profit > 100 && (
                <div className="absolute z-30 px-1 sm:px-3 py-0.5 sm:py-1.5 bg-emerald-600 rounded sm:rounded-lg text-[6px] sm:text-[10px] font-black text-white shadow-xl whitespace-nowrap"
                    style={{ bottom: `${(costPos + avgPos) / 2 + 2}%`, left: '50%' }}
                >
                    +${item.profit}
                </div>
              )}

              <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="text-[6px] sm:text-[11px] font-black text-slate-500 uppercase tracking-tighter leading-none block truncate">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-[8px] sm:text-[11px] text-slate-500 font-bold max-w-sm italic text-center sm:text-left">
            * Análisis de rentabilidad considerando todos los costos de importación y cambio de divisa.
        </div>
        <div className="flex gap-4">
             <div className="px-4 sm:px-8 py-3 sm:py-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                <span className="block text-[8px] sm:text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ROI Pro 3</span>
                <span className="text-lg sm:text-3xl font-black text-white">70.4%</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6">
            <AlertTriangle size={14} /> Prueba de Estrés Financiero
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.9]">
            Rentabilidad con <br className="hidden sm:block" /> <span className="text-red-500">Costos Máximos</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Pago exclusivo mediante <span className="text-white font-bold">transferencia bancaria en el exterior</span> o USDT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-[2rem] flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Scale size={24} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-[10px] sm:text-sm tracking-widest mb-2">Ajuste Divisa (+20%)</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">Contemplamos la fluctuación EUR/USD para asegurar su margen.</p>
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-[2rem] flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Landmark size={24} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase text-[10px] sm:text-sm tracking-widest mb-2">Pago Exterior</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">Liquidación mediante transferencia internacional para seguridad jurídica.</p>
                </div>
            </div>
        </div>

        <FinancialRoadmapChart />

        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-emerald-500/30 rounded-[2.5rem] p-8 sm:p-14 text-center">
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-6">
                Inicie su <span className="text-emerald-400">Negociación B2B</span>
            </h3>
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Garantizamos stock físico en Tradex y transparencia total en la transferencia bancaria internacional.
            </p>
            <a 
                href="https://wa.me/5358183649?text=Hola,%20deseo%20información%20sobre%20el%20pago%20por%20transferencia%20en%20el%20exterior."
                className="inline-flex bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 items-center gap-3"
            >
                Abrir Negociación <ArrowRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
};
