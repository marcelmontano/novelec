
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Scale, 
  CheckCircle2, 
  Share2, 
  Check, 
  FileText, 
  DollarSign, 
  ShieldAlert,
  BarChart3,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { STRATEGIC_DOCS, METRICS } from '../constants';

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

/**
 * Gráfico visual comparativo de barras de alto impacto
 */
const ROIVisualChart = () => {
  const maxRevenue = Math.max(
    METRICS.ecoflow.cost + METRICS.ecoflow.maxProfit,
    METRICS.deye.cost + METRICS.deye.maxProfit
  );
  
  const ComparisonBar = ({ brand }: { brand: 'ecoflow' | 'deye' }) => {
    const data = METRICS[brand];
    const isEco = brand === 'ecoflow';
    const accentColor = isEco ? 'bg-cyan-500' : 'bg-yellow-500';
    const textColor = isEco ? 'text-cyan-400' : 'text-yellow-500';
    const shadowColor = isEco ? 'shadow-cyan-500/20' : 'shadow-yellow-500/20';

    return (
      <div className="flex-1 min-w-0 bg-slate-900/60 p-6 sm:p-8 rounded-[2rem] border border-slate-800 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
        <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 ${accentColor}`}></div>
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${textColor}`}>Contenedor {data.label}</div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">ROI {data.avgRoi}</h4>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-slate-500 uppercase block mb-1 tracking-widest">Inversión</span>
            <span className="text-lg sm:text-xl font-black text-white">€{data.cost.toLocaleString()}</span>
          </div>
        </div>

        {/* Bar Stack */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">
              <span>Capital Base</span>
              <span className="text-emerald-400">Ganancia Media</span>
            </div>
            <div className="h-10 w-full bg-slate-800/50 rounded-2xl overflow-hidden flex border border-slate-700/30 p-1">
              <div 
                className="bg-slate-700 h-full rounded-xl transition-all duration-1000 ease-out" 
                style={{ width: `${(data.cost / (data.cost + data.avgProfit)) * 100}%` }}
              ></div>
              <div 
                className={`${accentColor} h-full rounded-xl ml-1 transition-all duration-1000 delay-300 ease-out shadow-lg ${shadowColor}`} 
                style={{ width: `${(data.avgProfit / (data.cost + data.avgProfit)) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Máximo', val: data.maxProfit, roi: data.maxRoi, op: 100 },
              { label: 'Promedio', val: data.avgProfit, roi: data.avgRoi, op: 70 },
              { label: 'Mínimo', val: data.minProfit, roi: data.minRoi, op: 40 },
            ].map((s, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between items-baseline px-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                  <span className={`text-[10px] font-black ${i === 0 ? 'text-emerald-400' : 'text-slate-500'}`}>+{s.roi}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`${accentColor} h-full transition-all duration-1000 ease-out`} 
                    style={{ width: `${(s.val / data.maxProfit) * 100}%`, opacity: s.op / 100 }}
                  ></div>
                </div>
                <div className="text-right text-[11px] font-black text-white/80">€{s.val.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-16">
      <ComparisonBar brand="deye" />
      <ComparisonBar brand="ecoflow" />
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  const [copied, setCopied] = useState(false);
  
  const currentData = activeTab === 'ecoflow' ? ECOFLOW_PROFIT : DEYE_PROFIT;

  const handleShare = () => {
    try {
      const cleanUrl = new URL(window.location.href);
      cleanUrl.hash = 'profitability';
      const urlString = cleanUrl.toString();
      navigator.clipboard.writeText(urlString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Error generating share link", e);
    }
  };

  return (
    <section id="profitability" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Target size={14} /> Análisis de Inversión Novelec
          </div>
          <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-none">
            La <span className="gradient-text">Ruta del Dinero</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 font-medium">
            Compare el rendimiento neto de su capital. Arbitraje energético directo: compre a coste de fábrica, venda a precio de mercado.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
            <button 
              onClick={handleShare}
              className={`group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border transition-all duration-300 font-black text-[10px] sm:text-xs uppercase tracking-widest ${
                  copied 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {copied ? <Check size={18} /> : <Share2 size={18} />}
              {copied ? 'Copiado' : 'Compartir Análisis'}
            </button>
            <a 
              href={STRATEGIC_DOCS.presentation}
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-200 transition-all font-black text-[10px] sm:text-xs uppercase tracking-widest"
            >
              <FileText size={18} /> Plan PDF
            </a>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-8 sm:w-12 bg-emerald-500 rounded-full"></div>
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-3">
               RENDIMIENTO VISUAL
            </h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          <ROIVisualChart />
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Scale className="text-emerald-400" size={24} /> COMPARATIVA DIRECTA
            </h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-800/40">
                      <th className="px-4 sm:px-8 py-5 text-[9px] font-black text-slate-500 uppercase tracking-widest">Métrica</th>
                      <th className="px-4 sm:px-8 py-5 text-[10px] font-black text-cyan-400 uppercase tracking-widest text-center">EcoFlow</th>
                      <th className="px-4 sm:px-8 py-5 text-[10px] font-black text-yellow-500 uppercase tracking-widest text-center">Deye</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { m: "Ganancia Mín.", e: "€71k", d: "€116k" },
                      { m: "Ganancia Máx.", e: "€189k", d: "€169k" },
                      { m: "ROI Mínimo", e: "52.6%", d: "90.5%" },
                      { m: "ROI Máximo", e: "140.2%", d: "132%" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-4 sm:px-8 py-4 text-[11px] font-bold text-slate-400 uppercase">{row.m}</td>
                        <td className="px-4 sm:px-8 py-4 text-base font-black text-white text-center tabular-nums">{row.e}</td>
                        <td className="px-4 sm:px-8 py-4 text-base font-black text-white text-center tabular-nums">{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex-1 bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                <h4 className="text-sm font-black text-white mb-6 uppercase tracking-tighter relative z-10">Veredicto</h4>
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} />
                    <p className="text-slate-400 text-xs leading-relaxed">
                      <strong className="text-white">Deye:</strong> Perfil defensivo. Seguridad del 90% de ROI mínimo.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={18} />
                    <p className="text-slate-400 text-xs leading-relaxed">
                      <strong className="text-white">EcoFlow:</strong> Perfil de crecimiento. Mayor techo de ganancia unitaria.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-600 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-tighter">Recomendación</p>
                <p className="text-emerald-50 text-[11px] leading-relaxed font-medium italic">
                  "Ambas opciones capitalizan la crisis energética actual. La decisión depende de su canal de distribución."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1 rounded-2xl inline-flex border border-slate-800">
            <button
              onClick={() => setActiveTab('ecoflow')}
              className={`px-6 sm:px-10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'ecoflow' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              ECOFLOW
            </button>
            <button
              onClick={() => setActiveTab('deye')}
              className={`px-6 sm:px-10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'deye' ? 'bg-yellow-600 text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              DEYE
            </button>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-md mb-20">
          <div className="px-6 sm:px-10 py-8 border-b border-slate-800 bg-slate-900/60 flex flex-col items-center text-center sm:text-left sm:flex-row justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">
                Desglose {activeTab.toUpperCase()}
              </h3>
            </div>
            <div>
                <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-slate-800/80 px-4 sm:px-8 py-2 rounded-full border border-slate-700">
                    VALORES UNITARIOS EN USD
                </span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/40">
                <tr>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Modelo</th>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">Cant.</th>
                  <th className="hidden md:table-cell px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">P. Min</th>
                  <th className="hidden md:table-cell px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">P. Max</th>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-right">Total Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {currentData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20 transition-colors group">
                    <td className="px-4 sm:px-10 py-6 text-sm sm:text-lg font-black text-white leading-tight">{item.model}</td>
                    <td className="px-4 sm:px-10 py-6 text-sm sm:text-lg font-black text-slate-500 text-center">x{item.qty}</td>
                    <td className="hidden md:table-cell px-10 py-6 text-sm text-slate-400 text-center tabular-nums">${item.min.toLocaleString()}</td>
                    <td className="hidden md:table-cell px-10 py-6 text-sm text-slate-400 text-center tabular-nums">${item.max.toLocaleString()}</td>
                    <td className={`px-4 sm:px-10 py-6 text-base sm:text-xl font-black text-right tabular-nums ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>
                      ${(item.max * item.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-6 relative z-10">
                <ShieldAlert className="text-emerald-400" size={28} />
                <h4 className="text-lg font-black text-white uppercase tracking-tighter">Arbitraje Fiscal</h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium relative z-10">
                Al operar bajo el régimen In-Bond, la mercancía no paga aranceles hasta su venta. Inspección física en <span className="text-white font-bold">Tradex</span> disponible.
            </p>
          </div>

          <div className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[2rem] flex flex-col justify-center text-center relative overflow-hidden">
            <p className="text-emerald-400 font-black text-2xl sm:text-3xl mb-2 relative z-10 tracking-tighter uppercase italic">Retorno: 48 Ventas</p>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-sm mx-auto relative z-10 font-medium">
              Recupere el <span className="text-white font-bold">100% de su inversión</span> vendiendo el <span className="text-white font-bold">40% del stock</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
