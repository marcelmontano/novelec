
import React from 'react';
import { Camera, MapPin, ShieldCheck, Box } from 'lucide-react';

const PHOTOS = [
  {
    url: "https://drive.google.com/thumbnail?id=1cmNAb_78Xvhn-q8HPiYAOfxoTCq171jF&sz=w1000",
    caption: "Pallet de baterías Deye verificado en Tradex"
  },
  {
    url: "https://drive.google.com/thumbnail?id=1zWF8OKisLvWuV-6lEN7aODGBnuxVTWrY&sz=w1000",
    caption: "Carga consolidada de inversores y baterías dentro del contenedor"
  },
  {
    url: "https://drive.google.com/thumbnail?id=1o53RVf4rQ3NU8jCmIU_7wGYd4Tt-COqt&sz=w1000",
    caption: "Plataforma de inspección con stock físico disponible"
  },
  {
    url: "https://drive.google.com/thumbnail?id=1vJGXVw1J3tbXpn6fQKy9CeqNvrnuh5HL&sz=w1000",
    caption: "Contenedor sellado y asegurado listo para despacho"
  }
];

export const WarehouseGallery: React.FC = () => {
  return (
    <section id="warehouse" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Camera size={14} /> Evidencia Real de Operación
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Stock Físico <span className="gradient-text">Verificable</span>
            </h2>
            <p className="text-slate-400 mt-6 text-lg font-medium">
              Transparencia total. Estas imágenes muestran la carga real que se encuentra actualmente en el <span className="text-white font-bold">Reparto Eléctrico, La Habana</span>. No trabajamos con inventario ficticio.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 px-6 py-4 rounded-2xl border border-slate-800 shadow-xl">
            <MapPin className="text-red-500" />
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-500 uppercase">Localización Tradex</p>
              <p className="text-sm font-bold text-white">Vía Blanca, La Habana</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTOS.map((photo, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] bg-slate-800 border border-slate-700/50 shadow-2xl">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-black text-xs uppercase tracking-tighter leading-tight">{photo.caption}</p>
              </div>
              <div className="absolute top-6 right-6">
                <div className="bg-emerald-500 text-white p-2 rounded-xl shadow-xl flex items-center gap-2">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden group-hover:block">Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900/50 p-8 sm:p-12 rounded-[3rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[2rem] bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
              <Box size={40} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xl tracking-tighter">¿Listo para una inspección física?</h4>
              <p className="text-slate-500 text-sm font-medium max-w-md">No compre a ciegas. Coordine una visita para que su equipo técnico verifique la calidad de los equipos antes de cualquier transacción.</p>
            </div>
          </div>
          <a 
            href={`https://wa.me/5358183649?text=Hola%20Novelec,%20he%20visto%20las%20fotos%20reales%20en%20la%20web%20y%20deseo%20agendar%20una%20visita%20mañana%20a%20Tradex.`}
            className="w-full md:w-auto bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Agendar Visita Tradex <Camera size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
