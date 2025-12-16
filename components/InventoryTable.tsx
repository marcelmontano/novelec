import React, { useState } from 'react';
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

export const InventoryTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecoflow' | 'deye'>('ecoflow');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredInventory = INVENTORY.filter(item => item.containerId === activeTab);
  const activeContainer = CONTAINERS.find(c => c.id === activeTab);

  const toggleRow = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const downloadCSV = () => {
    if (!activeContainer) return;
    
    // CSV Header
    const headers = [
        "Modelo", 
        "SKU", 
        "Categoría", 
        "Cantidad", 
        "Especificaciones",
        "Costo Unitario (Est)", 
        "Precio Venta Unitario", 
        "Margen Total Estimado"
    ];

    // CSV Rows
    const rows = filteredInventory.map(item => {
        const specs = `${item.specs.capacity} ${item.specs.output || ''}`.trim();
        return [
            `"${item.modelName.replace(/"/g, '""')}"`, // Escape quotes
            `"${item.sku}"`,
            item.category,
            item.quantity,
            `"${specs}"`,
            "", // Placeholder for user input
            "", // Placeholder for user input
            ""  // Placeholder for user input
        ].join(",");
    });

    const csvContent = [headers.join(","), ...rows].join("\n");
    
    // Create Blob with BOM for Excel UTF-8 compatibility
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // Trigger Download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Inventario_Novelec_${activeContainer.brand}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inventory" className="py-20 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Inventario Detallado</h2>
          <p className="mt-4 text-lg text-slate-400">Seleccione el contenedor para ver su contenido específico.</p>
        </div>

        {/* Tabs and Download Action */}
        <div className="flex flex-col items-center mb-8 gap-6">
            <div className="bg-slate-900 p-1 rounded-xl inline-flex shadow-lg border border-slate-700">
                {CONTAINERS.map(c => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveTab(c.id); setExpandedRow(null); }}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === c.id 
                            ? (c.id === 'ecoflow' ? 'bg-cyan-600 text-white shadow-lg' : 'bg-yellow-600 text-white shadow-lg') 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        Contenedor {c.brand}
                    </button>
                ))}
            </div>

            <button
                onClick={downloadCSV}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-600 rounded-full hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all shadow-sm"
            >
                <FileSpreadsheet className={`h-4 w-4 ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'} group-hover:scale-110 transition-transform`} />
                Descargar Lista para Excel (.csv)
            </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-slate-900/50">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-900">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Modelo</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Categoría</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Especificaciones Clave</th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-white">Cantidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredInventory.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <tr 
                        onClick={() => toggleRow(item.id)}
                        className={`cursor-pointer ${index % 2 === 0 ? 'bg-slate-800/30' : 'bg-transparent'} hover:bg-slate-800/50 transition-colors ${expandedRow === item.id ? 'bg-slate-700/50' : ''}`}
                    >
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className={`mr-3 transition-transform duration-200 ${expandedRow === item.id ? 'rotate-180' : ''}`}>
                                <ChevronDown className="h-5 w-5 text-slate-500" />
                            </div>
                            <div className="h-10 w-10 flex-shrink-0 rounded bg-white overflow-hidden flex items-center justify-center">
                                {item.imagePlaceholder.includes('picsum') ? (
                                    <span className="text-xs font-bold text-slate-500">{item.id.toUpperCase().substring(0,2)}</span>
                                ) : (
                                    <img src={item.imagePlaceholder} alt={item.modelName} className="h-full w-full object-cover" />
                                )}
                            </div>
                            <div className="ml-4">
                            <div className="text-sm font-medium text-white">{item.modelName}</div>
                            <div className="text-sm text-slate-500">{item.sku}</div>
                            </div>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            {getIcon(item.category)}
                            <span className="text-sm text-slate-300">{item.category}</span>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-300">
                            <span className="block">Capacidad: {item.specs.capacity}</span>
                            {item.specs.output && <span className="block text-slate-500">Salida: {item.specs.output}</span>}
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`inline-flex items-center rounded-md px-3 py-1 text-lg font-bold ring-1 ring-inset ${
                            activeTab === 'ecoflow' ? 'bg-cyan-400/10 text-cyan-400 ring-cyan-400/20' : 'bg-yellow-400/10 text-yellow-400 ring-yellow-400/20'
                        }`}>
                            {item.quantity}
                        </span>
                        </td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr className="bg-slate-800/40">
                            <td colSpan={4} className="px-0 sm:px-6 py-4">
                                <div className="rounded-b-lg sm:rounded-lg bg-slate-900/50 p-6 border border-slate-700/50 shadow-inner">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Large Image Section */}
                                        <div className="lg:w-64 flex-shrink-0">
                                            <div className="aspect-square w-full rounded-lg bg-white p-4 flex items-center justify-center overflow-hidden border border-slate-700">
                                                {item.imagePlaceholder.includes('picsum') ? (
                                                    <span className="text-4xl font-bold text-slate-300">{item.id.toUpperCase().substring(0,2)}</span>
                                                ) : (
                                                    <img 
                                                        src={item.imagePlaceholder} 
                                                        alt={item.modelName} 
                                                        className="h-full w-full object-contain" 
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Text Details Section */}
                                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <Info size={16} /> Descripción del Producto
                                                </h4>
                                                <p className="text-slate-300 text-sm leading-7">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-700 pb-2">
                                                    Especificaciones Técnicas Completas
                                                </h4>
                                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                                    <div className="flex flex-col">
                                                        <dt className="text-slate-500 text-xs uppercase tracking-wide">Capacidad</dt>
                                                        <dd className="text-slate-200 font-medium">{item.specs.capacity}</dd>
                                                    </div>
                                                    {item.specs.output && (
                                                        <div className="flex flex-col">
                                                            <dt className="text-slate-500 text-xs uppercase tracking-wide">Potencia / Salida</dt>
                                                            <dd className="text-slate-200 font-medium">{item.specs.output}</dd>
                                                        </div>
                                                    )}
                                                    {item.specs.weight && (
                                                        <div className="flex flex-col">
                                                            <dt className="text-slate-500 text-xs uppercase tracking-wide">Peso</dt>
                                                            <dd className="text-slate-200 font-medium">{item.specs.weight}</dd>
                                                        </div>
                                                    )}
                                                    {item.specs.extras && item.specs.extras.length > 0 && (
                                                         <div className="col-span-1 sm:col-span-2 pt-2">
                                                            <dt className="text-slate-500 text-xs uppercase tracking-wide mb-2">Características Adicionales</dt>
                                                            <dd className="text-slate-300">
                                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                                    {item.specs.extras.map((ex, i) => (
                                                                        <li key={i} className="flex items-start text-xs bg-slate-800 px-2 py-1.5 rounded border border-slate-700/50">
                                                                             <div className={`mr-2 mt-0.5 h-1.5 w-1.5 rounded-full ${activeTab === 'ecoflow' ? 'bg-cyan-500' : 'bg-yellow-500'}`}></div>
                                                                             {ex}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </dd>
                                                         </div>
                                                    )}
                                                </dl>
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
              <tfoot className="bg-slate-900">
                  <tr>
                      <td colSpan={3} className="px-6 py-4 text-right font-bold text-white text-lg">TOTAL UNIDADES ({activeContainer?.brand})</td>
                      <td className={`px-6 py-4 text-center font-bold text-xl ${activeTab === 'ecoflow' ? 'text-cyan-400' : 'text-yellow-400'}`}>
                          {filteredInventory.reduce((acc, item) => acc + item.quantity, 0)}
                      </td>
                  </tr>
                  <tr>
                      <td colSpan={3} className="px-6 py-2 text-right font-bold text-slate-400 text-sm">PRECIO LOTE</td>
                      <td className="px-6 py-2 text-center font-bold text-white text-lg">
                          €{activeContainer?.price.toLocaleString()}
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