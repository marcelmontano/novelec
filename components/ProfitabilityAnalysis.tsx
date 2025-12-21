
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Scale, 
  CheckCircle2, 
  Share2, 
  Check, 
  FileText, 
  DollarSign, 
  Info,
  ShieldAlert
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

export const ProfitabilityAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  const [copied, setCopied] = useState(false);
  
  const currentData = activeTab === 'ecoflow' ? ECOFLOW_PROFIT : DEYE_PROFIT;
  const currentMetrics = METRICS[activeTab];

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
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-4">
            <TrendingUp size={16} /> Su Dinero Crece en Cuba
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight mb-6 uppercase">
            Análisis de <span className="gradient-text">Ganancia Real</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Cada euro invertido genera beneficio neto inmediato. Equipos en Almacenes Tradex (Reparto Eléctrico) importados por Cubaelectrónica.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={handleShare}
              className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-bold text-sm ${
                  copied 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {copied ? <Check size={18} /> : <Share2 size={18} />}
              {copied ? '¡Copiado!' : 'Compartir con Socio'}
            </button>
            <a 
              href={STRATEGIC_DOCS.presentation}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all font-bold text-sm"
            >
              <FileText size={18} className="text-cyan-400" /> Plan de Capital (PDF)
            </a>
          </div>
        </div>

        {/* --- IMAGEN 1: RESUMEN COMPARATIVO DIRECTO --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Scale className="text-emerald-400" size={28} /> RESUMEN COMPARATIVO DIRECTO
            </h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Tabla Comparativa */}
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800/30">
                    <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-widest">Métrica</th>
                    <th className="px-8 py-6 text-xs font-black text-cyan-400 uppercase tracking-widest text-center">EcoFlow</th>
                    <th className="px-8 py-6 text-xs font-black text-yellow-500 uppercase tracking-widest text-center">Deye</th>
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
                    <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-8 py-5 text-sm font-medium text-slate-400">{row.m}</td>
                      <td className="px-8 py-5 text-sm font-black text-white text-center">{row.e}</td>
                      <td className="px-8 py-5 text-sm font-black text-white text-center">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Veredictos */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 shadow-xl">
                <h4 className="text-xl font-black text-white mb-8 uppercase tracking-tighter">Veredicto de Inversión</h4>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-cyan-400" size={24} />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      <strong className="text-white">Deye (€128,600):</strong> Inversión defensiva. Excelente si prioriza seguridad de retorno inmediato. El 90% de ROI mínimo es incomparable.
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-cyan-400" size={24} />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      <strong className="text-white">EcoFlow (€135,000):</strong> Inversión de crecimiento. Mayor riesgo inicial compensado por un techo de ganancias mucho más elevado.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-500/5 p-10 rounded-[2.5rem] border border-emerald-500/10">
                <p className="text-emerald-400 font-black text-xl mb-4">Recomendación Final</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ambas opciones capitalizan la crisis energética actual. La decisión depende de su apetito al riesgo y su canal de distribución (Retail vs. Instalación Profesional).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Selector de Pestañas para Desglose */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900 p-1.5 rounded-2xl inline-flex border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveTab('ecoflow')}
              className={`px-10 py-4 rounded-xl text-sm font-black transition-all ${
                activeTab === 'ecoflow' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              TABLA ECOFLOW
            </button>
            <button
              onClick={() => setActiveTab('deye')}
              className={`px-10 py-4 rounded-xl text-sm font-black transition-all ${
                activeTab === 'deye' ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-900/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              TABLA DEYE
            </button>
          </div>
        </div>

        {/* --- IMAGEN 2 & 3: DESGLOSE DEYE / ECOFLOW --- */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="px-10 py-8 border-b border-slate-800 bg-slate-900/80 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
              <DollarSign size={24} className={activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'} /> 
              Desglose {activeTab.toUpperCase()}
            </h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-800/80 px-6 py-2 rounded-full border border-slate-700">VALORES UNITARIOS EN USD</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/30">
                <tr>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Cant</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Precio Min</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Precio Max</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Total Min</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Total Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {currentData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-10 py-6 text-base font-black text-white">{item.model}</td>
                    <td className="px-10 py-6 text-base font-black text-slate-400 text-center">x{item.qty}</td>
                    <td className="px-10 py-6 text-sm text-slate-400 text-center">${item.min.toLocaleString()}</td>
                    <td className="px-10 py-6 text-sm text-slate-400 text-center">${item.max.toLocaleString()}</td>
                    <td className="px-10 py-6 text-sm font-bold text-slate-300 text-center">${(item.min * item.qty).toLocaleString()}</td>
                    <td className={`px-10 py-6 text-base font-black text-right ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>
                      ${(item.max * item.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sección Informativa Adicional */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-10 rounded-[2.5rem] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                    <ShieldAlert size={32} />
                </div>
                <div>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Escudo de Importación</h4>
                    <p className="text-xs font-black text-emerald-500 uppercase tracking-widest">Alianza con Cubaelectrónica</p>
                </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
                Operamos bajo el régimen de depósito In-Bond en los <span className="text-white font-bold">Almacenes Tradex</span>. 
                Usted inspecciona la mercancía físicamente en el <span className="text-white font-bold">Reparto Eléctrico</span> antes de proceder. 
                Transparencia total, importación oficial.
            </p>
          </div>

          <div className="bg-emerald-500/5 p-10 rounded-[2.5rem] border border-emerald-500/10 flex flex-col justify-center text-center">
            <p className="text-emerald-400 font-black text-3xl mb-4">Punto de Retorno: Unidad 48</p>
            <p className="text-slate-300 text-base leading-relaxed max-w-sm mx-auto">
              Recupere el 100% de su inversión vendiendo menos de la mitad del contenedor. 
              <span className="block mt-4 text-white font-black uppercase text-xs tracking-widest">Lo demás es beneficio líquido.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
