
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { InventoryTable } from './components/InventoryTable';
import { ProductHighlights } from './components/ProductHighlights';
import { ProfitabilityAnalysis } from './components/ProfitabilityAnalysis';
import { DownloadCenter } from './components/DownloadCenter';
import { ContactFooter } from './components/ContactFooter';
import { PurchaseProcess } from './components/PurchaseProcess';
import { WholesaleFAQ } from './components/WholesaleFAQ';
import { WarehouseGallery } from './components/WarehouseGallery';
import { QuoteForm } from './components/QuoteForm';
import { AboutUs } from './components/AboutUs';
import { Menu, X } from 'lucide-react';

export const NovelecLogo = ({ className = "h-12" }: { className?: string }) => {
return (
<svg viewBox="0 0 280 100" className={`${className} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Novelec Logo">
<title>Novelec - El Valor del Servicio</title>
<path d="M10 20C10 14.4772 14.4772 10 20 10H65C70.5228 10 75 14.4772 75 20V80C75 85.5228 70.5228 90 65 90H20C14.4772 90 10 93.2843 10 85V15Z" fill="#004685" />
<rect x="28" y="32" width="10" height="38" fill="white" />
<path d="M28 42C28 36.4772 32.4772 32 38 32H50C55.5228 32 60 36.4772 60 42V70H50V42C50 40.8954 49.1046 40 48 40H40C38.8954 40 38 40.8954 38 42V70H28V42Z" fill="white" />
<text x="85" y="65" fill="#004685" style={{ font: 'bold 44px "Inter", sans-serif', letterSpacing: '-2.5px' }}>novelec</text>
<text x="88" y="85" fill="#9ca3af" style={{ font: '600 9px "Inter", sans-serif', letterSpacing: '3px', textTransform: 'uppercase' }}>EL VALOR DEL SERVICIO</text>
</svg>
);
};

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
<nav className="fixed w-full z-[100] bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center">
<div className="bg-white px-4 py-2 rounded-lg shadow-md flex-shrink-0 flex items-center justify-center min-w-[140px] h-14">
<NovelecLogo className="h-full" />
</div>
<div className="ml-6 hidden sm:block">
<span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
Portal Importador
</span>
</div>
</div>
<div className="hidden lg:flex items-center space-x-8">
<a href="#about" className="text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest">Firma</a>
<a href="#warehouse" className="text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest">Tradex</a>
<a href="#inventory" className="text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest">Packing List</a>
<a href="#quote-form" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/20">Cotizar</a>
</div>
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
{isMenuOpen ? <X size={32} /> : <Menu size={32} />}
</button>
</div>
</div>
{isMenuOpen && (
<div className="lg:hidden bg-slate-900 border-b border-slate-800 p-8 space-y-6 animate-fade-in-up">
<a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-white font-black uppercase text-sm tracking-widest">La Firma</a>
<a href="#warehouse" onClick={() => setIsMenuOpen(false)} className="block text-white font-black uppercase text-sm tracking-widest">Ver Tradex</a>
<a href="#inventory" onClick={() => setIsMenuOpen(false)} className="block text-white font-black uppercase text-sm tracking-widest">Inventario</a>
<a href="#quote-form" onClick={() => setIsMenuOpen(false)} className="block text-emerald-400 font-black uppercase text-sm tracking-widest">Solicitar Cotización</a>
</div>
)}
</nav>
);
};

const App = () => {
return (
<div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500/30">
<Navbar />
<main>
<Hero />
<AboutUs />
<WarehouseGallery />
<PurchaseProcess />
<InventoryTable />
<QuoteForm />
<WholesaleFAQ />
<DownloadCenter />
{/* Secciones movidas al final por solicitud del usuario */}
<ProductHighlights />
<ProfitabilityAnalysis />
</main>
<ContactFooter />
</div>
);
};

export default App;
