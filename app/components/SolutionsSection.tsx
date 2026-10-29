import React from 'react';
import { Check, Zap, Droplet, Activity, Home } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      title: 'Elétrica & Automação',
      icon: Zap,
      desc: 'Quadros de distribuição trifásicos, no-breaks, painéis solares, sistemas Lutron/Control4 e iluminação cênica.',
      bullets: ['Balanceamento de carga', 'Manutenção de geradores'],
    },
    {
      title: 'Hidráulica & Bombas',
      icon: Droplet,
      desc: 'Centrais de pressurização, aquecimento solar/gás, caixas d\'água de grande capacidade e drenagem de piscinas.',
      bullets: ['Caça-vazamento acústico', 'Filtros centrais de entrada'],
    },
    {
      title: 'Eletros de Embutir VIP',
      icon: Activity,
      desc: 'Fornos combinados, adegas climatizadas, cooktops de indução e trituradores de alta vazão.',
      bullets: ['Instalação técnica com garantia', 'Nivelamento e vedação perfeita'],
    },
    {
      title: 'Casas de Veraneio',
      icon: Home,
      desc: 'Check-up preventivo mensal para casas em condomínios de lazer e chácaras nobres para você chegar sem surpresas.',
      bullets: ['Teste de motores e bombas', 'Verificação de telhados e calhas'],
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f1fcf3]" id="solucoes">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#755a24]">Gestão Integral de Patrimônio</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#141e19]">Soluções Residenciais Completas</h2>
          <p className="text-base text-[#404a3b] leading-relaxed">
            Do suporte emergencial diário à manutenção preventiva planejada para mansões e coberturas duplex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div key={idx} className="p-7 rounded-2xl bg-[#e5f1e8] flex flex-col gap-4 border border-[#1c3524]/8 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#106e00] shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#141e19]">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#404a3b] leading-relaxed">
                  {s.desc}
                </p>
                <ul className="text-xs text-[#404a3b] space-y-2 pt-3 border-t border-[#dfebe2]">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#106e00] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
