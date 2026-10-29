'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;
      
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const services = [
    {
      title: 'Higienização de Ar-Condicionado',
      tag: 'ESSENCIAL',
      tagBg: 'bg-[#ffdea4] text-[#261900]',
      desc: 'Desinfecção antibacteriana com laudo de qualidade do ar, desobstrução de drenos e ganho imediato de eficiência energética para Inverter e VRF.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Manutenção de Geladeiras',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Diagnóstico ágil para modelos French Door e Side by Side de marcas de alto padrão (LG, Samsung, Viking, Sub-Zero), com peças genuínas.',
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Ajuste de Móveis Planejados',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Regulagem milimétrica de dobradiças com amortecimento Blum, alinhamento de gavetões e manutenção de trilhos telescópicos e portas de correr.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Chuveiro Elétrico & Pressurização',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Instalação segura com conferência técnica de disjuntores, bitola de fiação e vedação de acabamento com acabamento limpo.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Reparos de Torneiras & Pias',
      tag: 'PREMIUM',
      tagBg: 'bg-[#ffdea4] text-[#261900]',
      desc: 'Troca de cartuchos cerâmicos monocomando importados, eliminação de microvazamentos e alinhamento de cubas e sifões gourmet.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Máquinas de Lavar e Secar',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Revisão eletromecânica sem acúmulo de sujeira no seu espaço de serviço. Calibração de bombas, motores direct-drive e esteiras de aquecimento.',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=85',
    },
    {
      title: 'Pequenas Pinturas, Retoques e Molduras',
      tag: 'DISCRIÇÃO TOTAL',
      tagBg: 'bg-[#ffdea4] text-[#261900]',
      desc: 'Recuperação de cantos, rodapés em poliestireno, furos de quadros e retoques localizados em tintas nobres (Coral Super Lavável, Suvinil Toque de Seda), com isolamento hermético do piso e móveis.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f1fcf3] overflow-hidden" id="novos-servicos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#755a24]">Atualização Contínua de Soluções</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#141e19]">
              Serviços Sob Medida para a sua Rotina
            </h2>
            <p className="text-base text-[#404a3b] leading-relaxed">
              Arraste para o lado ou navegue pelas soluções de assistência residencial com padrão 5 estrelas em Goiânia.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-4 py-2 rounded-full bg-[#ffdea4] text-[#261900] text-xs font-bold">
              Disponibilidade Imediata
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Rolar para esquerda"
                className="w-11 h-11 rounded-full bg-white shadow-md border border-[#1c3524]/10 flex items-center justify-center text-[#1c3524] hover:bg-[#e5f1e8] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Rolar para direita"
                className="w-11 h-11 rounded-full bg-white shadow-md border border-[#1c3524]/10 flex items-center justify-center text-[#1c3524] hover:bg-[#e5f1e8] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Auto Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 pt-2 px-1 focus:outline-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[340px] max-w-[360px] flex flex-col rounded-3xl bg-white shadow-[0_4px_24px_rgba(28,53,36,0.06)] hover:shadow-[0_12px_32px_rgba(28,53,36,0.12)] transition-all duration-300 group border border-[#1c3524]/8 overflow-hidden snap-start shrink-0"
            >
              {/* Illustrative Image taking top */}
              <div className="relative w-full h-44 overflow-hidden bg-[#e5f1e8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-sm ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-col p-6 flex-1">
                <h3 className="font-bold text-lg text-[#141e19] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#404a3b] leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-[#e5f1e8] flex items-center justify-between text-xs font-bold text-[#106e00]">
                  <span>Ver detalhes técnicos</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
