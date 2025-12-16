import React from 'react';
import { INVENTORY } from '../constants';
import { Battery, Zap, Cpu, Package } from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Generator': return <Zap className="h-5 w-5 text-yellow-400" />;
    case 'Battery': return <Battery className="h-5 w-5 text-green-400" />;
    case 'Inverter': return <Cpu className="h-5 w-5 text-blue-400" />;
    default: return <Package className="h-5 w-5 text-slate-400" />;
  }
};

export const InventoryTable: React.FC = () => {
  return (
    <section id="inventory" className="py-20 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Inventario del Contenedor</h2>
          <p className="mt-4 text-lg text-slate-400">Desglose detallado de las unidades incluidas en la venta.</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-slate-900/50">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-900">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Modelo</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Categoría</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Especificaciones Clave</th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-cyan-400 uppercase tracking-wider">Cantidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {INVENTORY.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-slate-800/30' : 'bg-transparent hover:bg-slate-800/50 transition-colors'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
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
                      <span className="inline-flex items-center rounded-md bg-cyan-400/10 px-3 py-1 text-lg font-bold text-cyan-400 ring-1 ring-inset ring-cyan-400/20">
                        {item.quantity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-900">
                  <tr>
                      <td colSpan={3} className="px-6 py-4 text-right font-bold text-white text-lg">TOTAL UNIDADES</td>
                      <td className="px-6 py-4 text-center font-bold text-cyan-400 text-xl">
                          {INVENTORY.reduce((acc, item) => acc + item.quantity, 0)}
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