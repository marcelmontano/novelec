
import React from 'react';
import { STRATEGIC_DOCS } from '../constants';
import { Download, Lock, FileText, ChevronRight, LayoutDashboard, Landmark } from 'lucide-react';

export const StrategicBriefing: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute left-0 top-0 h-full w-2 bg-emerald-600 hidden lg:block"></div>
      <div className="absolute right-0 top-0 h-full opacity-20 pointer-events-none flex items-center justify-end">
         <span className="rotate-90 text-[12rem] font-black text-slate-800 select-none uppercase tracking-[1em] whitespace-nowrap">
           ARBITRAJE
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-black text-white uppercase tracking-widest mb-6">
              <Lock size={14} className="text-yellow-500" /> Confidencial - Uso Exclusivo
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-none">
              Material Estratégico para <span className="text-emerald-400">Socios</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Acceda a la documentación técnica y financiera completa. Estos archivos contienen los modelos de flujo de caja validados, matrices de riesgo y el desglose de inventario por metro cúbico.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                 <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Landmark size={20} />
                 </div>
                 <div>
                    <span className="block text-white font-bold text-sm">Escudo Fiscal Validado</span>
                    <span className="text-xs text-slate-500">Exención total de aranceles bajo régimen Tradex.</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                 <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <LayoutDashboard size={20} />
                 </div>
                 <div>
                    <span className="block text-white font-bold text-sm">Validación de Mercado</span>
                    <span className="text-xs text-slate-500">Cifras basadas en demanda real Q1 2026.</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Memorandum Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-emerald-500/50 transition-all shadow-2xl">
              <div>
                <div className="mb-8 p-4 bg-slate-900 rounded-2xl inline-block shadow-inner group-hover:scale-110 transition-transform">
                  <FileText size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Memorándum Inversión</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-10">
                  Desglose financiero estricto. Análisis de activos de alta demanda (EcoFlow & Deye) y proyecciones de retorno.
                </p>
              </div>
              <a 
                href={STRATEGIC_DOCS.memorandum}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/20 transition-all active:scale-95"
              >
                <Download size={16} /> Descargar Memorándum <ChevronRight size={14} />
              </a>
            </div>

            {/* Capital Presentation Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-cyan-500/50 transition-all shadow-2xl">
              <div>
                <div className="mb-8 p-4 bg-slate-900 rounded-2xl inline-block shadow-inner group-hover:scale-110 transition-transform">
                  <LayoutDashboard size={40} className="text-cyan-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Presentación Capital</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-10">
                  Resumen ejecutivo del modelo de arbitraje energético: Origen, Ventaja Fiscal y Destino Premium.
                </p>
              </div>
              <a 
                href={STRATEGIC_DOCS.presentation}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-cyan-900/20 transition-all active:scale-95"
              >
                <Download size={16} /> Descargar Presentación <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
