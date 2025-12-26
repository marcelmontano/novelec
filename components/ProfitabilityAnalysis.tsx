
import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, DollarSign, ArrowUpRight, Info, Scale, CheckCircle2, LayoutDashboard, Share2, Check, Target, ShoppingCart, Wallet, ArrowRight } from 'lucide-react';

const ECOFLOW_UNIT_ECONOMICS = [
  { 
    model: "DELTA 2 Max", 
    cost: 706, 
    retailRange: "$1,100 - $2,000", 
    qty: 20,
    margin: "51% - 157%",
    gainUnit: "$323 - $1,223",
    note: "Ofertas competitivas en FB desde $1,100."
  },
  { 
    model: "DELTA Pro", 
    cost: 1255, 
    retailRange: "$2,800 - $3,000", 
    qty: 20,
    margin: "102% - 117%",
    gainUnit: "$1,419 - $1,619",
    note: "Precios muy consistentes en Revolico."
  },
  { 
    model: "DELTA Pro 3", 
    cost: 1334, 
    retailRange: "$2,800 - $3,000", 
    qty: 8,
    margin: "90% - 104%",
    gainUnit: "$1,331 - $1,531",
    note: "Similar a Pro, pero tecnología superior."
  },
  { 
    model: "Batería Extra D.Pro 3", 
    cost: 1020, 
    retailRange: "$2,250 - $2,838", 
    qty: 4,
    margin: "100% - 152%",
    gainUnit: "$1,128 - $1,716",
    note: "Alta variación de precios detectada."
  },
  { 
    model: "E980-US Generator", 
    cost: 470, 
    retailRange: "$600 - $980", 
    qty: 40,
    margin: "15% - 88%",
    gainUnit: "$78 - $458",
    note: "El modelo más accesible y rotativo."
  },
  { 
    model: "Delta Pro Ultra (Inv)", 
    cost: 1883, 
    retailRange: "$5,100 (Est.)", 
    qty: 8,
    margin: "146%",
    gainUnit: "$3,028",
    note: "Equipo más costoso y de mayor margen."
  },
  { 
    model: "Delta Pro Ultra Battery", 
    cost: 2354, 
    retailRange: "$6,000 - $6,730", 
    qty: 20,
    margin: "131% - 159%",
    gainUnit: "$3,410 - $4,140",
    note: "Aporta el 54% del ingreso total."
  }
];

const DEYE_UNIT_ECONOMICS = [
  { 
    model: "Inverter SUN-10K", 
    cost: 1598, 
    retailRange: "$2,500 - $2,900", 
    qty: 36,
    margin: "42% - 65%",
    gainUnit: "$742 - $1,182",
    note: "Alta demanda por crisis energética."
  },
  { 
    model: "Batería SE-G5.1 Pro", 
    cost: 888, 
    retailRange: "$1,500 - $2,000", 
    qty: 40,
    margin: "53% - 104%",
    gainUnit: "$523 - $1,023",
    note: "Base de retorno mínima del 90%."
  },
  { 
    model: "Batería SE-G10.2", 
    cost: 1776, 
    retailRange: "$2,200 - $2,800", 
    qty: 20,
    margin: "13% - 43%",
    gainUnit: "$224 - $884",
    note: "Equipos industriales para negocios."
  }
];

const METRICS = {
  ecoflow: {
    label: "EcoFlow",
    cost: 148500,
    avgProfit: 139500,
    avgRoi: "93.8%",
    color: "cyan"
  },
  deye: {
    label: "Deye",
    cost: 141460,
    avgProfit: 143100,
    avgRoi: "111.3%",
    color: "yellow"
  }
};

const UnitEconomicsTable = ({ brand }: { brand: 'ecoflow' | 'deye' }) => {
  const data = brand === 'ecoflow' ? ECOFLOW_UNIT_ECONOMICS : DEYE_UNIT_ECONOMICS;
  const brandColor = brand === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="px-8 py-6 bg-slate-950/50 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h4 className={`text-xl font-black uppercase tracking-tighter ${brandColor}`}>
          Economía Unitaria (Venta al Público)
        </h4>
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Data: Facebook & Revolico
            </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-900/50">
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Producto</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Inviertes (€)</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Precio al que lo puedes revender</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Margen Estimado</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Ganancia Bruta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                <td className="px-6 py-5">
                  <div className="text-sm font-bold text-white">{item.model}</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-medium">{item.note}</div>
                </td>
                <td className="px-6 py-5 text-sm font-mono text-slate-400">€{item.cost.toLocaleString()}</td>
                <td className="px-6 py-5 text-sm font-black text-white">{item.retailRange}</td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-emerald-400">{item.margin}</span>
                    <span className="text-[10px] text-slate-500 font-bold">Ganas: {item.gainUnit} por unid.</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="text-xs font-black text-slate-500 uppercase mb-1">x{item.qty} Unidades</div>
                  <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest`}>
                    ALTA RENTABILIDAD
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-slate-950/30 border-t border-slate-800">
        <div className="flex gap-4 items-start">
          <Info size={16} className={brandColor + " mt-0.5 flex-shrink-0"} />
          <p className="text-[11px] text-slate-400 leading-relaxed">
            *Análisis basado en precios actuales reportados en <strong>Facebook Marketplace</strong> y <strong>Revolico</strong>. 
            La variabilidad de precios requiere una estrategia de venta flexible, permitiendo liquidar inventario rápido o maximizar margen según la urgencia del comprador.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  const [copied, setCopied] = useState(false);
  
  const currentMetrics = METRICS[activeTab];

  const handleShare = () => {
    try {
      const cleanUrl = new URL(window.location.href);
      cleanUrl.hash = 'profitability';
      navigator.clipboard.writeText(cleanUrl.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Error generating share link", e);
    }
  };

  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <Wallet size={14} /> Reporte de Beneficios Netos
          </div>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter mb-6 uppercase">
            ¿Cuánto <span className="gradient-text">vas a ganar?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Hemos analizado el precio de cada equipo en el mercado cubano actual para que sepas exactamente cuánto beneficio te queda en el bolsillo por cada unidad vendida.
          </p>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-900 p-1.5 rounded-[2rem] inline-flex border border-slate-800 shadow-2xl">
              <button
                onClick={() => setActiveTab('ecoflow')}
                className={`px-8 py-4 rounded-[1.5rem] text-sm font-black transition-all ${
                  activeTab === 'ecoflow' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Plan de Ganancia EcoFlow
              </button>
              <button
                onClick={() => setActiveTab('deye')}
                className={`px-8 py-4 rounded-[1.5rem] text-sm font-black transition-all ${
                  activeTab === 'deye' ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-900/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Plan de Ganancia Deye
              </button>
            </div>
          </div>
        </div>

        {/* Total Summary Hero */}
        <div className="mb-16">
            <div className={`relative overflow-hidden rounded-[3rem] p-8 sm:p-12 border shadow-3xl ${activeTab === 'ecoflow' ? 'bg-slate-900/50 border-cyan-500/30' : 'bg-slate-900/50 border-yellow-500/30'}`}>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <TrendingUp size={200} />
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="text-center lg:text-left">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Resumen del Contenedor</span>
                        <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">Ganancia Estimada: <span className="text-emerald-400">${currentMetrics.avgProfit.toLocaleString()} USD</span></h3>
                        <p className="text-slate-400 text-lg max-w-xl font-medium">
                            Tras recuperar tu inversión total de <span className="text-white font-bold">${currentMetrics.cost.toLocaleString()}</span>, el contenedor genera un beneficio neto promedio del <span className="text-emerald-400 font-bold">{currentMetrics.avgRoi}</span>.
                        </p>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 text-center">
                            <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ROI Mínimo</span>
                            <span className="text-2xl font-black text-white">51%</span>
                        </div>
                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 text-center">
                            <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ROI Máximo</span>
                            <span className="text-2xl font-black text-emerald-400">137%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Restauración de la Tabla */}
        <div className="mb-20 animate-fade-in-up">
          <UnitEconomicsTable brand={activeTab} />
        </div>

        {/* Strategy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest">
                   Estrategia de Venta en Cuba
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">
                    Por qué este contenedor es una <span className="text-emerald-400">Mina de Oro</span>
                </h3>
                <div className="space-y-6">
                    <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800 flex-shrink-0">
                            <Target size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Precio Imbatible</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Tu costo por unidad es hasta un 40% menor que el precio de mercado en Revolico. Puedes vender más rápido que nadie y aún así ganar mucho dinero.</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-yellow-400 border border-slate-800 flex-shrink-0">
                            <Scale size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Cero Aranceles</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Al estar en régimen In-Bond, no pagas impuestos de entrada. Ese ahorro va directo a tu margen de ganancia neta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Info size={150} />
                </div>
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Nota del Analista</h4>
                <div className="space-y-6 relative z-10">
                    <p className="text-slate-300 text-lg leading-relaxed italic">
                        "La demanda de energía en Cuba es crítica y constante. No estás vendiendo un lujo, estás vendiendo una necesidad básica que la gente paga al contado para proteger su comida y su confort."
                    </p>
                    <div className="pt-6 border-t border-slate-800">
                        <button 
                            onClick={handleShare}
                            className={`flex items-center gap-3 font-black text-xs uppercase tracking-widest transition-all ${copied ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}
                        >
                            {copied ? <Check size={16} /> : <Share2 size={16} />}
                            {copied ? 'Enlace de reporte copiado' : 'Compartir este análisis con un socio'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
