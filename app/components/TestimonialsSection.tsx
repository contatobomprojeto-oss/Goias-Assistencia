import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "A pontualidade é fora da curva para Goiânia. O técnico chegou no minuto exato com propés, organizou as ferramentas sobre mantas e resolveu a pane elétrica da nossa adega sem nenhuma sujeira.",
      name: "Dra. Camila Bittencourt",
      location: "Alphaville Ipês",
    },
    {
      quote: "Fizemos a higienização completa dos 7 splits da casa e o ajuste dos armários da cozinha gourmet. Profissionais educados, discretos e que transmitem segurança para estarem dentro de casa.",
      name: "Marcelo Guimarães",
      location: "Aldeia do Vale",
    },
    {
      quote: "Acionamos o plantão num domingo de manhã devido a um vazamento no pressurizador. Em 40 minutos o engenheiro já estava na portaria do condomínio com a peça certa para substituição.",
      name: "Fernanda & Rodrigo S.",
      location: "Jardins Parigi",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f1fcf3]" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#755a24]">Confiança Consolidada</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-[#141e19]">
              O que dizem os condôminos
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[#755a24]">
            <div className="flex text-amber-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#141e19]">4.9/5 em mais de 1.400 residências atendidas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#ebf7ee] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow border border-[#1c3524]/8">
              <div className="flex text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#141e19] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[#e5f1e8] flex items-center justify-between">
                <div>
                  <p className="font-bold text-xs text-[#141e19]">{t.name}</p>
                  <p className="text-[11px] text-[#404a3b]">{t.location}</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#4a6451]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
