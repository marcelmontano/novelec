
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { INVENTORY, CONTACT_DETAILS, CONTAINERS } from '../constants';
import { Sparkles, Send, Bot, User, MessageSquare, ShieldCheck, Zap, Info, Award } from 'lucide-react';

export const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { 
      role: 'ai', 
      text: '¡Hola! Soy el Asesor Experto de **Novelec**. Somos **proveedores directos** de **EcoFlow** y **Deye** en Cuba.\n\nConozco cada detalle de los contenedores en Almacenes Tradex. ¿Quieres saber sobre rentabilidad, garantía directa de fábrica o logística?' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Función para formatear el texto de la IA (negritas y saltos de línea)
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-black text-white">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const handleAsk = async (predefinedQuestion?: string) => {
    const question = predefinedQuestion || input;
    if (!question.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, text: question }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const context = `
        Eres el ASESOR EXPERTO de Novelec Cuba. IMPORTANTE: Novelec es PROVEEDOR DIRECTO de fábrica para las marcas EcoFlow y Deye. Esto significa mejores precios, stock original y garantía directa.
        
        Tu misión es convencer a inversores de comprar contenedores completos de equipos solares.
        
        INFORMACIÓN SOBRE NOVELEC:
        - Estatus: Proveedor Directo (Canal Mayorista Oficial).
        - Ubicación: Almacenes Tradex, La Habana (Régimen In-Bond).
        - Proceso: Los equipos están en Cuba pero NO nacionalizados. El comprador ahorra aranceles aduanales.
        - Pago: Transferencia bancaria (Exterior), USDT/Cripto. No efectivo local.
        - Contacto WhatsApp: +${CONTACT_DETAILS.whatsapp}.
        
        INVENTARIO DISPONIBLE:
        ${INVENTORY.map(i => `- ${i.modelName} (SKU: ${i.sku}): ${i.description}. Capacidad: ${i.specs.capacity}. Cantidad: ${i.quantity}`).join('\n')}
        
        OFERTAS DE CONTENEDOR:
        ${CONTAINERS.map(c => `- Contenedor ${c.brand}: €${c.price.toLocaleString()}. Incluye: ${c.features.join(', ')}`).join('\n')}

        REGLAS DE RESPUESTA:
        1. Sé profesional y experto. Enfatiza que somos "Proveedores Directos" para generar confianza.
        2. Usa negritas (**) para resaltar nombres de productos, precios o datos clave.
        3. Si preguntan por "ganancias", menciona el ROI superior al 90% debido a la compra directa.
        4. Siempre invita a contactar por WhatsApp (+${CONTACT_DETAILS.whatsapp}).
        5. Usa un lenguaje claro para el mercado cubano.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: context,
          temperature: 0.7,
        },
      });

      setMessages([...newMessages, { role: 'ai', text: response.text || 'He tenido un breve fallo técnico. ¿Podrías repetir la pregunta?' }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages([...newMessages, { role: 'ai', text: 'Lo siento, mi conexión con el servidor de Novelec se ha interrumpido. Por favor, contacta directamente vía WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "¿Son distribuidores oficiales?",
    "¿Qué garantía tienen los equipos?",
    "¿Diferencia entre EcoFlow y Deye?",
    "¿Cómo visito el almacén Tradex?",
    "¿Por qué es libre de aranceles?"
  ];

  return (
    <section id="ai-advisor" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black uppercase tracking-widest mb-4">
            <Sparkles size={16} /> Inteligencia Artificial Novelec
          </div>
          <p className="text-slate-400 text-lg">Consulte con nuestro experto sobre la ventaja competitiva de ser **Proveedor Directo**.</p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] shadow-3xl overflow-hidden flex flex-col h-[600px] relative">
          <div className="bg-slate-900 p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-900/40">
                <Bot className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-white font-black uppercase tracking-widest text-xs">Soporte Inteligente Novelec</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Canal Directo Activo</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
               <Award size={14} className="text-cyan-400" />
               <span className="text-[9px] font-black text-white uppercase tracking-widest">Official Partner</span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-800' : 'bg-cyan-600 shadow-md shadow-cyan-900/40'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-slate-400" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-slate-800 text-slate-200 rounded-tr-none border border-slate-700' 
                    : 'bg-slate-900 text-slate-300 border border-slate-800 rounded-tl-none'
                  }`}>
                    {formatText(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center bg-slate-900/50 p-4 rounded-2xl border border-slate-800/50">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Validando con Fábrica...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-4">
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAsk(q)}
                  className="text-[10px] font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleAsk(); }} className="relative flex items-center gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre garantía directa, equipos o logística..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white p-4 rounded-2xl shadow-xl shadow-cyan-900/20 transition-all active:scale-95 flex-shrink-0"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" /> Canal de Fábrica Oficial
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <Zap size={14} className="text-yellow-500" /> Sin Intermediarios
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <Info size={14} className="text-cyan-500" /> Garantía Directa Novelec
            </div>
        </div>
      </div>
    </section>
  );
};
