
import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, DollarSign, ArrowUpRight, Info, Scale, CheckCircle2, LayoutDashboard, Share2, Check, Target, ShoppingCart } from 'lucide-react';

const ECOFLOW_UNIT_ECONOMICS = [
  { 
    model: "DELTA 2 Max", 
    cost: 706.40, 
    retailRange: "$1,100 - $2,000", 
    qty: 20,
    margin: "51% - 157%",
    gainUnit: "$323 - $1,223",
    note: "Ofertas competitivas en FB desde $1,100."
  },
  { 
    model: "DELTA Pro", 
    cost: 1255.81, 
    retailRange: "$2,800 - $3,000", 
    qty: 20,
    margin: "102% - 117%",
    gainUnit: "$1,419 - $1,619",
    note: "Precios muy consistentes en Revolico."
  },
  { 
    model: "DELTA Pro 3", 
    cost: 1334.30, 
    retailRange: "$2,800 - $3,000", 
    qty: 8,
    margin: "90% - 104%",
    gainUnit: "$1,331 - $1,531",
    note: "Similar a Pro, pero tecnología superior."
  },
  { 
    model: "Batería Extra D.Pro 3", 
    cost: 1020.35, 
    retailRange: "$2,250 - $2,838", 
    qty: 4,
    margin: "100% - 152%",
    gainUnit: "$1,128 - $1,716",
    note: "Alta variación de precios detectada."
  },
  { 
    model: "E980-US Generator", 
    cost: 470.93, 
    retailRange: "$600 - $980", 
    qty: 40,
    margin: "15% - 88%",
    gainUnit: "$78 - $458",
    note: "El modelo más accesible y rotativo."
  },
  { 
    model: "Delta Pro Ultra (Inv)", 
    cost: 1883.72, 
    retailRange: "$5,100 (Est.)", 
    qty: 8,
    margin: "146%",
    gainUnit: "$3,028",
    note: "Equipo más costoso y de mayor margen."
  },
  { 
    model: "Delta Pro Ultra Battery", 
    cost: 2354.65, 
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
    cost: 1598.62, 
    retailRange: "$2,500 - $2,900", 
    qty: 36,
    margin: "42% - 65%",
    gainUnit: "$742 - $1,182",
    note: "Alta demanda por crisis energética."
  },
  { 
    model: "Batería SE-G5.1 Pro", 
    cost: 888.12, 
    retailRange: "$1,500 - $2,000", 
    qty: 40,
    margin: "53% - 104%",
    gainUnit: "$523 - $1,023",
    note: "Base de retorno mínima del 90%."
  },
  { 
    model: "Batería SE-G10.2", 
    cost: 1776.24, 
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
    cost: 148500, // Costo en USD para consistencia con investigación ($148.5k)
    minRev: 223880,
    maxRev: 352428,
    avgRev: 288000,
    minProfit: 75380,
    maxProfit: 203928,
    avgProfit: 139500,
    minRoi: "50.8%",
    maxRoi: "137.4%",
    avgRoi: "93.8%",
    units: 120,
    valUnitMin: 628,
    color: "#22d3ee"
  },
  deye: {
    label: "Deye",
    cost: 141460, // ~€128.6k en USD
    minRev: 262900,
    maxRev: 347400,
    avgRev: 305150,
    minProfit: 116400, // Valor de la tabla de investigación
    maxProfit: 169800,
    avgProfit: 143100,
    minRoi: "90.5%",
    maxRoi: "132.0%",
    avgRoi: "111.3%",
    units: 96,
    valUnitMin: 1212,
    color: "#eab308"
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
              <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Costo Inversor (€)</th>
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
                    <span className="text-[10px] text-slate-500 font-bold">Rango: {item.gainUnit}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="text-xs font-black text-slate-500 uppercase mb-1">x{item.qty} Unidades</div>
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`}>
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

const ProfitComparisonChart = () => {
  const totalEco = METRICS.ecoflow.cost + METRICS.ecoflow.maxProfit;
  const totalDeye = METRICS.deye.cost + METRICS.deye.maxProfit;
  const maxScale = Math.max(totalEco, totalDeye);

  const getPct = (val: number) => (val / maxScale) * 100;

  const Bar = ({ data, brandColor }: { data: typeof METRICS.ecoflow, brandColor: string }) => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h5 className="text-xl font-black tracking-tighter" style={{ color: brandColor }}>
          {data.label.toUpperCase()} 
          <span className="text-slate-500 text-xs ml-2 font-bold">COSTO: ${(data.cost/1000).toFixed(1)}K USD</span>
        </h5>
        <div className="flex items-center gap-2">
           <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
             MAX ROI: {data.maxRoi}
           </span>
        </div>
      </div>

      <div className="relative">
        <div className="h-14 w-full bg-slate-800/50 rounded-2xl overflow-hidden flex shadow-inner border border-slate-800">
          <div 
            style={{ width: `${getPct(data.cost)}%` }} 
            className="h-full bg-slate-700/50 border-r border-slate-900/50 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter opacity-0 sm:opacity-100">Inversión</span>
          </div>
          
          <div 
            style={{ width: `${getPct(data.minProfit)}%` }} 
            className="h-full bg-emerald-500 flex items-center justify-center relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] transition-all hover:brightness-110"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <span className="text-[10px] font-black text-emerald-950 px-1 truncate">${(data.minProfit/1000).toFixed(1)}K</span>
          </div>

          <div 
            style={{ width: `${getPct(data.maxProfit - data.minProfit)}%` }} 
            className="h-full bg-emerald-500/20 border-l border-emerald-500/30 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }}></div>
            <span className="text-[10px] font-black text-emerald-400/60 px-1 truncate">+${((data.maxProfit - data.minProfit)/1000).toFixed(1)}K</span>
          </div>
        </div>

        <div className="mt-2 flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
          <div className="flex flex-col">
            <span className="text-slate-300">${(data.cost/1000).toFixed(1)}K</span>
            <span>Costo Base</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-emerald-400">${((data.cost + data.minProfit)/1000).toFixed(1)}K</span>
            <span>Ganancia Mín. (FB)</span>
          </div>
          <div className="flex flex-col text-right">
             <span className="text-white">${((data.cost + data.maxProfit)/1000).toFixed(1)}K</span>
             <span>Max. Potencial (Rev)</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <h4 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
          <LayoutDashboard className="text-emerald-400" size={24} /> 
          Comparativa de Ganancia Total
        </h4>
        <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-widest border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-700 rounded shadow-sm"></div> 
                <span className="text-slate-500">Inversión Recup.</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded shadow-sm"></div> 
                <span className="text-emerald-500">Ganancia Directa</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500/30 rounded"></div> 
                <span className="text-emerald-500/60">Margen Revolico</span>
            </div>
        </div>
      </div>

      <div className="space-y-16">
        <Bar data={METRICS.ecoflow} brandColor="#22d3ee" />
        <Bar data={METRICS.deye} brandColor="#eab308" />
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-4">
            <TrendingUp size={16} /> Auditoría de Precios Revolico/Facebook
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight mb-6 uppercase">
            Rentabilidad <span className="gradient-text">Auditada</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Basado en la comparativa de precios de equipos individuales contra el costo de importación del contenedor completo.
          </p>
          
          <button 
            onClick={handleShare}
            className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-bold text-sm ${
                copied 
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            {copied ? <Check size={18} className="animate-bounce" /> : <Share2 size={18} className="group-hover:rotate-12 transition-transform" />}
            {copied ? '¡Análisis Copiado!' : 'Compartir Reporte de Rentabilidad'}
          </button>
        </div>

        <div className="mb-16">
            <ProfitComparisonChart />
        </div>

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

        <div className="mb-20 animate-fade-in-up">
          <UnitEconomicsTable brand={activeTab} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl transition-all hover:border-slate-700 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Escenario Mínimo (FB)</p>
                <p className="text-3xl font-black text-white">{currentMetrics.minRoi} ROI</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-sm font-medium">Ingresos Totales</span>
                <span className="text-white font-bold">${currentMetrics.minRev.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-medium">Ganancia Neta</span>
                <span className="text-emerald-400 font-bold">+${currentMetrics.minProfit.toLocaleString()} USD</span>
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
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Retorno Estimado</p>
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
                <span className="text-emerald-400 font-bold">+${currentMetrics.avgProfit.toLocaleString()} USD</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl transition-all hover:border-slate-700 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={28} />
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Escenario Máximo (Rev)</p>
                <p className="text-3xl font-black text-white">{currentMetrics.maxRoi} ROI</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-sm font-medium">Ingresos Totales</span>
                <span className="text-white font-bold">${currentMetrics.maxRev.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-medium">Ganancia Neta</span>
                <span className="text-emerald-400 font-bold">+${currentMetrics.maxProfit.toLocaleString()} USD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-slate-800 flex-grow"></div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                    <Target className="text-emerald-400" /> Factores de Rentabilidad
                </h3>
                <div className="h-px bg-slate-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <div className="space-y-6 flex flex-col justify-between">
                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 h-full">
                        <h4 className="text-lg font-black text-white mb-6 uppercase tracking-tighter flex items-center gap-2">
                          <CheckCircle2 className="text-cyan-400" size={20} /> Puntos de Venta Críticos
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Alta demanda por apagones cíclicos en Cuba.",
                                "Diversidad de modelos para diferentes segmentos (Hogar vs Negocio).",
                                "Productos de alta capacidad (Ultra) generan los mayores márgenes.",
                                "Precios en Facebook son menores a Revolico, creando arbitraje.",
                                "El inventario apoya la expansión modular (Venta cruzada de baterías)."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Resumen del Inversor</h4>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Costo Contenedor</span>
                        <span className="text-white font-black text-xl">${(currentMetrics.cost/1000).toFixed(1)}K USD</span>
                        </div>
                        <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">ROI Promedio</span>
                        <span className="text-emerald-400 font-black text-xl">{currentMetrics.avgRoi}</span>
                        </div>
                        <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Ingreso Realista</span>
                        <span className="text-white font-black text-xl">${(currentMetrics.avgRev/1000).toFixed(1)}K USD</span>
                        </div>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <div className="bg-emerald-500/10 p-4 rounded-xl flex items-center gap-3">
                        <ShoppingCart className="text-emerald-500" size={20} />
                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-relaxed">
                            Oportunidad excelente: Precios de venta al público sin incluir márgenes de revendedor mayorista.
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
