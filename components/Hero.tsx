
import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Award, 
  AlertCircle, 
  Eye, 
  Building2, 
  Package,
  TrendingUp,
  Clock,
  Globe,
  Sun
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Barra de Urgencia y Stock */}
      <div className="bg-slate-950 border-b border-slate-800 py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">DEYE: <span className="text-emerald-400">1 LOTE</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">ECOFLOW: <span className="text-red-500">ÚLTIMO LOTE</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <Clock size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Liquidación 2025 - Tiempo Limitado</span>
          </div>
        </div>
      </div>

      {/* Banner de Advertencia B2B */}
      <div className="bg-yellow-500 py-3 text-center relative z-50 shadow-xl">
        <p className="text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
          <AlertCircle size={14} /> MODELO MAYORISTA: VENTA POR LOTE CERRADO <AlertCircle size={14} />
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[180px]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-orange-500/10 px-5 py-2 text-xs font-black text-orange-400 ring-1 ring-inset ring-orange-400/30 mb-10 animate-fade-in-up backdrop-blur-md">
          <Zap size={14} className="mr-2" /> DISPONIBILIDAD INMEDIATA EN TRADEX
        </div>
        
        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-9xl mb-8 leading-[0.9] uppercase">
          Energía Solar <br />
          <span className="gradient-text">Directa B2B</span>
        </h1>
        
        <p className="max-w-3xl text-xl sm:text-2xl text-slate-300 mb-12 font-medium leading-tight">
          Inversores Deye y Estaciones EcoFlow. 
          Liquidación mediante <span className="text-white font-black underline decoration-orange-500">transferencia bancaria en el exterior</span>.
        </p>

        {/* Bloque de Precios Destacados */}
        <div className="bg-slate-950/50 border border-slate-800 p-8 rounded-3xl mb-12 max-w-4xl w-full backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Contenedor Deye</span>
                    <span className="text-4xl font-black text-white">$128,600</span>
                    <span className="block text-[9px] text-emerald-400 font-bold uppercase mt-1">Lote Híbrido 10kW Industrial</span>
                </div>
                <div className="text-center">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Contenedor EcoFlow</span>
                    <span className="text-4xl font-black text-white">$135,000</span>
                    <span className="block text-[9px] text-cyan-400 font-bold uppercase mt-1">Lote Delta Pro & Ultra Home</span>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                    <Globe size={14} className="text-slate-400" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pago Bancario Exterior / USDT</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Disponibilidad Tradex Cuba</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-20 w-full max-w-2xl">
           <a 
              href="#quote-form" 
              className="flex-1 bg-orange-600 hover:bg-orange-500 text-white px-8 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
           >
              Cotizar Lotes <ArrowRight size={24} />
           </a>
           <a 
              href="#warehouse"
              className="flex-1 bg-slate-800/80 border-2 border-slate-700 text-white px-8 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 backdrop-blur-md flex items-center justify-center gap-3"
           >
              Ver Stock Físico <Eye size={24} />
           </a>
        </div>
      </div>
    </div>
  );
};
