import React, { useState, useMemo } from 'react';
import { INVENTORY, CONTAINERS } from '../constants';
import { Battery, Zap, Cpu, Package, FileSpreadsheet, ChevronDown, Info } from 'lucide-react';

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
    <div className="flex flex-col gap-3 w-full">
      {/* Contenedor de imagen optimizado para móviles */}
      <div className="w-full rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-slate-700 relative group min-h-[240px] max-h-[400px]">
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
      
      {/* Miniaturas optimizadas para scroll táctil */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide snap-x">
            {images.map((img, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 transition-all overflow-hidden bg-white snap-center ${
                        activeIndex === idx ? 'border-cyan-500 scale-105' : 'border-slate-800 opacity-50'
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
    const headers = ["Modelo", "SKU", "Categoría", "Cantidad", "Especificaciones", "Costo Unitario (Est)", "Precio Venta Unitario", "Margen Total Estimado"];
    const rows = filteredInventory.map(item => [
        `"${item.modelName.replace(/"/g, '""')}"`,
        `"${item.sku}"`,
        item.category,
        item.quantity,
        `"${item.specs.capacity} ${item.specs.output || ''}"`.trim(),
        "", "", ""
    ].join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Inventario_Novelec_${activeContainer.brand}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inventory" className="py-16 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Inventario Detallado</h2>
          <p className="mt-3 text-base text-slate-400">Toca un producto para ver fotos y especificaciones.</p>
        </div>

        <div className="flex flex-col items-center mb-8 gap-6">
            <div className="bg-slate-900 p-1 rounded-2xl inline-flex shadow-xl border border-slate-700 w-full max-w-md">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id); setExpandedRow(null); }}
                        className={`flex-1 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                            activeTab === c.id 
                            ? (c.id === 'ecoflow' ? 'bg-cyan-600 text-white' : 'bg-yellow-600 text-white') 
                            : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {c.brand}
                    </button>
                ))}
            </div>

            <button
                onClick={downloadCSV}
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs font-black text-slate-300 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 transition-all"
            >
                <FileSpreadsheet className={`h-4 w-4 ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`} />
                LISTA PARA EXCEL (.CSV)
            </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl bg-slate-900/40">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Producto</th>
                  <th className="hidden sm:table-cell px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Categoría</th>
                  <th className="px-4 sm:px-6 py-4 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">Cant.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredInventory.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr 
                        onClick={() => toggleRow(item.id)}
                        className={`cursor-pointer transition-colors ${expandedRow === item.id ? 'bg-slate-800/80' : 'hover:bg-slate-800/40'}`}
                    >
                        <td className="px-4 sm:px-6 py-4">
                            <div className="flex items-center">
                                <ChevronDown className={`h-4 w-4 text-slate-500 mr-2 transition-transform duration-300 ${expandedRow === item.id ? 'rotate-180 text-cyan-400' : ''}`} />
                                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-white overflow-hidden flex items-center justify-center p-1 border border-slate-700">
                                    <img src={item.imagePlaceholder} alt="" className="h-full w-full object-contain" />
                                </div>
                                <div className="ml-3 min-w-0">
                                    <div className="text-sm font-bold text-white truncate max-w-[140px] sm:max-w-none">{item.modelName}</div>
                                    <div className="text-[10px] text-slate-500 font-mono">{item.sku}</div>
                                </div>
                            </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4">
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                {getIcon(item.category)}
                                {item.category}
                            </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                            <span className={`inline-block min-w-[32px] px-2 py-1 rounded text-sm font-black ${
                                activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-yellow-500/10 text-yellow-400'
                            }`}>
                                {item.quantity}
                            </span>
                        </td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr className="bg-slate-900/60">
                            <td colSpan={4} className="px-0 py-0">
                                <div className="p-4 sm:p-8 whitespace-normal break-words">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Galería */}
                                        <div className="lg:w-1/2 w-full">
                                            <ExpandedGallery 
                                                mainImage={item.imagePlaceholder} 
                                                additionalImages={item.additionalImages}
                                                alt={item.modelName}
                                            />
                                        </div>

                                        {/* Información Detallada */}
                                        <div className="flex-1 space-y-8">
                                            <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
                                                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <Info size={14} /> DESCRIPCIÓN
                                                </h4>
                                                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="bg-slate-800/20 p-5 rounded-2xl border border-slate-700/30">
                                                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">
                                                    ESPECIFICACIONES TÉCNICAS
                                                </h4>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div className="flex flex-col gap-1">
                                                        <dt className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Capacidad</dt>
                                                        <dd className="text-sm text-slate-200 font-bold">{item.specs.capacity}</dd>
                                                    </div>
                                                    {item.specs.output && (
                                                        <div className="flex flex-col gap-1">
                                                            <dt className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Salida</dt>
                                                            <dd className="text-sm text-slate-200 font-bold">{item.specs.output}</dd>
                                                        </div>
                                                    )}
                                                    {item.specs.weight && (
                                                        <div className="flex flex-col gap-1">
                                                            <dt className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Peso</dt>
                                                            <dd className="text-sm text-slate-200 font-bold">{item.specs.weight}</dd>
                                                        </div>
                                                    )}
                                                </dl>

                                                {item.specs.extras && item.specs.extras.length > 0 && (
                                                     <div className="mt-8">
                                                        <dt className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">CARACTERÍSTICAS EXTRA</dt>
                                                        <ul className="grid grid-cols-1 gap-2">
                                                            {item.specs.extras.map((ex, i) => (
                                                                <li key={i} className="flex items-center text-xs text-slate-300 bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-700/30">
                                                                     <div className={`mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0 ${activeTab === 'ecoflow' ? 'bg-cyan-500' : 'bg-yellow-500'}`}></div>
                                                                     {ex}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                     </div>
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