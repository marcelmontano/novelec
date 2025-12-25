
import React, { useState } from 'react';
import JSZip from 'jszip';
import { FileArchive, Download, FileText, FileSpreadsheet, ExternalLink, ShieldCheck, Loader2 } from 'lucide-react';
import { INVENTORY, CONTAINERS } from '../constants';

export const DownloadCenter: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCSV = (containerId: 'ecoflow' | 'deye') => {
    const items = INVENTORY.filter(i => i.containerId === containerId);
    const headers = ["Modelo", "SKU", "Categoría", "Cantidad", "Especificaciones", "Costo Unitario (Est)", "Capacidad"];
    const rows = items.map(item => [
      `"${item.modelName.replace(/"/g, '""')}"`,
      `"${item.sku}"`,
      item.category,
      item.quantity,
      `"${item.specs.capacity} ${item.specs.output || ''}"`.trim(),
      "", 
      `"${item.specs.capacity}"`
    ].join(","));
    return [headers.join(","), ...rows].join("\n");
  };

  const generateReport = () => {
    return `
NOVELEC CUBA - REPORTE DE INVERSIÓN (ENERGÍA RENOVABLE)
Fecha: ${new Date().toLocaleDateString()}
---------------------------------------------------------

1. RESUMEN DE OFERTA ECOFLOW:
- Inversión: €135,000
- ROI Promedio: 94.6%
- Ganancia Estimada: €130,000 (Avg)
- Equipos: 120 unidades de alta gama.

2. RESUMEN DE OFERTA DEYE:
- Inversión: €128,600
- ROI Promedio: 111.3%
- Ganancia Estimada: €143,100 (Avg)
- Equipos: 96 unidades de grado industrial.

3. LOGÍSTICA TRADEX:
- Ubicación: Almacenes Tradex, La Habana (In-Bond).
- Beneficio: Exento de aranceles aduanales.
- Proceso: Nacionalización inmediata tras la compra.

---------------------------------------------------------
Novelec Cuba - El Valor del Servicio
Contacto: +53 58183649
    `.trim();
  };

  const generateDatasheetList = () => {
    const links = INVENTORY
      .filter(i => i.datasheetUrl)
      .map(i => `<li><a href="${i.datasheetUrl}">${i.modelName} (Ficha Técnica)</a></li>`)
      .join('');
    
    return `
<!DOCTYPE html>
<html>
<head><title>Novelec - Fichas Técnicas</title><style>body{font-family:sans-serif;padding:40px;line-height:1.6;}a{color:#0891b2;text-decoration:none;}a:hover{text-decoration:underline;}</style></head>
<body>
<h1>Directorio de Documentación Técnica</h1>
<p>Haga clic en los enlaces para descargar las fichas oficiales:</p>
<ul>${links}</ul>
</body>
</html>
    `;
  };

  const handleZipDownload = async () => {
    setIsGenerating(true);
    try {
      const zip = new JSZip();
      
      // Añadir CSVs
      zip.file("Inventario_EcoFlow_Novelec.csv", "\uFEFF" + generateCSV('ecoflow'));
      zip.file("Inventario_Deye_Novelec.csv", "\uFEFF" + generateCSV('deye'));
      
      // Añadir Reporte
      zip.file("Analisis_Rentabilidad_Novelec.txt", generateReport());
      
      // Añadir Directorio de Fichas
      zip.file("Directorio_Fichas_Tecnicas.html", generateDatasheetList());
      
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.body.appendChild(document.createElement("a"));
      link.href = url;
      link.setAttribute("download", "Kit_Inversor_Novelec_Cuba.zip");
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating ZIP:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="downloads" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 border border-slate-800 p-8 sm:p-16 shadow-3xl">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                <FileArchive size={14} /> Centro de Recursos Novelec
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Todo lo que necesita para su <span className="text-cyan-400">Debida Diligencia</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                Descargue el paquete completo que incluye inventarios detallados en Excel, análisis financieros y enlaces a las fichas técnicas originales de los fabricantes en un solo archivo comprimido.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <FileSpreadsheet className="text-emerald-400" />, text: "Inventario Excel (CSV)" },
                  { icon: <FileText className="text-cyan-400" />, text: "Análisis de ROI" },
                  { icon: <ShieldCheck className="text-yellow-400" />, text: "Garantías y Soporte" },
                  { icon: <ExternalLink className="text-purple-400" />, text: "Fichas de Fabricante" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleZipDownload}
                disabled={isGenerating}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-cyan-900/40 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
              >
                {isGenerating ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <Download className="group-hover:translate-y-0.5 transition-transform" size={24} />
                )}
                {isGenerating ? "GENERANDO ARCHIVO..." : "DESCARGAR KIT COMPLETO (.ZIP)"}
              </button>
            </div>

            <div className="hidden lg:block relative">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Contenido del Paquete</span>
                    <span className="text-cyan-400 font-bold text-xs uppercase">Versión 1.2</span>
                </div>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                            <FileSpreadsheet size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Inventarios.zip</p>
                            <p className="text-xs text-slate-500 mt-1">Hojas de cálculo listas para importar a Excel o CRM.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 border border-slate-700">
                            <FileText size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Reporte_Rentabilidad.pdf</p>
                            <p className="text-xs text-slate-500 mt-1">Proyecciones de mercado para el mercado cubano 2025.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-yellow-400 border border-slate-700">
                            <ExternalLink size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Documentacion_Tecnica.html</p>
                            <p className="text-xs text-slate-500 mt-1">Enlaces directos a especificaciones UL y CE.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl text-center">
                    <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest leading-relaxed">
                        Compresión GZIP optimizada para descargas móviles lentas
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
