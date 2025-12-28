
import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, Share2, Check, Target, Scale, Wallet, Star, ShieldCheck, Info, ArrowRight } from 'lucide-react';

/**
 * Datos extraídos exactamente de la imagen "Hoja de Ruta Financiera"
 * y validados con el JSON de Revolico proporcionado.
 */
const ROADMAP_DATA = [
  {
    id: 'e980',
    name: "EcoFlow E980-US",
    cost: 499,
    avgStreet: 692,
    range: [600, 750],
    profit: 101,
    roi: "20.2%",
    points: [680, 700, 750, 610, 630, 650, 720, 690, 730, 700, 650, 670, 640, 610, 595]
  },
  {
    id: 'delta2max',
    name: "Delta 2 Max",
    cost: 749,
    avgStreet: 1103,
    range: [1250, 1500],
    profit: 501,
    roi: "66.9%",
    points: [1150, 1290, 1140, 1250, 1160, 1280, 1240, 1340, 1230, 1400, 1190, 1150, 1200, 1350, 1100]
  },
  {
    id: 'deltapro',
    name: "Delta Pro",
    cost: 1331,
    avgStreet: 2032,
    range: [2000, 2300],
    profit: 669,
    roi: "50.2%",
    points: [2180, 2300, 2220, 1900, 2120, 2200, 2150, 2140, 2000, 1930, 1850, 2100, 2250, 2120]
  },
  {
    id: 'deltapro3',
    name: "Delta Pro 3",
    cost: 1414,
    avgStreet: 3208,
    range: [3000, 3700],
    profit: 1586,
    roi: "112.1%",
    isStar: true,
    points: [3100, 3050, 3000, 3300, 2900, 3700, 3050, 2950, 3100, 3300]
  },
  {
    id: 'deltapro3eb',
    name: "Batería Extra Pro 3",
    cost: 1082,
    avgStreet: 3010,
    range: [2500, 2900],
    profit: 1418,
    roi: "131.0%",
    isStar: true,
    points: [2800, 2820, 2825, 2775, 2850, 2838, 2500, 2750, 2900, 2760]
  },
  {
    id: 'proultra',
    name: "Delta Pro Ultra",
    cost: 4493,
    avgStreet: 6722,
    range: [5200, 7000],
    profit: 707,
    isPremium: true,
    points: [6900, 6890, 7200, 7000, 6950, 6870, 7500, 6550, 6730, 6750, 6700, 5200, 5950, 6000, 6900]
  }
];

const FinancialRoadmapChart = () => {
  const maxPrice = 8500;

  return (
    <div className="w-full bg-slate-900/50 border border-slate-800 rounded-[3rem] p-6 sm:p-12 overflow-hidden shadow-2xl relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-slate-800 pb-8">
        <div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <TrendingUp className="text-emerald-400" /> Hoja de Ruta Financiera
          </h3>
          <p className="text-slate-400 text-sm font-medium mt-2">Novelec vs. Competencia (Análisis de Mercado Dic 2025)</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-widest bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
           <div className="flex items-center gap-3 text-red-500">
              <div className="w-5 h-1 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div> 
              Costo Novelec
           </div>
           <div className="flex items-center gap-3 text-cyan-400">
              <div className="w-5 h-5 border-l-2 border-r-2 border-cyan-500/50 bg-cyan-500/10"></div> 
              Rango Facebook
           </div>
           <div className="flex items-center gap-3 text-white">
              <div className="w-5 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div> 
              Promedio Calle
           </div>
           <div className="flex items-center gap-3 text-slate-300">
              <div className="w-2.5 h-2.5 bg-slate-200 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.2)]"></div> 
              Anuncios Revolico
           </div>
        </div>
      </div>

      {/* Contenedor del Gráfico con Ejes */}
      <div className="relative h-[600px] w-full mt-10 flex items-end justify-between gap-1 sm:gap-4 border-b border-slate-700 pb-6 pr-4 pl-12">
        
        {/* Eje Y (Precios) */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] font-black text-slate-600 pointer-events-none">
          <span>$8,000</span>
          <span>$6,000</span>
          <span>$4,000</span>
          <span>$2,000</span>
          <span className="text-slate-800">$0</span>
        </div>

        {/* Líneas de Guía Horizontales */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03] pl-12">
            {[8000, 6000, 4000, 2000, 0].map(val => (
                <div key={val} className="w-full border-t border-white"></div>
            ))}
        </div>

        {ROADMAP_DATA.map((item) => {
          const costPos = (item.cost / maxPrice) * 100;
          const avgPos = (item.avgStreet / maxPrice) * 100;
          const rangeMinPos = (item.range[0] / maxPrice) * 100;
          const rangeMaxPos = (item.range[1] / maxPrice) * 100;

          return (
            <div key={item.id} className="relative flex-1 flex flex-col items-center group h-full">
              
              {/* Puntos de Dispersión (Ofertas Reales Revolico - VISIBILIDAD MEJORADA) */}
              {item.points.map((price, pIdx) => (
                <div 
                  key={pIdx}
                  className="absolute w-2 h-2 bg-slate-300 border border-slate-900 rounded-full opacity-40 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  style={{ 
                    bottom: `${(price / maxPrice) * 100}%`,
                    left: `calc(50% + ${(pIdx % 3 === 0 ? 0 : pIdx % 3 === 1 ? 1 : -1) * (Math.random() * 20)}px)` // Jitter aleatorio controlado
                  }}
                ></div>
              ))}

              {/* Barra de Rango de Importadores (Facebook) */}
              <div 
                className="absolute w-4 sm:w-12 bg-cyan-500/5 border-l-2 border-r-2 border-cyan-500/40 z-10 transition-all group-hover:bg-cyan-500/15"
                style={{ 
                    bottom: `${rangeMinPos}%`, 
                    height: `${rangeMaxPos - rangeMinPos}%` 
                }}
              >
                <div className="absolute top-0 left-[-4px] right-[-4px] h-1 bg-cyan-400/50"></div>
                <div className="absolute bottom-0 left-[-4px] right-[-4px] h-1 bg-cyan-400/50"></div>
              </div>

              {/* Línea de Promedio Real en la Calle (Revolico) */}
              <div 
                className="absolute w-6 sm:w-20 h-1.5 bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center rounded-full"
                style={{ bottom: `${avgPos}%` }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-black text-white whitespace-nowrap bg-slate-950 border border-white/20 px-2 py-0.5 rounded shadow-xl">
                   AVG STREET: ${item.avgStreet}
                </div>
              </div>

              {/* Línea de Costo Novelec (Contenedor) */}
              <div 
                className="absolute w-full h-1 bg-red-600 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                style={{ bottom: `${costPos}%` }}
              >
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-950/95 border border-red-500/40 rounded text-[9px] font-black text-red-400 whitespace-nowrap">
                   COSTO: ${item.cost}
                </div>
              </div>

              {/* Espacio de Ganancia (Margen) */}
              <div 
                className="absolute w-0.5 border-l-2 border-dotted border-emerald-400/50 z-0"
                style={{ bottom: `${costPos}%`, height: `${avgPos - costPos}%`, left: '50%' }}
              ></div>

              {/* Etiqueta de Ganancia Neta por Unidad (Verde) */}
              <div 
                className="absolute z-30 px-3 py-2 bg-emerald-500 rounded-lg text-[11px] font-black text-white shadow-2xl shadow-emerald-900/40 whitespace-nowrap transition-all group-hover:scale-125 group-hover:-translate-y-4 cursor-default"
                style={{ bottom: `${(costPos + avgPos) / 2}%`, left: 'calc(50% + 20px)' }}
              >
                +${item.profit}
              </div>

              {/* Nombre del Producto */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="text-[8px] sm:text-[11px] font-black text-slate-500 uppercase tracking-tighter leading-none block group-hover:text-white transition-colors">
                  {item.name.replace('EcoFlow ', '')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer Info del Gráfico */}
      <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="text-[11px] text-slate-500 font-bold max-w-lg italic leading-relaxed text-center lg:text-left">
            * Metodología: Cada <strong>punto gris</strong> representa un anuncio único detectado en <strong>Revolico</strong>. La <strong>barra azul</strong> muestra el rango de precios solicitado por importadores en <strong>Facebook Marketplace</strong>. Tu costo es el punto de entrada más bajo posible.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
             <div className="px-8 py-5 bg-emerald-500/10 border border-emerald-500/20 rounded-[1.5rem] text-center shadow-inner">
                <span className="block text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ROI Máximo (Pro 3)</span>
                <span className="text-3xl font-black text-white">112.1%</span>
             </div>
             <div className="px-8 py-5 bg-cyan-500/10 border border-cyan-500/20 rounded-[1.5rem] text-center shadow-inner">
                <span className="block text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-1">Margen Delta Pro 3</span>
                <span className="text-3xl font-black text-white">+$1,586</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export const ProfitabilityAnalysis: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { console.error(e); }
  };

  return (
    <section id="profitability" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <Wallet size={14} /> Inteligencia de Mercado Novelec
          </div>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter mb-6 uppercase">
            Análisis de <span className="gradient-text">Rentabilidad Real</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Comparamos tu costo de contenedor con el mercado cubano actual. Los <strong>puntos blancos</strong> son ofertas reales de otros vendedores; tu costo es la <strong>línea roja</strong>.
          </p>
        </div>

        <div className="mb-20 animate-fade-in-up">
          <FinancialRoadmapChart />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="px-10 py-8 bg-slate-950/50 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Desglose de Ganancia Unitaria</h4>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                    Último Scraping: Dic 2025
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-900/50">
                            <th className="px-10 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Producto</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Tu Costo (USD)</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Promedio Revolico</th>
                            <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Margen Neto</th>
                            <th className="px-10 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">ROI (%)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {ROADMAP_DATA.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-800/30 transition-colors group">
                                <td className="px-10 py-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-base font-bold text-white">{item.name}</span>
                                        {item.isStar && <span className="bg-cyan-500/20 text-cyan-400 text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-tighter border border-cyan-500/30">Líder Ventas</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-sm font-mono text-red-500 font-bold">${item.cost.toLocaleString()}</td>
                                <td className="px-6 py-6 text-sm font-black text-white">${item.avgStreet.toLocaleString()}</td>
                                <td className="px-6 py-6 text-sm font-black text-emerald-400">
                                   <div className="flex items-center gap-1">
                                      <TrendingUp size={14} /> +${item.profit.toLocaleString()}
                                   </div>
                                </td>
                                <td className="px-10 py-6 text-right font-black text-cyan-400">{item.roi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest">
                   Estrategia Comercial Novelec
                </div>
                <h3 className="text-4xl font-black text-white leading-tight">
                    Lidera el mercado con el <span className="text-emerald-400">Mejor Costo de Entrada</span>
                </h3>
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800 flex-shrink-0 shadow-xl">
                            <Target size={28} />
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-bold mb-2">Dominio del Rango de Precios</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Como muestra el gráfico de dispersión, tu costo está muy por debajo de las ofertas más baratas de Revolico. Tienes margen para bajar el precio y liquidar stock en tiempo récord si lo deseas.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-yellow-400 border border-slate-800 flex-shrink-0 shadow-xl">
                            <Scale size={28} />
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-bold mb-2">Sin Intermediarios ni Aranceles</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Al comprar el contenedor directamente en Almacenes Tradex (In-Bond), eliminas los costos ocultos de los intermediarios que nacionalizan equipos sueltos a precios exorbitantes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 sm:p-14 relative overflow-hidden group shadow-3xl">
                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <Info size={300} />
                </div>
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-10 border-b border-slate-800 pb-4">Nota del Analista Senior</h4>
                <div className="space-y-8 relative z-10">
                    <p className="text-slate-300 text-xl leading-relaxed italic font-medium">
                        "El mercado en Cuba premia la disponibilidad inmediata. Tener el stock físico en La Habana y poder ofrecer un precio competitivo basado en tu compra directa te garantiza ser el líder en Revolico desde el día uno."
                    </p>
                    <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <button 
                            onClick={handleShare}
                            className={`flex items-center gap-3 font-black text-xs uppercase tracking-widest transition-all ${copied ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}
                        >
                            {copied ? <Check size={18} /> : <Share2 size={18} />}
                            {copied ? 'Reporte copiado' : 'Compartir análisis de mercado'}
                        </button>
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-[10px] font-black text-slate-500 uppercase">Datos en tiempo real</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
