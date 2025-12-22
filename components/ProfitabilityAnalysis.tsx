
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
  Target,
  ShoppingBag,
  History,
  AlertCircle
} from 'lucide-react';
import { STRATEGIC_DOCS, METRICS, INVENTORY } from '../constants';

const ROIVisualChart = () => {
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
  
  const currentInventory = INVENTORY.filter(i => i.containerId === activeTab);

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

  const calculateMarginPercent = (cost: number, target: number) => {
    return Math.floor(((target / cost) - 1) * 100);
  };

  return (
    <section id="profitability" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Target size={14} /> Estrategia de Arbitraje Energético
          </div>
          <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-none">
            Matriz de <span className="gradient-text">Márgenes</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Prorrateo de costos internos para cálculo de beneficio neto. Basado en una tasa de cambio 1 EUR ≈ 1.17 USD.
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
              {copied ? 'Copiado' : 'Compartir Estrategia'}
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
               PERFIL DE RENTABILIDAD
            </h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl">
                <History className="text-purple-400 mb-4" size={32} />
                <h4 className="text-white font-black text-sm uppercase mb-2">Costos Prorrateados</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Asignación interna de capital por equipo para determinar precios de venta realistas.</p>
             </div>
             <div className="bg-emerald-900/20 p-8 rounded-3xl border border-emerald-500/30 shadow-xl">
                <Target className="text-emerald-400 mb-4" size={32} />
                <h4 className="text-white font-black text-sm uppercase mb-2">Precios Sugeridos</h4>
                <p className="text-emerald-50 text-xs leading-relaxed font-medium">Rangos de PVP diseñados para liquidar el stock en menos de 90 días en Cuba.</p>
             </div>
             <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl">
                <ShoppingBag className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-white font-black text-sm uppercase mb-2">Arbitraje USD</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Capitalización total de la brecha entre costo de origen y escasez local.</p>
             </div>
          </div>

          <ROIVisualChart />
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
                Oportunidad {activeTab.toUpperCase()}
              </h3>
            </div>
            <div className="flex flex-col sm:items-end">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] bg-slate-800/80 px-4 sm:px-8 py-2 rounded-full border border-slate-700">
                    BENCHMARKING EN USD
                </span>
                <span className="text-[9px] text-emerald-500 font-bold mt-2 uppercase tracking-widest">Prorrateo Interno Sugerido</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/40">
                <tr>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">Modelo del Equipo</th>
                  <th className="px-6 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">Costo Ref. (USD)</th>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-emerald-400 uppercase tracking-widest text-center">PVP Sugerido (USD)</th>
                  <th className="px-4 sm:px-10 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest text-right">Margen aprox.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {currentInventory.map((item, idx) => {
                  const marginLow = calculateMarginPercent(item.unitCostUsd, item.marketPrice);
                  const marginHigh = calculateMarginPercent(item.unitCostUsd, item.targetPrice);
                  return (
                    <tr key={idx} className="hover:bg-slate-800/20 transition-colors group">
                      <td className="px-4 sm:px-10 py-6">
                          <div className="text-sm sm:text-lg font-black text-white leading-tight">{item.modelName}</div>
                          <div className="mt-1">
                               <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700 uppercase tracking-widest">x{item.quantity} Unidades</span>
                          </div>
                      </td>
                      <td className="px-6 py-6 text-base text-slate-400 text-center font-bold tabular-nums">
                          ${item.unitCostUsd.toLocaleString()}
                      </td>
                      <td className="px-4 sm:px-10 py-6 text-center">
                          <div className="text-sm sm:text-xl font-black text-emerald-400 tabular-nums">
                            ${item.marketPrice.toLocaleString()} - ${item.targetPrice.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-slate-500 font-black uppercase mt-1 tracking-widest">Costo EUR: €{item.unitCostEur.toLocaleString()}</div>
                      </td>
                      <td className="px-4 sm:px-10 py-6 text-right tabular-nums">
                        <div className="text-base sm:text-xl font-black text-white">
                          {marginLow}% - {marginHigh}%
                        </div>
                        <div className="flex items-center justify-end gap-1 text-[8px] font-black text-emerald-500 uppercase tracking-widest mt-1">
                           Sobre Costo de Ref.
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-6 relative z-10">
                <ShieldAlert className="text-emerald-400" size={28} />
                <h4 className="text-lg font-black text-white uppercase tracking-tighter">Nota para el Comprador</h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium relative z-10">
                El proveedor factura por lote cerrado, pero este es el <span className="text-white font-bold">coste interno asignado por unidad</span> que usamos para que usted pueda proyectar sus márgenes finales de forma precisa.
            </p>
          </div>

          <div className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[2rem] flex flex-col justify-center text-center relative overflow-hidden">
            <p className="text-emerald-400 font-black text-2xl sm:text-3xl mb-2 relative z-10 tracking-tighter uppercase italic">Control Total de Márgenes</p>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-sm mx-auto relative z-10 font-medium">
              Venda por encima de las columnas sugeridas para <span className="text-white font-bold">maximizar el ROI</span> según la urgencia del mercado local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
