import React from 'react';
import { Clock, CheckCircle, Shield, FileText, Award } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      title: 'Pontualidade Britânica',
      desc: 'Horário com hora marcada rigorosa, sem janelas vagas e sem esperas desnecessárias no seu dia.',
      icon: Clock,
    },
    {
      title: 'Preservação do Ambiente',
      desc: 'Uso de propés descartáveis, mantas protetoras para ferramentas e limpeza/aspiração completa pós-serviço.',
      icon: CheckCircle,
    },
    {
      title: 'Background Check Estrito',
      desc: 'Profissionais com antecedentes criminais validados trimestralmente e credenciamento fotográfico prévio enviado ao morador.',
      icon: Shield,
    },
    {
      title: 'Garantia Documentada',
      desc: 'Cobertura formal de 90 a 180 dias com Nota Fiscal eletrônica e laudo técnico detalhado em PDF.',
      icon: FileText,
    },
  ];

  return (
    <section className="w-full py-24 bg-[#ebf7ee]" id="padrao">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Media Pillar with HD Technician Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#dae5dd] relative border border-[#1c3524]/10">
              <img
                alt="Engenheiro técnico especializado com ferramentas em alta resolução 4K"
                className="w-full h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2048&q=90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#28332d]/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-2 shadow-md">
                <Award className="w-4 h-4 text-[#7edc65]" />
                <span>Engenharia &amp; Rigor Operacional</span>
              </div>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#755a24]">Protocolo Operacional 5 Estrelas</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#141e19]">
                O Padrão Goiás Assistência VIP
              </h2>
              <p className="text-base text-[#404a3b] leading-relaxed">
                Criamos uma experiência que respeita a privacidade da sua família e a harmonia estética da sua casa. Nada é deixado ao acaso.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3 p-6 rounded-2xl bg-white shadow-sm border border-[#1c3524]/8 hover:border-[#5cb846]/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#e5f1e8] flex items-center justify-center text-[#106e00]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-[#141e19]">{item.title}</h4>
                    <p className="text-xs text-[#404a3b] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
