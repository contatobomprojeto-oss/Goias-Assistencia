import React from 'react';
import { ChevronRight, Droplet, Wrench, Layers, Wind, Flame, Sparkles, Palette } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Chuveiro Elétrico & Pressurização',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Instalação segura com conferência técnica de disjuntores, bitola de fiação e vedação de acabamento com acabamento limpo.',
      icon: Droplet,
    },
    {
      title: 'Reparos de Torneiras & Pias',
      tag: 'PREMIUM',
      tagBg: 'bg-[#ffdea4] text-[#261900]',
      desc: 'Troca de cartuchos cerâmicos monocomando importados, eliminação de microvazamentos e alinhamento de cubas e sifões gourmet.',
      icon: Wrench,
    },
    {
      title: 'Ajuste de Móveis Planejados',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Regulagem milimétrica de dobradiças com amortecimento Blum, alinhamento de gavetões e manutenção de trilhos telescópicos e portas de correr.',
      icon: Layers,
    },
    {
      title: 'Higienização de Ar-Condicionado',
      tag: 'ESSENCIAL',
      tagBg: 'bg-[#ffdea4] text-[#261900]',
      desc: 'Desinfecção antibacteriana com laudo de qualidade do ar, desobstrução de drenos e ganho imediato de eficiência energética para Inverter e VRF.',
      icon: Wind,
    },
    {
      title: 'Manutenção de Geladeiras',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Diagnóstico ágil para modelos French Door e Side by Side de marcas de alto padrão (LG, Samsung, Viking, Sub-Zero), com peças genuínas.',
      icon: Flame,
    },
    {
      title: 'Máquinas de Lavar e Secar',
      tag: 'NOVO',
      tagBg: 'bg-[#99f97e] text-[#022100]',
      desc: 'Revisão eletromecânica sem acúmulo de sujeira no seu espaço de serviço. Calibração de bombas, motores direct-drive e esteiras de aquecimento.',
      icon: Sparkles,
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
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex flex-col p-7 rounded-2xl bg-white shadow-[0_4px_24px_rgba(28,53,36,0.04)] hover:shadow-[0_12px_32px_rgba(28,53,36,0.08)] transition-all duration-300 group border border-[#1c3524]/8 hover:border-[#5cb846]/40">
                <div className="flex items-center justify-between pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#ccead1] flex items-center justify-center text-[#072011] group-hover:bg-[#5cb846] group-hover:text-white transition-all group-hover:scale-105">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[#141e19] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#404a3b] leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-[#e5f1e8] flex items-center justify-between text-xs font-bold text-[#106e00]">
                  <span>Ver detalhes técnicos</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Large item 7: Pintura */}
          <div className="flex flex-col p-7 rounded-2xl bg-white shadow-[0_4px_24px_rgba(28,53,36,0.04)] hover:shadow-[0_12px_32px_rgba(28,53,36,0.08)] transition-all duration-300 group lg:col-span-2 border border-[#1c3524]/8 hover:border-[#5cb846]/40">
            <div className="flex items-center justify-between pb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#ccead1] flex items-center justify-center text-[#072011] group-hover:bg-[#5cb846] group-hover:text-white transition-all group-hover:scale-105">
                <Palette className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#ffdea4] text-[#261900] text-xs font-bold">DISCRIÇÃO TOTAL</span>
            </div>
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
    </section>
  );
}
