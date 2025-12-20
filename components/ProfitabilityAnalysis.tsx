import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, DollarSign, ArrowUpRight, Info, Scale, CheckCircle2 } from 'lucide-react';

const ECOFLOW_PROFIT = [
  { model: "EcoFlow E980-US", qty: 40, min: 600, max: 980 },
  { model: "EcoFlow DELTA 2 Max", qty: 20, min: 1100, max: 2000 },
  { model: "EcoFlow DELTA Pro", qty: 20, min: 2800, max: 3000 },
  { model: "Delta Pro 3", qty: 8, min: 2800, max: 3000 },
  { model: "Delta Pro 3 Extra Battery", qty: 4, min: 2250, max: 2838 },
  { model: "EcoFlow Delta Pro Ultra (Inv)", qty: 8, min: 5100, max: 5100 },
  { model: "Delta Pro Ultra Battery", qty: 20, min: 6000, max: 6730 },
];

const DEYE_PROFIT = [
  { model: "Deye SUN-10K Inverter", qty: 36, min: 2500, max: 2900 },
  { model: "Deye SE-G5.1 Pro-B Battery", qty: 40, min: 1500, max: 2000 },
  { model: "Deye SE-G10.2 Battery", qty: 20, min: 2200, max: 2800 },
];

const METRICS = {
  ecoflow: {
    cost: 135000,
    minRev: 223880,
    maxRev: 352428,
    avgRev: 288000,
    minProfit: 71010,
    maxProfit: 189234,
    avgProfit: 130000,
    minRoi: "52.6%",
    maxRoi: "140.2%",
    avgRoi: "94.6%",
    units: 120,
    valUnitMin: 583
  },
  deye: {
    cost: 128600,
    minRev: 262900,
    maxRev: 347400,
    avgRev: 305150,
    minProfit: 116400,
    maxProfit: 169800,
    avgProfit: 143100,
    minRoi: "90.5%",
    maxRoi: "132.0%",
    avgRoi: "111.3%",
    units: 96,
    valUnitMin: 586
  }
};

export const ProfitabilityAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  
  const currentData = activeTab === 'ecoflow' ? ECOFLOW_PROFIT : DEYE_PROFIT;
  const currentMetrics = METRICS[activeTab];

  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-4">
            <TrendingUp size={16} /> Oportunidad de Inversión Analizada
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Análisis de <span className="gradient-text">Rentabilidad Real</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proyecciones basadas en precios reales de mercado en Cuba (Revolico & Facebook).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900 p-1.5 rounded-2xl inline-flex border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveTab('ecoflow')}
              className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${
                activeTab === 'ecoflow' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Análisis EcoFlow
            </button>
            <button
              onClick={() => setActiveTab('deye')}
              className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${
                activeTab === 'deye' ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-900/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Análisis Deye
            </button>
          </div>
        </div>

        {/* Selected Container ROI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl transition-all hover:border-slate-700 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Escenario Mínimo</p>
                <p className="text-3xl font-black text-white">{currentMetrics.minRoi} ROI</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-sm font-medium">Ingresos</span>
                <span className="text-white font-bold">${currentMetrics.minRev.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-medium">Ganancia Neta</span>
                <span className="text-emerald-400 font-bold">~ €{currentMetrics.minProfit.toLocaleString()} EUR</span>
              </div>
            </div>
          </div>

          <div className={`bg-slate-900 border-2 rounded-3xl p-8 shadow-2xl transform scale-105 relative group transition-colors ${activeTab === 'ecoflow' ? 'border-cyan-500 shadow-cyan-500/10' : 'border-yellow-500 shadow-yellow-500/10'}`}>
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg ${activeTab === 'ecoflow' ? 'bg-cyan-500' : 'bg-yellow-500'}`}>
              Escenario Probable
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                <PieChart size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Retorno Promedio</p>
                <p className="text-3xl font-black text-white">{currentMetrics.avgRoi} ROI</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-sm font-medium">Ingresos</span>
                <span className="text-white font-bold">${currentMetrics.avgRev.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-medium">Ganancia Neta</span>
                <span className="text-emerald-400 font-bold">~ €{currentMetrics.avgProfit.toLocaleString()} EUR</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl transition-all hover:border-slate-700 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Escenario Máximo</p>
                <p className="text-3xl font-black text-white">{currentMetrics.maxRoi} ROI</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-sm font-medium">Ingresos</span>
                <span className="text-white font-bold">${currentMetrics.maxRev.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-medium">Ganancia Neta</span>
                <span className="text-emerald-400 font-bold">~ €{currentMetrics.maxProfit.toLocaleString()} EUR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed List for Active Container */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden mb-20 shadow-2xl backdrop-blur-sm">
          <div className="px-8 py-6 border-b border-slate-800 bg-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-tighter">
              <DollarSign size={20} className={activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'} /> 
              Composición de Ingresos {activeTab.toUpperCase()}
            </h3>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-slate-800 px-4 py-1 rounded-full border border-slate-700">Valores Unitarios en USD</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/50">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Cant</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Precio Min</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Precio Max</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Total Min</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Total Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {currentData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-5 text-sm font-bold text-white">{item.model}</td>
                    <td className="px-8 py-5 text-sm font-black text-slate-400 text-center">x{item.qty}</td>
                    <td className="px-8 py-5 text-sm text-slate-400 text-center">${item.min.toLocaleString()}</td>
                    <td className="px-8 py-5 text-sm text-slate-400 text-center">${item.max.toLocaleString()}</td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-300 text-right">${(item.min * item.qty).toLocaleString()}</td>
                    <td className={`px-8 py-5 text-sm font-black text-right ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>${(item.max * item.qty).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* COMPARISON VERSUS TABLE */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-slate-800 flex-grow"></div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                    <Scale className="text-emerald-400" /> Comparativa: EcoFlow vs Deye
                </h3>
                <div className="h-px bg-slate-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="overflow-hidden border border-slate-800 rounded-3xl bg-slate-900 shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50">
                                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Métrica</th>
                                <th className="px-6 py-5 text-xs font-black text-cyan-400 uppercase tracking-widest">EcoFlow</th>
                                <th className="px-6 py-5 text-xs font-black text-yellow-500 uppercase tracking-widest">Deye</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {[
                                { m: "Ganancia Mínima", e: "€71,010", d: "€116,400" },
                                { m: "Ganancia Máxima", e: "€189,234", d: "€169,800" },
                                { m: "Retorno Mínimo", e: "52.6%", d: "90.5%" },
                                { m: "Retorno Máximo", e: "140.2%", d: "132%" },
                                { m: "Unidades Totales", e: "120", d: "96" },
                                { m: "Valor p/u (mín.)", e: "€583", d: "€586" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-800/20">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-400">{row.m}</td>
                                    <td className="px-6 py-4 text-sm font-black text-white">{row.e}</td>
                                    <td className="px-6 py-4 text-sm font-black text-white">{row.d}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="space-y-8">
                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
                        <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tighter">¿Cuál elegir?</h4>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={24} />
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    <strong>Deye (€128,600):</strong> Ofrece mayor estabilidad. Su ganancia mínima es un 64% superior, garantizando un ROI del 90%+ incluso en el peor escenario.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={24} />
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    <strong>EcoFlow (€135,000):</strong> Mayor potencial de escala. Su techo de ganancia es más alto (€189k) debido a la exclusividad de los sistemas Ultra en el mercado retail.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-emerald-500/10 p-8 rounded-3xl border border-emerald-500/20">
                        <p className="text-emerald-400 font-black text-xl mb-2">Conclusión del Analista</p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Ambas son inversiones de bajo riesgo dada la demanda energética en Cuba. El contenedor Deye es ideal para inversores que buscan seguridad y rotación constante, mientras que EcoFlow es perfecto para quienes buscan dominar el segmento premium de alto margen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};