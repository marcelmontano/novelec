
import React, { useState, useMemo } from 'react';
import { INVENTORY, CONTAINERS } from '../constants';
import { Battery, Zap, Cpu, Package, FileSpreadsheet, ChevronDown, Info, FileDown, Building2, Lock } from 'lucide-react';

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
    <div className="flex flex-col gap-3 w-full max-w-full overflow-hidden">
      <div className="w-full rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-slate-700 relative group min-h-[220px] max-h-[400px]">
        <img 
            src={images[activeIndex]} 
            alt={`${alt} view ${activeIndex + 1}`} 
            className="max-h-[380px] w-full object-contain transition-all duration-300" 
        />
        {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/10">
                {activeIndex + 1} / {images.length}
            </div>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide snap-x">
            {images.map((img, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 transition-all overflow-hidden bg-white snap-center ${
                        activeIndex === idx ? 'border-cyan-500 scale-105 shadow-md shadow-cyan-500/20' : 'border-slate-800 opacity-50'
                    }`}
                >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
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
    const headers = ["Modelo", "SKU", "Categoría", "Cantidad", "Especificaciones"];
    const rows = filteredInventory.map(item => [
        `"${item.modelName.replace(/"/g, '""')}"`,
        `"${item.sku}"`,
        item.category,
        item.quantity,
        `"${item.specs.capacity} ${item.specs.output || ''}"`.trim()
    ].join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `PackingList_Novelec_${activeContainer.brand}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inventory" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Lock size={14} className="text-yellow-500" /> VENTA POR LOTE INDIVISIBLE
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-6xl uppercase tracking-tighter">Packing List <span className="text-cyan-500">Completo</span></h2>
          <p className="mt-4 text-lg text-slate-400 font-medium">Desglose técnico de la carga por contenedor. No se permiten compras parciales.</p>
        </div>

        <div className="flex flex-col items-center mb-10 gap-6">
            <div className="bg-slate-950 p-1.5 rounded-2xl inline-flex shadow-xl border border-slate-800 w-full max-w-md relative">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id); setExpandedRow(null); }}
                        className={`flex-1 px-4 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-200 relative overflow-hidden ${
                            activeTab === c.id 
                            ? (c.id === 'ecoflow' ? 'bg-cyan-600 text-white' : 'bg-yellow-600 text-white') 
                            : 'text-slate-500 hover:text-white hover:bg-slate-900'
                        }`}
                    >
                        {c.brand}
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                  onClick={downloadCSV}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-xs font-black text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all shadow-xl"
              >
                  <FileSpreadsheet className="h-4 w-4" />
                  PACKING LIST (.CSV)
              </button>
              <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-2xl">
                 <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">
                    AVISO: SOLO VENTA B2B POR CONTENEDOR COMPLETO
                 </p>
              </div>
            </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-3xl bg-slate-950/50 backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800 table-auto">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-6 py-5 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo / SKU</th>
                  <th className="hidden sm:table-cell px-6 py-5 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Categoría del Lote</th>
                  <th className="px-6 py-5 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">Cantidad en Lote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredInventory.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr 
                        onClick={() => toggleRow(item.id)}
                        className={`cursor-pointer transition-colors ${expandedRow === item.id ? 'bg-slate-800/80' : 'hover:bg-slate-900/80'}`}
                    >
                        <td className="px-6 py-5">
                            <div className="flex items-start">
                                <ChevronDown className={`h-4 w-4 text-slate-500 mr-3 flex-shrink-0 transition-transform duration-300 mt-1 ${expandedRow === item.id ? 'rotate-180 text-cyan-400' : ''}`} />
                                <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-white overflow-hidden flex items-center justify-center p-1 border border-slate-700 mt-0.5">
                                    <img src={item.imagePlaceholder} alt="" className="h-full w-full object-contain" />
                                </div>
                                <div className="ml-4 min-w-0 flex-grow">
                                    <div className="text-sm font-black text-white leading-tight uppercase tracking-tight">{item.modelName}</div>
                                    <div className="text-[10px] text-slate-500 font-mono mt-1 font-bold">{item.sku}</div>
                                </div>
                            </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-5">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                {getIcon(item.category)}
                                {item.category}
                            </div>
                        </td>
                        <td className="px-6 py-5 text-center">
                            <span className={`inline-block min-w-[60px] px-3 py-1.5 rounded-lg text-xs font-black ${
                                activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                                x{item.quantity} Uni.
                            </span>
                        </td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr className="bg-slate-950">
                            <td colSpan={3} className="px-0 py-0">
                                <div className="p-8 sm:p-12 animate-fade-in-up">
                                    <div className="flex flex-col lg:flex-row gap-12">
                                        <div className="lg:w-1/2 flex-shrink-0">
                                            <ExpandedGallery 
                                                mainImage={item.imagePlaceholder} 
                                                additionalImages={item.additionalImages}
                                                alt={item.modelName}
                                            />
                                        </div>
                                        <div className="flex-1 space-y-8">
                                            <div>
                                                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 border-b border-slate-800 pb-2">Especificaciones del Ítem</h4>
                                                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                                <div>
                                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Capacidad / Potencia</p>
                                                    <p className="text-sm text-white font-bold">{item.specs.capacity} {item.specs.output ? `| ${item.specs.output}` : ''}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Unidades Incluidas en Lote</p>
                                                    <p className="text-sm text-white font-bold">{item.quantity} Equipos</p>
                                                </div>
                                            </div>
                                            <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl">
                                                <p className="text-[9px] font-black text-red-400 uppercase tracking-widest italic text-center">
                                                    Este ítem forma parte de un lote indivisible. No disponible para venta unitaria.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                               <a 
                                                  href="#quote-form" 
                                                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
                                               >
                                                  Solicitar Cotización Contenedor
                                               </a>
                                               {item.datasheetUrl && (
                                                  <a href={item.datasheetUrl} target="_blank" className="bg-slate-800 text-slate-300 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-colors border border-slate-700">
                                                     Ficha Técnica
                                                  </a>
                                               )}
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
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
