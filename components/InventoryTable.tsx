
import React, { useState, useMemo } from 'react';
import { INVENTORY, CONTAINERS } from '../constants';
import { 
  Battery, 
  Zap, 
  Cpu, 
  Package, 
  FileSpreadsheet, 
  ChevronDown, 
  Info, 
  FileDown, 
  TrendingUp, 
  MapPin, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Generator': return <Zap className="h-5 w-5 text-yellow-400" />;
    case 'Battery': return <Battery className="h-5 w-5 text-green-400" />;
    case 'Inverter': return <Cpu className="h-5 w-5 text-blue-400" />;
    default: return <Package className="h-5 w-5 text-slate-400" />;
  }
};

const ExpandedGallery: React.FC<{ mainImage: string; additionalImages?: string[]; alt: string }> = ({ mainImage, additionalImages, alt }) => {
  const images = useMemo(() => [mainImage, ...(additionalImages || [])], [mainImage, additionalImages]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full aspect-square rounded-2xl bg-white p-6 flex items-center justify-center border border-slate-700 shadow-2xl relative group">
        <img 
          src={images[activeIndex]} 
          alt={`${alt} view ${activeIndex + 1}`} 
          className="max-h-full max-w-full object-contain transition-all duration-500 transform group-hover:scale-110" 
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-16 h-16 rounded-xl border-2 transition-all overflow-hidden bg-white ${
                activeIndex === idx ? 'border-cyan-500 scale-105 shadow-lg shadow-cyan-500/20' : 'border-slate-800 opacity-40 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const InventoryTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredInventory = INVENTORY.filter(item => item.containerId === activeTab);
  const activeContainer = CONTAINERS.find(c => c.id === activeTab);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const downloadCSV = () => {
    if (!activeContainer) return;
    const headers = ["Modelo", "SKU", "Categoría", "Cantidad", "Especificaciones", "Costo Unitario (Est)", "Precio Venta Unitario", "Margen Total Estimado"];
    
    const rows = filteredInventory.map(item => {
        const costoUnitario = item.marketPrice || 0;
        const ventaUnitario = item.estimatedResalePrice || 0;
        const margenTotal = (ventaUnitario - costoUnitario) * item.quantity;

        return [
            `"${item.modelName.replace(/"/g, '""')}"`,
            `"${item.sku}"`,
            item.category,
            item.quantity,
            `"${item.specs.capacity} ${item.specs.output || ''}"`.trim(),
            `€${costoUnitario.toFixed(2)}`,
            `€${ventaUnitario.toFixed(2)}`,
            `€${margenTotal.toFixed(2)}`
        ].join(",");
    });

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Analisis_Inversion_Novelec_${activeContainer.brand}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inventory" className="py-24 bg-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl uppercase italic">Inventario y <span className="text-cyan-400">Escandallo</span></h2>
          <p className="mt-4 text-xl text-slate-400 font-medium">Desglose técnico y financiero detallado de cada unidad en el contenedor.</p>
        </div>

        {/* TABS Y ACCIONES */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div className="bg-slate-800 p-1.5 rounded-2xl inline-flex border border-slate-700 shadow-2xl w-full md:w-auto">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id as any); setExpandedRow(null); }}
                        className={`flex-1 md:flex-none px-10 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all ${
                            activeTab === c.id 
                            ? (activeTab === 'ecoflow' ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-900/40' : 'bg-yellow-600 text-white shadow-xl shadow-yellow-900/40') 
                            : 'text-slate-500 hover:text-white'
                        }`}
                    >
                        {c.brand}
                    </button>
                ))}
            </div>

            <button
                onClick={downloadCSV}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-950 border border-slate-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
            >
                <FileSpreadsheet className={`h-5 w-5 ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`} />
                LISTA PARA EXCEL (.CSV)
            </button>
        </div>

        {/* TABLA PRINCIPAL */}
        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] shadow-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800">
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Equipo / SKU</th>
                  <th className="hidden lg:table-cell px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Categoría</th>
                  <th className="px-6 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Stock</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] text-right">Costo Unitario</th>
                  <th className="px-8 py-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {filteredInventory.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr 
                      className={`group cursor-pointer transition-all ${expandedRow === item.id ? 'bg-slate-900' : 'hover:bg-slate-900/40'}`}
                      onClick={() => toggleRow(item.id)}
                    >
                      <td className="px-8 py-8">
                          <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-800 shadow-inner group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
                               <img src={item.imagePlaceholder} className="w-full h-full object-contain" alt="" />
                            </div>
                            <div>
                               <div className="text-lg font-black text-white tracking-tighter uppercase leading-none mb-1">{item.modelName}</div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.sku}</div>
                            </div>
                          </div>
                      </td>
                      <td className="hidden lg:table-cell px-8 py-8">
                          <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                             {getIcon(item.category)}
                             {item.category}
                          </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                          <span className={`inline-block px-4 py-1 rounded-lg text-sm font-black tracking-widest ${activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-yellow-500/10 text-yellow-500'}`}>
                             x{item.quantity}
                          </span>
                      </td>
                      <td className="px-8 py-8 text-right">
                          <div className="text-xl font-black text-white tabular-nums tracking-tighter">€{item.marketPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</div>
                      </td>
                      <td className="px-8 py-8 text-right">
                          <div className={`p-2 rounded-full transition-all ${expandedRow === item.id ? 'bg-cyan-500 text-white rotate-180' : 'bg-slate-800 text-slate-500'}`}>
                             <ChevronDown size={20} />
                          </div>
                      </td>
                    </tr>

                    {/* VISTA DETALLADA EXPANDIDA - RESTAURADA */}
                    {expandedRow === item.id && (
                      <tr className="bg-slate-900/50">
                        <td colSpan={5} className="px-8 py-12 border-y border-slate-800">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up">
                            
                            {/* COLUMNA VISUAL */}
                            <div>
                               <ExpandedGallery 
                                  mainImage={item.imagePlaceholder} 
                                  additionalImages={item.additionalImages} 
                                  alt={item.modelName} 
                               />
                               <div className="mt-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                     <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                                        <MapPin size={22} />
                                     </div>
                                     <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Disponibilidad</p>
                                        <p className="text-xs font-bold text-white uppercase tracking-wider">Tradex (Reparto Eléctrico)</p>
                                     </div>
                                  </div>
                                  <div className="text-right">
                                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Entrega</p>
                                     <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Inmediata</p>
                                  </div>
                               </div>
                            </div>

                            {/* COLUMNA DE DATOS */}
                            <div className="flex flex-col justify-center">
                               <div className="flex items-center gap-3 text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6">
                                  <Info size={16} /> Ficha Comercial y Técnica
                                </div>
                                <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none mb-6">
                                   {item.modelName}
                                </h3>
                                <p className="text-slate-400 text-base leading-relaxed font-medium mb-10 border-l-4 border-slate-800 pl-6">
                                   {item.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                   <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                      <div className="flex items-center gap-3 text-slate-500 mb-2">
                                         <Battery size={20} />
                                         <span className="text-[10px] font-black uppercase tracking-widest">Capacidad Nominal</span>
                                      </div>
                                      <div className="text-xl font-black text-white tracking-tight">{item.specs.capacity}</div>
                                   </div>
                                   {item.specs.output && (
                                      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                         <div className="flex items-center gap-3 text-slate-500 mb-2">
                                            <Cpu size={20} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Salida AC (Inversor)</span>
                                         </div>
                                         <div className="text-xl font-black text-white tracking-tight">{item.specs.output}</div>
                                      </div>
                                   )}
                                </div>

                                {item.specs.extras && item.specs.extras.length > 0 && (
                                  <div className="mb-10">
                                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Puntos Clave:</p>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {item.specs.extras.map((extra, i) => (
                                          <div key={i} className="flex items-center gap-3 text-xs text-slate-300 bg-slate-800/40 px-4 py-2 rounded-xl">
                                             <CheckCircle2 size={14} className="text-cyan-400" />
                                             {extra}
                                          </div>
                                        ))}
                                     </div>
                                  </div>
                                )}

                                <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden group">
                                   <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-8">
                                      <div>
                                         <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Precio Reventa Est. (Cuba)</p>
                                         <p className="text-4xl font-black text-white tabular-nums tracking-tighter">€{item.estimatedResalePrice?.toLocaleString()}</p>
                                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Margen Unitario: +€{(item.estimatedResalePrice - item.marketPrice).toFixed(0)}</p>
                                      </div>
                                      <a 
                                         href={`https://wa.me/5358183649?text=Hola,%20deseo%20más%20información%20sobre%20el%20modelo%20${encodeURIComponent(item.modelName)}.`}
                                         target="_blank"
                                         className="flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-slate-200 transition-all active:scale-95"
                                      >
                                         Soporte Técnico <ChevronRight size={16} />
                                      </a>
                                   </div>
                                </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-900/40">
                  <td colSpan={3} className="px-8 py-10 text-right text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">VALOR ADQUISICIÓN LOTE</td>
                  <td colSpan={2} className="px-8 py-10 text-right">
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter tabular-nums">
                      €{activeContainer?.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
