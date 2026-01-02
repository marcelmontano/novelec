
import React, { useState, useMemo } from 'react';
import { INVENTORY, CONTAINERS, CONTACT_DETAILS } from '../constants';
import { Battery, Zap, Cpu, Package, ChevronDown, Sun, AlertCircle, FileText } from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Generator': return <Zap className="h-4 w-4 text-yellow-500" />;
    case 'Battery': return <Battery className="h-4 w-4 text-emerald-500" />;
    case 'Inverter': return <Cpu className="h-4 w-4 text-blue-500" />;
    case 'Solar Panel': return <Sun className="h-4 w-4 text-orange-500" />;
    default: return <Package className="h-4 w-4 text-slate-400" />;
  }
};

const ExpandedGallery: React.FC<{ mainImage: string; additionalImages?: string[]; alt: string }> = ({ mainImage, additionalImages, alt }) => {
  const images = useMemo(() => [mainImage, ...(additionalImages || [])], [mainImage, additionalImages]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full rounded-[2rem] bg-white p-8 flex items-center justify-center overflow-hidden border border-slate-700 relative group min-h-[300px] max-h-[500px] shadow-lg">
        <img 
            src={images[activeIndex]} 
            alt={`${alt} view ${activeIndex + 1}`} 
            className="max-h-[440px] w-full object-contain" 
        />
        {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
                {activeIndex + 1} / {images.length}
            </div>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
            {images.map((img, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl border-2 transition-all overflow-hidden bg-white p-1 ${
                        activeIndex === idx ? 'border-cyan-500 shadow-md' : 'border-slate-800 opacity-40 hover:opacity-100'
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
  const [activeTab, setActiveTab] = useState<string>('longi');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredInventory = INVENTORY.filter(item => item.containerId === activeTab);
  const activeContainer = CONTAINERS.find(c => c.id === activeTab);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <section id="inventory" className="py-24 bg-[#0a0f1d] relative overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner de Precio de Lote / Contenedor */}
        <div className="flex justify-center mb-16">
            <div className="bg-[#121a2d] border border-slate-800 rounded-[2.5rem] p-4 flex flex-col sm:flex-row items-center gap-8 shadow-2xl">
                <div className="flex items-center gap-6 px-8 py-2">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                        <Zap className="text-yellow-500 rotate-12" size={24} fill="currentColor" />
                    </div>
                    <div>
                        <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Inversión Lote {activeContainer?.brand}</span>
                        <span className="text-4xl font-black text-white leading-none">
                            {CONTACT_DETAILS.currency === 'EUR' ? '€' : '$'}{activeContainer?.price.toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
                <button className="bg-[#1e293b] hover:bg-[#2e3a4d] text-white px-10 py-5 rounded-2xl flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all">
                    <FileText size={18} className="text-slate-400" /> Bajar Packing List
                </button>
            </div>
        </div>

        {/* Selector de Marca */}
        <div className="flex justify-center mb-12">
            <div className="bg-slate-950 p-2 rounded-3xl border border-slate-800 inline-flex shadow-xl overflow-x-auto max-w-full no-scrollbar">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id); setExpandedRow(null); }}
                        className={`px-8 sm:px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                            activeTab === c.id 
                            ? (c.id === 'longi' ? 'bg-orange-600 text-white shadow-lg' : c.id === 'ecoflow' ? 'bg-cyan-600 text-white shadow-lg' : 'bg-yellow-600 text-white shadow-lg') 
                            : 'text-slate-500 hover:text-white'
                        }`}
                    >
                        {c.brand}
                    </button>
                ))}
            </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[#111827]/40">
          <table className="min-w-full divide-y divide-slate-800 table-auto">
            <thead className="bg-[#0f172a]/80">
              <tr>
                <th className="px-8 py-6 text-left text-[11px] font-black text-slate-500 uppercase tracking-widest">Modelo / SKU</th>
                <th className="hidden sm:table-cell px-8 py-6 text-left text-[11px] font-black text-slate-500 uppercase tracking-widest text-center">Categoría del Lote</th>
                <th className="px-8 py-6 text-right text-[11px] font-black text-slate-500 uppercase tracking-widest">Cantidad en Lote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredInventory.map((item) => (
                <React.Fragment key={item.id}>
                  <tr 
                    onClick={() => toggleRow(item.id)} 
                    className={`cursor-pointer transition-colors ${expandedRow === item.id ? 'bg-[#1e293b]/60' : 'hover:bg-[#1e293b]/30'}`}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform duration-300 ${expandedRow === item.id ? 'rotate-180 text-cyan-500' : ''}`} />
                        <div className="h-12 w-12 rounded-xl bg-white p-1.5 border border-slate-700 shadow-sm flex-shrink-0">
                          <img src={item.imagePlaceholder} alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-black text-white leading-none uppercase tracking-tight truncate">{item.modelName}</div>
                          <div className="text-[10px] text-slate-500 font-bold mt-1.5 uppercase tracking-wider">{item.sku}</div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell px-8 py-6 text-center">
                      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {getIcon(item.category)} {item.category}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="inline-block px-4 py-2 rounded-xl bg-yellow-500/5 text-yellow-500 border border-yellow-500/20 text-[11px] font-black uppercase">
                        {item.containerId === 'longi' ? `${item.quantity / 36} Pallets` : `x${item.quantity} Uni.`}
                      </span>
                    </td>
                  </tr>
                  
                  {expandedRow === item.id && (
                    <tr className="bg-[#0f172a]">
                      <td colSpan={3} className="px-0 py-0">
                        <div className="p-8 sm:p-16 animate-fade-in-up border-l-4 border-orange-600">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            
                            {/* Galería */}
                            <div className="lg:col-span-5">
                              <ExpandedGallery 
                                mainImage={item.imagePlaceholder} 
                                additionalImages={item.additionalImages}
                                alt={item.modelName}
                              />
                            </div>

                            {/* Detalles */}
                            <div className="lg:col-span-7 flex flex-col space-y-10">
                              
                              <div>
                                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 border-b border-slate-800 pb-5">Especificaciones del Ítem</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                                  {item.description}
                                </p>
                              </div>

                              {/* Bloque de Especificaciones */}
                              <div className="bg-[#111827] border border-slate-800 rounded-[2rem] p-10 flex flex-col sm:flex-row gap-10 sm:items-center justify-between shadow-inner">
                                <div>
                                  <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Capacidad / Potencia</h5>
                                  <p className="text-2xl font-black text-white leading-tight">
                                    {item.specs.capacity}
                                  </p>
                                </div>
                                <div className="sm:text-right">
                                  <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Unidades Incluidas</h5>
                                  <p className="text-2xl font-black text-white">
                                    {item.containerId === 'longi' ? `${item.quantity / 36} Pallets (1440 Uni.)` : `${item.quantity} Equipos`}
                                  </p>
                                </div>
                              </div>

                              {/* Extras List */}
                              {item.specs.extras && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {item.specs.extras.map((extra, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                                      <Zap size={14} className="text-yellow-500 shrink-0" />
                                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{extra}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Advertencia de Lote */}
                              <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 text-center">
                                <p className="text-[10px] font-black text-red-500/80 uppercase tracking-[0.2em] italic leading-relaxed">
                                  Este ítem forma parte de un lote indivisible para venta mayorista corporativa.
                                </p>
                              </div>

                              {/* Botones de Acción */}
                              <div className="flex flex-wrap gap-5 pt-4">
                                <button className="flex-1 min-w-[280px] bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest shadow-lg transition-all active:scale-95">
                                  Solicitar Cotización Lote
                                </button>
                                {item.datasheetUrl && (
                                  <a 
                                    href={item.datasheetUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 bg-[#1e293b] hover:bg-[#334155] text-white rounded-2xl font-black text-[13px] uppercase tracking-widest transition-all text-center"
                                  >
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
    </section>
  );
};