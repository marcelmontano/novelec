
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
  Globe
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Barra de Urgencia y Stock */}
      <div className="bg-slate-950 border-b border-slate-800 py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">STOCK DEYE: <span className="text-emerald-400">1 DISPONIBLE</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">STOCK ECOFLOW: <span className="text-red-500">ÚLTIMO LOTE</span></span>
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
          <AlertCircle size={14} /> MODELO MAYORISTA: VENTA EXCLUSIVA POR LOTE INDIVISIBLE <AlertCircle size={14} />
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[180px]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-5 py-2 text-xs font-black text-emerald-400 ring-1 ring-inset ring-emerald-400/30 mb-10 animate-fade-in-up backdrop-blur-md">
          <Building2 size={14} className="mr-2" /> FIRMA ESPAÑOLA ESTABLECIDA EN CUBA
        </div>
        
        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-9xl mb-8 leading-[0.9] uppercase">
          Importación <br />
          <span className="gradient-text">Directa B2B</span>
        </h1>
        
        <p className="max-w-3xl text-xl sm:text-2xl text-slate-300 mb-12 font-medium leading-tight">
          Liquide sus fondos mediante <span className="text-white font-black underline decoration-emerald-500">transferencia bancaria en el exterior</span>. 
          Venta de lotes cerrados con stock verificado en Almacenes Tradex.
        </p>

        <div className="bg-slate-950/50 border border-slate-800 p-6 rounded-3xl mb-12 max-w-2xl w-full backdrop-blur-md flex flex-col sm:flex-row items-center justify-center gap-8 shadow-2xl">
            <div className="text-center sm:text-left">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Inversión Mínima</span>
                <span className="text-2xl font-black text-white">€128,600</span>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-slate-800"></div>
            <div className="text-center sm:text-left">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Estatus</span>
                <span className="text-2xl font-black text-emerald-400 uppercase tracking-tighter">In-Bond (Cuba)</span>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-slate-800"></div>
            <div className="text-center sm:text-left">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Modo de Pago</span>
                <span className="text-xl font-black text-cyan-400 uppercase tracking-tighter">Transferencia Ext.</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-20 w-full max-w-3xl">
           <a 
              href="#quote-form" 
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
           >
              Iniciar Negociación <ArrowRight size={24} />
           </a>
           <a 
              href="#warehouse"
              className="flex-1 bg-slate-800/80 border-2 border-slate-700 text-white px-8 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 backdrop-blur-md flex items-center justify-center gap-3"
           >
              Ver Stock en Tradex <Eye size={24} />
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full border-t border-slate-800 pt-12">
           {[
             { icon: <ShieldCheck className="text-emerald-400" />, title: "FIRMA ESPAÑOLA", desc: "Seguridad Jurídica" },
             { icon: <Globe className="text-cyan-400" />, title: "PAGO EXTERIOR", desc: "Transferencia Directa" },
             { icon: <TrendingUp className="text-yellow-400" />, title: "B2B MAYORISTA", desc: "Precios de Fábrica" },
             { icon: <Award className="text-purple-400" />, title: "GARANTÍA", desc: "Respaldo EcoFlow/Deye" },
           ].map((item, i) => (
             <div key={i} className="text-center group">
                <div className="mb-3 flex justify-center transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                <p className="text-[11px] text-slate-500 font-bold">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
