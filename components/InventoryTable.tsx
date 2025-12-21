
import React, { useState, useMemo } from 'react';
import { INVENTORY, CONTAINERS } from '../constants';
import { Battery, Zap, Cpu, Package, FileSpreadsheet, ChevronDown, Info, FileDown } from 'lucide-react';

const IconWithTooltip: React.FC<{ category: string }> = ({ category }) => {
  const icon = useMemo(() => {
    switch (category) {
      case 'Generator': return <Zap className="h-5 w-5 text-yellow-400" />;
      case 'Battery': return <Battery className="h-5 w-5 text-green-400" />;
      case 'Inverter': return <Cpu className="h-5 w-5 text-blue-400" />;
      default: return <Package className="h-5 w-5 text-slate-400" />;
    }
  }, [category]);

  return (
    <div className="group relative flex items-center justify-center">
      {icon}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:flex flex-col items-center z-[100] pointer-events-none transition-all duration-200">
        <div className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border border-slate-700 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] whitespace-nowrap animate-fade-in-up">
          {category}
        </div>
        <div className="w-2 h-2 bg-slate-950 border-r border-b border-slate-700 rotate-45 -mt-1 shadow-xl"></div>
      </div>
    </div>
  );
};

const ExpandedGallery: React.FC<{ mainImage: string; additionalImages?: string[]; alt: string }> = ({ mainImage, additionalImages, alt }) => {
  const images = useMemo(() => [mainImage, ...(additionalImages || [])], [mainImage, additionalImages]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3 w-full max-w-full overflow-hidden">
      {/* Contenedor de imagen optimizado para móviles */}
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
      
      {/* Miniaturas optimizadas para scroll táctil */}
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
    <section id="inventory" className="py-16 bg-slate-800 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl uppercase tracking-tighter">Inventario Detallado</h2>
          <p className="mt-3 text-base text-slate-400">Seleccione un producto para inspeccionar sus especificaciones técnicas.</p>
        </div>

        <div className="flex flex-col items-center mb-8 gap-6">
            <div className="bg-slate-900 p-1.5 rounded-2xl inline-flex shadow-xl border border-slate-700 w-full max-w-md">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id); setExpandedRow(null); }}
                        className={`flex-1 px-4 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-200 ${
                            activeTab === c.id 
                            ? (c.id === 'ecoflow' ? 'bg-cyan-600 text-white' : 'bg-yellow-600 text-white') 
                            : 'text-slate-500 hover:text-white'
                        }`}
                    >
                        {c.brand}
                    </button>
                ))}
            </div>

            <button
                onClick={downloadCSV}
                className="group inline-flex items-center gap-3 px-8 py-3.5 text-[10px] font-black text-slate-400 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white transition-all uppercase tracking-[0.2em]"
            >
                <FileSpreadsheet className={`h-4 w-4 ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`} />
                Exportar para Excel (.CSV)
            </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl bg-slate-900/40">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700 table-auto">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Modelo del Producto</th>
                  <th className="hidden sm:table-cell px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Categoría</th>
                  <th className="px-4 sm:px-6 py-4 text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">Stock</th>
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
                            <div className="flex items-start">
                                <ChevronDown className={`h-4 w-4 text-slate-500 mr-2 flex-shrink-0 transition-transform duration-300 mt-1 ${expandedRow === item.id ? 'rotate-180 text-cyan-400' : ''}`} />
                                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-white overflow-hidden flex items-center justify-center p-1 border border-slate-700 mt-0.5 shadow-inner">
                                    <img src={item.imagePlaceholder} alt="" className="h-full w-full object-contain" />
                                </div>
                                <div className="ml-3 min-w-0 flex-grow">
                                    <div className="text-sm font-black text-white leading-snug whitespace-normal break-words">{item.modelName}</div>
                                    <div className="text-[10px] text-slate-500 font-mono mt-0.5 break-all tracking-tighter uppercase">{item.sku}</div>
                                </div>
                            </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4">
                            <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                                <IconWithTooltip category={item.category} />
                                <span className="hidden lg:inline">{item.category}</span>
                            </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                            <span className={`inline-block min-w-[32px] px-3 py-1 rounded-md text-xs font-black ${
                                activeTab === 'ecoflow' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                            }`}>
                                x{item.quantity}
                            </span>
                        </td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr className="bg-slate-900/60">
                            <td colSpan={3} className="px-0 py-0 overflow-hidden max-w-[calc(100vw-2rem)]">
                                <div className="p-4 sm:p-8 w-full block">
                                    <div className="flex flex-col lg:flex-row gap-8 w-full overflow-hidden">
                                        {/* Galería */}
                                        <div className="lg:w-1/2 w-full flex-shrink-0">
                                            <ExpandedGallery 
                                                mainImage={item.imagePlaceholder} 
                                                additionalImages={item.additionalImages}
                                                alt={item.modelName}
                                            />
                                            {item.datasheetUrl && (
                                                <a 
                                                    href={item.datasheetUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className={`mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg ${
                                                        activeTab === 'ecoflow' 
                                                        ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-cyan-900/20' 
                                                        : 'border-yellow-500/30 text-yellow-500 hover:bg-yellow-500 hover:text-white shadow-yellow-900/20'
                                                    }`}
                                                >
                                                    <FileDown size={18} /> Descargar Ficha Técnica PDF
                                                </a>
                                            )}
                                        </div>

                                        {/* Información Detallada */}
                                        <div className="flex-1 space-y-6 min-w-0">
                                            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/50 w-full shadow-inner">
                                                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                    <Info size={14} /> INFORMACIÓN DEL PRODUCTO
                                                </h4>
                                                <p className="text-slate-300 text-sm leading-relaxed font-medium whitespace-normal break-words overflow-wrap-anywhere">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/30 w-full">
                                                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-5 border-b border-slate-700/50 pb-3">
                                                    ESPECIFICACIONES DEL EQUIPO
                                                </h4>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                                                    <div className="flex flex-col gap-1">
                                                        <dt className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Capacidad Nominal</dt>
                                                        <dd className="text-sm text-slate-200 font-bold break-words">{item.specs.capacity}</dd>
                                                    </div>
                                                    {item.specs.output && (
                                                        <div className="flex flex-col gap-1">
                                                            <dt className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Salida Máxima</dt>
                                                            <dd className="text-sm text-slate-200 font-bold break-words">{item.specs.output}</dd>
                                                        </div>
                                                    )}
                                                    {item.specs.weight && (
                                                        <div className="flex flex-col gap-1">
                                                            <dt className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Peso Neto</dt>
                                                            <dd className="text-sm text-slate-200 font-bold break-words">{item.specs.weight}</dd>
                                                        </div>
                                                    )}
                                                </dl>

                                                {item.specs.extras && item.specs.extras.length > 0 && (
                                                     <div className="mt-8">
                                                        <dt className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">CARACTERÍSTICAS CLAVE</dt>
                                                        <ul className="grid grid-cols-1 gap-2.5">
                                                            {item.specs.extras.map((ex, i) => (
                                                                <li key={i} className="flex items-center text-[11px] text-slate-300 bg-slate-900/50 px-4 py-2.5 rounded-xl border border-slate-700/30 group/item hover:border-slate-500 transition-colors">
                                                                     <div className={`mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0 ${activeTab === 'ecoflow' ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]'}`}></div>
                                                                     <span className="break-words font-medium">{ex}</span>
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
