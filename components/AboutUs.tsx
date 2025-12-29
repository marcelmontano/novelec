
import React from 'react';
import { ShieldCheck, Globe, Users, Award, Building2, Landmark } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Award size={14} /> Autoridad en Importación
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Firma Española con <br />
              <span className="gradient-text">ADN Cubano</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
              Liderada por <span className="text-white font-bold">Luis Fluxá</span>, Novelec es una firma española con más de <span className="text-white font-bold">10 años de presencia ininterrumpida en Cuba</span>. No somos un comercializador ocasional; somos el enlace directo entre las fábricas más grandes del mundo y el mercado nacional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <Users className="text-cyan-400 mb-3" size={24} />
                <h4 className="text-white font-black text-sm uppercase mb-1">Equipo de Ingeniería</h4>
                <p className="text-slate-500 text-xs font-medium">Más de 10 ingenieros especialistas dedicados al sector estatal y privado.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <Landmark className="text-cyan-400 mb-3" size={24} />
                <h4 className="text-white font-black text-sm uppercase mb-1">Alianzas Estratégicas</h4>
                <p className="text-slate-500 text-xs font-medium">Colaboración directa con Cubaelectrónica para procesos de importación seguros.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <p className="text-emerald-400 text-xs font-black uppercase tracking-widest">
                Garantía Directa de Fábrica: Sin Intermediarios.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-[3rem] border border-slate-800 p-8 sm:p-12 shadow-3xl overflow-hidden group">
              {/* Overlay de marca */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="mb-12">
                  <div className="text-5xl font-black text-white mb-2">10+</div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Años Operando en Cuba</div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h5 className="text-white font-black uppercase text-xs tracking-widest">Presencia Europea</h5>
                      <p className="text-slate-500 text-[11px] font-bold">Oficinas centrales en España para gestión de pagos internacionales.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h5 className="text-white font-black uppercase text-xs tracking-widest">Infraestructura Real</h5>
                      <p className="text-slate-500 text-[11px] font-bold">Oficinas en el Náutico y stock físico verificado en Almacenes Tradex.</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-800">
                    <p className="text-[10px] text-slate-400 font-bold italic leading-relaxed">
                      "Nuestro compromiso es la seriedad y la transparencia. Buscamos socios comerciales de largo plazo que valoren la seguridad jurídica y el stock verificado."
                    </p>
                    <p className="text-white font-black text-[10px] uppercase mt-2">— Luis Fluxá, Director Novelec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
