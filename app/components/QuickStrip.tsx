import React from 'react';
import { MapPin } from 'lucide-react';

export default function QuickStrip() {
  return (
    <section className="w-full bg-[#ebf7ee] py-6 border-y border-[#ccead1]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#106e00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#106e00]"></span>
          </span>
          <span className="text-xs font-bold text-[#141e19]">Plantão Executivo Ativo agora em Goiânia:</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#404a3b]">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4a6451]" /> Alphaville Flamboyant</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4a6451]" /> Aldeia do Vale</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4a6451]" /> Jardins Parigi &amp; Verona</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4a6451]" /> Setores Marista &amp; Bueno</span>
        </div>
      </div>
    </section>
  );
}
