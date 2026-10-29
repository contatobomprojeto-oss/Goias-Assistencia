import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
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
      title: 'Ajuste de Móveis Planejados',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Regulagem milimétrica de dobradiças com amortecimento Blum, alinhamento de gavetões e manutenção de trilhos telescópicos e portas de correr.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
    },
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
      title: 'Máquinas de Lavar e Secar',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Revisão eletromecânica sem acúmulo de sujeira no seu espaço de serviço. Calibração de bombas, motores direct-drive e esteiras de aquecimento.',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=85',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f1fcf3]" id="novos-servicos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#755a24]">Atualização Contínua de Soluções</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#141e19]">
              Novos Serviços Sob Medida para a sua Rotina
            </h2>
            <p className="text-base text-[#404a3b] leading-relaxed">
              Atenção minuciosa aos detalhes que garantem o funcionamento impecável da sua residência, sem improvisos e com equipamentos especializados.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-full bg-[#ffdea4] text-[#261900] text-xs font-bold shadow-2xs">
              Disponibilidade Imediata em Goiânia
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div key={idx} className="flex flex-col rounded-3xl bg-white shadow-[0_4px_24px_rgba(28,53,36,0.06)] hover:shadow-[0_12px_32px_rgba(28,53,36,0.1)] transition-all duration-300 group border border-[#1c3524]/8 overflow-hidden">
              {/* Illustrative Image taking top ~1/3 */}
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

          {/* Large item 7: Pintura */}
          <div className="flex flex-col rounded-3xl bg-white shadow-[0_4px_24px_rgba(28,53,36,0.06)] hover:shadow-[0_12px_32px_rgba(28,53,36,0.1)] transition-all duration-300 group lg:col-span-2 border border-[#1c3524]/8 overflow-hidden">
            <div className="relative w-full h-44 overflow-hidden bg-[#e5f1e8]">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85"
                alt="Pequenas Pinturas e Retoques"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ffdea4] text-[#261900] shadow-sm">DISCRIÇÃO TOTAL</span>
              </div>
            </div>

            <div className="flex flex-col p-6 flex-1">
              <h3 className="font-bold text-lg text-[#141e19] mb-2">Pequenas Pinturas, Retoques e Molduras</h3>
              <p className="text-xs sm:text-sm text-[#404a3b] leading-relaxed mb-6">
                Recuperação de cantos, rodapés em poliestireno, furos de quadros e retoques localizados em tintas nobres (Coral Super Lavável, Suvinil Toque de Seda), com isolamento hermético do piso e móveis.
              </p>
              <div className="mt-auto pt-4 border-t border-[#e5f1e8] flex items-center justify-between text-xs font-bold text-[#106e00]">
                <span>Solicitar orçamento sem ruído</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
